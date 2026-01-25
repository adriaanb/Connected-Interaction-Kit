# WiFi Sticker Generator

Sourcing Stickers:

https://www.bruna.nl/kantoor/etiket-bruna-105x37mm-240stuks-796398

The folder [/QRCodes_Gen](QRCodes_Gen/) contains a [Processing](https://processing.org/download) sketch that creates a PDF print file for WiFi authentication token QR codes.

The sketch asks for a directory containing .png files with the individual codes. The included [/sample_data](sample_data/) directory may be selected when asked for a directory to test the program's functionality.

The printing can be done on any laser printer capable of printing on heavy paper. For the proportions to match those of the individual stickers, it is recommended to use Adobe Acrobat and select a custom scaling factor of 100% in the print settings dialogue.

All necessary files are bundled in a zip archive available for download [here](wifi_sticker_generator.zip). After installing the [Processing IDE](https://processing.org/download), the sketch file can be opened from within the QRCodes_Gen folder.
