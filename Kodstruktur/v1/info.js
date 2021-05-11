"use strict";

//adderar CSSen som gäller för createProgramCardvarna
let programCSS = document.createElement("link");
programCSS.setAttribute("href", "program.css");
document.querySelector("head").append(programCSS);
programCSS.setAttribute("rel", "stylesheet");

CollectAllCityInfo();
function CollectAllCityInfo() {

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



    /*namn på Stad och Land + landets flagga
    rating för boende / mat / uteliv
    informationstext om staden
    alla universitet för staden
    bild på stad
    en lista av alla aktiviteter i staden*/


}



function CollectAllProgramCard(databas) {
    let programArray = [];
    let programObject = {};

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


        programObject =
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
    console.log(programObject)
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

        //kopplar programmen som finns inom universitet
        let UniversityProgrammeCombo = DB.PROGRAMMES.filter(function (programme) {
            return programme.universityID === element.id;
        });
        //console.log(UniversityProgrammeCombo)
        
        let UniversityProgrammeArray = UniversityProgrammeCombo.map(function(obj){
            return obj;
        })

        let ProgrammeLanguageCombo = DB.LANGUAGES.filter(function (language) {
            return UniversityProgrammeCombo.language === element.id;
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

        /*
        Universitetets namn + flagga
        stad och språk för programmen
        lista över programnman för universitetet
        STORRRR bild (stadsbild)
        */

        UniversityArray.push(universityObject)
        //console.log(UniversityArray)
    })

    console.log(UniversityArray)
}

CollectAllProgramCard(DB).forEach(programCard => {
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
            <p><img src="star.png"><span>(Lärarna)</span></p>
            <p><img src="star.png"><span>(Klasskamrater)</span></p>
            <p><img src="star.png"><span>(Kurserna)</span></p>
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

})
CreatecreateProgramCard(CollectAllProgramCard());
function CreatecreateProgramCard(programCard){

}

/*let CreatecreateProgramCard = CITIES.forEach(function(programCard){
    let createProgramCard = document.createElement("div");
    createProgramCard.classList.add("createProgramCard")

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
            <div><img src="star.png">(Lärarna)</div>
            <div><img src="star.png">(Klasskamraterna)</div>
            <div><img src="star.png">(Kurserna)</div>
        </div>
        <div class="successOchReview">
            <div class="successRateDiv">
                <h4>Avklaringsgrad</h4>
                <div class="nmbrOchYear">
                    <p><span>2020</span><span> ${programCard.SuccessRate[0]}</span></p>
                    <p><span>2019</span><span> 3,6%</span></p>
                    <p><span>2018</span><span> 3,6%</span></p>
                    <p><span>2017</span><span> 3,6%</span></p>
                    <p><span>2016</span><span> 3,6%</span></p>
                </div>
            </div class="reviews">
                <div class="oneReview">
                    <p>${programCard.Review.ReviewText}---</p>
                    <p>${programCard.Review.ReviewName}---</p>
                    <p>${programCard.Review.ReviewDate.year}, ${programCard.Review.ReviewDate.month}${programCard.Review.ReviewDate.day}</p>
                </div>
            </div>
        </div>
`;
document.getElementById("wrapper").append(createProgramCard);
});*/
