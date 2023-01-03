const hamburger = document.querySelector(".hamburger")
const menu = document.querySelector(".menu")
const content = document.querySelector(".content")

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

lione.addEventListener("click", () => {alert("fsad")})
litwo.addEventListener("click", () => {alert("fsad")})
lithree.addEventListener("click", () => {alert("fsad")})


// create pizza image
const text1 = document.createElement("p")
text1.className = "text"
text1.textContent = "Try our napolean pizza"
content.appendChild(text1)
const image1 = document.createElement("img")
image1.className = "image"
image1.src = "pizza1.jpg"
content.appendChild(image1)

function createTwo(){
// create Falafel image
const text2 = document.createElement("p")
text2.className = "text"
text2.textContent = "We make the best falafel!"
content.appendChild(text2)
const image2 = document.createElement("img")
image2.className = "image"
image2.src = "falafel1.jpg"
content.appendChild(image2)
}
