const mysql = require("mysql2");
const inquirer = require("inquirer");
require("dotenv").config();
const prompts = require("./prompts");

const connection = mysql.createConnection({
  host: "localhost",
  // MySQL username,
  user: "root",
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DB_NAME,
});

connection.connect((err) => {
  err ? console.log(err) : console.log(connected);
});
module.exports = connection;
