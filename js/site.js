function add() {
    //get the first number
    let numberOne = document.getElementById('firstNumber').value;

    //get the second number
    let numberTwo = document.getElementById('secondNumber').value;

    //make sure numbers being read as numbers and not text
    numberOne = parseFloat(numberOne);
    numberTwo = parseFloat(numberTwo);

    //add them
    let sum = numberOne + numberTwo;

    //put the sum in the results div
    let resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = sum;
}

function subtract() {
    //get the first number
    let numberOne = document.getElementById('firstNumber').value;

    //get the second number
    let numberTwo = document.getElementById('secondNumber').value;

    //make sure numbers being read as numbers and not text
    numberOne = parseFloat(numberOne);
    numberTwo = parseFloat(numberTwo);

    //subtract them
    let sum = numberOne - numberTwo;

    //put the sum in the results div
    let resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = sum;
}

function multiply() {
    //get the first number
    let numberOne = document.getElementById('firstNumber').value;

    //get the second number
    let numberTwo = document.getElementById('secondNumber').value;

    //make sure numbers being read as numbers and not text
    numberOne = parseFloat(numberOne);
    numberTwo = parseFloat(numberTwo);

    //multiply them
    let sum = numberOne * numberTwo;

    //put the sum in the results div
    let resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = sum;
}

function divide() {
    //get the first number
    let numberOne = document.getElementById('firstNumber').value;

    //get the second number
    let numberTwo = document.getElementById('secondNumber').value;

    //make sure numbers being read as numbers and not text
    numberOne = parseFloat(numberOne);
    numberTwo = parseFloat(numberTwo);

    //divide them
    let sum = numberOne / numberTwo;

    if (numberTwo == 0) {
        sum = 'Cannot divide by 0'
    }

    //put the sum in the results div
    let resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = sum;
}

function sumAll() {
    let numberSeries = document.getElementById('numberSeries').value;

    let numberArray = numberSeries.split('');

    let sum = 0;

    for (let i = 0; i < numberArray.length; i = i + 1) {

        let numberAsString = numberArray[i];

        let number = parseInt(numberAsString);

        sum = sum + number;
    }

    let resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = sum;

}

function multiplyAll() {
    let numberSeries = document.getElementById('numberSeries').value;

    let numberArray = numberSeries.split('');

    let product = 1;

    for (let i = 0; i < numberArray.length; i = i + 1) {

        let numberAsString = numberArray[i];

        let number = parseInt(numberAsString);

        product = product * number;
    }

    let resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = product;
}

function average() {
    let numberSeries = document.getElementById('numberSeries').value;

    let numberArray = numberSeries.split('');

    let sum = 0;

    for (let i = 0; i < numberArray.length; i = i + 1) {

        let numberAsString = numberArray[i];

        let number = parseInt(numberAsString);

        sum = sum + number;
    }

    let average = sum / numberArray.length;

    let resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = average;
}

function minimum() {

    let numberSeries = document.getElementById('numberSeries').value;
    let numberArray = numberSeries.split('');

    let minimum = parseInt(numberArray[0]);

    for (let i = 1; i < numberArray.length; i = i + 1) {

        let numberAsString = numberArray[i];

        let number = parseInt(numberAsString);

        if (number < minimum) {
            minimum = number;
        }
    }

    let resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = minimum;
}

function maximum() {
    let numberSeries = document.getElementById('numberSeries').value;

    let numberArray = numberSeries.split('');

    let maximum = 0;

    for (let i = 0; i < numberArray.length; i = i + 1) {

        let numberAsString = numberArray[i];

        let number = parseFloat(numberAsString);

        maximum = Math.max.apply(Math, numberArray)
    }

    let resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = maximum;
}