//Methods? What are those?
//Function. Usually a function thats attached to something
//Array.slice(0,-1)
//Array.at()
//Array.pop()
//String.length()
//Cake
//function
const cakeOne = {
  flavor: "vanilla",
  frosting: "chocolate",
  size: "L",
  layers: "4",
  sprinkles: true,
  shape: "circle",
  calories: "OVER9000",
  price: 200,
  cutSlice: function(pieces, size){
    console.log(`Cutting ${pieces} ${size} slice(s). Here is your slice(s), enjoy!`)
  }
}
cakeOne.cutSlice(6, "large")
// console.log(cakeOne.calories)
