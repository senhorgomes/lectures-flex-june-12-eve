const numbers = [900, 2, -52, 0, -500, 603, 59, 81, 1, "hello"];

//Loop through this array.
// Negative numbers equal to 0
const sleepySort = (array) => {
    for (let element of array) {
        // console.log(element)
        setTimeout(()=>{
            console.log(element)
        }, element)
    }
}
sleepySort(numbers)
