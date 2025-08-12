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
const PORT = process.env.PORT || 3005;
const URI = process.env.MongogDBURI; // make sure this env exists in Vercel

// CORS: allow anything in dev; you can tighten with a specific origin
app.use(cors({ origin: process.env.CORS_ORIGIN || true }));
app.use(express.json());

// --- DB connection (reuse across invocations) ---
let isConnected = false;
async function connectToDB() {
  if (isConnected) return;
  if (!URI) {
    console.error("❌ Missing MongogDBURI env");
    throw new Error("Missing MongogDBURI env");
  }
  try {
    // If your URI already contains /Bookstore you can omit dbName below.
    await mongoose.connect(URI, {
      dbName: "Bookstore",
      serverSelectionTimeoutMS: 5000,
    });
    isConnected = true;
    console.log("✅ Connected to MongoDB");
  } catch (err) {
    console.error("❌ Mongo connect error:", err);
    throw err;
  }
}

// --- Routes ---
app.get("/", (_req, res) => res.send("OK"));
app.use("/book", bookRoute);
app.use("/user", userRoute);
app.use("/contact", contactRoute);

// -------------------------------------------------------------
// Local dev: run a real server
// -------------------------------------------------------------
if (!process.env.VERCEL) {
  // for local runs (node index.js / nodemon)
  connectToDB()
    .then(() => {
      app.listen(PORT, () => {
        console.log(`🚀 Local server listening on http://localhost:${PORT}`);
      });
    })
    .catch((err) => {
      console.error("❌ Failed to start local server:", err);
      process.exit(1);
    });
}

// -------------------------------------------------------------
// Vercel serverless: export a handler
// -------------------------------------------------------------
export default async function handler(req, res) {
  try {
    await connectToDB();
    return app(req, res);
  } catch (err) {
    console.error("❌ Handler error:", err);
    res.status(500).send("Database connection failed");
  }
}
