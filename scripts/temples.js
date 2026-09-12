document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = "Last Modification: "+document.lastModified;

const hamburgerBtn = document.getElementById("hamburger-btn");
const navigationMenu = document.getElementById("navigation-menu");

hamburgerBtn.addEventListener("click",() => {
    console.log("button clicked")
    navigationMenu.classList.toggle("open");
    hamburgerBtn.textContent = navigationMenu.classList.contains("open")?"\u2715" : "\u2630";

});
