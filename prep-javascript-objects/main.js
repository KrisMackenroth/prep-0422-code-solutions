var person = {
  firstName: 'Kris',
  lastName: 'Mackenroth',
  hobby: 'coding'
};

console.log(person);

var fullName = person.firstName + ' ' + person.lastName;

console.log(fullName);

person.job = 'Guard';

person.previousJob = 'Cashier';

console.log(person.previousJob);

console.log(person);
