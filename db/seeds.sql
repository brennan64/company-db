
INSERT INTO department(dept_name) 
    VALUES ('Beer'), ('Refrigeration'), ('Soda'), ('Warewash');


INSERT INTO emp_role(title, salary, dept_id)
    VALUES ('beer technician', '35000', 1),
           ('beer installer', '55000', 1),
           ('refrigeration tech', '65000', 2),
           ('refrigeration installer', '80000', 2),
           ('soda technician', '45000', 3),
           ('soda installer', '55000', 3),
           ('warewash technician', '40000', 4),
           ('warewash installer', '70000', 4); 

INSERT INTO employee (first_name, last_name, role_id, manager_id)
    VALUES ('chip', 'chipperson', 2, 1),
           ('Jesse', 'James', 1, 1),
           ('Ted', 'Sheckler', 4, 2),
           ('fez', 'Whatley', 3, 3),
           ('Jimmy', 'Dean', 4, 1), 
           ('Tim', 'Allen', 3, 5),
           ('Monkey', 'Luffy', 2, 5,
           ('Patrick', 'Roy', 1, 7);