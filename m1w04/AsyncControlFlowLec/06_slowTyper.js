//Create a function that goes through a string very slowly
const stringExample = "Hello World\n"
//Loop through this string, and console.log each letter
// Mutiply the time by the index
let delay = 1000;
for(let letter of stringExample){
    // console.log(letter)
    // console.log(stringExample.indexOf(letter))

    setInterval(()=>{
        process.stdout.write(letter);
        // delay += stringExample.indexOf(letter) * delay;
    }
    ,delay);
    delay += 500;
}
// H = 1000
// e = 1500
// l = 2000
// l = 2500
// o = 3000