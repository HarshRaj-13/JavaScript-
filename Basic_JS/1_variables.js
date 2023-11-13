const accId = 14453
let accEmail = "harshraj@gmail.com"
var accPassword = "12345"
accCity = "jaipur" // although this is possible but its not proper way of writing as its ruins code readibility.

// accId = 4321 --> Assignment to const is not possible.

/*The difference between let and var is in the scope of the variables they create: Variables declared by let are only available inside the block where they're defined. Variables declared by var are available throughout the function in which they're declared.
✅ therefore prefer not to use var.
*/
accEmail = "harshrajssm13@gmail.com"
accPassword = "54321"
accCity = "Bengaluru"
console.log(accId)
console.log("connecting replit")

console.table([accId,accEmail,accPassword,accCity])


