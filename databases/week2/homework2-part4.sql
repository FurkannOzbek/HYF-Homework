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


-- I added brand which I forgot
ALTER TABLE car
ADD COLUMN brand VARCHAR(255) NOT NULL

-- I Was not able to add 4 digit years because I have set it up for tiny int so I have change it into small int
ALTER TABLE car
MODIFY COLUMN year SMALLINT NOT NULL
-- Wrong datatype correction
ALTER TABLE car
MODIFY COLUMN model VARCHAR(255) NOT NULL

ALTER TABLE car
MODIFY COLUMN price BIGINT NOT NULL

INSERT INTO car (brand,model,year,price) VALUES
("Suzuki","Swift",2019,160000),
("Ford","Focus",2020,175000),
("Mercedes","AMG",2024,395000)


INSERT INTO salesman(name,phone_number,email) VALUES
("John Catcher",21212121,"johnca@carsales.com"),
("Frida Nomskol",14141414,"fridano@carsales.com")

INSERT INTO sale(sale_date,sale_price,customer_id,car_id,salesman_id) VALUES
("2024-01-14 10:30:00",155000,1,7,1)

-- I gave auto incr for all primary keys but I dont understand why sale_id starts from 2 and car_id starts from 7 , I would be happy to get comment about it thank you.
select * from sale

select * from sale JOIN car ON sale.car_id = car.car_id

GRANT ALL PRIVILEGES ON mysql.* to 'larec'@'localhost';