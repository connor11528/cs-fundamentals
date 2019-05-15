create database udemy_mysql_bootcamp;

drop database database_name;

use udemy_mysql_bootcamp;
select database(); /* udemy_mysql_bootcamp */

/* datatypes: int for numbers and varchar for strings */

-- CREATE TABLE tablename
-- (
-- 	column_name data_type,
-- 	column_name data_type
-- );

CREATE TABLE cats
(
	name VARCHAR(100),
	age INT
);

SHOW TABLES;

/* Display columns for a table (same result) */
SHOW COLUMNS FROM cats;
DESC cats; /* stands for describe */

DROP TABLE cats;

/* create, show and delete a table for pastries */
CREATE TABLE pastries
  (
    name VARCHAR(50),
    quantity INT
  );
 
SHOW TABLES;
 
DESC pastries;
 
DROP TABLE pastries;