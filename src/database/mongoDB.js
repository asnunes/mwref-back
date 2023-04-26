import { MongoClient } from "mongodb";
import dotenv from "dotenv";
dotenv.config();

const mongoClient = new MongoClient(process.env.DATABASE_URL);

try {
    await mongoClient.connect();
    console.log("MongoDB connected!");
} catch (error) {
    console.error(error);
}

export const db = mongoClient.db();
export const accounts = db.collection("accounts");
export const sessions = db.collection("sessions");
