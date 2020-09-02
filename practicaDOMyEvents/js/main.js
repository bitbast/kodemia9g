let thingsArray = [
    {
        name:"Bolígrafo",
        category:"Papelería"
    },
    {
        name:"Lápiz",
        category:"Papelería"
    },
    {
        name:"Leche",
        category:"Alimentos"
    },
    {
        name:"Camisa",
        category:"Ropa"
    },
    {
        name:"Pantalón",
        category:"Ropa"
    },
    {
        name:"Carne",
        category:"Alimentos"
    },
    {
        name:"Playera",
        category:"Ropa"
    },
  
]

const paintArray = () => {
    document.getElementById("papelería").innerHTML = ""
    document.getElementById("ropa").innerHTML = ""
    document.getElementById("alimentos").innerHTML = ""
    thingsArray.forEach( thing => {
        let { category, name } = thing;
        let listItem = document.createElement("li")
        let listItemText = document.createTextNode(name)
        listItem.setAttribute("class", "list-group-item")
        listItem.appendChild(listItemText)
        switch( category ){
            case "Alimentos":
                document.getElementById("alimentos").appendChild(listItem)
                break
            case "Ropa":
                document.getElementById("ropa").appendChild(listItem)
                break
            case "Papelería":
                document.getElementById("papelería").appendChild(listItem)
                break
        }
    })
}

paintArray()

document.getElementById("save-button").addEventListener("click", () =>{
    let name = document.getElementById("item-name").value
    let category = document.getElementById("item-category").value
    let itemObject = {name,category}
    console.log(itemObject)
    thingsArray.push(itemObject)
    console.log(thingsArray)
    paintArray()
})




