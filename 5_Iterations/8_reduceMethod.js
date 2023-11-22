const myNums = [1, 2, 3]

// reduce can be used many times while adding cart value in e-commerce site 

const myTotal = myNums.reduce(function (acc, currval) {
    console.log(`acc: ${acc} and currval: ${currval}`);
    return acc + currval
}, 0) // we need acc(accumulator) to assign it as initial value. here we are giving it 0 as intial value.

console.log(myTotal);

// Expected Output :
// acc: 0 and currval: 1
// acc: 1 and currval: 2
// acc: 3 and currval: 3
// 6




// Writing reduce usign Arrow Function

const nums = [1, 2, 3,4,5]

const total = nums.reduce( (acc, curr) => acc+curr, 0)
console.log(total);

console.log("<-------------------EXAMPLES-------------------->");


const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const priceToPay = shoppingCart.reduce((accumulator, currval) => accumulator + currval.price, 0)
// currVal referening each object one by one

console.log(priceToPay);