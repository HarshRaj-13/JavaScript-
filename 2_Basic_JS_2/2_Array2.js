const marvel = ["IronMan" , "Thor" , "Captain-America"]
const dc = ["SuperMan" , "AquaMan" , "BatMan"]

// marvel.push(dc)
console.log(marvel)//[  'IronMan','Thor','Captain-America',[ 'SuperMan', 'AquaMan', 'BatMan' ]]

// console.log(marvel[3][2]) // BatMan --> but this is not a good practise

const allHeroes = marvel.concat(dc)
console.log(allHeroes) //['IronMan','Thor','Captain-America','SuperMan','AquaMan','BatMan']

// concat return a new array including both array while push method add an array as element in a different array

const againAll = [...marvel,...dc]
console.log(againAll);//['IronMan','Thor','Captain-America','SuperMan','AquaMan','BatMan']

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
const real_another_array = another_array.flat(Infinity)
console.log(real_another_array)


console.log(Array.isArray("Hitesh")) // check whether value within parenthesis is array or not in this case it returns false
console.log(Array.from("Hitesh")) //[ 'H', 'i', 't', 'e', 's', 'h' ]
console.log(Array.from({name: "hitesh"})) //[] --> INteresting for interview

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));
