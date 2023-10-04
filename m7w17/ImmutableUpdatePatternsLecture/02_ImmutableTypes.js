//What other structures do we have in Javascript?

//Objects
//Arrays
//Methods(Functions)

const newArrayOfNumbers = [1,2,3,4,5];
const cloneOfNewArrayOfNumbers = newArrayOfNumbers;

cloneOfNewArrayOfNumbers.pop()

console.log(newArrayOfNumbers);

const newObject = {
    key: "value",
    hello: "boo",
    christmas: "Mariah Carey",
    number: 6
}


const anotherObject = {...newObject}

newObject.number = 6