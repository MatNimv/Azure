"use strict";

AddNavigation();
function AddNavigation(){
    let div = document.createElement("div")
   div.innerHTML = 
   `
   <div id="HomeNav">Home</div>
   <div id="InfoNav">Information</div>
   `

   document.querySelector("Header").append(div)
}



 