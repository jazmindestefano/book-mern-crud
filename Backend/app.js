const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/book-routes");
const cors = require("cors");

const app = express();

// Middlewares
app.use(express.json());
app.use(cors());
app.use("/books", router); // localhost:5000/books

mongoose
  .connect(
    "mongodb+srv://admin:IG0axpmnSGu3Npg3@cluster0.a9hnh6c.mongodb.net/BookStore?retryWrites=true&w=majority"
  )
  .then(() => console.log("connected to db"))
  .then(() => {
    app.listen(5000);
  })
  .catch((err) => console.log(err));
