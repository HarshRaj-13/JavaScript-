// iteration of objects using for in loop

const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in myObject) {
    // console.log(`${key} refers to ${myObject[key]}`);
}

// iteration on array using for in loop
const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    // console.log(key); --> gives idx as output : 0 1 2 3 4 
    console.log(programming[key]); // --> gives value at idx
}


//NOTE : map cannot be iterable ,so we cannot use for-in loop to iterate over map.