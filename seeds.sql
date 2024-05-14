INSERT INTO employees (first_name,last_name,role_id,manager_id)
    VALUES
        ("James","Hobb",1,1)
        ("Jeremy","Hobb",2,2)
        ("Jeremy","Hobb",3,3)
        ("Jeremy","Hobb",2,2)
        ("Jeremy","Hobb",1,2)
        ("Jeremy","Hobb",2,3)
        ("Jeremy","Hobb",3,2)
        ("Jeremy","Hobb",2,2);

INSERT INTO departments (name)
    VALUES
        ("Marketing")
        ("Sales")
        ("Excecutive")
        ("Administration")

INSERT INTO roles (title,salary,employee_id,department_id)
    VALUES  
        ("CEO",1000,1)
        ("Excecutive Assistant",500,1)
        ("CFO",1000,2)
        ("Administration Manager",700,2)
        ("Clerk",200,2)
        ("Sales Clark",300,3)
        ("Sales Manager",2000,3);
        
        
