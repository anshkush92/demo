// Theory -> This file for configuring the SQL server that we are going to connect

// Theory: Importing the package which is going to help us connect to the database (Now will return promise to us)
const mysql = require("mysql2/promise");

require("dotenv").config();

// Theory: This is to make the connnection to the database server that we are going to use 
const pool = mysql.createPool({
    // Theory: Tell the URL where the database server is located
    host: "localhost",
    // Theory: Since that database server can have many databases so telling which database we need to access
    database: "keber",
    // Theory: Which user should access the database
    user: "root",
    // Theory: The password of the user which is going to accesss the database
    password: process.env.mysql_password
});

// Theory: Exporting the pool object code when importing this code file
module.exports = pool;