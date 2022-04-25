// const mysql = require('mysql2');
const inquirer = require("inquirer");
require("dotenv").config();
// const queryFunctions = require('./queryFunctions')
const { allDepts } = require("./queryFunctions");
const { allRoles } = require("./queryFunctions");
// Connect to database
// const db = mysql.createConnection(
//     {
//         host: 'localhost',
//         // MySQL username,
//         user: 'root',
//         password: 'root',
//         database: 'emp_tracker_db'
//     },
//     console.log(`Connected to the database.`)
// );
const opt = [
  "View All Departments",
  "View All Roles",
  "View All Employees",
  "Add a Department",
  "Add a Role",
  "Add Employee",
  "Update Employee Role",
];
function startApp() {
  inquirer.prompt([
    {
      type: "list",
      name: "menu",
      message: "Select Operation",
      choices: opt,
      default: true,
    },
  ]);
  then((ans) => {
    console.log(ans);
    //   switch (ans.userview) {
    //     case opt[0]:
    //       // queryFunctions.allDepts();
    //       allDepts();
    //       break;
    //     case opt[1]:
    //       allRoles();
    //       break;
    //     case opt[2]:
    //       allEmps();
    //       break;
    //     default:
    //       break;
    //   }
  });
}

startApp();

// function allDepts() {
//     db.query('SELECT * FROM department', function (err, results) {
//         console.log(results);
//         startApp();
//     });
// }
