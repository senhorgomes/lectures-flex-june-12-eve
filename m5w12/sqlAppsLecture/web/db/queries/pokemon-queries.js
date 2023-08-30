const client = require('../connection');

//We are creating a function that we can use, in our server.js file
const fetchAllPokemon = () => {
    // return []
    return client.query('SELECT * FROM pokemon;')
        // .then((response)=> res.json(response.rows))
        // How do we pass information to an ejs file?
        //Is the response from the database. The database is replying back to the server
        .then((response) => {
            return response.rows;
        })
}

module.exports = { fetchAllPokemon }