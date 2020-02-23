# Write your MySQL query statement below
-- SELECT A.Id, A.Email FROM Person A, Person B WHERE A.Email = B.Email AND A.id != B.id;

DELETE FROM Person WHERE Id NOT IN ( 
    SELECT * FROM (
        SELECT Id FROM Person GROUP BY Email
    )t
);