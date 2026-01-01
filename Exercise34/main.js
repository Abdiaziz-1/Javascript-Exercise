
const head = document.querySelector("h1")
const lists = document.querySelector(".lists")

function addItem() {
    const newItem = document.createElement("li")
    newItem.textContent = "new Item"
    lists.appendChild(newItem)

    head.textContent = "Change Has been made"
}


function removeItem() {
      if (lists.lastChild) {
        lists.removeChild(lists.lastChild);
    } else {
        alert("nothing remains to remove")
    }
}