const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/book-routes");
const cors = require("cors");

const app = express();

const MONGO_DB =
  "mongodb+srv://admin:IG0axpmnSGu3Npg3@cluster0.a9hnh6c.mongodb.net/BookStore?retryWrites=true&w=majority";

// Middlewares
app.use(express.json());
app.use(
  cors({
    origin: [
      "http://localhost:5000",
      "https://book-mern-crud-backend.onrender.com",
    ],
  })
);
app.use("/books", router); // localhost:5000/books

mongoose
  .connect(MONGO_DB)
  .then(() => console.log("connected to db"))
  .then(() => {
    app.listen(5000);
  })
  .catch((err) => console.log(err));
