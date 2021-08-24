class Computer {
  constructor(x, y, width, height) {
    var options = {
      isStatic: true
    };
    this.life1 = "green";
    this.life2 = "green";
    this.life3 = "green";
    this.body = Bodies.rectangle(x, y, width, height, options);

    this.width = width;
    this.height = height;
    this.image = loadImage("./assets/player.png");

  

    World.add(world, this.body);
  }

 life(){
   push();
  fill("white");
  textSize(20);
  text("Computer", 1630, 40);

  fill(this.life1);
  rect(windowWidth-400, 50, 70, 30);
  fill(this.life2);
  rect(windowWidth-330, 50, 70, 30);
  fill(this.life3);
  rect(windowWidth-260, 50, 70, 30);
   pop();
 }
  
  display() {
    var pos = this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image, 0, 0, this.width, this.height);
    pop();
  }
}
