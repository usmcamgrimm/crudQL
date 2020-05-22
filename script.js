// Import the required packages
const mysql = require('mysql');
const express = require('express');
const bodyparser = require('body-parser');
let app = express();

// Configure express server
app.use(bodyparser.json());

// Establish connection with the mysql database
// MySQL connection details
let mysqlConnection = mysql.createConnection({
    host: process.env.host,
    user: process.env.user,
    password: process.env.password,
    database: process.env.database,
    multipleStatements: true
});

// On connection success/fail:
mysqlConnection.connect((err) => {
    if (!err)
        console.log('Connection Successful');
    else
        console.log('Connection failed' + JSON.stringify(err, undefined, 2));
});

//Set server connect and port variable
const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listening on port ${port}..`));

