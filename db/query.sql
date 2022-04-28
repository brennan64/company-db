
SELECT role.id AS "ID",
        role.title AS "Title",
    role.salary AS "Salary",
        department.dept_name AS dept
                
    FROM role
    JOIN department ON role.dept_id = department.id;
 