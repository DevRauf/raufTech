// // Abdul Rauf ------- Q.No.1
// let num1 = prompt("Enter the first number:");
// let num2 = prompt("Enter the second number:");
// if (num1 > num2) {
//     console.log(num1 + " is larger than " + num2);
// } else if (num2 > num1) {
//     console.log(num2 + " is larger than " + num1);
// } else {
//     console.log("The numbers are equal.");
// }
// //---------------------------------------------------

// //  Abdul Rauf ------- Q.No.2
// var num = prompt("Enter a number:");
// if (num > 0) {
//     alert("The sign is +");
// } else if (num < 0) {
//     alert("The sign is -");
// } else {
//     alert("The number is zero.");
// }
// //---------------------------------------------------

// //  Abdul Rauf ------- Q.No.3
// let num1 = prompt("Enter the first number:");
// let num2 = prompt("Enter the second number:");
// let num3 = prompt("Enter the third number:");
// let num4 = prompt("Enter the fourth number:");
// let num5 = prompt("Enter the fifth number:");
// let largest = num1;

// if (num2 > largest) {
//     largest = num2;
// }

// if (num3 > largest) {
//     largest = num3;
// }

// if (num4 > largest) {
//     largest = num4;
// }

// if (num5 > largest) {
//     largest = num5;
// }

// console.log("The largest number is " + largest);
//-------------------------------------------------------------------



// // //  Abdul Rauf ------- Q.No.4

// for (let i = 0; i <= 15; i++) { 
//     if (i % 2 === 0) {
//         console.log(i + " is even");
//     } else {
//         console.log(i + " is odd");
//     }
// }

// // // //---------------------------------------------------
// // //  Abdul Rauf ------- Q.No.6

// for (let i = 1; i <= 100; i++) {

//     if (i % 3 === 0 && i % 5 === 0) {
//         console.log("FizzBuzz");
//     } else if (i % 3 === 0) {
//         console.log("Fizz");
//     } else if (i % 5 === 0) {
//         console.log("Buzz");
//     } else {
//         console.log(i);
//     }
// }

//========== Q.no 7
// Loop through each row
for (let i = 1; i <= 5; i++) {
    let row = "";
    // Loop through each column in the current row
    for (let j = 1; j <= i; j++) {
        row += "* ";
    }
    console.log(row);
}