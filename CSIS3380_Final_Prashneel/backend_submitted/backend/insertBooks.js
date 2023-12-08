const mongoose = require('mongoose');
const BookModel = require('./models/booklist.model'); // Adjust the path if needed
const booksData = require('./data/books.json'); // Adjust the path if needed

// Connect to the MongoDB database
mongoose.connect('mongodb://localhost:27017/BookList', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

const connection = mongoose.connection;

connection.once('open', async () => {
  try {
    // Insert each book from the JSON data into the database
    for (const bookData of booksData.books) {
      const { title, author, description } = bookData;
      const newBook = new BookModel({ title, author, description });
      await newBook.save();
      console.log(`Inserted book: ${title}`);
    }

    console.log('All books inserted successfully.');
    connection.close();
  } catch (error) {
    console.error('Error inserting books:', error);
    connection.close();
  }
});