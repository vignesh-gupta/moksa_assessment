import express from "express";
import cors from "cors";
import { connectDB } from "./config/db";
import eventRoutes from "./routes/events";
import { consumeKafka } from "./kafka/consumer";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

connectDB();
consumeKafka();

app.use("/api", eventRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
