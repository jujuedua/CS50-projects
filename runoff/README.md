# **runoff**

Runoff is a program that simulates an election using ranked-choice voting. Voters rank candidates in order of preference, and the program determines the winner through multiple rounds of elimination until a candidate receives more than half of the votes.

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
