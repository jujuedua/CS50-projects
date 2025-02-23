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
