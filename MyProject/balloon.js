class Balloon{
  constructor(x,y,z){
    this.obj = document.createElement("a-entity")
	this.obj.setAttribute("static-body","");
	this.visible = true;
	
    let sphere = document.createElement("a-sphere");
    sphere.setAttribute("radius","0.6");
    let r = Math.floor(rnd(0,255));
    let g = Math.floor(rnd(0,255));
    let b = Math.floor(rnd(0,255));
    sphere.setAttribute("color",`rgb(${r},${g},${b})`);
	this.obj.append(sphere)
	
	let handle = document.createElement("a-cylinder");
    handle.setAttribute("position",{x:0,y:-1,z:0});
    handle.setAttribute("radius",0.05);
    handle.setAttribute("color","white")
	handle.setAttribute("height",2);
	this.obj.append(handle)
		
    this.obj.setAttribute("position",{x:x,y:y,z:z});
    scene.append(this.obj);
  }
  scale(size){
    this.obj.setAttribute("scale",{x:size,y:size,z:size});
  }
}