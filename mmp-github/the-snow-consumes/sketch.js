let particles = []; //so here I am declaring an array for the snow particles 

var img; // declaring variable 'img'

function preload() {
  img = loadImage('umb.png'); 
}

function setup() {
  createCanvas(400, 400);
  imageMode(CENTER); // So this was added because the snow removing was not centered on the mouse. 
}

function draw() {
  background(53,83,94); //baby blue colors to give a christmas feeling.
  noCursor();

  // Generate objects
  for (let i = 0; i < 5; i++) {
    particles.push(new Particle(random(0, 500), 0)); // pushes snow particles into particles catagory at random pos.
  }

  
  for (let i = 0; i < particles.length; i++) {
    let p = particles[i];
    p.move();
    p.display();      //declaring variable 'p' to store current snow

    if ((mouseX-38 < particles[i].x) && (particles[i].x < mouseX+38) && (particles[i].y > mouseY-56)) {
      particles.splice(i, 1);
    }      //removes snow particles from array 
  }


  if (particles.length > 60) {
   
    particles.splice(0, 1);
  }
  if (particles.length > 200) {
   
    particles.splice(0, 4);
  }

  
  image(img, mouseX, mouseY);
}

class Particle {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.xspd = 0
    this.position = createVector(this.x, this.y);
    this.yspd = random(9, 10)
    this.size = 3;
    this.clr = color(255, random(150));
  }
  display() {
    fill(this.clr);
    stroke(this.clr);
    ellipse(this.x, this.y, this.size, this.size);
    ellipse(this.x, this.y, this.size * 0.5, this.size) * 0.3;
  }
  move() {
    this.x = this.x + this.xspd + random(-0.3, 0.3);
    this.y = this.y + this.yspd;
  }
  // checkEdges() {
  //   if (this.y > height) {
  //     this.y = 0;
  //   }     //SO all of this makes the snow what the snow is, snall ellipse's on a vector. I think. 
  // }
  removeSnow() {
    fill(0);
  }  // removes snow , fixes background
}

// Credit to adj311 on p5 editor. The main frame of his code was used, but I adjusted the mouse cursor completely and changed the background. As well as editing the code almost entierly for it to work to what I wanted. Had to remove the original rain removing effect and add my own script, as well as adjust different sizes and numbers to adjust to size and porportions of the image. Took 5 hours. I really and truly hope this is counts for something. I also think mine looks and works better. 