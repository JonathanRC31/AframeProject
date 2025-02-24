class Mole{
  constructor(x,y,z){
    this.obj = document.createElement("a-entity")
	this.obj.setAttribute("static-body","");
	
    let sphere = document.createElement("a-sphere");
    sphere.setAttribute("radius","0.7");
    sphere.setAttribute("color","black");
	this.obj.append(sphere)
	

	
    this.obj.setAttribute("position",{x:x,y:y,z:z});
    scene.append(this.obj);
  }
}