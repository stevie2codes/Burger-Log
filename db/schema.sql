CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers(
    id NOT NULL AUTO_INCREMENT PRIMARY KEY,
    burger_name VARCHAR(40),
    devoured BOOLEAN DEFAULT FALSE
);