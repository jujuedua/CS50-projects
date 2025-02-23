# **Explanation on how each CS50 project works**

# **birthday**

This is a simple Flask web application that allows users to add and view birthdays.

-Add a new birthday by entering a name, month, and day.

-View a list of all saved birthdays.

## Running the Application

-Navigate to the birthdays project directory in your terminal.

-Run the following command to start the Flask server:

   ```bash
   flask run
   ```
-Open the link and it will direct you to the birthdays website.

# **caesar**

This program encrypts messages using the Caesar cipher, a simple substitution cipher that shifts letters in the alphabet by a given key. Non-alphabetical characters remain unchanged.

## Usage

 ```bash
./caesar key
  ```

-key must be a positive integer representing the number of positions to shift each letter.

-If an invalid argument is provided (e.g., non-numeric or multiple arguments), the program displays a usage message and exits.

## Example Usage

### Valid Usage:

  ```bash
$ ./caesar 13
plaintext:  Hi there!
ciphertext: Uv gurer!

$ ./caesar 26
plaintext:  This is CS50.
ciphertext: This is CS50.
  ```

Since shifting by 26 (the length of the alphabet) results in no change, the output remains the same.

### Invalid Usage:

  ```bash
$ ./caesar HELLO
Usage: ./caesar key

$ ./caesar 1 2 3
Usage: ./caesar key
  ```

# **cash**

This program calculates the minimum number of coins required to give a specified amount of change. The program assumes US coin denominations (quarters, dimes, nickels, and pennies).

## Usage
 
  ```bash
./cash
  ```

-The program prompts the user to enter the amount of change owed (in cents).

-It then calculates and outputs the minimum number of coins needed.

## Example Usage

```bash
$ ./cash
Change owed: 25
1

$ ./cash
Change owed: 70
4
  ```

# **credit**

This program validates credit card numbers using the Luhn algorithm and determines the card's type based on its number.

## Usage

  ```bash
./credit
  ```

-The program prompts the user to enter a credit card number.

-It validates the number and determines the card type (e.g., VISA, MASTERCARD, AMEX) or marks it as INVALID.

## Example Usage

```bash
$ ./credit
Number: 4003-6000-0000-0014
Number: foo
Number: 4003600000000014
VISA
  ```

-If an invalid argument is provided (e.g., non-numeric or special characters), the program will reapt itself until its valid or invalid.

