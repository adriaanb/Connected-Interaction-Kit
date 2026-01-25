---
layout: default
title: Components
nav_order: 2
has_children: true
has_toc: false
---

# Components

 The core of the Connected Interaction Kit is an ItsyBitsy microcontroller board. With the help of a bit of code, this microcontroller allows you to interact with and perceive the outside world using various electronic sensors and actuators.

In addition, the kit contains the BitsyExpander, a board that allows you to easily build prototypes without the need for soldering. Later on, it can also enable you to make use of Wifi or Bluetooth, as well as to power your project from a battery.

## Core Components

|                       Microcontroller                        |                        Bitsy Expander                        |
| :----------------------------------------------------------: | :----------------------------------------------------------: |
|                ItsyBitsy RP2040 or M4 Express                |           Solderless Connector Board for ItsyBitsy           |
| <img src="itsybitsy-microcontroller/assets/ItsyBitsy-RP2040.png" alt="ItsyBitsy RP2040" width="400"/> | <img src="bitsy-expander/assets/Bitsy-Expander-RP2040.png" alt="BitsyExpander" width="400"/> |
| [Learn More](itsybitsy-microcontroller/itsybitsy){: .btn .btn-blue } | [Learn More](bitsy-expander/bitsy-expander){: .btn .btn-blue } |



## Sensors & Actuators

Beyond that, the kit offers a selection of sensors and actuators. There are solderless components you can use right away, as well as custom components that require you to assemble them first. 

*Some components listed below may not be part of your kit edition but are available separately.*

### Solderless Grove Components

|                         Touch Sensor                         |                       Vibration Motor                        |                         Piezo Buzzer                         |                         Sound Sensor                         |                         Servo Motor                          |
| :----------------------------------------------------------: | :----------------------------------------------------------: | :----------------------------------------------------------: | :----------------------------------------------------------: | :----------------------------------------------------------: |
|                       Capacitive Touch                       |                       Haptics & Touch                        |                            Sound                             |                            Sound                             |                            Motion                            |
| ![Touch Sensor](touch-sensor/assets/Grove-Touch-Sensor.png)  | ![Vibration Motor](vibration-motor/assets/Grove-Vibration-Motor.png) | ![Piezo Buzzer](piezo-buzzer/assets/Grove-Piezo-Buzzer.png)  | ![Sound Sensor](sound-sensor/assets/Grove-Sound-Sensor.png)  |      ![Servo Motor](servo-motor/assets/Grove-Servo.png)      |
| <a href="../glossary/glossary"><img src="../glossary/assets/input.png" alt="Input" width="57"/></a> <a href="../glossary/glossary"><img src="../glossary/assets/digital.png" alt="Digital" width="57"/></a> | <a href="../glossary/glossary"><img src="../glossary/assets/output.png" alt="Output" width="57"/></a> <a href="../glossary/glossary"><img src="../glossary/assets/pwm.png" alt="PWM" width="57"/></a> | <a href="../glossary/glossary"><img src="../glossary/assets/output.png" alt="Output" width="57"/></a> <a href="../glossary/glossary"><img src="../glossary/assets/pwm.png" alt="PWM" width="57"/></a> | <a href="../glossary/glossary"><img src="../glossary/assets/input.png" alt="Input" width="57"/></a> <a href="../glossary/glossary"><img src="../glossary/assets/analog.png" alt="Analog" width="57"/></a> | <a href="../glossary/glossary"><img src="../glossary/assets/output.png" alt="Output" width="57"/></a> <a href="../glossary/glossary"><img src="../glossary/assets/pwm.png" alt="PWM" width="57"/></a> |
|  [Learn More](touch-sensor/touch-sensor){: .btn .btn-blue }  | [Learn More](vibration-motor/vibration-motor){: .btn .btn-blue } |  [Learn More](piezo-buzzer/piezo-buzzer){: .btn .btn-blue }  |  [Learn More](sound-sensor/sound-sensor){: .btn .btn-blue }  |   [Learn More](servo-motor/servo-motor){: .btn .btn-blue }   |



### Solderless Grove Components

