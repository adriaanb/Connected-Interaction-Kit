//Paper size 210x148mm
let resMultiplyer = 1

let w = 2100;
let h = 1480;

//Grid setup
let columnCount = 50;
let padding = 15;

function setup() {
  createCanvas(w*resMultiplyer, h*resMultiplyer,SVG);
  background(255)
  strokeWeight(2)
}

function draw() {
  
  
  for(let i = 0; i < columnCount; i++){
    //line(width/columnCount*i,0,width/columnCount*i,height)
     for(let j = 0; j < columnCount; j++){
      //line(0,width/columnCount*j, width, width/columnCount*j)
      
      push()
      translate(width/columnCount*i,width/columnCount*j)
      let rotationChance = random(0,100);
      let colorChance = random(0,100);
      if(rotationChance < 5){
        translate(width/columnCount, 0)
        rotate(HALF_PI)
      }
      if(rotationChance > 98){
      translate(width/columnCount/2*-1+padding/2, width/columnCount/2)
        rotate(-QUARTER_PI)
      }
      if(colorChance > 99){
        stroke("red")
      }
      
      line(0+padding,0+padding,width/columnCount-padding,width/columnCount-padding)
      pop()
     }
    
  }
  
  save("pattern.svg")
  noLoop()
}
