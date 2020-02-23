# Write your MySQL query statement below
-- SELECT A.Id, A.Email FROM Person A, Person B WHERE A.Email = B.Email AND A.id != B.id;

DELETE B FROM Person A, Person B WHERE A.Email = B.Email AND A.Id < B.Id;


-- DELETE 多个表的时候, DELETE 后必须写上需要删除哪个表
-- DELETE 多个表的时候, DELETE 后必须写上需要删除哪个表
-- DELETE 多个表的时候, DELETE 后必须写上需要删除哪个表
-- DELETE 多个表的时候, DELETE 后必须写上需要删除哪个表

