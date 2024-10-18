
function createpopup(id){
let popupNode=document.querySelector(id);
let overlay=popupNode.querySelector(".close");
function openpopup(){
    popupNode.classlist.add("active");

}
function closepopup(){
    popupNode.classlist.remove("active");

}
overlay.addEventListener("click", closepopup);
close.addEventListener("click", closepopup);
return openpopup;
}
let popup= createpopup("#popup");
document.querySelector("#open.popup").addEventListener("click",popup);