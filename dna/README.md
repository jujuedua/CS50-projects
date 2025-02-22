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
