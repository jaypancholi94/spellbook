# SQL
- SQL stands for Structured Query Language
- SQL lets you access and manipulate databases
- SQL became a standard of the American National Standards Institute (ANSI) in 1986, and of the International Organization for Standardization (ISO) in 1987
## What Can SQL do?

- SQL can execute queries against a database
- SQL can retrieve data from a database
- SQL can insert records in a database
- SQL can update records in a database
- SQL can delete records from a database
- SQL can create new databases
- SQL can create new tables in a database
- SQL can create stored procedures in a database
- SQL can create views in a database
- SQL can set permissions on tables, procedures, and views
## Wildcard Characters

| Symbol | Description                                                  |
| ------ | ------------------------------------------------------------ |
| %      | Represents zero or more characters                           |
| _      | Represents a single character                                |
| []     | Represents any single character within the brackets *        |
| ^      | Represents any character not in the brackets *               |
| -      | Represents any single character within the specified range * |
| {}     | Represents any escaped character **                          |

::: tip Note
 *Not supported in PostgreSQL and MySQL databases.
** Supported only in Oracle databases.
:::
## SQL Joins
- `(INNER) JOIN`: Returns records that have matching values in both tables
- `LEFT (OUTER) JOIN`: Returns all records from the left table, and the matched records from the right table
- `RIGHT (OUTER) JOIN`: Returns all records from the right table, and the matched records from the left table
- `FULL (OUTER) JOIN`: Returns all records when there is a match in either left or right table
## SQL Syntax Cheat sheet
### Select
``` sql
SELECT column1, column2, ...
FROM table_name;
```
### Select Distinct
The `SELECT DISTINCT` statement is used to return only distinct (different) values.
```sql
SELECT DISTINCT column1, column2, ...
FROM table_name;
```
### Where
```sql
SELECT column1, column2, ...
FROM table_name
WHERE condition;
```
### Order By
```sql
SELECT column1, column2, ...
FROM table_name  
ORDER BY column1, column2, ... ASC|DESC;
```
### And
```sql
SELECT column1, column2, ...  
FROM table_name  
WHERE condition1 AND condition2 AND condition3 ...;
```
### Or
```sql
SELECT column1, column2, ...  
FROM table_name  
WHERE condition1 OR condition2 OR condition3 ...;
```
### Not
```sql
SELECT column1, column2, ...  
FROM table_name
WHERE NOT condition;
```
### Insert Into
It is possible to write the `INSERT INTO` statement in two ways:

1. Specify both the column names and the values to be inserted:

```sql
INSERT INTO table_name (column1, column2, column3, ...)
VALUES (value1, value2, value3, ...);`
```
2. If you are adding values for all the columns of the table, you do not need to specify the column names in the SQL query. However, make sure the order of the values is in the same order as the columns in the table. Here, the `INSERT INTO` syntax would be as follows:

```sql
INSERT INTO table_name 
VALUES (value1, value2, value3, ...);
```
### Null Values
1. IS NULL
```sql
SELECT column_names
FROM table_name
WHERE column_name IS NULL;
```
2. IS NOT NULL
```sql
SELECT column_names
FROM table_name
WHERE column_name IS NOT NULL;
```
### Update
```sql
UPDATE table_name
SET column1 = value1, column2 = value2, ...
WHERE condition;
```
### Delete
```sql
DELETE FROM table_name WHERE condition;
```
::: warning
Be careful when deleting records in a table! Notice the `WHERE` clause in the `DELETE` statement. The `WHERE` clause specifies which record(s) should be deleted. If you omit the `WHERE` clause, all records in the table will be deleted!
:::
### Aggregate Functions
1. Min
```sql
SELECT MIN(column_name)  
FROM table_name
WHERE condition;
```
2. Max
```sql
SELECT MAX(column_name)  
FROM table_name
WHERE condition;
```
3. Count
```sql
SELECT COUNT(column_name)  
FROM table_name
WHERE condition;
```
4. Sum
```sql
SELECT SUM(column_name)  
FROM table_name
WHERE condition;
```
5. Avg
```sql
SELECT AVG(column_name)  
FROM table_name
WHERE condition;
```
### Like
```sql
SELECT column1, column2, ...  
FROM table_name
WHERE columnN LIKE pattern;
```