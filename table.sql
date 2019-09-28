CREATE DATABASE db;
USE db;

CREATE TABLE results ('id' varchar(30) NOT NULL, 'user' varchar(13) NOT NULL, 'age' int(3) NOT NULL, 'gender' char(1) NOT NULL, 'country' varchar(28) NOT NULL, 'language' varchar(30) NOT NULL, 'employment' varchar(37) NOT NULL, 'disciple' varchar(19) NOT NULL, 'sensitivity' varchar(24) NOT NULL, 'q1' varchar(12) NOT NULL, 'q2' varchar(10) NOT NULL,'q3' varchar(12) NOT NULL,'q4' varchar(29) NOT NULL,'q5' varchar(8) NOT NULL,'q6' varchar(8) NOT NULL,'q7' varchar(14) NOT NULL);

show results;

INSERT INTO results(id, user, age, gender, country, language, employment, disciple, sensitivity, q1, q2, q3, q4, q5, q6, q7) VALUES ('foxyroxy', 'student', 24, 'M', 'North America', 'English', 'not employed', 'engineering', 'not very sensitive', 'never', 'none', 'never', 'Colleagues/professional peers', 'Yes', 'Yes', 'About the same');
INSERT INTO results(id, user, age, gender, country, language, employment, disciple, sensitivity, q1, q2, q3, q4, q5, q6, q7) VALUES ('dragontails', 'scholar', 74, 'F', 'East Asia', 'Chinese', 'tenure or other permament appointment', 'law/human rights', 'extremely sensitive', 'never', 'none', 'never', 'Colleagues/professional peers', 'Yes', 'Yes', 'About the same');
INSERT INTO results(id, user, age, gender, country, language, employment, disciple, sensitivity, q1, q2, q3, q4, q5, q6, q7) VALUES ('THISSHOULDNOTSHOW', 'studentawlkejrawlerjkal987978987e', 1234, 'M', 'Spain', 'Spanish', 'not employed', 'engineering', 'extremely sensitive', 'never', 'none', 'never', 'Colleagues/professional peers', 'Yes', 'Yes', 'About the same');
INSERT INTO results(id, user, age, gender, country, language, employment, disciple, sensitivity, q1, q2, q3, q4, q5, q6, q7) VALUES ('roxyfoxy', 'administrator', 24, 'F', 'Europe', 'English', 'not employed', 'other', 'more sensitive than most', 'never', 'none', 'never', 'Colleagues/professional peers', 'Yes', 'Yes', 'About the same');
INSERT INTO results(id, user, age, gender, country, language, employment, disciple, sensitivity, q1, q2, q3, q4, q5, q6, q7) VALUES ('foxyroxy', 'non-university', 24, 'F', 'East Asia', 'Korean', 'not employed', 'social sciences', 'somewhat sensitive', 'never', 'none', 'never', 'Colleagues/professional peers', 'Yes', 'Yes', 'About the same');
INSERT INTO results(id, user, age, gender, country, language, employment, disciple, sensitivity, q1, q2, q3, q4, q5, q6, q7) VALUES ('foxyroxy', 'student', 24, 'M', 'Europe', 'English', 'not employed', 'medicine', 'not very sensitive', 'never', 'none', 'never', 'Colleagues/professional peers', 'Yes', 'Yes', 'About the same');

select * from results;
select id, user, q1 from results; 
select id, user, gender from results where gender='M';
