import { setEntree } from "./transientState.js"

const handleEntreeChange = (changeEvent) => {
    if (changeEvent.target.name === "entree") {
        setEntree(parseInt(changeEvent.target.value))
    }
}

export const entreeOptions = async () => {
    document.addEventListener("change", handleEntreeChange)

    const response = await fetch("http://localhost:8088/entrees")
    const entrees = await response.json()


    let html = `<h2>Entrees</h2>`

    const entreeString = entrees.map(obj => `
        <div><input type="radio" name="entree" value="${obj.id}"/>${obj.name}</div>`)
    
    html += entreeString.join("")
    return html

}