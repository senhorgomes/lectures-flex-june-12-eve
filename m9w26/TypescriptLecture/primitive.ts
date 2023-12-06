// In javascript what are the primitive data types?

// String, number, boolean, null, undefined, symbol, bitInt

// Typescript inference - once a variable is set to a type, it cannot change types
// let numberThatGetsPassedIntoAFunction
let firstName: string = "Bryan"
// We can only assign strings to firstName
firstName = "Gomes"
// firstName = 5

const myNumber: number = 5;
const myBoo: boolean = true;
const myStr: string = "Hello!";
const myNull: null = null;
const myUndefined: undefined = undefined;
const mySymbol: symbol = Symbol("MySymbol");
const myBigInt: bigint = 100n;
const myUnknown: any = 5;
let random: any = "Hello!"
random = 5;
random = null;