```bash
$ ./credit
Number: 6176292929
INVALID
  ```

 -Here are a [few card numbers](https://developer.paypal.com/api/nvp-soap/payflow/integration-guide/test-transactions/#standard-test-cards) that PayPal recommends for testing.

 ## Card Type Identification

-AMEX: 15-digit numbers starting with 34 or 37.

-MASTERCARD: 16-digit numbers starting with 51, 52, 53, 54, or 55.

-VISA: 13- or 16-digit numbers starting with 4.

-INVALID: Any number that does not match the above criteria or fails the Luhn algorithm.

# **dna**

This program identifies individuals based on DNA sequence analysis. Given a database of individuals and their DNA sequence profiles, the program compares a given DNA sequence against known profiles to find a match.

## Usage

  ```bash
python dna.py <database.csv> <sequence.txt>
  ```

<database.csv>: A CSV file containing individuals' names and their short tandem repeat (STR) counts.

<sequence.txt>: A text file containing a DNA sequence.

## Example Usage

  ```bash
$ python dna.py databases/small.csv sequences/1.txt
Bob

$ python dna.py databases/small.csv sequences/2.txt
No match

$ python dna.py databases/small.csv sequences/4.txt
Alice

$ python dna.py databases/large.csv sequences/17.txt
Harry

$ python dna.py databases/large.csv sequences/20.txt
No match
  ```

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

# **filter-less**

Filter-Less is a command-line image processing program that applies various filters to BMP images. Users can apply grayscale, sepia, reflection, and blur effects to images by specifying the desired filter flag.

## Usage

To use Filter-Less, compile the program and execute it with the appropriate arguments:

  ```bash
$ make filter
$ ./filter [flag] infile outfile
  ```
-[flag] determines which filter to apply:

-g : Convert the image to grayscale

-s : Apply a sepia tone

-r : Reflect the image horizontally

-b : Blur the image

-infile is the input image file (BMP format).

-outfile is the output image file (BMP format).

-If the program is run without the correct arguments, it will output:

   ```bash
Usage: ./filter [flag] infile outfile
   ```

## Example Usage

  ```bash
$ ./filter -g ./images/courtyard.bmp ./images/courtyard-grayscale.bmp
  ```
![courtyard](https://github.com/user-attachments/assets/7f9abd52-3011-4568-a5ba-f247b3e136a3)
![courtyard-grayscale](https://github.com/user-attachments/assets/05f38768-e307-4a72-9253-598837180626)

# **filter-more**

Filter-More is an advanced command-line image processing program that applies various filters to BMP images. Users can apply grayscale, reflection, blur, and edge detection effects to images by specifying the desired filter flag.

## Usage

To use Filter-More, compile the program and execute it with the appropriate arguments:

  ```bash
$ make filter
$ ./filter [flag] infile outfile
  ```
-[flag] determines which filter to apply:

-g : Convert the image to grayscale

-r : Reflect the image horizontally

-b : Blur the image

-e : Detect edges in the image

-infile is the input image file (BMP format).

-outfile is the output image file (BMP format).

-If the program is run without the correct arguments, it will output:

  ```bash
Usage: ./filter [flag] infile outfile
  ```
## Example Usage

  ```bash
$ ./filter -e ./images/yard.bmp ./images/yard-edges.bmp
  ```
![yard](https://github.com/user-attachments/assets/e5655f7d-f044-42eb-82d2-e270773b65e0)
![yard-edges](https://github.com/user-attachments/assets/f2e732ff-d006-4357-9042-6f79acd4d4eb)

# **finance**

C$50 Finance is a web application that allows users to manage their stock portfolios by "buying" and "selling" stocks in a simulated environment. This application fetches real-time stock prices from an external API to facilitate transactions.

## Running the Application

-Start Flask’s built-in web server:

  ```bash
flask run
  ```

-Visit the URL outputted by Flask to interact with the application.

-Note that login and registration are required to access portfolio management features.

## Features

-User Authentication: Register and log in to track your stock portfolio.

-Stock Lookup: Search for real-time stock prices via IEX Cloud API.

-Buy Stocks: Purchase stocks using available virtual funds.

-Sell Stocks: Sell stocks to update your portfolio balance.

-Transaction History: View past trades and their details.

# **homepage**

#### Video:  <[URL HERE](https://youtu.be/wkjhr2bv120)>

This project involves creating a simple homepage using HTML, CSS, and JavaScript. The homepage can introduce yourself, your favorite hobby, or any topic of interest. It is designed to be responsive and can be viewed on various devices.

## Running the Application

-Start a simple HTTP server using:

  ```bash
http-server
  ```

-Click on the first link presented by http-server to open your webpage in a new tab.

# **inheritance**

This project simulates genetic inheritance across multiple generations using a simple program that models blood type inheritance.

## Running the Application

-Execute the program:

   ```bash
./inheritance
   ```

-The program simulates inheritance of blood types across multiple generations and outputs the result in a hierarchical format.

## Example Output

   ```bash
$ ./inheritance
Child (Generation 0): blood type OB
    Parent (Generation 1): blood type OA
        Grandparent (Generation 2): blood type OA
        Grandparent (Generation 2): blood type AO
    Parent (Generation 1): blood type OB
        Grandparent (Generation 2): blood type AO
        Grandparent (Generation 2): blood type BB

$ ./inheritance
Child (Generation 0): blood type AO
    Parent (Generation 1): blood type AA
        Grandparent (Generation 2): blood type AA
        Grandparent (Generation 2): blood type AA
    Parent (Generation 1): blood type AO
        Grandparent (Generation 2): blood type AO
        Grandparent (Generation 2): blood type OO
   ```

# **mario-less**

This project is a simple C program that prints a right-aligned pyramid of hashes (#) based on user input, similar to the pyramids in Super Mario Bros.

## Running the Application

-Execute the program:

   ```bash
./mario
   ```

-Enter a height value when prompted (1 to 8). The program will generate a right-aligned pyramid of that height.

## Example Output

   ```bash
$ ./mario
Height: 8
          #
         ##
        ###
       ####
      #####
     ######
    #######
########

$ ./mario
Height: -3
Height: 3
     #
    ##
###
   ```
-If entred a negative number or a number that's not between 1 and 8 it will repeat it self until a valid answer.

# **mario-more**

This project is a C program that prints a double pyramid of hashes (#) based on user input, similar to the pyramids in Super Mario Bros.

## Running the Application

-Execute the program:

   ```bash
./mario
   ```

-Enter a height value when prompted (1 to 8). The program will generate a right-aligned pyramid of that height.

## Example Output

   ```bash
$ ./mario
Height: 4
      #  #
     ##  ##
    ###  ###
####  ####

   ```
-If entred a negative number or a number that's not between 1 and 8 it will repeat it self until a valid answer.

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

# **plurality**

This project implements a simple plurality voting system in C, allowing voters to cast a vote for one of several candidates. The candidate with the most votes wins.

## Running the Application

-Execute the program with candidate names:

   ```bash
./plurality Julia Bob Charlie
   ```

-Enter the number of voters when prompted.

-Cast votes by typing the candidate's name.

-An election with any number of candidate (up to the MAX of 9).

## Example Output

   ```bash
$ ./plurality Alice Bob Zack
Number of voters: 3
Vote: Julia
Vote: Julia
Vote: Bob
Julia
   ```

-Printing the winner of the election if there is only one.

   ```bash
$ ./plurality Alice Bob Zack
Number of voters: 3
Vote: john
Invalid vote.
Vote: Julia
Vote: Julia
Julia
   ```

-Invalid votes for candidates who are not on the ballot

   ```bash
$ ./plurality Alice Bob Zack
Number of voters: 3
Vote: Julia
Vote: Bob
Vote: Zack
Julia
Bob
Zack
   ```

-Printing the winner of the election if there are multiple winners

   ```bash
$ ./plurality
Usage: plurality [candidate ...]
   ```
-If an invalid argument is provided, the program displays a usage message and exits.

# **readability**

This project implements a readability analyzer in C that calculates the approximate grade level needed to comprehend a given text. It uses the Coleman-Liau index formula to determine readability and provides an output indicating the grade level.

## Running the Application

-Execute the program:

   ```bash
./readability
   ```

-Enter a block of text when prompted.

-The program will analyze the text and output the estimated reading grade level.

## Example Output


   ```bash
$ ./readability
Text: One fish. Two fish. Red fish. Blue fish.
Before Grade 1

$ ./readability
Text: It was a bright cold day in April, and the clocks were striking thirteen. Winston Smith, his chin nuzzled into his breast in an effort to escape the vile wind, slipped quickly through the glass doors of Victory Mansions, though not quickly enough to prevent a swirl of gritty dust from entering along with him. 
Grade 10

$ ./readability
Text: A large class of computational problems involve the determination of properties of graphs, digraphs, integers, arrays of integers, finite families of finite sets, boolean formulas and elements of other countable domains. 
Grade 16+
   ```

# **recover**

This project is a program designed to restore deleted JPEG images from a raw memory card image. When files are deleted, they are not immediately erased from the memory; rather, the system marks their space as available for new data. This program scans the raw memory card file and extracts recoverable JPEG images.

## Running the Program

-To recover deleted photos from a memory card image:

   ```bash
./recover card.raw
   ```

-This will scan card.raw and recover JPEG images, saving them as separate files in the same directory.

# **runoff**

This project is a program that simulates an election using ranked-choice voting. Voters rank candidates in order of preference, and the program determines the winner through multiple rounds of elimination until a candidate receives more than half of the votes.

## Running the Program

-To execute the program with a list of candidates:

   ```bash
./runoff Julia Bob Zack
   ```

-Users will be prompted to enter their ranked preferences for each voter.

-Elections with up to 9 candidates (the maximum allowed).

-Correctly processing votes by candidate name.

-Rejecting invalid votes for non-listed candidates.

-Declaring a winner when only one candidate remains.

-Not eliminating candidates in case of a tie between all remaining candidates.

## Usage

-Example scenario with three voters:

   ```bash
$ ./runoff Julia Bob Zack
Number of voters: 3
Rank 1: Julia
Rank 2: Bob
Rank 3: Zack

Rank 1: Bob
Rank 2: Julia
Rank 3: Zack

Rank 1: Julia
Rank 2: Bob
Rank 3: Zack

Julia
   ```

-If an invalid vote is entered:

   ```bash
$ ./runoff Julia Bob Zack
Number of voters: 3
Rank 1: John
Invalid vote.
   ```

-If run without candidates:

   ```bash
$ ./runoff
Usage: runoff [candidate ...]
   ```

# **scrabble**

This project is a program that simulates a word-based game where players enter words, and the program calculates the score based on the Scrabble letter values. The player with the highest score wins. If both players have the same score, the game ends in a tie.

## Letter Values

The point values assigned to each letter are as follows:

   ```bash
| A | B | C | D | E | F | G | H | I | J | K | L | M | N | O | P | Q | R | S | T | U | V | W | X | Y | Z |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 1 | 3 | 3 | 2 | 1 | 4 | 2 | 4 | 1 | 8 | 5 | 1 | 3 | 1 | 1 | 3 |10 | 1 | 1 | 1 | 1 | 4 | 4 | 8 | 4 |10 |
   ```

## Running the Program

-To execute the program:

   ```bash
./scrabble
   ```

-Players will be prompted to enter their words, and the program will determine the winner.

### Example Outputs

   ```bash
$ ./scrabble
Player 1: Question?
Player 2: Question!
Tie!

$ ./scrabble
Player 1: red
Player 2: wheelbarrow
Player 2 wins!

$ ./scrabble
Player 1: COMPUTER
Player 2: science
Player 1 wins!

$ ./scrabble
Player 1: Scrabble
Player 2: wiNNeR
Player 1 wins!
   ```

# **sentimental-cash**

This project is a program that calculates the minimum number of coins needed to make change for a given amount in dollars. The program takes user input, processes the amount, and returns the smallest number of coins required.

## Running the Program

-To execute the program:

   ```bash
python cash.py
   ```

## Example Outputs

   ```bash
$ python cash.py
Change: 0.41
4

$ python cash.py
Change: 0.01
1

$ python cash.py
Change: 0.15
2

$ python cash.py
Change: 1.60
7
   ```

# **sentimental-credit**

This project is a program that validates credit card numbers based on industry standards. The program determines the type of credit card (AMEX, MASTERCARD, VISA) or marks it as INVALID if the number does not meet the required criteria.

## Running the Program

-To execute the program:

   ```bash
python credit.py
   ```

## Example Outputs

   ```bash
$ python credit.py
Number: 378282246310005
AMEX

$ python credit.py
Number: 5555555555554444
MASTERCARD

$ python credit.py
Number: 1234567890
INVALID
   ```
 -Here are a [few card numbers](https://developer.paypal.com/api/nvp-soap/payflow/integration-guide/test-transactions/#standard-test-cards) that PayPal recommends for testing.

## Card Type Identification

-AMEX: 15-digit numbers starting with 34 or 37.

-MASTERCARD: 16-digit numbers starting with 51, 52, 53, 54, or 55.

-VISA: 13- or 16-digit numbers starting with 4.

-INVALID: Any number that does not match the above criteria or fails the Luhn algorithm.

# **sentimental-hello**

This is a simple python program that prompts the user for their name and prints a personalized greeting.

## Running the Program

-To execute the program:

   ```bash
python hello.py
   ```

## Example Output

   ```bash
$ python hello.py
What is your name? David
hello, David
   ```

# **sentimental-mario-less**

This project is a python program that prints a right-aligned pyramid of hashes (#) based on user input, similar to the pyramids in Super Mario Bros.

## Running the Application

-Execute the program:

   ```bash
./mario
   ```

-Enter a height value when prompted (1 to 8). The program will generate a right-aligned pyramid of that height.

## Example Output

   ```bash
$ ./mario
Height: 8
          #
         ##
        ###
       ####
      #####
     ######
    #######
########

$ ./mario
Height: -3
Height: 3
     #
    ##
###
   ```
-If entred a negative number or a number that's not between 1 and 8 it will repeat it self until a valid answer.

# **sentimental-mario-more**

This project is a python program that prints a double pyramid of hashes (#) based on user input, similar to the pyramids in Super Mario Bros.

## Running the Application

-Execute the program:

   ```bash
./mario
   ```

-Enter a height value when prompted (1 to 8). The program will generate a right-aligned pyramid of that height.

## Example Output

   ```bash
$ ./mario
Height: 4
      #  #
     ##  ##
    ###  ###
####  ####

   ```
-If entred a negative number or a number that's not between 1 and 8 it will repeat it self until a valid answer.


# **sentimental-readability**

This project implements a readability analyzer in python that calculates the approximate grade level needed to comprehend a given text. It uses the Coleman-Liau index formula to determine readability and provides an output indicating the grade level.

## Running the Application

-Execute the program:

   ```bash
./readability
   ```

-Enter a block of text when prompted.

-The program will analyze the text and output the estimated reading grade level.

## Example Output


   ```bash
$ ./readability
Text: One fish. Two fish. Red fish. Blue fish.
Before Grade 1

$ ./readability
Text: It was a bright cold day in April, and the clocks were striking thirteen. Winston Smith, his chin nuzzled into his breast in an effort to escape the vile wind, slipped quickly through the glass doors of Victory Mansions, though not quickly enough to prevent a swirl of gritty dust from entering along with him. 
Grade 10

$ ./readability
Text: A large class of computational problems involve the determination of properties of graphs, digraphs, integers, arrays of integers, finite families of finite sets, boolean formulas and elements of other countable domains. 
Grade 16+
   ```

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

-See [this SQL keywords reference](https://www.w3schools.com/sql/sql_ref_keywords.asp) for some SQL syntax that may be helpful!

# **sort**

In this problem, you will analyze three compiled sorting programs—sort1, sort2, and sort3—to determine which sorting algorithm each one implements. The three possible sorting algorithms used are:

-Selection Sort

-Bubble Sort

-Merge Sort

## How to Identify the Sorting Algorithm

-To determine which sorting algorithm each program uses, you can analyze their behavior using provided .txt input files.

### Steps to Analyze:

-Run each sorting program with different input files and observe the output.

   ```bash
./sort1 random10000.txt
./sort2 random10000.txt
./sort3 random10000.txt
   ```

-Check the number of comparisons and swaps performed.

-Time the execution for different input sizes:

   ```bash
time ./sort1 random10000.txt

time ./sort1 sorted10000.txt
   ```

### Look for patterns:

-Selection sort: Makes a fixed number of swaps (equal to the number of elements).

-Bubble sort: Continues swapping until no swaps are needed.

-Merge sort: Uses recursive division and merging.

# **speller**

# **substitution**

# **tideman**

# **trivia**

# **volume**

# **hello.c**

This is a simple C program that prompts the user for their name and prints a personalized greeting.

## How to run the Program

Open your terminal and run the program with

   ```bash
   $ ./hello
   ```

After running the program, it will ask for your name. For example:

   ```bash
What's your name? Julia
hello, Julia
   ```

