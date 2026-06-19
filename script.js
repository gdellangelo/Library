const newBookBtn = document.querySelector("#newBook");
const inputForm = document.querySelector(".hidden");
const cancelBtn = document.querySelector("#cancel");

newBookBtn.addEventListener("click", showForm);

function showForm() {
    inputForm.classList.remove("hidden");
}

cancelBtn.addEventListener("click", cancelForm);

function cancelForm() {
    inputForm.classList.add("hidden");
}


