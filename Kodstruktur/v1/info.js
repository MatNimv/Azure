"use strict";

//adderar CSSen som gäller för createProgramCard:en
/*let programCSS = document.createElement("link");
programCSS.setAttribute("href", "program.css");
document.querySelector("head").append(programCSS);
programCSS.setAttribute("rel", "stylesheet");
*/
//adderar CSSen som gäller för createUniversitiesCard:en


let mainWrapper = document.createElement("div");
mainWrapper.innerHTML = `
<nav>
    <button id="City">City</button>
    <button id="Program">Program</button>
    <button id="University">University</button>
</nav>
<div id="wrapper"></div>
`;
document.querySelector("main").append(mainWrapper);

function CollectAllCityInfo(databas) {
    let CityArray = [];
    

    databas.CITIES.forEach(element => {

        let CityCountryCombo = DB.COUNTRIES.find(function (country) {
            return country.id === element.countryID;
        });

        let RatingCityCombo = DB.COMMENTS_CITY.filter(function (city) {
            return city.cityID === element.id;
        });

        let UniversityCityCombo = DB.UNIVERSITIES.filter(function (university) {
            return university.cityID === element.id;
        });

        let EntertainmentCityCombo = DB.ENTERTAINMENT_PLACES.filter(function (entertainment) {
            return entertainment.cityID === element.id;
        });


        let StarsOutArray = RatingCityCombo.map(function (obj) {
            return obj.stars.out;
        })

        let StarsFoodArray = RatingCityCombo.map(function (obj) {
            return obj.stars.food;
        })

        let StarsAccomodationArray = RatingCityCombo.map(function (obj) {
            return obj.stars.accomodation;
        })

        let UniversitiesArray = UniversityCityCombo.map(function (obj) {
            return obj.name;
        })

        let EntertainmentArray = EntertainmentCityCombo.map(function (obj) {
            return obj.name;
        })

        let CityObject =
        {
            City: element.name,
            Country: CityCountryCombo.name,
            Flag: CityCountryCombo.flag,
            Stars: {
                StarsOut: StarsOutArray,
                StarsFood: StarsFoodArray,
                StarsAccomodation: StarsAccomodationArray
            },
            CityInfo: element.text,
            Universities: UniversitiesArray,
            Images: CityCountryCombo.imagesNormal[0],
            Entertainment: EntertainmentArray
        }
        
        CityArray.push(CityObject)
        
    })

    CityArray.sort((n1, n2) => n2.City < n1.City ? 1 : -1) //sorterar de i bokstavsordning
   
    return CityArray;

    /*namn på Stad och Land + landets flagga
    rating för boende / mat / uteliv
    informationstext om staden
    alla universitet för staden
    bild på stad
    en lista av alla aktiviteter i staden*/
}
console.log(CollectAllCityInfo(DB)) // kollar in stadsarrayerna

function CollectAllProgramInfo(databas) {
    let programArray = [];

    DB.PROGRAMMES.forEach(element => {

        let programLanguageCombo = DB.LANGUAGES.find(function (language) {
            return language.id === element.language;
        });

        let programeLevelCombo = DB.LEVELS.find(function (arrayOfLevels, index) {
            return index === element.level;
        });

        let ProgrammeUniversityCombo = DB.UNIVERSITIES.find(function (university) {
            return university.id === element.universityID;
        });


        let CommentProgramCombo = COMMENTS_PROGRAMME.filter(function (object) {
            return object.programmeID === element.id;
        })

        let CommentTextArray = CommentProgramCombo.map(function (obj) {
            return obj.text;
        })


        let CommentNameArray = CommentProgramCombo.map(function (obj) {
            return obj.alias;
        })

        let CommentDateArray = CommentProgramCombo.map(function (obj) {
            return obj.date;
        })

        let RatingTeachersArray = CommentProgramCombo.map(function (obj) {
            return obj.stars.teachers;
        })

        let RatingStudentsArray = CommentProgramCombo.map(function (obj) {
            return obj.stars.students;
        })

        let RatingCoursesArray = CommentProgramCombo.map(function (obj) {
            return obj.stars.courses;
        })


        let programObject =
        {
            Program: element.name,
            Language: programLanguageCombo.name,
            Level: programeLevelCombo,
            University: ProgrammeUniversityCombo.name,
            Ratings: {
                RatingTeachers: RatingTeachersArray,
                RatingStudents: RatingStudentsArray,
                RatingCourses: RatingCoursesArray,
            },
            SuccessRate: element.successRate,
            Review: {
                ReviewText: CommentTextArray,
                ReviewName: CommentNameArray,
                ReviewDate: CommentDateArray
            },
        }

        programArray.push(programObject)
    })
    /* namn på pogram
    språk / level / unversitet som erbjuder programmet
    ratings på studenter / lärare / kurser
    avklaringsgrad - år + procent
    en lista av alla recensioner (recenionen + namn, efternamn, datum) */

    return programArray;
}

