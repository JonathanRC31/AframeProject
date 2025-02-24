class Game1{
  constructor(x,y,z){
    this.obj = document.createElement("a-entity")
	
    let platform = document.createElement("a-box");
	platform.setAttribute("static-body","");
    platform.setAttribute("position",{x:0,y:6,z:-1});
	platform.setAttribute("width",0.5);
	platform.setAttribute("height",0.1);
	platform.setAttribute("depth",0.5);
    platform.setAttribute("color","gray");
	this.obj.append(platform);
	
    let roof = document.createElement("a-box");
	roof.setAttribute("static-body","");
    roof.setAttribute("position",{x:0,y:7.5,z:-1});
	roof.setAttribute("width",6);
	roof.setAttribute("height",0.1);
	roof.setAttribute("depth",1.8);
    roof.setAttribute("color","gray");
	this.obj.append(roof);
	
    let back = document.createElement("a-box");
	back.setAttribute("static-body","");
    back.setAttribute("position",{x:0,y:4,z:-2.2});
	back.setAttribute("width",6);
	back.setAttribute("height",7);
	back.setAttribute("depth",0.5);
    back.setAttribute("color","black");
	this.obj.append(back);
	
    let glass = document.createElement("a-box");
	glass.setAttribute("static-body","");
    glass.setAttribute("position",{x:0,y:3,z:0});
	glass.setAttribute("width",6);
	glass.setAttribute("height",7.5);
	glass.setAttribute("depth",0.2);
    glass.setAttribute("color","cyan");
    glass.setAttribute("opacity",0.5);
	this.obj.append(glass);
	
    for(let i = 0; i < 2; i++){
      let walls = document.createElement("a-box");
	  walls.setAttribute("static-body","")
      walls.setAttribute("position",{x:3 + (-i * 6),y:4,z:-1.3});
      walls.setAttribute("color","gray");
      walls.setAttribute("height",7);
      walls.setAttribute("depth",2.5);
      walls.setAttribute("width",0.5);
      this.obj.append(walls);
    }
	
//Bumps
    for(let i = 0; i < 6; i++){
      let bumps1 = document.createElement("a-cylinder");
	  bumps1.setAttribute("static-body","");
      bumps1.setAttribute("position",{x:2 + (-i * 0.8 ),y:5,z:-1});
      bumps1.setAttribute("radius",0.15);
      bumps1.setAttribute("rotation",{x:90,y:0,z:0});
      bumps1.setAttribute("color","gray")
      bumps1.setAttribute("height",1.5);
      this.obj.append(bumps1);
    }
    for(let i = 0; i < 7; i++){
      let bumps2 = document.createElement("a-cylinder");
	  bumps2.setAttribute("static-body","");
      bumps2.setAttribute("position",{x:2.45 + (-i * 0.82 ),y:4,z:-1});
      bumps2.setAttribute("radius",0.15);
      bumps2.setAttribute("rotation",{x:90,y:0,z:0});
      bumps2.setAttribute("color","gray")
      bumps2.setAttribute("height",1.5);
      this.obj.append(bumps2);
    }
    for(let i = 0; i < 6; i++){
      let bumps3 = document.createElement("a-cylinder");
	  bumps3.setAttribute("static-body","");
      bumps3.setAttribute("position",{x:2 + (-i * 0.8 ),y:3,z:-1});
      bumps3.setAttribute("radius",0.15);
      bumps3.setAttribute("rotation",{x:90,y:0,z:0});
      bumps3.setAttribute("color","gray")
      bumps3.setAttribute("height",1.5);
      this.obj.append(bumps3);
    }
    for(let i = 0; i < 7; i++){
      let bumps4 = document.createElement("a-cylinder");
	  bumps4.setAttribute("static-body","");
      bumps4.setAttribute("position",{x:2.45 + (-i * 0.82 ),y:2,z:-1});
      bumps4.setAttribute("radius",0.15);
      bumps4.setAttribute("rotation",{x:90,y:0,z:0});
      bumps4.setAttribute("color","gray")
      bumps4.setAttribute("height",1.5);
      this.obj.append(bumps4);
    }

    


    this.obj.setAttribute("position",{x:x,y:y,z:z});
    scene.append(this.obj);
  }
}