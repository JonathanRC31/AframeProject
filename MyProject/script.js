let rnd = (l,u) => Math.random()*(u-l)+l;
let scene;
let balls = [];
let balloons = [];
let popBalloons = [];
let dart;
let booths = [];
let ride;
let mole;
let moles = [];
let locations = [];
let points;
let tickets;
let carnivalKey;
let count1;
let count2;
let count3;
let game1;
let scoreBall1;
let targets = [];
let movingTargets = [];
let cups = [];

window.onload = function(){
  scene = document.querySelector("a-scene");
  targetTemplate = document.querySelector("#leg");
  tickets_Text = document.getElementById("ticketsText");
  points_Text = document.getElementById("pointsText");
  key_Text = document.getElementById("keyText");
  win_Image = document.getElementById("winImage");
  
  for(let i = 0; i < 20; i++){ //targets
   let x = rnd(-20,20);
   let y = 15;
   let z = rnd(-20,20);
   if(locations.length > 0){
	let good_position_found = false;
	 while(!good_position_found){
	 x = rnd(-20,20);
	 z = rnd(-20,20);
	 good_position_found = true;
     for(let locs of locations){
       let x2 = locs.x
	   let z2 = locs.z
	   if(distanceXZ(x,z,x2,z2) < 1){
	   	   good_position_found = false;
	   }
	}
	 console.log(good_position_found + " " + x + " " + z);
	}
   }
   locations.push({x:x,z:z});
   targets.push( new Target(x,y,z));
  }
  
  for(let i = 0; i < 20; i++){ //balls
   let x = rnd(-10,10);
   let y = 15;
   let z = rnd(-10,10);
   balls.push( new Ball(x,y,z));
  }

  for(let i = 0; i < 20; i++){ //normal ballons
   let x = rnd(-10,10);
   let y = 10;
   let z = rnd(-10,10);
   if(locations.length > 0){
	let good_position_found = false;
	 while(!good_position_found){
	 x = rnd(-20,20);
	 z = rnd(-20,20);
	 good_position_found = true;
     for(let locs of locations){
       let x2 = locs.x
	   let z2 = locs.z
	   if(distanceXZ(x,z,x2,z2) < 1){
	   	   good_position_found = false;
	   }
	}
	 console.log(good_position_found + " " + x + " " + z);
	}
   }
   locations.push({x:x,z:z});
   balloons.push( new Balloon(x,y,z));
  }
  
  
  let carousel = new Carousel(-20,-0.5,-20);
  let ride1 = new Ride(-20,3,-18);
  let ride2 = new Ride(-12,6,-18);
  let ride3 = new Ride(-28,7,-18);
  let ride4 = new Ride(-9,15,-18);
  let ride5 = new Ride(-31,15,-18);
  let ride6 = new Ride(-12,25,-18);
  let ride7 = new Ride(-28,25,-18);
  let ride8 = new Ride(-20,27,-18);


  dart = new Dart();
  window.addEventListener("keydown",function(e){
	if(e.key == " "){
	   dart.shoot();
	}
	if(e.key == "q"){
	   translatePoints();
	}
  })

  points = 0;
  tickets = 0;
  carnivalKey = 0;
  count1 = 0;
  count2 = 0;
  count3 = 0;
  
  for(let i = 0; i < 4; i++){ //game booths
   let x = -5 + (-i * 8);
   let y = 0;
   let z = -5;
   booths.push( new Booth(x,y,z));
  }
  
  balloonPop(); //popable balloons
  routeTargets();
  cupLines();
  let cupHolder1 = new Scorebox(-20.5,1.5,-5);
  let cupHolder2 = new Scorebox(-21.5,1.5,-5);
  
  for(let i = 0; i < 1; i++){ //wack-a-mole
   let x = -13;
   let y = 1;
   let z = -5;
   
   moles.push( new Mole(x,y,z));
  }
  //let mole = new Mole(-13,1,-5);
  
  let ballpit = new Ballpit(-15,-0.5,15);
  
  game1 = new Game1(4,-0.5,-5);
  scoreBall1 = new scoreball(4,6,-6);
  let box0 = new Scorebox(1.7,0,-6);
  let box1 = new Scorebox(2.7,0,-6);
  let box2 = new Scorebox(3.6,0,-6);
  let box3 = new Scorebox(4.6,0,-6);
  let box4 = new Scorebox(5.6,0,-6);
  let box5 = new Scorebox(6.6,0,-6);
  
  scoreCount();
  setTimeout(loop,1000);
}


