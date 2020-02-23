# Write your MySQL query statement below

SELECT A.name Employee FROM Employee A, Employee B WHERE A.Salary > B.Salary AND A.ManagerId = B.id;
