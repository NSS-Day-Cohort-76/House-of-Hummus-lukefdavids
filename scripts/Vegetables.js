import { setVegetable } from "./transientState.js"

const handleVegChange = (changeEvent) => {
    if (changeEvent.target.name === "vegetable") {
        setVegetable(parseInt(changeEvent.target.value))
    }
}

export const vegetableOptions = async () => {
    document.addEventListener("change", handleVegChange)

    const response = await fetch("http://localhost:8088/vegetables")
    const vegetables = await response.json()


    let html = `<h2>Vegetables</h2>`

    const vegHTML = vegetables.map (obj => `
        <div><input type="radio" name="vegetable" value="${obj.id}">${obj.type}</div>`)
    
    html += vegHTML.join("")
    return html

}