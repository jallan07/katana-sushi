var specialtyEl = document.getElementById("specialty");
var comboEl = document.getElementById("combo");
var nigiriEl = document.getElementById("nigiri");
var sashimiEl = document.getElementById("sashimi");
var dessertsEl = document.getElementById("desserts");



// NEED TO FOLLOW THESE INSTRUCTIONS: https://stackoverflow.com/questions/31799603/show-hide-multiple-divs-javascript


// function toggleMenu() {
//     if (comboEl === "click") {
//         comboEl.classList.remove("hide");
//     } else if (nigiriEl === "click") {
//         nigiriEl.classList.remove("hide");
//     } else if (sashimiEl === "click") {
//         sashimiEl.classList.remove("hide");
//     } else if (dessertsEl === "clicked") {
//         dessertsEl.classList.remove("hide");
//     } else {
//         specialtyEl.classList.remove("hide");
//     }
// };


specialtyEl.addEventListener("click", toggleMenu);
comboEl.addEventListener("click", toggleMenu);
nigiriEl.addEventListener("click", toggleMenu);
sashimiEl.addEventListener("click", toggleMenu);
dessertsEl.addEventListener("click", toggleMenu);