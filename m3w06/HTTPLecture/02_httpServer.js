//HTTP Server
const http = require("http");

const server = http.createServer();

server.on("request", (request, response) => {
  console.log(request);
  // localhost:3000/hello
  if(request.url === "/hello"){
    // Display this string to the browser of the user that made this request
    response.end(JSON.stringify({key:"Hello!"}));
  }
  // localhost:3000
  if(request.url === "/"){
    response.end("Welcome to my website!!");
  }
})

server.listen(3000, () => {
  console.log("I am ready!")
})
