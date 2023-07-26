const express = require("express");
const morgan = require("morgan");
const cookieparser = require("cookie-parser");
const app = express();

const port = 3000; //8000, 8080

// Create a database of users that can login to our website and view their profile page
// Users should be able to logout and be redirected to the login screen

const users = {
    1: {
        id: 1,
        email: "puppycat@hotmail.com",
        password: "ImNotCute"
    },
    2: {
        id: 2,
        email: "lighthouseAssignments@hotmail.com",
        password: "veryDifficult"
    },
    3: {
        id: 3,
        email: "homersimpson@hotmail.com",
        password: "d0h!"
    }
}

// Middleware
app.use(morgan("dev"));
app.use(express.urlencoded({extended:true}));
app.use(cookieparser())

// View engine
app.set("view engine", "ejs");

// Get route

app.get('/', (req, res) =>{
    res.render('index');
});
app.get('/login', (req, res) =>{
    res.render('login');
});
app.get('/profile', (req, res) =>{
    console.log("cookie value", req.cookies.user_id)
    //                                                          users["3"]
    console.log("user object retrived with the cookie value",users[req.cookies.user_id]);
    const objectOfUserThatIsLoggedIn = users[req.cookies.user_id];
    const templateVars = {user: objectOfUserThatIsLoggedIn}
    res.render('profile', templateVars);
});

// Post routes

app.post('/login', (req, res) => {
    console.log(req.body);
    const usernameFromWebsite = req.body.email;
    const passwordFromWebsite = req.body.password;
    // check the user information
    for(let key in users) {
        // console.log(users[key])
        // check if it exists and then if it matches
        if(users[key].email === usernameFromWebsite && users[key].password === passwordFromWebsite){
            // check password if it matches
            // if(users[key].password === passwordFromWebsite){
            //     res.redirect('/');
            // }
            // set the cookie
            // res.cookie('cookie', 'Chocolate Chip');
            // set the user id as a cookie value then redirect the user to the profile page
            res.cookie('user_id', users[key].id);
            return res.redirect('/profile');
        }
    }
    res.status(400).send('Username or password is incorrect');
});

app.post('/logout', (req,res)=>{
    res.clearCookie('user_id');
    res.redirect('/login');
});

// Check if the sever is listening
app.listen(port, ()=>{
    console.log("Hey, this server actually works! :)")
});

