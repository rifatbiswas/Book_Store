const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const cors = require('cors');

// Middleware
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('hello world');
});

const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const uri = "mongodb+srv://book-store:rifat100@cluster0.0yeftlx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    await client.connect();
    // Create Collection
    const bookcollections = client.db("BookInventory").collection("books");

    // Insert a book
    app.post("/upload-book", async (req, res) => {
      const data = req.body;
      const result = await bookcollections.insertOne(data);
      res.send(result);
    });

    // Get all books from database
    app.get("/all-books", async (req, res) => {
      const books = bookcollections.find();
      const result = await books.toArray();
      res.send(result);
    });

    // Update a book
    app.patch("/book/:id", async (req, res) => {
      const id = req.params.id;
      const updateBookData = req.body;
      const filter = { _id: new ObjectId(id) };
      const option = { upsert: true };

      const updateDoc = {
        $set: {
          ...updateBookData,
        },
      };
      const result = await bookcollections.updateOne(filter, updateDoc, option);
      res.send(result);
    });

    // Delete from database
    app.delete("/book/:id", async (req, res) => {
      const id = req.params.id;
      const filter = { _id: new ObjectId(id) };
      const result = await bookcollections.deleteOne(filter);
      res.send(result);
    });

    // Find books by category
    app.get("/books-by-category", async (req, res) => {
      const category = req.query.category; 
      const query = { category: category };
      const books = await bookcollections.find(query).toArray();
      res.send(books);
    });

    await client.db("admin").command({ ping: 1 });
    console.log("You successfully connected to MongoDB!");
  } finally {
    // await client.close();
  }
}

run().catch(console.dir);

app.listen(port, () => {
  console.log(`App is running on port ${port}`);
});
