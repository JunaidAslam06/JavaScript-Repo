// Basic Comparison

console.log(2>1);
console.log(2>=1);
console.log(2==1);
console.log(2<1);


// Different Data Types Comparison
// Always Prefer to compare same Data Types

console.log("2">1);
console.log(1>"3");


// In these conditions, null will be converted into a number automatically, and hence compared then
console.log(null>0);
console.log(null>=0);


// In this condition, null will not be converted into a number automatically, and hence compared then
console.log(null == 0);

console.log(undefined > 0);

console.log(undefined < 0);

console.log(undefined == 0);


// === Strict Check

console.log("3" === 3);
