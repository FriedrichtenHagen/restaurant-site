export default function createTwo(){
    const content = document.querySelector(".content")

    // clear content
    let child = content.lastElementChild;
    while(child){
        content.removeChild(child)
        child = content.lastElementChild
    }

    // create Falafel image
    const text2 = document.createElement("p")
    text2.className = "text"
    text2.textContent = "We make the best falafel!"
    content.appendChild(text2)
    const image2 = document.createElement("img")
    image2.className = "image"
    image2.src = "falafel.jpg"
    content.appendChild(image2)
    }
    