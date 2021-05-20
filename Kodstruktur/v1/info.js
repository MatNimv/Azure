"use strict";


let mainWrapper = document.createElement("div");
mainWrapper.innerHTML = `
<nav>
    <button id="City"><img src="../Filer/Images/city_icon.png">City</button>
    <button id="Program"><img src="../Filer/Images/program_icon.png">Program</button>
    <button id="University"><img src="../Filer/Images/university_icon.png">University</button>
</nav>
<div id="searchDiv"><input id="searchBar" type="text""></div>
<div id="mainWrapper"></div>
`;

document.querySelector("main").append(mainWrapper);

//CSS intro
let StyleCSS = document.createElement("link");
StyleCSS.setAttribute("href", `City.css`);
document.querySelector("head").append(StyleCSS);
StyleCSS.setAttribute("rel", "stylesheet");
document.querySelector("#City").classList.add("pressed");
CityClicked();

//Sökfunktion 
function FilterSearch(keyName, CollectDB, ShowArrays, emptySearchBar, placeText) {
    let data = {
        baseArray: CollectDB, //array som ska filtreras från collektfunktionen
        filterKey: keyName, //input som searchbaren utgår från
        filterLabelKey: "", //sökord
        DOMCreator: ShowArrays, //vilken av displayfunktionerna som kallas
        DOMNoSearch: placeText
    }
    console.log(data);

document.querySelector("#searchBar").addEventListener("keyup", function() {
    let input = document.querySelector("#searchBar").value;
    document.getElementById("mainWrapper").innerHTML = "";

        //If input is empty it calls the whole array of content. (city, programme, university)
        if (input.length <= 0) {
            emptySearchBar();
        }

        let filteredArray = data.baseArray.filter(element => {
            return element[data.filterKey].toLowerCase().includes(input.toLowerCase());
        })
        if (input.length > 0 && filteredArray.length === 0){
            let newDiv = document.createElement("div");
            newDiv.classList.add("placeDiv");
            newDiv.innerHTML = `Hittade inga ${placeText}. Testa sök på något annat!`;
            document.getElementById("mainWrapper").append(newDiv);
            document.querySelector("#mainWrapper").style.overflowY = "hidden";
        }

        console.log(filteredArray);
        //Sorts the filtered array - city, university and programme names A-Ö
        filteredArray.sort(function (elementa, elementb) {
            if (elementa[data.filterKey] < elementb[data.filterKey]) {
                return -1
            } if (elementb[data.filterKey] < elementa[data.filterKey]) {
                return 1
            }
            return 0
        })

        //calls the function and it creates the element
        filteredArray.forEach(element => document.getElementById("mainWrapper").append(data.DOMCreator(element)));
    });
}
//////////////////////////////////////////////////////////////////
//////////////////SAMLING AV DATA och FUNKTIONER//////////////////
//////////////////////////////////////////////////////////////////

//ger ett medelvärde utav en array med siffror.
function averageReviewScore(ratingArray) {
    // parameter 1 är värdet som ska avrundas- parameter 2 är hur 
    // många decimaler värdet ska avrundas till.
    function runda(value, precision) {
        var multiplier = Math.pow(10, precision || 0);
        return Math.round(value * multiplier) / multiplier;
    }

    let sumOfNum = 0;
    for (let i = 0; i < ratingArray.length; i++) {
        sumOfNum += ratingArray[i] ;
    }
    //vissa program o städer har ingen rating.
    if (ratingArray.length === 0){
        let noDataDiv = "No data ";
        return noDataDiv;
    }

    return runda(sumOfNum / ratingArray.length, 1);

}


