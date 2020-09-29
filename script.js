let myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title,
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = () => {
  	return `${this.title} written by ${this.author}, ${this.pages} ${this.read ? 'read' : 'unread'}`
  }
  this.changeReadStatus = function () {
    this.read = !this.read;
  };
}

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
  ul = document.querySelector("ul");
  ul.innerHTML = "";

  myLibrary.forEach((book) => {
    li = document.createElement("li");
    li.book = book;
    // li.arrayIndex = index;

    p = document.createElement("p");
    p.innerHTML = li.book.info();
    li.appendChild(p);
    ul.appendChild(li);
  });
}

function removeBookFromLibrary(index) {
	myLibrary.splice(index, 1);
	showBooks()
}

