const mysql = require("mysql2");
const inquirer = require("inquirer");
require("dotenv").config();
const prompts = require("./prompts");

const db = mysql.createConnection({
  host: "localhost",
  // MySQL username,
  user: "root",
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DB_NAME,
});

db.connect((err) => {
  err ? console.log(err) : startApp();
});

function startApp() {
  inquirer.prompt(prompts.menu).then(function (ans) {
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
      : process.exit();
  });
}

function viewEmployees() {
  console.log("__________Browsing All Employees_______");

  const sqlQuery = `SELECT * FROM employees;`;

  db.query(sqlQuery, (err, results) => {
    err ? console.log(err) : console.table(results);
    startApp();
  });
}

function addEmployees() {
  inquirer.prompt(prompts.newEmp).then((ans) => {
    let first = ans.newEmpFirst.toString();
    let last = ans.newEmpLast.toString();
    let manID = ans.reportsTo.toString();
    let roleID = ans.roleID.toString();
    let sqlQuery = `INSERT INTO employee_db.employees (first_name, last_name, manager_id, role_id)
VALUES("${first}", "${last}", "${manID}", "${roleID}")`;

    db.query(sqlQuery, (err, results) => {
      err ? console.log(err) : startApp();
    });
  });
}

function updateRole() {
  console.log("change roles");
}

function viewRoles() {
  let sqlQuery = `SELECT department.ID, role.title, role.salary
  FROM Orders
  INNER JOIN department ON department.id=role.dept_ID;`;
  db.query(sqlQuery, (err, results) => {
    err ? console.log(err) : console.log("success");
    startApp();
  });
}
function createRole() {
  console.log("make a new role");
}
function viewDepartments() {
  console.log("_________loading departments___________");
  db.query("SELECT * FROM department", function (err, results) {
    console.table(results);
    startApp();
  });
}
function addDepartments() {
  console.log("add deps");
}

// module.exports = db;
