create database bamazon;
use bamazon;

create table products (
	ID int NOT NULL AUTO_INCREMENT,
    product_name varchar (50) NOT NULL,
    department_name varchar (50),
    price int,
    stock_quantity int,
    PRIMARY KEY (ID)
    );
    
insert into products (product_name, department_name, price, stock_quantity) values ("SD Card", "Electronics", 23, 4); 

insert into products (product_name, department_name, price, stock_quantity) values ("MicroSD", "Electronics", 40, 8);

insert into products (product_name, department_name, price, stock_quantity) values ("Jeans", "Clothing", 15, 15);

insert into products (product_name, department_name, price, stock_quantity) values ("Sweat Shirt", "Sports", 15, 55);

insert into products (product_name, department_name, price, stock_quantity) values ("Running Shoes", "Foot Wear", 125, 7);

insert into products (product_name, department_name, price, stock_quantity) values ("Tent", "Outdoors", 215, 6);

insert into products (product_name, department_name, price, stock_quantity) values ("Tool Kit", "Tools", 33, 21);

insert into products (product_name, department_name, price, stock_quantity) values ("Batteries", "Electronics", 23, 33);

insert into products (product_name, department_name, price, stock_quantity) values ("I Pad", "Electronics", 250, 17);

insert into products (product_name, department_name, price, stock_quantity) values ("Shorts", "Clothing", 21, 44);