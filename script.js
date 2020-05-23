// Import the required packages
let mysql = require('mysql');
let express = require('express');

require('dotenv').config();

// Establish connection with the mysql database
// MySQL connection details
let connection = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE
});

let app = express();

connection.connect(function(err) {
    if(!err) {
        console.log('Database is connected');
    } else {
        console.log("Error connecting to the database");
    }
});

app.get('/witcher', function(req,res) {
    connection.query('SELECT * FROM books', function(err, rows, fields) {
        connection.end();
            if (!err)
                console.log('This is a list of The Witcher books: ', rows);
            else
                console.log('Error while performing query.');
    })
})

app.listen(8080);
