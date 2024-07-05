var twenty = 20;
var thirty = 30;
var apple = "apple";
var uppercase = "APPLE";
var frouts = ["apple", "banana", "orange"];
//test equality and inequality
console.log("apple is equal to apple");
console.log(apple == apple);
console.log("apple is not equal to apple");
//test lowercase function
console.log("is APPLE is equal to apple to converting lowercase");
console.log(uppercase.toLowerCase() == "apple");
console.log("\n is APPLE is not equal to apple after converting  to lowercase ");
console.log(uppercase.toLowerCase() != "apple");
//numerical test
//equal to
console.log("\n is thirty is equal to twenty?");
console.log(thirty == 20);
//not equal to
console.log("\n is twenty is not equal to thirty?");
console.log(twenty != 30);
//greater than
console.log("\nis  ten is greater than 0?");
console.log(10 > 0);
//less than
console.log("\n is ten is less than 0?");
console.log(10 < 0);
//greater than or equal to
console.log("\n is thirty is greater than or equal to 20:");
console.log(thirty >= 20);
//lessthan or equal to
console.log("\n is thirty is lessthan or equal to 20?");
console.log(thirty <= 20);
//test using "and "  operators (&&)
console.log("\n twenty is not equal to ten and twenty is greater than ten");
console.log(twenty != 10 && twenty > 10);
//using "or"(||) operators
console.log("\n twenty is equal to ten or twenty is greater than 50 ");
console.log(twenty == 20 || twenty > 50);
//
console.log("\n twenty is equal to ten or twenty is greater than 50 ");
console.log(twenty == 20 || twenty != 50);
//test wheather an item include array
console.log("\n is orange include in my array");
console.log(frouts.includes("orange"));
console.log("\n is orange not include my array");
console.log(!frouts.includes("orange"));