function loop(){
  if(dart) dart.fly();
  for(let balloon of popBalloons){
	balloon.scale(0.7);
    if(distance(dart.obj,balloon.obj) < 0.5){
	  points += 1;
	  count1 += 1;
	  scoreCount();
	  console.log(points);
	  //balloon.visible = false;
	  balloon.obj.setAttribute("position","1000 0 1000");
    }
	if(count1 == 5){
	  count = 0;
	  balloonPop();
	}
  }
  for(let cup of cups){
    if(cup.obj.object3D.position.y <= 1.5 && cup.obj.object3D.position.y > 0){
	  points += 1;
	  count2 += 1;
	  scoreCount();
	  console.log(points);
	  cup.obj.removeAttribute("dynamic-body");
	  cup.obj.setAttribute("position","1000 0 1000");
	  cup.obj.setAttribute("dynamic-body","");
    }
	if(count2 >= 6){
	  count = 0;
	  cupLines();
	}
  }
  for(let target of targets){
	target.spin();
    if(distance(dart.obj,target.obj) < 0.5 && target.visible){
	  points += 1;
	  scoreCount();
	  console.log(points);
	  target.visible = false;
	  target.obj.setAttribute("position","1000 0 1000");
    }
  }
  for(let target of movingTargets){
	target.spin();
	target.scale(0.5);
    if(distance(dart.obj,target.obj) < 0.5 && target.visible){
	  points += 1;
	  count3 += 1;
	  scoreCount();
	  console.log(points);
	  target.visible = false;
	  target.obj.setAttribute("position","1000 0 1000");
	  if(count3 == 4){
	    count = 0;
	    routeTargets();
	  }
    }
  }
  if(scoreBall1.obj.object3D.position.x >= 1.7 &&  scoreBall1.obj.object3D.position.x <2.7 && scoreBall1.obj.object3D.position.y <+ 0.5){
	points += 0;
	scoreCount();
	console.log("1 " + points);
	scoreBall1.obj.removeAttribute("dynamic-body");
	scoreBall1.obj.setAttribute("position","4 6 -6");
	scoreBall1.obj.setAttribute("dynamic-body","");
  }else if(scoreBall1.obj.object3D.position.x >= 2.7 &&  scoreBall1.obj.object3D.position.x <3.6 && scoreBall1.obj.object3D.position.y <+ 0.5){
	points += 2;
	scoreCount();
	console.log("2 " + points);
	scoreBall1.obj.removeAttribute("dynamic-body");
	scoreBall1.obj.setAttribute("position","4 6 -6");
	scoreBall1.obj.setAttribute("dynamic-body","");
  }else if(scoreBall1.obj.object3D.position.x >= 3.6 &&  scoreBall1.obj.object3D.position.x <4.6 && scoreBall1.obj.object3D.position.y <+ 0.5){
	points += 3;
	scoreCount();
	console.log("3 " + points);
	scoreBall1.obj.removeAttribute("dynamic-body");
	scoreBall1.obj.setAttribute("position","4 6 -6");
	scoreBall1.obj.setAttribute("dynamic-body","");
  }else if(scoreBall1.obj.object3D.position.x >= 4.6 &&  scoreBall1.obj.object3D.position.x <5.6 && scoreBall1.obj.object3D.position.y <+ 0.5){
	points += 2;
	scoreCount();
	console.log("4 " + points);
	scoreBall1.obj.removeAttribute("dynamic-body");
	scoreBall1.obj.setAttribute("position","4 6 -6");
	scoreBall1.obj.setAttribute("dynamic-body","");
  }else if(scoreBall1.obj.object3D.position.x >= 5.6 &&  scoreBall1.obj.object3D.position.x <6.6 && scoreBall1.obj.object3D.position.y <+ 0.5){
	points +=0;
	scoreCount();
	console.log("5 " + points);
	scoreBall1.obj.removeAttribute("dynamic-body");
	scoreBall1.obj.setAttribute("position","4 6 -6");
	scoreBall1.obj.setAttribute("dynamic-body","");
  }


  

  for(let mole of moles){
    if(distance(dart.obj,mole.obj) < 0.5){
	  let x = rnd(-12,-14);
	  let z = rnd(-4,-6);
	  new Mole(x,1,z)
	  console.log(2);
    }
  }
  



  

  window.requestAnimationFrame( loop );
}