CollectAllUniversityInfo();
function CollectAllUniversityInfo() {
    let UniversityArray = [];
    let filteredLanguageArray = [];
    let languageArray = [];


    DB.UNIVERSITIES.forEach(element => {

        let UniversityCityCombo = DB.CITIES.find(function (city) {
            return city.id === element.cityID;
        });

        let UniversityCountryCombo = DB.COUNTRIES.find(function (country) {
            return country.id === UniversityCityCombo.countryID;
        });

        let UniversityProgrammeCombo = DB.PROGRAMMES.filter(function (programme) {
            return programme.universityID === element.id;
        });
        
        let UniversityProgrammeArray = UniversityProgrammeCombo.map(function(obj){
            return obj;
        })

        let ProgrammeLanguageCombo = DB.LANGUAGES.filter(function (speech) {
            return speech.id === UniversityProgrammeArray.language;
        });

        let LanguageArray = ProgrammeLanguageCombo.map(function(obj){
            return obj.name;
        })
        //console.log(LanguageArray)

        let universityObject =
        {
            University: element.name,
            Flag: UniversityCountryCombo.flag,
            City: UniversityCityCombo.name,
            Language: LanguageArray,
            Images: UniversityCountryCombo.imagesBig[0],
            Programmes: UniversityProgrammeArray
        }

       
        //Universitetets namn + flagga
        //stad och språk för programmen
        //lista över programnman för universitetet
        //STORRRR bild (stadsbild)
       

        UniversityArray.push(universityObject)
        //console.log(UniversityArray)
    })
    console.log("University")
    return UniversityArray;
}



//denna är klar förutom alla programnamn och bilder.
function ShowUniversities(){
    document.querySelector("#wrapper").innerHTML = "";
CollectAllUniversityInfo(DB).forEach(universityCard => {
    
    let createUniversityCard = document.createElement("div");
    createUniversityCard.classList.add("createUniversityCard");
    document.getElementById("wrapper").append(createUniversityCard);

    createUniversityCard.innerHTML = `
        <h1>${universityCard.University}<img src="../Filer/Images/${universityCard.Flag}"></h1>
        <div class="universityContent">
            <div><img src="../Filer/Images/${universityCard.Images}"></div>
            <div class="infoOchProgram">
                <div class="stadOchSprak">
                    <div>${universityCard.City}</div>
                    <div>Spåk/Språk</div>
                </div>
                <p>Program:</p>
                <div class="allaProgram">
                    <div>${universityCard.Programmes[0].name} (ska skriva ut alla)</div>
                </div>
            </div>
        </div>
    `;
})
}

