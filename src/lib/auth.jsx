import dns from "node:dns";

// Suffix e 's' thakbe
dns.setServers(['8.8.8.8', '8.8.4.4']);


import { mongodbAdapter } from "@better-auth/mongo-adapter";
import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";



const client = new MongoClient(process.env.MONGODB_URL);
const db = client.db("dragon-news-database");


export const auth = betterAuth({
emailAndPassword: { 
    enabled: true, 
  }, 
  
   database: mongodbAdapter(db, {
    // Optional: if you don't provide a client, database transactions won't be enabled.
    client
  }),
});