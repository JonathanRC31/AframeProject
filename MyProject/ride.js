class Ride{
  constructor(x,y,z){
    this.obj = document.createElement("a-entity")
	this.obj.setAttribute("static-body","");
    let r = Math.floor(rnd(0,255));
    let g = Math.floor(rnd(0,255));
    let b = Math.floor(rnd(0,255));
	
    for(let i = 0; i < 2; i++){
      let base = document.createElement("a-box");
      base.setAttribute("position",{x:0,y:0.3 + (i * 4),z:0});
	  base.setAttribute("width",5);
	  base.setAttribute("height",0.6);
	  base.setAttribute("depth",5);
      base.setAttribute("color",`rgb(${r},${g},${b})`);
	  this.obj.append(base)
    }
	
    for(let i = 0; i < 2; i++){
      let beam = document.createElement("a-cylinder");
      beam.setAttribute("position",{x:2 + (-i * 4),y:2.5,z:2.5});
      beam.setAttribute("radius",0.15);
      beam.setAttribute("color","gray")
      beam.setAttribute("height",4);
      beam.setAttribute("rotation",{x:-20,y:0,z:0});
      this.obj.append(beam)
    }
	
    for(let i = 0; i < 2; i++){
      let backBeam = document.createElement("a-cylinder");
      backBeam.setAttribute("position",{x:2 + (-i * 4),y:2.5,z:-2.5});
      backBeam.setAttribute("radius",0.15);
      backBeam.setAttribute("color","gray")
      backBeam.setAttribute("height",4);
	  backBeam.setAttribute("rotation",{x:20,y:0,z:0});
      this.obj.append(backBeam)
    }
	
    for(let i = 0; i < 2; i++){
      let back = document.createElement("a-box");
      back.setAttribute("position",{x:0,y:0.7,z:-3 * ((-i+0.5)*2)});
	  back.setAttribute("width",5);
	  back.setAttribute("height",1.5);
	  back.setAttribute("depth",0.8);
      back.setAttribute("color",`rgb(${r},${g},${b})`);
	  back.setAttribute("rotation",{x:120 * (i+1),y:0,z:0});
      this.obj.append(back)
    }

    for(let i = 0; i < 2; i++){
      let wall = document.createElement("a-box");
      wall.setAttribute("position",{x:2.45 * ((i-0.5)*-2),y:1,z:0});
	  wall.setAttribute("width",7);
	  wall.setAttribute("height",0.8);
	  wall.setAttribute("depth",0.1);
      wall.setAttribute("color",`rgb(${r},${g},${b})`);
	  wall.setAttribute("rotation",{x:0,y:90,z:0});
      this.obj.append(wall)
    }
	
	this.obj.setAttribute("scale",{x:0.8,y:0.8,z:0.8});
    this.obj.setAttribute("position",{x:x,y:y,z:z});
    this.obj.setAttribute("rotation",{x:0,y:90,z:0});
    scene.append(this.obj);

  }
}