const saveHistoricalCharacter = () => {
    let name = $('#item-name').val()
    let gender = $('item-gender').val()
    let country = $('item-country').val()
    let birthday = $('item-birthday').val()
    let review = $('item-review').val()
    let photo = $('item-photoURL').val()

    let historicalCharacter = { name, gender, country, birthday, review, photo}

    console.log(historicalCharacter)

    $.ajax({
        ulr:"https://ajaxclass9g.firebaseio.com/teamL/.json",
        method:"POST",
        data: JSON.stringify(historicalCharacter),
        success: (response) => {
            console.log("Personaje guardado")
        },
        error: (error) =>{
            console.log("Personaje no guardado")
        }
    })

    
}

$('#save-button').click(saveHistoricalCharacter)