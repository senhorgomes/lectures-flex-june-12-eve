//Primitive Data Types?
// True/Truthy and False/Falsey
// String "Hello" => ""
// Boolean = False
// Number/Integer => 0
// Undefined = Default falsey
// Null = falsey

// Data Structures
// Objects => {}
// Arrays => []

const primitiveDataType = [];

function isItFalsey(value){
  if(value){
    console.log("This is truthy!")
  } else {
    console.log("This is falsey!")
  }
}
isItFalsey("")