\c postgres;

DROP DATABASE IF EXISTS employees_db;
CREATE DATABASE employees_db;

\c employees_db;


CREATE TABLE employees (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    role_id DECIMAL,
    manager_id INTEGER NOT NULL,
    FOREIGN KEY (manager_id)
    REFERENCES employees(id)
);

CREATE TABLE roles (
    id SERIAL PRIMARY KEY,
    title VARCHAR(30),
    salary DECIMAL,
    department_id INTEGER NOT NULL
    --,
    -- FOREIGN KEY (department_id)
    -- REFERENCES departments(id)
    -- ON DELETE SET NULL
);


CREATE TABLE departments (
    id SERIAL PRIMARY KEY,
    name VARCHAR(30)
    -- FOREIGN KEY (role_id)
    -- REFERENCES roles(id)
    -- ON DELETE SET NULL
);




