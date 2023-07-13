
// #When a sign is entered it is highlighted --> then the display is cleared on the newnumber entered
// #Methods for each sign and top row

//equals function 
function equal(num1, operand, num2) {
    let result;
    num1 = parseInt(num1)
    num2 = parseInt(num2);
    if (operand === 'add') {
        result = add(num1, num2)
    } else if (operand === 'subtract') {
        result = subtract(num1, num2)
    } else if (operand === 'multiply') {
        result = multiply(num1, num2)
    } else if (operand === 'divide') {
        result = divide(num1, num2)
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
    a / b
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
    }
    //display on previous
    const previous = document.querySelector('.previous');
    previous.innerHTML = `${a} ${symbol} ${b}`
}

//clear Display
function clearDisplay() {
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
function assignVals() {
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
                assignVals()
                val2 = curr;
                break;
            case 'subtract':
                button.classList.add('active') //highlight button
                assignVals()
                val2 = curr;
                break;
            case 'multiply':
                button.classList.add('active') //highlight button
                assignVals()
                val2 = curr;
                break;
            case 'divide':
                button.classList.add('active') //highlight button
                assignVals()
                val2 = curr;
                break;  
            case 'equals':
                assignVals()
                clearDisplay()
                equal(val1, val2, val3);
                break;
            case 'clear':
                clearDisplay();
                break;
            case 'clear-entry':
                clearEntry();
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
    let num1 = parseInt(arr[0]);
    let operand = arr[1];
    let num2 = parseInt(arr[2]);
    let result;

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




