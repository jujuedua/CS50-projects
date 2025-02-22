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

outfile is the output image file (BMP format).

## Example Usage

$ ./filter -g ./images/courtyard.bmp ./images/courtyard-grayscale.bmp

# **filter-more**

# **finance**

# **homepage**

# **inheritance**

# **mario-less**

# **mario-more**

# **movies**

# **plurality**

# **project**

# **readability**

# **recover**

# **runoff**

# **scrabble**

# **sentimental-cash**

# **sentimental-credit**

# **sentimental-hello**

# **sentimental-mario-less**

# **sentimental-mario-more**

# **sentimental-readability**

# **songs**

# **sort**

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

