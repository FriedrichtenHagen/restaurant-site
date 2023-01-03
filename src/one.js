function createOne(){
    const text1 = document.createElement("p")
    text1.className = "text"
    text1.textContent = "Try our napolean pizza"
    content.appendChild(text1)
    const image1 = document.createElement("img")
    image1.className = "image"
    image1.src = "pizza1.jpg"
    content.appendChild(image1)
}
