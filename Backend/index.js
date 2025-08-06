import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import bookRoute from "./route/book.route.js";
import userRoute from "./route/user.route.js";
import contactRoute from "./route/contact.route.js";
import cors from "cors";

// Load ENV
dotenv.config();
dotenv.config({ path: './email.env' });

const app = express();
app.use(cors());
app.use(express.json());

const URI = process.env.MongogDBURI;

let cached = global.mongoose || { conn: null };

async function connectToDB() {
  if (cached.conn) return cached.conn;
  const conn = await mongoose.connect(URI);
  cached.conn = conn;
  global.mongoose = cached;
  return conn;
}

// Routes
app.use("/book", bookRoute);
app.use("/user", userRoute);
app.use("/contact", contactRoute);

// Vercel API-compatible handler
export default async function handler(req, res) {
  await connectToDB();
  return app(req, res);
}
