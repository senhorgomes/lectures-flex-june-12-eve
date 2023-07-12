const net = require('net');

const client = net.createConnection({host: "localhost", port: 3000}, ()=>{
    client.setEncoding("utf-8");

    client.write("Hey, hows it going? im a script!")
});

// Handle incoming data
client.on("data", (data)=>{
    console.log(data);
})