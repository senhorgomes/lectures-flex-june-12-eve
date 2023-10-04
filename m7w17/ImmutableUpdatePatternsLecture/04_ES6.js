//Deconstructing

const newObject = {
    key: "value",
    hello: "boo",
    christmas: "Mariah Carey"
}

const {christmas, hello} = newObject;

console.log(christmas)
//Spread operators/unlimited arguements 

const addNumbers = (...args) => {
    let totalNumber = 0;
    for(let arg of args){
        totalNumber += Number(arg)
    }
    return totalNumber
}
//The user is always going to pass in only numbers
//Would we waste time and through all those numbers into an array?
const newArrays = [1,2,3,4,5]
console.log(addNumbers(1,2,3,4,5,46,761,61,1,0,68,168,16,1547,381,321,6))

//
