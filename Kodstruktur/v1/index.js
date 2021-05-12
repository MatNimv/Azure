"use strict";

AddWebsiteContent();

function AddWebsiteContent() {
    let div = document.createElement("div");
    div.innerHTML =
        `
    <div id="ImageRollWrapper">
    <div id="imageRollBackward">Previous Slide</div>
    <div id="ImageRoll"></div>
    <div id="imageRollPhotoForward">Next Slide</div>
    </div>
    
    <p id="NameOfImageRoll">NamnpåBild</p>
    <div id="PluggaWrapper">
        <p>sugen på att plugga?</p>
        <button id="MainPageButton">Klicka här!</button>
    </div>
    
    <p>Se vad andra studender tycker!</p>

    <div id="ReviewWrapper">
        <div>review here</div>
        <div>review here</div>
        <div>review here</div>
        <div>review here</div>
        <div>review here</div>
        <div>review here</div>
</div>
    `

    document.querySelector("main").append(div)
}