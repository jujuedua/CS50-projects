# **inheritance**

This project simulates genetic inheritance across multiple generations using a simple program that models blood type inheritance.

## Running the Application

-Execute the program:

   ```bash
./inheritance
   ```

-The program simulates inheritance of blood types across multiple generations and outputs the result in a hierarchical format.

## Example Output

   ```bash
$ ./inheritance
Child (Generation 0): blood type OB
    Parent (Generation 1): blood type OA
        Grandparent (Generation 2): blood type OA
        Grandparent (Generation 2): blood type AO
    Parent (Generation 1): blood type OB
        Grandparent (Generation 2): blood type AO
        Grandparent (Generation 2): blood type BB

$ ./inheritance
Child (Generation 0): blood type AO
    Parent (Generation 1): blood type AA
        Grandparent (Generation 2): blood type AA
        Grandparent (Generation 2): blood type AA
    Parent (Generation 1): blood type AO
        Grandparent (Generation 2): blood type AO
        Grandparent (Generation 2): blood type OO
   ```
