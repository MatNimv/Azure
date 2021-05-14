"use strict";

let mainWrapper = document.createElement("div");
mainWrapper.innerHTML = `
<nav>
    <button id="City">City</button>
    <button id="Program">Program</button>
    <button id="University">University</button>
</nav>
<div id="searchDiv"><input id="searchBar" type="text" placeholder="search..."></div>
<div id="mainWrapper"></div>
`;
document.querySelector("main").append(mainWrapper);
document.querySelector(`#City`).click();

//Sökfunktion
function FilterSearch(keyName, CollectDB, ShowArrays){
    let data = {
        baseArray: CollectDB, //array som ska filtreras från collektfunktionen
        filterKey: keyName, //input som searchbaren utgår från
        filterLabelKey: "", //sökord
        DOMCreator: ShowArrays //vilken av collectfunktionerna som kallas
    }
    console.log(data);

let container = document.createElement("div");

container.classList.add("filter");
container.innerHTML = `
    <label>Search ${data.filterLabelName} by ${data.filterLabelKey}</label>`;

document.querySelector("#searchBar").addEventListener("keyup", function () {
    let input = document.querySelector("#searchBar").value;
    document.querySelector("#mainWrapper").innerHTML = "";

    //If input is empty it does nothing
    if (input.length <= 0) {
        return;
    }

    let filteredArray = data.baseArray.filter(element => {
        //If the array is the student array its the last name, if its the courses array its the course title and returns it
        //Element is either student or course array, filterkey is either lastname or title, is in brackets because its variable

        return element[data.filterKey].toLowerCase().includes(input.toLowerCase());
    })
    console.log(filteredArray);
    //Sorts lastname or coursename by ascending order
    filteredArray.sort(function (elementa, elementb) {
        if (elementa[data.filterKey] < elementb[data.filterKey]) {
            return -1
        } if (elementb[data.filterKey] < elementa[data.filterKey]) {
            return 1
        }
        return 0
    })

    //calls the function and it creates the element
    filteredArray.forEach(displayCity);
    document.getElementById("mainWrapper").append(data.DOMCreator(filteredArray));

});
return container;
}


CollectAllCityInfo(DB);
function CollectAllCityInfo(databas) {
    let CityArray = [];


    DB.CITIES.forEach(element => {

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

CollectAllProgramInfo(DB)
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
        console.log(CommentProgramCombo)

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
    programArray.sort((n1, n2) => n2.Program < n1.Program ? 1 : -1)
    /* namn på pogram
    språk / level / unversitet som erbjuder programmet
    ratings på studenter / lärare / kurser
    avklaringsgrad - år + procent
    en lista av alla recensioner (recenionen + namn, efternamn, datum) */
    return programArray;
}

CollectAllUniversityInfo(DB)
function CollectAllUniversityInfo(databas) {
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
    })
    UniversityArray.sort((n1, n2) => n2.City < n1.City ? 1 : -1)
    return UniversityArray;
}

