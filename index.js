let model = document.getElementById("model");
function rename(name){
 let modelname = model.dataset;
 let nameoutput = document.getElementById("title"); 
  nameoutput.textContent = name;
  modelname.title = name;
}
function Cat(){
  rename("Cat");
  model.src = "https://raw.githubusercontent.com/roistaff/Starman/main/Cat.glb";
  model.getAttribute("camrea-orbit") = "86.8deg 77.91deg 1.155m" ;
  model.getAttribute("poster") = "https://raw.githubusercontent.com/roistaff/Starman/main/Cat.webp";
}

function Starman(){
  rename("Starman");
  model.src = "https://raw.githubusercontent.com/roistaff/Starman/main/Starman.glb";
  model.getAttribute("camrea-orbit") = "96.7deg 81.99deg 64.82m" ;
  model.getAttribute("poster") = "https://raw.githubusercontent.com/roistaff/Starman/main/Starman.webp";
}
function main(){
   let modelname = model.dataset.title;
  rename(modelname);
}
window.onload = main ;
