SELECT A.FirstName, A.LastName, B.City, B.State FROM Person A LEFT JOIN Address B ON A.PersonId = B.PersonId;
