let currentInput = '0';
let previousInput = '';
let operator = '';
let resultDisplayed = false;

function updateDisplay() {
    document.getElementById("display").innerText = currentInput;
}

function clearDisplay() {
    currentInput = '0';
    previousInput = '';
    operator = '';
    resultDisplayed = false;
    updateDisplay();
}

function appendNumber(number) {
    if (currentInput === '0' || resultDisplayed) {
        currentInput = number;
        resultDisplayed = false;
    } else {
        currentInput += number;
    }
    updateDisplay();
}

function appendDecimal() {
    if (!currentInput.includes('.')) {
        currentInput += '.';
        updateDisplay();
    }
}

function appendOperator(op) {
    if (operator !== '') {
        calculate();
    }
    previousInput = currentInput;
    operator = op;
    resultDisplayed = true;
}

function calculate() {
    if (operator === '') return;

    const prev = parseFloat(previousInput);
    const current = parseFloat(currentInput);
    let result = 0;

    switch (operator) {
        case '+':
            result = prev + current;
            break;
        case '-':
            result = prev - current;
            break;
        case '*':
            result = prev * current;
            break;
        case '/':
            result = current !== 0 ? prev / current : 'Error';
            break;
    }

    currentInput = result.toString().length > 10 ?
        parseFloat(result.toFixed(6)).toString() :
        result.toString();

    operator = '';
    previousInput = '';
    resultDisplayed = true;
    updateDisplay();
}

function toggleSign() {
    currentInput = (parseFloat(currentInput) * -1).toString();
    updateDisplay();
}

function percentage() {
    currentInput = (parseFloat(currentInput) / 100).toString();
    updateDisplay();
}