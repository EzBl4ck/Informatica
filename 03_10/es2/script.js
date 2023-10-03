function controlla() {
    let fieldValue = document.querySelector('#textfield').value;
    if(fieldValue.includes('.')) alert('Sì');
    else alert('No');
}