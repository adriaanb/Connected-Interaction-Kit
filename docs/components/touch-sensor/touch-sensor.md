---
layout: default
title: "Touch Sensor"
grand_parent: "Components"
parent: "Solderless Components"
nav_order: 1
has_children: false
---

<img src="assets/Grove-Touch-Sensor.png" alt="Touch Sensor" width="250"/>

# Touch Sensor
<a href="../../glossary/glossary"><img src="../../glossary/assets/input.png" alt="Input" width="72"/></a> <a href="../../glossary/glossary"><img src="../../glossary/assets/digital.png" alt="Digital" width="72"/></a>

A capacitive switch that remains active while touched. 

More information on this component is available [here](https://wiki.seeedstudio.com/Grove-Touch_Sensor/).

---

## Basic Usage

The code example below reads the state of a touch sensor connected to pin **`D7`** on each run through the main loop. While the sensor remains touched, it turns on the built-in LED of your microcontroller, which is internally connected to pin **`D13`**. When released, the LED is turned off again.

```python
# --- Imports
import digitalio
import time
import board

# --- Variables
touch_sensor = digitalio.DigitalInOut(board.D7)
touch_sensor.direction = digitalio.Direction.INPUT

led = digitalio.DigitalInOut(board.D13)
led.direction = digitalio.Direction.OUTPUT

# --- Functions

# --- Setup
led_state = False

# --- Main loop
while True:
    if touch_sensor.value == False:
        led.value = False
    else:
        led.value = True
```



## Toggling Between States

In the previous example, the LED's state directly depends on the state of the touch sensor. While the sensor is touched, the LED is on. Once it is released, the LED turns off. In this code example, we modify the behavior to toggle between the on and off states of the LED each time the sensor is touched. 

To achieve this, we use a variable called `last_state` to track the previous state of the touch sensor. In the main loop, we check if the current state of the sensor is different from its previous state:

```python
if touch_sensor.value != last_touch_state:
```

When the state of the sensor changes, we update the `last_state` variable. We then check if the state changed from not touched to touched, in which case we toggle the LED's state. That way, we ensure the LED's state changes only once per touch-and-release cycle. The code also prints the toggled LED states to the serial monitor. Therefore, we also introduce a short delay to safeguard against overwhelming the serial monitor with too many messages.

```python
import digitalio
import time
import board

# --- Variables
touch_sensor = digitalio.DigitalInOut(board.D7)
touch_sensor.direction = digitalio.Direction.INPUT

led = digitalio.DigitalInOut(board.D13)
led.direction = digitalio.Direction.OUTPUT

# --- Functions

# --- Setup
last_touch_state = touch_sensor.value
led_state = False

# --- Main loop
while True:
    if touch_sensor.value != last_touch_state:
        last_touch_state = touch_sensor.value
        if touch_sensor.value:
            led_state = not led_state
            print("Enable LED" if led_state else "Disable LED")
            led.value = led_state
    
    time.sleep(0.02)
```