<table>
<thead>
  <tr>
    <th align="center" colspan="2">Time of Flight Sensor<br></th>
    <th align="center" colspan="2">Chainable LED</th>
    <th align="center">LED Pack</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td align="center" colspan="2">Distance</td>
    <td align="center">RGB/W Light</td>
    <td align="center">RGB Light</td>
    <td align="center">Monochrome LED</td>
  </tr>
  <tr>
    <td align="center"><img src="time-of-flight-distance-sensor/assets/ToF_v1_VL53L0X.png" alt="Time of Flight Sensor Version 1"/></td>
    <td align="center"><img src="time-of-flight-distance-sensor/assets/ToF_v2_VL53L0X.png" alt="Time of Flight Sensor Version 2"/></td>
    <td align="center"><img src="chainable-led/assets/ChaiNEO-RGBW.png" alt="ChaiNEO RGB/W LED"/></td>
    <td align="center"><img src="chainable-led/assets/Grove-Chainable-LED-2.0.png" alt="Grove Chainable LED"/></td>
    <td align="center"><img src="led-pack/assets/Grove-LED-pack.png" alt="LED Pack"/></td>
  </tr>
  <tr>
    <td align="center" colspan="2"><a href="../glossary/glossary"><img src="../glossary/assets/input.png" alt="Input" width="57"/></a> <a href="../glossary/glossary"><img src="../glossary/assets/iic.png" alt="I2C" width="57"/></a></td>
    <td align="center" colspan="2"><a href="../glossary/glossary"><img src="../glossary/assets/output.png" alt="Output" width="57"/></a> <a href="../glossary/glossary"><img src="../glossary/assets/digital.png" alt="Digital" width="57"/></a></td>
    <td align="center"><a href="../glossary/glossary"><img src="../glossary/assets/output.png" alt="Output" width="57"/></a> <a href="../glossary/glossary"><img src="../glossary/assets/digital.png" alt="Digital" width="57"/></a></td>
  </tr>
  <tr>
    <td align="center" colspan="2"><a href="time-of-flight-distance-sensor/time-of-flight-distance-sensor" class="btn btn-blue">Learn More</a></td>
    <td align="center"><a href="chainable-led/chainable-led-chaineo" class="btn btn-blue">Learn More</a></td>
    <td align="center"><a href="chainable-led/chainable-led-p9813" class="btn btn-blue">Learn More</a></td>
    <td align="center"><a href="led-pack/led-pack" class="btn btn-blue">Learn More</a></td>
  </tr>
</tbody>
</table>





### Custom Components

|                        Potentiometer                         |                        Tactile Switch                        |                         Tilt Switch                          |                          Thermistor                          |                        Photoresistor                         |
| :----------------------------------------------------------: | :----------------------------------------------------------: | :----------------------------------------------------------: | :----------------------------------------------------------: | :----------------------------------------------------------: |
|                        Position/Angle                        |                             Push                             |                             Tilt                             |                         Temperature                          |                          Brightness                          |
| ![Custom Potentiometer](rotary-potentiometer/assets/custom-rotation-pot-centered.png) | ![Tactile Switch](tactile-switch/assets/custom-tactile-switch-centered.png) | ![Tilt Switch](tilt-switch/assets/custom-tilt-switch-centered.png) | ![Temperature Sensor](thermistor/assets/custom-temperature-sensor-centered.png) | ![Photoresistor](photoresistor/assets/custom-photo-resistor-centered.png) |
| <a href="../glossary/glossary"><img src="../glossary/assets/input.png" alt="Input" width="57"/></a> <a href="../glossary/glossary"><img src="../glossary/assets/analog.png" alt="Analog" width="57"/></a> | <a href="../glossary/glossary"><img src="../glossary/assets/input.png" alt="Input" width="57"/></a> <a href="../glossary/glossary"><img src="../glossary/assets/digital.png" alt="Digital" width="57"/></a> | <a href="../glossary/glossary"><img src="../glossary/assets/input.png" alt="Input" width="57"/></a> <a href="../glossary/glossary"><img src="../glossary/assets/digital.png" alt="Digital" width="57"/></a> | <a href="../glossary/glossary"><img src="../glossary/assets/input.png" alt="Input" width="57"/></a> <a href="../glossary/glossary"><img src="../glossary/assets/analog.png" alt="Analog" width="57"/></a> | <a href="../glossary/glossary"><img src="../glossary/assets/input.png" alt="Input" width="57"/></a> <a href="../glossary/glossary"><img src="../glossary/assets/analog.png" alt="Analog" width="57"/></a> |
| [Learn More](rotary-potentiometer/rotary-potentiometer){: .btn .btn-blue } | [Learn More](tactile-switch/tactile-switch){: .btn .btn-blue } |   [Learn More](tilt-switch/tilt-switch){: .btn .btn-blue }   |    [Learn More](thermistor/thermistor){: .btn .btn-blue }    | [Learn More](photoresistor/photoresistor){: .btn .btn-blue } |

