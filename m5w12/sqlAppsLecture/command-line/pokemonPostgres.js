const { Client } = require('pg');

const client = new Client({
    host: 'localhost', //Where are we hosting our app? localhost
    port: 5432, //This isnt your app port, this is the PORT that PSQL is running on.
    database: 'lecture',
    user: 'development',
    password: 'development',
  })

client.connect(()=>{
    console.log("Connection successful!");
})

// I want to console.log all the Pokemon in our database!

// client.query('SELECT * FROM pokemon;', (error, response)=>{
//     if(error){
//         console.log(`Uh oh something broke: ${error}`);
//         return
//     }
//     // Console logging the response from the database(PSQL)
//     console.log(response.rows);
// })

// We wanted to search pokemon by ID = 3

// SELECT * FROM pokemon WHERE id = 3;
const id = "2; DROP TABLE pokemon;--";
// const name = "Charizard"
// console.log(id)
// client.query("SELECT * FROM pokemon WHERE id = $1;", [id],(error, response)=>{
// // client.query("SELECT * FROM pokemon WHERE id = $2 AND name = $1;", [name, id],(error, response)=>{
//     if(error){
//         console.log(`Uh oh something broke: ${error}`);
//         return
//     }
//     // Console logging the response from the database(PSQL)
//     console.log(response.rows[0]);
// })
// client.query(`SELECT * FROM pokemon WHERE id = 2; DROP TABLE pokemon;--;`)
// client.query(`SELECT * FROM pokemon WHERE id = ${id};`)
client.query("SELECT * FROM pokemon WHERE id = $1;", [id]) //It checks for types
.then((response)=>{
// client.query("SELECT * FROM pokemon WHERE id = $2 AND name = $1;", [name, id],(error, response)=>{
    // Console logging the response from the database(PSQL)
    console.log(response.rows[0]);
})
.catch((error)=> console.log(error))