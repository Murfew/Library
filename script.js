const myLibray = [];

// Book contructor
function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = () => {
    if (read === "Yes") {
      return `${this.title} by ${this.author}, ${this.pages}, read`;
    } else {
      return `${this.title} by ${this.author}, ${this.pages}, not read yet`;
    }
  };
}

Book.prototype.setInProgress = function () {
  this.read = "In Progress";
};

Book.prototype.setRead = function () {
  this.read = "Yes";
};

Book.prototype.setNotRead = function () {
  this.read = "No";
};

function addNewBookToDOM(book, index) {
  const libraryContainer = document.querySelector(".library");

  const bookContainer = document.createElement("div");
  const bookTitle = document.createElement("div");
  const bookAuthor = document.createElement("div");
  const bookPages = document.createElement("div");
  const bookRead = document.createElement("div");
  const bookButtons = document.createElement("div");
  const buttonsCheck = document.createElement("span");
  const buttonsCached = document.createElement("span");
  const buttonsDelete = document.createElement("span");
  const buttonsClose = document.createElement("span");

  bookContainer.classList.add("book");
  bookTitle.classList.add("title");
  bookAuthor.classList.add("author");
  bookPages.classList.add("pages");
  bookRead.classList.add("read");
  bookButtons.classList.add("buttons");
  buttonsCheck.classList.add("material-symbols-outlined", "check");
  buttonsCached.classList.add("material-symbols-outlined", "cached");
  buttonsDelete.classList.add("material-symbols-outlined", "delete");
  buttonsClose.classList.add("material-symbols-outlined", "close");

  bookContainer.dataset.index = index;

  bookTitle.textContent = book.title;
  bookAuthor.textContent = "by " + book.author;
  bookPages.textContent = book.pages + " pages";
  bookRead.textContent = "Read: " + book.read;
  buttonsCheck.textContent = "check";
  buttonsCached.textContent = "cached";
  buttonsDelete.textContent = "delete";
  buttonsClose.textContent = "close";

  bookContainer.appendChild(bookTitle);
  bookContainer.appendChild(bookAuthor);
  bookContainer.appendChild(bookPages);
  bookContainer.appendChild(bookRead);

  bookButtons.appendChild(buttonsCheck);
  bookButtons.appendChild(buttonsCached);
  bookButtons.appendChild(buttonsClose);
  bookButtons.appendChild(buttonsDelete);

  bookContainer.appendChild(bookButtons);

  libraryContainer.appendChild(bookContainer);
}

// Displays any and all books already in the array
function displayLibrary() {
  myLibray.forEach((book) => {
    addNewBookToDOM(book, myLibray.indexOf(book));
  });
}

// Initial data
myLibray.push(new Book("Financial Peace Revisited", "Dave Ramsey", 319, "No"));
myLibray.push(
  new Book("The 48 Laws of Power", "Robert Greene", 452, "In Progress")
);

// Tells the program to display the books in the array as soon as the page is loaded
window.onload = displayLibrary();

const dialog = document.querySelector("dialog");
const addBookButton = document.querySelector(".add-book");
const confirmButton = document.querySelector(".confirm-button");
const cancelButton = document.querySelector(".cancel-button");

addBookButton.addEventListener("click", () => {
  dialog.showModal();
});

dialog.addEventListener("close", () => {
  if (dialog.returnValue === "default") {
    const newBookTitle = document.getElementById("title").value;
    const newBookAuthor = document.getElementById("author").value;
    const newBookPages = document.getElementById("pages").value;
    const newBookRead = document.getElementById("read").value;

    let newBook = new Book(
      newBookTitle,
      newBookAuthor,
      newBookPages,
      newBookRead
    );

    myLibray.push(newBook);
    addNewBookToDOM(newBook, myLibray.indexOf(book));
  }
});

confirmButton.addEventListener("click", (event) => {
  event.preventDefault();
  dialog.close(confirmButton.value);
});

cancelButton.addEventListener("click", () => {
  dialog.close();
});

const deleteButtons = document.querySelectorAll(".delete");
deleteButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const bookContainer = button.parentNode.parentNode;
    delete myLibray[bookContainer.dataset.index];
    bookContainer.parentNode.removeChild(bookContainer);
  });
});

const readButtons = document.querySelectorAll(".check");
readButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const bookContainer = button.parentNode.parentNode;
    myLibray[bookContainer.dataset.index].setRead();
    button.parentNode.previousSibling.textContent = "Read: Yes";
  });
});

const notReadButtons = document.querySelectorAll(".close");
notReadButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const bookContainer = button.parentNode.parentNode;
    myLibray[bookContainer.dataset.index].setNotRead();
    button.parentNode.previousSibling.textContent = "Read: No";
  });
});

const inProgressButtons = document.querySelectorAll(".cached");
inProgressButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const bookContainer = button.parentNode.parentNode;
    myLibray[bookContainer.dataset.index].setInProgress();
    button.parentNode.previousSibling.textContent = "Read: In Progress";
  });
});
