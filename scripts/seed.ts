import dotenv from "dotenv";
import { MongoClient } from "mongodb";
import { recipes } from "../data/recipes";

dotenv.config({ path: ".env.local" });

const uri = process.env.MONGODB_URI;
const dbName = process.env.MONGODB_DB || "volume-maxxer-db";

if (!uri) {
  throw new Error("MONGODB_URI is missing");
}

const connectionString = uri;

async function main() {
  const client = new MongoClient(connectionString);

  try {
    await client.connect();

    const db = client.db(dbName);
    const collection = db.collection("recipes");

    await collection.deleteMany({});
    await collection.insertMany(recipes);

    console.log(`Seeded ${recipes.length} recipes into ${dbName}.recipes`);
  } finally {
    await client.close();
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
