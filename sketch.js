let walker1;
let walker2;
let choice;
let bubble1;
let bubble2;

function setup() {
  createCanvas(600,600);
  walker1 = new Walker();
  walker2 = new Walker();
  background(220);
  bubble1 = new Bubble();
  bubble2 = new Bubble();
  
}

function draw() {
  walker1.step();
  walker1.render();
  walker2.step();
  walker2.render();
  bubble1.move();
  bubble1.show();
  bubble2.move();
  bubble2.show();
}

class Walker {
  constructor(){
    this.x = width/2;
    this.y = height/2; 
  }

  render() {
    stroke(255, 255, 0);
    point(this.x,this.y);
    
  }

  step() {
    choice = floor(random(4));
    if (choice === 0) {
      this.x++;
    } else if (choice == 1) {
      this.x--;
    } else if (choice == 2) {
      this.y++;
    } else {
      this.y--;
    }
    this.x = constrain(this.x,0,width-1);
    this.y = constrain(this.y,0,height-1);
  }
}


class Bubble {
  constructor(){
    this.x =200;
    this.y = 150;
  }
  move(){
    this.x = this.x + random(-5, 5);
    this.y = this.y + random(-5, 5);
  }
  show(){
    stroke(255, 0, 0);
    strokeWeight(1);
    noFill();
    ellipse(this.x, this.y, 20, 20)
  }
}


