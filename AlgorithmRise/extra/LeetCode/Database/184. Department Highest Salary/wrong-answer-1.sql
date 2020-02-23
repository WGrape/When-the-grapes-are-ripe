# Write your MySQL query statement below

-- SELECT B.Name Department, Max(A.Salary) Salary FROM Employee A LEFT JOIN Department B ON A.DepartmentId = B.id GROUP BY DepartmentId;

SELECT B.name Department, A.Name Employee, A.Salary FROM Employee A INNER JOIN Department B
ON A.DepartmentId = B.Id WHERE A.Salary IN (
    SELECT Max(Salary) Salary FROM Employee GROUP BY DepartmentId
) ;

-- 这个关系挺复杂的, 要好好想想怎么写
