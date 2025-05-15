import { connectDB } from "../config/db";

const sampleCustomerEvents = [
  {
    store_id: 5,
    customers_in: 2,
    customers_out: 1,
    time_stamp: "08.00.03",
    date_time_stamp: new Date("2025-05-15T08:00:03Z"),
  },
  {
    store_id: 5,
    customers_in: 3,
    customers_out: 0,
    time_stamp: "08.12.45",
    date_time_stamp: new Date("2025-05-15T08:12:45Z"),
  },
  {
    store_id: 5,
    customers_in: 1,
    customers_out: 2,
    time_stamp: "08.25.10",
    date_time_stamp: new Date("2025-05-15T08:25:10Z"),
  },
  {
    store_id: 5,
    customers_in: 4,
    customers_out: 1,
    time_stamp: "08.37.22",
    date_time_stamp: new Date("2025-05-15T08:37:22Z"),
  },
  {
    store_id: 5,
    customers_in: 2,
    customers_out: 0,
    time_stamp: "08.45.59",
    date_time_stamp: new Date("2025-05-15T08:45:59Z"),
  },

  {
    store_id: 5,
    customers_in: 0,
    customers_out: 1,
    time_stamp: "09.00.01",
    date_time_stamp: new Date("2025-05-15T09:00:01Z"),
  },
  {
    store_id: 5,
    customers_in: 5,
    customers_out: 2,
    time_stamp: "09.10.13",
    date_time_stamp: new Date("2025-05-15T09:10:13Z"),
  },
  {
    store_id: 5,
    customers_in: 3,
    customers_out: 1,
    time_stamp: "09.22.35",
    date_time_stamp: new Date("2025-05-15T09:22:35Z"),
  },
  {
    store_id: 5,
    customers_in: 4,
    customers_out: 0,
    time_stamp: "09.36.50",
    date_time_stamp: new Date("2025-05-15T09:36:50Z"),
  },
  {
    store_id: 5,
    customers_in: 2,
    customers_out: 3,
    time_stamp: "09.49.10",
    date_time_stamp: new Date("2025-05-15T09:49:10Z"),
  },

  {
    store_id: 5,
    customers_in: 1,
    customers_out: 1,
    time_stamp: "10.01.15",
    date_time_stamp: new Date("2025-05-15T10:01:15Z"),
  },
  {
    store_id: 5,
    customers_in: 2,
    customers_out: 1,
    time_stamp: "10.13.28",
    date_time_stamp: new Date("2025-05-15T10:13:28Z"),
  },
  {
    store_id: 5,
    customers_in: 3,
    customers_out: 2,
    time_stamp: "10.25.42",
    date_time_stamp: new Date("2025-05-15T10:25:42Z"),
  },
  {
    store_id: 5,
    customers_in: 0,
    customers_out: 1,
    time_stamp: "10.36.04",
    date_time_stamp: new Date("2025-05-15T10:36:04Z"),
  },
  {
    store_id: 5,
    customers_in: 2,
    customers_out: 0,
    time_stamp: "10.47.39",
    date_time_stamp: new Date("2025-05-15T10:47:39Z"),
  },

  {
    store_id: 5,
    customers_in: 1,
    customers_out: 1,
    time_stamp: "11.03.12",
    date_time_stamp: new Date("2025-05-15T11:03:12Z"),
  },
  {
    store_id: 5,
    customers_in: 4,
    customers_out: 1,
    time_stamp: "11.15.25",
    date_time_stamp: new Date("2025-05-15T11:15:25Z"),
  },
  {
    store_id: 5,
    customers_in: 2,
    customers_out: 0,
    time_stamp: "11.29.33",
    date_time_stamp: new Date("2025-05-15T11:29:33Z"),
  },
  {
    store_id: 5,
    customers_in: 3,
    customers_out: 2,
    time_stamp: "11.42.17",
    date_time_stamp: new Date("2025-05-15T11:42:17Z"),
  },
  {
    store_id: 5,
    customers_in: 0,
    customers_out: 1,
    time_stamp: "11.55.40",
    date_time_stamp: new Date("2025-05-15T11:55:40Z"),
  },

  {
    store_id: 5,
    customers_in: 2,
    customers_out: 0,
    time_stamp: "12.05.55",
    date_time_stamp: new Date("2025-05-15T12:05:55Z"),
  },
  {
    store_id: 5,
    customers_in: 3,
    customers_out: 2,
    time_stamp: "12.17.21",
    date_time_stamp: new Date("2025-05-15T12:17:21Z"),
  },
  {
    store_id: 5,
    customers_in: 1,
    customers_out: 1,
    time_stamp: "12.30.08",
    date_time_stamp: new Date("2025-05-15T12:30:08Z"),
  },
  {
    store_id: 5,
    customers_in: 5,
    customers_out: 0,
    time_stamp: "12.42.33",
    date_time_stamp: new Date("2025-05-15T12:42:33Z"),
  },
  {
    store_id: 5,
    customers_in: 2,
    customers_out: 1,
    time_stamp: "12.56.47",
    date_time_stamp: new Date("2025-05-15T12:56:47Z"),
  },

  {
    store_id: 5,
    customers_in: 1,
    customers_out: 1,
    time_stamp: "13.10.11",
    date_time_stamp: new Date("2025-05-15T13:10:11Z"),
  },
  {
    store_id: 5,
    customers_in: 4,
    customers_out: 0,
    time_stamp: "13.24.29",
    date_time_stamp: new Date("2025-05-15T13:24:29Z"),
  },
  {
    store_id: 5,
    customers_in: 2,
    customers_out: 1,
    time_stamp: "13.37.53",
    date_time_stamp: new Date("2025-05-15T13:37:53Z"),
  },
  {
    store_id: 5,
    customers_in: 3,
    customers_out: 2,
    time_stamp: "13.50.16",
    date_time_stamp: new Date("2025-05-15T13:50:16Z"),
  },
  {
    store_id: 5,
    customers_in: 0,
    customers_out: 1,
    time_stamp: "14.03.07",
    date_time_stamp: new Date("2025-05-15T14:03:07Z"),
  },
];

async function run() {
  await connectDB();

  const CustomerEvent = (await import("../models/CustomerEvent")).CustomerEvent;

  await CustomerEvent.insertMany(sampleCustomerEvents);

  console.log("Sample data inserted successfully");
  process.exit(0);
}

run().catch((error) => {
  console.error("Error inserting sample data:", error);
  process.exit(1);
});
