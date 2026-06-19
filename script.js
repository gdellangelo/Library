const newBookBtn = document.querySelector("#newBook");
const overlay = document.querySelector(".overlay");
const bookForm = document.querySelector("#bookForm");
const cancelFormBtn = document.querySelector("#cancel");
const inputTitle = document.querySelector("#title");
const inputPages = document.querySelector("#pages");
const gridBox = document.querySelector(".grid");

const Books = [];

function Book(title, pages) {
    this.title = title;
    this.pages = pages
}

function renderBookLibrary() {
    gridBox.textContent = "";

    Books.forEach(function (element) {
        const card = document.createElement("div");
        card.classList.add("card");

        const title = document.createElement("h1");
        title.textContent = element.title;

        const pages = document.createElement("p");
        pages.textContent = element.pages

        card.appendChild(pages);
        card.appendChild(title);
        gridBox.appendChild(card);
    });
}

function showForm() {
    overlay.classList.remove("hidden");
}

newBookBtn.addEventListener("click", showForm);

function cancelForm() {
    overlay.classList.add("hidden");
}

cancelFormBtn.addEventListener("click", cancelForm);

function addNewBook(event) {
    event.preventDefault();

    const newBook = new Book(inputTitle.value, inputPages.value);

    Books.push(newBook);
    console.log(Books);

    cancelForm();
    renderBookLibrary();
}

bookForm.addEventListener("submit", addNewBook);