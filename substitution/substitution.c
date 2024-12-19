#include <cs50.h>
#include <ctype.h>
#include <stdio.h>
#include <stdlib.h>
#include <string.h>

bool check_char(string key);

int main(int argc, string argv[])
{
    if (argc != 2)
    {
        printf("Usage: ./substitution key\n");
        return 1;
    }

    if (!check_char(argv[1]))
    {
        return 1;
    }

    int k = atoi(argv[1]);

    string plaintext = get_string("Plaintext: ");
    printf("ciphertext: ");

    int chipertext = 0;

    for (int i = 0; i < strlen(plaintext); i++)
    {
        if (isupper(plaintext[i]))
        {
            printf("%c", toupper(argv[1][plaintext[i] - 65]));
        }

        else if (islower(plaintext[i]))
        {
            printf("%c", tolower(argv[1][plaintext[i] - 97]));
        }
        else
        {
            printf("%c", plaintext[i]);
        }
    }
    printf("\n");
}

bool check_char(string key)
{

    if (strlen(key) != 26)
    {
        printf("Key must contain 26 unique characters.\n");
        return false;
    }

    for (int i = 0; i < strlen(key); i++)
    {
        key[i] = toupper(key[i]);
    }

    for (int i = 0; i < strlen(key); i++)
    {

        if (!isalpha(key[i]))
        {
            printf("Key must only contain alphabetic characters.\n");
            return false;
        }
        for (int j = i + 1; j < strlen(key); j++)
        {
            if (key[i] == key[j])
            {
                printf("Key must not contain repeated characters.\n");
                return false;
            }
        }
    }
    return true;
}
