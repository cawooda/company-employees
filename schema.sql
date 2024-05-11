DROP DATABASE IF EXISTS employees_db;
CREATE DATABASE employees_db;

\c employees_db;


CREATE TABLE employees (
    id SERIAL NOT NULL,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    role_id DECIMAL,
    manager_id NOT NULL
    PRIMARY KEY (id)
    FOREIGN KEY (manager_id)
    REFERENCES employees(id)
);

CREATE TABLE roles (
    id SERIAL PRIMARY KEY,
    title VARCHAR(30),
    salary DECIMAL,
    department_id NOT NULL,
    FOREIGN KEY (customer_id)
    REFERENCES employees(id)
    FOREIGN KEY (department_id)
    REFERENCES departments(id)
);

CREATE TABLE departments (
    id SERIAL PRIMARY KEY,
    name VARCHAR(30)
    FOREIGN KEY (role_id)
    REFERENCES roles(id)
    ON DELETE SET NULL
);

