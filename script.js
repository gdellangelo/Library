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
    this.id = crypto.randomUUID();
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.read = read;
};

Book.prototype.toggleRead = function () {
    this.read = !this.read;
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

        card.dataset.id = element.id;

        const title = document.createElement("h1");
        title.textContent = `${element.name}`;
        card.appendChild(title);

        const author = document.createElement("p");
        author.textContent = `Author: ${element.author}`;
        card.appendChild(author);

        const pages = document.createElement("p");
        pages.textContent = `Pages: ${element.pages}`;
        card.appendChild(pages);

        const readed = document.createElement("p");
        readed.textContent = element.read ? "Read" : "Not read";
        card.appendChild(readed)

        const buttonBoxCard = document.createElement("div");
        buttonBoxCard.classList.add("buttonBoxCard");
        card.appendChild(buttonBoxCard);

        const removeCardBtn = document.createElement("button");
        removeCardBtn.textContent = "Remove";
        removeCardBtn.classList.add("removeCardButton");

        const toggleReadbtn = document.createElement("button");
        toggleReadbtn.textContent = "Read";

        toggleReadbtn.addEventListener("click", () => {
            const bookId = card.dataset.id;

            const book = books.find((element) => element.id === bookId);

            if (book) {
                book.toggleRead();
            }

            renderLibrary();
        });

        removeCardBtn.addEventListener("click", () => {
            const bookId = card.dataset.id;

            const bookIndex = books.findIndex((element) => element.id === bookId);

            if (bookIndex !== -1) {
                books.splice(bookIndex, 1);
            }

            renderLibrary();
        });

        buttonBoxCard.appendChild(toggleReadbtn);

        buttonBoxCard.appendChild(removeCardBtn);

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