---

layout: default
title: Glossary
nav_order: 3
has_children: true
has_toc: false

---

# Glossary

 ## Signal Terms

|              Term              | Description                                                  |
| :----------------------------: | :----------------------------------------------------------- |
|   ![Input](assets/input.png)   | An **input** is something a micro-controller can detect, such as the state of a switch, the rotation of a dial, or a microphone’s signal. |
|  ![Output](assets/output.png)  | An **output** is something that can be controlled by a microcontroller, such as a light, speaker, or motor. |
| ![Digital](assets/digital.png) | A **digital** signal is created by anything that assumes discrete states, such as on/off, true/false, or 1/0. |
|  ![Analog](assets/analog.png)  | An **analog** signal is created by anything that can assume any state on a continuous spectrum, such as temperature or pressure. |
|     ![PWM](assets/pwm.png)     | A **pulse-width modulated** signal is an analog-like signal created by switching a digital signal on and off very fast. |
|     ![I²C](assets/iic.png)     | The **I²C** protocol is used to interface advanced components using two digital signals. |
| ![Two Wire](assets/2wire.png)  | Components labeled with the **2-Wire** tag need two pins to function. Typically, that includes one pin used for transmitting data, while the other pin carries a clock signal that acts as a metronome to synchronize with the data stream's speed. The **I²C** protocol is a widely used standard that follows this principle. |


## Programming Terms
|          Term           | Description                                                  |
| :---------------------: | :----------------------------------------------------------- |
|       `Variable`        | A **variable** is like a labelled box where we store data. This could be a number, a text, or even more complex data. We can change the contents of this box anytime in our program. |
|       `Function`        | A **function** is like a mini-program within your program, built to perform a specific task. It can take inputs, process them, and return an output. They are reusable, modular components that can simplify writing and reading code, by breaking it down into smaller, well-structured segments. |
|         `Loop`          | A **loop** in programming is like a conveyor belt. It will keep repeating the same set of instructions over and over for a predetermined number of times or until a certain condition is met. |
| `Conditional Statement` | A **Conditional Statement** acts like a decision-making crossroad in a program. It checks a condition (for example, if a specific variable is set to False) and tells the program how to proceed based on that. |
|        `Comment`        | A **comment** is a way to add notes or explanations to the code. They are meant to be read by programmers/humans and are completely ignored by the computer. They start with a `#` character in CircuitPython. |
|      `Declaration`      | A **declaration** in programming informs the system about a variable, function, or other entity before its actual use in the code. |
|         `Class`         | A **class** is a blueprint from which objects are created, similar to the blueprint of a car or architectural plans for a house. A class defines specific properties objects created from it can have, such as "color" or "size", as well as behaviors, like "openDoor" or "closeWindow". This allows programmers to create multiple objects, like different cars, that share common behaviors but have varied properties. |
|        `Object`         | An **object** is an entity created from a class, much like a car built using a specific blueprint. It holds unique attributes and performs actions, termed methods, defined by its class (see above). This allows for the creation of varied objects, each with unique data, but all adhering to behaviors and characteristics defined by their class. |
|       `Instance`        | An **instance** is like a single product produced from a factory assembly line. The factory is the class and the product is the object. |
|        `Method`         | A **method** is a function attached to an object. It defines the actions that the object can perform, much like the abilities of a superhero. |
|   `Library`, `Module`   | **Libraries** and **modules** contain code written by other people to fulfill specific tasks. Core modules, such as `board`, `digitalio`, and `time` provide functionality essential to working with your board. Therefore, they are already included in CircuitPython. In some cases, you may need to download additional libraries to add functionality, such as drivers for specific sensors, to your code. You can learn more about that subject by reading the chapter on CircuitPython Libraries in [Adafruit's guide](learn.adafruit.com/welcome-to-circuitpython/circuitpython-libraries). |
|          `API`          | Application Programming Interfaces (**API**s) define how different programs communicate, establishing fixed rules for their interactions. Think of an API as a restaurant menu: it details how one program can request specific actions or data from another, enabling different programs to interact and share capabilities or information. |


## Electronics Terms

|     Term      | Description                                                  |
| :-----------: | :----------------------------------------------------------- |
| **`Series`**  | In a **series** circuit, each component is connected end-to-end with the other components, creating a single path for current to flow. This means that the current flowing through each component in the circuit is the same, but the voltage across each component differs. |
|  `Parallel`   | In a **parallel** circuit, components are connected side-by-side, creating multiple paths for current to flow. This means that the current flowing through each component in the circuit can differ, but the voltage across each component is the same. |
|   `Voltage`   | **Voltage**, measured in Volts (**V**), is the electric potential difference between two points in a circuit. It can be thought of as the force that pushes electric charge through a circuit, driving the flow of current. Like water pressure in a pipe, voltage pushes the current through the circuit. |
|   `Current`   | **Current**, measured in Amperes (**A**), is the flow of electric charge in a circuit. If you think of a circuit as a hose, the current would be the flow of water through the hose. It's determined by the voltage and the resistance in the circuit according to **Ohm’s Law:** **I = V / R**, where **I** is current, **V** is voltage, and **R** is resistance. |
| `Resistance`  | **Resistance**, measured in Ohms (**Ω**), is the opposition to the flow of electric current in a circuit. It’s like friction for electricity, making it harder for current to flow. Different materials and objects have different levels of resistance, which can affect the current and voltage in a circuit. Ohm’s Law also relates resistance to voltage (**V**) and current (**I**). |
| `MAC Address` | A **MAC address** (Media Access Control address) is a unique hardware address used to identify devices on a network. |
