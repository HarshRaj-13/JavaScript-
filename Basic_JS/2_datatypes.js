"use strict" // it means treat all JS code as newer version .

// alert(3+3) --> we are using nodejs not console browser

let name = "Harsh" // String
let age = 19 // int
let flag = true // boolean

//🔥 null is a standalone value

let investigate // Undefined means variable is declared but value is not defined
let investigate2 = null // null is a representation of empty value.

console.table([investigate,investigate2])

console.log("Type of Null is : " + typeof null + "🤔")

/*➡️ symbol --> JavaScript Symbols are a new type of primitive data type introduced in the ES6 version of the language. They are used to represent unique values that can be used as identifiers or keys in objects. They are also used to create private properties and methods in classes.
        A symbol is a unique and immutable data type and may be used as an identifier for object properties. 
*/

console.log(typeof "Harsh")
console.log(typeof 12)
console.log(typeof true)
console.log("Type of null is :" + typeof null + "🔥")


// JavaScript is a dynamically typed language, which means that data types of variables are determined by the value they hold at runtime and can change throughout the program as we assign different values to them.

// Primitive : 7 types : String, Number, Boolearn, null, undefined, Symbol , bigint

// Reference (Non primitive) : Array, Objects, Functions


console.log("--------------------")

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId);

const bigNum = 234324234234n // bigint
console.log(typeof(bigNum))

const arr = ["harsh" , 23 , "raj"]

let obj = {
        name: "harsh",
        age: 22,
}
const func = function(){
        console.log("Hello")
}


// Return type of variables in JavaScript
// 1) Primitive Datatypes
//        Number => number
//        String  => string
//        Boolean  => boolean
//        null  => object
//        undefined  =>  undefined
//        Symbol  =>  symbol
//        BigInt  =>  bigint

// 2) Non-primitive Datatypes
//        Arrays  =>  object
//        Function  =>  function
//        Object  =>  object
