const mongoose = require("mongoose");

// define Schema Class
const Schema = mongoose.Schema;

// Create a Schema object
const bookSchema = new Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  description: { type: String },
});

// Creates the collection called BookModel
const BookModel = mongoose.model("BookModel", bookSchema);
module.exports = BookModel;