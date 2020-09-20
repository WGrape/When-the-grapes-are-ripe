# Write your MySQL query statement below
SELECT Num ConsecutiveNums FROM Logs GROUP BY Num HAVING COUNT(Num) >=3 ;