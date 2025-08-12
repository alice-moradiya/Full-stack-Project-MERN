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
app.use(cors({ origin: process.env.CORS_ORIGIN || true })); // allow  frontend domain in prod
app.use(express.json());

const URI = process.env.MongogDBURI; 

let isConnected = false;
async function connectToDB() {
  if (isConnected) return;
  await mongoose.connect(URI);
  isConnected = true;
  console.log("Connected to MongoDB");
}

app.get("/", (_, res) => res.send("OK"));
app.use("/book", bookRoute);
app.use("/user", userRoute);
app.use("/contact", contactRoute);

export default async function handler(req, res) {
  await connectToDB();
  return app(req, res);
}
