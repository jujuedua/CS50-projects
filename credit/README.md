# **credit**

This program validates credit card numbers using the Luhn algorithm and determines the card's type based on its number.

## Usage

  ```bash
./credit
  ```

-The program prompts the user to enter a credit card number.

-It validates the number and determines the card type (e.g., VISA, MASTERCARD, AMEX) or marks it as INVALID.

## Example Usage

```bash
$ ./credit
Number: 4003-6000-0000-0014
Number: foo
Number: 4003600000000014
VISA
  ```

-If an invalid argument is provided (e.g., non-numeric or special characters), the program will reapt itself until its valid or invalid.

```bash
$ ./credit
Number: 6176292929
INVALID
  ```

 -Here are a [few card numbers](https://developer.paypal.com/api/nvp-soap/payflow/integration-guide/test-transactions/#standard-test-cards) that PayPal recommends for testing.
