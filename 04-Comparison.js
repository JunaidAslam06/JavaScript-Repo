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
console.log("3"==="3");

// Personal Experience Trying my "C" concepts in "JS"

console.log("3" >= 3);

let a=30;
if (a>=30){
    console.log("hello");
    
} else {
    console.log("bye");
    
}

