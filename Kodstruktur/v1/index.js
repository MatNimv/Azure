"use strict";



//CSS Implement
/*
const cssArray = ["css/courses.css", "css/nav.css", "css/students.css", "css/style.css", "https://fonts.googleapis.com/css2?family=Raleway:wght@200&display=swap"];



cssArray.forEach(function (element) {
    let linkSheet = document.createElement("link");
    linkSheet.rel = "stylesheet"
    linkSheet.type = "text/css"
    linkSheet.href = element
    //Applies whats inside the  array into href

    //Selects all elements that have head as tag name and selects the first one
    document.getElementsByTagName("head")[0].append(linkSheet)
})
*/




//ImagePlay function

let ImagePlayArray = [];

let ImageIndex = 0;

//Creates website elements save reviews
AddWebsiteContent();
//Add DOM element function
function AddWebsiteContent() {
    let div = document.createElement("div");
    div.innerHTML =
        `
        <div id="SideAdsLeft">PLACEHOLDERTEXT</div>
        <div id="SideAdsRight">PLACEHOLDERTEXT</div>
    
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
    <div id="NameOfImageRoll">
    <p></p>
    </div>
    </div>

    <div id="MiddleAds">PLACEHOLDERTEXT</div>

    <div id="PluggaWrapper">
        <p>Sugen på att plugga?</p>
        <button id="MainPageButton">Klicka här!</button>
        <p>Se vad andra studender tycker!</p>
    </div>
    <div id="ReviewWrapper">
      
      <div id="ReviewCellWrapper">

      </div>
    </div>
</div>
    `


    document.querySelector("main").append(div)

}

//Creates the elements for the reviews
function ReviewCreator(ReviewProgramCityName, ReviewText, Ratings, ProgramName, ProgramText, ProgramRatings, ReviewNameDate, ProgramReviewName) {
    let ReviewCell = document.createElement("div");
    ReviewCell.classList.add("ReviewCell");
    ReviewCell.innerHTML =
        `
    <p id="ReviewProgramCityName">${ReviewProgramCityName}</p>
    <p id="ReviewText">${ReviewText}</p>
    <div id="ReviewNameDate">${ReviewNameDate}</div>

    <div id="ReviewStarsSection1">
        <p class="RatingTitle">Outside Activities</p>    

     </div>

      <div id="ReviewStarsSection2"> 
        <p class="RatingTitle">Food</p>   

      </div>

      <div id="ReviewStarsSection3">   
         <p class="RatingTitle">Accomodation</p> 
      </div>
`
    let ReviewCellProgram = document.createElement("div");
    ReviewCellProgram.classList.add("ReviewCell");
    ReviewCellProgram.innerHTML =
        `
    <p id="ProgramName">${ProgramName}</p>
    <p id="ProgramText">${ProgramText}</p>
    <div id="ProgramReviewName">${ProgramReviewName}</div>

    <div id="ProgramStarsSection1">
        <p class="RatingTitle">Teachers</p>    

     </div>

      <div id="ProgramStarsSection2"> 
        <p class="RatingTitle">Students</p>   

      </div>

      <div id="ProgramStarsSection3">   
         <p class="RatingTitle">Courses</p> 

      </div>
`   
    document.querySelector("#ReviewCellWrapper").innerHTML = "";
    document.querySelector("#ReviewCellWrapper").append(ReviewCell, ReviewCellProgram)

    // For loops for city review stars ------------------
    if(Ratings){
        for (let i = 0; i < Ratings.out; i++) {
            let ReviewSection1 = document.createElement("div");
            ReviewSection1.innerHTML = `<img src="../../Kodstruktur/Filer/Images/star.png">`
            document.querySelector("#ReviewStarsSection1").append(ReviewSection1);
            ReviewSection1.classList.add("ReviewStarShape");
        }
    
        for (let i = 0; i < Ratings.food; i++) {
            let ReviewSection1 = document.createElement("div");
            ReviewSection1.innerHTML = `<img src="../../Kodstruktur/Filer/Images/star.png">`
            document.querySelector("#ReviewStarsSection2").append(ReviewSection1);
            ReviewSection1.classList.add("ReviewStarShape");
        }
    
        for (let i = 0; i < Ratings.accomodation; i++) {
            let ReviewSection1 = document.createElement("div");
            ReviewSection1.innerHTML = `<img src="../../Kodstruktur/Filer/Images/star.png">`
            document.querySelector("#ReviewStarsSection3").append(ReviewSection1);
            ReviewSection1.classList.add("ReviewStarShape");
        }
    }else{
        document.querySelector("#ReviewNameDate").innerText = "";
        document.querySelector("#ReviewStarsSection1").innerText = "";
        document.querySelector("#ReviewStarsSection2").innerText = "";
        document.querySelector("#ReviewStarsSection3").innerText = "";
    }





    // For loops for program review stars ------------------
    for (let i = 0; i < ProgramRatings.teachers; i++) {
        let ReviewSection1 = document.createElement("div");
        ReviewSection1.innerHTML = `<img src="../../Kodstruktur/Filer/Images/star.png"></img>`
        document.querySelector("#ProgramStarsSection1").append(ReviewSection1);
        ReviewSection1.classList.add("ReviewStarShape");
    }

    for (let i = 0; i < ProgramRatings.students; i++) {
        let ReviewSection1 = document.createElement("div");
        ReviewSection1.innerHTML = `<img src="../../Kodstruktur/Filer/Images/star.png"></img>`
        document.querySelector("#ProgramStarsSection2").append(ReviewSection1);
        ReviewSection1.classList.add("ReviewStarShape");
    }

    for (let i = 0; i < ProgramRatings.courses; i++) {
        let ReviewSection1 = document.createElement("div");
        ReviewSection1.innerHTML = `<img src="../../Kodstruktur/Filer/Images/star.png"></img>`
        document.querySelector("#ProgramStarsSection3").append(ReviewSection1);
        ReviewSection1.classList.add("ReviewStarShape");
    }


}

