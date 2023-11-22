// () --> parenthesis
// [] --> brackets
// {} --> curly braces

/*The Array object, as with arrays in other programming languages, enables storing a collection of multiple items under a single variable name, and has members for performing common array operations.

JavaScript arrays are resizable and can contain a mix of different data types. 


INTERVIEWS IMP : JavaScript array-copy operations create shallow copies. (All standard built-in copy operations with any JavaScript objects create shallow copies, rather than deep copies).

A shallow copy of an object is a copy whose properties share the same references.

A deep copy of an object is a copy whose properties do not share the same references.
*/


// Array Declaration 
const arr = [1,"Raj",true,3,4] // Method 1
const arr1 = new Array(1,"Raj",true,3,4) // Method 2
console.log(arr[1]);
console.log(arr);
console.log(arr1);

// Array Methods

arr.push(6) // [ 1, 'Raj', true, 3, 4, 6 ]
arr.push(7) // [ 1, 'Raj', true, 3, 4, 6 , 7]
arr.pop() //   [ 1, 'Raj', true, 3, 4, 6] --> remove last element.
arr.unshift(9) // [ 9, 1, 'Raj',true, 3, 4, 6] --> starting mein element add krega lekin this is time consuming and not optimized.
arr.shift() // [ 1, 'Raj', true, 3, 4, 6] --> remove 1st element.
console.log(arr.includes(9)) // false
console.log(arr.includes(4)) // true
console.log(arr.indexOf(9)) // -1
console.log(arr.indexOf(4)) // 4

// VVI 

const num = arr.join() // returns a new string by concatenating all of the elements in this array, separated by commas or a specified separator string. If the array has only one item, then that item will be returned without using the separator.
console.log(num)
console.log(typeof(num))


// slice and splice method --> for interview
console.log("-------Slice n Splice-----------");

const a = [1,2,3,4,5,6]
console.log("a =" , a);
const a1 = a.slice(1,3) // 3 is exclusive
console.log("slice a :" , a1);
console.log("original array after slicing" , a);
const a2 = a.splice(1,3) // 3 is inclusive
console.log("splice a :" , a2);
console.log("original array after splicing" , a); // original array gets manipulated after splicing

 



