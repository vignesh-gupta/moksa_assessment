import { Router } from 'express';
import { addClient } from '../services/sse';
import { CustomerEvent } from '../models/CustomerEvent';

const router = Router();

// Real-time updates
router.get('/stream', (req, res) => {
  addClient(req,res);
});

// History for last 24 hours (grouped by hour)
router.get('/history', async (req, res) => {
  const since = new Date(Date.now() - 24 * 60 * 60 * 1000);

  const events = await CustomerEvent.aggregate([
    { $match: { createdAt: { $gte: since } } },
    {
      $group: {
        _id: {
          hour: { $hour: '$createdAt' },
          store_id: '$store_id'
        },
        total_in: { $sum: '$customers_in' },
        total_out: { $sum: '$customers_out' }
      }
    },
    { $sort: { '_id.hour': 1 } }
  ]);

  res.json(events);
});

export default router;
