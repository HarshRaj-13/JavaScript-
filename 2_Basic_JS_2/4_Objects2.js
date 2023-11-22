// const obj1 = {} // non singleton object
const obj = new Object() // singleton object

obj.name = "Harsh raJ"
obj.age = 21
obj.online = true

console.log(obj)

// we can do multiple nesting of objects

const obj1 = {
    name : "raja ji",
    obj2 : {
        qualification : "btech",
        obj3 : {
            isTrue : true
        }
    }
}
console.log(obj1.obj2.obj3.isTrue)
// console.log(obj1.obj2?.obj3.isTrue) --> ye dono line same hai bs niche wale mein obj2 ke baad ? lag gaya hai jiska kaam bas itna hi hai ki wo check krega ki kya obj2 exsist krta hai nhi , agar haa toh koi dikkat nhi aur agar nhi hai toh wo nesting ko continue rakhega aur obj3 par chal jayega.

// Merging two objects.

const ob1 = {1:"a" , 2:"b"}
const ob2 = {3:"a" , 4:"b"}

// const obj3 = {ob1 , ob2} --> not a good practise whi array wala problem ayega ki obj ke andar obj show hoga

// correct way METHOD-1
const ob3 = Object.assign({},ob1,ob2)//--> assign ke andar {} optional hai but dena achha rheta hai 
console.log(ob3);

//METHOD-2 (using ... spread operator)
const obj3 = {...ob1 , ...ob2}
console.log(obj3);

// how data are come from database ? sol-- Array of objects
const users = [ 
    {
        id:1,
        email:"sfdsf@gamil.com"
    },
    {},{}
]
console.log(users[0].email);

console.log(obj);
console.log(Object.keys(obj)) // --> NOTE : all keys are comes in an array that we can use.
console.log(Object.values(obj))
console.log(Object.entries(obj)) // haar ek key:value pair ko array mein store kr deta hai

console.log(obj.hasOwnProperty("name")) // to check whether property is there or not in an object