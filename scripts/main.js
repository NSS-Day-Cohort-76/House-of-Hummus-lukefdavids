import { orders } from "./orders.js"
import { entreeOptions } from "./Entrees.js"
import { sideDishOptions } from "./SideDishes.js"
import { vegetableOptions } from "./Vegetables.js"
import { Sales } from "./Sales.js"

const mainContainer = document.querySelector("#container")

const renderAllHTML = async () => {
    const entreeHTML = await entreeOptions()
    const FoodTruckHTML = orders()
    const sideDishHTML = await sideDishOptions()
    const vegHTML = await vegetableOptions()
    const salesHTML = await Sales()

    mainContainer.innerHTML = `
    
        <header class="header">
            <img src="./images/hummus.png" class="logo" />
            <h1 class="title">Laura Kathryn's House of Hummus</h1>
        </header>

            ${entreeHTML}
            ${vegHTML} 
            ${sideDishHTML} 
            ${FoodTruckHTML}
    
        <article class="customerOrders">
            <h2>Monthly Sales</h2>
            ${salesHTML}
        </article>`
        
}
document.addEventListener("orderPosted", renderAllHTML)

renderAllHTML()

