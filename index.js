let model = document.getElementById("model");
function rename(name){
 let modelname = model.dataset;
 let nameoutput = document.getElementById("title"); 
  nameoutput.textContent = name;
  modelname.title = name;
}
function himawari(){
  rename("himawari");
  model.src = "himawari.glb";
  model.removeAttribute("camera-orbit");
  model.removeAttribute("poster");
  model.setAttribute("camrea-orbit","87.96deg 81.99deg 1.968m") ;
  model.setAttribute("poster","himawari.webp");
}
function Bero_Cat(){
  rename("Bero_Cat");
  model.src = "Bero_Cat.glb";
  model.removeAttribute("camera-orbit");
  model.removeAttribute("poster");
  model.setAttribute("camrea-orbit","92.56deg 90.54deg 0.4856m") ;
  model.setAttribute("poster","Bero_Cat.webp");
}
function CAT(){
  rename("CAT");
  model.src = "CAT.glb";
  model.removeAttribute("camera-orbit");
  model.removeAttribute("poster");
  model.setAttribute("camrea-orbit","123.5deg 83.16deg 5.087m") ;
  model.setAttribute("poster","CAT.webp");
}
function Japan_Boy(){
  rename("Japan_Boy");
  model.src = "Japan_Boy.glb";
  model.removeAttribute("camera-orbit");
  model.removeAttribute("poster");
  model.setAttribute("camrea-orbit","94.37deg 82.57deg 3.115m") ;
  model.setAttribute("poster","Japan_Boy.webp");
}
function Artist_face(){
  rename("Artist_face");
  model.src = "Artist_face.glb";
  model.removeAttribute("camera-orbit");
  model.removeAttribute("poster");
  model.setAttribute("camrea-orbit","450.4deg 90.73deg 1.785m") ;
  model.setAttribute("poster","Artist_face.webp");
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
