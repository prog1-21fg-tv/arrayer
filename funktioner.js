// ----- FUNKTIONER -----

let num1 = 3;
let num2 = 2;

// --- funktioner ---
function doubleNumber(num) {
  return num * 2;
}

function addNumbers(num1, num2) {
  return num1 + num2;
}
let num3 = addNumbers(2, 3); // num3 är nu 5

function isNegativeNumber(num) {
  if (num < 0) {
    return true;
  }
  return false;
}
// funktionsanropet i villkoret kommer utvärderas till false
if (isNegativeNumber(8)) {
  console.log("negativt");
}

// indata är ofta array eftersom du då ínte behöver veta hur många siffror du behöver
function sum(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
}
let aFewNumbers = [3, 2, 5];
sum(aFewNumbers); // 10

// --- anonyma funktioner i variabel ---
// sparas i variabel för att kunna jobbas med i avancerade funktioner
let isLegalAge = function (age) {
  if (age >= 18) {
    return true;
  }
  return false;
};
// används precis som vanliga funktioner
if (isLegalAge(5)) {
  console.log("Vä?lkommen");
} else {
  console.log("Stick");
}

// --- arrow functions ---
// arrow functions är ett kortare sätt att skriva anonyma funktioner och spara i variabel
// inget function, (), {} eller return
let gramsInKg = (grams) => grams / 1000;
console.log(gramsInKg(570));

let addTwoNumbers = (num1, num2) => num1 + num2;
addTwoNumbers(2, 3); // 5

// --- kombinera med p5js
function drawRectangles() {
  // enbart rött
  fill(255, 0, 0);
  square(10, 10, 40);

  // enbart grönt
  fill(0, 255, 0);
  square(60, 10, 40);

  // enbart blått
  fill(0, 0, 255);
  square(110, 10, 40);

  // vitt
  fill(255, 255, 255);
  square(160, 10, 40);

  // grått när alla är lika
  fill(125, 125, 125);
  square(210, 10, 40);
}

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  drawRectangles();
}
