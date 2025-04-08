import { postOrder } from "./transientState.js"

const handleClick = (clickEvent) => {
    if (clickEvent.target.id === "purchase") {
        postOrder()
    }
}
export const orders = () => {
    document.addEventListener("click", handleClick)

    return `
        <article>
            <button id="purchase">Purchase Combo</button>
        </article>
    `
}
