# **filter-more**

Filter-More is an advanced command-line image processing program that applies various filters to BMP images. Users can apply grayscale, reflection, blur, and edge detection effects to images by specifying the desired filter flag.

## Usage

To use Filter-More, compile the program and execute it with the appropriate arguments:

  ```bash
$ make filter
$ ./filter [flag] infile outfile
  ```
-[flag] determines which filter to apply:

-g : Convert the image to grayscale

-r : Reflect the image horizontally

-b : Blur the image

-e : Detect edges in the image

-infile is the input image file (BMP format).

-outfile is the output image file (BMP format).

-If the program is run without the correct arguments, it will output:

  ```bash
Usage: ./filter [flag] infile outfile
  ```
## Example Usage

  ```bash
$ ./filter -e ./images/yard.bmp ./images/yard-edges.bmp
  ```
![yard](https://github.com/user-attachments/assets/e5655f7d-f044-42eb-82d2-e270773b65e0)
![yard-edges](https://github.com/user-attachments/assets/f2e732ff-d006-4357-9042-6f79acd4d4eb)
