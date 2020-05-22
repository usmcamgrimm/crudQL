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

//Create GET router to fetch data from mysql
app.get('/learners', (req, res) => {
    mysqlConnection.query('SELECT * FROM learnerdetails', (err, rows, fields) => {
        if (!err)
            res.send(rows);
        else
            console.log(err);
    })
})

// Query DB for specific learner details
app.get('/learners/:id', (req, res) => {
    mysqlConnection.query('SELECT * FROM learnerdetails WHERE learner_id = ?', [req.params.id], (err, rows, fields) => {
        if (!err) res.send(rows);
        else
            console.log(err);
    })
})