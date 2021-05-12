"use strict";

//adderar CSSen som gäller för createProgramCard:en
let programCSS = document.createElement("link");
programCSS.setAttribute("href", "program.css");
document.querySelector("head").append(programCSS);
programCSS.setAttribute("rel", "stylesheet");

//adderar CSSen som gäller för createUniversitiesCard:en
/*let universitiesCSS = document.createElement("link");
universitiesCSS.setAttribute("href", "universities.css");
document.querySelector("head").append(universitiesCSS);
universitiesCSS.setAttribute("rel", "stylesheet");
*/
let mainWrapper = document.createElement("div");
mainWrapper.innerHTML = `
<main>
<nav>
    <div>Städer<button></button></div>
    <div>Program<button></button></div>
    <div>Universitet<button></button></div>
</nav>
<div id="wrapper"></div>
</main>
`;
document.querySelector("main").append(mainWrapper);

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
    return UniversityArray;
}

//denna är klar förutom alla programnamn och bilder.
/*CollectAllUniversityInfo(DB).forEach(universityCard => {
    let createUniversityCard = document.createElement("div");
    createUniversityCard.classList.add("createUniversityCard");
    document.getElementById("wrapper").append(createUniversityCard);

    createUniversityCard.innerHTML = `
        <h1>${universityCard.University}<img src=../../Kodstruktur/Filer/Images/"${universityCard.Flag}"></h1>
        <div class="universityContent">
            <div><img src=../../Kodstruktur/Filer/Images/"${universityCard.Images}"></div>
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
})*/


//tillsvidare. Denna är klar förutom reviews som endast visar 1 åt gången.
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
