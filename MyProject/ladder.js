class Ladder{
  constructor(x,y,z){
    this.obj = document.createElement("a-entity")

    for(let i = 0; i < 3; i++){
      let walls = document.createElement("a-cylinder");
      walls.setAttribute("position",{x:0,y:0 + 1 + (i * 0.5),z:0});
      walls.setAttribute("rotation",{x:0,y:0,z:90});
      walls.setAttribute("radius",0.15);
      walls.setAttribute("color","blue")
      walls.setAttribute("height",5);
	    walls.setAttribute("static-body","");
      this.obj.append(walls)
    }
	


    this.obj.setAttribute("position",{x:x,y:y,z:z});
    scene.append(this.obj);

  }
}
