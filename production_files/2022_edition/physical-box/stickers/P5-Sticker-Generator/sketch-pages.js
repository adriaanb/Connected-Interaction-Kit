let h = 842;
let w = 595;

let columns = 2;
let rows = 8

let message = 'This QR tag belongs to the owner of this kit. It is used in "Tutorial 3: Connecting your ItsyBitsy to the internet” of the introduction booklet to add your devices to the TU Delft campus WiFi.'

let labelWidth, labelHeight;
let padding = 12;

let pdf;

let qrCodes = [];
let stickerCount = 400;
let stickerPerPage = 16;
let pagesNeeded = 26;
let page = 1;

let counter = 1;

let textOffsetX = -48;
let textOffsetY = 12;
let textOffsetWidth = 42;

function preload() {
    font = loadFont("./Ubuntu-Light.ttf");

    for (let c = 1; c < stickerCount + 1; c++) {
        basename = "assets/QR/Certificate-"
        number = String(c).padStart(5, "0")
        ending = ".png"
        qrCodes[c] = loadImage(basename + number + ending)
    }
    console.log("Everything loaded")
    console.log(qrCodes)
}

function setup() {
    createCanvas(w, h, SVG);

    strokeWeight(1)

    labelWidth = w / columns
    labelHeight = h / rows
    textFont(font);
    textSize(9);

    pdf = createPDF();
    pdf.beginRecord();
    frameRate(1)
    console.log("Start the Sketch")

}

function draw() {
    background(255);
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < columns; c++) {
            push()
            noFill()
            stroke(0);
            translate(w / columns * c, h / rows * r)
            //rect(0, 0, labelWidth, labelHeight)

            if (counter <= stickerCount) {
                console.log(`Placed image number ${counter}`)
                image(qrCodes[counter], padding, padding, labelHeight - padding * 2, labelHeight - padding * 2)
                noStroke();
                textAlign(LEFT)
                fill(0);
                text(message, labelWidth / 2 + textOffsetX, padding + textOffsetY, labelWidth - labelWidth / 2 - padding + textOffsetWidth, labelHeight - padding)
                pop()
            } else {
                fill(0)
                rect(padding, padding, labelHeight - padding * 2, labelHeight - padding * 2)

            }
            counter++
        }
        noLoop();
    }

    if (page == pagesNeeded) {
        console.log("Save pdf")
        noLoop();
        pdf.save({
            filename: 'stickers',
            margin: {
                top: '0px',
                left: '00px',
                right: '00px',
                bottom: '00px'
            },
            columnGap: '0px',
            rowGap: '0px',
            width: w,
            height: h
        });
    } else {
        console.log("Next Page")
        pdf.nextPage();
        loop();
    }
    page++;
}

