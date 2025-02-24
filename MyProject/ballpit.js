class Ballpit{
  constructor(x,y,z){
    this.obj = document.createElement("a-entity")

    for(let i = 0; i < 40; i++){
      let ball = document.createElement("a-sphere");
      ball.setAttribute("radius","0.3");
	  ball.setAttribute("dynamic-body","");
      let r = Math.floor(rnd(0,255));
      let g = Math.floor(rnd(0,255));
      let b = Math.floor(rnd(0,255));
      ball.setAttribute("color",`rgb(${r},${g},${b})`);
	  ball.setAttribute("position",{x:Math.floor(rnd(-2,2)),y:Math.floor(rnd(1,4)),z:Math.floor(rnd(0,4))});
	  this.obj.append(ball)
    }

    for(let i = 0; i < 3; i++){
      let walls = document.createElement("a-cylinder");
      walls.setAttribute("position",{x:0,y:0 + 1 + (i * 0.5),z:0});
      walls.setAttribute("rotation",{x:0,y:0,z:90});
      walls.setAttribute("radius",0.35);
      walls.setAttribute("color","yellow")
      walls.setAttribute("height",5);
	  walls.setAttribute("static-body","");
      this.obj.append(walls)
    }
	
    for(let i = 0; i < 3; i++){
      let walls2 = document.createElement("a-cylinder");
      walls2.setAttribute("position",{x:2.8,y:0 + 1 + (i * 0.5),z:2.5});
      walls2.setAttribute("rotation",{x:0,y:90,z:90});
      walls2.setAttribute("radius",0.35);
      walls2.setAttribute("color","yellow")
      walls2.setAttribute("height",5.5);
	  walls2.setAttribute("static-body","");
      this.obj.append(walls2)
    }
	
    for(let i = 0; i < 3; i++){
      let walls3 = document.createElement("a-cylinder");
      walls3.setAttribute("position",{x:0,y:0 + 1 + (i * 0.5),z:5});
      walls3.setAttribute("rotation",{x:0,y:0,z:90});
      walls3.setAttribute("radius",0.35);
      walls3.setAttribute("color","yellow")
      walls3.setAttribute("height",5);
	  walls3.setAttribute("static-body","");
      this.obj.append(walls3)
    }
	
    for(let i = 0; i < 3; i++){
      let walls4 = document.createElement("a-cylinder");
      walls4.setAttribute("position",{x:-2.8,y:0 + 1 + (i * 0.5),z:2.5});
      walls4.setAttribute("rotation",{x:0,y:90,z:90});
      walls4.setAttribute("radius",0.35);
      walls4.setAttribute("color","yellow")
      walls4.setAttribute("height",5.5);
	  walls4.setAttribute("static-body","");
      this.obj.append(walls4)
    }

    this.obj.setAttribute("position",{x:x,y:y,z:z});
    scene.append(this.obj);

  }
}