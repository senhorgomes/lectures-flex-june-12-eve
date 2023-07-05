//fs? Filesystem?
//A node module that allows us to interact with the file system
const fs = require("fs")
//Read all three text files, and add them up
//How can I add these files together?
//run three readfiles? and add a console.log at the end?
//Can we add some sort of delay to the console.log? Maybe a setTimeout?
let sumOfFiles = 0;
fs.readFile("./data1.txt", "utf8", (error, data)=>{
    if(error){
        console.log(error)
    } else {
        sumOfFiles += Number(data);
        // Read the second file
        fs.readFile("./data2.txt", "utf8", (error, data)=>{
            if(error){
                console.log(error)
            } else {
                sumOfFiles += Number(data);
                // Read the third file
                fs.readFile("./data3.txt", "utf8", (error, data)=>{
                    if(error){
                        console.log(error)
                    } else {
                        sumOfFiles += Number(data);
                        console.log(sumOfFiles);
                    }
                })
            }
        })
    }
})
