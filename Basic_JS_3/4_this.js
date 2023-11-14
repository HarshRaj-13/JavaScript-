// “This” keyword refers to an object that is executing the current piece of code. It references the object that is executing the current function.
// If the function being referenced is a regular function, “this” references the global object.

const user = {
    userName : "Harsh",
    id : 30,
    welcomeMessage : function(){
        console.log(`${this.userName}, welcome to our Website`);
        console.log(this);
    }
}

user.welcomeMessage()
user.userName = "Raj"
user.welcomeMessage()

// console.log(this); --> output : {}

// Interview : which is the most global object in javascript ? Ans : window object

console.log("<-------------------------------------------->")
 
function chai(){
    let name = "Harsh"
    console.log(this)
    // console.log(this.name) --> output : undefined b/c this cannot be used in function it can be used in object.
}
chai()



