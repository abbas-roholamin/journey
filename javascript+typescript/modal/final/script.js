const modal = document.querySelector(".modal");
const openButton = document.querySelector("#open");
const closeButton = document.querySelector("#close");

// When the user clicks on the button, open the modal
openButton.addEventListener("click", function () {
    modal.style.display = "block";
});

// When the user clicks on <span> (x), close the modal
closeButton.addEventListener("click", function () {
    modal.style.display = "none";
})

// When the user clicks anywhere outside of the modal, close it
window.addEventListener("click", function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
})