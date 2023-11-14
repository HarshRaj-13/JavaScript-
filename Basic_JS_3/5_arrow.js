// function chai(){
//     let name = "Harsh"
//     console.log(this.name)
// }
// chai()

// const chai = function(){
//     let name = "Harsh"
//     console.log(this.name) 
// }
// chai()

const chai = () => { // Arrow function
    let name = "Harsh"
    console.log(this.name)
}
chai()

//Explicit return 
const addTwo = (num1,num2) => {
    return num1 + num2
}
console.log(addTwo(3,4))

// Implicit return
const addThree = (num1,num2) => num1 + num2
//              or
const addThre = (num1,num2) => (num1 + num2)
// curly braces {} mein rap kra toh return likhna padega . () --> parenthesis
console.log(addThree(4,4));
console.log(addThre(5,4));

// this implicit return and arrow function used very much in react.

// An implicit return is a way of returning a value from a function without explicitly using the return keyword. This can be done by using arrow functions, which have a shorthand syntax that allows you to omit the return keyword when the function only has one expression.

// returning a object using implicit return

const obj = (name) => ({username : name})

console.log(obj("harsh"))