function swap() {
    const inputArray = document.querySelectorAll('.input');
    let tmp = inputArray[1].value;
    inputArray[1].value = inputArray[0].value;
    inputArray[0].value = tmp;
}