//tillsvidare. Denna är klar förutom reviews som endast visar 1 åt gången.
function ShowProgram(){
    document.querySelector("#wrapper").innerHTML = "";

CollectAllProgramInfo(DB).forEach(programCard => {
  
    let createProgramCard = document.createElement("div");
    createProgramCard.classList.add("createProgramCard");
    document.getElementById("wrapper").append(createProgramCard);

    createProgramCard.innerHTML = 
    `
        <h1>${programCard.Program}</h1>
        <div class="infoProgram">
            <div>${programCard.Language}</div>
            <div>${programCard.Level}</div>
            <div>${programCard.University}</div>
        </div>
        <div class="studentRatings">
            <div>Tidigare studenters betyg:</div>
            <p><img src="../../Kodstruktur/Filer/Images/star.png">3,6<span>(Lärarna)</span></p>
            <p><img src="../../Kodstruktur/Filer/Images/star.png">3,6<span>(Klasskamrater)</span></p>
            <p><img src="../../Kodstruktur/Filer/Images/star.png">3,6<span>(Kurserna)</span></p>
        </div>
        <div class="successOchReview">
            <div class="successRateDiv">
                <h4>Avklaringsgrad</h4>
                <div class="nmbrOchYear">
                    <p><span>2020 </span><span> ${programCard.SuccessRate[0]}%</span></p>
                    <p><span>2019 </span><span> ${programCard.SuccessRate[1]}%</span></p>
                    <p><span>2018 </span><span> ${programCard.SuccessRate[2]}%</span></p>
                    <p><span>2017 </span><span> ${programCard.SuccessRate[3]}%</span></p>
                    <p><span>2016 </span><span> ${programCard.SuccessRate[4]}%</span></p>
                </div>
            </div>
            <div class="reviews">
                <div class="oneReview">
                    <p>${programCard.Review.ReviewText[0]}</p>
                    <p>${programCard.Review.ReviewName[0]}, ${programCard.Review.ReviewDate[0].year}, ${programCard.Review.ReviewDate[0].month}/${programCard.Review.ReviewDate[0].day}</p>
                </div>
            </div>
        </div>
`
});

}


// Här börjar kodning för stadssida


// här måste universitet fixas i innerHTML, vill att de ska uppstå enskilt i sina div:ar, samma sak gäller för entertainment places.


ShowCities()
function ShowCities(){
    document.querySelector("#wrapper").innerHTML = "";

    CollectAllCityInfo(DB).forEach(cityCard => {

        let createCityCard = document.createElement("div");
        document.querySelector("#wrapper").append(createCityCard);

        createCityCard.innerHTML = `
        <div class="cityCard">
            <h1 class="cityNames"> ${cityCard.City}, ${cityCard.Country} <img src="../Filer/Images/${cityCard.Flag}" class="flag"> </h1>
            <div class="ratingsByStudents"> 
                <p> Tidigare studenters betyg: </p>
                <p> "3,5"/5 (Boende)</p> 
                <p> "3,5"/5 (Mat)</p>
                <p> "3,5"/5 (Uteliv)</p>
            </div>
            <p class="cityText"> ${cityCard.CityInfo} </p>
            <div class="uniBoxes"> ${cityCard.Universities}</div>
            <div class="imageAndScroll">
                <img src="../Filer/Images/${cityCard.Images}">
                <div class="entertainmentPlaces"> 
                    <p>${cityCard.Entertainment}</p>
                </div>
            </div>
        </div>
        `   
    })
}



//CSS intro
let StyleCSS = document.createElement("link");
StyleCSS.setAttribute("href", `City.css`);
document.querySelector("head").append(StyleCSS);
StyleCSS.setAttribute("rel", "stylesheet");


//Checkbox Buttons
document.querySelector(`#City`).addEventListener("click", function(){
    StyleCSS.remove();
    let click = this.innerText;
    StyleCSS.setAttribute("href", `${click}.css`);
    document.querySelector("head").append(StyleCSS);
    StyleCSS.setAttribute("rel", "stylesheet");
    ShowCities()
})


document.querySelector(`#Program`).addEventListener("click", function(){
    StyleCSS.remove();
    let click = this.innerText;
    StyleCSS.setAttribute("href", `${click}.css`);
    document.querySelector("head").append(StyleCSS);
    StyleCSS.setAttribute("rel", "stylesheet");
    ShowProgram()
})


document.querySelector(`#University`).addEventListener("click", function(){
    StyleCSS.remove();
    let click = this.innerText;
    StyleCSS.setAttribute("href", `${click}.css`);
    document.querySelector("head").append(StyleCSS);
    StyleCSS.setAttribute("rel", "stylesheet");
    ShowUniversities()
})

