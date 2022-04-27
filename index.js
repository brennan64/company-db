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
  err ? console.log(err) : startApp();
});

function startApp() {
  inquirer
    .prompt(prompts.menu)
    .then((ans) =>
      ans.menu == "View All Employees"
        ? viewEmployees()
        : ans.menu == "Add Employee"
        ? addEmployees()
        : ans.menu == "Update Employee Role"
        ? updateRole()
        : ans.menu == "View All Roles"
        ? viewRoles()
        : ans.menu == "Add Role"
        ? createRole()
        : ans.menu == "View All Departments"
        ? viewDepartments()
        : ans.menu == "Add Department"
        ? addDepartments()
        : console.log("boo")
    );
}

module.exports = connection;
