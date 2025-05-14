import mongoose from 'mongoose';


export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI!, {
      dbName: "moksa_assessment"
    });
    console.log('MongoDB Connected');
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};
