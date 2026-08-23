let age = true

console.log(typeof age);

let valueInNumber = Number(age)
console.log(typeof valueInNumber);
console.log(valueInNumber);


// Notes

// "20" => 20
// "20abc" => NaN (Not a Number)
// null => 0
// true => 1
// false => 0

let isLoggedIn = "junaid"

let BooleanLoggedIn = Boolean(isLoggedIn)
console.log(BooleanLoggedIn);

// Notes
// 1 => true 
// 0 => false
// "" => false
// "junaid" => true

let num = "119"

let stringNumber = String(num)
console.log(typeof stringNumber);


// *********************** Operations*************************

let value = 6
let negVal = -value
console.log(negVal);

// Basic Arithmetic Operations
// 2+2
// 2-2
// 2*2
// 2/2
// 2%2

let str1 = "Hello"
let str2 = " World!"

let str3 = str1 + str2
console.log(str3);

console.log(1 + "2");
console.log("1" + 2);
console.log(1+2+"2");

// Tricky Conversions (highly unappriciated)

console.log(+true);
console.log(-true);
console.log(+false);
console.log(-false);

console.log(+"");

// Code readability and simplification is most noticed and important factor, don't ever code like this

let num1, num2, num3

num1 = num2 = num3 = 2 + 2 



// Prefix and Postfix assignment operator 

let counter = 206
++counter;
console.log(counter);

let newcounter = 310
newcounter++;
console.log(newcounter);

