# Starter Booklet

The booklet was designed in InDesign. All linked assets, fonts, and print files are contained within this directory.

![Image of booklet](/assets/Booklet_2023.jpg)

---

## Asset Source Files
All visuals for the booklet were designed in either Figma or Illustrator. The source files are included in the [/Source Files](Source Files/) directory.

---

## Cover page
A [p5.js](https://p5js.org/) sketch to generate cover art for the booklet can be found in the [/cover_pattern_generator](cover_pattern_generator/) directory.

![Generative pattern](/production_files/2023_edition/box_assembly/stickers/lid_stickers/Links/Pattern.png)

At the top of [sketch.js](cover_pattern_generator/sketch.js), user-definable parameters, and constraints are defined. The sketch will keep generating patterns until one fits the required conditions. By pressing the return key, the currently displayed design is saved. Pressing any other key will dismiss the current pattern and resume generating others.

All necessary files are bundled in a zip archive available for download [here](cover_pattern_generator/pattern_generator.zip). After unpacking, the index.html file may be opened locally in any web browser.

---

## Ordering booklets
For the 2023 production run, 360 booklets were ordered at [PrinterPro.nl](https://www.printerpro.nl/producten/brochures-magazines-geniet/). A ready-to-use [print file](2023_Kit_Booklet_Printfile(CMYK_Coated_FOGRA39).pdf) with cutting marks and bleed is contained within this directory. The print specifications are as follows:

| Attribute | Specification |
| :--- | :--- |
| Paper Type | Matt |
| Material and weight | Houtvrij 135 g/m² |
| Number of pages (including cover) | 28 pages |
| Printing | Double-sided |
| Cover | Same as inside |
| Format | A6 portrait (10,5 x 14,8 cm) |

**BE AWARE:** The booklet uses a page dimension of 184 x 115 mm, which is not a standard paper format, but rather a format derived from the measurements of the kit enclosure's cardboard inlay. It falls in between DIN A6 and A5 formats. As with the production of A6 booklets, the pages are printed on paper of the next-largest format (A5) and then cut to size; therefore, A6 Portrait must be selected when placing the order. Confirm the custom paper size with the printing service when placing the order.

---

## Digital publishing

A separate pdf file of the booklet is available for download or online use. In contrast to the print file (exported in a CMYK color space and including bleed and cutting marks), the digital publishing version uses an RGB color space, contains active hyperlinks, and omits bleed and cutting marks. The file is available [here](2023_Kit_Booklet(RGB_Digital_Publishing).pdf). 
