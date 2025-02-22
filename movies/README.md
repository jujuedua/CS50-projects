# **movies**

This project is a SQLite database that stores information about movies, including their titles, release years, directors, actors, and ratings

## Database Structure

-The database consists of the following tables:

### movies

-Stores movie information.

   ```bash
CREATE TABLE movies (
    id INTEGER PRIMARY KEY,
    title TEXT NOT NULL,
    year NUMERIC
);
   ```

### people

-Stores information about actors and directors.

   ```bash
CREATE TABLE people (
    id INTEGER PRIMARY KEY,
    name TEXT NOT NULL,
    birth NUMERIC
);
   ```

### stars

-Links movies and actors.

   ```bash
CREATE TABLE stars (
    movie_id INTEGER,
    person_id INTEGER
);
   ```

### directors

-Links movies and directors.

   ```bash
CREATE TABLE directors (
    movie_id INTEGER,
    person_id INTEGER
);
   ```

### ratings

-Stores movie ratings.

   ```bash
CREATE TABLE ratings (
    movie_id INTEGER,
    rating NUMERIC,
    votes INTEGER
);
   ```

## Example Queries

### List all movies

   ```bash
SELECT * FROM movies LIMIT 5;
   ```

### List all people

   ```bash
SELECT * FROM people LIMIT 5;
   ```

### Get stars of a movie

   ```bash
SELECT * FROM stars LIMIT 5;
   ```
