

少写了个 "A." 就减少了 70ms 左右
SELECT FirstName, LastName, City, State FROM Person A LEFT JOIN Address B ON A.PersonId = B.PersonId;

