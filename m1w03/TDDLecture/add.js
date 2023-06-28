// This function will take in two numbers and output the added result
// Two numbers (2+2), and output the result

// const add = (number1, number2) => number1 + number2
const add = (number1, number2) => {
    // type of each number
    if(number2 === undefined){
        // return "Hey, you're missing a number!";
        throw new Error("Looks like you forgot a number!")
    }
    if(typeof number1 === "string" || typeof number2 === "string"){
        throw new Error("Looks like you inserted a string instead of a number!")
    }
    return number1 + number2;
}

module.exports = add
