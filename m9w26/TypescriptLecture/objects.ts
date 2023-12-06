// const aTypicalObject = {
//     email: "bryan@gmail.com",
//     name: "Bryan",
// }
const aTypicalObject:{[key:string]: string} = {
    email: "bryan@gmail.com",
    name: "Bryan",
    // key: 5,
    // deepObject: {}
}

const deepObject:{[key:string]:{[key:string]: string}} ={
    anotherObject:{
        key:"Value",
    },
    anotherObject2:{
        key:"Value",
    },

}

// Similar to Classes
interface User {
    first_name: string,
    last_name: string,
}

const aStudentObject: User = {
    first_name: "Taylor",
    last_name: "Maine",
}