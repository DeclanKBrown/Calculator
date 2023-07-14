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
    //call correct function
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
    } else if (operand === 'equals') {
        result = num1;
        num2 = ''
    }
    //display result and equation
    display(result)
    displayEquation(num1, num2, operand);
} 

//add function
function add(a, b) {
   return Math.round((a + b) * 100) / 100;
}

//subtract fucntion
function subtract(a, b) {
    return Math.round((a - b) * 100) / 100;
}

//multiply function
function multiply(a, b) {
    return Math.round((a * b) * 100) / 100;
}

//divide function 
function divide(a, b) {
    if (b === 0) {
        return 'undefined'
    } else {
        return Math.round((a / b) * 100) / 100;
    }
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
            symbol = 'percent of';
            break;
        case 'equals':
            symbol = '='
            break;
    }
    //display the equation
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
let canBS = true;
let clear = false;

function clearVals() {
    val1 = null;
    val2 = null;
    val3 = null;
}

//assign vals 
function assignVals(btn) {
    canBS = false;
    let prev = document.querySelector('.previous').innerHTML
    if (prev !== '') { //if there is already a current equation assign val1 to the current result and val3 to the new input
        prevArr = prev.split(" ");
        val1 = checkResult(prevArr);
        if (val3 !==null) {
            val3 = document.querySelector('.display').innerHTML;
        }
    } else { //if there is no current equation then assign val1 with the first number and val3 with the second
        if (val1 === null) {
            val1 = document.querySelector('.display').innerHTML;
        } else if (val1 !== null){
            val3 = document.querySelector('.display').innerHTML;
        }
    }
    if (btn === 'add' || btn === 'subtract' || btn === 'multiply' || btn === 'divide') { //if the operand is called after two number already input call equals
        clear = true;
        if (val1 !== null && val3 !== null) {
            clearDisplay()
            equal(val1, val2, val3);
        } else {
            val3 = document.querySelector('.display').innerHTML; //if val3 is null is will assign it to the current -- means equals was called before
        }
    } else if (btn === 'equals'){ //equal the vals, make val1 equal the result and sets val3 to null
        if (val3 === null) {
            val2 = 'equals'
        } 
        clearDisplay()
        equal(val1, val2, val3);
        val1 = document.querySelector('.display').innerHTML;
        val3 = null;
        clear = true;
    } else if (btn === 'percentage') {
        clear = true;
        if (val1 !== null && val3 !== null) {
            clearDisplay()
            equal(val1, val2, val3);
        } else {
            val3 = document.querySelector('.display').innerHTML; //if val3 is null is will assign it to the current -- means equals was called before
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
                if (canBS === true) {
                    document.querySelector('.display').innerHTML += '.';
                }
                break;
            default:
                if (val2 !== null) {
                    if (clear === true) {
                        clearDisplay()
                    }
                    checkClear()
                    display(curr);
                    canBS = true;
                } else {
                    display(curr);   
                    canBS = true;
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
    } else if (operand === '=') {
        result = num1;
    } else if (operand === 'percent') {
        num2 = arr[3];
        result = percentage(num1, num2)
        console.log(result)
    }
    return result;
}

//backspace
function backSpace(){
    if (canBS === true) {
        let curr = document.querySelector('.display').innerHTML
        let currArr = curr.split('');
        currArr.pop();
        document.querySelector('.display').innerHTML = currArr.join('')
    }
}

//check if input can be cleared
function checkClear() {
    if (clear === true) {
        clear = false;
    }
}






