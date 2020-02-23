# Write your MySQL query statement below

select class from ( select distinct(student), class from courses ) A group by class having count(class) >= 5;

