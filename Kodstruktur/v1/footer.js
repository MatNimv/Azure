"use strict";

CreateFooter();

function CreateFooter(){
let div = document.createElement("div")
div.innerHTML = 
`
<div id="FooterTextWrapper">
<p id="OmOss">Projektarbete av grupp Azure (PFW21)</p>
</div>
<div id="SocialMediaWrapper">
<img src="../../Kodstruktur/Filer/Images/facebooklogo.png">
<img src="../../Kodstruktur/Filer/Images/instagramlogo.png">
<img src="../../Kodstruktur/Filer/Images/twitterlogo.png">
</div>
`

document.querySelector("footer").append(div)
};
