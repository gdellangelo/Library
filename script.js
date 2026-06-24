const addBookBtn = document.querySelector("#addBookBtn");
const cancelFormBtn = document.querySelector("#cancelFormBtn");
const submitFormBtn = document.querySelector("#submitFormBtn")

const overlay = document.querySelector(".overlay");
const form = document.querySelector("form");

const inputTitle = document.querySelector("#title");
const inputAuthor = document.querySelector("#author");
const inputPages = document.querySelector("#pages");
const inputRead = document.querySelector("#read");

const gridBox = document.querySelector(".grid-box");

const books = [];

function Book(name, author, pages, read) {
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.read = read;
};

function hideOverlay() {
    overlay.classList.add("hidden");
}

function showOverlay() {
    overlay.classList.remove("hidden");
}

addBookBtn.addEventListener("click", () => {
    showOverlay();
})

overlay.addEventListener("click", (event) => {
    if (event.target === overlay) {
        hideOverlay();
    }
});

cancelFormBtn.addEventListener("click", () => {
    hideOverlay();
});

function renderLibrary() {
    gridBox.textContent = "";

    books.forEach((element) => {
        const card = document.createElement("div");
        card.classList.add("card");

        const title = document.createElement("h1");
        title.textContent = `Title: ${element.name}`;
        card.appendChild(title);

        const author = document.createElement("p");
        author.textContent = `Author: ${element.author}`;
        card.appendChild(author);

        const pages = document.createElement("p");
        pages.textContent = `Pages: ${element.pages}`;
        card.appendChild(pages);

        const readed = document.createElement("p");
        readed.textContent = element.read ? "Already read" : "Not read yet";
        card.appendChild(readed)

        gridBox.appendChild(card);
    })
};

function newBook(name, author, pages, read) {
    const book = new Book(name, author, pages, read);
    books.push(book);
};

form.addEventListener("submit", (event) => {
    event.preventDefault();

    newBook(inputTitle.value, inputAuthor.value, inputPages.value, inputRead.checked);
    renderLibrary();
    hideOverlay();
    console.log(books)
});