---
layout: default
title: "Core Components"
parent: "Components"
nav_order: 0
has_children: true
has_toc: false
---

## Core Components

{: .important }
There are **multiple, functionally equivalent editions** of Connected Interaction Kit. The Core Components you own differ slightly between editions. Your exact components are determined by the year in which you purchased your Connected Interaction Kit. This page is designed to help you identify which version you own.

If in doubt, jump to the bottom of the page for helpful pointers on how to [recognize your hardware](#recognizing-your-components).

## 2023 Edition

|                       Microcontroller                        |                        Bitsy Expander                        |
| :----------------------------------------------------------: | :----------------------------------------------------------: |
|                       ItsyBitsy RP2040                       |             Expander Board for ItsyBitsy RP2040              |
| <img src="itsybitsy-microcontroller/assets/ItsyBitsy-RP2040.png" alt="ItsyBitsy RP2040" width="400"/> | <img src="bitsy-expander/assets/Bitsy-Expander-RP2040.png" alt="BitsyExpander" width="400"/> |
|                                                              |                                                              |
| [Learn More](itsybitsy-microcontroller/itsybitsy-rp2040){: .btn .btn-blue } | [Learn More](bitsy-expander/bitsy-expander-rp2040){: .btn .btn-blue } |

## 2022 Edition

|                       Microcontroller                        |                        Bitsy Expander                        |
| :----------------------------------------------------------: | :----------------------------------------------------------: |
|                     ItsyBitsy M4 Express                     |           Expander Board for ItsyBitsy M4 Express            |
| <img src="itsybitsy-microcontroller/assets/ItsyBitsy-M4-Express.png" alt="ItsyBitsy M4 Express" width="400"/> | <img src="bitsy-expander/assets/Bitsy-Expander-Original-M4.png" alt="BitsyExpander" width="400"/> |
|                                                              |                                                              |
| [Learn More](itsybitsy-microcontroller/itsybitsy-m4-express){: .btn .btn-blue } | [Learn More](bitsy-expander/bitsy-expander-m4){: .btn .btn-blue } |

## Recognizing your components

### Which Bitsy Expander do I have?

<p align="center">
  <img src="bitsy-expander/assets/recognize_expander.jpg" width="400px" alt="Identify Expander Type">
</p>



The easiest way to identify which Bitsy Expander flavor you own is checking the label on the back of the board. **RP2040** or **M4** stated on the label indicates the flavor of your Expander. Older M4 Expanders have an **empty label** (and are also recognizable by the lack of an I²C header at the top). 

### Which ItsyBitsy Development Board do I have?

<p align="center" style="display: flex; justify-content: center;">
  <img src="itsybitsy-microcontroller/assets/recognize_IB_M4.jpg" width="250px" alt="Identify ItsyBitsy M4 Express" style="margin-right: 25px;">
  <img src="itsybitsy-microcontroller/assets/recognize_IB_RP2040.jpg" width="250px" alt="Identify ItsyBitsy RP2040" style="margin-left: 25px;">
</p>



The **ItsyBitsy M4 Express** features **one (RESET) button**. (So do most other ItsyBitsy Development boards, so always verify with the silkscreen.)
The **ItsyBitsy RP2040** features **two (BOOT, RESET) buttons**.