//this???

const dog1Object = {
  breed: "Labrador",
  furColor: "Grey",
  size: null,
  age: 2,
  happyBirthday: function(){
    console.log(delete this.age)
  },
}
console.log(dog1Object)



dog1Object.happyBirthday()
console.log(dog1Object)



///In this scenario, the key bob doesn't have a value assigned to it until we do so on line 32
//It still works, but we should avoid working like this because if the method is invoked prior to the assignment, it will return undefined.
// const dog1Object = {
//   happyBirthday: function(){
//     console.log(this.bob)
//   },
//   breed: "Labrador",
//   furColor: "Grey",
//   size: "Medium",
//   age: 2,
// }


// dog1Object.happyBirthday()
// dog1Object["bob"] = "Hello"
// dog1Object.happyBirthday()