for(let i = 0 ; i<5 ; i++){
    printMyName()
}
function printMyName(){
    console.log("Harsh Raj");
}
//---------------------------------------------------------------->>

function add(n1,n2){ // value recieved are called parameters
    console.log(n1+n2);
}
add(2,"a") // value passed are called arguments.

//---------------------------------------------------------------->>

function addnReturn(n1,n2){
    // let res = n1+n2
    // return res
    return n1+n2
}

const res = addnReturn(3,5)
console.log(res)

//---------------------------------------------------------------->>

function loggedIN(userName){
    if(userName === undefined){
        console.log("Please ener a username")
        return
    }
    return `${userName} just logged in`
}

console.log(loggedIN("Harsh"));
console.log(loggedIN(""));
console.log(loggedIN());

//----------------------------------------------------------------->>

function calculateCartValue(val1 , val2 , ...num){ // here (...) is rest operator
    return num
}
console.log(calculateCartValue(100,200,300,400,500))

//------------------------------------------------------------------>>

const user = {
    username : "Harsh Raj",
    price : 199
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}

// handleObject(user) // Method 1

// Method 2 --> directly pass object in parameter
handleObject({
    username : "Harsh Raj",
    price : 199
})

// Passing array

const arr = [1,2,3,4]

function returnArr(getArr){
    return getArr[1]
}

console.log(returnArr(arr))
console.log(returnArr([1,2,3,4]))