function distance(obj1,obj2){
  let x1 = obj1.object3D.position.x;
  let y1 = obj1.object3D.position.y;
  let z1 = obj1.object3D.position.z;
  let x2 = obj2.object3D.position.x;
  let y2 = obj2.object3D.position.y;
  let z2 = obj2.object3D.position.z;
  let d = Math.sqrt(Math.pow(x1-x2,2) + Math.pow(y1-y2,2) + Math.pow(z1-z2,2));
  return d;
}
function distanceXY(x1,y1,x2,y2){
  let d = Math.sqrt(Math.pow(x1-x2,2) + Math.pow(y1-y2,2));
  return d;
}
function distanceXZ(x1,z1,x2,z2){
  let d = Math.sqrt(Math.pow(x1-x2,2) + Math.pow(z1-z2,2));
  return d;
}
function translatePoints(){
  console.log("Here")
  if(points >= 5){
	tickets += 1;
	points -= 5;
	console.log(tickets);
	scoreCount();
  }
  if(tickets >= 25 && carnivalKey <=0){
	tickets -= 25;
	carnivalKey += 1;
	console.log(tickets);
	scoreCount();
  }
  if(carnivalKey >= 1){
	win_Image.setAttribute("opacity",1);
	win_Image.setAttribute("position","0 0 0");
  }
}
function scoreCount(){
  tickets_Text.setAttribute("value",`Tickets: ${tickets}`);
  points_Text.setAttribute("value",`Points: ${points}`);
  key_Text.setAttribute("value",`Key: ${carnivalKey}`);
}
function balloonPop(){
  popBalloons = [];
  locations = [];
  for(let i = 0; i < 5; i++){
   let x = rnd(-3,-7);
   let y = rnd(2,4);
   let z = -6;
   if(locations.length > 0){
	let good_position_found = false;
	while(!good_position_found){
	 x = rnd(-3,-7);
	 y = rnd(2,4);
	 good_position_found = true;
         for(let locs of locations){
           let x2 = locs.x
	   let y2 = locs.y
	   if(distanceXY(x,y,x2,y2) < 1){
	   	   good_position_found = false;
	   }
	}
	 console.log(good_position_found + " " + x + " " + y);
	}
   }
   locations.push({x:x,y:y});
   popBalloons.push( new Balloon(x,y,z));
  }
}
function cupLines(){
  for(let i = 0; i < 1; i++){ //cup line top
   let x = -21;
   let y = 3.2;
   let z = -5;
   cups.push( new Cup(x,y,z));
  }
  for(let i = 0; i < 2; i++){ //cup line middle
   let x = -20.75 - (-20.5 * (i * -0.025));
   let y = 2.6;
   let z = -5;
   cups.push( new Cup(x,y,z));
  }
  for(let i = 0; i < 3; i++){ //cup line bottom
   let x = -20.53 - (-20.5 * (i * -0.025));
   let y = 2;
   let z = -5;
   cups.push( new Cup(x,y,z));
  }
}
function routeTargets(){
  movingTargets = [];
  locations = [];
  for(let i = 0; i < 4; i++){ //moving targets
   let x = rnd(-27,-31);
   let y = rnd(2,4);
   let z = -6;
   if(locations.length > 0){
	let good_position_found = false;
	 while(!good_position_found){
	 x = rnd(-27,-31);
	 y = rnd(2,4);
	 good_position_found = true;
     for(let locs of locations){
       let x2 = locs.x
	   let y2 = locs.y
	   if(distanceXY(x,y,x2,y2) < 1.5){
	   	   good_position_found = false;
	   }
	}
	 console.log(good_position_found + " " + x + " " + y);
	}
   }
   locations.push({x:x,y:y});
   movingTargets.push( new Target(x,y,z));
  }
}
