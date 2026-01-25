---
layout: default
title: "Part 4 - Get Data from the Internet"
parent: "Connecting To The Internet"
grand_parent: "Tutorials"
---

# Part 4 - Get Data from the Internet

So far, this tutorial has taught you how to configure and connect your ItsyBitsy to a WiFi network with internet connectivity. Now, you will learn how to receive data (in this case, corny jokes) over the internet using an [API](../../glossary/glossary). The code example below uses a so-called `REST API`, a common way to exchange data over the internet.

{:.highlight-yellow}
Don't worry if you don't fully understand every step in this tutorial.  By following along and completing the code, you'll begin to recognize  how things like APIs work and how they are used. Even if things remain  unclear for now, what you do here will help you to tackle future  projects and gain a better understanding over time.

Before beginning, ensure your `code.py` file is open in **Mu Editor** and contains the code from [part three](part-3) of the tutorial alongside a valid `sectres.py` file. Only a few changes are needed to enable your code to request data from an online resource:

1. You must import two more modules to establish socket connections and make `HTTP requests`:
   ```python
   # Import modules for establishing socket connections and making HTTP requests
   import adafruit_esp32spi.adafruit_esp32spi_socket as socket
   import adafruit_requests as requests
   ```

2. Below the import statements, provide the address for the API you want request data from:
   ```python
   # URL for the API that will return a random joke
   joke_url = "https://sv443.net/jokeapi/v2/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit"
   ```

3. Configure the `requests` module to use your WiFi module's sockets by adding `requests.set_socket(socket, esp)` below the WiFi module initialization:
   ```python
   # Initialize the ESP32 WiFi module and configure requests to use its sockets
   esp = adafruit_esp32spi.ESP_SPIcontrol(spi, esp32_cs, esp32_ready, esp32_reset)
   requests.set_socket(socket, esp)
   ```

4. Replace the existing `while True:` loop with the following `while esp.is_connected:` loop. This loop will stop running should the WiFi connection drop. During each repetition, the code will open an HTTP connection and send a request to the URL specified in step 2. After receiving a response, the joke contained within is formatted and printed to the Serial Monitor before the HTTP connection is closed again.

   ```python
   while esp.is_connected:
       print("\nFetching random joke from https://sv443.net/jokeapi/v2/")
       r = requests.get(joke_url)
       joke = r.json()
       print("-" * 40)
            
       # Checking for different type of joke, either one-liner or setup and delivery joke
       if "joke" in joke:
           print(joke['joke'])
       else:
          print(joke['setup'])
          time.sleep(3)
          print(joke['delivery'])
      
       print("-" * 40)
       r.close()
       time.sleep(5)
   ```

5. Save your changes and open Mu Editor's Serial Monitor. If everything went well, your microcontroller will deliver a new, random joke every 5 seconds. Your finished code should look something like this:

   ```python
   import board
   import busio
   import time
   import digitalio
   from adafruit_esp32spi import adafruit_esp32spi
   
   # Import modules for establishing socket connections and making HTTP requests
   import adafruit_esp32spi.adafruit_esp32spi_socket as socket
   import adafruit_requests as requests
   
   # Get WiFi details from your secrets.py file
   from secrets import secrets
   
   # URL for the API that will return a random joke
   joke_url = "https://sv443.net/jokeapi/v2/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit"
   
   # Define the pins used by the BitsyExpander's ESP32 WiFi module:
   esp32_cs = digitalio.DigitalInOut(board.D9)
   esp32_ready = digitalio.DigitalInOut(board.D11)
   esp32_reset = digitalio.DigitalInOut(board.D12)
   spi = busio.SPI(board.SCK, board.MOSI, board.MISO)
   
   # Initialize the ESP32 WiFi module and configure requests to use its sockets
   esp = adafruit_esp32spi.ESP_SPIcontrol(spi, esp32_cs, esp32_ready, esp32_reset)
   requests.set_socket(socket, esp)
   
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
   
   while esp.is_connected:
       print("\nFetching random joke from https://sv443.net/jokeapi/v2/")
       r = requests.get(joke_url)
       joke = r.json()
       print("-" * 40)
   
       # Checking for different type of joke, either one-liner or setup and delivery joke
       if "joke" in joke:
           print(joke['joke'])
       else:
          print(joke['setup'])
          time.sleep(3)
          print(joke['delivery'])
   
       print("-" * 40)
       r.close()
       time.sleep(5)
   ```

[Next Tutorial](../assembling-custom-components/){: .btn .btn-blue }
