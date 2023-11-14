// What is an IIFE? An IIFE (Immediately Invoked Function Expression) is a function that runs the moment it is invoked or called in the JavaScript event loop. Having a function that behaves that way can be useful in certain situations. IIFEs prevent pollution of the global JS scope.

// Named IIFE
(function chai() {
    console. log(`DB CONNECTED`);
})(); // semicolon dena jaroori hai agar do iife func back to back de rhe hai.

(function aurChai() {
    console. log(`DB CONNECTED 2`);
})();

(() => {
    console. log(`DB CONNECTED 3`);
})();

((name) => {
    console. log(`DB CONNECTED 3 ${name}`);
})("Harsh")

// () () --> first YELLOW parenthesis use to write the function defination and second Yellow parenthesis is its execution call.

