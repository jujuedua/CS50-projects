# **filter-less**

Filter-Less is a command-line image processing program that applies various filters to BMP images. Users can apply grayscale, sepia, reflection, and blur effects to images by specifying the desired filter flag.

## Usage

To use Filter-Less, compile the program and execute it with the appropriate arguments:

  ```bash
$ make filter
$ ./filter [flag] infile outfile
  ```
-[flag] determines which filter to apply:

-g : Convert the image to grayscale

-s : Apply a sepia tone

-r : Reflect the image horizontally

-b : Blur the image

-infile is the input image file (BMP format).

-outfile is the output image file (BMP format).

-If the program is run without the correct arguments, it will output:

   ```bash
Usage: ./filter [flag] infile outfile
   ```

## Example Usage

  ```bash
$ ./filter -g ./images/courtyard.bmp ./images/courtyard-grayscale.bmp
  ```
![courtyard](https://github.com/user-attachments/assets/7f9abd52-3011-4568-a5ba-f247b3e136a3)
![courtyard-grayscale](https://github.com/user-attachments/assets/05f38768-e307-4a72-9253-598837180626)
