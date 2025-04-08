const transientState = {
    entreeId: 0,
    vegetableId: 0,
    sideId: 0
}

export const setEntree = (chosenEntree) => {
    transientState.entreeId = chosenEntree
}

export const setVegetable = (chosenEntree) => {
    transientState.vegetableId = chosenEntree
}

export const setSide = (chosenEntree) => {
    transientState.sideId = chosenEntree
}

export const postOrder = async () => {
    if (transientState.entreeId > 0 &&
        transientState.vegetableId > 0 && 
        transientState.sideId > 0) {
    const postOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(transientState)
        }
    
    const response = await fetch("http://localhost:8088/purchases", postOptions)
    document.dispatchEvent(new CustomEvent("orderPosted"))
        }
    else {
        alert("Please complete all required fields")
    }
}