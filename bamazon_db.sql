DROP DATABASE IF EXISTS bamazon_db;

CREATE DATABASE bamazon_db;

USE bamazon_db;

CREATE TABLE products (
	item_id INTEGER(11) AUTO_INCREMENT NOT NULL,
    product_name VARCHAR(100) NULL,
    department_name VARCHAR(100) NULL,
    price DECIMAL(10,2) NULL,
    stock_quantity INT NULL,
    PRIMARY KEY (item_id)
    );
    
	INSERT INTO products (product_name, department_name, price, stock_quantity)
	VALUES ("APPLES", "PRODUCE", 1.00, 32);

	INSERT INTO products (product_name, department_name, price, stock_quantity)
    VALUES ("BANANAS", "PRODUCE", 2.00, 60);
    
    INSERT INTO products (product_name, department_name, price, stock_quantity)
    VALUES ("ORANGES", "PRODUCE", 0.75, 85);
    
    INSERT INTO products (product_name, department_name, price, stock_quantity)
    VALUES ("WATER", "BEVERAGES", 1.00, 250);
    
    INSERT INTO products (product_name, department_name, price, stock_quantity)
    VALUES ("BEER", "BEVERAGES", 3.00, 25);
    
    INSERT INTO products (product_name, department_name, price, stock_quantity)
    VALUES ("WINE", "BEVERAGES", 4.00, 50);

	INSERT INTO products (product_name, department_name, price, stock_quantity)
    VALUES ("SODA", "BEVERAGES", 2.00, 100);
    
    INSERT INTO products (product_name, department_name, price, stock_quantity)
    VALUES ("STEAK", "MEATS", 12.00, 100);
    
    INSERT INTO products (product_name, department_name, price, stock_quantity)
    VALUES ("CHICKEN", "MEATS", 7.00, 90);
    
    INSERT INTO products (product_name, department_name, price, stock_quantity)
    VALUES ("MILK", "DAIRY", 3.00, 100);
    
    