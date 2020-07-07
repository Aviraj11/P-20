var car, wall
var speed, weight
var deformation

function setup() {
  createCanvas(1600,400);
  createSprite(400, 200, 50, 50);

  speed = random(55, 90);
  weight = random(400, 1500);
}

function draw() {
  background(255,255,255);  
  
  car = createSprite(50, 200, 50, 50);
  wall = createSprite(1500, 200, 60, height/2);
  wall.Shapecolor = color(80,80,80);
  
  car.velocityX = speed;
  
  car.collide("wall");
  
  if (wall.x - car.x < (car.width + wall.width)/2) {

    car.velocityX = 0;
    deformation = 0.5 * weight * speed * speed/22509;
    if (deformation > 180) {
      
      car.Shapecolor = color(230,0,0);
     }  

    if (deformation < 180 && deformation > 100) {
     
     car.Shapecolor = color(230,230,0);
     }

     if (deformation < 100) {

      car.Shapecolor = color(0,255,0);
     }
    }

  drawSprites();
}