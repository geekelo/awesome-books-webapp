class Book {
    constructor(title, author) {
      this.title = title;
      this.author = author;
    }
  }
  
  class BookList {
    constructor() {
      this.books = [];
      this.booksContainer = document.querySelector('.booksContainer');
      this.loadBooks();
      this.displayBooks();
      this.setupFormListener();
    }
  
    loadBooks() {
      const storedBooks = JSON.parse(localStorage.getItem('bookData'));
      if (storedBooks) {
        this.books = storedBooks.map(book => new Book(book.title, book.author));
      }
    }
  
    displayBooks() {
      this.booksContainer.innerHTML = '';
      this.books.forEach((book, index) => {
        this.createBookElement(book, index);
      });
    }
  
    createBookElement(book, index) {
      const bookWrap = document.createElement('div');
      bookWrap.className = 'bookwraps';
  
      const bookTitle = document.createElement('p');
      bookTitle.className = 'bookTitles';
      bookTitle.textContent = book.title;
  
      const bookAuthor = document.createElement('p');
      bookAuthor.className = 'bookAuthors';
      bookAuthor.textContent = book.author;
  
      const removeBtn = document.createElement('button');
      removeBtn.className = 'removeBtns';
      removeBtn.textContent = 'Remove';
      removeBtn.addEventListener('click', () => this.removeBook(index));
  
      const divider = document.createElement('hr');
  
      bookWrap.appendChild(bookTitle);
      bookWrap.appendChild(bookAuthor);
      bookWrap.appendChild(removeBtn);
      bookWrap.appendChild(divider);
  
      this.booksContainer.appendChild(bookWrap);
    }
  
    addBook(title, author) {
      const newBook = new Book(title, author);
      this.books.push(newBook);
      localStorage.setItem('bookData', JSON.stringify(this.books));
      this.displayBooks();
    }
  
    removeBook(index) {
      this.books.splice(index, 1);
      localStorage.setItem('bookData', JSON.stringify(this.books));
      this.displayBooks();
    }
  
    setupFormListener() {
      document.querySelector('form').addEventListener('submit', event => {
        event.preventDefault();
        const titleInput = document.querySelector('#title');
        const authorInput = document.querySelector('#author');
        const title = titleInput.value;
        const author = authorInput.value;
  
        if (title && author) {
          this.addBook(title, author);
          titleInput.value = '';
          authorInput.value = '';
        }
      });
    }
  }
  
  // Initialize the BookList object
  const bookList = new BookList();
  