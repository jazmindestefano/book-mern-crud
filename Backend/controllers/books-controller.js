const Book = require("../model/Book");

const getAllBooks = async (req, res, next) => {
  let books;
  try {
    books = await Book.find();
  } catch (e) {
    console.log(e);
  }

  if (!books) {
    return res.status(404).json({ message: "No books found" });
  }
  return res.status(200).json({ books });
};

const getById = async (req, res, next) => {
  const id = req.params.id;
  let book;
  try {
    book = await Book.findById(id);
  } catch (e) {
    console.log(e);
  }

  if (!book) {
    return res.status(404).json({ message: "No book found" });
  }
  return res.status(200).json({ book });
};

const addBook = async (req, res, next) => {
  const { name, author, description, price, available } = req.body;
  let book;
  try {
    book = new Book({
      name,
      author,
      description,
      price,
      available,
    });
    await book.save();
  } catch (e) {
    console.log(e);
  }

  if (!book) {
    return res.status(500).json({ message: "Unable to add book" });
  }
  return res.status(201).json({ book });
};

const updateBook = async (req, res, next) => {
  const id = req.params.id;
  const { name, author, description, price, available } = req.body;
  let book;
  try {
    book = await Book.findByIdAndUpdate(id, {
      name,
      author,
      description,
      price,
      available,
    });
    book = await book.save();
  } catch (e) {
    console.log(e);
  }

  if (!book) {
    return res.status(500).json({ message: "Unable to update book" });
  }
  return res.status(200).json({ book });
};

const deleteBook = async (req, res, next) => {
  const id = req.params.id;
  let book;
  try {
    book = await Book.findByIdAndRemove(id);
  } catch (e) {
    console.log(e);
  }

  if (!book) {
    return res.status(404).json({ message: "Unable to delete book" });
  }

  return res.status(200).json({ message: "Book deleted" });
};

exports.getAllBooks = getAllBooks;
exports.getById = getById;
exports.addBook = addBook;
exports.updateBook = updateBook;
exports.deleteBook = deleteBook;
