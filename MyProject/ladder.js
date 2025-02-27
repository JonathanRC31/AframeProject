class Ladder{
  constructor(x,y,z){
    this.obj = document.createElement("a-entity")

    for(let i = 0; i < 3; i++){
      let walls = document.createElement("a-cylinder");
      walls.setAttribute("position",{x:0,y:0 + 1 + (i * 0.5),z:0});
      walls.setAttribute("rotation",{x:0,y:0,z:90});
      walls.setAttribute("radius",0.15);
      walls.setAttribute("color","blue")
      walls.setAttribute("height",2);
      walls.setAttribute("static-body","");
      this.obj.append(walls)
    }
	
    for(let i = 0; i < 2; i++){
      let beam = document.createElement("a-cylinder");
      beam.setAttribute("position",{x:2 + (-i * 2),y:2,z:2});
      beam.setAttribute("radius",0.15);
      beam.setAttribute("color","gray")
      beam.setAttribute("height",4);
      beam.setAttribute("static-body","");
      this.obj.append(beam)
    }

    this.obj.setAttribute("position",{x:x,y:y,z:z});
    scene.append(this.obj);

  }
}
