/* A5 paper size 210x148mm (Booklet v1)
 * 184x115mm paper size (Booklet v2)
 *
 * 1 inch is 25.4mm
 */

// Configuration
let dpi = 300;           // DPI for graphic when printed at the defined canvas size

let h_mm = 184;          // Define canvas height
let w_mm = 115;          // Define canvas width

let bleed_mm = 0;        // Enlarge the pattern to account for bleed in print file

let distr = 0;           // distribution of elements based on: 0 - random; 1 - perlin noise; 2 - mix
let density = 60;        // average percentage of non-empty fields (it affects dist mode 1 differently)
let horiz = 0.5;         // average percentage of horizontal lines
let flip = 2;            // average percentage of flipped lines
let accent = 0.1;        // average percentage of accent colored fields

let black_min = 6;       // min & max amounts of inverted grid elements
let black_max = 25;

let grid_mm = 2.4;       // grid elements are 2.5x2.5 mm (PCB pattern is 2x2)

//Millimeter to Pixel Conversions
px_conv = dpi / 25.4

// Add bleed
w_mm = w_mm + 2 * bleed_mm;
h_mm = h_mm + 2 * bleed_mm;

let w_px = w_mm * px_conv;
let h_px = h_mm * px_conv;

let grid_px = grid_mm * px_conv;

//Grid setup
let columns = Math.floor(w_mm / grid_mm);
let rows = Math.floor(h_mm / grid_mm);

//Element setup
let grid_el;
let el_width  = 0.572 * grid_mm * px_conv;
let el_height = 0.135 * grid_mm * px_conv; // taken from PCB fab's minimum requirements for 2mm grid

function setup() {
  createCanvas(w_px, h_px);
  grid_el = createGraphics(grid_px, grid_px);
}

function draw() {
  
  // make sure pattern is centered irrespective of element size and resolution
  translate((width-columns*grid_px)/2, (height-rows*grid_px)/2);
  
  let black_count = 0;
  let seed = random(100);
  
  background(255);
  
  for(let i = 0; i < columns; i++){
     for(let j = 0; j < rows; j++){
       
      grid_el.rectMode(CENTER);
      grid_el.background(255);
      grid_el.noStroke();
      grid_el.fill(0);
       
      let n1 = noise(i*0.15 + seed,j*0.15+seed);
      //grid_el.background(n1*255)
      if (n1 < 0.15) {
        grid_el.background(0);
        grid_el.fill(255);
        black_count++;
      }
      
      if(random(100) >= 100-accent){
        grid_el.background(208,19,28);
        grid_el.fill(255);
      }
      
      let n2;
      if (distr == 1) n2 = noise(i * 0.15 + seed, j * 0.15 + seed);
      else if (distr == 2) n2 = noise(i*0.1 + seed,j*0.1+seed)*2;
      else n2 = 1;
      //grid_el.background(255,255-n2*255,n2*255)
       
      if(distr != 1 && (random(100) > n2*density)){
        // DO NOTHING: density defines average chance of empty field
      }
      else if(distr == 1 && n2*100 > density){
        // DO NOTHING: density defines average chance of empty field
      }
      else if(random(100) < horiz){
        grid_el.push();
        grid_el.translate(grid_el.width/2, grid_el.height/2);
        grid_el.rect(0, 0, el_width, el_height);
        grid_el.pop();
      }
      else if(random(100) < flip){
        grid_el.push();
        grid_el.translate(grid_el.width/2, grid_el.height/2);
        grid_el.rotate(QUARTER_PI);
        grid_el.rect(0, 0, el_width, el_height);
        grid_el.pop();
      }
      else {
        grid_el.push();
        grid_el.translate(grid_el.width/2, grid_el.height/2);
        grid_el.rotate(-QUARTER_PI);
        grid_el.rect(0, 0, el_width, el_height);
        grid_el.pop();
      }
       
      image(grid_el, grid_px*i, grid_px*j);
    
     }
    
  }
  
  // frameRate(1); //to add 1s delay before regeneration
  if (black_min <= black_count && black_count <= black_max) {
    noLoop();
  }
}

function keyPressed() {
  if (keyCode == 13) { // Key index 13 is the return key
    save("pattern.png");
  }
  else {
    loop();
  }
}
