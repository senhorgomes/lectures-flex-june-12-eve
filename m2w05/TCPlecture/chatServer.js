const net = require("net");
const PORT = 3000;
const arrayOfConnections = [];
const server = net.createServer((connection) => {
    // For every connection that is made, we want to save it in a list.
    // Mailing list
    // If data received, we know who to send it out to
    arrayOfConnections.push(connection);
    // Way for the data to be translated into something that can be read
    connection.setEncoding("utf-8");
    // 'connection' listener.
    console.log('client connected');
    // When a connection sends data, console.log it
    connection.on("data", (data)=>{
        // console.log("Connection says:", data);
        // We want to write that data back ALL the clients that are connected to this server
        for(const client of arrayOfConnections){
            // Looping through all the connections, and sending the information back to them
            if(connection !== client){
                // If we loop through all the connections, and we find the person who sent the message, dont send it back
                client.write(`Client says: ${data}`);
            }
        }
        // connection.write(`Client says: ${data}`);
    });
    //   Code to run when certain events occur
    // On this case, when a connection closes, or exits from our server
    connection.on('close', () => {
        console.log('client disconnected');
    });
    // connection.write('hello\r\n');
});
server.on('error', (err) => {
    throw err;
});
server.listen(PORT, () => {
    console.log('Our server works!!!! :)');
}); 