const text=document.querySelector(".title")

function myFunctions() {
    document.getElementById("point").innerHTML = "Animation start";
   }

function myFunction() {
    document.getElementById("point").innerHTML = "Animation ended";
   }
text.addEventListener("animationend", myFunction);
text.addEventListener("animationstart", myFunctions);