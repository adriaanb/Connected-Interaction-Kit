---
layout: default
title: "Part 1 - Scan for Available Networks"
parent: "Connecting To The Internet"
grand_parent: "Tutorials"
---

# Part 1 - Scan for Available Networks

The BitsyExpander board not only provides solderless connectors but also adds WiFi capabilities to your ItsyBitsy microcontroller. To use it, the WiFi radio must be set up in code - like any other component. It uses pins **`D9`**, **`D11`**, and **`D12`**, as well as the **`SPI`** pins (**`SCK`**, **`MISO`**, and **`MOSI`**).

The code below shows you how to configure the WiFi module. It scans for available networks and prints your microcontroller's MAC address to the Serial Monitor.

1. Connect your ItsyBitsy and Expander to your computer.

2. Copy the example code below and use `Mu Editor` to save it to your `code.py` file. Remember to back up your old code elsewhere.

3. Open the `Serial Monitor` to verify that your microcontroller can find a network to connect to in the next step.

4. Store or write down your WiFi module's [MAC address](../../glossary/glossary); it will become important later.

   ```python
   import board
   import busio
   import time
   import digitalio
   from adafruit_esp32spi import adafruit_esp32spi
   
   # Define the pins used by the BitsyExpander's ESP32 WiFi module
   esp32_cs = digitalio.DigitalInOut(board.D9)
   esp32_ready = digitalio.DigitalInOut(board.D11)
   esp32_reset = digitalio.DigitalInOut(board.D12)
   spi = busio.SPI(board.SCK, board.MOSI, board.MISO)
   
   # Initialize the ESP32 WiFi module
   esp = adafruit_esp32spi.ESP_SPIcontrol(spi, esp32_cs, esp32_ready, esp32_reset)
         
   if esp.status == adafruit_esp32spi.WL_IDLE_STATUS:
       print("\nESP32 WiFi Module found.")
       print("Firmware version:", str(esp.firmware_version, "utf-8"))
       print("*" * 40)
       
   while True:
       print("\nScanning for available networks...")
       # Add SSID of each Access Point (ap) in range to network_list
       network_list = [str(ap["ssid"], "utf-8") for ap in esp.scan_networks()] 
       print(network_list)
       
       print("\nMAC Address:")
       # Format the MAC address (reverse byte order and format hex values)    
       mac_addr = ":".join("{:02X}".format(byte) for byte in reversed(esp.MAC_address))
       print(mac_addr)
       
       print("\n" + "*" * 40)
       time.sleep(8)
   ```

{:.note}
Starting with this tutorial, code examples will include so-called [comments](../../glossary/glossary). Comments exist to document the code and are ignored by the program. They are meant to help you and others understand the code better. In CircuitPython, comments begin with the **`#`** character.

[Next Step](part-2){: .btn .btn-blue }

