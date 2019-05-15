INSERT INTO cats(name, age) VALUES ("Jetson", 7); /* order matters */

SELECT * FROM cats;

/* multiple insert syntax */
INSERT INTO cats
	(name, age)
VALUES 
	('Snowbell', 13),
	('Whiskers', 2),
	('Tinkerbell', 6);

/* Challenge */
CREATE TABLE people
	(first_name VARCHAR(100), last_name VARCHAR(100), age INT);

ALTER TABLE people MODIFY first_name VARCHAR(20);
ALTER TABLE people MODIFY last_name VARCHAR(20);

SHOW TABLES;
DESC people;

INSERT INTO people VALUES ('Tina', 'Belcher', 13);

INSERT INTO people(last_name, first_name, age) VALUES ('Belcher', 'Linda', 45);

INSERT INTO people
	(first_name, last_name, age)
	VALUES
	('Phillip', 'Frond', 38),
	('Calvin', 'Fischoeder', 70);

SELECT * FROM people;

DROP TABLE people;

/* displays errors, if any */
SHOW WARNINGS;

/* create table with default values and not null constraints */
CREATE TABLE cats2
(
	name VARCHAR(20) NOT NULL DEFAULT 'John Doe',
	age INT DEFAULT 99;
);

/* Define table with primary key */
CREATE TABLE unique_cats
(
	id INT NOT NULL AUTO_INCREMENT,
	name VARCHAR(100) DEFAULT 'unnamed',
	age INT,
	PRIMARY KEY (id)
);

/* id will automatically be assigned */
INSERT INTO unique_cats
	(name, age)
VALUES
	('Phideaux', 19),
	('FiFi', 19),
	('Cheatah', 100);

/* Challenge */
CREATE TABLE employees
(
	id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, 
	first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    middle_name VARCHAR(50),
    age INT NOT NULL,
    current_state VARCHAR(50) NOT NULL DEFAULT 'employed'
);

insert into employees
	(first_name, last_name, age)
VALUES
	('Connor', 'Leech', 29);

















