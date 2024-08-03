const dialog = document.querySelector(".dialog");
const openButton = document.querySelector("#open");
const closeButton = document.querySelector("#close");

// When the user clicks on the button, open the dialog
openButton.addEventListener("click", function () {
    dialog.showModal()
});

// When the user clicks on <span> (x), close the dialog
closeButton.addEventListener("click", function () {
    dialog.close()
})

// When the user clicks anywhere outside of the dialog, close it
window.addEventListener("click", function (event) {
    if (event.target == dialog) {
       dialog.close();
    }
})