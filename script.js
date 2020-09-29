const myLibrary = [];
const form = document.getElementById('form');
const changeReadStatus = (book) => {
  book.read = !book.read;
};
const button = document.getElementById('button');

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = () => `${this.title} written by ${this.author}, ${this.pages} pages ${this.read ? 'read' : 'unread'}`;
}

const showBooks = () => {
  const ol = document.querySelector('ol');
  ol.innerHTML = '';

  myLibrary.forEach((book, index) => {
    let li = document.createElement('li');
    li.book = book;
    li.bookIndex = index;

    const p = document.createElement('p');
    p.innerHTML = li.book.info();
    li.appendChild(p);

    // create buttons to change the status and delete book
    const changeButton = document.createElement('button');
    const deleteButton = document.createElement('button');

    changeButton.innerHTML = 'Change Read status';
    deleteButton.innerHTML = 'Delete Book?';

    changeButton.classList.add('change-btn');
    deleteButton.classList.add('delete-btn');

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
};

const addBookToLibrary = () => {
  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  const pages = document.getElementById('pages').value;
  const read = document.getElementById('read').checked;

  myLibrary.push(new Book(title, author, pages, read));
  form.reset();
  form.style.display = 'none';
  button.style.display = 'block';
  showBooks();
};


const submitForm = (event) => {
  event.preventDefault();
};

form.addEventListener('submit', addBookToLibrary);
form.addEventListener('submit', submitForm);


button.onclick = () => {
  if (form.style.display !== 'none') {
    form.style.display = 'block';
    button.style.display = 'none';
  } else {
    form.style.display = 'block';
    button.style.display = 'none';
  }
};