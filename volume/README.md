# **volume**

This program adjusts the volume of a given WAV audio file by scaling each audio sample by a specified factor. This program demonstrates basic audio processing by modifying the amplitude of the waveform.

## Compilation

-To compile the program, run:

   ```bash
$ make volume
   ```

## Usage

-To modify the volume of an audio file, use:

   ```bash
$ ./volume input.wav output.wav factor
   ```

### Where:

-input.wav is the original audio file.

-output.wav is the modified audio file.

-factor is a numerical value to scale the volume:

->1.0 increases the volume.

-<1.0 decreases the volume.

-1.0 keeps the volume unchanged.

## Example Commands

-Increase volume:

   ```bash
$ ./volume input.wav output.wav 2.0
   ```

-Decrease volume:

   ```bash
$ ./volume input.wav output.wav 0.5
   ```

-Incorrect usage:

   ```bash
$ ./volume
Usage: ./volume input.wav output.wav factor
   ```

-Invalid file format:

   ```bash
$ ./volume input.mp3 output.wav 2.0
Could not open file.
   ```
