const newBookBtn = document.querySelector("#newBook");
const overlay = document.querySelector(".overlay");
const bookForm = document.querySelector("#bookForm");
const cancelFormBtn = document.querySelector("#cancel");
const inputTitle = document.querySelector("#title");
const gridBox = document.querySelector(".grid");

const Books = [];

function renderBookLibrary() {
    gridBox.textContent = "";

    Books.forEach(function (element) {
        const card = document.createElement("div");
        card.classList.add("card");
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

    Books.push(inputTitle.value);
    console.log(Books);

    cancelForm();
    renderBookLibrary();
}

bookForm.addEventListener("submit", addNewBook);