const inputArray = document.querySelectorAll('.textfield');


function somma() {
    let x1 = parseInt(inputArray[0].value)
    let x2 = parseInt(inputArray[1].value)
    inputArray[2].value = eval(x1 + x2)
    let string = 'ciao'
}

function prodotto() {
    let x1 = parseInt(inputArray[0].value)
    let x2 = parseInt(inputArray[1].value)
    inputArray[3].value = eval(x1 * x2)
}