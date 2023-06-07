//create constuctor for book properties
class Book {
  constructor(title, author){
    this.title = title;
    this.author = author;
  }
}

class BookRecord {
  constructor(){
    this.books = [];
    this.booksContainer = document.querySelector('.booksContainer');
    this.loadBook();
    this.displayBook();
    this.setFormEvent();
  }

  loadBook(){
    const storedBooks = JSON.parse(localStorage.getItem('bookData'));
    if (storedBooks){
    this.books = storedBooks.map((books) => new Book(books.title, books.author));
    }
  }

  removeBook(index){
    const storedBooks = JSON.parse(localStorage.getItem('bookData'));
    this.books = storedBooks.map((books) => new Book(books.title, books.author));
    this.books = this.books.filter(function(book, bookIndex){
      if (bookIndex !== index){
          return book;
      }
    });
    localStorage.setItem('bookData', JSON.stringify(this.books));
    this.displayBook();
  }

  createBook(book, index){
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

  displayBook(){
    this.booksContainer.innerHTML = '';
    this.books.forEach((book, index) => this.createBook(book, index));   
  }

  addBooks(title, author){
    const newBook = new Book(title, author);
    this.books.push(newBook);
    localStorage.setItem('bookData', JSON.stringify(this.books));
    this.displayBook();
  }

  setFormEvent(){
    document.querySelector('form').addEventListener('submit', (e) => {
        e.preventDefault();
        const titleInput = document.querySelector('#title');
        const authorInput = document.querySelector('#author');
        const title = titleInput.value;
        const author = authorInput.value;
        
        if (title && author){
            alert('ok');
            this.addBooks(title, author);
            titleInput.value = '';
            authorInput.value = '';
        }

    })
  }
}

const bookLIST = new BookRecord();