"use strict";





//ImagePlay function

let ImagePlayImageArray = [];
let ImagePlayNameArray = [];

AddWebsiteContent();
//Add DOM element function
function AddWebsiteContent() {
    let div = document.createElement("div");
    div.innerHTML =
        `
    <div id="ImageRollWrapper">
        <div id="ImageRollCell">
            <div id="ImageRollBackward">Previous Slide</div>
            <div id="ImageRoll"></div>
            <div id="ImageRollPhotoForward">Next Slide</div>
        </div>
    <p id="NameOfImageRoll">ImagePlayNameArray[number]</p>
    </div>
    
    
    <div id="PluggaWrapper">
        <p>sugen på att plugga?</p>
        <button id="MainPageButton">Klicka här!</button>
        
    </div>
    
  

    <div id="ReviewWrapper">
      <p>Se vad andra studender tycker!</p>
      <div id="ReviewCellWrapper">

        <div class="ReviewCell">
          <p id="ReviewProgramCity">Medical, Madrid</p>
          <p id="ReviewText"> All is good</p>
          <div id="ReviewNameDate">Sten, David, 10/02/2020</div>
            <div id="ReviewStars">    
               <div class="ReviewStarShapes"></div>
               <div class="ReviewStarShapes"></div>
               <div class="ReviewStarShapes"></div>
            </div>
  
     </div>
   
     <div class="ReviewCell">
          <p id="ReviewProgramCity">Medical, Madrid</p>
          <p id="ReviewText"> All is good</p>
          <div id="ReviewNameDate">Sten, David, 10/02/2020</div>
            <div id="ReviewStars">    
               <div class="ReviewStarShapes"></div>
               <div class="ReviewStarShapes"></div>
               <div class="ReviewStarShapes"></div>
            </div>
      
</div>
   
   
   


    `

    document.querySelector("main").append(div)
}






GetDBImages(DB);
function GetDBImages(db, number = 0){
  
   
    
    db.CITIES.forEach(function(element){
        ImagePlayImageArray.push(element.imagesNormal[0])
    })

    document.querySelector("#ImageRoll").style.backgroundImage = `url(ImagePlayImageArray[number])`;
  
}

// NameOfImageRoll needs to change per city



//Previous picture function
document.querySelector("#ImageRollBackward").addEventListener("click", function () {
    GetDBImages(DB, number)
})

//Next picture function
document.querySelector("#ImageRollPhotoForward").addEventListener("click", function () {
    GetDBImages(DB, number)
})
