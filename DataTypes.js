var age = 27;
var username = "Fahad";
var isAdmin = true;
var hobbies = ["coding", "gardening", "cycling"];
var anything = "I can be anything";
var person = ["ABC", 30];
var UserID;
UserID = "Fahad";
UserID = 27;
// 1. boolean
var isActive = true;
isActive = false;
console.log("Boolean: " + isActive);
// 2. number
var age2 = 25;
var price = 99.99;
var hex = 0xf00d;
var binary = 10;
var octal = 484;
console.log("Number: ", age2, price, hex, binary, octal);
//3. String
var firstName = "Fahad";
var greeting = "Hello, ".concat(firstName, " ");
console.log("String: ", greeting);
//4. Array
var numArr = [20, 1, 1998];
var StrArr = ["TS", "JS", "Java"];
console.log("Array: ", numArr, StrArr, StrArr.join("-"));
//5. Tuple
var TupleEx;
TupleEx = ["Score", 100];
console.log("Tuple: ", TupleEx);
//6. Enum
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var c = Color.Green;
console.log("Enum: ", c, Color[2]);
//7. Any
var randomValue = "Hello";
randomValue = 25;
console.log("Any: ", randomValue);
