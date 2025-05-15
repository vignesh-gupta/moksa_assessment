import { z } from "zod";

export const eventDataSchema = z.object({
  store_id: z.number(),
  customers_in: z.number(),
  customers_out: z.number(),
  time_stamp: z.string(),
  date_time_stamp: z.string().datetime(),
  _id: z.string(),
});


export type EventData = z.infer<typeof eventDataSchema>;