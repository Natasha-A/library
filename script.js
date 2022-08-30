let myLibrary = [
  new Book('To Kill a Mockingbird', 'Harper Lee', 295, "no"),
  new Book('Where the Crawdads Sing', 'Delia Owens', 368, "yes")
];

const pageContainer = document.querySelector(".books-catalog");

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;

  this.info = function () {
    let string = title + " by " + author + ", " + pages + " pages, " + read;
    return string;
  }
}

function addBookToLibrary() {
  const title = prompt("Enter title of book:");
  const author = prompt("Enter author of book: ");
  const pages = prompt("Enter number of pages: ")
  const read = prompt("Have you read the book before?");

  const book = new Book(title, author, pages, read);

  myLibrary.push(book);
}

function displayBooks(libraryArray) {
  for (book in libraryArray) {
    console.log(libraryArray[book].info())
  }


  let bookCard = document.createElement("div"); 
  bookCard.className = "book-card";
  bookCard.textContent = "Hello"
  pageContainer.appendChild(bookCard);


  let bookCard2 = document.createElement("div"); 
  bookCard2.className = "book-card";
  bookCard2.textContent = "Hello"
  pageContainer.appendChild(bookCard2);

  let bookCard3 = document.createElement("div"); 
  bookCard3.className = "book-card";
  bookCard3.textContent = "Hello"
  pageContainer.appendChild(bookCard3);

}


displayBooks(myLibrary);

//pageContainer.innerHTML = bookContainers;