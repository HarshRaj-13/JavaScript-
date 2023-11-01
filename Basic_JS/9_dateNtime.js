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

console.log("-------------------------------------------")

// let myCreatedDate = new Date (2023, 0, 13) // jan-0 to dec-11
// let myCreatedDate2 = new Date (2023, 0, 13 , 3, 5) 
// console.log(myCreatedDate. toDateString())
// console.log(myCreatedDate2. toLocaleString())

// let myCreatedDate = new Date(2023, 0, 23)
 // let myCreatedDate = new Date(2023, 0, 23, 5, 3)
// let myCreatedDate = new Date("2023-01-14")
let myCreatedDate = new Date("01-14-2023")
console. log (myCreatedDate. toLocaleString());

console.log("-----------TIME STAMP------------");

let myTimeStamp = Date.now()
//console.log(myTimeStamp); // output is very big number which is in milliseconds from year 1970
// console.log(myCreatedDate.getTime()) // output : big value
 console. log (Math. floor (Date. now()/1000));// to deal in seconds {IMP for INTerviews}

 let newDate = new Date()
 console.log(newDate)
 console.log(newDate.getMonth() + 1);
 console.log(newDate.getDay());
 
// below one is imp for interview

newDate.toLocaleString('default' , {
    weekday:"long",
})




