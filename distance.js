/*
Create four variables, `x1`, `y1`, `x2`, and `y2` and store numbers in each of them.

Calculate the distance between coordinates (x1, y1) and (x2, y2). Log this distance out to the user in a human readable sentence.

The distance formula along with an example can be found below.

Remember, squaring a number or an expression just means to multiply that number or expression by itself.  We can use the following syntax operations to square the number 5.
*/

let x1 = 3;
let y1 = 4;
let x2 = 5;
let y2 = 6;
let x3 = (x2 - x1)**2 + (y2 - y1)**2;
let z = Math.sqrt(x3)
z = +z.toFixed(3);

console.log("The distance between the points (" + x1 + ", " + y1 + ") and (" + x2 + ", " + y2 + ") is " + z);
