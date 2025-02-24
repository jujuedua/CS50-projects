# **tideman**

This program implements the Tideman (Ranked Pairs) voting method, a ranked-choice voting system that guarantees the election of the Condorcet winner, if one exists. The program constructs a directed graph of candidate preferences and determines the winner based on the strongest victories while avoiding cycles.

## Usage

-To compile the program, use:

   ```bash
$ make tideman
   ```

-To run the program, provide candidate names as arguments:

   ```bash
$ ./tideman Julia Bob Zack
   ```

-The program will then prompt for voter preferences:

   ```bash
Number of voters: 5
Rank 1: Julia
Rank 2: Zack
Rank 3: Bob
...
   ```

-After all votes are entered, the program determines and prints the election winner.

## How It Works

-The Tideman method follows three main steps:

### Tally:

-Count voter preferences for each pair of candidates.

-Determine the winner for each head-to-head matchup.

### Sort:

-Rank candidate pairs in decreasing order of victory strength (based on the number of voters preferring one candidate over another).

### Lock:

-Construct the candidate graph by locking in victories, avoiding cycles.

-The winner is the source of the graph (i.e., the candidate with no arrows pointing at them).

## Example Run

   ```bash
$ ./tideman Julia Bob Zack
Number of voters: 5
Rank 1: Julia
Rank 2: Zack
Rank 3: Bob
...
Charlie
   ```

-This means Zack is declared the winner based on the ranked preferences.
