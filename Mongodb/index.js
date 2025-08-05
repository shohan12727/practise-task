const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 3000;
const { MongoClient, ServerApiVersion } = require("mongodb");

const uri = "mongodb+srv://kingshohan:kingshohan@cluster0.alsn6h3.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB client setup
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true
  }
});

let usersCollection; // global variable to hold collection

// Connect and start the server
async function run() {
  try {
    await client.connect();
    const database = client.db('userdb');
    usersCollection = database.collection('users');

    // Ping for confirmation
    await client.db("admin").command({ ping: 1 });
    console.log("✅ Connected to MongoDB");
  } catch (err) {
    console.error("❌ MongoDB connection failed:", err);
  }
}

run();

// Express routes
app.get('/', (req, res) => {
  res.send("King Shohan");
});

app.post('/users', async (req, res) => {
  try {
    const newUser = req.body;
    console.log('📥 Received user:', newUser);
    const result = await usersCollection.insertOne(newUser);
    res.send(result);
  } catch (err) {
    console.error("❌ Error inserting user:", err);
    res.status(500).send({ error: "Failed to insert user" });
  }
});

app.listen(port, () => {
  console.log(`🚀 Server running on http://localhost:${port}`);
});
