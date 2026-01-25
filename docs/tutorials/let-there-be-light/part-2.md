---
layout: default
title: "Part 2 - Change the way your ItsyBitsy behaves"
parent: "Let There Be Light!"
grand_parent: "Tutorials"
---

# Part 2 - Change the way your ItsyBitsy behaves

The pre-loaded code should look something like this:

```python
import board
import digitalio
import time 

led = digitalio.DigitalInOut(board.D13)
led.direction = digitalio.Direction.OUTPUT

while True:
    time.sleep(1.0)
    led.value = True
    print("LED is on")
    
    time.sleep(1.0)
    led.value = False
    print("LED is off")
```

For now, let's ignore the first half of the code and go directly to the passage that begins with `while True`:

The `while` statement creates a `loop`. While its condition is met, the code contained within it will keep looping. The lines of code that follow are indented, indicating that they are inside the loop. Given that the condition to meet is set to `True` (which will never be False), the code will loop forever.

Try altering the code's behavior by exploring the following changes:

1. The code in the loop makes an LED built into your ItsyBitsy blink. Can you make out how the blinking behavior is created?
2. Experiment with the blinking frequency of the LED. Change the values defined in `time.sleep(1.0)`, then press the `Save` button in Mu Editor's toolbar to store the changes to your code and see their effect.
3. Click the `Serial` button in Mu's toolbar to open the `Serial Monitor`. This vital tool lets you see messages printed by your program. Can you figure out how to change the content of the messages appearing in the serial monitor? Remember to save your changes to see their effect.

[Next Tutorial](../adding-inputs-and-outputs/){: .btn .btn-blue }
