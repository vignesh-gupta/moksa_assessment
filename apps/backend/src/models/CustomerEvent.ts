import mongoose from 'mongoose';

const CustomerEventSchema = new mongoose.Schema({
  store_id: Number,
  customers_in: Number,
  customers_out: Number,
  time_stamp: String
}, { timestamps: true });

export const CustomerEvent = mongoose.model('CustomerEvent', CustomerEventSchema);


// {store_id: 10, customers_in: 0, customers_out:1, time_stamp:10.13.15}