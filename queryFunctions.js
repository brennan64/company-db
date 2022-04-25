const db = require("./connection");
function allDepts() {
  db.query("SELECT * FROM department", function (err, results) {
    console.log(results);
    // startApp();
  });
}

function allRoles() {
  db.query("SELECT * FROM emp_role", function (err, results) {
    console.log(results);
    // startApp();
  });
}

function allEmps() {
  db.query("SELECT * FROM emp_role", function (err, results) {
    console.log(results);
    // startApp();
  });
}

module.exports = {
  allDepts,
  allRoles,
  allEmps,
  // allDepts : allDepts
};
