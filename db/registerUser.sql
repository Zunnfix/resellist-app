INSERT INTO drino_users
(first_name, last_name, username, password, email)
VALUES
($1, $2, $3, $4, $5)
RETURNING *