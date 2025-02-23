# **songs**

This projectis a SQLite database containing data from Spotify about the top 100 streamed songs in 2018. This database includes information about songs, their artists, and various musical attributes.

## Running SQLite

-To begin querying the database, open a terminal and run:

   ```bash
sqlite3 songs.db
   ```

## Checking Tables

-To view the tables in the database:

   ```bash
.tables
   ```

-Expected output:

   ```bash
artists  songs
   ```

## Checking Schema

-To view the structure of the tables:

   ```bash
.schema
   ```

-This command outputs the CREATE TABLE statements that define the database structure.

## Querying the Database

-To retrieve all song names:

   ```bash
SELECT name FROM songs;
   ```

### Example output:

   ```bash
| Yes Indeed                                              |                                         
| I Like Me Better                                        |                                         
| This Is Me                                              |                                         
| Everybody Dies In Their Nightmares                      |                                         
| Rewrite The Stars                                       |                                         
| I Miss You (feat. Julia Michaels)                       |                                         
| No Brainer                                              |                                         
| Dusk Till Dawn - Radio Edit                             |                                         
| Be Alright                                              |                                         
+---------------------------------------------------------+
   ```
