#include <cs50.h>
#include <stdio.h>

void print_row(int spaces, int bricks);

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
        print_row(h - 1 - i, i + 1);
    }
}

void print_row(int spaces, int bricks)

{
    for (int i = 0; i < spaces; i++)
    {
        printf(" ");
    }

    for (int i = 0; i < bricks; i++)
    {
        printf("#");
    }
    printf("\n");
}
