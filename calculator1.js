//Author : Roshan Thalal
//This is a javascript file for simple calculator
StoredNumber = "";
displayNumber = "";
Operationqueued = 0;
calculationFinished = false;
operation = 0;

function clearDisplay() {
var display = document.getElementById("Show");
//creates a new variable every other time by replacing the old 
StoredNumber = "";
displayNumber = "";
Operationqueued = 0;
operation = 0;
display.value = displayNumber;

}

function numberInput(num) {
var display = document.getElementById("Show");

if ((display.value == "") && num == "0") {
  return num;
}
else if (calculationFinished == true) {
    display.value = num;
    calculationFinished = false;
    return num;
}
else {
  display.value += num;
  return num;
}
}

function insertdecimal(dec) {
var display = document.getElementById("Show");

for (i = 0; i < display.value.length; i++)
    if (display.value.charAt(i) == '.') {
        return ;
    }
    display.value += dec;
}

function setOperation(command) {
var display = document.getElementById("Show"),
        displayNumber = display.value;
        evalDisplay = eval(displayNumber),
        evalStored = eval(StoredNumber);

if (Operationqueued == 0) {
    StoredNumber = display.value;
}
else if (Operationqueued == 1) {
    StoredNumber = evalStored + evalDisplay;
}
else if (Operationqueued == 2) {
    StoredNumber = evalStored - evalDisplay;
}
else if (Operationqueued == 3) {
    StoredNumber = evalStored * evalDisplay;
}

// This function checks what command was input in the calculator 
if (command == 'add') {
    operation = 1;
}
else if (command == 'subtract') {
    operation = 2;
}
if (command == 'multiply') {
    operation = 3;
}


Operationqueued = operation;
display.value = '';
}

function calculation() {
//this function is about the calculator display
var display = document.getElementById("Show");
        displayNumber = display.value;
var evalDisplay = eval(displayNumber),
        evalStored = eval(StoredNumber);

// this function help to do calculation
if (operation == 1) {
     displayNumber = evalStored + evalDisplay;
}
else if (operation == 2) {
    displayNumber = evalStored - evalDisplay;
}
else if (operation == 3) {
    displayNumber = evalStored * evalDisplay;
}
display.value = displayNumber;
if (operation != 0)
    calculationFinished = true;
operation = 0;
Operationqueued = 0;
displayNumber = "";
StoredNumber = "";
}