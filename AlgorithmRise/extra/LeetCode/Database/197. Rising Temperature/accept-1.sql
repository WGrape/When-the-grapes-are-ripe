# Write your MySQL query statement below

SELECT B.Id from Weather A, Weather B WHERE date_add(A.RecordDate, interval 1 day) = B.RecordDate AND B.Temperature > A.Temperature;