// objects can be declared using literals and constructor. Objects made using constructor are termed as singelton but not using literals

// Object Literals
const mySym = Symbol("key")
const obj = {
    "full Name":"Harsh Raj",
    name : "Harsh",
    [mySym] : "mySymbol",
    age : 21,
    email : "harshraj13@gmail.com",
    male : true
}

// accessing objects properties

console.log(obj.name); // method 1 
console.log(obj["age"]);//method 2
// console.log(obj.full Name); --> cant be acess using (.) operator
// we have to use second method
console.log(obj["full Name"])
console.log(obj[mySym])

// changing obj values
obj.age = 22
console.log(obj.age)
delete obj.male
console.log(obj)

obj.height = 12
console.log(obj); // interesting b/c we add properties from outside 

obj.greetings = function(){
    console.log("hello sir");
}
console.log(obj.greetings); // o/p : [Function (anonymous)] , func execute nhi hua hai bs uska reference aya hai.
console.log(obj.greetings()); // o/p : hello sir undefined


obj.greetingTwo = function(){
    console.log(`hello sir, ${this["full Name"]}`);
}
console.log(obj.greetingTwo());
// freezing object ==> freezing object means it can no longer be changed: new properties cannot be added, existing properties cannot be removed. freeze() returns the same object that was passed in.
Object.freeze(obj)
// obj.age = 23
// console.log(obj.age); output : 22

