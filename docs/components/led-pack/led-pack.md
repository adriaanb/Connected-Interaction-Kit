---
layout: default
title: "LED Pack"
grand_parent: "Components"
parent: "Solderless Components"
nav_order: 7
has_children: false
---

<img src="assets/Grove-LED-pack.png" alt="LED Pack" width="250"/>

# LED Pack
<a href="../../glossary/glossary"><img src="../../glossary/assets/output.png" alt="Output" width="72"/></a> <a href="../../glossary/glossary"><img src="../../glossary/assets/pwm.png" alt="PWM" width="72"/></a>

A monochrome light source that is simple to use.

{:.highlight-yellow}
Should your Connected Interaction Kit not include this component, you can use these examples with the LED built into your microcontroller, connected internally to pin **`D13`**.

More information on this component is available [here](https://www.seeedstudio.com/Grove-LED-Pack-p-4364.html).

---



## Blink!

Blinking an LED is often the first programming exercise learners encounter when working with microcontrollers. The example code below performs all steps necessary to configure and then keep cycling an LED on and off once per second. The code works with the inbuilt LED on Pin **`D13`**, but you can also specify any other Digital pin in the code to use with your own LED connected to it.

```python
# --- Imports
import digitalio
import time
import board

# --- Variables
led = digitalio.DigitalInOut(board.D13)
led.direction = digitalio.Direction.OUTPUT

# --- Functions

# --- Setup

# --- Main loop
while True:
    led.value = True
    time.sleep(0.5)
    led.value = False
    time.sleep(0.5)

```

{:.important}
This tutorial only works for simple, single-color LEDs like the LED Pack or your microcontroller's internal LED. If you want to use a [Chainable LED](../chainable-led/chainable-led), follow the tutorial on the linked page instead.