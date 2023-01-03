export default function createOne(){
    const content = document.querySelector(".content")

    // clear content
    let child = content.lastElementChild;
    while(child){
        content.removeChild(child)
        child = content.lastElementChild
    }


    const text1 = document.createElement("p")
    text1.className = "text"
    text1.textContent = "Try our neopolitan pizza"
    content.appendChild(text1)
    const image1 = document.createElement("img")
    image1.className = "image"
    image1.src = "pizza1.jpg"
    content.appendChild(image1)
    alert
}
