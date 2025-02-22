# **fiftyville**

Fiftyville is an SQL-based crime investigation project where you analyze a database to solve a mystery. The goal is to use SQL queries to investigate a crime, track the culprit, and understand the events leading up to and following the incident.

## How It Works

-Access the Database: Use SQLite to interact with the database.

  ```bash
sqlite3 fiftyville.db
  ```
-Explore the Data: Use SQL queries to retrieve useful information. Start by listing available tables:

  ```bash
.tables
  ```

-Investigate the Crime Scene: Query the crime_scene_reports table to find details about the crime.

  ```bash
SELECT * FROM crime_scene_reports WHERE month = X AND day = Y;
  ```

-Follow the Clues: Use logical deductions to analyze interviews, phone calls, transactions, and travel history.

-Track the Suspect: Use SQL queries to narrow down potential suspects and confirm their movements.

-Solve the Mystery: Identify the criminal and their escape plan using evidence collected from the database.
