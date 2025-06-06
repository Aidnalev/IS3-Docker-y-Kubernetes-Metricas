import { MongoClient } from "mongodb";
import dotenv from "dotenv";
dotenv.config();

const connectionString = process.env.ATLAS_URI || "";

const client = new MongoClient(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  tls: true,
});

let conn;
try {
  conn = await client.connect();
} catch (e) {
  console.error("❌ Error al conectar con MongoDB Atlas:", e);
}

let db = conn?.db("sample_training");

export default db;

