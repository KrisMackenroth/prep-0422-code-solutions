function addTwoNumbers(x, y) {
  return x + y;
}

var sum = addTwoNumbers(4, 4);
console.log('sum', sum);

function convertHoursToMinutes(hours) {

  return hours * 60;
}

var minutes = convertHoursToMinutes(2);

console.log('minutes', minutes);

function getGreeting(name) {

  return 'Hello ' + name + '!';
}

var world = getGreeting('World');

console.log(world);

function addAndMultiplyBy5(num1, num2) {

  return num1 + num2 * 5;
}

console.log(addAndMultiplyBy5(10, 5));

function multiplyAndDivideBy5(num1, num2) {

  return num1 * num2 / 5;
}

console.log(multiplyAndDivideBy5(5, 10));

function subtractTwoNumbers(num1, num2) {

  return num1 - num2;
}

console.log(subtractTwoNumbers(10, 5));

function getCircleCircumference(radius) {

  return 2 * 3.14 * radius;
}

console.log(getCircleCircumference(5));

function getFullName(first, last) {

  return first + ' ' + last;
}

console.log(getFullName('Kris', 'Mack'));

function cube(number) {

  return number * number * number;
}

console.log(cube(3));
