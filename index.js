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

// db.connect((err) => {
//   err ? console.log(err) :
startApp();
// });

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

function viewEmployees() {
  console.clear();

  console.log("__________Browsing All Employees_______");

  let sqlQuery = `SELECT employee.id AS "ID",
  employee.first_name AS "First Name",
  employee.last_name AS "Last Name",
  emp_role.title AS "Title",
  department.dept_name AS "Department",
  emp_role.salary AS "Salary",
  CONCAT(manager.first_name, ' ', manager.last_name) AS manager
FROM employee
JOIN emp_role ON employee.role_id = emp_role.id
JOIN department ON emp_role.dept_id = department.id
LEFT JOIN employee manager
ON manager.id = employee.manager_id
ORDER BY employee.id;`;

  db.query(sqlQuery, (err, results) => {
    err ? console.log(err) : console.table(results);
    startApp();
  });
}

function addEmployees() {
  console.log("add emps");
}

function updateRole() {
  console.log("change roles");
}

function viewRoles() {
  console.log("seeroles");
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

module.exports = db;
