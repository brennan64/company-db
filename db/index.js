const connection = require("../index");

class DB {
  constructor(connection) {
    this.connection = connection;
  }
  findAllEmployees() {
    return this.connection.promise().query(`SELECT employee.id,
      employee.first_name,
      employee.last_name,
      emp_role.title,
      department.dept_name as department,
      emp_role.salary AS "Salary",
      CONCAT(manager.first_name, ' ', manager.last_name) AS manager
        FROM employee
    LEFT JOIN emp_role ON employee.role_id = emp_role.id
  LEFT JOIN department ON emp_role.dept_id = department.id
  LEFT JOIN employee manager
  ON manager.id = employee.manager_id
  ORDER BY employee.id;`);
  }
}

module.exports = new DB(connection);
