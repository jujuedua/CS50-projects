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
./sort1 numbers.txt
./sort2 numbers.txt
./sort3 numbers.txt
   ```

-Check the number of comparisons and swaps performed.

-Time the execution for different input sizes:

   ```bash
time ./sort1 large_numbers.txt
   ```

### Look for patterns:

-Selection sort: Makes a fixed number of swaps (equal to the number of elements).

-Bubble sort: Continues swapping until no swaps are needed.

-Merge sort: Uses recursive division and merging.
