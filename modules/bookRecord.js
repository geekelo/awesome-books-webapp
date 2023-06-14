// bookRecord.js

import { Book } from "./book.js";
import { checkStorage } from "./noBookessage.js";

export class BookRecord {
  constructor() {
    this.books = [];
    this.booksContainer = document.querySelector('.booksContainer');
    this.nextCheckRun = new checkStorage();
    this.loadBook();
    this.displayBook();
    this.setFormEvent();
  }

  // Load books from localStorage
  loadBook() {
    const storedBooks = JSON.parse(localStorage.getItem('bookData'));
    if (storedBooks) {
      this.books = storedBooks.map((books) => new Book(books.title, books.author));
    }
  }

  // Remove a book from the list
  removeBook(index) {
    const storedBooks = JSON.parse(localStorage.getItem('bookData'));
    this.books = storedBooks.map((books) => new Book(books.title, books.author));
    this.books = this.books.filter(function (book, bookIndex) {
      if (bookIndex !== index){
        return book;
      }
    });
    
    document.querySelectorAll('.removeBtns')[index].textContent = 'Deleted!';
    setTimeout(() => {
      localStorage.setItem('bookData', JSON.stringify(this.books));
      this.displayBook();
    }, 2000);
      
  }

  // Create book HTML elements and add them to the container
  createBook(book, index) {
    const bookWrap = document.createElement('div');
    bookWrap.className = "bookwraps";

    const bookTitle = document.createElement('p');
    bookTitle.className = "bookTitles";
    bookTitle.textContent = book.title;

    const bookAuthor = document.createElement('p');
    bookAuthor.className = "bookAuthors";
    bookAuthor.textContent = book.author;

    const removeBtn = document.createElement('button');
    removeBtn.className = "removeBtns";
    removeBtn.textContent = "Remove";
    removeBtn.addEventListener('click', () => {
      this.removeBook(index);
    });

    const divider = document.createElement('hr');

    bookWrap.appendChild(bookTitle);
    bookWrap.appendChild(bookAuthor);
    bookWrap.appendChild(removeBtn);
    bookWrap.appendChild(divider);

    this.booksContainer.appendChild(bookWrap);
  }

  // Display all the books in the container
  displayBook() {
    this.booksContainer.innerHTML = '';

    // check if storage is empty to display or hide no book message
    this.nextCheckRun.runCheck();

      // creates book for each array item
    this.books.forEach((book, index) => this.createBook(book, index));
  }

  // Add a new book to the list
  addBooks(title, author) {
    const newBook = new Book(title, author);
    this.books.push(newBook);
    localStorage.setItem('bookData', JSON.stringify(this.books));
    this.displayBook();
  }

  // Set event listener for the form submission
  setFormEvent() {
    document.querySelector('form').addEventListener('submit', (e) => {
      e.preventDefault();
      const titleInput = document.querySelector('#title');
      const authorInput = document.querySelector('#author');
      const title = titleInput.value;
      const author = authorInput.value;

      if (title && author) {
        this.addBooks(title, author);
        titleInput.value = '';
        authorInput.value = ''; 
      }
    });
  }
}
