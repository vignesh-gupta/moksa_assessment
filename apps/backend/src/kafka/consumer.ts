import { Kafka } from "kafkajs";
import { CustomerEvent } from "../models/CustomerEvent";
import { sendEventToClients } from "../services/sse";

const kafka = new Kafka({
  brokers: [process.env.KAFKA_BROKER!],
});

const consumer = kafka.consumer({ groupId: "dashboard-group" });

export const consumeKafka = async () => {
  console.log("Connecting to Kafka...");

  await consumer.connect();

  console.log("Connected to Kafka");
  console.log("Subscribing to topic:", process.env.KAFKA_TOPIC);
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
          const parsed = JSON.parse(value);

          const event = new CustomerEvent({
            store_id: parsed.store_id,
            customers_in: parsed.customers_in,
            customers_out: parsed.customers_out,
            time_stamp: parsed.time_stamp,
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
