let score1 = "33"
let score2 = "33abc"
let score3 = null 
let score4 = undefined
let score5 = true // if false then 0 in output

let valueInNum1 = Number(score1) // to change from any datatype to number
let valueInNum2 = Number(score2)
let valueInNum3 = Number(score3)
let valueInNum4 = Number(score4)
let valueInNum5 = Number(score5)

console.table([typeof(valueInNum1),typeof(valueInNum2),typeof(valueInNum3),typeof(valueInNum4),typeof(valueInNum5)])
console.table([valueInNum1,valueInNum2,valueInNum3,valueInNum4,valueInNum5])
// NaN --> not a number but its type is number itself.

let isLog = 67
let intToBool = Boolean(isLog)
console.log(intToBool) // ans : true
/* isLog = "harsh" --> true
   isLog = "" --> false
   isLog = 0 --> false
   isLog = 2/3/....n --> true
*/

let num = 12
let strToInt = String(num)
console.log(strToInt)
console.log(typeof(strToInt))







