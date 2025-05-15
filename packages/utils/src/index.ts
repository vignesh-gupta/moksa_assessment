import { z } from "zod";

export const rawEventDataSchema = z.object({
  store_id: z.number(),
  customers_in: z.number(),
  customers_out: z.number(),
  time_stamp: z.string(),
});

export const eventDataSchema = z.object({
  store_id: z.number(),
  customers_in: z.number(),
  customers_out: z.number(),
  time_stamp: z.string(),
  date_time_stamp: z.string().datetime(),
  _id: z.string(),
});

export type EventData = z.infer<typeof eventDataSchema>;

export const customerHistoryDataSchema = z.object({
  store_id: z.number(),
  total_customers_in: z.number(),
  total_customers_out: z.number(),
  hour_start: z.string().datetime(),
});

export type CustomerHistoryData = z.infer<typeof customerHistoryDataSchema>;