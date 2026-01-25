# MAC Address Identification Tool

*Written for the [BitsyExpander](https://github.com/id-studiolab/BitsyExpander) and the ItsyBitsy M4 Express for CircuitPython Version 7.x [HERE](https://learn.sparkfun.com/tutorials/how-to-solder-through-hole-soldering/).*

## Dependencies

For this code to work, you need to have the following libraries present in your microcontroller's **lib** folder:

* **adafruit_esp32spi**

If no folder with that name is present on your microcontroller, download the [CircuitPython Library Bundle](https://circuitpython.org/libraries) for CircuitPython Version 7.x and extract the **adafruit_esp32sp** folder. 

Copy the folder into the **lib** folder on your **CIRCUITPY** drive. The **CIRCUITPY** drive is your microcontroller's internal storage. If the **lib** folder does not yet exist, create it.

*Once connected to your computer by USB, your microcontroller's internal drive should show up as **CIRCUITPY**. If that is not the case, double-press the "Reset" button on your ItsyBitsy M4 Express and whait for the **ITSYM4BOOT** drive to show up. Download CircuitPython Version 7 from [HERE](https://circuitpython.org/board/itsybitsy_m4_express/) and copy the file onto the **ITSYM4BOOT** drive.*

## Usage

After ensuring the above-mentioned dependencies are met, download **code.py** and store it on your microcontroller's **CIRCUITPY** drive. Use [Mu Editor](https://codewith.mu/) to open the Serial Monitor and save the code as "code.py" on your microcontroller. This should print your BitsyExpander's MAC Address into the Serial Monitor.
