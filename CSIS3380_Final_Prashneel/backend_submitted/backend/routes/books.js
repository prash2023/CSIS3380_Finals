const router = require('express').Router();
const Book = require('../models/booklist.model');

// Get all books
router.get('/', async (req, res) => {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Add a new book
router.post('/add', async (req, res) => {
  const { title, author, description } = req.body;

  try {
    const newBook = new Book({
      title,
      author,
      description,
    });

    await newBook.save();
    res.json('Book added!');
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Get a book by ID
router.get('/:id', async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    if (!book) throw new Error('Book not found');
    res.json(book);
  } catch (err) {
    res.status(404).json({ error: err.message });
  }
});

// Delete a book by ID
router.delete('/delete/:id', async (req, res) => {
  try {
    await Book.findByIdAndDelete(req.params.id);
    res.json('Book deleted.');
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Update a book by ID
router.post('/update/:id', async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    if (!book) throw new Error('Book not found');

    book.title = req.body.title;
    book.author = req.body.author;
    book.description = req.body.description;

    await book.save();
    res.json('Book updated!');
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
