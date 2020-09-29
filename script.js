let myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title,
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = () => {
  	return `${this.title} written by ${this.author}, ${this.pages} ${this.read ? 'read' : 'unread'}`
  }

}
const changeReadStatus = function (book) {
    book.read = !book.read;
  };

function addBookToLibrary() {
  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  const pages = document.getElementById('pages').value;
  const read = document.getElementById('read').checked;

  myLibrary.push(new Book(title, author, pages, read))
  form.reset()
  showBooks();
}

const form = document.getElementById('form')

function submitForm (event){
	event.preventDefault()
}

form.addEventListener('submit', addBookToLibrary)
form.addEventListener('submit', submitForm)

function showBooks() {
  ol = document.querySelector("ol");
  ol.innerHTML = "";

  myLibrary.forEach((book, index) => {
    li = document.createElement("li");
    li.book = book;
    li.bookIndex = index;

    p = document.createElement("p");
    p.innerHTML = li.book.info();
    li.appendChild(p);

    // create buttons to change the status and delete book
    changeButton = document.createElement('button');
    deleteButton  = document.createElement('button')

    changeButton.innerHTML = 'Change Read status';
    deleteButton.innerHTML = 'Delete Book?';

    changeButton.classList.add('change-btn');
    deleteButton.classList.add('delete-btn')

    li.appendChild(changeButton);
    li.appendChild(deleteButton);

    changeButton.onclick = (self) => {
      li = self.target.parentElement;
      changeReadStatus(li.book);
      showBooks();
    };

    deleteButton.onclick = (self) => {
      li = self.target.parentElement;
      myLibrary.splice(index, 1);
      showBooks();
    };

    ol.appendChild(li);
  });
}

let button = document.getElementById('button');

button.onclick = function() {

    if (form.style.display !== 'none') {
        form.style.display = 'none';
    }
    else {
        form.style.display = 'block';
        button.style.display = 'none';
    }
};