//Grabs images for imageplay
GetDBImages();
function GetDBImages() {

    DB.CITIES.forEach(function (element) {
        ImagePlayArray.push({
            image: element.imagesNormal[0],
            name: element.name,
            id: element.id
        })

    })

    //Display image
    //Use quotation marks to avoid the spaces 
    document.querySelector("#ImageRoll").style.backgroundImage = `url("../Filer/Images/${ImagePlayArray[ImageIndex].image}")`;

    //Display Text
    document.querySelector("#NameOfImageRoll").innerText = `${ImagePlayArray[ImageIndex].name}`
}



//Previous picture function
document.querySelector("#ImageRollBackward").addEventListener("click", function () {
    if (ImageIndex <= 0) ImageIndex = ImagePlayArray.length;
    ImageIndex--
    GetDBImages()
    BestReviewFetcher()
})

//Next picture function
document.querySelector("#ImageRollPhotoForward").addEventListener("click", function () {
    if (ImageIndex >= ImagePlayArray.length - 1)
        ImageIndex = -1;
    ImageIndex++
    GetDBImages()
    BestReviewFetcher()
})

//Main button to info
document.querySelector("#MainPageButton").addEventListener("click", function () {
    location.href = 'info.html'
})



BestReviewFetcher()

function BestReviewFetcher() {

    let CurrentCity = DB.CITIES.find(function (cityobj) {
        return cityobj.id === ImagePlayArray[ImageIndex].id
    })



    // Function City, Name of city, review stars
    let RatingCityCombo = DB.COMMENTS_CITY.filter(function (city) {
        return city.cityID === CurrentCity.id;
    });



    //Function Program, Name of program, review text, Name of reviewer, review stars
    let UniversityCityCombo = DB.UNIVERSITIES.filter(function (university) {
        return university.cityID === CurrentCity.id;
    });

    let Programs = DB.PROGRAMMES.filter(function (ProgrammeObj) {
        return UniversityCityCombo.find(function (UniversityObj) {
            return UniversityObj.id === ProgrammeObj.universityID;
        })

    })
    console.log(Programs)
    let CommentProgramsCombo = DB.COMMENTS_PROGRAMME.filter(function (CommentObj) {
        return Programs.find(function (ProgramObj) {
            return ProgramObj.id === CommentObj.programmeID;
        })
    })

    let BestProgram = Programs.find(function (programobj) {
        return programobj.id === CommentProgramsCombo[0].programmeID;
    })

    ReviewSorting(CommentProgramsCombo, RatingCityCombo)

    //Workaround for zero reveiw for city
    if(RatingCityCombo.length <= 0){
        ReviewCreator(CurrentCity.name, "No Review Found", undefined, BestProgram.name, CommentProgramsCombo[0].text, CommentProgramsCombo[0].stars, "" ,CommentProgramsCombo[0].alias )
    }else{
        ReviewCreator(CurrentCity.name, RatingCityCombo[0].text, RatingCityCombo[0].stars, BestProgram.name, CommentProgramsCombo[0].text, CommentProgramsCombo[0].stars,RatingCityCombo[0].alias,CommentProgramsCombo[0].alias)
    }


}

//Sorts best reviews to worst
function ReviewSorting(CommentProgramsCombo, CityReviewCombo) {
    CommentProgramsCombo.sort(function (element1, element2) {
        return (element2.stars.teachers + element2.stars.students + element2.stars.courses) - (element1.stars.teachers + element1.stars.students + element1.stars.courses)
    })
    CityReviewCombo.sort(function (element1, element2) {
        return (element2.stars.out + element2.stars.food + element2.stars.accomodation) - (element1.stars.out + element1.stars.food + element1.stars.accomodation)
    })
}