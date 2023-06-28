# How to approach a problem
- Break into smaller pieces/Breaking down the problem
- Find what kind of problem it is
- Understanding the problem
- What result are we expected to get? (input/output)
- Edge Cases/Base Case
- Reverse engineering
- pseudo code


# Coding problems

- Creating a skeleton/Pseudo code


### Create a function that takes in an array, and adds two to each element in that array.

- Break down the problem
    - Create a skeleton of a function
        - inputs/ouputs
    - Input
        - an array of numbers
        - We shouldnt have any other inputs except for an array of numbers
        - should not be an empty array

```javascript
const modifyArray = (array) =>{
    // check if all elements in the array are numbers
    // If they are we should return false
    for(let element of array){
        if(typeof element !== number){
            return false
        }
    }
    return array
}
const arrayOfRandomElements = [1,2,"coffee",4,5]
console.log(modifyArray(arrayOfRandomElements)); //false
```

When to use TDD?
 - Is my function being used for a larger application?

- Edge Cases
    - Extreme situations that we will put your function through
    - Happy cases :)
        - User inputs exactly what should be passed in, and we return exactly what sould be outputted(modified array)

    - Sad cases :(
        - Input not an array
        - Arrays dont have numbers in them
        - No input
        - Empty array
        - What if the numbers are negative?
        - Output is not correct