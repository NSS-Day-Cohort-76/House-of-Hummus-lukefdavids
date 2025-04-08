


export const Sales = async () => {
    const sales = await fetch("http://localhost:8088/purchases?_expand=entree&_expand=vegetable&_expand=side").then(res => res.json())
    let salesHTML = ''
    
    const salesString = sales.map((obj) => {
        const totalPrice = obj.entree.price + obj.vegetable.price + obj.side.price
        return `Receipt #${obj.id} $${totalPrice.toFixed(2)}<br>`
    })

    return salesHTML += salesString.join("")
}

