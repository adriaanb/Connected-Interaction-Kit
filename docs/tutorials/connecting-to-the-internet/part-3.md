---
layout: default
title: "Part 3 - Connect to a WiFi Network"
parent: "Connecting To The Internet"
grand_parent: "Tutorials"
---

# Part 3 - Connect to a WiFi Network

To connect your ItsyBitsy to a network, you must provide a network name (SSID) and password. However, directly using sensitive data like WiFi passwords in your code is risky. Therefore, creating a separate file to hold your personal keys and passwords outside your `code.py` file is a good idea. This way, you can share your code without revealing sensitive data to others.

1. Begin by clicking the **`+`** icon labeled **New** in the top toolbar of Mu Editor.

2. Copy and paste the following code to the new file, replacing `network-name` with the name of your WiFi network and `network-passwd` with your network's password (or the iPSK generated during [part two](part-2) when connecting to TUD-facility).

   ```python
   secrets = {
       "ssid": "network-name",
       "password": "network-passwd"
   }
   ```

3. Click the **Save** button in the toolbar and save the file on your `CIRCUITPY` drive using the name `secrets.py`.

4. Enter your `code.py` file and replace the code you wrote in [part one](part-1) with the code below, then hit **Save**.

   ```python
   import board
   import busio
   import time
   import digitalio
   from adafruit_esp32spi import adafruit_esp32spi
      
   # Get WiFi details from your secrets.py file
   from secrets import secrets
      
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
          
   print("\nScanning for available networks...\n")
   network_list = [str(ap["ssid"], "utf-8") for ap in esp.scan_networks()]    
   if secrets["ssid"] not in network_list:
       print(secrets["ssid"], "not found.\nAvailable networks:", network_list) 
       raise SystemExit(0)
         
   print(secrets["ssid"], "found. Connecting...")
   while not esp.is_connected:
       try:
           esp.connect_AP(secrets["ssid"], secrets["password"])
       except (RuntimeError, ConnectionError) as e:
           print("\nUnable to establish connection. Are you using a valid password?")
           print("Error message:", e, "\nRetrying...")
           continue
         
   print("Connected! IP address:", esp.pretty_ip(esp.ip_address))
          
   while True:
       print("\nPinging google.com...")
       response = esp.ping("google.com")
       print("Ping successful. Response time:", response, "ms")
       time.sleep(5)
   ```

5. Open Mu's `Serial Monitor` to verify that the microcontroller successfully connects to the chosen network and can get a response from `google.com`.

6. Note the differences from the code you encountered in [part one](part-1) of this tutorial:

      - An `import` statement for your newly created `secrets.py` file has been added. This gives the code access to the network name (SSID) and password.
      - The network scan has been moved out of the `while True:` loop and is performed once before entering the loop.
      - The code verifies the network you configured is available and waits for the successful establishment of a connection.
      - The content of the `while True:` loop has been replaced: It now pings google.com and reports the response time. This confirms internet connectivity for your microcontroller.

[Next Step](part-4){: .btn .btn-blue }
