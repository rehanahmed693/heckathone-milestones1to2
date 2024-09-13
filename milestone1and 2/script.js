var mainContainer = document.querySelector("#main-container");
var skills = document.querySelector("#skills");
var button = document.querySelector("#button");
button.addEventListener("click", function () {
    if (skills.style.display === "none") {
        skills.style.display = "block";
    }
    else {
        skills.style.display = "none";
    }
});
