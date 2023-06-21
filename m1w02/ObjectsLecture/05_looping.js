//How can we iterate(or loop) through objects?
// for..of
// c style loop
// .forEach()
// for..in
// while
const carOneObject = {
  // key: value
  doors: 4,
  color: "pink",
  transmission: "automatic",
  wheels: 4
}
const randomArray = ["hello", "pizza", "coffee", "computer"];
// objects, it allows us to loops through the KEYS of an object
for(let key in carOneObject){
  console.log(carOneObject[key]);
}
// Extracts keys
console.log(Object.keys(carOneObject))
// Extracts values
console.log(Object.values(carOneObject))
