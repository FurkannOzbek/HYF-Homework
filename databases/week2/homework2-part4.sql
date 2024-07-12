-- Active: 1719747438964@@127.0.0.1@3306@autoGalery
CREATE DATABASE autoGalery

CREATE TABLE customer (
    customer_id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    address VARCHAR(255) NOT NULL,
    phone_number CHAR(10) NOT NULL
);

CREATE TABLE car (
    car_id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    model TINYINT NOT NULL,
    year TINYINT NOT NULL,
    price INT NOT NULL
);

CREATE TABLE salesman (
    salesman_id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    phone_number CHAR(10) NOT NULL,
    email VARCHAR(255) NOT NULL
  
);

CREATE TABLE sale (
    sale_id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    sale_date DATETIME NOT NULL,
    sale_price INT NOT NULL,
    customer_id INT NOT NULL,
    car_id INT NOT NULL,
    salesman_id INT NOT NULL,
    FOREIGN KEY(customer_id) REFERENCES customer(customer_id),
    FOREIGN KEY(car_id) REFERENCES car(car_id),
    FOREIGN KEY(salesman_id) REFERENCES salesman(salesman_id)
);

INSERT INTO customer (name,address,phone_number) VALUES 
("Chris Lockward","Nyborgvej 81 Odense",42424242),
("Elena Mainfold", "Albani torv 27 Odense",39393939),
("Maria Fox","Tornbjergvej 13 Odense",13131313)

ALTER TABLE car
ADD COLUMN brand VARCHAR(255) NOT NULL

ALTER TABLE car
ALTER COLUMN model VARCHAR(255) NOT NULL

INSERT INTO car (model,year,price) VALUES
(2017)

select * from sale