///////////////////////////////////////////////////////////////////
/////////////////////////////STÄDER////////////////////////////////
///////////////////////////////////////////////////////////////////
CollectAllCityInfo(DB);
function CollectAllCityInfo(databas) {
    let CityArray = [];


    DB.CITIES.forEach(element => {

        //kopplar ihop staden med dess land
        let CityCountryCombo = DB.COUNTRIES.find(function (country) {
            return country.id === element.countryID;
        });

        //tar ut alla recensionerna om staden i en array
        let RatingCityCombo = DB.COMMENTS_CITY.filter(function (city) {
            return city.cityID === element.id;
        });

        //tar ut alla universiteten som finns i staden i en array
        let UniversityCityCombo = DB.UNIVERSITIES.filter(function (university) {
            return university.cityID === element.id;
        });

        //tar ut alla entertainment places i staden i en array
        let EntertainmentCityCombo = DB.ENTERTAINMENT_PLACES.filter(function (entertainment) {
            return entertainment.cityID === element.id;
        });

        //tar ut endast betyg om uteliv om staden från recension
        let StarsOutArray = RatingCityCombo.map(function (obj) {
            return obj.stars.out;
        })

        //tar ut endast betyg om mat i staden från recension
        let StarsFoodArray = RatingCityCombo.map(function (obj) {
            return obj.stars.food;
        })

        //tar ut endast betyg om boende i staden från recension
        let StarsAccomodationArray = RatingCityCombo.map(function (obj) {
            return obj.stars.accomodation;
        })

        //tar ut endast namnen av universiteten ur universitetsobjektet
        let UniversitiesArray = UniversityCityCombo.map(function (obj) {
            return obj.name;
        })

        //tar ut endast namnet av entertainmentstället ur entertainmentobjektet
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

// Här börjar kodning för stadssida
ShowCities() //en platshållare
function ShowCities() {
    document.querySelector("#mainWrapper").innerHTML = "";
    CollectAllCityInfo(DB).forEach(element => document.getElementById("mainWrapper").append(displayCity(element)));
}

function displayCity(city) {
    let createCityCard = document.createElement("div");
    createCityCard.classList.add("card");
    createCityCard.innerHTML =
        `
        <div class="cityCard">
            <h1 class="cityNames"> ${city.City}, ${city.Country} <img src="../Filer/Images/${city.Flag}" class="flag"> </h1>
            <div class="studentRatings"> 
                <p> Tidigare studenters betyg: </p>
                <p> <img src="../../Kodstruktur/Filer/Images/star.png">${averageReviewScore(city.Stars.StarsAccomodation)}/5 (Boende)</p> 
                <p> <img src="../../Kodstruktur/Filer/Images/star.png">${averageReviewScore(city.Stars.StarsFood)}/5 (Mat)</p>
                <p> <img src="../../Kodstruktur/Filer/Images/star.png">${averageReviewScore(city.Stars.StarsOut)}/5 (Uteliv)</p>
            </div>
            <p class="cityText"> ${city.CityInfo} </p>
            <div class="uniDiv"></div>
            <div class="imageAndScroll">
                <img src="../Filer/Images/${city.Images}">
                <div class="entertainmentPlaces"> 
                    <p>${city.Entertainment.join(" | ")}</p>
                </div>
            </div>
        </div>
        `;

        city.Universities.forEach(uni => {
            let createDiv = document.createElement("div");
            createDiv.innerHTML = uni;
            createDiv.classList.add("soloUniDiv");
            createCityCard.querySelector(".uniDiv").append(createDiv);
        })

    return createCityCard;
}
console.log(displayCity)

///////////////////////////////////////////////////////////////////
///////////////////////////PROGRAM/////////////////////////////////
///////////////////////////////////////////////////////////////////
CollectAllProgramInfo(DB)
function CollectAllProgramInfo(databas) {
    let programArray = [];

    DB.PROGRAMMES.forEach(element => {
        //kopplar ihop program med språk.
        let programLanguageCombo = DB.LANGUAGES.find(function (language) {
            return language.id === element.language;
        });

        //kopplar ihop vilken "level" programmet har
        let programeLevelCombo = DB.LEVELS.find(function (arrayOfLevels, index) {
            return index === element.level;
        });

        //kopplar ihop vilket universitet programmet ligger i
        let ProgrammeUniversityCombo = DB.UNIVERSITIES.find(function (university) {
            return university.id === element.universityID;
        });

        //hittar alla kommentarer (namn, text, datum) som finns om programmet
        let CommentProgramCombo = COMMENTS_PROGRAMME.filter(function (object) {
            return object.programmeID === element.id;
        })

        //tar ut endast texten ur kommentaren
        let CommentTextArray = CommentProgramCombo.map(function (obj) {
            return obj.text;
        })

        //tar ut endast namnet ur kommentaren
        let CommentNameArray = CommentProgramCombo.map(function (obj) {
            return obj.alias;
        })

        //tar ut endast datumet ur kommentaren
        let CommentDateArray = CommentProgramCombo.map(function (obj) {
            return obj.date;
        })

        //tar ut endast betyget om läraren ur recensionen
        let RatingTeachersArray = CommentProgramCombo.map(function (obj) {
            return obj.stars.teachers;
        })

        //tar ut endast betyget om studenter ur recensionen
        let RatingStudentsArray = CommentProgramCombo.map(function (obj) {
            return obj.stars.students;
        })

        //tar ut endast betyget om programmet ur recensionen
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


function ShowProgram() {
    document.getElementById("mainWrapper").innerHTML = "";
    CollectAllProgramInfo(DB).forEach(element => document.getElementById("mainWrapper").append(displayProgram(element)));
}

function displayProgram(program){
    let createProgramCard = document.createElement("div");
    createProgramCard.classList.add("card");
    createProgramCard.innerHTML =
    `
    <h1>${program.Program}</h1>
    <div class="infoProgram">
        <div>${program.Language}</div>
        <div>${program.Level}</div>
        <div>${program.University}</div>
    </div>
    <div class="studentRatings">
        <div>Tidigare studenters betyg:</div>
        <p><img src="../../Kodstruktur/Filer/Images/star.png">${averageReviewScore(program.Ratings.RatingTeachers)}/5 (Lärarna)</p>
        <p><img src="../../Kodstruktur/Filer/Images/star.png">${averageReviewScore(program.Ratings.RatingStudents)}/5 (Klasskamrater)</p>
        <p><img src="../../Kodstruktur/Filer/Images/star.png">${averageReviewScore(program.Ratings.RatingCourses)}/5 (Kurserna)</p>
    </div>
    <div class="successOchReview">
        <div class="successRateDiv">
            <h4>Avklaringsgrad</h4>
            <div class="nmbrOchYear">
                <p><span>2020 </span><span> ${program.SuccessRate[0]}%</span></p>
                <p><span>2019 </span><span> ${program.SuccessRate[1]}%</span></p>
                <p><span>2018 </span><span> ${program.SuccessRate[2]}%</span></p>
                <p><span>2017 </span><span> ${program.SuccessRate[3]}%</span></p>
                <p><span>2016 </span><span> ${program.SuccessRate[4]}%</span></p>
            </div>
        </div>
        <div class="reviews">
        </div>
    </div>
    `;
    //går genom varje review för vart program och
    //lägger dom i varsin div.
    for (let i = 0; i < program.Review.ReviewText.length; i++) {
    let oneReview = document.createElement("div");
    oneReview.classList.add("oneReview");
    oneReview.innerHTML =
    `
    <p class="oneText">${program.Review.ReviewText[i]}</p>
    <p class="oneNameAndDate">— ${program.Review.ReviewName[i]}, ${program.Review.ReviewDate[i].year} - ${program.Review.ReviewDate[i].month}/${program.Review.ReviewDate[i].day}</p>
    `;
    createProgramCard.querySelector(".reviews").append(oneReview);
    }
    return createProgramCard;
}


////////////////////////////////////////////////////////////////////
///////////////////////////UNIVERSITET//////////////////////////////
////////////////////////////////////////////////////////////////////
CollectAllUniversityInfo(DB)
function CollectAllUniversityInfo(databas) {
    let UniversityArray = [];

    DB.UNIVERSITIES.forEach(element => {

        //kopplar ihop universitet med vilken stad de ligger i.
        let UniversityCityCombo = DB.CITIES.find(function (city) {
            return city.id === element.cityID;
        });

        //kopplar ihop vilket land universitetet ligger i.
        let UniversityCountryCombo = DB.COUNTRIES.find(function (country) {
            return country.id === UniversityCityCombo.countryID;
        });

        //kopplar ihop alla programmen för universitetet.
        let UniversityProgrammeCombo = DB.PROGRAMMES.filter(function (programme) {
            return programme.universityID === element.id;
        });

        //skapar ett objekt av alla universiteters program och dess språk.
        let UniversityProgrammeArray = UniversityProgrammeCombo.map(function (obj) {
            let newObj = {
                Program: obj,
                Language: DB.LANGUAGES.find(function (language) {
                    return language.id === obj.language;
                })
            }
            return newObj;
        });

        let universityObject =
        {
            University: element.name,
            Flag: UniversityCountryCombo.flag,
            City: UniversityCityCombo.name,
            Language: UniversityProgrammeArray.name,
            Images: UniversityCountryCombo.imagesBig[0],
            Programmes: UniversityProgrammeArray
        }
        console.log(universityObject.Programmes)
        //Universitetets namn + flagga
        //stad och språk för programmen
        //lista över programnman för universitetet
        //STORRRR bild (stadsbild)
        UniversityArray.push(universityObject)
    })
    UniversityArray.sort((n1, n2) => n2.City < n1.City ? 1 : -1)
    return UniversityArray;
}

function ShowUniversities() {
    document.getElementById("mainWrapper").innerHTML = "";
    CollectAllUniversityInfo(DB).forEach(element => document.getElementById("mainWrapper").append(displayUniversity(element)));
}     

function displayUniversity(university) {
    let createUniversityCard = document.createElement("div");
    createUniversityCard.classList.add("card");

    createUniversityCard.innerHTML =
        `
        <h1>${university.University}<img src="../Filer/Images/${university.Flag}"></h1>
        <div class="universityContent">
            <div><img src="../Filer/Images/${university.Images}"></div>
            <div class="infoOchProgram">
                <div class="stadOchSprak">
                    <div>${university.City}</div>
                </div>
                <div class="subjects">
                    <p class="subject"><span></span>${DB.FIELDS[0].name}</p>
                    <p class="subject"><span></span>${DB.FIELDS[1].name}</p>
                    <p class="subject"><span></span>${DB.FIELDS[2].name}</p>
                    <p class="subject"><span></span>${DB.FIELDS[3].name}</p>
                    <p class="subject"><span></span>${DB.FIELDS[4].name}</p>
                    <p class="subject"><span></span>${DB.FIELDS[5].name}</p>
                    <p class="subject"><span></span>${DB.FIELDS[6].name}</p>
                </div>
                <p>Program:</p>
                <div class="allaProgram">
                
                </div>
            </div>
        </div>
    `;
    university.Programmes.forEach(function(program){
        let oneProgramDiv = document.createElement("div");
        oneProgramDiv.innerHTML = `${program.Program.name} (${program.Language.name})`;
        oneProgramDiv.classList.add("oneProgram");
        createUniversityCard.querySelector(".allaProgram").append(oneProgramDiv)

            if (program.Program.subjectID === 0) {
                oneProgramDiv.style.backgroundColor = "var(--colorMath)";
            } else if (program.Program.subjectID === 1) {
                oneProgramDiv.style.backgroundColor = "var(--colorTech)";
            } else if (program.Program.subjectID === 2) {
                oneProgramDiv.style.backgroundColor = "var(--colorLaw)";
            } else if (program.Program.subjectID === 3) {
                oneProgramDiv.style.backgroundColor = "var(--colorMed)";
            } else if (program.Program.subjectID === 4) {
                oneProgramDiv.style.backgroundColor = "var(--colorSoc)";
            } else if (program.Program.subjectID === 5) {
                oneProgramDiv.style.backgroundColor = "var(--colorFil)";
            } else {
                oneProgramDiv.style.backgroundColor = "var(--colorDes)"; 
            }
        })
    return createUniversityCard;
}

//////////////////////////////////////////////////////////////////////////
/////////CSS ARBETE + INITIALIZATION (ultrafel stavning) AV KNAPPARNA/////
//////////////////////////////////////////////////////////////////////////


//Checkbox Buttons
function CityClicked(){
    StyleCSS.remove();
    let click = document.querySelector(`#City`).innerText;
    document.querySelector("#searchBar").placeholder = "Sök efter städer...";
    document.querySelector("#searchBar").value = "";

    StyleCSS.setAttribute("href", `${click}.css`);
    document.querySelector("head").append(StyleCSS);
    StyleCSS.setAttribute("rel", "stylesheet");
    document.querySelector("#Program").classList.remove("pressed");
    document.querySelector("#University").classList.remove("pressed");
    document.querySelector("#City").classList.add("pressed");

    ShowCities();
    FilterSearch("City", CollectAllCityInfo(DB), displayCity, ShowCities, "städer");
}
document.querySelector(`#City`).addEventListener("click", function () {
    CityClicked();
});

document.querySelector(`#Program`).addEventListener("click", function () {
    StyleCSS.remove();
    let click = this.innerText;
    document.querySelector("#searchBar").placeholder = "Sök efter program...";
    document.querySelector("#searchBar").value = "";

    StyleCSS.setAttribute("href", `${click}.css`);
    document.querySelector("head").append(StyleCSS);
    StyleCSS.setAttribute("rel", "stylesheet");
    document.querySelector("#University").classList.remove("pressed");
    document.querySelector("#City").classList.remove("pressed");
    document.querySelector("#Program").classList.add("pressed");

    ShowProgram();
    FilterSearch("Program", CollectAllProgramInfo(DB), displayProgram, ShowProgram, "program");
});

document.querySelector(`#University`).addEventListener("click", function () {
    StyleCSS.remove();
    let click = this.innerText;
    document.querySelector("#searchBar").placeholder = "Sök efter universitet...";
    document.querySelector("#searchBar").value = "";
    
    StyleCSS.setAttribute("href", `${click}.css`);
    document.querySelector("head").append(StyleCSS);
    StyleCSS.setAttribute("rel", "stylesheet");
    document.querySelector("#Program").classList.remove("pressed");
    document.querySelector("#City").classList.remove("pressed");
    document.querySelector("#University").classList.add("pressed");

    ShowUniversities();
    FilterSearch("University", CollectAllUniversityInfo(DB), displayUniversity, ShowUniversities, "universitet");
});

