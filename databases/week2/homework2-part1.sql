-- Active: 1719747438964@@127.0.0.1@3306@test
-- Part 1

--Add a task with these attributes: title, description, created, updated, due_date, status_id, user_id
select * from task


--Add a task with these attributes: title, description, created, updated, due_date, status_id, user_id
INSERT INTO task (title,description,created,updated,due_date,status_id,user_id)
VALUES ("Going walk","A beautiful walk in a sunny day",now(),now(), "2025-09-10",1,11)

--Change the title of a task
UPDATE task
SET title = "update buscard",
    update = now(),
where title ="Renew buscard"

-- Change a task due date
UPDATE task
SET due_date = "2025-12-10",
    updated = now()
WHERE id = 1

--Change a task status
UPDATE task
SET status_id = 3
WHERE id = 1

