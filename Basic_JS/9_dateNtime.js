// DATES

let myDate = new Date();
console.log(typeof(myDate))
console.log(myDate);                       // 2023-11-01T09:38:06.629Z
console.log(myDate.toString());            // Wed Nov 01 2023 09:38:06 GMT+0000 (Coordinated Universal Time)
console.log(myDate.toDateString());        // Wed Nov 01 2023
console.log(myDate.toISOString());         // 2023-11-01T09:38:06.629Z
console.log(myDate.toTimeString());        // 09:38:06 GMT+0000 (Coordinated Universal Time)
console.log(myDate.toLocaleString());      // 11/1/2023, 9:38:06 AM
console.log(myDate.toLocaleDateString());  // 11/1/2023
console.log(myDate.toJSON());              // 2023-11-01T09:38:06.629Z


let myCreatedDate = new Date (2023, 0, 13) // jan-0 to dec-11
let myCreatedDate2 = new Date (2023, 0, 13 , 3, 5) 
console.log(myCreatedDate. toDateString())
console.log(myCreatedDate2. toLocaleString())





