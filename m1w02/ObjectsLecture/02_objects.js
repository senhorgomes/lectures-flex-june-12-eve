//Why objects?
// Hold data/functionality
// They allow more complex data types
// Group similar items together

// Car

const carOne = [4, "automatic", 4, "Pink",];
const carTwo = [4, "Red", "manual", 2];
const carThree = ["Purple", 4, 2, "manual"]
// console.log(carThree[1])

const carOneObject = {
  // key: value
  doors: 4,
  color: "pink",
  transmission: "automatic",
  wheels: 4
}
const carTwoObject = {
  // key: value
  transmission: "manual",
  color: "red",
  wheels: 4,
  doors: 2
}
const carThreeObject = {
  // key: value
  color: "purple",
  transmission: "manual",
  doors: 2,
  wheels: 4
}
console.log(carTwoObject.transmission)
// Create a single item => use Objects
// Arrays are great for lists of items

const listOfCars = [carOneObject, carTwoObject, carThreeObject];
// console.log(listOfCars[2])