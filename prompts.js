module.exports = {
  menu: [
    {
      type: "list",
      name: "menu",
      message: "What Would You Like to do?",
      choices: [
        "View All Employees",
        "Add Employee",
        "Update Employee Role",
        "View All Roles",
        "Add Role",
        "View All Departments",
        "Add Department",
        // "Quit",
      ],
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
      name: "department",
      message: "Enter Department ID for New Role",
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
      message: "Enter ID for New Employee's Manager",
    },
    {
      type: "input",
      name: "roleID",
      message: "Enter ID for New Employee's Role",
    },
  ],

  updateRole: [
    {
      type: "input",
      name: "emp",
      message: "Enter ID for Employee to Update Role",
    },
    {
      type: "input",
      name: "newRole",
      message: "Enter ID for Employees New Role",
    },
  ],
};
