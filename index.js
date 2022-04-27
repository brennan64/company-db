require("dotenv").config();
const Inquirer = require("inquirer");

const db = require("./db");
// console.log(db.viewAllDepts().then(data=>data));
const menuQuestion = [
  {
    type: "list",
    name: "menu",
    message: "What would you like to do?",
    choices: [
      "View All Employees",
      "Add Employee",
      "Update Employee Role",
      "View All Roles",
      "Add Role",
      "View All Departments",
      "Add Department",
      "Quit",
    ],
  },
];

function init() {
  Inquirer.prompt(menuQuestion).then((answers) => {
    console.log(answers);
    switchStatement(answers);
  });
}

init();

// function allDepts() {
//   db.viewAllDepts().then((data) => console.log(data[0]));
//   // menu()
// }

// console.log(allEmployee());

function switchStatement(answers) {
  switch (answers.menu) {
    case "View All Employees":
      allDepts();
      break;
    case "Add Employee":
      addEmp();
      break;
    case "Update Employee Role":
      updateEmp();
      break;
    case "View All Roles":
      allRoles();
      break;
    case "Add Role":
      addRoles();
      break;
    case "View All Departments":
      allDepts();
      break;
    case "Add Department":
      addDept();
      break;
    case "Quit":
      quit();
      break;
  }
}
// allDepts: function () {
//   db.query("SELECT * FROM department", function (err, results) {
//     console.log(results);
//   });
// },

// allRoles: function () {
//   db.query(`SELECT * FROM emp_role`, function (err, results) {
//     console.log(results);
//   });
// },

// allEmps: function () {
//   db.query("SELECT * FROM emp_role", function (err, results) {
//     console.log(results);
//   });
// },

function allEmps() {
  console.log("--- Browsing All Employees ---");
  db.findAllEmployees()
    .then(([employeeData]) => {
      let employees = employeeData;
      console.table(employees);
    })
    .then(() => menu());
}
//   }

//   addDept: function () {
//     inquirer.prompt(prompts.newDep).then((ans) => console.log(ans));
//   },

//   addRole: function () {
//     console.log("add role");
//   },

//   addEmp: function () {
//     console.log("add employee");
//   },

//   updateRole: function () {
//     console.log("new role");
//   },

//   quit: function () {
//     console.log("good job");
//   },
// };
