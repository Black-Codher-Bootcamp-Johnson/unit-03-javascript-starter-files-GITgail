// This is a comment in JavaScript
// You can see where this file is connected to your HTML in the index.html on line 14
let a = 5;
const b = 10;
let c = a + b;
a = 20;
c = a + b;

function sayHey() {
    console.log("Hey!");
}
sayHey();
function conversation() {
    sayHey();
    console.log("How are you?");
    console.log("Googbye");
}
conversation();

function futureAge(name, currentAge) {
  let futureAge = currentAge + 5
  return "Hi " + name + " you will be " + futureAge + " in 5 years " 
}
console.log(futureAge("gail",50));
