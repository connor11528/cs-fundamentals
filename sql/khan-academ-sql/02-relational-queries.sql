/*

Covers joins and multi table queries. I also suggest watching
this laracast episode: https://laracasts.com/lessons/understanding-joins

*/

/* Student grades */

CREATE TABLE students (id INTEGER PRIMARY KEY,
    first_name TEXT,
    last_name TEXT,
    email TEXT,
    phone TEXT,
    birthdate TEXT,
    buddy_id INTEGER);

INSERT INTO students (first_name, last_name, email, phone, birthdate)
    VALUES ("Peter", "Rabbit", "peter@rabbit.com", "555-6666", "2002-06-24", 2);
INSERT INTO students (first_name, last_name, email, phone, birthdate)
    VALUES ("Alice", "Wonderland", "alice@wonderland.com", "555-4444", "2002-07-04", 1);
INSERT INTO students 
    VALUES (3, "Aladdin", "Lampland", "aladdin@lampland.com", "555-3333", "2001-05-10", 4);
INSERT INTO students 
    VALUES (4, "Simba", "Kingston", "simba@kingston.com", "555-1111", "2001-12-24", 3);

CREATE TABLE student_grades (id INTEGER PRIMARY KEY,
    student_id INTEGER,
    test TEXT,
    grade INTEGER);

INSERT INTO student_grades (student_id, test, grade)
    VALUES (1, "Nutrition", 95);
INSERT INTO student_grades (student_id, test, grade)
    VALUES (2, "Nutrition", 92);
INSERT INTO student_grades (student_id, test, grade)
    VALUES (1, "Chemistry", 85);
INSERT INTO student_grades (student_id, test, grade)
    VALUES (2, "Chemistry", 95);
    
SELECT * FROM student_grades;

/* cross join */
SELECT * FROM student_grades, students;

/* implicit inner join */
SELECT * FROM student_grades, students
    WHERE student_grades.student_id = students.id;
    
/* explicit inner join - JOIN */
SELECT students.first_name, students.last_name, students.email, student_grades.test, student_grades.grade FROM students
    JOIN student_grades
    ON students.id = student_grades.student_id
    WHERE grade > 90;

create table student_projects (id integer primary key, student_id integer, title text);

insert into student_projects (student_id, title) values (1, 'Carrotapault');

/* inner join only creates records for matches between the two tables */
select students.first_name, students.last_name, student_projects.title 
from students 
join student_projects
on students.id = student_projects.student_id; 

/* outer join - list of all students and their projects, regardless if they have a project or not */
select students.first_name, students.last_name, student_projects.title 
from students 
left outer join student_projects /* outer means to retain the rows even if there is no match */
on students.id = student_projects.student_id; 

/* self join - ids are in the same table */
select students.first_name, students.last_name, buddies.email as buddy_email
from students 
join students buddies /* alias for table */
on students.buddy_id = buddies.id;

/* Bobby's hobbies */

/* display a table of people and their hobbies */
select persons.name, hobbies.name from hobbies join persons on persons.id = hobbies.person_id;

/* display only Bobby's hobbies */
select persons.name, hobbies.name 
from persons join hobbies 
where persons.name = 'Bobby McBobbyFace' and hobbies.person_id = persons.id;

/* Customers' orders */

CREATE TABLE customers (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    email TEXT);
    
INSERT INTO customers (name, email) VALUES ("Doctor Who", "doctorwho@timelords.com");
INSERT INTO customers (name, email) VALUES ("Harry Potter", "harry@potter.com");
INSERT INTO customers (name, email) VALUES ("Captain Awesome", "captain@awesome.com");

CREATE TABLE orders (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    customer_id INTEGER,
    item TEXT,
    price REAL);

INSERT INTO orders (customer_id, item, price)
    VALUES (1, "Sonic Screwdriver", 1000.00);
INSERT INTO orders (customer_id, item, price)
    VALUES (2, "High Quality Broomstick", 40.00);
INSERT INTO orders (customer_id, item, price)
    VALUES (1, "TARDIS", 1000000.00);

/* select all 'customers' and their orders even if they have not ordered before */
select customers.name, customers.email, orders.item, orders.price 
from customers 
left outer join orders
on customers.id = orders.customer_id;

/* show a list of all customers and their total order volume */
select customers.name, customers.email, sum(orders.price) as total_spending
from customers
left outer join orders
on customers.id = orders.customer_id
group by customers.email
order by total_spending desc;

/* Harry Potter sequels - self join */

select movies.title, sequel.title
from movies
left outer join movies sequel
on movies.sequel_id = sequel.id;

/* Friendbook */

select persons.fullname, hobbies.name
from persons
join hobbies
on persons.id = hobbies.person_id;

select persons1.fullname, persons2.fullname
from friends
join persons persons1
on persons1.id = friends.person1_id
join persons persons2
on persons2.id = friends.person2_id;

/* 
Famous persons project
Movie stars: What movies are they in? Are they married to each other?
Singers: What songs did they write? Where are they from?
Authors: What books did they write?
Fictional characters: How are they related to other characters? What books do they show up in?
*/



/* 
Query planning and optimization: parse -> optimize -> execute 

query tuning with a sql profiler. manual optimization to improve the execution plan.

create indexes makes repeated queries more efficient.

query planner for sqlite: https://www.sqlite.org/queryplanner.html


*/









