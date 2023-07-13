//equals function 
function equal(num1, operand, num2) {
    let result;

    //parse to correct type
    num1 = String(num1)
    num2 = String(num2)
    if (num1.includes('.')) {
        num1 = parseFloat(num1);
    } else {
        num1 = parseInt(num1)
    }
    if (num2.includes('.')) {
        num2 = parseFloat(num2);
    } else {
        num2 = parseInt(num2);
    }

    if (operand === 'add') {
        result = add(num1, num2)
    } else if (operand === 'subtract') {
        result = subtract(num1, num2)
    } else if (operand === 'multiply') {
        result = multiply(num1, num2)
    } else if (operand === 'divide') {
        result = divide(num1, num2)
    } else if (operand === 'percentage') {
        result = percentage(num1, num2)
    }
    display(result)
    displayEquation(num1, num2, operand);
} 

//add function
function add(a, b) {
   return a + b;
}

//subtract fucntion
function subtract(a, b) {
    return a - b;
}

//multiply function
function multiply(a, b) {
    return a * b;
}

//divide function 
function divide(a, b) {
   return a / b
}

//Percentage function
function percentage(a, b) {
    return Math.round(((a / 100) * b) * 100) / 100;
}

//display result on screen
function display(result) {
    let display = document.querySelector('.display');
    display.innerHTML += result;
}

//display the equation
function displayEquation(a, b, symbol) {
    //get correct symbol
    switch (symbol) {
        case 'add':
            symbol = '+';
            break;
        case 'subtract':
            symbol = '-';
            break;
        case 'multiply':
            symbol = 'x';
            break;
        case 'divide':
            symbol = '/';
            break;  
        case 'percentage':
            symbol = 'percentage of';
            break;
    }
    //display on previous
    const previous = document.querySelector('.previous');
    previous.innerHTML = `${a} ${symbol} ${b}`
}

//clear Display
function clearDisplay() {
    console.log('yea')
    let display = document.querySelector('.display');
    display.innerHTML = "";
}

//get user input
//initilize three variables
let val1 = null;
let val2 = null;
let val3 = null;

function clearVals() {
    val1 = null;
    val2 = null;
    val3 = null;
}

//assign vals 
function assignVals(btn) {
    let prev = document.querySelector('.previous').innerHTML
    if (prev !== '') { //if there is already a current equation assign val1 to the current result and val3 to the new input
        prevArr = prev.split(" ");
        val1 = checkResult(prevArr);
        val3 = document.querySelector('.display').innerHTML;
    } else { //if there is no current equation then assign val1 with the first number and val3 with the second
        if (val1 === null) {
            val1 = document.querySelector('.display').innerHTML;
        } else if (val1 !== null){
            val3 = document.querySelector('.display').innerHTML;
        }
    }
    if (btn === 'add' || btn === 'subtract' || btn === 'multiply' || btn === 'divide') { //if the operand is called after two number already input call equals
        if (val1 !== null && val3 !== null) {
            clearDisplay()
            equal(val1, val2, val3); //FIXME if user input 1 + 5 = then + 5 it makes val1 = to the resul and val3 equal to inner html then calls this 
        }
    }
}

//Listen for click
const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        removeActive(); //remove active class from all buttons

        let curr = button.id;
        switch (curr) {
            case 'add':
                button.classList.add('active') //highlight button
                assignVals(curr)
                val2 = curr;
                break;
            case 'subtract':
                button.classList.add('active') //highlight button
                assignVals(curr)
                val2 = curr;
                break;
            case 'multiply':
                button.classList.add('active') //highlight button
                assignVals(curr)
                val2 = curr;
                break;
            case 'divide':
                button.classList.add('active') //highlight button
                assignVals(curr)
                val2 = curr;
                break;  
            case 'equals':
                assignVals(curr)
                clearDisplay()
                equal(val1, val2, val3);
                break;
            case 'clear':
                clearDisplay();
                break;
            case 'clear-entry':
                clearEntry();
                break;
            case 'percentage':
                button.classList.add('active') //highlight button
                assignVals(curr)
                val2 = curr;
                break;  
            case 'back-space':
                backSpace();
                break;
            case 'decimal':
                document.querySelector('.display').innerHTML += '.';
                break;
            default:
                if (val2 !== null) {
                    clearDisplay()
                    display(curr);
                } else {
                    display(curr);   
                }
        }
    });
});

//remove active
function removeActive() {
    buttons.forEach((button) => {
        button.classList.remove('active')
    });
};

//clear Entry
function clearEntry() {
    clearVals()
    clearDisplay();
    clearPrevious();
}

//Clear Previous
function clearPrevious() {
    let toClear = document.querySelector('.previous')
    toClear.innerHTML = "";
}

function checkResult(arr) {
    let num1 = arr[0];
    let operand = arr[1];
    let num2 = arr[2];
    let result;
    //parse to correct type
    if (num1.includes('.')) {
        num1 = parseFloat(num1);
    } else {
        num1 = parseInt(num1)
    }
    if (num2.includes('.')) {
        num2 = parseFloat(num2);
    } else {
        num2 = parseInt(num2);
    }

    if (operand === '+') {
        result = add(num1, num2)
    } else if (operand === '-') {
        result = subtract(num1, num2)
    } else if (operand === 'x') {
        result = multiply(num1, num2)
    } else if (operand === '/') {
        result = divide(num1, num2)
    }
    return result;
}

//backspace
function backSpace(){
    let curr = document.querySelector('.display').innerHTML
    let currArr = curr.split('');
    currArr.pop();
    document.querySelector('.display').innerHTML = currArr.join('')
}






