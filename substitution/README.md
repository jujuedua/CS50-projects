# **substitution**

This program encrypts plaintext using a substitution cipher. A substitution cipher replaces each letter of the alphabet with a corresponding letter from a provided key.

## Usage

-To run the program, use:

   ```bash
$ ./substitution key
   ```

### Input Requirements

-The key must be exactly 26 characters long.

-The key must contain each letter of the alphabet exactly once.

-The key can be uppercase or lowercase, but it must represent a valid mapping of letters.

## Example Runs

### Invalid Key (Too Short)

   ```bash
$ ./substitution ABC
   ```

-Key must contain 26 characters.

### Invalid Key (Non-Alphabetic Characters)

   ```bash
$ ./substitution 1 2 3
Usage: ./substitution key
   ```

### Valid Key Example

   ```bash
$ ./substitution YTNSHKVEFXRBAUQZCLWDMIPGJO
plaintext:  Hello!
ciphertext: Ehbbq!
   ```
