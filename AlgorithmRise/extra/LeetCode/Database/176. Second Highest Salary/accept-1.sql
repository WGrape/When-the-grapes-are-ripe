# Write your MySQL query statement below

SELECT MAX(Salary) SecondHighestSalary FROM Employee WHERE Id NOT IN (
    SELECT Id FROM Employee WHERE Salary = ( SELECT MAX(Salary) FROM Employee )
);