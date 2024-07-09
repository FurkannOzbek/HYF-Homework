-- Active: 1719747438964@@127.0.0.1@3306@school_homework
--Part 2 

-- Create a new database containing the following tables:
-- Class: with the columns: id, name, begins (date), ends (date)
-- Student: with the columns: id, name, email, phone, class_id (foreign key)

CREATE DATABASE school_homework

CREATE TABLE class (
    id int NOT NULL PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    begins date NOT NULL,
    ends date NOT NULL
    );

CREATE TABLE student(
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    email varchar(255) NOT NULL UNIQUE,
    phone CHAR(10),
    class_id INT NOT NULL,
    FOREIGN KEY(class_id) REFERENCES class(id)
);

ALTER TABLE student 
MODIFY COLUMN phone varchar(10) NOT NULL

-- Create an index on the name column of the student table.
-- Add a new column to the class table named status which can only have the following values: not-started, ongoing, finished (hint: enumerations).

CREATE INDEX idx_student
ON student(name)

ALTER TABLE student
ADD status ENUM ("not-started","ongoing","finished") NOT NULL;

