IF NOT EXISTS (SELECT *
FROM sys.databases
WHERE name = 'shopper_db_test')
BEGIN
  CREATE DATABASE shopper_db_test;
END