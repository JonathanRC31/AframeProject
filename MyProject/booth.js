class Booth{
  constructor(x,y,z){
    this.obj = document.createElement("a-entity")
	
    for(let i = 0; i < 2; i++){
      let base = document.createElement("a-box");
      base.setAttribute("position",{x:0,y:0.5 + (i * 4),z:0});
	  base.setAttribute("width",5);
	  base.setAttribute("height",0.95);
	  base.setAttribute("depth",5);
      base.setAttribute("color","red");
	  base.setAttribute("static-body","");
	  //base.setAttribute("source","carnivalDrape.jpg");
	  this.obj.append(base)
    }
	
    for(let i = 0; i < 2; i++){
      let beam = document.createElement("a-cylinder");
      beam.setAttribute("position",{x:2 + (-i * 4),y:2,z:2});
      beam.setAttribute("radius",0.15);
      beam.setAttribute("color","gray")
      beam.setAttribute("height",4);
	  beam.setAttribute("static-body","");
      this.obj.append(beam)
    }
	
    let back = document.createElement("a-box");
    back.setAttribute("position",{x:0,y:2.5,z:-2.2});
	back.setAttribute("width",5);
	back.setAttribute("height",3);
	back.setAttribute("depth",0.5);
    back.setAttribute("color","red");
	back.setAttribute("static-body","");
	this.obj.append(back)
	
	
	this.obj.setAttribute("scale",{x:1.2,y:1.2,z:1.2});
    this.obj.setAttribute("position",{x:x,y:y,z:z});
    scene.append(this.obj);

  }
}