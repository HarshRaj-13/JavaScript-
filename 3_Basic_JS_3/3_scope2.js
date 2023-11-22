// Example : 1
function one () {
    const username = "hitesh"

    function two (){
        const website = "youtube"
        console. log (username)
    }
    // console. log (website)  --> Gives Error

    two()
} 
one ()

// Example : 2
if(true){
    const username = "Harsh"
    if(username === "Harsh"){
        const website = " Youtube"
        console.log(username+website);
    }
    // console.log(website) --> Gives Error
}
// console.log(username) --> Gives Error 


//<---------------- Concept for HOisting -------------------->

addOne(5)
function addOne(num){
    return num + 1
}

// addTwo(5) // Gives Error that --> Cannot access 'addTwo' before initialization
const addTwo = function(num){
    return num+2
}
addTwo(5)

// function ka value addTwo hold kr rha aur addTwo(5) phele hi call ho rha toh ye she nhi hai haa but 
// agar value hold nhi ho rha toh koi error nhi ayega , see addOne(5) func . it does'nt get hold by any var.