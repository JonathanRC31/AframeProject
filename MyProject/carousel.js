class Carousel{
  constructor(x,y,z){
    this.r = 0;
    this.dr = 1;

    this.obj = document.createElement("a-entity")
	this.obj.setAttribute("static-body","");
	
	let base = document.createElement("a-cylinder");
	base.setAttribute("segments-radial",3);
	base.setAttribute("rotation",{x:-90,y:0,z:0});
	base.setAttribute("position",{x:0,y:5,z:-0.5});
	base.setAttribute("color","black")
	base.setAttribute("scale",{x:5,y:1,z:9})
	this.obj.append(base)
	
    for(let i = 0; i < 8; i++){
      let arm = document.createElement("a-cylinder");
      arm.setAttribute("position",{x:0,y:12,z:1});
      arm.setAttribute("rotation",{x:0,y:0,z:0 + 45 * i});
      arm.setAttribute("radius",0.35);
      arm.setAttribute("color","gray")
      arm.setAttribute("height",15);
      this.obj.append(arm)
    }
	
	let connector = document.createElement("a-cylinder");
    connector.setAttribute("position",{x:0,y:12,z:-0.25});
    connector.setAttribute("rotation",{x:90,y:0,z:0});
    connector.setAttribute("radius",0.5);
    connector.setAttribute("color",`rgb(59,59,59)`);
    connector.setAttribute("height",3.5);
	this.obj.append(connector)
	

	this.obj.setAttribute("scale",{x:1.6,y:1.6,z:1.6});
    this.obj.setAttribute("position",{x:x,y:y,z:z});
    scene.append(this.obj);

  }

  spin(){
    this.r += this.dr;
    this.setAttribute("rotation",{x:0, y:0, z: this.r});
  }


}
