import processing.pdf.*;
import processing.awt.*;
import java.awt.FlowLayout;
import java.awt.event.*;
import javax.swing.*;
import javax.swing.border.*;
import javax.swing.filechooser.FileSystemView;
import java.io.File;
import javax.swing.JOptionPane;

JPanel topPanel;
JProgressBar loadingBar;
JFrame progBarFrame;
JLabel progBarLabel;
JButton okButton;
JLabel pathLabel;
JPanel buttonPanel;

boolean printOutline = false;

String fileName;

int h = 842;
int w = 595;

int columns = 2;
int rows = 8;

String message = "This QR code is unique and will be linked to the NetID of this kit's owner. It authorizes\nthe connection of up to 3 devices to the campus-wide \"TUD-facility\" network.\nInstructions can be found in the booklet.";
String filtered_files = "";

int labelWidth, labelHeight;
int padding = 12;

ArrayList<PImage> qrCodes = new ArrayList<PImage>();
int stickerCount = 0;
int page = 1;

int stickerIndex = 0;

int textOffsetX = -48;
int textOffsetY = 7;
int textOffsetWidth = 42;

PFont ubuntu;
boolean loading = true;
int prevLoaded = -1, pctLoaded = 0;

void settings() {
  fileName = Integer.toString(year()).substring(2, 4) + Integer.toString(month()) + Integer.toString(day()) + "_QR_Codes.pdf";
  size(w, h, PDF, fileName);
}


void setup() {
  ubuntu = createFont("./Ubuntu-Light.ttf", 128);

  strokeWeight(1);

  labelWidth = w / columns;
  labelHeight = h / rows;
  textFont(ubuntu);
  textSize(9);
}

void draw() {
  if (loading) {
    
    noLoop();

    progBarFrame = new JFrame("Please Wait");
    progBarFrame.setDefaultCloseOperation(JFrame.DO_NOTHING_ON_CLOSE);
    progBarFrame.addWindowListener(new WindowAdapter() {
      @Override
        public void windowClosing(WindowEvent e) {
        exit();
      }
    }
    );
    topPanel = new JPanel(new FlowLayout(FlowLayout.LEFT));
    progBarLabel = new JLabel("Loading files...");
    topPanel.add(progBarLabel);
    loadingBar = new JProgressBar();
    loadingBar.setMinimum(0);
    loadingBar.setMaximum(100);
    okButton = new JButton("Save & Exit");
    okButton.addActionListener(new ActionListener() {
      public void actionPerformed(ActionEvent e) {
        exit();
      }
    }
    );
    pathLabel = new JLabel("");
    buttonPanel = new JPanel(new FlowLayout(FlowLayout.LEFT));
    buttonPanel.setVisible(false);
    buttonPanel.add(okButton);
    buttonPanel.add(pathLabel);
    Box box = Box.createVerticalBox();
    box.add(topPanel);
    box.add(loadingBar);
    box.add(buttonPanel);
    box.setBorder(new EmptyBorder(15, 25, 25, 25));
    progBarFrame.add(box);
    progBarFrame.setSize(500, 150);
    progBarFrame.setLocationRelativeTo(null);

    loadAssets(selectDirectory());

    String altMsg;
    altMsg = JOptionPane.showInputDialog(null, "The default label text is:\n\n" + message + "\n\nEnter alternative label text, if needed:");
    if (altMsg != null && !altMsg.equals("")) message = altMsg;

    return;
  }
  background(255);
  for (int r = 0; r < rows; r++) {
    for (int c = 0; c < columns; c++) {
      push();
      noFill();
      stroke(0);
      translate(w / columns * c, h / rows * r);

      if (stickerIndex < stickerCount) {
        pctLoaded = int(map(stickerIndex, 0, stickerCount, 0, 99));
        if (prevLoaded != pctLoaded) print("=");
        loadingBar.setValue(pctLoaded);
        prevLoaded = pctLoaded;
        if (printOutline) rect(0, 0, labelWidth, labelHeight);
        image(qrCodes.get(stickerIndex), padding, padding, labelHeight - padding * 2, labelHeight - padding * 2);
        noStroke();
        textAlign(LEFT);
        fill(0);
        text(message, labelWidth / 2 + textOffsetX, padding + textOffsetY, labelWidth - labelWidth / 2 - padding + textOffsetWidth, labelHeight - padding);
        pop();
      }
      stickerIndex++;
    }
  }

  PGraphicsPDF pdf = (PGraphicsPDF) g;

  if (page == ceil((float)stickerCount / (columns * rows))) {
    println("] 100%");
    println(stickerCount + " codes have been placed on " + ceil((float)stickerCount / (columns * rows)) + " pages.\n");
    println("Your PDF has been saved to " + sketchPath() + "/" + fileName);
    loadingBar.setValue(100);
    progBarFrame.setTitle("Done!");
    progBarLabel.setText(stickerCount + " codes have been placed on " + ceil((float)stickerCount / (columns * rows)) + " pages.");
    File sketchDir = new File(sketchPath());
    pathLabel.setText("Save to: /" + sketchDir.getName() + "/" + fileName);
    buttonPanel.setVisible(true);
    noLoop();
  } else pdf.nextPage();
  page++;
}

