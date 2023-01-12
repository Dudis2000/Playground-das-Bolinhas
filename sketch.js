//Provavelmente para as bolinhas isso não é um playground
//pois elas estão sendo atiradas violentamente para varias direções difeentes,
//mais eu não tenho nada a ver com isso, que as bolinhas se virem

var angle1 = 837;
var angle2 = 7393;
var angle3 = 98340;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(490, 570);

	engine = Engine.create();
	world = engine.world;

	//Crie os Corpos aqui.
    var plane_options={
		isStatic: true
	}



	var particle_options={
		restitution: 0.4,
        frictionAir:0.02
	}

    fill("#F0FFF0)");
	placaReibaxada = Bodies.rectangle(250,570,500,20,plane_options);
    World.add(world, placaReibaxada);

	plataforma1 = Bodies.rectangle(130,400,80,20,plane_options);
    World.add(world, plataforma1);

	plataforma2 = Bodies.rectangle(370,400,80,20,plane_options);
    World.add(world, plataforma1);



    retanguloBayblade1 = Bodies.rectangle(250,200,150,20,plane_options);
    World.add(world, retanguloBayblade1);

	retanguloBayblade2 = Bodies.rectangle(250,200,150,20,plane_options);
    World.add(world, retanguloBayblade2);

	retanguloBayblade3 = Bodies.rectangle(250,200,150,20,plane_options);
    World.add(world, retanguloBayblade3);


	bolinha1 = Bodies.circle(220, 10, 10, particle_options);
	World.add(world, bolinha1);

	bolinha2 = Bodies.circle(220, 10, 10, particle_options);
	World.add(world, bolinha2);

	bolinha3 = Bodies.circle(220, 10, 10, particle_options);
	World.add(world, bolinha3);

	bolinha4 = Bodies.circle(220, 10, 10, particle_options);
	World.add(world, bolinha4);

	bolinha5 = Bodies.circle(220, 10, 10, particle_options);
	World.add(world, bolinha5);

  

	rectMode(CENTER);
	ellipseMode(RADIUS);
}


function draw() {
  background("#ABBEFF");
  Engine.update(engine);


  Matter.Body.rotate(retanguloBayblade1, angle3);
  push();
  translate(retanguloBayblade1.position.x, retanguloBayblade1.position.y);
  rotate(angle3);
  rect(0, 0, 150, 20);
  pop();
  angle3 += 12;


  Matter.Body.rotate(retanguloBayblade2, angle2);
  push();
  translate(retanguloBayblade2.position.x, retanguloBayblade2.position.y);
  rotate(angle2);
  rect(0, 0, 150, 20);
  pop();
  angle2 += 12;


  Matter.Body.rotate(retanguloBayblade3, angle1);
  push();
  translate(retanguloBayblade3.position.x, retanguloBayblade3.position.y);
  rotate(angle1);
  rect(0, 0, 150, 20);
  pop();
  angle1 += 12;


  ellipse(bolinha1.position.x, bolinha1.position.y, 8);
  ellipse(bolinha2.position.x, bolinha2.position.y, 8);
  ellipse(bolinha3.position.x, bolinha3.position.y, 8);
  ellipse(bolinha4.position.x, bolinha4.position.y, 8);
  ellipse(bolinha5.position.x, bolinha5.position.y, 8);

  rect(placaReibaxada.position.x, placaReibaxada.position.y, 500, 20);
  rect(plataforma1.position.x, plataforma1.position.y, 110, 20);
  rect(plataforma2.position.x, plataforma2.position.y, 110, 20);

  drawSprites();
 
}



