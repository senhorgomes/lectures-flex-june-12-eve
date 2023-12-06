// const users = require("../users.json")
// import users from "../users.json";
var users = [
    {
        "first_name": "Upton",
        "last_name": "Santos",
        "email": "nibh.vulputate.mauris@outlook.ca",
        "dob": "1965-12-13"
    },
    {
        "first_name": "Kimberley",
        "last_name": "Fletcher",
        "email": "pretium.aliquet.metus@hotmail.com",
        "dob": "1961-57-27"
    },
    {
        "first_name": "Bradley",
        "last_name": null,
        "email": "aliquet.libero@outlook.ca",
        "dob": "1976-38-13"
    },
];
var getUserFullNameByEmail = function (email) {
    var foundUser = users.find(function (user) {
        return user.email === email;
    });
    if (!foundUser)
        return undefined;
    // Bradley
    if (typeof foundUser.last_name !== 'string')
        return foundUser.first_name;
    return "".concat(foundUser.first_name, " ").concat(foundUser.last_name);
};
console.log(getUserFullNameByEmail("nibh.vulputate.mauris@outlook.ca"));
// console.log(getUserFullNameByEmail([]) === undefined)
console.log(getUserFullNameByEmail([]));
