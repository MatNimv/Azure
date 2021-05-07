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

console.log(cityArray)


    /*namn på Stad och Land + landets flagga
    rating för boende / mat / uteliv
    informationstext om staden
    alla universitet för staden
    bild på stad
    en lista av alla aktiviteter i staden*/
}

function CollectAllProgramInfo() {

}

function CollectAllUniversityInfo() {

}