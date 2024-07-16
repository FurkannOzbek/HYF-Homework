-- Active: 1719747438964@@127.0.0.1@3306

--Get all the tasks assigned to Pavel
SELECT title FROM task JOIN user ON user.id = user_id WHERE name LIKE '%Pavel%'

--Find how many tasks each user is responsible for
SELECT  user.name,COUNT(*) as task_counter from task JOIN user ON user.id = user_id GROUP BY user.name

--Find how many tasks with a status=Done each user is responsible for;
SELECT  user.name,COUNT(*) as task_counter_done 
FROM task 
JOIN user ON user.id = user_id 
JOIN status ON task.status_id = status.id 
WHERE status.name = 'Done'
GROUP BY user.name


--This is for seeing all table together for double check if the data in queries is right
SELECT  *
FROM task 
JOIN user ON user.id = user_id 
JOIN status ON task.status_id = status.id 
ORDER BY user.name





