
INSERT INTO department(dept_name) 
    VALUES ('Beer'), 
    ('Refrigeration'), 
    ('Soda'), 
    ('Warewash');


INSERT INTO job_role (title, salary, dept_id)
    VALUES ('beer technician', '35000', 1),
           ('beer installer', '55000', 1),
           ('refrigeration tech', '65000', 2),
           ('refrigeration installer', '80000', 2),
           ('soda technician', '45000', 3),
           ('soda installer', '55000', 3),
           ('warewash technician', '40000', 4),
           ('warewash installer', '70000', 4); 

INSERT INTO employees (first_name, last_name, role_id, manager_id)
    VALUES ('chip', 'chipperson', 1, 1),
           ('Jesse', 'James', 1, 2 ),
           ('Ted', 'Sheckler', 2, 3 ),
           ('fez', 'Whatley', 3, 4 ),
           ('Jimmy', 'Dean', 3, 4 ), 
           ('Tim', 'Allen', 2 , 4),
           ('Monkey', 'Luffy', 2, 3 ),
           ('Patrick', 'Roy', 2 , 3);