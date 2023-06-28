const modifyArray = (array) =>{
    if(array.length === 0){
        return false;
    }
    // check if all elements in the array are numbers
    // If they are we should return false

    for(let element of array){
        if(typeof element !== "number"){
            return false;
        }
    }

    return array.map((element)=> element + 2);
}

module.exports = modifyArray
// const arrayOfRandomElements = [1,2,"coffee",4,5]
// console.log(modifyArray(arrayOfRandomElements)); //false
// Testing to see if the function returns a false value, when an empty array is passed in
// console.log(modifyArray([])); //false