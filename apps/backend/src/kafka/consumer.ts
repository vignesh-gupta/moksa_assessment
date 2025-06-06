import { Kafka } from "kafkajs";

import { rawEventDataSchema } from "@moksa_asses/utils";

import { CustomerEvent } from "../models/CustomerEvent";
import { sendEventToClients } from "../services/sse";
import { convertKafkaTimestampToDate } from "../utils";

const kafka = new Kafka({
  brokers: [process.env.KAFKA_BROKER!],
});

const consumer = kafka.consumer({ groupId: "dashboard-group" });

export const consumeKafka = async () => {
  await consumer.connect();
  console.log("Connected to Kafka");

  await consumer.subscribe({
    topic: process.env.KAFKA_TOPIC!,
    fromBeginning: false,
  });
  console.log("Subscribed to topic:", process.env.KAFKA_TOPIC);

  await consumer.run({
    eachMessage: async ({ message }) => {
      try {
        const value = message.value?.toString();

        if (value) {
          const { success, data, error } = rawEventDataSchema.safeParse(
            JSON.parse(value)
          );

          if (!success) {
            console.error("Invalid message format:", error);
            return;
          }
          const event = new CustomerEvent({
            ...data,
            date_time_stamp: convertKafkaTimestampToDate(data.time_stamp),
          });
          await event.save();
          sendEventToClients(event);
        }
      } catch (error) {
        console.error("Error processing message:", error);
      }
    },
  });
};
