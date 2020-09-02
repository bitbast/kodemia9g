let namesList = document.createElement("ul")
let listItem = document.createElement("li")
let listText = document.createTextNode("Israel Salinas")
listItem.appendChild(listText)
namesList.appendChild(listItem)
console.log(namesList)
document.getElementsByTagName("body")[0].appendChild(namesList)
let workersArray = [
    {
        name: "Israel Salinas Martínez",
        productivity: {
            monday: "20pz",
            tuesday: "30pz",
            wednesday: "50pz",
            thursday: "15pz",
            friday: "25pz"
        }
    },
    {
        name: "David Moranchel",
        productivity: {
            monday: "30pz",
            tuesday: "35pz",
            wednesday: "5pz",
            thursday: "10pz",
            friday: "5pz"
        }
    },
    {
        name: "Carlos Silva",
        productivity: {
            monday: "30pz",
            tuesday: "35pz",
            wednesday: "20pz",
            thursday: "40pz",
            friday: "20pz"
        }
    }
]




workersArray.forEach( worker => {
    let { name } = worker
    let { monday, tuesday, wednesday, thursday, friday } = worker.productivity
    let workerRow = document.createElement("tr")
    let nameCell = document.createElement("td")
    let mondayCell = document.createElement("td")
    let tuesdayCell = document.createElement("td")
    let wednesdayCell = document.createElement("td")
    let thursdayCell = document.createElement("td")
    let fridayCell = document.createElement("td")
    let averageCell = document.createElement("td")
    let nameText = document.createTextNode( name )
    let mondayText = document.createTextNode( monday )
    let tuesdayText = document.createTextNode( tuesday )
    let wednesdayText = document.createTextNode( wednesday )
    let thursdayText = document.createTextNode( thursday )
    let fridayText = document.createTextNode( friday )
    let averageText = document.createTextNode("60")
    nameCell.appendChild(nameText)
    mondayCell.appendChild(mondayText)
    tuesdayCell.appendChild(tuesdayText)
    wednesdayCell.appendChild(wednesdayText)
    thursdayCell.appendChild(thursdayText)
    fridayCell.appendChild(fridayText)
    averageCell.appendChild(averageText)
    workerRow.appendChild(nameCell)
    workerRow.appendChild(mondayCell)
    workerRow.appendChild(tuesdayCell)
    workerRow.appendChild(wednesdayCell)
    workerRow.appendChild(thursdayCell)
    workerRow.appendChild(fridayCell)
    workerRow.appendChild(averageCell)
    console.log(workerRow)
    document.getElementById("workers-table").appendChild(workerRow)

    let average = 
})
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
]
thingsArray.forEach( thing => {
    let { category, name } = thing;
    let listItem = document.createElement("li")
    let listItemText = document.createTextNode(name)
    listItem.appendChild(listItemText)
    switch( category ){
        case "Alimentos":
            document.getElementById("alimentos").appendChild(listItem)
            break
        case "Ropa":
            document.getElementById("ropa").appendChild(listItem)
            break
        case "Papelería":
            document.getElementById("papeleria").appendChild(listItem)
            break
    }
})