#include <cs50.h>
#include <stdio.h>

int calculate_checksum(long credit_card);
int multiply_sum(int last_digit);

int main(void)

{
    long n = get_long("Number: ");

    long length = 0;
    int single_digit = 0;
    int two_digit = 0;
    long i = n;
    int checksum = calculate_checksum(n);
    while (i > 0)
    {
        if (i < 10)
        {
            single_digit = i;
        }
        if (i > 10 && i < 100)
        {
            two_digit = i;
        }
        i /= 10;
        length++;
    }
    if (checksum % 10 != 0)
    {
        printf("INVALID\n");
        return 0;
    }
    if ((two_digit == 34 || two_digit == 37) && length == 15)
    {
        printf("AMEX\n");
        return 0;
    }
    else if ((two_digit == 51 || two_digit == 52 || two_digit == 53 || two_digit == 54 ||
              two_digit == 55) &&
             length == 16)
    {
        printf("MASTERCARD\n");
        return 0;
    }
    else if (single_digit == 4 && (length == 13 || length == 16))
    {
        printf("VISA\n");
        return 0;
    }
    else
        printf("INVALID\n");
    return 0;
}

int calculate_checksum(long credit_card)
{
    int sum = 0;
    bool alternate_digit = false;
    while (credit_card > 0)
    {
        if (alternate_digit == true)
        {
            int last_digit = credit_card % 10;
            int product = multiply_sum(last_digit);
            sum = sum + product;
        }
        else
        {
            int last_digit = credit_card % 10;
            sum = sum + last_digit;
        }
        alternate_digit = !alternate_digit;
        credit_card = credit_card / 10;
    }

    return sum;
}
int multiply_sum(int last_digit)
{
    int multiply = last_digit * 2;
    int sum = 0;
    while (multiply > 0)
    {
        int last_digit_multiply = multiply % 10;
        sum = sum + last_digit_multiply;
        multiply = multiply / 10;
    }
    return sum;
}
