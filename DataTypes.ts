let age: number = 27;
let username: string = "Fahad";
let isAdmin: boolean = true;
let hobbies: string [] = ["coding", "gardening", "cycling"];
let anything: any = "I can be anything";

let person: [string, number] = ["ABC", 30];

let UserID: string | number
UserID = "Fahad";
UserID = 27;

// 1. boolean
let isActive: boolean = true;
isActive = false;
console.log("Boolean: " + isActive);

// 2. number
let age2: number = 25;
let price: number = 99.99;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;
console.log("Number: ", age2, price, hex, binary, octal);

//3. String
let firstName: string = "Fahad";
let greeting: string = `Hello, ${firstName} `;
console.log("String: ", greeting);

//4. Array
let numArr : number[] = [20, 1, 1998];
let StrArr: Array<string> = ["TS", "JS", "Java"];
console.log("Array: ", numArr, StrArr, StrArr.join("-"));

//5. Tuple
let TupleEx: [string, number];
TupleEx = ["Score", 100];
console.log("Tuple: ", TupleEx);

//6. Enum
enum Color {Red, Green, Blue}
let c: Color = Color.Green;
console.log("Enum: ", c, Color[2]);

//7. Any
let randomValue: any = "Hello";
randomValue = 25;
console.log("Any: " , randomValue);

//9.  function
function logMessage(message: string) : void {
    console.log("Void Function: ", message);
}

logMessage("Logging Example! ");

//To run a ts file:
// npm install -g typescript
// npm install -g ts-node
// tsc -v
// ts-node -v
// tsc DataTypes.ts
// node DataTypes.js





