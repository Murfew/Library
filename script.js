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

// Displays any and all books already in the array
function displayLibrary() {
  myLibray.forEach((book) => {
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
dialog.showModal();
