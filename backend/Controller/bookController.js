const Book = require("../Models/bookModel");
const mongoose = require("mongoose");

const getBooks = async (req, res) => {
  const books = await Book.find({}).sort({ createdAt: -1 });

  res.status(200).json(books);
};

const getBook = async (req, res) => {
  const { id } = req.params;
  const book = await Book.findById(id);

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No Such Book" });
  }

  if (!book) {
    return res.status(404).json({ error: "No Such Book" });
  }
  res.status(200).json(book);
};

const createBook = async (req, res) => {
  const { title, author, subject, publishDate } = req.body;
  try {
    const books = await Book.create({ title, author, subject, publishDate });
    res.status(200).json(books);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

module.exports = { createBook, getBook, getBooks };
