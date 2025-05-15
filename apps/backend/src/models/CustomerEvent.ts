import mongoose from "mongoose";

const CustomerEventSchema = new mongoose.Schema(
  {
    store_id: Number,
    customers_in: Number,
    customers_out: Number,
    time_stamp: String,
    date_time_stamp: Date,
  },
  {
    timeseries: {
      timeField: "date_time_stamp", // Required for MongoDB time series
      metaField: "store_id", // Optional: helps optimize queries
      granularity: "minutes", // Choose based on your data frequency
    },
    versionKey: false,
  }
);

export const CustomerEvent = mongoose.model(
  "CustomerEvent",
  CustomerEventSchema
);
