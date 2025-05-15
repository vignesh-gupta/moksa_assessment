import { Router } from "express";
import { addClient } from "../services/sse";
import { CustomerEvent } from "../models/CustomerEvent";

const router = Router();

// Real-time updates
router.get("/stream", (req, res) => {
  addClient(req, res);
});

// History for last 24 hours (grouped by hour)
router.get("/history", async (req, res) => {
  const result = await CustomerEvent.aggregate([
    {
      $match: {
        date_time_stamp: {
          $gte: new Date(Date.now() - 24 * 60 * 60 * 1000), // last 24 hours
        },
      },
    },
    {
      $addFields: {
        hour_start: {
          $dateTrunc: {
            date: "$date_time_stamp",
            unit: "hour",
            timezone: "Asia/Kolkata",
          },
        },
      },
    },
    {
      $group: {
        _id: {
          store_id: "$store_id",
          hour_start: "$hour_start",
        },
        total_customers_in: { $sum: "$customers_in" },
        total_customers_out: { $sum: "$customers_out" },
      },
    },
    {
      $sort: {
        "_id.hour_start": -1, // Latest hour at top
      },
    },
    {
      $project: {
        _id: 0,
        store_id: "$_id.store_id",
        hour_start: "$_id.hour_start",
        total_customers_in: 1,
        total_customers_out: 1,
      },
    },
  ]);

  res.json(result);
});

export default router;
