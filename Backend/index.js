// Backend/index.js
import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import bookRoute from "./route/book.route.js";
import userRoute from "./route/user.route.js";
import contactRoute from "./route/contact.route.js";
import cors from "cors";

dotenv.config();
dotenv.config({ path: "./email.env" });

const app = express();
app.use(cors({ origin: process.env.CORS_ORIGIN || true }));
app.use(express.json());

const URI = process.env.MongogDBURI;

let isConnected = false;
async function connectToDB() {
  if (isConnected) return;
  if (!URI) {
    console.error("❌ Missing MongogDBURI env");
    throw new Error("Missing MongogDBURI env");
  }
  try {
    await mongoose.connect(URI);
    isConnected = true;
    console.log("✅ Connected to MongoDB");
  } catch (err) {
    console.error("❌ Mongo connect error:", err);
    throw err;
  }
}

app.get("/", (_, res) => res.send("OK"));
app.use("/book", bookRoute);
app.use("/user", userRoute);
app.use("/contact", contactRoute);

// No app.listen on Vercel
export default async function handler(req, res) {
  try {
    await connectToDB();
    return app(req, res);
  } catch (err) {
    res.status(500).send("Database connection failed");
  }
}
