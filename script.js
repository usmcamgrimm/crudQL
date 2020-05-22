// Import the required packages
const mysql = require('mysql')
const express = require('express')
const bodyparser = require('body-parser')
let app = express()

// Configure express server
app.use(bodyparser.json())

require('dotenv').config();

// Establish connection with the mysql database
// MySQL connection details
let mysqlConnection = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    multipleStatements: true
})

// On connection success/fail:
mysqlConnection.connect(err => {
    if (!err) console.log('Connection Successful')
    else console.log('Connection failed' + JSON.stringify(err, undefined, 2))
})

//Set server connect and port variable
const port = process.env.PORT || 8080
app.listen(port, () => console.log(`Listening on port ${port}..`))