class Ladder{
  constructor(x,y,z){
    this.obj = document.createElement("a-entity")

    for(let i = 0; i < 6; i++){
      let steps = document.createElement("a-cylinder");
      steps.setAttribute("position",{x:0,y:0 + 1 + (i * 0.5),z:0});
      steps.setAttribute("rotation",{x:0,y:0,z:90});
      steps.setAttribute("radius",0.75);
      steps.setAttribute("color","blue")
      steps.setAttribute("height",2);
      steps.setAttribute("static-body","");
      this.obj.append(steps)
    }
	
    for(let i = 0; i < 2; i++){
      let handles = document.createElement("a-cylinder");
      handles.setAttribute("position",{x:1 + (-i * 2),y:2,z:2});
      handles.setAttribute("radius",0.15);
      handles.setAttribute("color","gray")
      handles.setAttribute("height",4);
      handles.setAttribute("static-body","");
      this.obj.append(handles)
    }

    this.obj.setAttribute("position",{x:x,y:y,z:z});
    scene.append(this.obj);

  }
}
