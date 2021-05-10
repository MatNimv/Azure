"use strict";

CollectAllCityInfo();
function CollectAllCityInfo() {

    let cityArray = [];


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

      


        let cityObject =
        {
            City: element.name,
            Country: CityCountryCombo.name,
            Flag: CityCountryCombo.flag,
            StarsOut: RatingCityCombo.stars.out,
            StarsFood: RatingCityCombo.stars.food,
            StarsAccomodation: RatingCityCombo.stars.accomodation,
            CityInfo: element.text,
            Universities: UniversityCityCombo,
            Images: CityCountryCombo.imagesNormal[0],
            Entertainment: EntertainmentCityCombo
        }



    
cityArray.push(cityObject)

})

//console.log(cityArray)


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


    DB.PROGRAMMES.forEach(element => {

        let programLanguageCombo = DB.LANGUAGES.find(function (language) {
            return language.id === element.language;
        });

        let programeLevelCombo = DB.LEVELS.find(function (arrayOfLevels, index) {
            return index === element.level;
        });
        //console.log(programeLevelCombo) 

        let UniversityProgramCombo = DB.UNIVERSITIES.find(function (university) {
            return university.id === element.universityID;
        });

        let CommentProgramCombo = COMMENTS_PROGRAMME.find(function (program) {
            return program.id === element.id;
        });
        //console.log(CommentProgramCombo)

        let programObject =
        {
            Program: element.name,
            Language: programLanguageCombo.name,
            Level: programeLevelCombo,
            RatingTeachers: CommentProgramCombo.stars.teachers,
            RatingStudents: CommentProgramCombo.stars.students,
            RatingCourses: CommentProgramCombo.stars.courses,
            SuccessRate: element.successRate,
            Review: CommentProgramCombo.text,
            ReviewName: CommentProgramCombo.alias,
            ReviewDate: CommentProgramCombo.date

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

function CollectAllUniversityInfo() {

}