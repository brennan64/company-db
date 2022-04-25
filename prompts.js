const opt = [
  "View All Departments",
  "View All Roles",
  "View All Employees",
  "Add a Department",
  "Add a Role",
  "Add Employee",
  "Update Employee Role",
];
module.exports = {
  menu: [
    {
      type: "list",
      name: "menu",
      message: "What Would You Like to do?",
      choices: opt,
    },
  ],

  newDep: [
    {
      type: "input",
      name: "depName",
      message: "Enter the Name of New Department",
    },
  ],

  newRole: [
    {
      type: "input",
      name: "newRoleName",
      message: "Enter a Name for New Role",
    },
    {
      type: "input",
      name: "salary",
      message: "Enter Salary for New Role",
    },
    {
      type: "input",
      name: "departmnet",
      message: "Enter Department for New Role",
    },
  ],

  newEmp: [
    {
      type: "input",
      name: "newEmpFirst",
      message: "Enter First Name for New Employee",
    },
    {
      type: "input",
      name: "newEmpLast",
      message: "Enter Last Name for New Employee",
    },
    {
      type: "input",
      name: "reportsTo",
      message: "Enter Name for New Employee's Manager",
    },
  ],
};