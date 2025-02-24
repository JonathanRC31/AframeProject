class Cup{
  constructor(x,y,z){
    this.obj = document.createElement("a-cylinder")
	this.obj.setAttribute("dynamic-body","");
    let r = Math.floor(rnd(0,255));
    let g = Math.floor(rnd(0,255));
    let b = Math.floor(rnd(0,255));
    this.obj.setAttribute("color",`rgb(${r},${g},${b})`);
    this.obj.setAttribute("radius",0.25);
	this.obj.setAttribute("height",0.5);
		
    this.obj.setAttribute("position",{x:x,y:y,z:z});
    scene.append(this.obj);
  }
}