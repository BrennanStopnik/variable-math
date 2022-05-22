/*
Create three variables, a, b, and c.

Set them to any numbers you please as long as:

a is not zero
b² is greater than or equal to 4 × a × c
Now use the quadratic formula (oh no) to calculate two value of two new variables, x1 and x2.

Note: you'll need to do the formula twice. For x1, use a + in place of the ± symbol. For x2, use a -.
*/

let a = 15;
let b = 27;
let c = 11;

let d = Math.sqrt(b**2 - (4 * a * c));

let x1 = (-b + d) / (2 * a);
let x2 = (-b - d) / (2 * a);

console.log("The value of x1 is: " + x1);
console.log("The value of x2 is: " + x2);

let b2 = b**2;
let ac = 4 * a * c;

console.log("This is b squared: " + b2);
console.log("This is 4ac: " + ac);
