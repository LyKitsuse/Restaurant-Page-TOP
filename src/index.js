import homeFunc from "./home/home";
import menuFunc from "./menu/menu";
import contactFunc from "./contact/contact";
import "./styles.css";

const contentDiv = document.getElementById("content");

const homeTab = document.getElementById("Home");
const menuTab = document.getElementById("Menu");
const contactTab = document.getElementById("Contact");

homeFunc();

// If Home pressed, run home
homeTab.addEventListener("click", () => {
    contentDiv.innerHTML = ''
    homeFunc();
})

menuTab.addEventListener("click", () => {
    contentDiv.innerHTML = ''
    menuFunc();
})

contactTab.addEventListener("click", () => {
    contentDiv.innerHTML = ''
    contactFunc();
})



