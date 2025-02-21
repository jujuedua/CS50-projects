# birthday

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

# caesar

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

# hello.c

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

