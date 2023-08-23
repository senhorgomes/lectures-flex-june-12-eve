-- Select all students
SELECT * FROM students;
-- SELECT name FROM students;
SELECT name AS students_name FROM students;
-- Select all pets
SELECT COUNT(*) FROM pets;
-- List all pets over the age of 5
SELECT * FROM pets WHERE age > 5;
-- List all pets over the age of 5 but limit the results to the first 3 rows
SELECT * FROM pets WHERE age > 5 LIMIT 3;
-- List all users over the age of 5 but skip the first 3 results and grab the next 2
SELECT * FROM pets WHERE age > 5 OFFSET 3;
-- This is ok, it doesnt make much sense to us
SELECT * FROM pets WHERE age > 5 OFFSET 2 LIMIT 1;
-- List all students and order by age
SELECT * FROM pets order by age;
-- List all students and pets
SELECT students.name AS student_name, pets.name AS pet_name FROM students JOIN pets ON students.id = pets.student_id;
-- How many pets each student has
SELECT students.name AS student_name, COUNT(pets.id) FROM students JOIN pets ON students.id = pets.student_id GROUP BY students.name;


-- Example of left join
