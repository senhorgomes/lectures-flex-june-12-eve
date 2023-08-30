const { Client } = require('pg');
// PG connection
const client = new Client({
    host: 'localhost', //Where are we hosting our app? localhost
    port: 5432, //This isnt your app port, this is the PORT that PSQL is running on.
    database: 'lecture',
    user: 'development',
    password: 'development',
  })

client.connect()

module.exports = client;