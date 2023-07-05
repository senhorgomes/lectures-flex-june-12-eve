//Functions
function anonymousFunction(){

}

const functionExpression = function(){

}

const arrowFunctions = () => {

}
//Callbacks?
const complicatedConsoleFunction = (callback) => {
    callback()
    console.log("Hello");
}
const anotherFunction = () => {
    console.log("Hey im another function!")
}
// Invoking function
// complicatedConsoleFunction();
//Higher order functions?
const higherOrderFunction = (callback) => {
    callback();
}

// higherOrderFunction(complicatedConsoleFunction(anotherFunction));