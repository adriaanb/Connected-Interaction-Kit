import board
import busio
from digitalio import DigitalInOut

from adafruit_esp32spi import adafruit_esp32spi

print()
print()
print("*********************************************")
print("BitsyExpander MAC Address identification tool")
print("*********************************************")


esp32_cs = DigitalInOut(board.D9)
esp32_busy = DigitalInOut(board.D11)
esp32_reset = DigitalInOut(board.D12)

spi = busio.SPI(board.SCK, board.MOSI, board.MISO)
esp = adafruit_esp32spi.ESP_SPIcontrol(spi, esp32_cs, esp32_busy, esp32_reset)

if esp.status == adafruit_esp32spi.WL_IDLE_STATUS:
    print()
    print("ESP32 found and in idle mode!")
    print()
print("##########################")

print("##########################")
print("##                      ##")
print("##  MAC address found:  ##")
print("##                      ##")
addr = ""

# Format the MAC address (invert and parse hex values)
for i in range(len(esp.MAC_address)-1, -1, -1):
    # Check if an address block is empty to add a leading zero
    if (len((hex(esp.MAC_address[i]))[2:4]) < 2):
        addr += "0" 
    addr += (hex(esp.MAC_address[i]))[2:4].upper()
    addr += ":"

print("##  " + addr[0:17] + "   ##")

print("##                      ##")
print("##########################")
print("##########################")
