class Target{
  constructor(x,y,z){
    this.obj = targetTemplate.cloneNode(true);
	this.obj.setAttribute("static-body","");
	this.visible = true;

    this.z = 0;
    this.dz = 1;
    this.dx = 0.5;
	
    this.obj.setAttribute("position",{x:x,y:y,z:z});
    scene.append(this.obj);
  }
  spin(){
    if(this.z >= 0){
      this.z += this.dz;
    }
    this.obj.setAttribute("rotation",{x:this.x, y:this.y, z:this.z});
  }
  scale(size){
    this.obj.setAttribute("scale",{x:size,y:size,z:size});
  }
  route(){
    if(this.x == -27){
      this.x += this.dx;
    }
    if(this.x == -31){
      this.x -= this.dx;
    }
    this.obj.setAttribute("position",{x:this.x, y:this.y, z:this.z});
  }
}
