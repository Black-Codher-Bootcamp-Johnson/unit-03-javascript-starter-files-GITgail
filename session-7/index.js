// ****************************************************TASK 1****************************************************

const animals = [ 'cat', 'dog', 'cow', 'chicken', 'fox', 'horse'];
console.log(animals)
const animal = animals.pop()  
animals.pop();

console.log(animals)














// ****************************************************TASK 2****************************************************

const names = [ 'Job', 'Zeinab', 'Jenny', 'Kai', 'Naomi', 'Alex', 'Namiko', 'Daniella', 'Michael', 'Tobby'];
console.log(names)
const name = names.sort()
names.sort()

const name2 = names.sort().reverse()
console.log(names)  


//   BONUS  //
const numbers = [5, 325, 67, 100000, 150];
console.log('numbers before sorting: ', numbers);

numbers.sort();
console.log('numbers after sorting: ', numbers);







// ****************************************************TASK 3****************************************************

// Notice the backticks enclosing t'challa. Read https://www.javascripttutorial.net/es6/javascript-template-literals/ for an explanation on template literals
const people = [
  { name: `t'challa`, age: 37 },
  { name: 'shuri', age: 16 },
  { name: 'killmonger', age: 32 },
];

// This is a helper function that should be used in the final task of the session.
// You should pass this function to the sort method to sort the ages of each individiual in the people array of objects
// Note: this helper function is using a tertiary operator instead of an if/else statement
function compare(a, b) {
  const personA = a.age;
  const personB = b.age;

  return a.age - b.age;
}

const sortedPeople = people.sort(compare); 
console.log('Sorted people:', sortedPeople);
    