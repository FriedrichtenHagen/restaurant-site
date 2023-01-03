export default function createThree(){
    const content = document.querySelector(".content")
    // create Falafel image
    const text3 = document.createElement("p")
    text3.className = "text"
    text3.textContent = "Frisches Gemüse"
    content.appendChild(text3)
    const image3 = document.createElement("img")
    image3.className = "image"
    image3.src = "gemuese.jpg"
    content.appendChild(image3)
    }
