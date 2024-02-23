let displayValue = '';

function appendToDisplay(value) {
    if (value === '(' && displayValue !== '' && displayValue.slice(-1).match(/[0-9\)]/)) {
        // Automatically insert multiplication sign before an opening parenthesis
        displayValue += '*(';
    } else if (value.match(/[0-9\(\.]/) && displayValue.slice(-1) === ')' ) {
        // Automatically insert multiplication sign after a closing parenthesis followed by a number or '('
        displayValue += '*' + value;
    } else {
        displayValue += value;
    }
    document.getElementById('display').value = displayValue;
}

function clearDisplay() {
    displayValue = '';
    document.getElementById('display').value = '';
}

function calculate() {
    try {
        let result = eval(displayValue);
        document.getElementById('display').value = result;
        displayValue = result.toString(); // Update displayValue with result
    } catch (error) {
        document.getElementById('display').value = 'Error';
        displayValue = '';
    }
}

function backspace() {
    displayValue = displayValue.slice(0, -1);
    document.getElementById('display').value = displayValue;
}

function negate() {
    if (displayValue.charAt(0) === '-') {
        displayValue = displayValue.slice(1);
    } else {
        displayValue = '-' + displayValue;
    }
    document.getElementById('display').value = displayValue;
}

function calculatePercentage() {
    displayValue = eval(displayValue + '/100');
    document.getElementById('display').value = displayValue;
}

function calculateSquareRoot() {
    try {
        let result = Math.sqrt(eval(displayValue));
        if (isNaN(result)) {
            document.getElementById('display').value = 'Error';
            displayValue = '';
        } else {
            document.getElementById('display').value = result;
            displayValue = result.toString(); // Update displayValue with result
        }
    } catch (error) {
        document.getElementById('display').value = 'Error';
        displayValue = '';
    }
}

