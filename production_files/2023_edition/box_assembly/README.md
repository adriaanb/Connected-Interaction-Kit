# Box Assembly

- [Material Overview](#material-overview)
- [Box Branding](#box-branding)
- [Box Inlays](#box-inlays)
  - [Materials and Tools](#materials-and-tools)
  - [Component Label Inlay](#component-label-inlay)
  - [Cardboard Inlays](#cardboard-inlays)  
- [WiFi Token QR Code Stickers](#wifi-token-qr-code-stickers)
- [Final Assembly](#final-assembly)



## Material Overview

| Name                                                         | Amount                                        | Explanatory note                                             | Price    |
| :----------------------------------------------------------- | :-------------------------------------------- | :----------------------------------------------------------- | -------- |
| [Cardboard Box (A4, 25mm)](https://www.ratioform.de/p/stuelpdeckelkarton-braun-1201040105/188-10/) | 350                                           | Boxes for the kit, ordered at [ratioform.de](https://www.ratioform.de/p/stuelpdeckelkarton-braun-1201040105/188-10/) | 217 €    |
| [Cardboard Sheets (1170x770)](https://www.pressel.com/p/pressel-karton-zwischenlagen-2-wellig-1170x770x7mm-braun-20-stuck/830801) | 110                                           | For laser cutting box inlays. These cardboard sheets nicely fit the volume of common laser cutters. **The sheets have a natural curvature; make sure to laser cut them so the three inlay layers curve the same way!** There is [another version](https://www.pressel.com/p/pressel-karton-zwischenlagen-1-wellig-1170x770mm/830800?tracking=searchterm:1170x770mm) with only one layer of corrugated cardboard which might be less prone to warping. | 210 €    |
| [Kraftpapier A4 120g](https://discountoffice.nl/p/kraftpapier-folia-din-a4-120gr/) | 4 packs (100 sheets each)                     | Unbleached paper matching the color and texture of the cardboard box. Used to print a bottom inlay featuring component labels. | 22 €     |
| [Bruna label paper](https://www.bruna.nl/kantoor/etiket-bruna-105x37mm-240stuks-796398) | 2 packs ( 240 stickers on 16 sheets per pack) | Label paper for producing WiFi authentication QR code tokens applied to the inside of each kit's lid. | 7,58 €   |
| [Booklets](/production_files/2023_edition/booklet)           | 360                                           | Ordered at [PrinterPro.nl](https://www.printerpro.nl/producten/brochures-magazines-geniet/) - detailed instructions available in the [/booklet](/production_files/2023_edition/booklet) directory. | 829,35 € |
| [Square Labels (Kit & Name)](https://www.printerpro.nl/producten/etiketten/) | 360                                           | Main label with kit branding and student name tag. Odered at [PrinterPro.nl](https://www.printerpro.nl/producten/etiketten/) - <br />Format: A6 (10,5 x 14,8 cm);  <br />Materiaal en gewicht: Sticker papier gesatineerd 90 g/m² | 57,68 €  |
| [Round Labels (Edition)](https://www.printerpro.nl/producten/etiketten/) | 360                                           | Secondary label with kit edition and ecosystem illustration. Odered at [PrinterPro.nl](https://www.printerpro.nl/producten/etiketten/) - <br />Format: Rond (Ø 8,5 cm);  <br />Materiaal en gewicht: Sticker papier gesatineerd 90 g/m² | 57,68 €  |



## Box Branding

![Closed box](/assets/connected-interaction-kit-2023-box.jpg)

The branding of the box is composed of two labels: 

The square primary label is to be placed in the bottom-left corner of the box and features the name of the kit, the branding pattern of the kit ecosystem, and a place for students to note their name and student number. 

The round secondary sticker is to be placed on the top edge of the square sticker with a slight offset. It denotes the kit edition and provides a distinctive look. Additionally, these stickers may be used to cover up regulatory and production markings that were present on several box lids.

Ready-to-use print files and editable InDesign files can be found in the [/stickers/lid_stickers](stickers/lid_stickers/) directory. The font used is [Ubuntu Mono Bold](https://design.ubuntu.com/font); the pattern was generated using the [cover_pattern_generator](). 




## Box Inlays

The box inlays present the kit's main components neatly and comprehensibly and facilitate the organization and storage of the kit contents. A bottom paper inlay features component labels, whereas three layers of laser-cut cardboard are used to create individual storage compartments.

### Materials and Tools

- [Cardboard Sheets (1170x770)](https://www.pressel.com/p/pressel-karton-zwischenlagen-2-wellig-1170x770mm/830801)
- [Kraftpapier A4 120g](https://discountoffice.nl/p/kraftpapier-folia-din-a4-120gr/)
- Laser cutter
- Printer


### Component Label Inlay

The [/labeled_inlay](labeled_inlay/) directory contains a ready-to-use [print file](labeled_inlay/print_file.pdf) and an InDesign file that can be used to customize the component labels.

The printing can be done on any laser printer capable of printing on 120g heavy paper. For the proportions to match those of the cardboard inlays, it is recommended to use Adobe Acrobat and select a custom scaling factor of 100% in the print settings dialogue.

For the Xerox printers found around the TU Delft campus, the following settings are recommended:

1. *Copies: 50 (for easier batching)*
2. *Page Sizing & Handling > Size >* ***100%\*** *or* ***Actual size\*** *(ensures proper positioning and sizing of elements)* 
3. *Printer > Paper Feed >* ***Tray 5 (Bypass)\*** *(make sure to pre-load the unbleached paper into the tray)*
4. *Printer > Xerox Features > 2-Sided Print >* ***1-Sided-Print\***
5. *Print*

Remember to add the unbleached paper to the printer's bypass (tray 5) before starting the job. The bypass can handle ~50 pages at a time, so adding the job as a favorite in the menu may streamline the process. Alternatively, you can load the paper into a regular tray (e.g., tray 4) to print larger batches.


### Cardboard Inlays

The cardboard inlays consist of three stepped layers. The files are optimized for laser cutting as much as possible - one cardboard sheet fits ten inlays.

For easier assembly, the bottom layer is marked with a small B, and the mid-layer with an M in the bottom right corner. The topmost layer has no marking.

The [/cardboard_inlays](cardboard_inlays/) directory contains two sets of files. [/original_files](cardboard_inlays/original_files), as well as  [/pmb_cut_files](cardboard_inlays/pmb_cut_files) optimized for the facilities available in the workshops of TU Delft's Industrial Design faculty. 

**While laser cutting, please be aware that the sheets have a natural curvature. Make sure to laser cut them so the three inlay layers curve the same way to avoid alignment issues!**



## WiFi Token QR Code Stickers

The inside of each box lid is fitted with a WiFi authentication token in the form of a QR code sticker, allowing students to connect up to three devices to the WiFi network available on TU Delft Campus. Lab owners can create and manage QR codes in batches of 20 via the TU Delft Intranet using [this ITC page](https://infra-ict.tudelft.nl/portal/labs/).

A [Processing](https://processing.org/download) sketch that automates the generation of a PDF print file containing the QR tags supplied to it is available in the [/stickers/wifi_sticker_generator](stickers/wifi_sticker_generator/) directory. The directory also contains sample data that may be used to determine size and format requirements and for testing the program's functionality.

The printing can be done on any printer capable of printing on heavy paper. For the proportions to match those of the individual stickers, it is recommended to use Adobe Acrobat and select a custom scaling factor of 100% in the print settings dialogue.

Print the resulting PDF file on [Bruna label paper](https://www.bruna.nl/kantoor/etiket-bruna-105x37mm-240stuks-796398). For the Xerox printers found around the TU Delft campus, the following settings are recommended:

1. *Copies: 22 (resulting in 352 individual labels)*
2. *Page Sizing & Handling > Size >* ***100%\*** *or* ***Actual size\*** *(ensures proper positioning and sizing of elements)* 
3. *Printer > Paper Feed >* ***Tray 5 (Bypass)\*** *(make sure to pre-load the label paper into the tray)*
4. *Printer > Xerox Features > 2-Sided Print >* ***1-Sided-Print\***

It is advisable to do a test print to determine the proper orientation of the label paper in the tray.



## Final Assembly

Here is an overview of the steps required to assemble the finished kits:

**Packaging:**

- Assemble the box bases and lids
- Apply the branding stickers to the outside of the lid
- Apply the WiFi stickers to the inside of the lid
- Insert the component label inlays
- Fit the cardboard inlays creating the storage compartments

**Content:**

- Add sensors and actuators to their respective compartments
- Add ItsyBitsy Microcontroller and Expander Board (soldered, flashed, and tested)
- Add Accessories (Protective base, cables, etc.)
- Add the Booklet
