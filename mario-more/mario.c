#include <cs50.h>
#include <stdio.h>

void print_row(int spaces, int leftbricks, int gap, int rightbricks);

int main(void)

{
    int h;
    do
    {
        h = get_int("Height: ");
    }
    while (h < 1 || h > 8);

    for (int i = 0; i < h; i++)

    {
        print_row(h - 1 - i, i + 1, 2, i + 1);
    }
}

void print_row(int spaces, int leftbricks, int gap, int rightbricks)

{
    for (int i = 0; i < spaces; i++)
    {
        printf(" ");
    }

    for (int i = 0; i < leftbricks; i++)

        printf("#");

    {
        printf("  ");
    }

    for (int i = 0; i < rightbricks; i++)
    {
        printf("#");
    }

    printf("\n");
}
