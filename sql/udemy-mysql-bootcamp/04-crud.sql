SELECT column_1, column2 FROM table_name;

SELECT * FROM cats WHERE age=4;

SELECT * FROM cats WHERE name='EgG'; /* case insensitive */

/* SELECT Challenge */
select cat_id from cats where cat_id >= 1 and cat_id <= 7;
select name, breed from cats;
select name, age from cats where breed='tabby';

select cat_id, age 
from cats as c 
where c.cat_id = c.age;

/* Aliases */
SELECT name AS 'cat name', breed AS 'kitty breed' FROM cats;

/* Update */
UPDATE cats SET breed='Shorthair' WHERE breed='Tabby'; 
UPDATE cats SET age=14 WHERE name='Misty'; 

/* Update challenge */
update cats set name='Jack' where name='Jackson';
update cats set breed="British Shorthair" where name="Ringo";
update cats set age=12 where breed='Maine Coon';

/* Delete */
DELETE FROM cats WHERE age=4;
delete from cats; /* deletes all cats! */
DELETE FROM cats WHERE cat_id=age;
