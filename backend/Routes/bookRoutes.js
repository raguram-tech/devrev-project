const express = require("express");
const Book = require("../Models/bookModel");
const {
  createBook,
  getBook,
  getBooks,
} = require("../Controller/bookController");

const router = express.Router();

router.get("/", getBooks);

router.get("/:id", getBook);

router.post("/", createBook);

module.exports = router;
