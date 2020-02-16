# Write your MySQL query statement below

select distinct a.Email from Person a, Person b WHERE a.Email = b.Email and a.Id != b.id;