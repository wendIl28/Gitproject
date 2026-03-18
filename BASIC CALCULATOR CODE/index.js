const inputField = document.getElementById('inputField');

function appendToInput(value) {
    inputField.value += value;
}

function clearInput() {
    inputField.value = '';
}

function calculate() {
    try {
        inputField.value = eval(inputField.value);
    } catch (error) {
        inputField.value = 'Error';
    }
}