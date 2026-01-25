---
layout: default
title: "Thermistor"
grand_parent: "Components"
parent: "Custom Components"
nav_order: 4
---

<img src="assets/custom-temperature-sensor-centered.png" alt="Custom Temperature Sensor" width="250"/>

# Thermistor
<a href="../../glossary/glossary"><img src="../../glossary/assets/input.png" alt="Input" width="72"/></a> <a href="../../glossary/glossary"><img src="../../glossary/assets/analog.png" alt="Analog" width="72"/></a>

Changes its electrical resistance with temperature. Can be used to estimate the current temperature and detect changes.

Learn how to make your own thermistor [here](../../tutorials/assembling-custom-components/thermistor).

---

## Basic rotation potentiometer example
Download the necessary `adafruit_thermistor` library with the [7.x bundle](https://circuitpython.org/libraries)
```python
# --- Imports
# --- Imports
import time
import board

# Download the library with the 7.x bundle at https://circuitpython.org/libraries
import adafruit_thermistor 

# --- Variables
# Initialize analog input connected to temperature sensor
resistor = 10000
resistance = 10000
nominal_temp = 25
b_coefficient = 3950

# Connect the temperature sensor to pin A2 
temp_sensor = board.A2

# --- Functions

# Library function to read the temperature sensor accurately
thermistor = adafruit_thermistor.Thermistor(
    temp_sensor, resistor, resistance, nominal_temp, b_coefficient
)

# --- Setup

# --- Main loop
while True:
    celsius = thermistor.temperature
    fahrenheit = (celsius * 9 / 5) + 32
    print("== Temperature ==\n{} *C\n{} *F\n".format(celsius, fahrenheit))
    time.sleep(0.5)
```

