//Two ways to look up values in objects
//dot notation - object.key
//bracket or square bracket notation - object["key"]
let carOneObject = {
  // key: value
  doors: 4,
  "color": "pink",
  transmission: "automatic",
  wheels: 4,
  4: "true"
}
const color = "wheels"
// console.log(carOneObject.color)
// console.log(carOneObject["color"])
console.log(carOneObject.4)
// const listOfCars = [carOneObject, carTwoObject, carThreeObject];
// console.log(listOfCars[2])
// console.log(carOneObject["wheels"])
// Dot notation will always refer to the key name
// Bracket notation can be used to refer the key name by wrapping it in "" or by passing in a variable
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
  // price, fuel type
}
// dot notation
// carThreeObject.fuelType = "Water";
// console.log(carThreeObject)
// carThreeObject.fuelType = "Food scraps";
// sqaure bracket notation
// carThreeObject["fuelType"] = "clouds";
// console.log(carThreeObject)
// carThreeObject["fuelType"] = "nuclear reactor";
// console.log(carThreeObject)
// how to remove a key
// modify objects via functions
const changingFuelType = function(carObject, newTypeOfFuel){
  carObject.fuelType = "uranium"
  console.log("before function call:",carObject)
  return carObject
}
// changingFuelType(carOneObject, "uranium")
// console.log("after function call:",carOneObject)
// carOneObject = {}
console.log(carOneObject)
// console.log("before delete call:",carThreeObject)

// operator
// delete carThreeObject.fuelType
// console.log("after delete call:",carThreeObject)