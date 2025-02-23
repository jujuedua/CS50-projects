# **recover**

This project  is a program designed to restore deleted JPEG images from a raw memory card image. When files are deleted, they are not immediately erased from the memory; rather, the system marks their space as available for new data. This program scans the raw memory card file and extracts recoverable JPEG images.

## Running the Program

-To recover deleted photos from a memory card image:

   ```bash
./recover card.raw
   ```

-This will scan card.raw and recover JPEG images, saving them as separate files in the same directory.
