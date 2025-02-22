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
