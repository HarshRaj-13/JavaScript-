var c = 300 // thats the problem b/c if you print then value of var c is still 300 and 
            // suppose agar bahar se aata if file toh dikkat ho jata kyunki hm var c ko 300 de rhe aur
            // print 30 ho rha.
            
let a = 200 // Global scope
if(true){
    let a = 1
    const b = 3
    var c = 4
    console.log(a);
}
// console.log(a); -->  The scope of a let variable is block scope. this line not print a if let a is not declared globally
// console.log(b); -->  The scope of a const variable is block scope.
console.log(c);
console.log(a);

// Before ES6 (2015), JavaScript had only Global Scope and Function Scope.

// ES6 introduced two important new JavaScript keywords: let and const.

// These two keywords provide Block Scope in JavaScript.

// Variables declared inside a { } block cannot be accessed from outside the block:

