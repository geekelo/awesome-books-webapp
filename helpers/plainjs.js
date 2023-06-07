
let bookList;
// DISPLAY EXISTING BOOKS ONLOAD AND
//SET THE BOOKLIST TO BOOKS IN STORAGE IF STORAGE IS NOT EMPTY
const books = JSON.parse(localStorage.getItem('bookData'));
if (books === null) {
    bookList = [];
}
else {
    bookList = books;
    for (let index = 0; index < books.length; index++){  
        createBook(index);
      }
}


// CREATE BOOK TEMPLATE
function createBook(num){
const books = JSON.parse(localStorage.getItem('bookData'));
booksContainer = document.querySelector('.booksContainer');

const bookWrap = document.createElement('div');
bookWrap.className = "bookwraps";

const bookTitle = document.createElement('p');
bookTitle.className = "bookTitles";
bookTitle.textContent = books[num].booktitle;

const bookAuthor = document.createElement('p');
bookAuthor.className = "bookAuthors";
bookAuthor.textContent = books[num].bookauthor;

const removeBtn = document.createElement('button');
removeBtn.className = "removeBtns";
removeBtn.textContent = "Remove";
removeBtn.setAttribute('onclick', 'removeBook(' + num + ')');

const divider = document.createElement('hr');

bookWrap.innerHTML +=  bookTitle.outerHTML + bookAuthor.innerHTML + removeBtn.outerHTML + divider.outerHTML;
booksContainer.innerHTML += bookWrap.outerHTML;
}



function displayBook(){
    const books = JSON.parse(localStorage.getItem('bookData'));
    createBook(books.length - 1);
}

function removeBook(position){
    const books = JSON.parse(localStorage.getItem('bookData'));
    bookList = books.filter( function(item, itemIndex){

    if (itemIndex !== position){
        return item;
    }})
   
    localStorage.setItem('bookData', JSON.stringify(bookList));
    document.querySelectorAll('.bookwraps').forEach(e => e.remove());
    for (let index = 0; index < books.length; index++){  
        createBook(index);
      }
}

// ADD BOOK

function setStorage(e){
    e.preventDefault();
    const newBook = {
    booktitle: document.querySelector('#title').value,
    bookauthor: document.querySelector('#author').value
}
bookList.push(newBook);
localStorage.setItem('bookData', JSON.stringify(bookList));
displayBook();
document.querySelector('#title').value ='',
document.querySelector('#author').value=''
}

document.querySelector('form').addEventListener('submit', setStorage);

