// Using let
let y = 30; //Block scope
if (true) {
    let y = 90; // Different variable, block scoped
    console.log(y); // 90
}
console.log(y); // 30

// Using var
var x = 10; //global scope
if (true) {
    var x = 50; // Same variable, reassigns the value 'x'
    console.log(x); // 50
}
console.log(x); // 20

// Using const
const z = 10;   //Block scope
if (true) {
    const z = 20; // Different variable, block scoped
    console.log(z); // 20
}
console.log(z); // 10


//functional scope
function Add() {
    var a = 10; //  function-scoped
    console.log(a); 
}
Add(); 
// console.log(a); // Error: a is not defined

//local scope
if (true) {
    var localVarWithVar = 30; // Function-scoped (or globally scoped)
    let localVarWithLet = 40; // Locally scoped to this if block
    console.log(localVarWithVar); // Output: 30
    console.log(localVarWithLet); // Output: 40
}
console.log(localVarWithVar); // Output: 10
// console.log(localVarWithLet); // Error: localVarWithLet is not defined

//local scope
for (let i = 0; i < 3; i++) {
    let loopVar = "I am local variable"; // Locally scoped
    console.log(loopVar); // Output: "I am local"
}
// console.log(loopVar); // Error: loopVar is not defined

//Hoisting
// console.log(myVar); // Output: undefined (hoisted)
var myVar = 10;
console.log(myVar); // Output: 10