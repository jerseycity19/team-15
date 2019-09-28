CREATE DATABASE db;
USE db;

CREATE TABLE results ('id' varchar(30) NOT NULL, 'user' varchar(13) NOT NULL, 'age' int(3) NOT NULL, 'gender' char(1) NOT NULL, 'country' varchar(28) NOT NULL, 'language' varchar(30) NOT NULL, 'employment' varchar(37) NOT NULL, 'disciple' varchar(19) NOT NULL, 'sensitivity' varchar(24) NOT NULL, 'q1' varchar(12) NOT NULL, 'q2' varchar(10) NOT NULL,'q3' varchar(12) NOT NULL,'q4' varchar(29) NOT NULL,'q5' varchar(8) NOT NULL,'q6' varchar(8) NOT NULL,'q7' varchar(14) NOT NULL);

show results;

INSERT INTO results(id, user, age, gender, country, language, employment, disciple, sensitivity, q1, q2, q3, q4, q5, q6, q7) VALUES ('foxyroxy', 'student', 24, 'M', 'USA', 'English', 'not employed', 'engineering', 'extremely sensitive', 'never', 'none', 'never', 'Colleagues/professional peers', 'Yes', 'Yes', 'About the same');

select * from results;
select id, user, q1 from results; 
select id, user, gender from results where gender='M';
