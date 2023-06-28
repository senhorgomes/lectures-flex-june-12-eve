const { assert } = require("chai");
// import the function we want to test
const add = require("../add");

describe("Testing add function", ()=> {
    xit("function receives 2 and 3 as arguements and returns 5", ()=>{
        // .equal takes in the function we want to test, and the output we are expecting
        assert.equal(add(2,3), 5);
        // add(2,3) returns 5
        // compares it with the expected result => 5
        // Tell us it passed the test
    })
    xit("function receives 10 and 10 as arguements and returns 20", () => {
        assert.equal(add(10,10),20);
    })
    xit("function receives only one number, and returns a string", () => {
        assert.equal(add(10), "Hey, you're missing a number!")
    })
    xit("function throws an error, if only one number is received", () => {
        assert.throws(() => add(1), "Looks like you forgot a number!")
    })
    xit("function receives strings instead of numbers", () => {
        assert.throws(() => add("2","3"), "Looks like you inserted a string instead of a number!")
    })
    xit("function can add negative numbers", () => {
        assert.equal(add(-2, 3), 1)
    })
})