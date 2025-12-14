import home from "./home";
import menu from "./menu";
import contact from "./contact";
import "./styles.css";

const contentDiv = document.getElementById("content");

const homeTab = document.getElementById("Home");
const menuTab = document.getElementById("Menu");
const contactTab = document.getElementById("Contact");

// If Home pressed, run home
homeTab.addEventListener("click", () => {
    contentDiv.innerHTML = ''
    console.log(home)
})

menuTab.addEventListener("click", () => {
    console.log(menu)
})

contactTab.addEventListener("click", () => {
    console.log(contact)
})

