//import mysql2 package
const mysql = require('mysql2');

//connect to database
const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: '1234',
        database: 'election'
    },
    console.log('Connected to the election database.')
);













module.exports = db;