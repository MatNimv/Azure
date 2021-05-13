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


document.querySelector("#HomeNav").addEventListener("click", function(){
    location.href = 'index.html'
})

document.querySelector("#InfoNav").addEventListener("click", function(){
    location.href = 'info.html'
})
 