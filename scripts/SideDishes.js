import { setSide } from "./transientState.js"

const handleSideChange = (changeEvent) => {
    if (changeEvent.target.name === "sides") {
        setSide(parseInt(changeEvent.target.value))
    }
}
export const sideDishOptions = async () => { 
    document.addEventListener("change", handleSideChange)

    const response = await fetch("http://localhost:8088/sides")
    const sides = await response.json()


    let html = `<h2>Side Dishes</h2>`

    const sidesString = sides.map (obj => `
        <div><input type="radio" name="sides" value="${obj.id}">${obj.title}</div>`)
    
    html += sidesString.join("")
    return html

}