const users = require("../users.json")

const getUserFullNameByEmail = (email) => {
    const foundUser = users.find((user)=> {
        return user.email === email
    })
    if(!foundUser) return undefined;
    return `${foundUser.first_name} ${foundUser.last_name}`
}

// console.log(getUserFullNameByEmail("nibh.vulputate.mauris@outlook.ca"))
// console.log(getUserFullNameByEmail([]) === undefined)
console.log(getUserFullNameByEmail("aliquet.libero@outlook.ca"))

// Can this function break?
// Email needs to be comparable, it needs to be a string, not an object, not an array