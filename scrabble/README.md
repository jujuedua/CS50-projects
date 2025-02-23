# **scrabble**

Scrabble is a program that simulates a word-based game where players enter words, and the program calculates the score based on the Scrabble letter values. The player with the highest score wins. If both players have the same score, the game ends in a tie.

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
