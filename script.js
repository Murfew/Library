const myLibray = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = () => {
    if (read === "yes") {
      return `${this.title} by ${this.author}, ${this.pages}, read`;
    } else {
      return `${this.title} by ${this.author}, ${this.pages}, not read yet`;
    }
  };
}

function addBookToLibrary() {
  let title = prompt("What is the book's title?");
  let author = prompt("Who is the book's author?");
  let pages = prompt("How many pages does the book have?");
  let read = prompt("Have you already read this book?");

  myLibray.push(new Book(title, author, pages, read));
}

