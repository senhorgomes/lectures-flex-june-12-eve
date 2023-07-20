//Express is a routing and middleware web framework
//It allows us to easily make http requests, and return HTTP responses
const express = require('express')
const morgan = require('morgan')
const app = express()


// app.use(express.static('files'));
app.use(morgan("dev"));
// View engine
app.set('view engine', 'ejs');
app.get('/', (request, response) => {
    // Run the code inside of here
    // response.send('Hello World!')
    // In order to render ejs files for the client
    response.render("testingHtml", {userName: "Bryan"})
})

app.get('/:name/:lastName', (request, response) => {
    // Run the code inside of here
    console.log(request.params)
    response.render("testingHtml", {userName: request.params.lastName})
})

// If the route is a GET request, and the path is "/"
// If the user visited localhost:3000/hello
app.get('/hello', (request, response) => {
    // Run the code inside of here
    response.send('<h1>Hello World</h1>')
})
// Parameters
// https://www.youtube.com/results?search_query=funny+cat+videos

// What should run once the server is up and running
app.listen(3000, () => {
  console.log(`Example app listening on port 3000`)
})