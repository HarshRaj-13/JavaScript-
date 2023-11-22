console.log();
console.log("--------------------NUMBERS------------------------")

const score = 400
console. log(score); //output : 400
const balance = new Number(100)
console. log (balance); // output : [Number: 100] --> explicitly tells whether var is a Number
const str = new String("Harsh")
console.log(str); // output : [String: 'Harsh']

console.log(typeof(score.toString())) // string
console.log(typeof(str)) // object

console.log(score.toFixed(2)) // give result upto two floating points
console.log(score.toFixed(3)) // give result upto three floating points

const num = 134.49
console.log(num.toPrecision(3))

const hundreds = 100000 
console.log(hundreds.toLocaleString('en-IN')); // comma laga ke dega indian number system ke hisab se

console.log("------------------------MATHS---------------------")

console.log(Math);
console.log(Math.abs(-4))
console.log(Math.round(4.4))
console.log(Math.ceil(4.2)) // 4 se thoda sa bhi bada toh next val dega i.e 5
console.log(Math.floor(4.9))// 4.1 se 4.9 rhega toh bhi floor(chota) value dega i.e 4
console.log(Math.min(1,2,3,4))

console.log()

console.log(Math.random()) // gives values in range of 0-1
console.log(Math.random() * 10 + 1) // for dice game ,+1 is added to avoid 0

console.log(Math.floor(Math.random()*10) + 1);
const min = 1
const max = 6
console.log(Math.floor(Math.random()*(max - min + 1)) + min)
