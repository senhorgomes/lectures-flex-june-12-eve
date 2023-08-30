require('dotenv').config();

const express = require('express');
const morgan = require('morgan');
// Our express file should only contain things related to express
//  Its a good practice to remove anything that doesnt have to do with express and move it to a seperate file
// const { Client } = require('pg');
// // PG connection
// const client = new Client({
//     host: 'localhost', //Where are we hosting our app? localhost
//     port: 5432, //This isnt your app port, this is the PORT that PSQL is running on.
//     database: 'lecture',
//     user: 'development',
//     password: 'development',
//   })

// client.connect(()=>{
//     console.log("Connection successful!");
// })

const port = process.env.PORT || 8000;
const app = express();
const client = require("./db/connection")
app.use(morgan('dev'));
// view engine set to EJS
app.set("view engine", "ejs");
// req.body parser
app.use(express.urlencoded({ extended: true }));
//
//Routes - CRUD
// Create - /pokemon/new
// READ -
//  - Fetch all -  /pokemon
//  - Fetch a single pokemon - /pokemon/:id
// Update/editing - /pokemon/edit/:id
// Delete - /pokemon/delete/:id
//

// Import our queries
const { fetchAllPokemon } = require("./db/queries/pokemon-queries");

//Fetch and display all pokemon in database!
app.get('/pokemon', (req, res)=>{
  // query inside of the callback?
  // First fetch all entries from table
  // The server asking the database to do something
  // The server is making a REQUEST to the database
  // client.query('SELECT * FROM pokemon;')
  // // .then((response)=> res.json(response.rows))
  // // How do we pass information to an ejs file?
  // //Is the response from the database. The database is replying back to the server
  // .then((response)=> 
  // // The server response to the client
  // res.render('index', {pokemons: response.rows})
  // )
  fetchAllPokemon()
  .then((data) => res.render('index', {pokemons: data}))

})

app.get('/pokemon/edit/:id', (req, res)=>{
  const pokemonId = req.params.id;
  // query inside of the callback?
  // First fetch all entries from table
  // The server asking the database to do something
  // The server is making a REQUEST to the database
  client.query('SELECT * FROM pokemon WHERE id = $1;', [pokemonId])
  .then((response)=> {
    // console.log(response.ro)
    // The server response to the client
    res.render('edit', {pokemon: response.rows[0]})
  })
})
app.post('/pokemon/edit/:id', (req, res)=>{
  const pokemonId = req.params.id;
  const pokemonName = req.body.pokemonName
  const pokemonType = req.body.pokemonType
  // query inside of the callback?
  // First fetch all entries from table
  // The server asking the database to do something
  // The server is making a REQUEST to the database

  // This is bad practice and can have your data be manipulated by someone you don't want to
  // client.query(`UPDATE pokemon SET name = ${pokemonName}, type = ${pokemonType} WHERE id = ${pokemonId};`)
  // Instead its always better to use parameterized queries
  client.query('UPDATE pokemon SET name = $1, type = $2 WHERE id = $3;', [pokemonName, pokemonType, pokemonId])
  .then((response)=> {
    // console.log(response.ro)
    // The server response to the client
    res.redirect('/pokemon')
  })
})

app.post('/pokemon/delete/:id', (req, res)=>{
  const pokemonId = req.params.id;
  // query inside of the callback?
  // First fetch all entries from table
  // The server asking the database to do something
  // The server is making a REQUEST to the database
  client.query('DELETE FROM pokemon WHERE id = $1;', [pokemonId])
  // .then((response)=> res.json(response.rows))
  // How do we pass information to an ejs file?
  //Is the response from the database. The database is replying back to the server
  .then((response)=> {
    console.log(response)
    // The server response to the client
    res.redirect('/pokemon')
})
})

app.listen(port, () => {
  console.log(`the app is listening on port ${port}`);
})
