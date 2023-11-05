var c = 300 // thats the problem b/c if you print then value of var c is still 300 and 
            // suppose agar bahar se aata if file toh dikkat ho jata kyunki hm var c ko 300 de rhe aur
            // print 30 ho rha.
            
let a = 200 // Global scope
if(true){
    let a = 1
    const b = 2
    var c = 3
    console.log(a);
}
// console.log(a); -->  The scope of a let variable is block scope. this line not print a if let a is not declared globally
// console.log(b); -->  The scope of a const variable is block scope.
console.log(c);
console.log(a);