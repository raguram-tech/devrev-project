const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const bookSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  subject: {
    type: String,
    required: true,
  },
  publishDate: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("Book", bookSchema);
