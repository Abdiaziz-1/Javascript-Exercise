
const header = document.querySelector("#header")

const par = document.querySelector(".par")


function changeText() {
    header.textContent = "This is the heading of the Webiste",

    par.textContent = "Hey this is the paragraphs"
}

function BackToOriginalText() {
    header.textContent = "DOM naipulation"

    par.textContent = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum ratione quis tenetur corporis dolorem animi libero ipsa ullam veritatis consequuntur, perferendis placeat eum consectetur ut atque. Nam dignissimos eum harum?"
}