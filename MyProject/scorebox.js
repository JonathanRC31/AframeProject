class Scorebox{
  constructor(x,y,z){
    this.obj = document.createElement("a-box")
	this.obj.setAttribute("static-body","");
    let r = Math.floor(rnd(0,255));
    let g = Math.floor(rnd(0,255));
    let b = Math.floor(rnd(0,255));
    this.obj.setAttribute("color",`rgb(${r},${g},${b})`);
    this.obj.setAttribute("height",0.3);
    this.obj.setAttribute("width",1);
    this.obj.setAttribute("depth",1.5);
    this.obj.setAttribute("position",{x:x,y:y,z:z});
    scene.append(this.obj);
  }
  size(xw, yh, zd){
    this.obj.setAttribute("height",xw);
    this.obj.setAttribute("width",yh);
    this.obj.setAttribute("depth",zd);
  }
}