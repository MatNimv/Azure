"use strict";

CollectAllCityInfo();
function CollectAllCityInfo() {

    let CityArray = [];
    let EntertainmentArray = [];

    let StarsOutArray = []

    let StarsFoodArray = []

    let StarsAccomodationArray = []

    let UniversitiesArray = []

    DB.CITIES.forEach(element => {

        let CityCountryCombo = DB.COUNTRIES.find(function (country) {
            return country.id === element.countryID;
        });

        let RatingCityCombo = DB.COMMENTS_CITY.find(function (city) {
            return city.id === element.id;
        });

        let UniversityCityCombo = DB.UNIVERSITIES.find(function (university) {
            return university.id === element.id;
        });

        let EntertainmentCityCombo = DB.ENTERTAINMENT_PLACES.find(function (entertainment) {
            return entertainment.id === element.id;
        });

        EntertainmentArray.push(EntertainmentCityCombo.name)
        UniversitiesArray.push(UniversityCityCombo.name)
        StarsOutArray.push(RatingCityCombo.stars.out)
        StarsFoodArray.push(RatingCityCombo.stars.food)
        StarsAccomodationArray.push(RatingCityCombo.stars.accomodation)


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


CollectAllProgramInfo();
function CollectAllProgramInfo() {
    let programArray = [];
let CommentTextArray = []
let CommentNameArray = []
let CommentDateArray = []
let RatingTeachersArray = []
let RatingStudentsArray = []
let RatingCoursesArray = []

    DB.PROGRAMMES.forEach(element => {

        let programLanguageCombo = DB.LANGUAGES.find(function (language) {
            return language.id === element.language;
        });

        let programeLevelCombo = DB.LEVELS.find(function (arrayOfLevels, index) {
            return index === element.level;
        });

        let CommentProgramCombo = COMMENTS_PROGRAMME.find(function (program) {
            return program.programmeID === element.id;
        });
        
        CommentTextArray.push(CommentProgramCombo.text)
        CommentNameArray.push(CommentProgramCombo.alias)
        CommentDateArray.push(CommentProgramCombo.date)
        RatingTeachersArray.push(CommentProgramCombo.stars.teachers)
        RatingStudentsArray.push(CommentProgramCombo.stars.students)
        RatingCoursesArray.push(CommentProgramCombo.stars.courses)

        let programObject =
        {
            Program: element.name,
            Language: programLanguageCombo.name,
            Level: programeLevelCombo,
            Ratings:{
                RatingTeachers: RatingTeachersArray,
                RatingStudents: RatingStudentsArray,
                RatingCourses: RatingCoursesArray,
            },
            SuccessRate: element.successRate,
            Review:{
                ReviewText: CommentTextArray,
                ReviewName: CommentNameArray,
                ReviewDate: CommentDateArray
            },
        }

        programArray.push(programObject)

    })
console.log(programArray)
    /* namn på pogram
    språk / level / unversitet som erbjuder programmet
    ratings på studenter / lärare / kurser
    avklaringsgrad - år + procent
    en lista av alla recensioner (recenionen + namn, efternamn, datum) */

}
CollectAllUniversityInfo();
function CollectAllUniversityInfo() {
    let UniversityArray = [];
    let filteredLanguageArray = [];
    let languageArray = [];


    DB.UNIVERSITIES.forEach(element => {

        let UniversityCityCombo = DB.CITIES.find(function (city) {
            return city.id === element.cityID /*&& DB.COUNTRIES.id === city.countryID*/;
        });

        let UniversityCountryCombo = DB.COUNTRIES.find(function (country) {
            return country.id === UniversityCityCombo.countryID;
        });

        //kopplar programmen som finns inom universitet
        let UniversityProgrammeCombo = DB.PROGRAMMES.find(function (programme) {
            return programme.universityID === element.id;
        });
        //console.log(UniversityProgrammeCombo);

        let ProgrammeLanguageCombo = DB.LANGUAGES.find(function (language) {
            return UniversityProgrammeCombo.language === language.id;
        });

        languageArray.push(ProgrammeLanguageCombo.name)
        languageArray.find(function (element) {
            if (!filteredLanguageArray.includes(element)) {
                filteredLanguageArray.push(element);
            };
        });

        let universityObject =
        {
            University: element.name,
            Flag: UniversityCountryCombo.flag,
            City: UniversityCityCombo.name,
            Language: filteredLanguageArray,
            Images: UniversityCountryCombo.imagesBig[0],
            Programmes: UniversityProgrammeCombo.name
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

}
