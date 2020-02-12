awk '/^(\([0-9]{3}\) |[0-9]{3}-)[0-9]{3}-[0-9]{4}$/{print $0}' file.txt


# Write your MySQL query statement below

SELECT MAX(Salary) SecondHighestSalary FROM Employee WHERE Id != (
    SELECT Id FROM ( SELECT Id, MAX(Salary) SecondHighestSalary FROM Employee ) A
    ) LIMIT 1;