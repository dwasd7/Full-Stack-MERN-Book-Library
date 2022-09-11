const express = require("express");
const router = express.Router();
const Book = require("../model/Book");
const booksController = require("../controllers/books-controller");

router.get("/", booksController.getAllBooks);
router.post("/", booksController.addBook);
router.get("/:bookid", booksController.getById);
router.put("/:bookid", booksController.updateBook);
router.delete("/:bookid", booksController.deleteBook);

module.exports = router;