-- Active: 1719747438964@@127.0.0.1@3306@school

CREATE DATABASE school

CREATE TABLE student(
    student_id int PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE
);

CREATE TABLE course(
    course_id int PRIMARY KEY AUTO_INCREMENT,
    course_name VARCHAR(255) NOT NULL,
    teacher VARCHAR(255) NOT NULL,
    description VARCHAR(255) NOT NULL
);


CREATE TABLE student_course(
    student_id int NOT NULL,
    course_id int NOT NULL,
    PRIMARY KEY(student_id,course_id),
    FOREIGN KEY(student_id) REFERENCES student(student_id),
    FOREIGN KEY(course_id) REFERENCES course(course_id)
);

CREATE TABLE score(
    score_id int PRIMARY KEY AUTO_INCREMENT,
    student_id int NOT NULL,
    course_id int NOT NULL,
    score DECIMAL(5,2) NOT NULL,
    FOREIGN KEY(student_id) REFERENCES student(student_id),
    FOREIGN KEY(course_id) REFERENCES course(course_id)
);
ALTER TABLE student
ADD phone VARCHAR(15)

ALTER TABLE course
DROP COLUMN description