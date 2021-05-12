"use strict";





//ImagePlay function

let ImagePlayImageArray = [];
let ImagePlayNameArray = [];
let ImageIndex = 0;

AddWebsiteContent();
//Add DOM element function
function AddWebsiteContent() {
    let div = document.createElement("div");
    div.innerHTML =
        `
    <div id="ImageRollWrapper">
        <div id="ImageRollCell">
            <div class="ImageButtonHolder">
            <div id="ImageRollBackward">Previous Slide</div>
            </div>
            <div id="ImageRoll"></div>
            <div class="ImageButtonHolder">
            <div id="ImageRollPhotoForward">Next Slide</div>
            </div>
        </div>
    <p id="NameOfImageRoll"></p>
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




GetDBImages();
function GetDBImages(i){
    
    DB.CITIES.forEach(function(element){
        ImagePlayImageArray.push(element.imagesNormal[0])
        ImagePlayNameArray.push(element.name)
    })

    //Display image
    document.querySelector("#ImageRoll").style.backgroundImage = `url(../Filer/Images/${ImagePlayImageArray[ImageIndex]})`;

    //Display Text
    document.querySelector("#NameOfImageRoll").innerText = `${ImagePlayNameArray[ImageIndex]}`
}

// NameOfImageRoll needs to change per city

//Main button to info
document.querySelector("#MainPageButton").addEventListener("click", function(){
    location.href = 'info.html'
})

//Previous picture function
document.querySelector("#ImageRollBackward").addEventListener("click", function () {
    if(ImageIndex <= 0) ImageIndex = ImagePlayImageArray.length;
    ImageIndex--
    return GetDBImages(ImageIndex)
})

//Next picture function
document.querySelector("#ImageRollPhotoForward").addEventListener("click", function () {
    if(ImageIndex <= 0) ImageIndex = ImagePlayImageArray.length;
    ImageIndex++
    return GetDBImages(ImageIndex)
})
