// for-each loop is higher order method
const arr = ["js", "ruby", "java", "python", "cpp"]

arr.forEach( function (val){ // function inside forEach is called as callback func and it does'nt have any name. 
    console.log(val);           // val = arr[idx];
} )

// implementing forEach using arrow callback func.

// coding.forEach( (item) => {
//     console.log(item);
// } )

function printMe(item){ 
    console.log(item);
}

arr.forEach(printMe) //  printMe() --> don't put bracket as we are passing its reference b/c putting bracket means 
//                          we are executing it.

// taking more than one value in callBack func. 

// coding.forEach( (item, index, arr)=> {
//     console.log(item, index, arr);
// } )

// [{},{},{}] --> UnderStainding this as it is used most of the time and also it is used more in forEach loop.

console.log("<------------------------------------------------------------>");

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    console.log(item.languageName);
} )

// here item is each object that is present at each idx of array.