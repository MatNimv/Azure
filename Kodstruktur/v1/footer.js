"use strict";

CreateFooter();

function CreateFooter(){
let div = document.createElement("div")
div.innerHTML = 
`
<div id="FooterTextWrapper">
<p id="OmOss">Lol här är text om oss</p>
</div>
<div id="SocialMediaWrapper">
<img id="FooterImgOne">
<img id="FooterImgOne">
<img id="FooterImgOne">
</div>
`

document.querySelector("footer").append(div)
};