//denna är klar förutom alla programnamn
function ShowUniversities(){
    document.querySelector("#mainWrapper").innerHTML = "";
CollectAllUniversityInfo(DB).forEach(universityCard => {
    
    let createUniversityCard = document.createElement("div");
    createUniversityCard.classList.add("createUniversityCard");
    document.getElementById("mainWrapper").append(createUniversityCard);
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
                
                </div>
            </div>
        </div>
    `;
    universityCard.Programmes.forEach(function(program){
        let oneProgramDiv = document.createElement("div");
        oneProgramDiv.innerHTML = `${program.name}`;
        oneProgramDiv.classList.add("oneProgram");
        document.querySelector(".allaProgram").append(oneProgramDiv)
        //console.log("ett program");
    })
})
}

//tillsvidare. Denna är klar förutom reviews som endast visar 1 åt gången.
function ShowProgram(){
    document.querySelector("#mainWrapper").innerHTML = "";

CollectAllProgramInfo(DB).forEach(programCard => {
    let createProgramCard = document.createElement("div");
    createProgramCard.classList.add("createProgramCard");
    document.getElementById("mainWrapper").append(createProgramCard);

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
/*let oneReview = document.createElement("div");
document.querySelector(".oneReview").append(oneReview);

programCard.Review.ReviewText.forEach(function(text){
    let oneText = document.createElement("p");
    oneText.innerHTML = `${text}`
    oneReview.append(oneText)
    console.log("en text");
})
programCard.Review.ReviewName.forEach(function(name){
    let oneName = document.createElement("p");
    oneName.innerHTML = `${name}`
    oneReview.append(oneName);
    console.log("ett namn");
})
programCard.Review.ReviewDate.forEach(function(date){
    let oneName = document.createElement("p");
    oneName.innerHTML = `${date.year}, ${date.month} ${date.day}`
    oneReview.append(oneName);
    console.log("ett datum");
})*/
});

}
//display(..) = collect(..)info ska skapa 1 div med nödvändig innerhtml element och info
//parameter för funktionen är från collect(..)info arrayena
//filteredArray ska kalla på display(..)

function displayCity(){
    let cityCard = CollectAllCityInfo(DB);
    console.log(cityCard.City)
    let createCityCard = document.createElement("div");

        createCityCard.innerHTML = `
        <div class="cityCard">
            <h1 class="cityNames"> ${cityCard.City}, ${cityCard.Country} <img src="../Filer/Images/${cityCard.Flag}" class="flag"> </h1>
            <div class="ratingsByStudents"> 
                <p> Tidigare studenters betyg: </p>
                <p> <img src="../../Kodstruktur/Filer/Images/star.png">"3,5"/5 (Boende)</p> 
                <p> <img src="../../Kodstruktur/Filer/Images/star.png">"3,5"/5 (Mat)</p>
                <p> <img src="../../Kodstruktur/Filer/Images/star.png">"3,5"/5 (Uteliv)</p>
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
        `;

        return createCityCard;
}

// Här börjar kodning för stadssida
// här måste universitet fixas i innerHTML, vill att de ska uppstå enskilt i sina div:ar, samma sak gäller för entertainment places.
/*ShowCities() //en platshållare
function ShowCities(){
    document.querySelector("#mainWrapper").innerHTML = "";

    CollectAllCityInfo(DB).forEach(cityCard => {

        //filteredArray.forEach(CollectAllCityInfo)
        let createCityCard = document.createElement("div");
        document.querySelector("#mainWrapper").append(createCityCard);

        createCityCard.innerHTML = `
        <div class="cityCard">
            <h1 class="cityNames"> ${cityCard.City}, ${cityCard.Country} <img src="../Filer/Images/${cityCard.Flag}" class="flag"> </h1>
            <div class="ratingsByStudents"> 
                <p> Tidigare studenters betyg: </p>
                <p> <img src="../../Kodstruktur/Filer/Images/star.png">"3,5"/5 (Boende)</p> 
                <p> <img src="../../Kodstruktur/Filer/Images/star.png">"3,5"/5 (Mat)</p>
                <p> <img src="../../Kodstruktur/Filer/Images/star.png">"3,5"/5 (Uteliv)</p>
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
}*/

//CSS intro
let StyleCSS = document.createElement("link");
StyleCSS.setAttribute("href", `City.css`);
document.querySelector("head").append(StyleCSS);
StyleCSS.setAttribute("rel", "stylesheet");


//Checkbox Buttons
let placeHolder = "Sök efter städer...";
document.querySelector(`#City`).addEventListener("click", function(){
    StyleCSS.remove();
    let click = this.innerText;
    let placeHolder = "Sök efter städer...";
    StyleCSS.setAttribute("href", `${click}.css`);
    document.querySelector("head").append(StyleCSS);
    StyleCSS.setAttribute("rel", "stylesheet");
    FilterSearch("City", CollectAllCityInfo(DB), displayCity);
})


document.querySelector(`#Program`).addEventListener("click", function(){
    StyleCSS.remove();
    let click = this.innerText;
    StyleCSS.setAttribute("href", `${click}.css`);
    document.querySelector("head").append(StyleCSS);
    StyleCSS.setAttribute("rel", "stylesheet");
    FilterSearch("Program", CollectAllProgramInfo(DB), ShowProgram);
})


document.querySelector(`#University`).addEventListener("click", function(){
    StyleCSS.remove();
    let click = this.innerText;
    StyleCSS.setAttribute("href", `${click}.css`);
    document.querySelector("head").append(StyleCSS);
    StyleCSS.setAttribute("rel", "stylesheet");
    FilterSearch("University", CollectAllUniversityInfo(DB), ShowUniversities);
})

