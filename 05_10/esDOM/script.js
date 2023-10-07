const nome = document.querySelector('#nome')
const cognome = document.querySelector('#cognome')
const radio = [
    document.querySelector('#radio1'), 
    document.querySelector('#radio2')]
const tariffaPiena = document.querySelector('#tariffa-piena')
const tariffaRidotta = document.querySelector('#tariffa-ridotta')
const data = document.querySelector('#data')
const guidaAudio = document.querySelector('#guida-audio')
const visitaGuidata = document.querySelector('#visita-guidata')
const regione = document.querySelector('#regione')
const response = document.querySelector('#response')

function reset() {
    nome.value = ''
    cognome.value = ''
    radio[0].checked = true
    tariffaPiena.value = 0
    tariffaRidotta.value = 0
    data.value = ''
    guidaAudio.checked = false
    visitaGuidata.checked = false;
    regione.value = 0
    response.textContent = ''
}

function submit() {
    if(validate()) {
        // do something
    }
    //error
}

function validate() {
    if( nome.value === '' || cognome.value === '' || data.value === '' ) {
        response.textContent = 'Tutti i campi obbligatori devono essere compilati'
        return false;
    } else if(!validateDate(data.value)) {
        response.textContent = 'Data fornita non valida'
        return false;
    } else if(tariffaPiena.value == 0 && tariffaRidotta.value == 0) {
        response.textContent = 'Numero di biglietti invalido'
        return false;
    } else {
        response.textContent = 'Richiesta inviata'
        return true;
    }
}

function validateDate(dateStr) {
    // Split the input string into day, month, and year parts
    const dateParts = dateStr.split('/');
    
    // Check if there are exactly three parts (day, month, year)
    if (dateParts.length !== 3) {
      return false;
    }
    
    // Parse day, month, and year as integers
    const day = parseInt(dateParts[0], 10);
    const month = parseInt(dateParts[1], 10);
    const year = parseInt(dateParts[2], 10);
    
    // Check if day, month, and year are valid
    if (isNaN(day) || isNaN(month) || isNaN(year)) {
      return false;
    }
    
    // Check if the month is between 1 and 12
    if (month < 1 || month > 12) {
      return false;
    }
    
    // Check if the day is valid for the given month
    const daysInMonth = new Date(year, month, 0).getDate();
    if (day < 1 || day > daysInMonth) {
      return false;
    }
    
    const currentYear = new Date().getFullYear();
    if (year !== currentYear) {
      return false;
    }
    
    // If all checks pass, the date is valid
    return true;
  }