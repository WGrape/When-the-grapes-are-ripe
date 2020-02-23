# Write your MySQL query statement below
-- SELECT A.Id, A.Email FROM Person A, Person B WHERE A.Email = B.Email AND A.id != B.id;

DELETE FROM Person WHERE Id NOT IN ( 

    -- 包一层这个, 就不会提示 You have an error in your SQL syntax; check the manual that corresponds to your MySQL server version for the right syntax to use near 'T WHERE Id NOT IN ( SELECT Id FROM Person GROUP BY Email HAVING COUNT(Email) > 1' 错误了
    SELECT * FROM (
        SELECT MIN(Id) FROM Person GROUP BY Email
    )t
);

DELETE FROM Person WHERE Id NOT IN ( 
    SELECT * FROM (
        SELECT MIN(Id) FROM Person GROUP BY Email
    )t
);

DELETE FROM Person WHERE Id NOT IN ( 
    SELECT * FROM (
        SELECT MIN(Id) FROM Person GROUP BY Email
    )t
);

DELETE FROM Person WHERE Id NOT IN ( 
    SELECT * FROM (
        SELECT MIN(Id) FROM Person GROUP BY Email
    )t
);