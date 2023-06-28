// const arrayOfRandomElements = [1,2,"coffee",4,5]

const { assert } = require("chai");
const modifyArray = require("../modifyArray");

describe("Testing modifyArray function", () => {
    it("can add two to each number in the array", () => {
        assert.deepEqual(modifyArray([1,2,3]),[3,4,5])
    })
})