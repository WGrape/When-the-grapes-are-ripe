# Write your MySQL query statement below
SELECT Name `Customers` FROM Customers WHERE Id NOT IN ( SELECT CustomerId FROM Orders );
