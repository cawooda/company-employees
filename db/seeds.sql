--SOME ASSISTANCE FROM CHAT GPT Helped me to fix a problem with the ordering of these tables, so that I didn
-- not get a foreign key violation

-- First, insert into departments
INSERT INTO departments (name)
    VALUES
        ('Marketing'),
        ('Sales'),
        ('Executive'),
        ('Administration');

-- Next, insert into roles
INSERT INTO roles (title, salary, department_id)
    VALUES  
        ('CEO', 1000, 3),
        ('Executive Assistant', 500, 3),
        ('CFO', 1000, 4),
        ('Administration Manager', 700, 4),
        ('Clerk', 200, 4),
        ('Sales Clerk', 300, 2),
        ('Sales Manager', 2000, 2);

-- Finally, insert into employees
INSERT INTO employees (first_name, last_name, role_id, manager_id)
    VALUES
        ('James', 'Hobb', 1, 1),
        ('Jem', 'Jeminosiolps', 2, 1),
        ('Jiles', 'Mayfield', 3, 1),
        ('Jamie', 'Harris', 4, 2);
