const newBookBtn = document.querySelector("#newBook");
const inputForm = document.querySelector(".hidden");

newBookBtn.addEventListener("click", showForm)

function showForm() {
    inputForm.classList.remove("hidden");
}

const library = [];

function newBook(title) {
    this.title = title;
}

const book = new newBook(title);
