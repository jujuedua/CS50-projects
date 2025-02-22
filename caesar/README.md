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
