
console.log("1")
// Two parameters
// First one is a function
// The second one is a timer, in MS eg 1000ms = 1 second
// setTimeout(()=>{console.log("2")})
console.log("3")

const randomInterval = setInterval(()=>{console.log("2")}, 1000)

setTimeout(()=>{clearInterval(randomInterval)}, 5000)