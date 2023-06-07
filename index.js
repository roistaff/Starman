let model = document.getElementById("model");
function rename(name){
 let modelname = model.dataset;
 let nameoutput = document.getElementById("title"); 
  nameoutput.textContent = name;
  modelname.title = name;
}
function Bero_Cat(){
  rename("Bero_Cat");
  model.src = "Bero_Cat.glb";
  model.removeAttribute("camera-orbit");
  model.removeAttribute("poster");
  model.setAttribute("camrea-orbit","92.56deg 90.54deg 0.4856m") ;
  model.setAttribute("poster","Bero_Cat.webp");
}
function Cat(){
  rename("Cat");
  model.src = "Cat.glb";
  model.removeAttribute("camera-orbit");
  model.removeAttribute("poster");
  model.setAttribute("camrea-orbit","86.8deg 77.91deg 1.155m")  ;
  model.setAttribute("poster","Cat.webp");
}

function Starman(){
  rename("Starman");
  model.src = "Starman.glb";
  model.removeAttribute("camera-orbit");
  model.removeAttribute("poster");
  model.setAttribute("camrea-orbit","96.7deg 81.99deg 64.82m")  ;
  model.setAttribute("poster","Starman.webp");
}
function main(){
   let modelname = model.dataset.title;
  rename(modelname);
}
window.onload = main ;
