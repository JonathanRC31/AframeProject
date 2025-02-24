class scoreball{
  constructor(x,y,z){
    this.obj = document.createElement("a-sphere");
	this.obj.setAttribute("dynamic-body","");
	this.visible = true;
    this.obj.setAttribute("radius","0.2");
    this.obj.setAttribute("color","white");
    this.obj.setAttribute("position",{x:x,y:y,z:z});
    scene.append(this.obj);

  }
  scale(size){
    this.obj.setAttribute("scale",{x:size,y:size,z:size});
  }
}