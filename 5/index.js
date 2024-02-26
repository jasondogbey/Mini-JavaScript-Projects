let items = []

let itemsDiv = document.getElementById("items")
let input = document.getElementById("inputItem")
const storageKey = "items"

function renderItems(){
    itemsDiv.innerHTML = null

    for (const [index, item] of Object.entries(items)){
        const container = document.createElement("div")
        container.style.marginBottom = "10px"

        const text = document.createElement("p")
        text.style.display = "inline"
        text.style.marginRight = "10px"
        text.textContent = item

        const button = document.createElement("button")
        button.textContent = "Remove"
        button.onclick = () => removeItem(index)

        container.appendChild(text)
        container.appendChild(button)
        itemsDiv.appendChild(container)
    }
}

function loadItems(){
    const oldItems = localStorage.getItem(storageKey)
    if (oldItems) items = JSON.parse(oldItems)
    renderItems()
}

function saveItems(){
    const stringItems = JSON.stringify(items)
    localStorage.setItem(storageKey, stringItems)
}

function addItem(){
    const item = input.value
    if (!item){
        alert("You cannot add an empty item")
        return
    }
    items.push(item)
    renderItems()
    input.value = ""
    saveItems()
}

function removeItem(index){
    items.splice(index, 1)
    renderItems()
    saveItems()
}

document.addEventListener("DOMContentLoaded", loadItems)