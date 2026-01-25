# Importing some libraries for time, controlling the board and digital input/outputs
import board # Learn more at https://learn.adafruit.com/circuitpython-essentials/circuitpython-pins-and-modules
import digitalio # Learn more at https://learn.adafruit.com/circuitpython-essentials/circuitpython-digital-in-out
import time

# Define a new variable and set D13 as an Output
LED = digitalio.DigitalInOut(board.D13)
LED.direction = digitalio.Direction.OUTPUT

# Usually code runs only once top to bottom until it is complete
# The function of "while True:" allows the code to run in a continous loop
# Everything indented with a tab is part of the function loop
while True:
	time.sleep(1.0) # Wait 1 second
	LED.value = True # Turn the LED on
	print("LED is: on") # Add a status comment in the serial monitor
	
	time.sleep(1.0) # Wait 1 second
	LED.value = False # Turn the LED off
	print("LED is off") # Add a status comment in the serial monitor
	#The loop will start again after this line