void loadAssets(File selection) {
  if (selection == null) {
    println("Window was closed or the user hit cancel.");
    exit();
  } else {
    String dirPath = selection.getAbsolutePath();
    println("User selected " + dirPath);
    File dir = new File(dirPath);
    try {

      File[] files = dir.listFiles();

      if (files == null) {
        println("No Files Found!");
      } else {

        print("\nLoading files... \n[");
        progBarFrame.setVisible(true);
        for (int i = 0; i < files.length; i++) {
          if (files[i].isDirectory()) {
            filtered_files += "Ignoring directory:  " + files[i].getCanonicalPath() + "\n";
          } else {
            if (files[i].getCanonicalPath().contains(".png")) {
              pctLoaded = int(map(stickerCount, 0, files.length, 0, 99));
              qrCodes.add(loadImage(files[i].getCanonicalPath()));
              if (prevLoaded != pctLoaded) print("=");
              loadingBar.setValue(pctLoaded);
              prevLoaded = pctLoaded;
              stickerCount++;
            } else {
              filtered_files += "Ignoring file:       " + files[i].getCanonicalPath() + "\n";
            }
          }
        }
        println("] 100 %");
        progBarFrame.dispose();
        println("The selected folder contains " + stickerCount + " graphics. \n");
        if (stickerCount == 0) {
          JOptionPane.showMessageDialog(null, "No valid files have been found. \nSelect a directory containing .png files. \n");
          println("Select a directory containing png files. \nExiting...");
          exit();
        }
        println(filtered_files);
        loading = false;
        print("Generating PDF...\n[");
        progBarLabel.setText("Generating PDF...");
        progBarFrame.setVisible(true);
        pctLoaded = 0;
        prevLoaded = -1;
        loop();
      }
    }
    catch (IOException e) {
      e.printStackTrace();
    }
  }
}

File selectDirectory() {
  JFileChooser jfc = new JFileChooser(FileSystemView.getFileSystemView().getHomeDirectory(), FileSystemView.getFileSystemView());
  jfc.setDialogTitle("Select a directory:");
  jfc.setFileSelectionMode(JFileChooser.DIRECTORIES_ONLY);

  int returnValue = jfc.showOpenDialog(null);
  if (returnValue == JFileChooser.APPROVE_OPTION) {
    if (jfc.getSelectedFile().isDirectory()) {
      return jfc.getSelectedFile();
    } else {
      JOptionPane.showMessageDialog(null, "Please select a directory.");
      return null;
    }
  } else {
    JOptionPane.showMessageDialog(null, "No directory selected. Program will exit now.");
    System.exit(0);
    return null;
  }
}
