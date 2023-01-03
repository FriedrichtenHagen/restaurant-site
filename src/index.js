import createOne from "./one.js"
import createTwo from "./two.js"
import createThree from "./three.js"


const hamburger = document.querySelector(".hamburger")
const menu = document.querySelector(".menu")


hamburger.addEventListener("click", () => {
    menu.classList.toggle("active")

    // add eventlistener to menu to remove it
    menu.addEventListener("click", () => {
        menu.classList.remove("active")
    })
})

// eventlisteners for links
const lione = document.querySelector("#lione")
const litwo = document.querySelector("#litwo")
const lithree = document.querySelector("#lithree")

lione.addEventListener("click", () => {createOne()})
litwo.addEventListener("click", () => {createTwo()})
lithree.addEventListener("click", () => {createThree()})




