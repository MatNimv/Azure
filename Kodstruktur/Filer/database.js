

/*

Nedan finns databasen.


            VITKIG INFO:
            Arrayen COMMENTS_PROGRAMME har över 12000 element. Visual Studio
            har lite problem med det. Därför har vi placerat COMMENTS_PROGRAMME 
            i en annan fil (commentsProgramme.js). Glöm inte att länka till
            den i er(a) HTML-fil(er).


För enkelhetens skull (så vi slipper sitta och formattera) kommer
den i JSON-format. Det låter avancerad men det är inte det. Vi kommer
att prata om JSON under nästa kurs och ni kommer att inse att det
är ett mycket enkelt begrepp. Vi har dock valt att inte prata om det
i denna kurs.

Trots JSON-formatet kan ni, om ni tittar på databasen nedan, se att den följer
specifikationerna i dokumentet "Projektdatabas PFW21". Men ni behöver
inte kolla på raderna nedan om ni inte vill.

Det enda ni behöver veta är att objektet DB har följande struktur:
DB = {
    COUNTRIES,
    CITIES,
    UNIVERSITIES,
    PROGRAMMES,
    LANGUAGES,
    LEVELS,
    CLUBS,
    ENTERTAINMENT_PLACES,
    COMMENTS_CITY,
    COMMENTS_PROGRAMME
};

... där varje nyckel är en array av respektive entity: COUNTRY, CITY, etc.
Varje entity har exakt den strukturen som är specificerad i "Projektdatabas PFW21".

Till exempel har varje COUNTRY-object följande nycklar:
COUNTRY = {
    id,
    name,
    visa,
    flag,
    languageID,
    text
};

Allt blir tydligare om ni loggar konstanten DB och tittar
på innehållet via browserns console.




OBS 1
Innehållet i databasen är skapad programmatiskt och kan innehålla gramatiska
fel i namnen och lite annat konstigt. Exempel:
a) "Derecho Aplicadas" är grammatiskt fel på spanska.
b) Toulouse kan ha fler universitet än Paris, som ju är en mycket större stad.
Konstigheter som dessa behöver ni inte bry er om.

Om ni dock hittar data som verkligen inte alls fungerar så får ni hemskt gärna
höra av er till oss så ska vi kolla på det. Ett exempel på data som inte fungerar
skulle kunna vara negativa värden av antalet studenter i ett program.



OBS 2
Strukturen i databasen är satt. Den ska inte ändras.
Innehållet i databasen är däremot bara ett exempel, det skulle kunna
ändras. Exempelvis skulle troligtvis datan för programmen att ändras från år
till år, universitet skulle kunna ta bort program och lägga till nya, etc.
Er app ska INTE struktureras efter nuvarande innehåll utan efter databasens
struktur (vilka nycklar som finns).
Ni kan exempelvis inte basera appen på att Madrid har i detta exempel två
universitet.


*/

setTimeout(() => {
    // Inne i en setTimeout Så att konstanten DB deklareras
    // innan vi loggar den.
    console.log(DB); 
}, 1);


const COUNTRIES = [
    {
        "id": 0,
        "name": "Spain",
        "visa": false,
        "languageID": 0,
        "flag": "spain.png",
        "text": "Spanien \u00e4r ett land och en medlemsstat i Europeiska unionen bel\u00e4gen i sydv\u00e4stra Europa p\u00e5 Iberiska halv\u00f6n. Dess fastland gr\u00e4nsar i s\u00f6der och \u00f6ster till Medelhavet f\u00f6rutom en liten landgr\u00e4ns med det brittiska utomeuropeiska territoriet Gibraltar, i norr av Frankrike, Andorra och Biscayabukten samt i nordv\u00e4st och v\u00e4ster av Atlanten och Portugal.",
        "imagesNormal": [
            "spain_normal_1.jpg",
            "spain_normal_2.jpg",
            "spain_normal_3.jpg",
            "spain_normal_4.jpg",
            "spain_normal_5.jpg",
            "spain_normal_6.jpg"
        ],
        "imagesBig": [
            "spain_big_1.jpg",
            "spain_big_2.jpg",
            "spain_big_3.jpg"
        ]
    },
    {
        "id": 1,
        "name": "France",
        "visa": false,
        "languageID": 2,
        "flag": "france.png",
        "text": "Frankrike \u00e4r ett mycket sp\u00e4nnande land som har en stolt och intressant historia. Det \u00e4r ett av v\u00e4rldens mest popul\u00e4ra turistl\u00e4nder, d\u00e5 det finns m\u00e5nga omr\u00e5den som \u00e4r v\u00e4rda att bes\u00f6ka. Det \u00e4r heller inte alls konstigt att f\u00f6rst\u00e5 varf\u00f6r Frankrike h\u00e5ller sig i turisttoppen \u00e5r efter \u00e5r.",
        "imagesNormal": [
            "france_normal_1.jpg",
            "france_normal_2.jpg",
            "france_normal_3.jpg",
            "france_normal_4.jpg",
            "france_normal_5.jpg",
            "france_normal_6.jpg"
        ],
        "imagesBig": [
            "france_big_1.jpg",
            "france_big_2.jpg",
            "france_big_3.jpg"
        ]
    },
    {
        "id": 2,
        "name": "Australia",
        "visa": false,
        "languageID": 1,
        "flag": "australia.png",
        "text": "Australien \u00e4r ett land p\u00e5 s\u00f6dra halvklotet best\u00e5ende av fastlandet kontinenten Australien, \u00f6n Tasmanien samt ett antal mindre \u00f6ar i Indiska oceanen och Stilla havet. Idag \u00e4r Australien ett modernt industri- och tj\u00e4nstesamh\u00e4lle. Politiskt har landet sedan andra v\u00e4rldskriget varit en n\u00e4ra allierad till USA. Det \u00e4r v\u00e4rldens sj\u00e4tte st\u00f6rsta land har en yta som \u00e4r 17 g\u00e5nger st\u00f6rre \u00e4n Sveriges.",
        "imagesNormal": [
            "australia_normal_1.jpg",
            "australia_normal_2.jpg"
        ],
        "imagesBig": [
            "australia_big_1.jpg"
        ]
    },
    {
        "id": 3,
        "name": "United Kingdom",
        "visa": false,
        "languageID": 1,
        "flag": "uk.png",
        "text": "Storbritannien, formellt F\u00f6renade konungariket Storbritannien och Nordirland med kortform F\u00f6renade kungariket, \u00e4r en suver\u00e4n stat som best\u00e5r av \u00f6ar bel\u00e4gna vid den nordv\u00e4stra kusten av den europeiska kontinenten. Landet omfattar \u00f6n Storbritannien, den nord\u00f6stra delen av \u00f6n Irland och m\u00e5nga mindre \u00f6ar.",
        "imagesNormal": [
            "united kingdom_normal_1.jpg",
            "united kingdom_normal_2.jpg",
            "united kingdom_normal_3.jpg",
            "united kingdom_normal_4.jpg",
            "united kingdom_normal_5.jpg",
            "united kingdom_normal_6.jpg"
        ],
        "imagesBig": [
            "united kingdom_big_1.jpg",
            "united kingdom_big_2.jpg",
            "united kingdom_big_3.jpg"
        ]
    },
    {
        "id": 4,
        "name": "Sweden",
        "visa": false,
        "languageID": 3,
        "flag": "sweden.png",
        "text": "Sverige ben\u00e4mns formellt Konungariket Sverige \u00e4r en konstitutionell monarki p\u00e5 Skandinaviska halv\u00f6n i Nordeuropa. Sverige har landgr\u00e4ns i v\u00e4st med Norge, i nordost med Finland samt angr\u00e4nsande territorialvatten till Norge i v\u00e4stsydv\u00e4st, Danmark i sydv\u00e4st och Finland i \u00f6st. Sverige \u00e4r en konstitutionell monarki med parlamentarisk demokrati och utvecklad ekonomi. Landet \u00e4r medlem i F\u00f6renta nationerna sedan november 1946 och Europeiska unionen sedan den 1 januari 1995.",
        "imagesNormal": [
            "sweden_normal_1.jpg",
            "sweden_normal_2.jpg",
            "sweden_normal_3.jpg",
            "sweden_normal_4.jpg",
            "sweden_normal_5.jpg",
            "sweden_normal_6.jpg"
        ],
        "imagesBig": [
            "sweden_big_1.jpg",
            "sweden_big_2.jpg",
            "sweden_big_3.jpg"
        ]
    },
    {
        "id": 8,
        "name": "Chile",
        "visa": true,
        "languageID": 0,
        "flag": "chile.png",
        "text": "Chile \u00e4r det l\u00e4ngsta landet i v\u00e4rlden som str\u00e4cker sig fr\u00e5n norr till s\u00f6der i en smal remsa. Republiken Chile (dess officiella namn) har en befolkning p\u00e5 19,7 miljoner m\u00e4nniskor (2021). Huvudstaden och st\u00f6rsta staden \u00e4r Santiago (Santiago de Chile). Det nationella spr\u00e5ket \u00e4r spanska.",
        "imagesNormal": [
            "chile_normal_1.jpg",
            "chile_normal_2.jpg",
            "chile_normal_3.jpg",
            "chile_normal_4.jpg"
        ],
        "imagesBig": [
            "chile_big_1.jpg",
            "chile_big_2.jpg"
        ]
    },
    {
        "id": 5,
        "name": "Mexico",
        "visa": true,
        "languageID": 0,
        "flag": "mexico.png",
        "text": "Mexiko \u00e4r en federal konstitutionell republik i Nordamerika. Landet gr\u00e4nsar i norr till USA, i s\u00f6der och v\u00e4ster till Stilla havet, i syd\u00f6st till Guatemala, Belize, Karibiska havet och i \u00f6ster till Mexikanska golfen. Folkm\u00e4ngden uppgick till cirka 123 miljoner inv\u00e5nare 2016, vilket g\u00f6r Mexiko till det folkrikaste spansktalande omr\u00e5det p\u00e5 jorden.",
        "imagesNormal": [
            "mexico_normal_1.jpg",
            "mexico_normal_2.jpg",
            "mexico_normal_3.jpg",
            "mexico_normal_4.jpg",
            "mexico_normal_5.jpg",
            "mexico_normal_6.jpg"
        ],
        "imagesBig": [
            "mexico_big_1.jpg",
            "mexico_big_2.jpg",
            "mexico_big_3.jpg"
        ]
    },
    {
        "id": 6,
        "name": "USA",
        "visa": true,
        "languageID": 1,
        "flag": "usa.png",
        "text": "Amerikas f\u00f6renta stater \u00e4r en federal republik som best\u00e5r av 50 delstater, ett federalt distrikt och ett flertal olika sj\u00e4lvstyrande omr\u00e5den. Med 9,83 miljoner km2 och med \u00f6ver 328 miljoner inv\u00e5nare \u00e4r USA det tredje st\u00f6rsta landet till total yta, och det tredje st\u00f6rsta till total befolkning. USA \u00e4r en av v\u00e4rldens mest etniskt blandade och m\u00e5ngkulturella nationer, p\u00e5 grund av storskalig invandring fr\u00e5n m\u00e5nga l\u00e4nder.",
        "imagesNormal": [
            "usa_normal_1.jpg",
            "usa_normal_2.jpg",
            "usa_normal_3.jpg",
            "usa_normal_4.jpg"
        ],
        "imagesBig": [
            "usa_big_1.jpg",
            "usa_big_2.jpg"
        ]
    },
    {
        "id": 7,
        "name": "Argentina",
        "visa": true,
        "languageID": 0,
        "flag": "argentina.png",
        "text": "Argentina \u00e4r det n\u00e4st st\u00f6rsta landet i Sydamerika, bildat som en federation av 23 provinser och en sj\u00e4lvst\u00e4ndig stad vid namn Buenos Aires. Argentina \u00e4r det \u00e5ttonde st\u00f6rsta landet i v\u00e4rlden till ytan och \u00e4r befolkningsm\u00e4ssigt den fj\u00e4rde st\u00f6rsta spansktalande nationen efter Mexiko, Colombia och Spanien. Det \u00e4r \u00e4ven v\u00e4rldens st\u00f6rsta spanskspr\u00e5kiga stat sett till ytan.",
        "imagesNormal": [
            "argentina_normal_1.jpg",
            "argentina_normal_2.jpg",
            "argentina_normal_3.jpg",
            "argentina_normal_4.jpg"
        ],
        "imagesBig": [
            "argentina_big_1.jpg",
            "argentina_big_2.jpg"
        ]
    }
];
const CITIES = [
    {
        "id": 0,
        "name": "Madrid",
        "countryID": 0,
        "sun": 305,
        "text": "Madrid \u00e4r Spaniens huvudstad och den st\u00f6rsta staden p\u00e5 Iberiska halv\u00f6n. Med sina 3,2 miljoner inv\u00e5nare i kommunen, och 6 miljoner i storstadsomr\u00e5det, \u00e4r Madrid en av de folkrikaste st\u00e4derna inom EU. Madrid \u00e4r bel\u00e4get p\u00e5 v\u00e4nstra stranden av Manzanares, ett litet tillfl\u00f6de till Tajos biflod Jarama.",
        "imagesNormal": [
            "madrid_normal_1.jpg",
            "madrid_normal_2.jpg",
            "madrid_normal_3.jpg",
            "madrid_normal_4.jpg"
        ],
        "imagesBig": [
            "madrid_big_1.jpg",
            "madrid_big_2.jpg"
        ]
    },
    {
        "id": 1,
        "name": "Sevilla",
        "countryID": 0,
        "sun": 310,
        "text": "Sevilla \u00e4r Spaniens fj\u00e4rde st\u00f6rsta stad med 1,3 miljoner inv\u00e5nare i storstadsomr\u00e5det. Staden grundades av romarna och \u00e4r fylld av gammal charm och historia, h\u00e4r finns bland annat Cristopher Columbus grav. Staden ligger i s\u00f6dra Spanien och \u00e4r av de varmaste i landet med en \u00e5rlig dygnsmedeltemperatur p\u00e5 18,6 \u00b0C.",
        "imagesNormal": [
            "sevilla_normal_1.jpg",
            "sevilla_normal_2.jpg",
            "sevilla_normal_3.jpg",
            "sevilla_normal_4.jpg"
        ],
        "imagesBig": [
            "sevilla_big_1.jpg",
            "sevilla_big_2.jpg"
        ]
    },
    {
        "id": 2,
        "name": "Salamanca",
        "countryID": 0,
        "sun": 280,
        "text": "Salamanca \u00e4r en stad i v\u00e4stra delen av Spanien. Staden \u00e4r bel\u00e4gen i provinsen Kastilien och Leon och avst\u00e5ndet till huvudstaden Madrid (och d\u00e4rmed n\u00e4rmaste stora flygplats Barajas) \u00e4r ungef\u00e4r 21 mil. Sj\u00e4lva staden har 154 000 inv\u00e5nare, medan regionen har ett inv\u00e5narantal p\u00e5 354 000. Salamanca \u00e4r en genuin universitetsstad d\u00e4r ca 20% av alla inv\u00e5nare \u00e4r studerande.",
        "imagesNormal": [
            "salamanca_normal_1.jpg",
            "salamanca_normal_2.jpg",
            "salamanca_normal_3.jpg",
            "salamanca_normal_4.jpg"
        ],
        "imagesBig": [
            "salamanca_big_1.jpg",
            "salamanca_big_2.jpg"
        ]
    },
    {
        "id": 3,
        "name": "Paris",
        "countryID": 1,
        "sun": 222,
        "text": "Paris bes\u00f6ks \u00e5rligen av cirka 30 miljoner utl\u00e4ndska turister. \u00c5r 2019 rankades staden som den andra mest bes\u00f6kta i v\u00e4rlden, efter Bangkok. Popul\u00e4ra turistattraktioner \u00e4r bland annat Eiffeltornet, Notre-Dame, Sacr\u00e9-C\u0153ur, Louvren, Triumfb\u00e5gen och Champs-\u00c9lys\u00e9es.",
        "imagesNormal": [
            "paris_normal_1.jpg",
            "paris_normal_2.jpg",
            "paris_normal_3.jpg",
            "paris_normal_4.jpg"
        ],
        "imagesBig": [
            "paris_big_1.jpg",
            "paris_big_2.jpg"
        ]
    },
    {
        "id": 4,
        "name": "Lyon",
        "countryID": 1,
        "sun": 220,
        "text": "Lyon \u00e4r en stad och kommun i M\u00e9tropole de Lyon och \u00e4r huvudstad i regionen Auvergne-Rh\u00f4ne-Alpes i syd\u00f6stra Frankrike. \u00c5r 2017 hade Lyon 516 092 inv\u00e5nare, vilket g\u00f6r den till Frankrikes tredje st\u00f6rsta stad efter Paris och Marseille. Lyons storstadsomr\u00e5de med f\u00f6rorter utg\u00f6r med sina 2 214 068 inv\u00e5nare Frankrikes n\u00e4st st\u00f6rsta storstadsomr\u00e5de efter Paris.",
        "imagesNormal": [
            "lyon_normal_1.jpg",
            "lyon_normal_2.jpg",
            "lyon_normal_3.jpg",
            "lyon_normal_4.jpg"
        ],
        "imagesBig": [
            "lyon_big_1.jpg",
            "lyon_big_2.jpg"
        ]
    },
    {
        "id": 5,
        "name": "Toulouse",
        "countryID": 1,
        "sun": 287,
        "text": "Toulouse \u00e4r en storstad bel\u00e4gen i s\u00f6dra Frankrike vid floden Garonne. Toulouse \u00e4r k\u00e4nt som den rosa staden (la ville rose) eftersom de flesta \u00e4ldre byggnader \u00e4r byggda av ett lokalt producerat tegel som \u00e4r rosa. Staden \u00e4r \u00e4ven en stor universitetsstad med mer \u00e4n 100 000 studenter. Tolouse erjbuder allt fr\u00e5n cassoulet och fina japanska tr\u00e4dg\u00e5rdar till romerska museum.",
        "imagesNormal": [
            "toulouse_normal_1.jpg",
            "toulouse_normal_2.jpg",
            "toulouse_normal_3.jpg",
            "toulouse_normal_4.jpg"
        ],
        "imagesBig": [
            "toulouse_big_1.jpg",
            "toulouse_big_2.jpg"
        ]
    },
    {
        "id": 6,
        "name": "Nice",
        "countryID": 1,
        "sun": 312,
        "text": "Nice \u00e4r en stad bel\u00e4gen i syd\u00f6stra Frankrike, i regionen Provence-Alpes-C\u00f4te dAzur vid Medelhavskusten och Franska rivieran. Nice \u00e4r en stor turiststad. Den ligger vid Franska rivieran och har en stor m\u00e4ngd solturister fr\u00e5n b\u00e5de Frankrike och andra l\u00e4nder.",
        "imagesNormal": [
            "nice_normal_1.jpg",
            "nice_normal_2.jpg"
        ],
        "imagesBig": [
            "nice_big_1.jpg"
        ]
    },
    {
        "id": 7,
        "name": "Melbourne",
        "countryID": 2,
        "sun": 270,
        "text": "Melbourne \u00e4r en hamnstad i syd\u00f6stra Australien och huvudstad i den australiska delstaten Victoria. Det \u00e4r Australiens n\u00e4st st\u00f6rsta stad med drygt 4,4 miljoner inv\u00e5nare (2015). Melbourne var huvudstad i Australien fr\u00e5n 1 januari 1901, d\u00e5 federationen bildades, fram till 9 maj 1927 d\u00e5 parlamentshuset i Canberra togs i bruk. Staden genomkorsas av floden Yarra.",
        "imagesNormal": [
            "melbourne_normal_1.jpg",
            "melbourne_normal_2.jpg"
        ],
        "imagesBig": [
            "melbourne_big_1.jpg"
        ]
    },
    {
        "id": 8,
        "name": "Sidney",
        "countryID": 2,
        "sun": 310,
        "text": "Sydney \u00e4r Australiens st\u00f6rsta stad och ligger p\u00e5 landets \u00f6stkust. Ungef\u00e4r 4,3 miljoner m\u00e4nniskor bor i omr\u00e5det. Det \u00e4r det sk\u00f6na v\u00e4dret, arkitekturen och det unika hamnomr\u00e5det som gjort staden popul\u00e4r. Fler \u00e4n 2,5 miljoner turister bes\u00f6ker \u00e5rligen Sydney, och det \u00e4r just i hamnomr\u00e5det som bes\u00f6kare flockas. D\u00e4r finns stora turistattraktioner, s\u00e5 som det v\u00e4rldsber\u00f6mda operahuset och hamnens i\u00f6gonfallande h\u00e4ngbro.",
        "imagesNormal": [
            "sidney_normal_1.jpg",
            "sidney_normal_2.jpg",
            "sidney_normal_3.jpg",
            "sidney_normal_4.jpg"
        ],
        "imagesBig": [
            "sidney_big_1.jpg",
            "sidney_big_2.jpg"
        ]
    },
    {
        "id": 9,
        "name": "Canberra",
        "countryID": 2,
        "sun": 290,
        "text": "Canberra \u00e4r Australiens huvudstad. Den \u00e4r bel\u00e4gen p\u00e5 federalt territorium, Australian Capital Territory (ACT). Staden har drygt 350 000 inv\u00e5nare (2009) och \u00e4r Australiens \u00e5ttonde st\u00f6rsta stad samt den st\u00f6rsta stad som inte ligger vid kusten. Omr\u00e5det Canberra byggdes p\u00e5 och omr\u00e5det runt staden best\u00e5r av en blandning av eukalyptussavann, \u00f6ppna gr\u00e4smarker, buskmarker, tr\u00e4skmarker och torra eukalyptusskogar.",
        "imagesNormal": [
            "canberra_normal_1.jpg",
            "canberra_normal_2.jpg"
        ],
        "imagesBig": [
            "canberra_big_1.jpg"
        ]
    },
    {
        "id": 10,
        "name": "London",
        "countryID": 3,
        "sun": 150,
        "text": "Det h\u00e4r \u00e4r inte bara vilken storstad som helst, London \u00e4r Europas st\u00f6rsta metropol med en unik personlighet formad av sina ikoniska landm\u00e4rken, \u00e5rhundraden av historia och sin trendiga mode-, konst- och matkultur. Staden \u00e4r p\u00e5 en och samma g\u00e5ng v\u00e4ldigt brittisk och samtidigt internationellt och londonborna \u00e4r lika bekv\u00e4ma med att diskutera v\u00e4dret som de senaste trenderna med pop-up restauranger och lokalbryggd \u00f6l. ",
        "imagesNormal": [
            "london_normal_1.jpg",
            "london_normal_2.jpg",
            "london_normal_3.jpg",
            "london_normal_4.jpg"
        ],
        "imagesBig": [
            "london_big_1.jpg",
            "london_big_2.jpg"
        ]
    },
    {
        "id": 11,
        "name": "Manchester",
        "countryID": 3,
        "sun": 120,
        "text": "En av juvelerna i norra Englands krona \u00e4r Manchester. Det \u00e4r en levande stad med karakt\u00e4r, k\u00e4nd f\u00f6r sin l\u00e4ttsamma humor och sitt \u00f6verfl\u00f6d av kultur. H\u00e4r finns ett rikt kulturliv, bra mat- och dryckeskultur, och staden \u00e4r lika stolt \u00f6ver sin musikscen som sina fotbollslag.",
        "imagesNormal": [
            "manchester_normal_1.jpg",
            "manchester_normal_2.jpg",
            "manchester_normal_3.jpg",
            "manchester_normal_4.jpg"
        ],
        "imagesBig": [
            "manchester_big_1.jpg",
            "manchester_big_2.jpg"
        ]
    },
    {
        "id": 12,
        "name": "York",
        "countryID": 3,
        "sun": 140,
        "text": "York \u00e4r en stad och distriktshuvudort i North Yorkshire. Den ligger i enhetskommun York och riksdelen norra England, i den centrala delen av landet, 280 km norr om huvudstaden London. York ligger 17 meter \u00f6ver havet och antalet inv\u00e5nare \u00e4r 144 202.",
        "imagesNormal": [
            "york_normal_1.jpg",
            "york_normal_2.jpg"
        ],
        "imagesBig": [
            "york_big_1.jpg"
        ]
    },
    {
        "id": 13,
        "name": "Sheffield",
        "countryID": 3,
        "sun": 150,
        "text": "Sheffield \u00e4r en storstad i Sheffield i South Yorkshire, England. Den har f\u00e5tt sitt namn efter floden Sheaf som flyter genom staden. Orten har 518 090 inv\u00e5nare. Fr\u00e5n att huvudsakligen ha varit en industristad har staden utvecklat en bredare ekonomisk bas och \u00e4r en av de \u00e5tta st\u00f6rsta engelska st\u00e4derna utanf\u00f6r London. Storstadsomr\u00e5det (Sheffield Urban Area) har 640 720 inv\u00e5nare.",
        "imagesNormal": [
            "sheffield_normal_1.jpg",
            "sheffield_normal_2.jpg",
            "sheffield_normal_3.jpg",
            "sheffield_normal_4.jpg"
        ],
        "imagesBig": [
            "sheffield_big_1.jpg",
            "sheffield_big_2.jpg"
        ]
    },
    {
        "id": 14,
        "name": "Bath",
        "countryID": 3,
        "sun": 100,
        "text": "Bath \u00e4r en stad i grevskapet Somerset i sydv\u00e4stra England, Storbritannien. Staden grundades i floden Avons dalar runt naturliga heta k\u00e4llor d\u00e4r romarna byggde bad och ett tempel, vilket gav staden dess d\u00e5varande namn, Aquae Sulis. Edgar kr\u00f6ntes till kung av England i Baths klosterkyrka \u00e5r 973. Genom sina badanl\u00e4ggningar blev staden ett popul\u00e4rt resm\u00e5l under den georgianska eran.",
        "imagesNormal": [
            "bath_normal_1.jpg",
            "bath_normal_2.jpg"
        ],
        "imagesBig": [
            "bath_big_1.jpg"
        ]
    },
    {
        "id": 15,
        "name": "Edinburgh",
        "countryID": 3,
        "sun": 50,
        "text": "Edinburgh har en s\u00e4llsynt charm med smala och kullerstensg\u00e5ngar, som kallas st\u00e4nger p\u00e5 skotska. Staden \u00e4r ocks\u00e5 k\u00e4nd f\u00f6r sina m\u00f6rka h\u00f6rn d\u00e4r skr\u00e4mmande h\u00e4ndelser har \u00e4gt rum, dess majest\u00e4tiska byggnader, otaliga fascinerande museer som \u00e4r fria att bes\u00f6ka och s\u00e4rskilt stadens sn\u00e4lla och \u00f6ppna lokalbefolkningen. Alla ovan n\u00e4mnda g\u00f6r denna stad till en favorit bland dem som har bes\u00f6kt den.",
        "imagesNormal": [
            "edinburgh_normal_1.jpg",
            "edinburgh_normal_2.jpg"
        ],
        "imagesBig": [
            "edinburgh_big_1.jpg"
        ]
    },
    {
        "id": 16,
        "name": "Malmo",
        "countryID": 4,
        "sun": 150,
        "text": "Gr\u00f6na parker och sandstr\u00e4nder i kombination med en rik kultur, historia och modern konst \u2013 i Malm\u00f6 kan du g\u00e5 din egen v\u00e4g, bokstavligt talat. Fr\u00e5n den livliga, centrala shoppingdelen \u00e4r det bara en kort promenad till pittoreska gamla stan och Malm\u00f6hus slott. D\u00e4rifr\u00e5n kan du enkelt forts\u00e4tta till den moderna v\u00e4stra hamnen och njuta av utsikten \u00f6ver \u00d6resundsbron och Turning Torso. Och i Malm\u00f6 \u00e4lskar man mat, dryck och trevligt s\u00e4llskap, s\u00e5 du \u00e4r aldrig l\u00e5ngt fr\u00e5n en bra restaurang eller ett mysigt kaf\u00e9.",
        "imagesNormal": [
            "malmo_normal_1.jpg",
            "malmo_normal_2.jpg"
        ],
        "imagesBig": [
            "malmo_big_1.jpg"
        ]
    },
    {
        "id": 17,
        "name": "Stockholm",
        "countryID": 4,
        "sun": 150,
        "text": "Stockholm \u00e4r Sveriges huvudstad samt landets kulturella, politiska, mediala och ekonomiska centrum. Staden ligger vid M\u00e4larens utlopp i \u00d6stersj\u00f6n, p\u00e5 gr\u00e4nsen mellan landskapen S\u00f6dermanland och Uppland. Staden \u00e4r v\u00e4rldens femte nordligaste huvudstad bland sj\u00e4lvst\u00e4ndiga stater. ",
        "imagesNormal": [
            "stockholm_normal_1.jpg",
            "stockholm_normal_2.jpg",
            "stockholm_normal_3.jpg",
            "stockholm_normal_4.jpg"
        ],
        "imagesBig": [
            "stockholm_big_1.jpg",
            "stockholm_big_2.jpg"
        ]
    },
    {
        "id": 18,
        "name": "Uppsala",
        "countryID": 4,
        "sun": 120,
        "text": "Uppsala \u00e4r en t\u00e4tort i Uppland, centralort i Uppsala kommun och residensstad f\u00f6r Uppsala l\u00e4n. Den \u00e4r Sveriges fj\u00e4rde st\u00f6rsta t\u00e4tort med en befolkning p\u00e5 165 456 inv\u00e5nare (2020), medan hela kommunen har cirka 234 000 inv\u00e5nare (2020). Sedan 1164 \u00e4r Uppsala kyrkligt centrum i Sverige i och med dess \u00e4rkebiskopss\u00e4te inom Svenska kyrkan. Uppsala universitet, grundat 1477, \u00e4r det \u00e4ldsta s\u00e4tet f\u00f6r h\u00f6gre utbildning i Norden.",
        "imagesNormal": [
            "uppsala_normal_1.jpg",
            "uppsala_normal_2.jpg",
            "uppsala_normal_3.jpg",
            "uppsala_normal_4.jpg"
        ],
        "imagesBig": [
            "uppsala_big_1.jpg",
            "uppsala_big_2.jpg"
        ]
    },
    {
        "id": 19,
        "name": "Lund",
        "countryID": 4,
        "sun": 150,
        "text": "Lunds cirka 50 000 svenska och internationella studenter ger staden en s\u00e4rskild puls. Lunds universitet \u00e4r internationellt hyllat f\u00f6r sin forskning och sociala verksamhet. N\u00e5gra av Sveriges b\u00e4sta sk\u00e5despelare, komiker och musiker kommer fr\u00e5n Lund. H\u00e5ll utkik efter de m\u00e5nga publika studenttraditionerna, som students\u00e5ngarnas konsert 1 maj och Lund Comedy Festival.",
        "imagesNormal": [
            "lund_normal_1.jpg",
            "lund_normal_2.jpg"
        ],
        "imagesBig": [
            "lund_big_1.jpg"
        ]
    },
    {
        "id": 20,
        "name": "Santiago",
        "countryID": 8,
        "sun": 290,
        "text": "Santiago de Chile, oftast kallat enbart Santiago, \u00e4r Chiles huvudstad. Sj\u00e4lva kommunen har endast cirka 400 000 inv\u00e5nare, medan hela storstadsomr\u00e5det omfattar lite fler \u00e4n 6 miljoner inv\u00e5nare.",
        "imagesNormal": [
            "santiago_normal_1.jpg",
            "santiago_normal_2.jpg"
        ],
        "imagesBig": [
            "santiago_big_1.jpg"
        ]
    },
    {
        "id": 21,
        "name": "Valparaiso",
        "countryID": 8,
        "sun": 300,
        "text": "Valpara\u00edso \u00e4r en stad i centrala Chile, och \u00e4r huvudort f\u00f6r en region samt en provins med samma namn. Den \u00e5r en av Chiles viktigaste hamnst\u00e4der vid Stilla havets kust, och \u00e4r bel\u00e4gen i den centrala delen av landet, tv\u00e5 timmars bilf\u00e4rd nordv\u00e4st om huvudstaden Santiago. Folkm\u00e4ngden uppg\u00e5r till cirka 250 000 inv\u00e5nare. Under kolonialtiden f\u00f6rblev Valpara\u00edso en by med ett f\u00e5tal hus och en kyrka, men efter Chiles sj\u00e4lvst\u00e4ndighet 1817 blev staden den chilenska flottans f\u00f6rsta hamn och en port till frihandel.",
        "imagesNormal": [
            "valparaiso_normal_1.jpg",
            "valparaiso_normal_2.jpg"
        ],
        "imagesBig": [
            "valparaiso_big_1.jpg"
        ]
    },
    {
        "id": 22,
        "name": "Guadalajara",
        "countryID": 5,
        "sun": 260,
        "text": "Guadalajara \u00e4r en stad och kommun i v\u00e4stra Mexiko och \u00e4r den administrativa huvudorten f\u00f6r delstaten Jalisco. Den \u00e4r landets tredje st\u00f6rsta stad (efter Mexico City och Ecatepec de Morelos) och utg\u00f6r det n\u00e4st st\u00f6rsta storstadsomr\u00e5det, bara Mexico City \u00e4r st\u00f6rre.",
        "imagesNormal": [
            "guadalajara_normal_1.jpg",
            "guadalajara_normal_2.jpg"
        ],
        "imagesBig": [
            "guadalajara_big_1.jpg"
        ]
    },
    {
        "id": 23,
        "name": "Mexico City",
        "countryID": 5,
        "sun": 304,
        "text": "Mexico DF \u00e4r Mexicos huvudstad och har circa 21 miljoner inv\u00e5nare i storstadsomr\u00e5det vilket g\u00f6r staden till en av de folkrikaste i v\u00e4rlden. Huvudstaden \u00e4r det viktigaste ekonomiska, industriella och kulturella centret i landet. Staden ligger i ett omr\u00e5de pr\u00e4glat av 3 000 \u00e5r gammal pre-columbiansk kultur. Sj\u00e4lva stadens historia g\u00e5r dock bara tillbaka till perioden motsvarande europeisk medeltid. P\u00e5 grund av h\u00f6jden \u00f6ver havet har Mexico City ett behagligt subtropiskt h\u00f6glandsklimat. Endast mellan april och juni blir det mycket varmt mitt p\u00e5 dagen, tidvis \u00f6ver 30 \u00b0C, resten av \u00e5ret ligger dagstemperaturen runt 20 \u00b0C, n\u00e5got l\u00e4gre vintertid, n\u00e5got h\u00f6gre sommartid.",
        "imagesNormal": [
            "mexico city_normal_1.jpg",
            "mexico city_normal_2.jpg"
        ],
        "imagesBig": [
            "mexico city_big_1.jpg"
        ]
    },
    {
        "id": 24,
        "name": "Oaxaca",
        "countryID": 5,
        "sun": 300,
        "text": "Oaxaca \u00e4r en delstat i sydv\u00e4stra Mexiko, gr\u00e4nsande till Stilla havet i s\u00f6der. Oaxaca \u00e4r hemtrakt f\u00f6r bland annat urfolken mixtekerna och zapotekerna, men totalt finns det 16 erk\u00e4nda urfolk i regionen. Tack vare omr\u00e5dets karga och avsk\u00e4rmande terr\u00e4ng har urfolkens kultur i st\u00f6rre utstr\u00e4ckning \u00f6verlevt h\u00e4r, j\u00e4mf\u00f6rt med andra delar av Mexiko. I Oaxaca finns det rika arkeologiska och historiska platser, som t.ex. Monte Alb\u00e1n och Mitla.",
        "imagesNormal": [
            "oaxaca_normal_1.jpg",
            "oaxaca_normal_2.jpg"
        ],
        "imagesBig": [
            "oaxaca_big_1.jpg"
        ]
    },
    {
        "id": 25,
        "name": "Boston",
        "countryID": 6,
        "sun": 140,
        "text": "Boston \u00e4r huvudstad i delstaten Massachusetts i USA. Boston \u00e4r den mest befolkade staden i delstaten, och den st\u00f6rsta i regionen New England. \u00c5r 2005 hade staden 596 638 inv\u00e5nare, vilket g\u00f6r det till USA:s elfte st\u00f6rsta storstadsomr\u00e5de. Inv\u00e5narna i Boston kallas p\u00e5 engelska Bostonians.",
        "imagesNormal": [
            "boston_normal_1.jpg",
            "boston_normal_2.jpg"
        ],
        "imagesBig": [
            "boston_big_1.jpg"
        ]
    },
    {
        "id": 26,
        "name": "San Francisco",
        "countryID": 6,
        "sun": 160,
        "text": "San Francisco officiellt City and County of San Francisco \u00e4r en stad i norra Kalifornien i USA. Staden ligger p\u00e5 \u00e4nden av en halv\u00f6 mellan Stilla havet och San Franciscobukten. Det egentliga San Francisco har omkring en miljon inv\u00e5nare, men staden fungerar som nav f\u00f6r omr\u00e5det runt bukten (vilket \u00e4ven innefattar st\u00e4der som San Jose och Oakland) och i omr\u00e5det bor det cirka 8,4 miljoner m\u00e4nniskor.",
        "imagesNormal": [
            "san francisco_normal_1.jpg",
            "san francisco_normal_2.jpg"
        ],
        "imagesBig": [
            "san francisco_big_1.jpg"
        ]
    },
    {
        "id": 27,
        "name": "Washington",
        "countryID": 6,
        "sun": 203,
        "text": "Washington, D.C. \u00e4r huvudstaden i USA. H\u00e4r kan du hitta Vita huset, Washinton Monument och Lincoln Memorial. F\u00f6r den kulturellt intresserade \u00e4r staden \u00e4ven full av konstgallerior och National Gallery of Art. I Washington \u00e5terfinns traditioner och etniciteter fr\u00e5n v\u00e4rlden \u00f6ver, s\u00e5 att hitta god mat blir inga problem!",
        "imagesNormal": [
            "washington_normal_1.jpg",
            "washington_normal_2.jpg"
        ],
        "imagesBig": [
            "washington_big_1.jpg"
        ]
    },
    {
        "id": 28,
        "name": "New York",
        "countryID": 6,
        "sun": 135,
        "text": "New York \u00e4r ansedd som en v\u00e4rldsstad med ett starkt globalt inflytande inom ekonomi, massmedia, politik, utbildning, underh\u00e5llning och mode. Det \u00e4r v\u00e4rldens ledande finansiella centrum och huserar \u00e4ven FN:s h\u00f6gkvarter i stadsdelen Manhattan. Inv\u00e5narna kallas \"New Yorkers\". New Yorks mest k\u00e4nda smeknamn \u00e4r The Big Apple och har \u00e4ven kallats \"staden som aldrig sover\".",
        "imagesNormal": [
            "new york_normal_1.jpg",
            "new york_normal_2.jpg"
        ],
        "imagesBig": [
            "new york_big_1.jpg"
        ]
    },
    {
        "id": 29,
        "name": "Buffalo",
        "countryID": 6,
        "sun": 250,
        "text": "Buffalo \u00e4r den n\u00e4st st\u00f6rsta staden i delstaten New York med en yta av 136,0 km\u00b2 och en befolkning som uppg\u00e5r till cirka 285 000 (2003). Den \u00e4r bel\u00e4gen vid \u00f6stra \u00e4nden av Lake Erie vid utloppet i Niagarafloden. Buffalos n\u00e4rmaste stora grannstad \u00e4r Toronto i Kanada. Buffalo \u00e4r administrativ huvudort (county seat) i Erie County. Storstadsomr\u00e5det Buffalo\u2013Niagara Falls har 1 135 509 inv\u00e5nare (2010).",
        "imagesNormal": [
            "buffalo_normal_1.jpg",
            "buffalo_normal_2.jpg"
        ],
        "imagesBig": [
            "buffalo_big_1.jpg"
        ]
    },
    {
        "id": 30,
        "name": "Atlanta",
        "countryID": 6,
        "sun": 150,
        "text": "Atlanta \u00e4r delstaten Georgias st\u00f6rsta stad och tillika huvudstad. Staden grundades redan p\u00e5 1800-talet, och det finns d\u00e4rf\u00f6r m\u00e5nga historiskt intressanta byggnader och platser att bes\u00f6ka i staden. Landskapet som Atlanta ligger i \u00e4r mycket vacker, och omgivningarna \u00e4r mycket trevliga. Landskapet \u00e4r b\u00f6ljande med m\u00e5nga kullar, och t\u00e4ckt av en fantastisk skog.",
        "imagesNormal": [
            "atlanta_normal_1.jpg",
            "atlanta_normal_2.jpg"
        ],
        "imagesBig": [
            "atlanta_big_1.jpg"
        ]
    },
    {
        "id": 31,
        "name": "Buenos Aires",
        "countryID": 7,
        "sun": 205,
        "text": "Buenos Aires \u00e4r sedan 1880 huvudstad i republiken Argentina. Staden \u00e4r bel\u00e4gen vid R\u00edo de la Platas s\u00f6dra strand och har cirka 2,9 miljoner inv\u00e5nare samt 12,8 miljoner inv\u00e5nare i storstadsomr\u00e5det. Stadens centrum utg\u00f6rs av ett eget federalt distrikt (egentligen autonom stad, ciudad aut\u00f3noma) som omges av provinsen Buenos Aires, vars huvudort La Plata ligger s\u00f6der om Buenos Aires. Buenos Aires betyder ungef\u00e4r \"Den goda luften\" eller \"De goda vindarna\".",
        "imagesNormal": [
            "buenos aires_normal_1.jpg",
            "buenos aires_normal_2.jpg"
        ],
        "imagesBig": [
            "buenos aires_big_1.jpg"
        ]
    },
    {
        "id": 32,
        "name": "Cordoba",
        "countryID": 7,
        "sun": 320,
        "text": "C\u00f3rdoba \u00e4r en stad och kommun i regionen Andalusien i s\u00f6dra Spanien. Den ligger cirka 130 kilometer norr om turistomr\u00e5det Costa del Sol. Folkm\u00e4ngden uppg\u00e5r till cirka 300 000 inv\u00e5nare. C\u00f3rdoba \u00e4r en industristad med livsmedels-, metall- och kemisk industri. Staden \u00e4r ocks\u00e5 bekant f\u00f6r sitt konsthantverk med r\u00f6tter i den moriska tiden \u2013 bland annat filigranarbeten i silver och speciell keramik.",
        "imagesNormal": [
            "cordoba_normal_1.jpg",
            "cordoba_normal_2.jpg"
        ],
        "imagesBig": [
            "cordoba_big_1.jpg"
        ]
    }
];
const UNIVERSITIES = [
    {
        "id": 0,
        "name": "Academia Universitaria de Madrid",
        "cityID": 0
    },
    {
        "id": 1,
        "name": "Universidad de Madrid",
        "cityID": 0
    },
    {
        "id": 2,
        "name": "Polit\u00e9cnica de Madrid",
        "cityID": 0
    },
    {
        "id": 3,
        "name": "Escuela de Estudios Superiores de Sevilla",
        "cityID": 1
    },
    {
        "id": 4,
        "name": "Universidad de Salamanca",
        "cityID": 2
    },
    {
        "id": 5,
        "name": "Polit\u00e9cnica de Salamanca",
        "cityID": 2
    },
    {
        "id": 6,
        "name": "Universit\u00e9 de Paris",
        "cityID": 3
    },
    {
        "id": 7,
        "name": "\u00c9cole Nationale de Hautes \u00c9tudes de Paris",
        "cityID": 3
    },
    {
        "id": 8,
        "name": "L'Acad\u00e9mie de Paris",
        "cityID": 3
    },
    {
        "id": 9,
        "name": "Universit\u00e9 de Lyon",
        "cityID": 4
    },
    {
        "id": 10,
        "name": "L'Acad\u00e9mie de Lyon",
        "cityID": 4
    },
    {
        "id": 11,
        "name": "\u00c9cole Nationale de Hautes \u00c9tudes de Toulouse",
        "cityID": 5
    },
    {
        "id": 12,
        "name": "Universit\u00e9 de Toulouse",
        "cityID": 5
    },
    {
        "id": 13,
        "name": "L'Acad\u00e9mie de Toulouse",
        "cityID": 5
    },
    {
        "id": 14,
        "name": "L'Acad\u00e9mie de Nice",
        "cityID": 6
    },
    {
        "id": 15,
        "name": "Universit\u00e9 de Nice",
        "cityID": 6
    },
    {
        "id": 16,
        "name": "Melbourne University",
        "cityID": 7
    },
    {
        "id": 17,
        "name": "University of Melbourne",
        "cityID": 7
    },
    {
        "id": 18,
        "name": "University of Sidney",
        "cityID": 8
    },
    {
        "id": 19,
        "name": "Sidney School for Advanced Studies",
        "cityID": 8
    },
    {
        "id": 20,
        "name": "Sidney Polytechnic University",
        "cityID": 8
    },
    {
        "id": 21,
        "name": "Canberra Polytechnic University",
        "cityID": 9
    },
    {
        "id": 22,
        "name": "University of Canberra",
        "cityID": 9
    },
    {
        "id": 23,
        "name": "Canberra University",
        "cityID": 9
    },
    {
        "id": 24,
        "name": "London University",
        "cityID": 10
    },
    {
        "id": 25,
        "name": "London School for Advanced Studies",
        "cityID": 10
    },
    {
        "id": 26,
        "name": "University of London",
        "cityID": 10
    },
    {
        "id": 27,
        "name": "University of Manchester",
        "cityID": 11
    },
    {
        "id": 28,
        "name": "Manchester School for Advanced Studies",
        "cityID": 11
    },
    {
        "id": 29,
        "name": "University of York",
        "cityID": 12
    },
    {
        "id": 30,
        "name": "Sheffield Polytechnic University",
        "cityID": 13
    },
    {
        "id": 31,
        "name": "Sheffield School for Advanced Studies",
        "cityID": 13
    },
    {
        "id": 32,
        "name": "University of Sheffield",
        "cityID": 13
    },
    {
        "id": 33,
        "name": "University of Bath",
        "cityID": 14
    },
    {
        "id": 34,
        "name": "Bath School for Advanced Studies",
        "cityID": 14
    },
    {
        "id": 35,
        "name": "University of Edinborough",
        "cityID": 15
    },
    {
        "id": 36,
        "name": "H\u00f6gskolan i Malmo",
        "cityID": 16
    },
    {
        "id": 37,
        "name": "Malmo Akademi",
        "cityID": 16
    },
    {
        "id": 38,
        "name": "H\u00f6gskolan i Stockholm",
        "cityID": 17
    },
    {
        "id": 39,
        "name": "Stockholm Akademi",
        "cityID": 17
    },
    {
        "id": 40,
        "name": "H\u00f6gskolan i Uppsala",
        "cityID": 18
    },
    {
        "id": 41,
        "name": "Uppsala Akademi",
        "cityID": 18
    },
    {
        "id": 42,
        "name": "H\u00f6gskolan i Lund",
        "cityID": 19
    },
    {
        "id": 43,
        "name": "Universidad de Santiago",
        "cityID": 20
    },
    {
        "id": 44,
        "name": "Escuela de Estudios Superiores de Santiago",
        "cityID": 20
    },
    {
        "id": 45,
        "name": "Polit\u00e9cnica de Valparaiso",
        "cityID": 21
    },
    {
        "id": 46,
        "name": "Escuela de Estudios Superiores de Guadalajara",
        "cityID": 22
    },
    {
        "id": 47,
        "name": "Escuela de Estudios Superiores de Mexico DF",
        "cityID": 23
    },
    {
        "id": 48,
        "name": "Escuela de Estudios Superiores de Oaxaca",
        "cityID": 24
    },
    {
        "id": 49,
        "name": "Boston University",
        "cityID": 25
    },
    {
        "id": 50,
        "name": "University of Boston",
        "cityID": 25
    },
    {
        "id": 51,
        "name": "San Francisco University",
        "cityID": 26
    },
    {
        "id": 52,
        "name": "San Francisco Polytechnic University",
        "cityID": 26
    },
    {
        "id": 53,
        "name": "University of Washington",
        "cityID": 27
    },
    {
        "id": 54,
        "name": "Washington School for Advanced Studies",
        "cityID": 27
    },
    {
        "id": 55,
        "name": "Washington Polytechnic University",
        "cityID": 27
    },
    {
        "id": 56,
        "name": "New York University",
        "cityID": 28
    },
    {
        "id": 57,
        "name": "University of New York",
        "cityID": 28
    },
    {
        "id": 58,
        "name": "Buffalo Polytechnic University",
        "cityID": 29
    },
    {
        "id": 59,
        "name": "University of Buffalo",
        "cityID": 29
    },
    {
        "id": 60,
        "name": "University of Atlanta",
        "cityID": 30
    },
    {
        "id": 61,
        "name": "Atlanta University",
        "cityID": 30
    },
    {
        "id": 62,
        "name": "Universidad de Buenos Aires",
        "cityID": 31
    },
    {
        "id": 63,
        "name": "Academia Universitaria de Cordoba",
        "cityID": 32
    },
    {
        "id": 64,
        "name": "Polit\u00e9cnica de Cordoba",
        "cityID": 32
    },
    {
        "id": 65,
        "name": "Escuela de Estudios Superiores de Cordoba",
        "cityID": 32
    }
];
const PROGRAMMES = [
    {
        "id": 0,
        "entryGrades": [
            6.78,
            6.67,
            6.55,
            6.31,
            6.22
        ],
        "exchangeStudents": 6,
        "language": 1,
        "level": 2,
        "localStudents": 21,
        "name": "Engineering and Sustainability",
        "subjectID": 1,
        "successRate": [
            62,
            58,
            56,
            54,
            53
        ],
        "universityID": 0
    },
    {
        "id": 1,
        "entryGrades": [
            8.22,
            8.41,
            8.49,
            8.64,
            8.77
        ],
        "exchangeStudents": 4,
        "language": 0,
        "level": 0,
        "localStudents": 25,
        "name": "Matem\u00e1ticas e historia",
        "subjectID": 0,
        "successRate": [
            41,
            41,
            43,
            46,
            48
        ],
        "universityID": 0
    },
    {
        "id": 2,
        "entryGrades": [
            7.8,
            7.86,
            7.91,
            8.09,
            8.16
        ],
        "exchangeStudents": 4,
        "language": 1,
        "level": 2,
        "localStudents": 16,
        "name": "Philosophy and Sustainability",
        "subjectID": 5,
        "successRate": [
            40,
            45,
            41,
            38,
            44
        ],
        "universityID": 0
    },
    {
        "id": 3,
        "entryGrades": [
            6,
            5.98,
            5.89,
            5.88,
            5.81
        ],
        "exchangeStudents": 6,
        "language": 0,
        "level": 2,
        "localStudents": 20,
        "name": "Sociolog\u00eda aplicadas",
        "subjectID": 4,
        "successRate": [
            70,
            70,
            65,
            64,
            63
        ],
        "universityID": 0
    },
    {
        "id": 4,
        "entryGrades": [
            6.71,
            7.17,
            7.04,
            6.81,
            6.89
        ],
        "exchangeStudents": 4,
        "language": 1,
        "level": 2,
        "localStudents": 15,
        "name": "Advanced Studies in Philosophy",
        "subjectID": 5,
        "successRate": [
            39,
            40,
            44,
            46,
            53
        ],
        "universityID": 0
    },
    {
        "id": 5,
        "entryGrades": [
            5.48,
            5.53,
            5.56,
            5.93,
            6.01
        ],
        "exchangeStudents": 4,
        "language": 1,
        "level": 2,
        "localStudents": 33,
        "name": "Advanced Studies in Engineering",
        "subjectID": 1,
        "successRate": [
            64,
            59,
            56,
            56,
            52
        ],
        "universityID": 1
    },
    {
        "id": 6,
        "entryGrades": [
            8.18,
            8.42,
            8.29,
            8.52,
            8.39
        ],
        "exchangeStudents": 4,
        "language": 0,
        "level": 1,
        "localStudents": 26,
        "name": "Estudios superiores de Derecho",
        "subjectID": 2,
        "successRate": [
            42,
            46,
            52,
            55,
            61
        ],
        "universityID": 1
    },
    {
        "id": 7,
        "entryGrades": [
            8.71,
            8.38,
            8.35,
            8.03,
            7.98
        ],
        "exchangeStudents": 4,
        "language": 0,
        "level": 1,
        "localStudents": 16,
        "name": "Estudios superiores de Dise\u00f1o",
        "subjectID": 6,
        "successRate": [
            65,
            63,
            63,
            59,
            53
        ],
        "universityID": 1
    },
    {
        "id": 8,
        "entryGrades": [
            5.85,
            5.76,
            5.68,
            5.57,
            5.43
        ],
        "exchangeStudents": 6,
        "language": 0,
        "level": 1,
        "localStudents": 35,
        "name": "Sociolog\u00eda y sostenibilidad",
        "subjectID": 4,
        "successRate": [
            58,
            57,
            57,
            63,
            57
        ],
        "universityID": 1
    },
    {
        "id": 9,
        "entryGrades": [
            7.07,
            6.99,
            6.83,
            6.64,
            6.63
        ],
        "exchangeStudents": 5,
        "language": 0,
        "level": 1,
        "localStudents": 33,
        "name": "Estudios superiores de Medicina",
        "subjectID": 3,
        "successRate": [
            58,
            56,
            55,
            53,
            51
        ],
        "universityID": 1
    },
    {
        "id": 10,
        "entryGrades": [
            7.61,
            7.31,
            7.2,
            7.08,
            6.89
        ],
        "exchangeStudents": 5,
        "language": 0,
        "level": 2,
        "localStudents": 17,
        "name": "Estudios superiores de Sociolog\u00eda",
        "subjectID": 4,
        "successRate": [
            41,
            37,
            45,
            44,
            46
        ],
        "universityID": 1
    },
    {
        "id": 11,
        "entryGrades": [
            6.98,
            7.27,
            7.3,
            7.54,
            7.68
        ],
        "exchangeStudents": 5,
        "language": 1,
        "level": 2,
        "localStudents": 20,
        "name": "Design and Sustainability",
        "subjectID": 6,
        "successRate": [
            71,
            69,
            69,
            66,
            65
        ],
        "universityID": 1
    },
    {
        "id": 12,
        "entryGrades": [
            6.19,
            6.38,
            6.46,
            6.37,
            5.86
        ],
        "exchangeStudents": 6,
        "language": 0,
        "level": 0,
        "localStudents": 16,
        "name": "Estudios superiores de undefined",
        "subjectID": 6,
        "successRate": [
            67,
            61,
            70,
            73,
            70
        ],
        "universityID": 1
    },
    {
        "id": 13,
        "entryGrades": [
            6.25,
            6.13,
            5.95,
            5.9,
            5.86
        ],
        "exchangeStudents": 5,
        "language": 0,
        "level": 1,
        "localStudents": 17,
        "name": "Dise\u00f1o y sociedad",
        "subjectID": 6,
        "successRate": [
            49,
            46,
            44,
            42,
            41
        ],
        "universityID": 1
    },
    {
        "id": 14,
        "entryGrades": [
            7.64,
            7.69,
            7.87,
            8.02,
            8.02
        ],
        "exchangeStudents": 4,
        "language": 1,
        "level": 2,
        "localStudents": 18,
        "name": "Applied Mathematics",
        "subjectID": 0,
        "successRate": [
            41,
            43,
            44,
            47,
            47
        ],
        "universityID": 1
    },
    {
        "id": 15,
        "entryGrades": [
            6.38,
            6.23,
            6.19,
            6.16,
            6.14
        ],
        "exchangeStudents": 6,
        "language": 1,
        "level": 0,
        "localStudents": 27,
        "name": "Advanced Studies in Design",
        "subjectID": 6,
        "successRate": [
            64,
            70,
            68,
            64,
            67
        ],
        "universityID": 1
    },
    {
        "id": 16,
        "entryGrades": [
            6.25,
            5.95,
            5.9,
            5.73,
            5.56
        ],
        "exchangeStudents": 5,
        "language": 1,
        "level": 0,
        "localStudents": 27,
        "name": "Engineering and Sustainability",
        "subjectID": 1,
        "successRate": [
            49,
            45,
            47,
            44,
            46
        ],
        "universityID": 2
    },
    {
        "id": 17,
        "entryGrades": [
            7.18,
            7.6,
            7.83,
            7.92,
            8.06
        ],
        "exchangeStudents": 5,
        "language": 0,
        "level": 0,
        "localStudents": 26,
        "name": "Estudios superiores de Derecho",
        "subjectID": 2,
        "successRate": [
            39,
            41,
            47,
            49,
            53
        ],
        "universityID": 2
    },
    {
        "id": 18,
        "entryGrades": [
            6.39,
            6.69,
            6.7,
            6.73,
            6.93
        ],
        "exchangeStudents": 6,
        "language": 1,
        "level": 2,
        "localStudents": 31,
        "name": "Advanced Studies in Engineering",
        "subjectID": 1,
        "successRate": [
            51,
            56,
            53,
            53,
            53
        ],
        "universityID": 2
    },
    {
        "id": 19,
        "entryGrades": [
            7.04,
            6.66,
            7.37,
            7.42,
            6.93
        ],
        "exchangeStudents": 6,
        "language": 0,
        "level": 0,
        "localStudents": 27,
        "name": "Estudios superiores de Filosof\u00eda",
        "subjectID": 5,
        "successRate": [
            53,
            47,
            48,
            46,
            43
        ],
        "universityID": 2
    },
    {
        "id": 20,
        "entryGrades": [
            5.87,
            5.66,
            6.09,
            5.87,
            6.05
        ],
        "exchangeStudents": 4,
        "language": 0,
        "level": 0,
        "localStudents": 30,
        "name": "Estudios superiores de undefined",
        "subjectID": 2,
        "successRate": [
            65,
            66,
            67,
            68,
            72
        ],
        "universityID": 2
    },
    {
        "id": 21,
        "entryGrades": [
            6.19,
            5.99,
            6.51,
            6.49,
            6.57
        ],
        "exchangeStudents": 5,
        "language": 0,
        "level": 0,
        "localStudents": 22,
        "name": "Sociolog\u00eda en el siglo XXI",
        "subjectID": 4,
        "successRate": [
            47,
            52,
            54,
            53,
            53
        ],
        "universityID": 3
    },
    {
        "id": 22,
        "entryGrades": [
            6.15,
            6.16,
            6.2,
            6.25,
            6.38
        ],
        "exchangeStudents": 5,
        "language": 1,
        "level": 1,
        "localStudents": 30,
        "name": "Advanced Studies in Law",
        "subjectID": 2,
        "successRate": [
            69,
            64,
            70,
            76,
            62
        ],
        "universityID": 3
    },
    {
        "id": 23,
        "entryGrades": [
            8.34,
            8.38,
            8.43,
            8.47,
            8.25
        ],
        "exchangeStudents": 4,
        "language": 1,
        "level": 0,
        "localStudents": 22,
        "name": "Mathematics and Sustainability",
        "subjectID": 0,
        "successRate": [
            67,
            68,
            65,
            68,
            72
        ],
        "universityID": 3
    },
    {
        "id": 24,
        "entryGrades": [
            8.02,
            7.66,
            7.64,
            8.09,
            8.46
        ],
        "exchangeStudents": 6,
        "language": 0,
        "level": 2,
        "localStudents": 22,
        "name": "Estudios superiores de Ingenier\u00eda",
        "subjectID": 1,
        "successRate": [
            71,
            67,
            67,
            65,
            64
        ],
        "universityID": 3
    },
    {
        "id": 25,
        "entryGrades": [
            7.31,
            7.21,
            7.16,
            7.08,
            7.04
        ],
        "exchangeStudents": 6,
        "language": 0,
        "level": 2,
        "localStudents": 33,
        "name": "Ingenier\u00eda en el siglo XXI",
        "subjectID": 1,
        "successRate": [
            43,
            40,
            40,
            39,
            36
        ],
        "universityID": 4
    },
    {
        "id": 26,
        "entryGrades": [
            6.1,
            6.08,
            5.91,
            5.77,
            5.68
        ],
        "exchangeStudents": 5,
        "language": 0,
        "level": 1,
        "localStudents": 30,
        "name": "Estudios superiores de Dise\u00f1o",
        "subjectID": 6,
        "successRate": [
            64,
            65,
            62,
            66,
            62
        ],
        "universityID": 4
    },
    {
        "id": 27,
        "entryGrades": [
            7.14,
            7.02,
            6.83,
            6.79,
            6.75
        ],
        "exchangeStudents": 4,
        "language": 0,
        "level": 0,
        "localStudents": 20,
        "name": "Dise\u00f1o en el siglo XXI",
        "subjectID": 6,
        "successRate": [
            48,
            46,
            42,
            41,
            36
        ],
        "universityID": 4
    },
    {
        "id": 28,
        "entryGrades": [
            6.08,
            5.92,
            6.01,
            6.29,
            6.18
        ],
        "exchangeStudents": 4,
        "language": 1,
        "level": 2,
        "localStudents": 27,
        "name": "Engineering and Virtual Reality",
        "subjectID": 1,
        "successRate": [
            61,
            59,
            66,
            56,
            58
        ],
        "universityID": 4
    },
    {
        "id": 29,
        "entryGrades": [
            7.9,
            8.27,
            8.35,
            8.38,
            8.51
        ],
        "exchangeStudents": 6,
        "language": 1,
        "level": 0,
        "localStudents": 15,
        "name": "Advanced Studies in Engineering",
        "subjectID": 1,
        "successRate": [
            58,
            55,
            54,
            50,
            49
        ],
        "universityID": 4
    },
    {
        "id": 30,
        "entryGrades": [
            6.11,
            6.05,
            5.95,
            6.18,
            6
        ],
        "exchangeStudents": 5,
        "language": 0,
        "level": 2,
        "localStudents": 35,
        "name": "Estudios superiores de Filosof\u00eda",
        "subjectID": 5,
        "successRate": [
            63,
            59,
            59,
            60,
            67
        ],
        "universityID": 4
    },
    {
        "id": 31,
        "entryGrades": [
            6.52,
            6.51,
            6.45,
            6.3,
            6.28
        ],
        "exchangeStudents": 5,
        "language": 0,
        "level": 1,
        "localStudents": 35,
        "name": "undefined aplicadas",
        "subjectID": 5,
        "successRate": [
            50,
            56,
            57,
            59,
            64
        ],
        "universityID": 4
    },
    {
        "id": 32,
        "entryGrades": [
            6.31,
            6.5,
            6.7,
            6.79,
            6.91
        ],
        "exchangeStudents": 5,
        "language": 0,
        "level": 2,
        "localStudents": 14,
        "name": "Dise\u00f1o e historia",
        "subjectID": 6,
        "successRate": [
            47,
            43,
            42,
            41,
            40
        ],
        "universityID": 4
    },
    {
        "id": 33,
        "entryGrades": [
            8.06,
            8.03,
            7.96,
            7.86,
            7.79
        ],
        "exchangeStudents": 5,
        "language": 0,
        "level": 1,
        "localStudents": 26,
        "name": "Ingenier\u00eda y sociedad",
        "subjectID": 1,
        "successRate": [
            53,
            54,
            58,
            59,
            65
        ],
        "universityID": 4
    },
    {
        "id": 34,
        "entryGrades": [
            7.61,
            7.62,
            7.58,
            7.77,
            7.78
        ],
        "exchangeStudents": 5,
        "language": 1,
        "level": 0,
        "localStudents": 24,
        "name": "Law in Society",
        "subjectID": 2,
        "successRate": [
            54,
            54,
            56,
            59,
            60
        ],
        "universityID": 4
    },
    {
        "id": 35,
        "entryGrades": [
            5.81,
            5.6,
            5.46,
            5.78,
            6.21
        ],
        "exchangeStudents": 4,
        "language": 0,
        "level": 1,
        "localStudents": 30,
        "name": "Estudios superiores de Matem\u00e1ticas",
        "subjectID": 0,
        "successRate": [
            51,
            52,
            55,
            46,
            53
        ],
        "universityID": 4
    },
    {
        "id": 36,
        "entryGrades": [
            7.64,
            7.84,
            7.94,
            7.97,
            7.28
        ],
        "exchangeStudents": 5,
        "language": 1,
        "level": 0,
        "localStudents": 33,
        "name": "Advanced Studies in Philosophy",
        "subjectID": 5,
        "successRate": [
            75,
            73,
            68,
            66,
            64
        ],
        "universityID": 5
    },
    {
        "id": 37,
        "entryGrades": [
            7.25,
            7.12,
            7.08,
            7.06,
            6.71
        ],
        "exchangeStudents": 6,
        "language": 1,
        "level": 2,
        "localStudents": 23,
        "name": "Advanced Studies in Engineering",
        "subjectID": 1,
        "successRate": [
            64,
            64,
            64,
            60,
            59
        ],
        "universityID": 5
    },
    {
        "id": 38,
        "entryGrades": [
            8.17,
            8.3,
            7.97,
            8.01,
            8.13
        ],
        "exchangeStudents": 6,
        "language": 0,
        "level": 0,
        "localStudents": 21,
        "name": "Dise\u00f1o e historia",
        "subjectID": 6,
        "successRate": [
            55,
            58,
            59,
            61,
            68
        ],
        "universityID": 5
    },
    {
        "id": 39,
        "entryGrades": [
            7.02,
            6.72,
            6.67,
            6.56,
            6.26
        ],
        "exchangeStudents": 5,
        "language": 0,
        "level": 2,
        "localStudents": 23,
        "name": "Estudios superiores de Matem\u00e1ticas",
        "subjectID": 0,
        "successRate": [
            69,
            63,
            60,
            55,
            54
        ],
        "universityID": 5
    },
    {
        "id": 40,
        "entryGrades": [
            6.36,
            6.49,
            6.58,
            6.28,
            6.2
        ],
        "exchangeStudents": 6,
        "language": 1,
        "level": 1,
        "localStudents": 22,
        "name": "Advanced Studies in Medicine",
        "subjectID": 3,
        "successRate": [
            38,
            42,
            42,
            44,
            46
        ],
        "universityID": 5
    },
    {
        "id": 41,
        "entryGrades": [
            7.22,
            7,
            7.32,
            7.17,
            7.54
        ],
        "exchangeStudents": 6,
        "language": 1,
        "level": 2,
        "localStudents": 20,
        "name": "Philosophy and Virtual Reality",
        "subjectID": 5,
        "successRate": [
            61,
            61,
            66,
            67,
            71
        ],
        "universityID": 5
    },
    {
        "id": 42,
        "entryGrades": [
            7.43,
            7.18,
            7.41,
            7.51,
            7.49
        ],
        "exchangeStudents": 6,
        "language": 1,
        "level": 0,
        "localStudents": 24,
        "name": "Human Philosophy",
        "subjectID": 5,
        "successRate": [
            63,
            65,
            66,
            62,
            66
        ],
        "universityID": 5
    },
    {
        "id": 43,
        "entryGrades": [
            6.14,
            6.13,
            6.03,
            5.88,
            5.8
        ],
        "exchangeStudents": 5,
        "language": 1,
        "level": 1,
        "localStudents": 22,
        "name": "Mathematics and Sustainability",
        "subjectID": 0,
        "successRate": [
            46,
            53,
            37,
            51,
            53
        ],
        "universityID": 5
    },
    {
        "id": 44,
        "entryGrades": [
            6.77,
            6.7,
            6.65,
            6.55,
            6.38
        ],
        "exchangeStudents": 5,
        "language": 1,
        "level": 1,
        "localStudents": 19,
        "name": "Design and History",
        "subjectID": 6,
        "successRate": [
            64,
            65,
            68,
            71,
            72
        ],
        "universityID": 5
    },
    {
        "id": 45,
        "entryGrades": [
            6.03,
            5.96,
            5.8,
            5.8,
            5.67
        ],
        "exchangeStudents": 4,
        "language": 1,
        "level": 0,
        "localStudents": 26,
        "name": "Philosophy in Society",
        "subjectID": 5,
        "successRate": [
            64,
            59,
            59,
            58,
            56
        ],
        "universityID": 5
    },
    {
        "id": 46,
        "entryGrades": [
            7.23,
            7.33,
            7.34,
            7.34,
            7.25
        ],
        "exchangeStudents": 6,
        "language": 0,
        "level": 1,
        "localStudents": 14,
        "name": "Estudios superiores de Ingenier\u00eda",
        "subjectID": 1,
        "successRate": [
            59,
            57,
            55,
            60,
            53
        ],
        "universityID": 5
    },
    {
        "id": 47,
        "entryGrades": [
            8.24,
            8.13,
            8.07,
            8,
            7.69
        ],
        "exchangeStudents": 5,
        "language": 0,
        "level": 2,
        "localStudents": 14,
        "name": "Estudios superiores de Medicina",
        "subjectID": 3,
        "successRate": [
            54,
            57,
            54,
            58,
            61
        ],
        "universityID": 5
    },
    {
        "id": 48,
        "entryGrades": [
            6.77,
            6.48,
            6.46,
            6.49,
            6.48
        ],
        "exchangeStudents": 5,
        "language": 1,
        "level": 1,
        "localStudents": 35,
        "name": "Advanced Studies in Sociology",
        "subjectID": 4,
        "successRate": [
            72,
            70,
            69,
            68,
            67
        ],
        "universityID": 6
    },
    {
        "id": 49,
        "entryGrades": [
            6.85,
            6.98,
            6.96,
            6.7,
            6.65
        ],
        "exchangeStudents": 6,
        "language": 1,
        "level": 0,
        "localStudents": 12,
        "name": "Design in the 21:st Century",
        "subjectID": 6,
        "successRate": [
            53,
            49,
            49,
            49,
            46
        ],
        "universityID": 6
    },
    {
        "id": 50,
        "entryGrades": [
            8.22,
            8.34,
            8.41,
            8.59,
            8.63
        ],
        "exchangeStudents": 5,
        "language": 2,
        "level": 2,
        "localStudents": 32,
        "name": "\u00c9tudes avanc\u00e9s en Droit",
        "subjectID": 2,
        "successRate": [
            56,
            53,
            52,
            50,
            45
        ],
        "universityID": 6
    },
    {
        "id": 51,
        "entryGrades": [
            7.39,
            7.59,
            7.75,
            7.87,
            7.97
        ],
        "exchangeStudents": 4,
        "language": 1,
        "level": 2,
        "localStudents": 32,
        "name": "Applied Philosophy",
        "subjectID": 5,
        "successRate": [
            58,
            59,
            60,
            64,
            65
        ],
        "universityID": 6
    },
    {
        "id": 52,
        "entryGrades": [
            8.55,
            8.34,
            8.14,
            8.07,
            7.77
        ],
        "exchangeStudents": 4,
        "language": 1,
        "level": 2,
        "localStudents": 21,
        "name": "Advanced Studies in undefined",
        "subjectID": 4,
        "successRate": [
            56,
            52,
            50,
            63,
            52
        ],
        "universityID": 6
    },
    {
        "id": 53,
        "entryGrades": [
            7.29,
            7.33,
            7.34,
            7.3,
            7.28
        ],
        "exchangeStudents": 6,
        "language": 1,
        "level": 1,
        "localStudents": 24,
        "name": "Philosophy and History",
        "subjectID": 5,
        "successRate": [
            66,
            67,
            67,
            67,
            68
        ],
        "universityID": 7
    },
    {
        "id": 54,
        "entryGrades": [
            7.07,
            7.3,
            7.33,
            7.4,
            7.5
        ],
        "exchangeStudents": 5,
        "language": 1,
        "level": 2,
        "localStudents": 35,
        "name": "Advanced Studies in Medicine",
        "subjectID": 3,
        "successRate": [
            65,
            73,
            63,
            68,
            72
        ],
        "universityID": 7
    },
    {
        "id": 55,
        "entryGrades": [
            5.98,
            5.65,
            6.1,
            5.93,
            6.22
        ],
        "exchangeStudents": 4,
        "language": 1,
        "level": 1,
        "localStudents": 19,
        "name": "Human undefined",
        "subjectID": 5,
        "successRate": [
            59,
            60,
            62,
            62,
            66
        ],
        "universityID": 7
    },
    {
        "id": 56,
        "entryGrades": [
            6.93,
            6.94,
            7.04,
            7.23,
            7.28
        ],
        "exchangeStudents": 5,
        "language": 1,
        "level": 0,
        "localStudents": 34,
        "name": "Applied Sociology",
        "subjectID": 4,
        "successRate": [
            63,
            65,
            67,
            68,
            70
        ],
        "universityID": 7
    },
    {
        "id": 57,
        "entryGrades": [
            6.47,
            6.41,
            6.41,
            6.34,
            6.26
        ],
        "exchangeStudents": 6,
        "language": 1,
        "level": 2,
        "localStudents": 35,
        "name": "Human Sociology",
        "subjectID": 4,
        "successRate": [
            54,
            54,
            50,
            47,
            47
        ],
        "universityID": 7
    },
    {
        "id": 58,
        "entryGrades": [
            8.01,
            8.06,
            8.22,
            8.24,
            8.28
        ],
        "exchangeStudents": 5,
        "language": 1,
        "level": 0,
        "localStudents": 16,
        "name": "Advanced Studies in Engineering",
        "subjectID": 1,
        "successRate": [
            78,
            72,
            68,
            65,
            65
        ],
        "universityID": 7
    },
    {
        "id": 59,
        "entryGrades": [
            6,
            6.05,
            6.22,
            6.39,
            6.42
        ],
        "exchangeStudents": 6,
        "language": 2,
        "level": 0,
        "localStudents": 25,
        "name": "Design et la France",
        "subjectID": 6,
        "successRate": [
            63,
            56,
            54,
            53,
            49
        ],
        "universityID": 7
    },
    {
        "id": 60,
        "entryGrades": [
            7.74,
            7.57,
            7.56,
            7.53,
            7.45
        ],
        "exchangeStudents": 5,
        "language": 1,
        "level": 2,
        "localStudents": 12,
        "name": "Applied undefined",
        "subjectID": 4,
        "successRate": [
            53,
            55,
            58,
            59,
            61
        ],
        "universityID": 7
    },
    {
        "id": 61,
        "entryGrades": [
            7.72,
            7.77,
            7.9,
            7.92,
            8.01
        ],
        "exchangeStudents": 5,
        "language": 2,
        "level": 2,
        "localStudents": 19,
        "name": "\u00c9tudes avanc\u00e9s en Medicine",
        "subjectID": 3,
        "successRate": [
            39,
            40,
            43,
            44,
            45
        ],
        "universityID": 7
    },
    {
        "id": 62,
        "entryGrades": [
            8.14,
            8.52,
            8.22,
            7.84,
            8.07
        ],
        "exchangeStudents": 5,
        "language": 2,
        "level": 1,
        "localStudents": 28,
        "name": "\u00c9tudes avanc\u00e9s en Medicine",
        "subjectID": 3,
        "successRate": [
            50,
            52,
            56,
            59,
            60
        ],
        "universityID": 8
    },
    {
        "id": 63,
        "entryGrades": [
            7.23,
            7.22,
            6.92,
            6.61,
            6.54
        ],
        "exchangeStudents": 6,
        "language": 2,
        "level": 2,
        "localStudents": 30,
        "name": "Medicine et la France",
        "subjectID": 3,
        "successRate": [
            53,
            56,
            47,
            59,
            50
        ],
        "universityID": 8
    },
    {
        "id": 64,
        "entryGrades": [
            5.33,
            5.72,
            5.92,
            6.11,
            6.15
        ],
        "exchangeStudents": 4,
        "language": 1,
        "level": 2,
        "localStudents": 21,
        "name": "Design in Society",
        "subjectID": 6,
        "successRate": [
            56,
            55,
            58,
            56,
            49
        ],
        "universityID": 8
    },
    {
        "id": 65,
        "entryGrades": [
            6.3,
            6.51,
            6.31,
            6.41,
            6.3
        ],
        "exchangeStudents": 6,
        "language": 2,
        "level": 1,
        "localStudents": 29,
        "name": "Design et durabilit\u00e9",
        "subjectID": 6,
        "successRate": [
            69,
            65,
            62,
            62,
            58
        ],
        "universityID": 8
    },
    {
        "id": 66,
        "entryGrades": [
            6.4,
            6.47,
            6.54,
            6.66,
            6.79
        ],
        "exchangeStudents": 4,
        "language": 2,
        "level": 2,
        "localStudents": 12,
        "name": "\u00c9tudes avanc\u00e9s en Design",
        "subjectID": 6,
        "successRate": [
            62,
            61,
            60,
            56,
            53
        ],
        "universityID": 8
    },
    {
        "id": 67,
        "entryGrades": [
            7.09,
            7.02,
            6.92,
            6.86,
            6.79
        ],
        "exchangeStudents": 4,
        "language": 1,
        "level": 2,
        "localStudents": 23,
        "name": "Design and Sustainability",
        "subjectID": 6,
        "successRate": [
            67,
            66,
            65,
            59,
            58
        ],
        "universityID": 9
    },
    {
        "id": 68,
        "entryGrades": [
            5.6,
            5.7,
            5.7,
            5.8,
            5.9
        ],
        "exchangeStudents": 6,
        "language": 2,
        "level": 1,
        "localStudents": 27,
        "name": "Medicine et societ\u00e9",
        "subjectID": 3,
        "successRate": [
            58,
            58,
            56,
            55,
            54
        ],
        "universityID": 9
    },
    {
        "id": 69,
        "entryGrades": [
            6.61,
            6.5,
            6.36,
            6.33,
            6.2
        ],
        "exchangeStudents": 6,
        "language": 2,
        "level": 2,
        "localStudents": 16,
        "name": "\u00c9tudes avanc\u00e9s en Droit",
        "subjectID": 2,
        "successRate": [
            51,
            53,
            49,
            52,
            46
        ],
        "universityID": 9
    },
    {
        "id": 70,
        "entryGrades": [
            7.42,
            7.43,
            7.51,
            7.64,
            7.86
        ],
        "exchangeStudents": 5,
        "language": 1,
        "level": 0,
        "localStudents": 35,
        "name": "Applied Sociology",
        "subjectID": 4,
        "successRate": [
            62,
            64,
            64,
            65,
            67
        ],
        "universityID": 9
    },
    {
        "id": 71,
        "entryGrades": [
            7.06,
            6.84,
            7.43,
            6.83,
            6.8
        ],
        "exchangeStudents": 6,
        "language": 2,
        "level": 0,
        "localStudents": 28,
        "name": "Ing\u00e9nierie et societ\u00e9",
        "subjectID": 1,
        "successRate": [
            40,
            46,
            51,
            52,
            55
        ],
        "universityID": 9
    },
    {
        "id": 72,
        "entryGrades": [
            6.93,
            6.83,
            6.77,
            6.58,
            6.55
        ],
        "exchangeStudents": 5,
        "language": 1,
        "level": 0,
        "localStudents": 22,
        "name": "Design in the 21:st Century",
        "subjectID": 6,
        "successRate": [
            68,
            67,
            63,
            57,
            56
        ],
        "universityID": 9
    },
    {
        "id": 73,
        "entryGrades": [
            6.35,
            6.29,
            6.16,
            6.03,
            5.8
        ],
        "exchangeStudents": 5,
        "language": 2,
        "level": 0,
        "localStudents": 32,
        "name": "\u00c9tudes avanc\u00e9s en Filosofie",
        "subjectID": 5,
        "successRate": [
            52,
            53,
            56,
            59,
            60
        ],
        "universityID": 9
    },
    {
        "id": 74,
        "entryGrades": [
            6.49,
            6.52,
            6.78,
            7.1,
            7.18
        ],
        "exchangeStudents": 6,
        "language": 2,
        "level": 2,
        "localStudents": 32,
        "name": "Design et Histoire",
        "subjectID": 6,
        "successRate": [
            66,
            70,
            73,
            70,
            65
        ],
        "universityID": 9
    },
    {
        "id": 75,
        "entryGrades": [
            7.82,
            7.79,
            7.77,
            7.7,
            7.52
        ],
        "exchangeStudents": 4,
        "language": 1,
        "level": 0,
        "localStudents": 19,
        "name": "Advanced Studies in Design",
        "subjectID": 6,
        "successRate": [
            50,
            51,
            55,
            56,
            63
        ],
        "universityID": 9
    },
    {
        "id": 76,
        "entryGrades": [
            5.83,
            5.99,
            6.02,
            6.29,
            6.29
        ],
        "exchangeStudents": 4,
        "language": 1,
        "level": 0,
        "localStudents": 13,
        "name": "Advanced Studies in Mathematics",
        "subjectID": 0,
        "successRate": [
            39,
            39,
            46,
            46,
            55
        ],
        "universityID": 9
    },
    {
        "id": 77,
        "entryGrades": [
            8.15,
            7.99,
            7.82,
            7.81,
            7.79
        ],
        "exchangeStudents": 6,
        "language": 1,
        "level": 1,
        "localStudents": 17,
        "name": "Mathematics and History",
        "subjectID": 0,
        "successRate": [
            67,
            61,
            59,
            58,
            56
        ],
        "universityID": 9
    },
    {
        "id": 78,
        "entryGrades": [
            6.27,
            6.2,
            6.61,
            6.61,
            5.96
        ],
        "exchangeStudents": 4,
        "language": 2,
        "level": 1,
        "localStudents": 32,
        "name": "\u00c9tudes avanc\u00e9s en Design",
        "subjectID": 6,
        "successRate": [
            62,
            66,
            67,
            72,
            73
        ],
        "universityID": 10
    },
    {
        "id": 79,
        "entryGrades": [
            7.8,
            7.69,
            7.67,
            7.58,
            7.57
        ],
        "exchangeStudents": 6,
        "language": 2,
        "level": 2,
        "localStudents": 30,
        "name": "Droit et durabilit\u00e9",
        "subjectID": 2,
        "successRate": [
            66,
            66,
            63,
            57,
            52
        ],
        "universityID": 10
    },
    {
        "id": 80,
        "entryGrades": [
            6.88,
            7.18,
            7.29,
            7.31,
            7.38
        ],
        "exchangeStudents": 6,
        "language": 1,
        "level": 2,
        "localStudents": 26,
        "name": "Mathematics in Society",
        "subjectID": 0,
        "successRate": [
            49,
            48,
            46,
            46,
            45
        ],
        "universityID": 10
    },
    {
        "id": 81,
        "entryGrades": [
            6.91,
            7.11,
            7.32,
            7.5,
            7.57
        ],
        "exchangeStudents": 4,
        "language": 1,
        "level": 1,
        "localStudents": 18,
        "name": "Advanced Studies in Law",
        "subjectID": 2,
        "successRate": [
            42,
            38,
            41,
            34,
            46
        ],
        "universityID": 10
    },
    {
        "id": 82,
        "entryGrades": [
            6.57,
            6.87,
            7.14,
            7.22,
            7.22
        ],
        "exchangeStudents": 4,
        "language": 2,
        "level": 1,
        "localStudents": 26,
        "name": "Design appliqu\u00e9s",
        "subjectID": 6,
        "successRate": [
            50,
            56,
            45,
            53,
            56
        ],
        "universityID": 10
    },
    {
        "id": 83,
        "entryGrades": [
            5.39,
            5.4,
            5.57,
            5.8,
            5.81
        ],
        "exchangeStudents": 6,
        "language": 2,
        "level": 2,
        "localStudents": 12,
        "name": "Design et r\u00e9alit\u00e9 virtuelle",
        "subjectID": 6,
        "successRate": [
            54,
            52,
            49,
            48,
            47
        ],
        "universityID": 10
    },
    {
        "id": 84,
        "entryGrades": [
            5.94,
            5.95,
            5.98,
            6.07,
            6.16
        ],
        "exchangeStudents": 6,
        "language": 2,
        "level": 2,
        "localStudents": 23,
        "name": "\u00c9tudes avanc\u00e9s en Ing\u00e9nierie",
        "subjectID": 1,
        "successRate": [
            53,
            51,
            55,
            56,
            60
        ],
        "universityID": 10
    },
    {
        "id": 85,
        "entryGrades": [
            7.85,
            7.77,
            7.77,
            7.72,
            7.63
        ],
        "exchangeStudents": 5,
        "language": 1,
        "level": 1,
        "localStudents": 12,
        "name": "Philosophy and History",
        "subjectID": 5,
        "successRate": [
            50,
            52,
            56,
            56,
            61
        ],
        "universityID": 10
    },
    {
        "id": 86,
        "entryGrades": [
            7.12,
            7.02,
            6.98,
            6.69,
            6.61
        ],
        "exchangeStudents": 6,
        "language": 2,
        "level": 1,
        "localStudents": 30,
        "name": "\u00c9tudes avanc\u00e9s en Filosofie",
        "subjectID": 5,
        "successRate": [
            55,
            55,
            61,
            61,
            62
        ],
        "universityID": 10
    },
    {
        "id": 87,
        "entryGrades": [
            7.76,
            7.66,
            7.63,
            7.89,
            7.66
        ],
        "exchangeStudents": 4,
        "language": 2,
        "level": 2,
        "localStudents": 34,
        "name": "\u00c9tudes avanc\u00e9s en Droit",
        "subjectID": 2,
        "successRate": [
            71,
            66,
            66,
            62,
            60
        ],
        "universityID": 10
    },
    {
        "id": 88,
        "entryGrades": [
            6.02,
            5.95,
            5.8,
            5.76,
            5.75
        ],
        "exchangeStudents": 6,
        "language": 1,
        "level": 0,
        "localStudents": 34,
        "name": "Design and Sustainability",
        "subjectID": 6,
        "successRate": [
            55,
            57,
            57,
            58,
            58
        ],
        "universityID": 10
    },
    {
        "id": 89,
        "entryGrades": [
            6.43,
            6.19,
            6.07,
            6.01,
            6
        ],
        "exchangeStudents": 4,
        "language": 1,
        "level": 2,
        "localStudents": 26,
        "name": "Advanced Studies in Medicine",
        "subjectID": 3,
        "successRate": [
            65,
            74,
            59,
            70,
            70
        ],
        "universityID": 11
    },
    {
        "id": 90,
        "entryGrades": [
            8.33,
            8.32,
            8.24,
            8.23,
            8.12
        ],
        "exchangeStudents": 4,
        "language": 1,
        "level": 2,
        "localStudents": 29,
        "name": "Applied Medicine",
        "subjectID": 3,
        "successRate": [
            53,
            48,
            48,
            56,
            55
        ],
        "universityID": 11
    },
    {
        "id": 91,
        "entryGrades": [
            7.25,
            7.38,
            7.44,
            7.59,
            7.41
        ],
        "exchangeStudents": 5,
        "language": 1,
        "level": 0,
        "localStudents": 25,
        "name": "Law and History",
        "subjectID": 2,
        "successRate": [
            66,
            66,
            69,
            69,
            71
        ],
        "universityID": 11
    },
    {
        "id": 92,
        "entryGrades": [
            7.86,
            7.78,
            7.69,
            7.61,
            7.5
        ],
        "exchangeStudents": 6,
        "language": 1,
        "level": 2,
        "localStudents": 17,
        "name": "Law in Society",
        "subjectID": 2,
        "successRate": [
            54,
            55,
            51,
            59,
            57
        ],
        "universityID": 11
    },
    {
        "id": 93,
        "entryGrades": [
            7.62,
            7.48,
            7.4,
            7.39,
            7.34
        ],
        "exchangeStudents": 4,
        "language": 1,
        "level": 1,
        "localStudents": 12,
        "name": "Mathematics in the 21:st Century",
        "subjectID": 0,
        "successRate": [
            60,
            61,
            64,
            70,
            71
        ],
        "universityID": 11
    },
    {
        "id": 94,
        "entryGrades": [
            8.45,
            8.41,
            8.35,
            8.26,
            8.14
        ],
        "exchangeStudents": 6,
        "language": 1,
        "level": 2,
        "localStudents": 16,
        "name": "Philosophy in Society",
        "subjectID": 5,
        "successRate": [
            45,
            47,
            41,
            48,
            44
        ],
        "universityID": 11
    },
    {
        "id": 95,
        "entryGrades": [
            8.44,
            8.08,
            8.6,
            8.39,
            8.39
        ],
        "exchangeStudents": 4,
        "language": 2,
        "level": 0,
        "localStudents": 35,
        "name": "Droit appliqu\u00e9s",
        "subjectID": 2,
        "successRate": [
            66,
            60,
            60,
            55,
            54
        ],
        "universityID": 11
    },
    {
        "id": 96,
        "entryGrades": [
            7.52,
            7.6,
            7.65,
            7.83,
            8.12
        ],
        "exchangeStudents": 5,
        "language": 1,
        "level": 1,
        "localStudents": 18,
        "name": "Applied undefined",
        "subjectID": 3,
        "successRate": [
            37,
            39,
            41,
            42,
            46
        ],
        "universityID": 11
    },
    {
        "id": 97,
        "entryGrades": [
            7.54,
            7.54,
            7.61,
            7.71,
            7.84
        ],
        "exchangeStudents": 5,
        "language": 2,
        "level": 2,
        "localStudents": 34,
        "name": "\u00c9tudes avanc\u00e9s en Medicine",
        "subjectID": 3,
        "successRate": [
            43,
            45,
            48,
            49,
            51
        ],
        "universityID": 11
    },
    {
        "id": 98,
        "entryGrades": [
            8.02,
            8.23,
            8.38,
            8.4,
            8.43
        ],
        "exchangeStudents": 6,
        "language": 2,
        "level": 1,
        "localStudents": 21,
        "name": "\u00c9tudes avanc\u00e9s en Design",
        "subjectID": 6,
        "successRate": [
            52,
            46,
            44,
            41,
            40
        ],
        "universityID": 11
    },
    {
        "id": 99,
        "entryGrades": [
            7.71,
            7.68,
            7.56,
            7.51,
            7.48
        ],
        "exchangeStudents": 5,
        "language": 1,
        "level": 1,
        "localStudents": 19,
        "name": "Medicine in Society",
        "subjectID": 3,
        "successRate": [
            67,
            66,
            61,
            55,
            51
        ],
        "universityID": 12
    },
    {
        "id": 100,
        "entryGrades": [
            8.37,
            8.2,
            8.67,
            8.25,
            8.31
        ],
        "exchangeStudents": 5,
        "language": 1,
        "level": 1,
        "localStudents": 29,
        "name": "Philosophy and History",
        "subjectID": 5,
        "successRate": [
            32,
            38,
            38,
            40,
            42
        ],
        "universityID": 12
    },
    {
        "id": 101,
        "entryGrades": [
            8.03,
            8.07,
            8.15,
            8.23,
            8.3
        ],
        "exchangeStudents": 6,
        "language": 2,
        "level": 0,
        "localStudents": 33,
        "name": "Medicine et la France",
        "subjectID": 3,
        "successRate": [
            65,
            64,
            58,
            56,
            51
        ],
        "universityID": 12
    },
    {
        "id": 102,
        "entryGrades": [
            7.45,
            7.25,
            7.25,
            7.17,
            7.01
        ],
        "exchangeStudents": 6,
        "language": 1,
        "level": 1,
        "localStudents": 21,
        "name": "Advanced Studies in Mathematics",
        "subjectID": 0,
        "successRate": [
            49,
            46,
            44,
            44,
            42
        ],
        "universityID": 12
    },
    {
        "id": 103,
        "entryGrades": [
            7.91,
            7.9,
            7.84,
            7.65,
            7.54
        ],
        "exchangeStudents": 4,
        "language": 2,
        "level": 1,
        "localStudents": 17,
        "name": "\u00c9tudes avanc\u00e9s en Ing\u00e9nierie",
        "subjectID": 1,
        "successRate": [
            67,
            60,
            62,
            74,
            66
        ],
        "universityID": 12
    },
    {
        "id": 104,
        "entryGrades": [
            6.04,
            6.27,
            6.38,
            6.41,
            6.69
        ],
        "exchangeStudents": 4,
        "language": 1,
        "level": 2,
        "localStudents": 34,
        "name": "Medicine in the 21:st Century",
        "subjectID": 3,
        "successRate": [
            51,
            54,
            49,
            54,
            49
        ],
        "universityID": 12
    },
    {
        "id": 105,
        "entryGrades": [
            7.18,
            7.17,
            6.97,
            6.88,
            6.73
        ],
        "exchangeStudents": 5,
        "language": 1,
        "level": 1,
        "localStudents": 24,
        "name": "Engineering and Virtual Reality",
        "subjectID": 1,
        "successRate": [
            47,
            40,
            44,
            46,
            51
        ],
        "universityID": 12
    },
    {
        "id": 106,
        "entryGrades": [
            7.98,
            7.9,
            7.86,
            7.6,
            7.44
        ],
        "exchangeStudents": 5,
        "language": 2,
        "level": 1,
        "localStudents": 27,
        "name": "\u00c9tudes avanc\u00e9s en undefined",
        "subjectID": 1,
        "successRate": [
            41,
            42,
            45,
            48,
            50
        ],
        "universityID": 12
    },
    {
        "id": 107,
        "entryGrades": [
            8.52,
            8.51,
            8.5,
            8.42,
            8.12
        ],
        "exchangeStudents": 4,
        "language": 2,
        "level": 2,
        "localStudents": 25,
        "name": "\u00c9tudes avanc\u00e9s en Design",
        "subjectID": 6,
        "successRate": [
            56,
            53,
            50,
            46,
            45
        ],
        "universityID": 12
    },
    {
        "id": 108,
        "entryGrades": [
            5.42,
            5.45,
            5.52,
            5.61,
            5.77
        ],
        "exchangeStudents": 5,
        "language": 2,
        "level": 2,
        "localStudents": 25,
        "name": "\u00c9tudes avanc\u00e9s en Droit",
        "subjectID": 2,
        "successRate": [
            60,
            64,
            66,
            61,
            63
        ],
        "universityID": 12
    },
    {
        "id": 109,
        "entryGrades": [
            7.09,
            7.04,
            7.01,
            6.83,
            6.59
        ],
        "exchangeStudents": 5,
        "language": 1,
        "level": 2,
        "localStudents": 18,
        "name": "Human Mathematics",
        "subjectID": 0,
        "successRate": [
            61,
            56,
            53,
            52,
            51
        ],
        "universityID": 12
    },
    {
        "id": 110,
        "entryGrades": [
            6.65,
            6.68,
            6.69,
            6.53,
            6.9
        ],
        "exchangeStudents": 4,
        "language": 2,
        "level": 0,
        "localStudents": 22,
        "name": "undefined et la France",
        "subjectID": 6,
        "successRate": [
            46,
            44,
            40,
            37,
            36
        ],
        "universityID": 12
    },
    {
        "id": 111,
        "entryGrades": [
            8.4,
            8.43,
            8.41,
            8.34,
            8.23
        ],
        "exchangeStudents": 4,
        "language": 2,
        "level": 2,
        "localStudents": 24,
        "name": "\u00c9tudes avanc\u00e9s en Mat\u00e9matiques",
        "subjectID": 0,
        "successRate": [
            61,
            66,
            55,
            55,
            64
        ],
        "universityID": 13
    },
    {
        "id": 112,
        "entryGrades": [
            7.23,
            7.41,
            7.41,
            7.42,
            7.62
        ],
        "exchangeStudents": 6,
        "language": 1,
        "level": 0,
        "localStudents": 30,
        "name": "Sociology and Sustainability",
        "subjectID": 4,
        "successRate": [
            53,
            58,
            50,
            54,
            52
        ],
        "universityID": 13
    },
    {
        "id": 113,
        "entryGrades": [
            7.51,
            7.5,
            7.46,
            7.35,
            7.32
        ],
        "exchangeStudents": 5,
        "language": 2,
        "level": 0,
        "localStudents": 18,
        "name": "Filosofie et durabilit\u00e9",
        "subjectID": 5,
        "successRate": [
            70,
            64,
            63,
            59,
            58
        ],
        "universityID": 13
    },
    {
        "id": 114,
        "entryGrades": [
            6.01,
            5.88,
            5.82,
            5.78,
            5.61
        ],
        "exchangeStudents": 5,
        "language": 2,
        "level": 1,
        "localStudents": 14,
        "name": "Filosofie appliqu\u00e9s",
        "subjectID": 5,
        "successRate": [
            42,
            35,
            37,
            40,
            47
        ],
        "universityID": 13
    },
    {
        "id": 115,
        "entryGrades": [
            7.19,
            7.02,
            7.09,
            7.48,
            7.31
        ],
        "exchangeStudents": 5,
        "language": 2,
        "level": 0,
        "localStudents": 12,
        "name": "Droit et Histoire",
        "subjectID": 2,
        "successRate": [
            43,
            41,
            41,
            40,
            35
        ],
        "universityID": 13
    },
    {
        "id": 116,
        "entryGrades": [
            6.65,
            6.57,
            6.35,
            6.01,
            5.94
        ],
        "exchangeStudents": 4,
        "language": 1,
        "level": 0,
        "localStudents": 20,
        "name": "Human Philosophy",
        "subjectID": 5,
        "successRate": [
            58,
            57,
            52,
            52,
            50
        ],
        "universityID": 13
    },
    {
        "id": 117,
        "entryGrades": [
            6.05,
            6.4,
            5.81,
            6.4,
            5.73
        ],
        "exchangeStudents": 6,
        "language": 1,
        "level": 2,
        "localStudents": 18,
        "name": "Human Sociology",
        "subjectID": 4,
        "successRate": [
            38,
            40,
            43,
            48,
            48
        ],
        "universityID": 13
    },
    {
        "id": 118,
        "entryGrades": [
            7.19,
            6.94,
            7.33,
            7.4,
            7.21
        ],
        "exchangeStudents": 5,
        "language": 1,
        "level": 1,
        "localStudents": 27,
        "name": "Sociology in the 21:st Century",
        "subjectID": 4,
        "successRate": [
            68,
            62,
            62,
            56,
            54
        ],
        "universityID": 13
    },
    {
        "id": 119,
        "entryGrades": [
            7.33,
            7.67,
            7.26,
            7.33,
            7.49
        ],
        "exchangeStudents": 4,
        "language": 1,
        "level": 0,
        "localStudents": 33,
        "name": "Applied Medicine",
        "subjectID": 3,
        "successRate": [
            42,
            43,
            47,
            48,
            55
        ],
        "universityID": 14
    },
    {
        "id": 120,
        "entryGrades": [
            6.09,
            6.26,
            6.03,
            6.14,
            6.02
        ],
        "exchangeStudents": 5,
        "language": 2,
        "level": 1,
        "localStudents": 30,
        "name": "Droit et Histoire",
        "subjectID": 2,
        "successRate": [
            66,
            71,
            63,
            64,
            61
        ],
        "universityID": 14
    },
    {
        "id": 121,
        "entryGrades": [
            5.84,
            5.81,
            5.78,
            5.83,
            5.87
        ],
        "exchangeStudents": 4,
        "language": 1,
        "level": 0,
        "localStudents": 13,
        "name": "Applied Law",
        "subjectID": 2,
        "successRate": [
            47,
            53,
            53,
            53,
            54
        ],
        "universityID": 14
    },
    {
        "id": 122,
        "entryGrades": [
            6.2,
            6.01,
            6.35,
            6.09,
            6.34
        ],
        "exchangeStudents": 5,
        "language": 2,
        "level": 0,
        "localStudents": 29,
        "name": "Medicine et Histoire",
        "subjectID": 3,
        "successRate": [
            56,
            52,
            51,
            47,
            46
        ],
        "universityID": 14
    },
    {
        "id": 123,
        "entryGrades": [
            6.98,
            6.98,
            7.14,
            7.2,
            7.38
        ],
        "exchangeStudents": 5,
        "language": 1,
        "level": 0,
        "localStudents": 32,
        "name": "Philosophy and History",
        "subjectID": 5,
        "successRate": [
            63,
            64,
            64,
            65,
            65
        ],
        "universityID": 14
    },
    {
        "id": 124,
        "entryGrades": [
            6.04,
            5.81,
            5.78,
            5.53,
            5.52
        ],
        "exchangeStudents": 4,
        "language": 1,
        "level": 1,
        "localStudents": 21,
        "name": "Medicine in Society",
        "subjectID": 3,
        "successRate": [
            43,
            41,
            45,
            38,
            36
        ],
        "universityID": 15
    },
    {
        "id": 125,
        "entryGrades": [
            7.86,
            7.63,
            8.12,
            7.55,
            7.52
        ],
        "exchangeStudents": 6,
        "language": 1,
        "level": 1,
        "localStudents": 15,
        "name": "Philosophy and History",
        "subjectID": 5,
        "successRate": [
            44,
            48,
            53,
            54,
            55
        ],
        "universityID": 15
    },
    {
        "id": 126,
        "entryGrades": [
            6.74,
            6.57,
            6.87,
            6.58,
            6.84
        ],
        "exchangeStudents": 5,
        "language": 1,
        "level": 0,
        "localStudents": 34,
        "name": "Human Law",
        "subjectID": 2,
        "successRate": [
            63,
            59,
            57,
            54,
            52
        ],
        "universityID": 15
    },
    {
        "id": 127,
        "entryGrades": [
            6.08,
            5.91,
            5.79,
            5.8,
            5.97
        ],
        "exchangeStudents": 6,
        "language": 1,
        "level": 1,
        "localStudents": 34,
        "name": "Mathematics and Virtual Reality",
        "subjectID": 0,
        "successRate": [
            65,
            63,
            59,
            55,
            52
        ],
        "universityID": 15
    },
    {
        "id": 128,
        "entryGrades": [
            6.73,
            6.75,
            6.71,
            6.68,
            6.41
        ],
        "exchangeStudents": 4,
        "language": 2,
        "level": 2,
        "localStudents": 26,
        "name": "\u00c9tudes avanc\u00e9s en Design",
        "subjectID": 6,
        "successRate": [
            55,
            53,
            48,
            45,
            41
        ],
        "universityID": 15
    },
    {
        "id": 129,
        "entryGrades": [
            7.18,
            7.11,
            7.16,
            7.11,
            7.1
        ],
        "exchangeStudents": 5,
        "language": 2,
        "level": 2,
        "localStudents": 28,
        "name": "Filosofie et Histoire",
        "subjectID": 5,
        "successRate": [
            63,
            61,
            60,
            58,
            55
        ],
        "universityID": 15
    },
    {
        "id": 130,
        "entryGrades": [
            7.03,
            7.46,
            6.72,
            7.01,
            7.1
        ],
        "exchangeStudents": 6,
        "language": 1,
        "level": 1,
        "localStudents": 16,
        "name": "Design in the 21:st Century",
        "subjectID": 6,
        "successRate": [
            66,
            69,
            69,
            70,
            77
        ],
        "universityID": 15
    },
    {
        "id": 131,
        "entryGrades": [
            8.21,
            8.16,
            7.93,
            7.9,
            7.89
        ],
        "exchangeStudents": 4,
        "language": 1,
        "level": 1,
        "localStudents": 16,
        "name": "Mathematics in the 21:st Century",
        "subjectID": 0,
        "successRate": [
            44,
            43,
            40,
            39,
            39
        ],
        "universityID": 15
    },
    {
        "id": 132,
        "entryGrades": [
            7.97,
            8.06,
            8.1,
            8.12,
            8.27
        ],
        "exchangeStudents": 5,
        "language": 2,
        "level": 2,
        "localStudents": 28,
        "name": "Mat\u00e9matiques et durabilit\u00e9",
        "subjectID": 0,
        "successRate": [
            54,
            52,
            46,
            45,
            42
        ],
        "universityID": 15
    },
    {
        "id": 133,
        "entryGrades": [
            7.61,
            7.65,
            7.78,
            7.81,
            8.02
        ],
        "exchangeStudents": 4,
        "language": 1,
        "level": 1,
        "localStudents": 22,
        "name": "Human Design",
        "subjectID": 6,
        "successRate": [
            45,
            41,
            40,
            35,
            34
        ],
        "universityID": 15
    },
    {
        "id": 134,
        "entryGrades": [
            7.55,
            7.29,
            7.19,
            7.22,
            7.11
        ],
        "exchangeStudents": 4,
        "language": 2,
        "level": 1,
        "localStudents": 15,
        "name": "Sociologie et Histoire",
        "subjectID": 4,
        "successRate": [
            44,
            46,
            50,
            52,
            52
        ],
        "universityID": 15
    },
    {
        "id": 135,
        "entryGrades": [
            7.41,
            7.41,
            7.4,
            6.97,
            6.96
        ],
        "exchangeStudents": 6,
        "language": 1,
        "level": 1,
        "localStudents": 18,
        "name": "Applied Medicine",
        "subjectID": 3,
        "successRate": [
            62,
            67,
            57,
            60,
            64
        ],
        "universityID": 16
    },
    {
        "id": 136,
        "entryGrades": [
            6.36,
            6.5,
            6.54,
            6.6,
            6.82
        ],
        "exchangeStudents": 5,
        "language": 1,
        "level": 0,
        "localStudents": 21,
        "name": "Applied Sociology",
        "subjectID": 4,
        "successRate": [
            41,
            37,
            36,
            42,
            45
        ],
        "universityID": 16
    },
    {
        "id": 137,
        "entryGrades": [
            7.7,
            7.64,
            7.69,
            7.85,
            7.58
        ],
        "exchangeStudents": 6,
        "language": 1,
        "level": 1,
        "localStudents": 25,
        "name": "Medicine and History",
        "subjectID": 3,
        "successRate": [
            53,
            54,
            53,
            51,
            48
        ],
        "universityID": 16
    },
    {
        "id": 138,
        "entryGrades": [
            6.76,
            6.86,
            6.93,
            6.95,
            6.98
        ],
        "exchangeStudents": 4,
        "language": 1,
        "level": 0,
        "localStudents": 25,
        "name": "Applied Engineering",
        "subjectID": 1,
        "successRate": [
            34,
            34,
            35,
            40,
            46
        ],
        "universityID": 16
    },
    {
        "id": 139,
        "entryGrades": [
            7.82,
            7.75,
            7.68,
            7.63,
            7.49
        ],
        "exchangeStudents": 6,
        "language": 1,
        "level": 2,
        "localStudents": 34,
        "name": "Law and Sustainability",
        "subjectID": 2,
        "successRate": [
            43,
            48,
            46,
            51,
            44
        ],
        "universityID": 16
    },
    {
        "id": 140,
        "entryGrades": [
            7.19,
            7.04,
            7.03,
            6.87,
            6.86
        ],
        "exchangeStudents": 5,
        "language": 1,
        "level": 2,
        "localStudents": 19,
        "name": "Human Sociology",
        "subjectID": 4,
        "successRate": [
            40,
            48,
            32,
            47,
            32
        ],
        "universityID": 16
    },
    {
        "id": 141,
        "entryGrades": [
            7.59,
            7.66,
            7.78,
            7.85,
            7.91
        ],
        "exchangeStudents": 4,
        "language": 1,
        "level": 1,
        "localStudents": 25,
        "name": "Advanced Studies in Law",
        "subjectID": 2,
        "successRate": [
            67,
            58,
            57,
            52,
            50
        ],
        "universityID": 16
    },
    {
        "id": 142,
        "entryGrades": [
            6.5,
            6.6,
            6.32,
            6.3,
            6.44
        ],
        "exchangeStudents": 6,
        "language": 1,
        "level": 2,
        "localStudents": 21,
        "name": "Mathematics and History",
        "subjectID": 0,
        "successRate": [
            65,
            63,
            62,
            60,
            59
        ],
        "universityID": 16
    },
    {
        "id": 143,
        "entryGrades": [
            7.96,
            7.84,
            7.81,
            7.68,
            7.61
        ],
        "exchangeStudents": 6,
        "language": 1,
        "level": 2,
        "localStudents": 28,
        "name": "Advanced Studies in Medicine",
        "subjectID": 3,
        "successRate": [
            48,
            49,
            50,
            54,
            56
        ],
        "universityID": 16
    },
    {
        "id": 144,
        "entryGrades": [
            7.55,
            7.26,
            7.21,
            7.01,
            6.9
        ],
        "exchangeStudents": 4,
        "language": 1,
        "level": 2,
        "localStudents": 18,
        "name": "Philosophy and Virtual Reality",
        "subjectID": 5,
        "successRate": [
            73,
            63,
            63,
            61,
            58
        ],
        "universityID": 16
    },
    {
        "id": 145,
        "entryGrades": [
            8.18,
            8.14,
            8.12,
            7.97,
            7.96
        ],
        "exchangeStudents": 4,
        "language": 1,
        "level": 2,
        "localStudents": 30,
        "name": "Engineering in Society",
        "subjectID": 1,
        "successRate": [
            52,
            57,
            51,
            48,
            50
        ],
        "universityID": 16
    },
    {
        "id": 146,
        "entryGrades": [
            7.37,
            7.13,
            7.13,
            6.93,
            6.9
        ],
        "exchangeStudents": 5,
        "language": 1,
        "level": 2,
        "localStudents": 34,
        "name": "Advanced Studies in Design",
        "subjectID": 6,
        "successRate": [
            54,
            53,
            46,
            45,
            44
        ],
        "universityID": 16
    },
    {
        "id": 147,
        "entryGrades": [
            8.3,
            8.64,
            8.34,
            8.18,
            8.12
        ],
        "exchangeStudents": 5,
        "language": 1,
        "level": 0,
        "localStudents": 22,
        "name": "Human Medicine",
        "subjectID": 3,
        "successRate": [
            67,
            66,
            63,
            61,
            60
        ],
        "universityID": 17
    },
    {
        "id": 148,
        "entryGrades": [
            7.59,
            7.76,
            7.54,
            7.44,
            7.49
        ],
        "exchangeStudents": 5,
        "language": 1,
        "level": 1,
        "localStudents": 12,
        "name": "Applied Philosophy",
        "subjectID": 5,
        "successRate": [
            62,
            59,
            54,
            54,
            54
        ],
        "universityID": 17
    },
    {
        "id": 149,
        "entryGrades": [
            5.48,
            5.48,
            5.62,
            5.68,
            5.74
        ],
        "exchangeStudents": 5,
        "language": 1,
        "level": 2,
        "localStudents": 15,
        "name": "Design in Society",
        "subjectID": 6,
        "successRate": [
            39,
            45,
            47,
            50,
            51
        ],
        "universityID": 17
    },
    {
        "id": 150,
        "entryGrades": [
            6.1,
            6.17,
            6.22,
            6.25,
            6.44
        ],
        "exchangeStudents": 5,
        "language": 1,
        "level": 2,
        "localStudents": 33,
        "name": "Medicine in the 21:st Century",
        "subjectID": 3,
        "successRate": [
            66,
            66,
            68,
            69,
            69
        ],
        "universityID": 17
    },
    {
        "id": 151,
        "entryGrades": [
            5.83,
            5.85,
            5.88,
            5.92,
            5.97
        ],
        "exchangeStudents": 6,
        "language": 1,
        "level": 1,
        "localStudents": 13,
        "name": "Mathematics in the 21:st Century",
        "subjectID": 0,
        "successRate": [
            58,
            57,
            51,
            49,
            48
        ],
        "universityID": 17
    },
    {
        "id": 152,
        "entryGrades": [
            7.43,
            7.43,
            7.33,
            7.05,
            7.05
        ],
        "exchangeStudents": 6,
        "language": 1,
        "level": 1,
        "localStudents": 19,
        "name": "Human Sociology",
        "subjectID": 4,
        "successRate": [
            62,
            59,
            57,
            56,
            53
        ],
        "universityID": 18
    },
    {
        "id": 153,
        "entryGrades": [
            7.78,
            8.02,
            7.51,
            7.92,
            7.97
        ],
        "exchangeStudents": 5,
        "language": 1,
        "level": 0,
        "localStudents": 33,
        "name": "Engineering in Society",
        "subjectID": 1,
        "successRate": [
            69,
            69,
            63,
            63,
            62
        ],
        "universityID": 18
    },
    {
        "id": 154,
        "entryGrades": [
            6.28,
            6.2,
            6,
            5.9,
            5.86
        ],
        "exchangeStudents": 4,
        "language": 1,
        "level": 0,
        "localStudents": 17,
        "name": "Advanced Studies in Philosophy",
        "subjectID": 5,
        "successRate": [
            67,
            70,
            71,
            67,
            64
        ],
        "universityID": 18
    },
    {
        "id": 155,
        "entryGrades": [
            8.48,
            8.83,
            8.6,
            8.12,
            8.06
        ],
        "exchangeStudents": 6,
        "language": 1,
        "level": 1,
        "localStudents": 27,
        "name": "Applied Engineering",
        "subjectID": 1,
        "successRate": [
            50,
            53,
            53,
            45,
            52
        ],
        "universityID": 18
    },
    {
        "id": 156,
        "entryGrades": [
            6.5,
            6.13,
            6.11,
            6.04,
            5.93
        ],
        "exchangeStudents": 4,
        "language": 1,
        "level": 1,
        "localStudents": 34,
        "name": "Philosophy and Virtual Reality",
        "subjectID": 5,
        "successRate": [
            52,
            46,
            45,
            44,
            41
        ],
        "universityID": 18
    },
    {
        "id": 157,
        "entryGrades": [
            6.72,
            6.48,
            6.59,
            6.43,
            6.92
        ],
        "exchangeStudents": 4,
        "language": 1,
        "level": 0,
        "localStudents": 32,
        "name": "Sociology and Sustainability",
        "subjectID": 4,
        "successRate": [
            59,
            61,
            64,
            65,
            68
        ],
        "universityID": 18
    },
    {
        "id": 158,
        "entryGrades": [
            7.89,
            8.18,
            8.21,
            8.24,
            8.38
        ],
        "exchangeStudents": 6,
        "language": 1,
        "level": 1,
        "localStudents": 13,
        "name": "Law and Virtual Reality",
        "subjectID": 2,
        "successRate": [
            62,
            58,
            54,
            52,
            51
        ],
        "universityID": 19
    },
    {
        "id": 159,
        "entryGrades": [
            6.7,
            6.78,
            6.84,
            6.95,
            7.01
        ],
        "exchangeStudents": 6,
        "language": 1,
        "level": 2,
        "localStudents": 18,
        "name": "Medicine and Sustainability",
        "subjectID": 3,
        "successRate": [
            55,
            61,
            62,
            64,
            65
        ],
        "universityID": 19
    },
    {
        "id": 160,
        "entryGrades": [
            6,
            6.06,
            6.13,
            6.14,
            6.19
        ],
        "exchangeStudents": 4,
        "language": 1,
        "level": 2,
        "localStudents": 15,
        "name": "Law and History",
        "subjectID": 2,
        "successRate": [
            43,
            44,
            44,
            45,
            46
        ],
        "universityID": 19
    },
    {
        "id": 161,
        "entryGrades": [
            6.77,
            6.5,
            6.29,
            6,
            5.9
        ],
        "exchangeStudents": 5,
        "language": 1,
        "level": 2,
        "localStudents": 27,
        "name": "Human Design",
        "subjectID": 6,
        "successRate": [
            44,
            45,
            45,
            50,
            52
        ],
        "universityID": 19
    },
    {
        "id": 162,
        "entryGrades": [
            7.58,
            7.34,
            7.36,
            7.62,
            7.83
        ],
        "exchangeStudents": 6,
        "language": 1,
        "level": 0,
        "localStudents": 16,
        "name": "Medicine in the 21:st Century",
        "subjectID": 3,
        "successRate": [
            42,
            43,
            49,
            51,
            56
        ],
        "universityID": 19
    },
    {
        "id": 163,
        "entryGrades": [
            7.26,
            7.24,
            7.17,
            7,
            6.9
        ],
        "exchangeStudents": 4,
        "language": 1,
        "level": 2,
        "localStudents": 20,
        "name": "Applied Mathematics",
        "subjectID": 0,
        "successRate": [
            45,
            44,
            41,
            39,
            36
        ],
        "universityID": 19
    },
    {
        "id": 164,
        "entryGrades": [
            6.06,
            5.88,
            5.87,
            5.68,
            5.65
        ],
        "exchangeStudents": 5,
        "language": 1,
        "level": 2,
        "localStudents": 12,
        "name": "Advanced Studies in undefined",
        "subjectID": 3,
        "successRate": [
            62,
            63,
            65,
            65,
            66
        ],
        "universityID": 19
    },
    {
        "id": 165,
        "entryGrades": [
            6.47,
            6.69,
            6.22,
            6.14,
            6.3
        ],
        "exchangeStudents": 4,
        "language": 1,
        "level": 0,
        "localStudents": 14,
        "name": "Sociology and Virtual Reality",
        "subjectID": 4,
        "successRate": [
            59,
            61,
            59,
            54,
            65
        ],
        "universityID": 19
    },
    {
        "id": 166,
        "entryGrades": [
            6.89,
            6.92,
            7.05,
            7.07,
            7.23
        ],
        "exchangeStudents": 5,
        "language": 1,
        "level": 0,
        "localStudents": 26,
        "name": "Sociology in Society",
        "subjectID": 4,
        "successRate": [
            58,
            58,
            62,
            66,
            66
        ],
        "universityID": 19
    },
    {
        "id": 167,
        "entryGrades": [
            8.39,
            8.37,
            8.34,
            8.31,
            8.11
        ],
        "exchangeStudents": 4,
        "language": 1,
        "level": 2,
        "localStudents": 18,
        "name": "Mathematics and Sustainability",
        "subjectID": 0,
        "successRate": [
            58,
            56,
            54,
            52,
            50
        ],
        "universityID": 19
    },
    {
        "id": 168,
        "entryGrades": [
            8.29,
            8.1,
            8.5,
            8.02,
            8.04
        ],
        "exchangeStudents": 4,
        "language": 1,
        "level": 2,
        "localStudents": 31,
        "name": "Medicine and History",
        "subjectID": 3,
        "successRate": [
            65,
            63,
            61,
            60,
            57
        ],
        "universityID": 19
    },
    {
        "id": 169,
        "entryGrades": [
            6.08,
            6.08,
            5.99,
            5.93,
            5.9
        ],
        "exchangeStudents": 5,
        "language": 1,
        "level": 2,
        "localStudents": 12,
        "name": "Mathematics in the 21:st Century",
        "subjectID": 0,
        "successRate": [
            53,
            50,
            48,
            45,
            43
        ],
        "universityID": 19
    },
    {
        "id": 170,
        "entryGrades": [
            7.34,
            7.53,
            7.54,
            7.59,
            7.85
        ],
        "exchangeStudents": 5,
        "language": 1,
        "level": 1,
        "localStudents": 24,
        "name": "Engineering and Virtual Reality",
        "subjectID": 1,
        "successRate": [
            56,
            63,
            49,
            57,
            59
        ],
        "universityID": 20
    },
    {
        "id": 171,
        "entryGrades": [
            5.55,
            5.65,
            5.76,
            5.94,
            5.99
        ],
        "exchangeStudents": 6,
        "language": 1,
        "level": 0,
        "localStudents": 16,
        "name": "Design and History",
        "subjectID": 6,
        "successRate": [
            59,
            61,
            64,
            65,
            72
        ],
        "universityID": 20
    },
    {
        "id": 172,
        "entryGrades": [
            6.36,
            5.97,
            5.95,
            5.94,
            5.52
        ],
        "exchangeStudents": 6,
        "language": 1,
        "level": 2,
        "localStudents": 31,
        "name": "Mathematics in the 21:st Century",
        "subjectID": 0,
        "successRate": [
            62,
            64,
            67,
            58,
            59
        ],
        "universityID": 20
    },
    {
        "id": 173,
        "entryGrades": [
            6.16,
            6.1,
            6.06,
            5.88,
            5.82
        ],
        "exchangeStudents": 4,
        "language": 1,
        "level": 2,
        "localStudents": 30,
        "name": "Applied Medicine",
        "subjectID": 3,
        "successRate": [
            74,
            71,
            69,
            69,
            65
        ],
        "universityID": 20
    },
    {
        "id": 174,
        "entryGrades": [
            8.48,
            8.43,
            8.34,
            8.28,
            8.25
        ],
        "exchangeStudents": 5,
        "language": 1,
        "level": 0,
        "localStudents": 26,
        "name": "Engineering in Society",
        "subjectID": 1,
        "successRate": [
            46,
            49,
            50,
            51,
            55
        ],
        "universityID": 20
    },
    {
        "id": 175,
        "entryGrades": [
            7.43,
            7.54,
            7.58,
            7.6,
            7.71
        ],
        "exchangeStudents": 4,
        "language": 1,
        "level": 0,
        "localStudents": 24,
        "name": "Advanced Studies in Mathematics",
        "subjectID": 0,
        "successRate": [
            42,
            42,
            42,
            41,
            41
        ],
        "universityID": 20
    },
    {
        "id": 176,
        "entryGrades": [
            7.53,
            7.32,
            7.27,
            7.22,
            7.21
        ],
        "exchangeStudents": 5,
        "language": 1,
        "level": 1,
        "localStudents": 35,
        "name": "Engineering and Sustainability",
        "subjectID": 1,
        "successRate": [
            63,
            61,
            60,
            57,
            54
        ],
        "universityID": 20
    },
    {
        "id": 177,
        "entryGrades": [
            7.7,
            7.8,
            8,
            8.05,
            8.13
        ],
        "exchangeStudents": 5,
        "language": 1,
        "level": 1,
        "localStudents": 21,
        "name": "Medicine and History",
        "subjectID": 3,
        "successRate": [
            47,
            44,
            41,
            50,
            44
        ],
        "universityID": 20
    },
    {
        "id": 178,
        "entryGrades": [
            8.49,
            8.35,
            8.33,
            8.32,
            8.24
        ],
        "exchangeStudents": 6,
        "language": 1,
        "level": 2,
        "localStudents": 23,
        "name": "Advanced Studies in Law",
        "subjectID": 2,
        "successRate": [
            51,
            58,
            60,
            60,
            67
        ],
        "universityID": 21
    },
    {
        "id": 179,
        "entryGrades": [
            6.43,
            6.78,
            6.82,
            6.55,
            6.04
        ],
        "exchangeStudents": 4,
        "language": 1,
        "level": 2,
        "localStudents": 28,
        "name": "Engineering and Sustainability",
        "subjectID": 1,
        "successRate": [
            65,
            65,
            61,
            68,
            59
        ],
        "universityID": 21
    },
    {
        "id": 180,
        "entryGrades": [
            8.28,
            8.29,
            8.41,
            8.42,
            8.51
        ],
        "exchangeStudents": 6,
        "language": 1,
        "level": 2,
        "localStudents": 35,
        "name": "Applied Medicine",
        "subjectID": 3,
        "successRate": [
            58,
            60,
            63,
            64,
            62
        ],
        "universityID": 21
    },
    {
        "id": 181,
        "entryGrades": [
            7.23,
            7.04,
            7.02,
            6.85,
            6.84
        ],
        "exchangeStudents": 5,
        "language": 1,
        "level": 2,
        "localStudents": 23,
        "name": "Engineering in the 21:st Century",
        "subjectID": 1,
        "successRate": [
            60,
            64,
            54,
            68,
            54
        ],
        "universityID": 21
    },
    {
        "id": 182,
        "entryGrades": [
            5.99,
            6.28,
            6.35,
            6.38,
            6.45
        ],
        "exchangeStudents": 6,
        "language": 1,
        "level": 2,
        "localStudents": 16,
        "name": "Human Design",
        "subjectID": 6,
        "successRate": [
            39,
            44,
            46,
            46,
            50
        ],
        "universityID": 21
    },
    {
        "id": 183,
        "entryGrades": [
            6.43,
            6.38,
            6.14,
            6.11,
            6.09
        ],
        "exchangeStudents": 4,
        "language": 1,
        "level": 2,
        "localStudents": 34,
        "name": "Applied Mathematics",
        "subjectID": 0,
        "successRate": [
            43,
            35,
            51,
            37,
            46
        ],
        "universityID": 21
    },
    {
        "id": 184,
        "entryGrades": [
            6.43,
            6.49,
            6.58,
            6.68,
            6.73
        ],
        "exchangeStudents": 6,
        "language": 1,
        "level": 1,
        "localStudents": 15,
        "name": "Medicine in Society",
        "subjectID": 3,
        "successRate": [
            35,
            36,
            40,
            44,
            45
        ],
        "universityID": 21
    },
    {
        "id": 185,
        "entryGrades": [
            8.17,
            8.32,
            8.34,
            8.37,
            8.43
        ],
        "exchangeStudents": 4,
        "language": 1,
        "level": 1,
        "localStudents": 20,
        "name": "Human Law",
        "subjectID": 2,
        "successRate": [
            51,
            48,
            46,
            44,
            41
        ],
        "universityID": 21
    },
    {
        "id": 186,
        "entryGrades": [
            6.72,
            6.94,
            7.08,
            7.09,
            7.12
        ],
        "exchangeStudents": 5,
        "language": 1,
        "level": 0,
        "localStudents": 34,
        "name": "Engineering in Society",
        "subjectID": 1,
        "successRate": [
            58,
            57,
            64,
            55,
            52
        ],
        "universityID": 21
    },
    {
        "id": 187,
        "entryGrades": [
            6.16,
            5.9,
            5.75,
            5.89,
            5.83
        ],
        "exchangeStudents": 6,
        "language": 1,
        "level": 2,
        "localStudents": 21,
        "name": "Design and Virtual Reality",
        "subjectID": 6,
        "successRate": [
            60,
            65,
            67,
            71,
            75
        ],
        "universityID": 21
    },
    {
        "id": 188,
        "entryGrades": [
            6.91,
            6.82,
            6.72,
            6.7,
            6.7
        ],
        "exchangeStudents": 6,
        "language": 1,
        "level": 1,
        "localStudents": 16,
        "name": "Engineering and Virtual Reality",
        "subjectID": 1,
        "successRate": [
            61,
            63,
            64,
            65,
            67
        ],
        "universityID": 21
    },
    {
        "id": 189,
        "entryGrades": [
            7.33,
            7.34,
            7.49,
            7.42,
            7.21
        ],
        "exchangeStudents": 4,
        "language": 1,
        "level": 1,
        "localStudents": 34,
        "name": "Human Sociology",
        "subjectID": 4,
        "successRate": [
            58,
            57,
            50,
            46,
            45
        ],
        "universityID": 21
    },
    {
        "id": 190,
        "entryGrades": [
            5.94,
            5.73,
            6.03,
            6.06,
            5.99
        ],
        "exchangeStudents": 6,
        "language": 1,
        "level": 1,
        "localStudents": 15,
        "name": "Advanced Studies in Law",
        "subjectID": 2,
        "successRate": [
            42,
            40,
            36,
            44,
            46
        ],
        "universityID": 22
    },
    {
        "id": 191,
        "entryGrades": [
            7.41,
            7.55,
            7.68,
            7.7,
            7.94
        ],
        "exchangeStudents": 6,
        "language": 1,
        "level": 1,
        "localStudents": 24,
        "name": "Sociology in the 21:st Century",
        "subjectID": 4,
        "successRate": [
            55,
            60,
            51,
            61,
            57
        ],
        "universityID": 22
    },
    {
        "id": 192,
        "entryGrades": [
            7.1,
            6.95,
            6.82,
            6.88,
            7.33
        ],
        "exchangeStudents": 6,
        "language": 1,
        "level": 0,
        "localStudents": 17,
        "name": "Engineering and Virtual Reality",
        "subjectID": 1,
        "successRate": [
            38,
            42,
            46,
            50,
            51
        ],
        "universityID": 22
    },
    {
        "id": 193,
        "entryGrades": [
            8.1,
            8.04,
            7.86,
            7.67,
            7.48
        ],
        "exchangeStudents": 6,
        "language": 1,
        "level": 0,
        "localStudents": 19,
        "name": "Design and Sustainability",
        "subjectID": 6,
        "successRate": [
            50,
            48,
            43,
            43,
            42
        ],
        "universityID": 22
    },
    {
        "id": 194,
        "entryGrades": [
            6,
            6.07,
            6.23,
            6.35,
            6.39
        ],
        "exchangeStudents": 5,
        "language": 1,
        "level": 1,
        "localStudents": 30,
        "name": "Human Medicine",
        "subjectID": 3,
        "successRate": [
            70,
            65,
            63,
            62,
            57
        ],
        "universityID": 23
    },
    {
        "id": 195,
        "entryGrades": [
            6.7,
            6.56,
            6.61,
            6.55,
            6.87
        ],
        "exchangeStudents": 6,
        "language": 1,
        "level": 1,
        "localStudents": 35,
        "name": "Mathematics and History",
        "subjectID": 0,
        "successRate": [
            61,
            54,
            54,
            50,
            48
        ],
        "universityID": 23
    },
    {
        "id": 196,
        "entryGrades": [
            6.12,
            6.13,
            6.21,
            6.34,
            6.45
        ],
        "exchangeStudents": 4,
        "language": 1,
        "level": 2,
        "localStudents": 12,
        "name": "Design in the 21:st Century",
        "subjectID": 6,
        "successRate": [
            38,
            40,
            40,
            41,
            42
        ],
        "universityID": 23
    },
    {
        "id": 197,
        "entryGrades": [
            7.91,
            7.86,
            7.49,
            7.38,
            7.27
        ],
        "exchangeStudents": 6,
        "language": 1,
        "level": 0,
        "localStudents": 31,
        "name": "undefined in Society",
        "subjectID": 0,
        "successRate": [
            36,
            39,
            40,
            41,
            41
        ],
        "universityID": 23
    },
    {
        "id": 198,
        "entryGrades": [
            6.87,
            6.65,
            6.63,
            6.37,
            6.33
        ],
        "exchangeStudents": 5,
        "language": 1,
        "level": 0,
        "localStudents": 26,
        "name": "Design in Society",
        "subjectID": 6,
        "successRate": [
            54,
            53,
            51,
            48,
            47
        ],
        "universityID": 24
    },
    {
        "id": 199,
        "entryGrades": [
            7.79,
            7.87,
            8.04,
            8.05,
            8.13
        ],
        "exchangeStudents": 6,
        "language": 1,
        "level": 1,
        "localStudents": 29,
        "name": "Engineering and Sustainability",
        "subjectID": 1,
        "successRate": [
            49,
            55,
            57,
            59,
            60
        ],
        "universityID": 24
    },
    {
        "id": 200,
        "entryGrades": [
            5.26,
            5.33,
            5.5,
            5.59,
            5.65
        ],
        "exchangeStudents": 5,
        "language": 1,
        "level": 0,
        "localStudents": 33,
        "name": "Engineering in the 21:st Century",
        "subjectID": 1,
        "successRate": [
            51,
            56,
            57,
            59,
            62
        ],
        "universityID": 24
    },
    {
        "id": 201,
        "entryGrades": [
            5.71,
            5.93,
            6.04,
            5.64,
            5.72
        ],
        "exchangeStudents": 4,
        "language": 1,
        "level": 2,
        "localStudents": 21,
        "name": "Advanced Studies in Philosophy",
        "subjectID": 5,
        "successRate": [
            65,
            65,
            69,
            71,
            73
        ],
        "universityID": 24
    },
    {
        "id": 202,
        "entryGrades": [
            8.27,
            8.1,
            7.98,
            7.8,
            7.79
        ],
        "exchangeStudents": 6,
        "language": 1,
        "level": 1,
        "localStudents": 12,
        "name": "Applied Law",
        "subjectID": 2,
        "successRate": [
            43,
            45,
            46,
            40,
            41
        ],
        "universityID": 24
    },
    {
        "id": 203,
        "entryGrades": [
            6.46,
            6.54,
            6.69,
            6.53,
            6.42
        ],
        "exchangeStudents": 4,
        "language": 1,
        "level": 1,
        "localStudents": 24,
        "name": "Advanced Studies in Design",
        "subjectID": 6,
        "successRate": [
            72,
            71,
            70,
            69,
            68
        ],
        "universityID": 24
    },
    {
        "id": 204,
        "entryGrades": [
            6.7,
            6.87,
            6.87,
            6.95,
            6.98
        ],
        "exchangeStudents": 4,
        "language": 1,
        "level": 2,
        "localStudents": 14,
        "name": "undefined and History",
        "subjectID": 6,
        "successRate": [
            66,
            64,
            63,
            60,
            60
        ],
        "universityID": 24
    },
    {
        "id": 205,
        "entryGrades": [
            7.65,
            7.36,
            7.28,
            7.27,
            6.9
        ],
        "exchangeStudents": 6,
        "language": 1,
        "level": 2,
        "localStudents": 24,
        "name": "Medicine and Virtual Reality",
        "subjectID": 3,
        "successRate": [
            55,
            55,
            58,
            52,
            54
        ],
        "universityID": 24
    },
    {
        "id": 206,
        "entryGrades": [
            8.09,
            8.06,
            8.29,
            8.05,
            8.26
        ],
        "exchangeStudents": 5,
        "language": 1,
        "level": 0,
        "localStudents": 12,
        "name": "Advanced Studies in undefined",
        "subjectID": 1,
        "successRate": [
            60,
            59,
            58,
            56,
            53
        ],
        "universityID": 24
    },
    {
        "id": 207,
        "entryGrades": [
            6.62,
            6.51,
            6.58,
            6.99,
            6.3
        ],
        "exchangeStudents": 5,
        "language": 1,
        "level": 0,
        "localStudents": 17,
        "name": "Sociology and History",
        "subjectID": 4,
        "successRate": [
            45,
            41,
            45,
            47,
            43
        ],
        "universityID": 24
    },
    {
        "id": 208,
        "entryGrades": [
            5.81,
            6.23,
            6.16,
            6.22,
            5.93
        ],
        "exchangeStudents": 6,
        "language": 1,
        "level": 0,
        "localStudents": 24,
        "name": "Philosophy and Sustainability",
        "subjectID": 5,
        "successRate": [
            40,
            41,
            41,
            44,
            46
        ],
        "universityID": 25
    },
    {
        "id": 209,
        "entryGrades": [
            7.06,
            6.76,
            6.62,
            6.32,
            6.26
        ],
        "exchangeStudents": 6,
        "language": 1,
        "level": 0,
        "localStudents": 24,
        "name": "Applied Design",
        "subjectID": 6,
        "successRate": [
            54,
            55,
            60,
            64,
            71
        ],
        "universityID": 25
    },
    {
        "id": 210,
        "entryGrades": [
            6.65,
            6.76,
            6.85,
            6.97,
            7.11
        ],
        "exchangeStudents": 5,
        "language": 1,
        "level": 0,
        "localStudents": 34,
        "name": "Philosophy in Society",
        "subjectID": 5,
        "successRate": [
            58,
            56,
            58,
            56,
            60
        ],
        "universityID": 25
    },
    {
        "id": 211,
        "entryGrades": [
            7.52,
            7.53,
            7.49,
            7.69,
            7.35
        ],
        "exchangeStudents": 5,
        "language": 1,
        "level": 0,
        "localStudents": 26,
        "name": "Philosophy and History",
        "subjectID": 5,
        "successRate": [
            52,
            48,
            57,
            53,
            54
        ],
        "universityID": 25
    },
    {
        "id": 212,
        "entryGrades": [
            6.89,
            6.76,
            6.7,
            6.69,
            6.55
        ],
        "exchangeStudents": 5,
        "language": 1,
        "level": 2,
        "localStudents": 12,
        "name": "Advanced Studies in Law",
        "subjectID": 2,
        "successRate": [
            66,
            61,
            70,
            66,
            68
        ],
        "universityID": 25
    },
    {
        "id": 213,
        "entryGrades": [
            6.14,
            6.37,
            6.33,
            6.39,
            6.41
        ],
        "exchangeStudents": 4,
        "language": 1,
        "level": 1,
        "localStudents": 34,
        "name": "Human Medicine",
        "subjectID": 3,
        "successRate": [
            52,
            49,
            48,
            45,
            43
        ],
        "universityID": 25
    },
    {
        "id": 214,
        "entryGrades": [
            8.39,
            8.45,
            8.61,
            8.62,
            8.7
        ],
        "exchangeStudents": 4,
        "language": 1,
        "level": 2,
        "localStudents": 30,
        "name": "Sociology and Sustainability",
        "subjectID": 4,
        "successRate": [
            63,
            62,
            61,
            57,
            56
        ],
        "universityID": 25
    },
    {
        "id": 215,
        "entryGrades": [
            8.34,
            8.76,
            8.06,
            8.59,
            8.27
        ],
        "exchangeStudents": 4,
        "language": 1,
        "level": 2,
        "localStudents": 30,
        "name": "Engineering and Virtual Reality",
        "subjectID": 1,
        "successRate": [
            74,
            69,
            68,
            63,
            59
        ],
        "universityID": 26
    },
    {
        "id": 216,
        "entryGrades": [
            8.16,
            7.85,
            7.78,
            7.78,
            7.46
        ],
        "exchangeStudents": 6,
        "language": 1,
        "level": 2,
        "localStudents": 34,
        "name": "Philosophy and Virtual Reality",
        "subjectID": 5,
        "successRate": [
            74,
            73,
            68,
            66,
            61
        ],
        "universityID": 26
    },
    {
        "id": 217,
        "entryGrades": [
            7.83,
            7.87,
            7.89,
            7.93,
            8.09
        ],
        "exchangeStudents": 5,
        "language": 1,
        "level": 2,
        "localStudents": 24,
        "name": "Philosophy in Society",
        "subjectID": 5,
        "successRate": [
            58,
            61,
            54,
            52,
            53
        ],
        "universityID": 26
    },
    {
        "id": 218,
        "entryGrades": [
            7.06,
            7.01,
            6.98,
            6.85,
            6.71
        ],
        "exchangeStudents": 6,
        "language": 1,
        "level": 2,
        "localStudents": 27,
        "name": "Law and Sustainability",
        "subjectID": 2,
        "successRate": [
            57,
            55,
            55,
            54,
            60
        ],
        "universityID": 26
    },
    {
        "id": 219,
        "entryGrades": [
            6.81,
            6.71,
            7.04,
            7.17,
            6.87
        ],
        "exchangeStudents": 6,
        "language": 1,
        "level": 2,
        "localStudents": 12,
        "name": "Philosophy and History",
        "subjectID": 5,
        "successRate": [
            65,
            65,
            64,
            62,
            66
        ],
        "universityID": 26
    },
    {
        "id": 220,
        "entryGrades": [
            7.85,
            8,
            8.02,
            8.03,
            8.15
        ],
        "exchangeStudents": 4,
        "language": 1,
        "level": 1,
        "localStudents": 15,
        "name": "Advanced Studies in Sociology",
        "subjectID": 4,
        "successRate": [
            48,
            51,
            56,
            57,
            58
        ],
        "universityID": 26
    },
    {
        "id": 221,
        "entryGrades": [
            7.26,
            7.33,
            7.6,
            7.54,
            7.13
        ],
        "exchangeStudents": 4,
        "language": 1,
        "level": 1,
        "localStudents": 19,
        "name": "undefined and Sustainability",
        "subjectID": 4,
        "successRate": [
            57,
            61,
            61,
            64,
            66
        ],
        "universityID": 26
    },
    {
        "id": 222,
        "entryGrades": [
            6.79,
            6.96,
            6.61,
            6.44,
            6.45
        ],
        "exchangeStudents": 5,
        "language": 1,
        "level": 0,
        "localStudents": 26,
        "name": "Applied Mathematics",
        "subjectID": 0,
        "successRate": [
            54,
            54,
            60,
            53,
            59
        ],
        "universityID": 26
    },
    {
        "id": 223,
        "entryGrades": [
            6.93,
            6.8,
            6.8,
            6.78,
            6.53
        ],
        "exchangeStudents": 5,
        "language": 1,
        "level": 1,
        "localStudents": 16,
        "name": "Applied Design",
        "subjectID": 6,
        "successRate": [
            43,
            46,
            48,
            50,
            53
        ],
        "universityID": 26
    },
    {
        "id": 224,
        "entryGrades": [
            6.85,
            6.84,
            6.76,
            6.63,
            6.6
        ],
        "exchangeStudents": 6,
        "language": 1,
        "level": 1,
        "localStudents": 29,
        "name": "Law and Virtual Reality",
        "subjectID": 2,
        "successRate": [
            64,
            62,
            61,
            58,
            54
        ],
        "universityID": 26
    },
    {
        "id": 225,
        "entryGrades": [
            6.62,
            6.68,
            6.92,
            7.25,
            7.34
        ],
        "exchangeStudents": 5,
        "language": 1,
        "level": 1,
        "localStudents": 15,
        "name": "Medicine in Society",
        "subjectID": 3,
        "successRate": [
            64,
            62,
            58,
            56,
            52
        ],
        "universityID": 26
    },
    {
        "id": 226,
        "entryGrades": [
            6.02,
            6.18,
            6.22,
            6.35,
            6.4
        ],
        "exchangeStudents": 5,
        "language": 1,
        "level": 0,
        "localStudents": 25,
        "name": "Human Design",
        "subjectID": 6,
        "successRate": [
            58,
            58,
            52,
            49,
            49
        ],
        "universityID": 26
    },
    {
        "id": 227,
        "entryGrades": [
            7.64,
            7.42,
            7.25,
            7.22,
            7
        ],
        "exchangeStudents": 4,
        "language": 1,
        "level": 2,
        "localStudents": 31,
        "name": "Philosophy in Society",
        "subjectID": 5,
        "successRate": [
            55,
            58,
            50,
            55,
            51
        ],
        "universityID": 27
    },
    {
        "id": 228,
        "entryGrades": [
            8.09,
            8.22,
            8.23,
            8.26,
            8.46
        ],
        "exchangeStudents": 4,
        "language": 1,
        "level": 1,
        "localStudents": 23,
        "name": "Mathematics in the 21:st Century",
        "subjectID": 0,
        "successRate": [
            62,
            69,
            57,
            66,
            68
        ],
        "universityID": 27
    },
    {
        "id": 229,
        "entryGrades": [
            8.67,
            8.6,
            8.53,
            8.5,
            8.48
        ],
        "exchangeStudents": 4,
        "language": 1,
        "level": 1,
        "localStudents": 22,
        "name": "Human Philosophy",
        "subjectID": 5,
        "successRate": [
            67,
            66,
            66,
            65,
            64
        ],
        "universityID": 27
    },
    {
        "id": 230,
        "entryGrades": [
            5.43,
            5.48,
            5.55,
            5.73,
            5.8
        ],
        "exchangeStudents": 6,
        "language": 1,
        "level": 2,
        "localStudents": 22,
        "name": "Law and Sustainability",
        "subjectID": 2,
        "successRate": [
            63,
            63,
            66,
            66,
            65
        ],
        "universityID": 27
    },
    {
        "id": 231,
        "entryGrades": [
            6.61,
            6.55,
            6.5,
            6.27,
            6.15
        ],
        "exchangeStudents": 4,
        "language": 1,
        "level": 0,
        "localStudents": 14,
        "name": "Philosophy in the 21:st Century",
        "subjectID": 5,
        "successRate": [
            47,
            48,
            51,
            52,
            53
        ],
        "universityID": 27
    },
    {
        "id": 232,
        "entryGrades": [
            6.52,
            6.53,
            6.53,
            6.61,
            6.76
        ],
        "exchangeStudents": 6,
        "language": 1,
        "level": 0,
        "localStudents": 34,
        "name": "Applied Law",
        "subjectID": 2,
        "successRate": [
            59,
            64,
            67,
            65,
            59
        ],
        "universityID": 27
    },
    {
        "id": 233,
        "entryGrades": [
            5.87,
            5.88,
            6.17,
            6.27,
            6.31
        ],
        "exchangeStudents": 5,
        "language": 1,
        "level": 1,
        "localStudents": 12,
        "name": "undefined in Society",
        "subjectID": 5,
        "successRate": [
            44,
            48,
            49,
            51,
            54
        ],
        "universityID": 27
    },
    {
        "id": 234,
        "entryGrades": [
            7.06,
            6.88,
            6.87,
            6.84,
            6.73
        ],
        "exchangeStudents": 6,
        "language": 1,
        "level": 0,
        "localStudents": 18,
        "name": "Human Sociology",
        "subjectID": 4,
        "successRate": [
            68,
            65,
            65,
            64,
            63
        ],
        "universityID": 27
    },
    {
        "id": 235,
        "entryGrades": [
            7.22,
            6.91,
            7.33,
            7.3,
            7.35
        ],
        "exchangeStudents": 5,
        "language": 1,
        "level": 1,
        "localStudents": 19,
        "name": "Sociology in the 21:st Century",
        "subjectID": 4,
        "successRate": [
            51,
            48,
            45,
            43,
            41
        ],
        "universityID": 27
    },
    {
        "id": 236,
        "entryGrades": [
            5.53,
            5.33,
            5.78,
            5.52,
            5.73
        ],
        "exchangeStudents": 5,
        "language": 1,
        "level": 2,
        "localStudents": 27,
        "name": "Applied Law",
        "subjectID": 2,
        "successRate": [
            65,
            61,
            60,
            59,
            55
        ],
        "universityID": 28
    },
    {
        "id": 237,
        "entryGrades": [
            7.72,
            7.76,
            7.76,
            7.79,
            7.91
        ],
        "exchangeStudents": 6,
        "language": 1,
        "level": 0,
        "localStudents": 28,
        "name": "Medicine in the 21:st Century",
        "subjectID": 3,
        "successRate": [
            62,
            64,
            65,
            66,
            67
        ],
        "universityID": 28
    },
    {
        "id": 238,
        "entryGrades": [
            5.83,
            5.89,
            6.01,
            6.12,
            5.56
        ],
        "exchangeStudents": 5,
        "language": 1,
        "level": 2,
        "localStudents": 19,
        "name": "Applied undefined",
        "subjectID": 3,
        "successRate": [
            64,
            63,
            61,
            64,
            63
        ],
        "universityID": 28
    },
    {
        "id": 239,
        "entryGrades": [
            6.37,
            6.37,
            6.39,
            6.5,
            6.69
        ],
        "exchangeStudents": 4,
        "language": 1,
        "level": 1,
        "localStudents": 18,
        "name": "Human Philosophy",
        "subjectID": 5,
        "successRate": [
            45,
            45,
            43,
            42,
            37
        ],
        "universityID": 28
    },
    {
        "id": 240,
        "entryGrades": [
            8.31,
            8.28,
            8.25,
            7.89,
            7.92
        ],
        "exchangeStudents": 6,
        "language": 1,
        "level": 0,
        "localStudents": 25,
        "name": "Applied Engineering",
        "subjectID": 1,
        "successRate": [
            56,
            62,
            57,
            57,
            62
        ],
        "universityID": 28
    },
    {
        "id": 241,
        "entryGrades": [
            7.3,
            7.24,
            7,
            6.84,
            7.21
        ],
        "exchangeStudents": 5,
        "language": 1,
        "level": 0,
        "localStudents": 22,
        "name": "Human Engineering",
        "subjectID": 1,
        "successRate": [
            55,
            61,
            63,
            63,
            67
        ],
        "universityID": 28
    },
    {
        "id": 242,
        "entryGrades": [
            7.77,
            8.03,
            8.12,
            8.35,
            8.47
        ],
        "exchangeStudents": 4,
        "language": 1,
        "level": 2,
        "localStudents": 21,
        "name": "Advanced Studies in Medicine",
        "subjectID": 3,
        "successRate": [
            57,
            52,
            51,
            46,
            42
        ],
        "universityID": 29
    },
    {
        "id": 243,
        "entryGrades": [
            7.47,
            7.16,
            7.11,
            7.03,
            6.99
        ],
        "exchangeStudents": 4,
        "language": 1,
        "level": 1,
        "localStudents": 25,
        "name": "Human Design",
        "subjectID": 6,
        "successRate": [
            65,
            61,
            58,
            58,
            57
        ],
        "universityID": 29
    },
    {
        "id": 244,
        "entryGrades": [
            6.41,
            6.34,
            6.25,
            6.17,
            6.04
        ],
        "exchangeStudents": 4,
        "language": 1,
        "level": 0,
        "localStudents": 19,
        "name": "Advanced Studies in undefined",
        "subjectID": 3,
        "successRate": [
            48,
            47,
            44,
            42,
            39
        ],
        "universityID": 29
    },
    {
        "id": 245,
        "entryGrades": [
            6.8,
            6.89,
            7.06,
            7.25,
            7.28
        ],
        "exchangeStudents": 6,
        "language": 1,
        "level": 1,
        "localStudents": 29,
        "name": "Engineering and Sustainability",
        "subjectID": 1,
        "successRate": [
            57,
            55,
            52,
            51,
            50
        ],
        "universityID": 29
    },
    {
        "id": 246,
        "entryGrades": [
            6.84,
            6.74,
            6.57,
            6.57,
            6.45
        ],
        "exchangeStudents": 4,
        "language": 1,
        "level": 0,
        "localStudents": 25,
        "name": "Advanced Studies in Sociology",
        "subjectID": 4,
        "successRate": [
            50,
            49,
            44,
            42,
            41
        ],
        "universityID": 30
    },
    {
        "id": 247,
        "entryGrades": [
            8.2,
            7.89,
            7.67,
            7.61,
            7.51
        ],
        "exchangeStudents": 5,
        "language": 1,
        "level": 1,
        "localStudents": 15,
        "name": "Philosophy and History",
        "subjectID": 5,
        "successRate": [
            33,
            41,
            42,
            44,
            46
        ],
        "universityID": 30
    },
    {
        "id": 248,
        "entryGrades": [
            6.14,
            5.85,
            5.85,
            6.02,
            6.3
        ],
        "exchangeStudents": 6,
        "language": 1,
        "level": 0,
        "localStudents": 15,
        "name": "Human Medicine",
        "subjectID": 3,
        "successRate": [
            62,
            61,
            61,
            59,
            59
        ],
        "universityID": 30
    },
    {
        "id": 249,
        "entryGrades": [
            7.03,
            7.19,
            7.22,
            7.47,
            7.57
        ],
        "exchangeStudents": 4,
        "language": 1,
        "level": 1,
        "localStudents": 31,
        "name": "Law in the 21:st Century",
        "subjectID": 2,
        "successRate": [
            44,
            52,
            53,
            54,
            60
        ],
        "universityID": 30
    },
    {
        "id": 250,
        "entryGrades": [
            6.32,
            6.36,
            6.53,
            6.74,
            6.85
        ],
        "exchangeStudents": 5,
        "language": 1,
        "level": 2,
        "localStudents": 21,
        "name": "Applied Design",
        "subjectID": 6,
        "successRate": [
            50,
            51,
            52,
            55,
            57
        ],
        "universityID": 30
    },
    {
        "id": 251,
        "entryGrades": [
            7.65,
            7.7,
            7.58,
            7.51,
            7.9
        ],
        "exchangeStudents": 6,
        "language": 1,
        "level": 2,
        "localStudents": 28,
        "name": "Applied Philosophy",
        "subjectID": 5,
        "successRate": [
            39,
            46,
            49,
            52,
            52
        ],
        "universityID": 30
    },
    {
        "id": 252,
        "entryGrades": [
            7.97,
            8.01,
            8.03,
            8.11,
            8.26
        ],
        "exchangeStudents": 4,
        "language": 1,
        "level": 0,
        "localStudents": 12,
        "name": "Applied Law",
        "subjectID": 2,
        "successRate": [
            49,
            46,
            43,
            42,
            37
        ],
        "universityID": 30
    },
    {
        "id": 253,
        "entryGrades": [
            5.52,
            5.55,
            5.36,
            5.82,
            5.57
        ],
        "exchangeStudents": 6,
        "language": 1,
        "level": 1,
        "localStudents": 25,
        "name": "Mathematics and Virtual Reality",
        "subjectID": 0,
        "successRate": [
            48,
            52,
            53,
            57,
            57
        ],
        "universityID": 30
    },
    {
        "id": 254,
        "entryGrades": [
            8.2,
            8.41,
            8.45,
            8.47,
            8.58
        ],
        "exchangeStudents": 5,
        "language": 1,
        "level": 1,
        "localStudents": 21,
        "name": "Sociology in Society",
        "subjectID": 4,
        "successRate": [
            47,
            50,
            54,
            44,
            53
        ],
        "universityID": 30
    },
    {
        "id": 255,
        "entryGrades": [
            7.3,
            7.54,
            7.64,
            7.68,
            7.85
        ],
        "exchangeStudents": 6,
        "language": 1,
        "level": 1,
        "localStudents": 18,
        "name": "Philosophy in the 21:st Century",
        "subjectID": 5,
        "successRate": [
            52,
            47,
            46,
            53,
            61
        ],
        "universityID": 30
    },
    {
        "id": 256,
        "entryGrades": [
            6.82,
            6.93,
            7.15,
            7.41,
            7.45
        ],
        "exchangeStudents": 5,
        "language": 1,
        "level": 1,
        "localStudents": 26,
        "name": "Medicine and History",
        "subjectID": 3,
        "successRate": [
            59,
            55,
            59,
            57,
            61
        ],
        "universityID": 30
    },
    {
        "id": 257,
        "entryGrades": [
            7.54,
            7.46,
            7.35,
            7.09,
            7.04
        ],
        "exchangeStudents": 6,
        "language": 1,
        "level": 2,
        "localStudents": 27,
        "name": "Applied Sociology",
        "subjectID": 4,
        "successRate": [
            58,
            55,
            54,
            54,
            49
        ],
        "universityID": 31
    },
    {
        "id": 258,
        "entryGrades": [
            7.32,
            7.15,
            7.11,
            7.02,
            6.89
        ],
        "exchangeStudents": 6,
        "language": 1,
        "level": 0,
        "localStudents": 21,
        "name": "Applied Mathematics",
        "subjectID": 0,
        "successRate": [
            53,
            54,
            55,
            57,
            60
        ],
        "universityID": 31
    },
    {
        "id": 259,
        "entryGrades": [
            6.76,
            6.71,
            6.7,
            6.49,
            6.33
        ],
        "exchangeStudents": 6,
        "language": 1,
        "level": 2,
        "localStudents": 30,
        "name": "Sociology and Virtual Reality",
        "subjectID": 4,
        "successRate": [
            54,
            49,
            46,
            45,
            39
        ],
        "universityID": 31
    },
    {
        "id": 260,
        "entryGrades": [
            8.62,
            8.58,
            8.44,
            8.36,
            8.32
        ],
        "exchangeStudents": 4,
        "language": 1,
        "level": 0,
        "localStudents": 18,
        "name": "Sociology and History",
        "subjectID": 4,
        "successRate": [
            61,
            63,
            65,
            66,
            70
        ],
        "universityID": 31
    },
    {
        "id": 261,
        "entryGrades": [
            5.91,
            5.71,
            6.1,
            5.66,
            5.65
        ],
        "exchangeStudents": 5,
        "language": 1,
        "level": 1,
        "localStudents": 14,
        "name": "Advanced Studies in Law",
        "subjectID": 2,
        "successRate": [
            70,
            69,
            67,
            66,
            64
        ],
        "universityID": 31
    },
    {
        "id": 262,
        "entryGrades": [
            6.92,
            7.06,
            6.87,
            6.76,
            6.92
        ],
        "exchangeStudents": 4,
        "language": 1,
        "level": 1,
        "localStudents": 22,
        "name": "Sociology and Sustainability",
        "subjectID": 4,
        "successRate": [
            65,
            63,
            61,
            60,
            56
        ],
        "universityID": 32
    },
    {
        "id": 263,
        "entryGrades": [
            6.13,
            6.23,
            6.28,
            6.35,
            6.49
        ],
        "exchangeStudents": 5,
        "language": 1,
        "level": 0,
        "localStudents": 12,
        "name": "Engineering and History",
        "subjectID": 1,
        "successRate": [
            73,
            72,
            69,
            66,
            61
        ],
        "universityID": 32
    },
    {
        "id": 264,
        "entryGrades": [
            6.29,
            6.33,
            6.47,
            6.64,
            6.78
        ],
        "exchangeStudents": 6,
        "language": 1,
        "level": 1,
        "localStudents": 13,
        "name": "Advanced Studies in Mathematics",
        "subjectID": 0,
        "successRate": [
            50,
            51,
            54,
            58,
            61
        ],
        "universityID": 32
    },
    {
        "id": 265,
        "entryGrades": [
            6.74,
            6.85,
            6.87,
            7.01,
            7.15
        ],
        "exchangeStudents": 6,
        "language": 1,
        "level": 1,
        "localStudents": 34,
        "name": "Sociology and Virtual Reality",
        "subjectID": 4,
        "successRate": [
            60,
            62,
            63,
            66,
            70
        ],
        "universityID": 32
    },
    {
        "id": 266,
        "entryGrades": [
            7.89,
            7.88,
            7.87,
            7.77,
            7.69
        ],
        "exchangeStudents": 6,
        "language": 1,
        "level": 0,
        "localStudents": 26,
        "name": "Applied Law",
        "subjectID": 2,
        "successRate": [
            56,
            60,
            62,
            55,
            58
        ],
        "universityID": 32
    },
    {
        "id": 267,
        "entryGrades": [
            7.46,
            7.69,
            7.75,
            7.82,
            8.01
        ],
        "exchangeStudents": 4,
        "language": 1,
        "level": 0,
        "localStudents": 15,
        "name": "Human Mathematics",
        "subjectID": 0,
        "successRate": [
            67,
            68,
            69,
            71,
            72
        ],
        "universityID": 32
    },
    {
        "id": 268,
        "entryGrades": [
            8.3,
            8.41,
            8.14,
            8.06,
            8.33
        ],
        "exchangeStudents": 5,
        "language": 1,
        "level": 1,
        "localStudents": 15,
        "name": "Engineering and Sustainability",
        "subjectID": 1,
        "successRate": [
            47,
            47,
            48,
            49,
            53
        ],
        "universityID": 32
    },
    {
        "id": 269,
        "entryGrades": [
            5.95,
            5.91,
            5.9,
            5.87,
            5.73
        ],
        "exchangeStudents": 5,
        "language": 1,
        "level": 1,
        "localStudents": 21,
        "name": "Sociology and History",
        "subjectID": 4,
        "successRate": [
            68,
            66,
            64,
            59,
            54
        ],
        "universityID": 32
    },
    {
        "id": 270,
        "entryGrades": [
            7.25,
            7.3,
            7.43,
            7.56,
            7.73
        ],
        "exchangeStudents": 4,
        "language": 1,
        "level": 1,
        "localStudents": 21,
        "name": "Human Law",
        "subjectID": 2,
        "successRate": [
            69,
            61,
            77,
            77,
            71
        ],
        "universityID": 32
    },
    {
        "id": 271,
        "entryGrades": [
            5.43,
            5.63,
            5.68,
            5.76,
            5.78
        ],
        "exchangeStudents": 4,
        "language": 1,
        "level": 2,
        "localStudents": 13,
        "name": "Applied undefined",
        "subjectID": 4,
        "successRate": [
            62,
            56,
            58,
            69,
            63
        ],
        "universityID": 32
    },
    {
        "id": 272,
        "entryGrades": [
            6.45,
            6.54,
            6.61,
            6.71,
            6.77
        ],
        "exchangeStudents": 5,
        "language": 1,
        "level": 1,
        "localStudents": 22,
        "name": "Law in the 21:st Century",
        "subjectID": 2,
        "successRate": [
            62,
            68,
            68,
            75,
            77
        ],
        "universityID": 32
    },
    {
        "id": 273,
        "entryGrades": [
            7.85,
            7.76,
            7.73,
            7.69,
            7.4
        ],
        "exchangeStudents": 4,
        "language": 1,
        "level": 1,
        "localStudents": 22,
        "name": "Advanced Studies in Philosophy",
        "subjectID": 5,
        "successRate": [
            43,
            45,
            43,
            41,
            35
        ],
        "universityID": 32
    },
    {
        "id": 274,
        "entryGrades": [
            6.64,
            6.69,
            6.72,
            6.84,
            6.88
        ],
        "exchangeStudents": 6,
        "language": 1,
        "level": 1,
        "localStudents": 30,
        "name": "Human Mathematics",
        "subjectID": 0,
        "successRate": [
            49,
            50,
            54,
            56,
            58
        ],
        "universityID": 33
    },
    {
        "id": 275,
        "entryGrades": [
            6.98,
            6.81,
            6.77,
            7.17,
            7.07
        ],
        "exchangeStudents": 6,
        "language": 1,
        "level": 0,
        "localStudents": 31,
        "name": "Human Sociology",
        "subjectID": 4,
        "successRate": [
            55,
            56,
            59,
            60,
            65
        ],
        "universityID": 33
    },
    {
        "id": 276,
        "entryGrades": [
            7.76,
            7.75,
            7.49,
            7.26,
            7.19
        ],
        "exchangeStudents": 4,
        "language": 1,
        "level": 1,
        "localStudents": 21,
        "name": "Design in the 21:st Century",
        "subjectID": 6,
        "successRate": [
            67,
            66,
            63,
            61,
            59
        ],
        "universityID": 33
    },
    {
        "id": 277,
        "entryGrades": [
            7.42,
            7.47,
            7.56,
            7.57,
            7.64
        ],
        "exchangeStudents": 6,
        "language": 1,
        "level": 1,
        "localStudents": 30,
        "name": "Applied Philosophy",
        "subjectID": 5,
        "successRate": [
            43,
            48,
            50,
            53,
            55
        ],
        "universityID": 33
    },
    {
        "id": 278,
        "entryGrades": [
            6.42,
            6.33,
            6.32,
            6.23,
            6.04
        ],
        "exchangeStudents": 4,
        "language": 1,
        "level": 2,
        "localStudents": 15,
        "name": "Engineering and Sustainability",
        "subjectID": 1,
        "successRate": [
            58,
            61,
            62,
            62,
            66
        ],
        "universityID": 33
    },
    {
        "id": 279,
        "entryGrades": [
            5.43,
            5.58,
            5.68,
            5.74,
            5.9
        ],
        "exchangeStudents": 5,
        "language": 1,
        "level": 2,
        "localStudents": 16,
        "name": "Human Philosophy",
        "subjectID": 5,
        "successRate": [
            60,
            60,
            58,
            56,
            51
        ],
        "universityID": 34
    },
    {
        "id": 280,
        "entryGrades": [
            7.05,
            6.84,
            6.77,
            6.77,
            6.76
        ],
        "exchangeStudents": 6,
        "language": 1,
        "level": 0,
        "localStudents": 20,
        "name": "Applied Philosophy",
        "subjectID": 5,
        "successRate": [
            58,
            60,
            66,
            67,
            68
        ],
        "universityID": 34
    },
    {
        "id": 281,
        "entryGrades": [
            7.66,
            7.52,
            7.33,
            7.33,
            7
        ],
        "exchangeStudents": 4,
        "language": 1,
        "level": 0,
        "localStudents": 27,
        "name": "Engineering in the 21:st Century",
        "subjectID": 1,
        "successRate": [
            71,
            71,
            69,
            67,
            66
        ],
        "universityID": 34
    },
    {
        "id": 282,
        "entryGrades": [
            7.34,
            7.31,
            7.21,
            7.2,
            7.02
        ],
        "exchangeStudents": 6,
        "language": 1,
        "level": 2,
        "localStudents": 23,
        "name": "Human Mathematics",
        "subjectID": 0,
        "successRate": [
            62,
            64,
            66,
            67,
            73
        ],
        "universityID": 34
    },
    {
        "id": 283,
        "entryGrades": [
            7.7,
            7.87,
            7.97,
            7.78,
            7.97
        ],
        "exchangeStudents": 6,
        "language": 1,
        "level": 2,
        "localStudents": 29,
        "name": "Advanced Studies in Law",
        "subjectID": 2,
        "successRate": [
            63,
            67,
            70,
            59,
            68
        ],
        "universityID": 35
    },
    {
        "id": 284,
        "entryGrades": [
            6.35,
            6.46,
            6.61,
            6.73,
            6.9
        ],
        "exchangeStudents": 6,
        "language": 1,
        "level": 1,
        "localStudents": 18,
        "name": "Law and Virtual Reality",
        "subjectID": 2,
        "successRate": [
            61,
            61,
            59,
            59,
            55
        ],
        "universityID": 35
    },
    {
        "id": 285,
        "entryGrades": [
            6.77,
            6.9,
            6.96,
            6.41,
            6.91
        ],
        "exchangeStudents": 5,
        "language": 1,
        "level": 2,
        "localStudents": 19,
        "name": "Advanced Studies in Mathematics",
        "subjectID": 0,
        "successRate": [
            54,
            53,
            48,
            47,
            47
        ],
        "universityID": 35
    },
    {
        "id": 286,
        "entryGrades": [
            5.99,
            5.97,
            5.73,
            5.72,
            5.67
        ],
        "exchangeStudents": 6,
        "language": 1,
        "level": 0,
        "localStudents": 30,
        "name": "Applied Sociology",
        "subjectID": 4,
        "successRate": [
            40,
            45,
            46,
            47,
            51
        ],
        "universityID": 35
    },
    {
        "id": 287,
        "entryGrades": [
            5.29,
            5.35,
            5.56,
            5.79,
            5.82
        ],
        "exchangeStudents": 6,
        "language": 1,
        "level": 0,
        "localStudents": 18,
        "name": "Sociology and History",
        "subjectID": 4,
        "successRate": [
            59,
            66,
            68,
            68,
            69
        ],
        "universityID": 35
    },
    {
        "id": 288,
        "entryGrades": [
            5.38,
            5.44,
            5.76,
            5.89,
            5.97
        ],
        "exchangeStudents": 4,
        "language": 1,
        "level": 0,
        "localStudents": 14,
        "name": "Advanced Studies in undefined",
        "subjectID": 4,
        "successRate": [
            67,
            73,
            71,
            63,
            66
        ],
        "universityID": 35
    },
    {
        "id": 289,
        "entryGrades": [
            6.19,
            5.78,
            5.69,
            5.67,
            5.41
        ],
        "exchangeStudents": 6,
        "language": 3,
        "level": 1,
        "localStudents": 23,
        "name": "Matematik i 2000-talet",
        "subjectID": 0,
        "successRate": [
            57,
            54,
            54,
            57,
            54
        ],
        "universityID": 36
    },
    {
        "id": 290,
        "entryGrades": [
            6.09,
            6.21,
            6.45,
            6.45,
            6.74
        ],
        "exchangeStudents": 6,
        "language": 1,
        "level": 0,
        "localStudents": 14,
        "name": "Advanced Studies in Design",
        "subjectID": 6,
        "successRate": [
            41,
            41,
            46,
            47,
            48
        ],
        "universityID": 36
    },
    {
        "id": 291,
        "entryGrades": [
            6.33,
            6.14,
            6.43,
            6.48,
            5.98
        ],
        "exchangeStudents": 4,
        "language": 3,
        "level": 1,
        "localStudents": 16,
        "name": "Avancerade studier inom Teknik",
        "subjectID": 1,
        "successRate": [
            36,
            41,
            42,
            42,
            46
        ],
        "universityID": 36
    },
    {
        "id": 292,
        "entryGrades": [
            6.33,
            5.99,
            6,
            6.4,
            6.61
        ],
        "exchangeStudents": 5,
        "language": 3,
        "level": 1,
        "localStudents": 31,
        "name": "Avancerade studier inom Matematik",
        "subjectID": 0,
        "successRate": [
            56,
            55,
            56,
            59,
            50
        ],
        "universityID": 36
    },
    {
        "id": 293,
        "entryGrades": [
            8.05,
            8.13,
            8.15,
            8.33,
            8.41
        ],
        "exchangeStudents": 5,
        "language": 1,
        "level": 2,
        "localStudents": 27,
        "name": "Applied Law",
        "subjectID": 2,
        "successRate": [
            63,
            67,
            68,
            69,
            69
        ],
        "universityID": 36
    },
    {
        "id": 294,
        "entryGrades": [
            8.2,
            8.25,
            8.27,
            8.38,
            8.47
        ],
        "exchangeStudents": 5,
        "language": 1,
        "level": 2,
        "localStudents": 25,
        "name": "Advanced Studies in undefined",
        "subjectID": 6,
        "successRate": [
            48,
            49,
            49,
            55,
            62
        ],
        "universityID": 36
    },
    {
        "id": 295,
        "entryGrades": [
            8.06,
            8.27,
            8.47,
            8.19,
            8.43
        ],
        "exchangeStudents": 6,
        "language": 1,
        "level": 2,
        "localStudents": 27,
        "name": "Medicine in the 21:st Century",
        "subjectID": 3,
        "successRate": [
            52,
            54,
            54,
            58,
            60
        ],
        "universityID": 36
    },
    {
        "id": 296,
        "entryGrades": [
            7.17,
            7.11,
            6.87,
            6.68,
            6.54
        ],
        "exchangeStudents": 4,
        "language": 3,
        "level": 2,
        "localStudents": 21,
        "name": "Medicin i 2000-talet",
        "subjectID": 3,
        "successRate": [
            39,
            40,
            43,
            43,
            48
        ],
        "universityID": 36
    },
    {
        "id": 297,
        "entryGrades": [
            6.82,
            7.17,
            7.18,
            7.38,
            7.52
        ],
        "exchangeStudents": 6,
        "language": 1,
        "level": 0,
        "localStudents": 21,
        "name": "Philosophy and Sustainability",
        "subjectID": 5,
        "successRate": [
            58,
            64,
            52,
            64,
            51
        ],
        "universityID": 36
    },
    {
        "id": 298,
        "entryGrades": [
            7.06,
            7.03,
            6.87,
            6.68,
            6.67
        ],
        "exchangeStudents": 6,
        "language": 3,
        "level": 2,
        "localStudents": 16,
        "name": "Avancerade studier inom Sociologi",
        "subjectID": 4,
        "successRate": [
            54,
            57,
            50,
            50,
            60
        ],
        "universityID": 36
    },
    {
        "id": 299,
        "entryGrades": [
            5.83,
            5.99,
            5.99,
            5.76,
            5.89
        ],
        "exchangeStudents": 5,
        "language": 1,
        "level": 1,
        "localStudents": 21,
        "name": "Philosophy in Society",
        "subjectID": 5,
        "successRate": [
            45,
            48,
            50,
            52,
            53
        ],
        "universityID": 36
    },
    {
        "id": 300,
        "entryGrades": [
            8.43,
            8.36,
            8.22,
            8.09,
            8.09
        ],
        "exchangeStudents": 4,
        "language": 1,
        "level": 1,
        "localStudents": 27,
        "name": "Advanced Studies in Design",
        "subjectID": 6,
        "successRate": [
            67,
            63,
            63,
            60,
            59
        ],
        "universityID": 37
    },
    {
        "id": 301,
        "entryGrades": [
            7.42,
            7.54,
            7.64,
            7.96,
            8.02
        ],
        "exchangeStudents": 5,
        "language": 1,
        "level": 2,
        "localStudents": 28,
        "name": "Human Philosophy",
        "subjectID": 5,
        "successRate": [
            51,
            53,
            55,
            60,
            60
        ],
        "universityID": 37
    },
    {
        "id": 302,
        "entryGrades": [
            7.93,
            7.64,
            7.49,
            7.1,
            7.07
        ],
        "exchangeStudents": 6,
        "language": 1,
        "level": 1,
        "localStudents": 33,
        "name": "Sociology in the 21:st Century",
        "subjectID": 4,
        "successRate": [
            43,
            45,
            47,
            48,
            48
        ],
        "universityID": 37
    },
    {
        "id": 303,
        "entryGrades": [
            7.71,
            7.52,
            7.34,
            7.33,
            7.24
        ],
        "exchangeStudents": 4,
        "language": 3,
        "level": 0,
        "localStudents": 34,
        "name": "Avancerade studier inom Design",
        "subjectID": 6,
        "successRate": [
            63,
            57,
            68,
            56,
            67
        ],
        "universityID": 37
    },
    {
        "id": 304,
        "entryGrades": [
            5.71,
            5.66,
            5.92,
            5.9,
            5.46
        ],
        "exchangeStudents": 5,
        "language": 3,
        "level": 0,
        "localStudents": 22,
        "name": "Avancerade studier inom Matematik",
        "subjectID": 0,
        "successRate": [
            43,
            45,
            47,
            50,
            51
        ],
        "universityID": 37
    },
    {
        "id": 305,
        "entryGrades": [
            7.16,
            6.99,
            7.17,
            7.2,
            7.35
        ],
        "exchangeStudents": 6,
        "language": 1,
        "level": 1,
        "localStudents": 18,
        "name": "Applied Design",
        "subjectID": 6,
        "successRate": [
            44,
            43,
            42,
            38,
            35
        ],
        "universityID": 37
    },
    {
        "id": 306,
        "entryGrades": [
            7.81,
            7.63,
            7.36,
            7.34,
            7.26
        ],
        "exchangeStudents": 6,
        "language": 1,
        "level": 0,
        "localStudents": 31,
        "name": "Law and History",
        "subjectID": 2,
        "successRate": [
            67,
            66,
            64,
            63,
            57
        ],
        "universityID": 37
    },
    {
        "id": 307,
        "entryGrades": [
            7.93,
            8.15,
            7.96,
            8.11,
            7.94
        ],
        "exchangeStudents": 6,
        "language": 1,
        "level": 2,
        "localStudents": 19,
        "name": "Human Sociology",
        "subjectID": 4,
        "successRate": [
            55,
            52,
            52,
            49,
            47
        ],
        "universityID": 37
    },
    {
        "id": 308,
        "entryGrades": [
            7.12,
            6.95,
            7.28,
            7.3,
            7.05
        ],
        "exchangeStudents": 4,
        "language": 1,
        "level": 1,
        "localStudents": 26,
        "name": "Applied Mathematics",
        "subjectID": 0,
        "successRate": [
            62,
            60,
            60,
            56,
            56
        ],
        "universityID": 38
    },
    {
        "id": 309,
        "entryGrades": [
            5.44,
            5.52,
            5.54,
            5.69,
            5.83
        ],
        "exchangeStudents": 6,
        "language": 1,
        "level": 1,
        "localStudents": 26,
        "name": "Engineering and Virtual Reality",
        "subjectID": 1,
        "successRate": [
            66,
            69,
            67,
            74,
            67
        ],
        "universityID": 38
    },
    {
        "id": 310,
        "entryGrades": [
            6.87,
            6.65,
            6.55,
            6.6,
            6.63
        ],
        "exchangeStudents": 6,
        "language": 1,
        "level": 2,
        "localStudents": 24,
        "name": "Engineering in the 21:st Century",
        "subjectID": 1,
        "successRate": [
            54,
            55,
            47,
            50,
            60
        ],
        "universityID": 38
    },
    {
        "id": 311,
        "entryGrades": [
            8.04,
            7.95,
            7.93,
            7.77,
            7.76
        ],
        "exchangeStudents": 5,
        "language": 3,
        "level": 2,
        "localStudents": 19,
        "name": "Medicin i samh\u00e4llet",
        "subjectID": 3,
        "successRate": [
            49,
            49,
            50,
            55,
            55
        ],
        "universityID": 38
    },
    {
        "id": 312,
        "entryGrades": [
            6.9,
            6.8,
            6.8,
            7.08,
            7.05
        ],
        "exchangeStudents": 4,
        "language": 3,
        "level": 1,
        "localStudents": 12,
        "name": "Avancerade studier inom Medicin",
        "subjectID": 3,
        "successRate": [
            57,
            58,
            55,
            58,
            64
        ],
        "universityID": 38
    },
    {
        "id": 313,
        "entryGrades": [
            6.73,
            6.7,
            6.59,
            6.49,
            6.45
        ],
        "exchangeStudents": 5,
        "language": 1,
        "level": 1,
        "localStudents": 12,
        "name": "Applied Philosophy",
        "subjectID": 5,
        "successRate": [
            65,
            60,
            58,
            58,
            57
        ],
        "universityID": 38
    },
    {
        "id": 314,
        "entryGrades": [
            6.56,
            6.51,
            6.48,
            6.36,
            6.33
        ],
        "exchangeStudents": 6,
        "language": 3,
        "level": 0,
        "localStudents": 21,
        "name": "Medicin i historien",
        "subjectID": 3,
        "successRate": [
            41,
            43,
            46,
            48,
            36
        ],
        "universityID": 39
    },
    {
        "id": 315,
        "entryGrades": [
            6.96,
            7.21,
            7.28,
            7.08,
            7.18
        ],
        "exchangeStudents": 6,
        "language": 3,
        "level": 0,
        "localStudents": 17,
        "name": "Medicin i 2000-talet",
        "subjectID": 3,
        "successRate": [
            40,
            40,
            42,
            40,
            42
        ],
        "universityID": 39
    },
    {
        "id": 316,
        "entryGrades": [
            6.22,
            6.27,
            6.25,
            6.05,
            6.38
        ],
        "exchangeStudents": 6,
        "language": 1,
        "level": 1,
        "localStudents": 17,
        "name": "Mathematics and History",
        "subjectID": 0,
        "successRate": [
            62,
            68,
            64,
            63,
            67
        ],
        "universityID": 39
    },
    {
        "id": 317,
        "entryGrades": [
            5.58,
            5.76,
            5.55,
            5.86,
            5.77
        ],
        "exchangeStudents": 6,
        "language": 1,
        "level": 0,
        "localStudents": 29,
        "name": "Applied Mathematics",
        "subjectID": 0,
        "successRate": [
            64,
            64,
            61,
            60,
            58
        ],
        "universityID": 39
    },
    {
        "id": 318,
        "entryGrades": [
            7.14,
            6.94,
            6.94,
            6.89,
            6.76
        ],
        "exchangeStudents": 4,
        "language": 1,
        "level": 1,
        "localStudents": 23,
        "name": "Engineering and Virtual Reality",
        "subjectID": 1,
        "successRate": [
            64,
            61,
            59,
            58,
            56
        ],
        "universityID": 39
    },
    {
        "id": 319,
        "entryGrades": [
            8.43,
            8.69,
            8.7,
            8.35,
            8.35
        ],
        "exchangeStudents": 4,
        "language": 3,
        "level": 1,
        "localStudents": 24,
        "name": "Design i 2000-talet",
        "subjectID": 6,
        "successRate": [
            50,
            45,
            58,
            54,
            47
        ],
        "universityID": 39
    },
    {
        "id": 320,
        "entryGrades": [
            7.65,
            7.53,
            7.44,
            7.29,
            6.98
        ],
        "exchangeStudents": 5,
        "language": 1,
        "level": 1,
        "localStudents": 26,
        "name": "Advanced Studies in Engineering",
        "subjectID": 1,
        "successRate": [
            53,
            51,
            53,
            58,
            54
        ],
        "universityID": 39
    },
    {
        "id": 321,
        "entryGrades": [
            6.35,
            6.48,
            6.65,
            6.85,
            6.88
        ],
        "exchangeStudents": 4,
        "language": 1,
        "level": 0,
        "localStudents": 17,
        "name": "Advanced Studies in Mathematics",
        "subjectID": 0,
        "successRate": [
            61,
            60,
            57,
            64,
            58
        ],
        "universityID": 39
    },
    {
        "id": 322,
        "entryGrades": [
            5.9,
            6.18,
            5.77,
            5.68,
            6.02
        ],
        "exchangeStudents": 6,
        "language": 3,
        "level": 1,
        "localStudents": 17,
        "name": "Design och h\u00e5llbarhet",
        "subjectID": 6,
        "successRate": [
            58,
            57,
            55,
            50,
            50
        ],
        "universityID": 39
    },
    {
        "id": 323,
        "entryGrades": [
            7.35,
            7.39,
            7.44,
            7.55,
            7.75
        ],
        "exchangeStudents": 6,
        "language": 3,
        "level": 0,
        "localStudents": 32,
        "name": "Teknik i samh\u00e4llet",
        "subjectID": 1,
        "successRate": [
            52,
            57,
            57,
            61,
            62
        ],
        "universityID": 39
    },
    {
        "id": 324,
        "entryGrades": [
            5.52,
            5.65,
            5.76,
            5.86,
            5.97
        ],
        "exchangeStudents": 4,
        "language": 3,
        "level": 1,
        "localStudents": 13,
        "name": "Avancerade studier inom Juridik",
        "subjectID": 2,
        "successRate": [
            56,
            57,
            58,
            58,
            60
        ],
        "universityID": 40
    },
    {
        "id": 325,
        "entryGrades": [
            6.45,
            6.47,
            6.55,
            6.72,
            6.74
        ],
        "exchangeStudents": 4,
        "language": 1,
        "level": 1,
        "localStudents": 21,
        "name": "Law and History",
        "subjectID": 2,
        "successRate": [
            63,
            57,
            56,
            56,
            53
        ],
        "universityID": 40
    },
    {
        "id": 326,
        "entryGrades": [
            7.78,
            7.89,
            7.71,
            7.71,
            7.65
        ],
        "exchangeStudents": 6,
        "language": 3,
        "level": 1,
        "localStudents": 19,
        "name": "Avancerade studier inom Matematik",
        "subjectID": 0,
        "successRate": [
            68,
            62,
            60,
            59,
            57
        ],
        "universityID": 40
    },
    {
        "id": 327,
        "entryGrades": [
            8.23,
            8.32,
            8.32,
            8.36,
            8.48
        ],
        "exchangeStudents": 4,
        "language": 1,
        "level": 1,
        "localStudents": 18,
        "name": "Advanced Studies in Design",
        "subjectID": 6,
        "successRate": [
            49,
            51,
            46,
            47,
            49
        ],
        "universityID": 40
    },
    {
        "id": 328,
        "entryGrades": [
            5.52,
            5.26,
            5.1,
            5.51,
            5.89
        ],
        "exchangeStudents": 4,
        "language": 3,
        "level": 2,
        "localStudents": 21,
        "name": "Matematik i historien",
        "subjectID": 0,
        "successRate": [
            45,
            47,
            48,
            51,
            51
        ],
        "universityID": 40
    },
    {
        "id": 329,
        "entryGrades": [
            7.86,
            7.81,
            7.77,
            7.68,
            7.51
        ],
        "exchangeStudents": 5,
        "language": 1,
        "level": 0,
        "localStudents": 31,
        "name": "Applied Philosophy",
        "subjectID": 5,
        "successRate": [
            51,
            53,
            53,
            55,
            60
        ],
        "universityID": 41
    },
    {
        "id": 330,
        "entryGrades": [
            6.73,
            6.62,
            6.55,
            6.52,
            6.31
        ],
        "exchangeStudents": 5,
        "language": 1,
        "level": 2,
        "localStudents": 22,
        "name": "undefined in Society",
        "subjectID": 5,
        "successRate": [
            58,
            53,
            52,
            51,
            48
        ],
        "universityID": 41
    },
    {
        "id": 331,
        "entryGrades": [
            6.11,
            6.22,
            6.35,
            6.4,
            6.42
        ],
        "exchangeStudents": 6,
        "language": 3,
        "level": 2,
        "localStudents": 18,
        "name": "Avancerade studier inom Medicin",
        "subjectID": 3,
        "successRate": [
            69,
            68,
            71,
            66,
            72
        ],
        "universityID": 41
    },
    {
        "id": 332,
        "entryGrades": [
            6.14,
            6.05,
            6.04,
            5.97,
            5.94
        ],
        "exchangeStudents": 6,
        "language": 1,
        "level": 1,
        "localStudents": 21,
        "name": "Advanced Studies in Philosophy",
        "subjectID": 5,
        "successRate": [
            54,
            56,
            58,
            55,
            52
        ],
        "universityID": 41
    },
    {
        "id": 333,
        "entryGrades": [
            7.6,
            7.8,
            7.9,
            7.94,
            8.06
        ],
        "exchangeStudents": 6,
        "language": 1,
        "level": 1,
        "localStudents": 25,
        "name": "Law in the 21:st Century",
        "subjectID": 2,
        "successRate": [
            40,
            45,
            38,
            39,
            46
        ],
        "universityID": 42
    },
    {
        "id": 334,
        "entryGrades": [
            7.55,
            7.49,
            7.48,
            7.31,
            7.31
        ],
        "exchangeStudents": 6,
        "language": 1,
        "level": 1,
        "localStudents": 30,
        "name": "Mathematics and Sustainability",
        "subjectID": 0,
        "successRate": [
            74,
            70,
            69,
            63,
            62
        ],
        "universityID": 42
    },
    {
        "id": 335,
        "entryGrades": [
            6.72,
            6.67,
            6.89,
            6.86,
            6.69
        ],
        "exchangeStudents": 5,
        "language": 1,
        "level": 1,
        "localStudents": 32,
        "name": "Applied Design",
        "subjectID": 6,
        "successRate": [
            41,
            42,
            43,
            43,
            44
        ],
        "universityID": 42
    },
    {
        "id": 336,
        "entryGrades": [
            8.14,
            8.29,
            8.48,
            8.38,
            8.09
        ],
        "exchangeStudents": 4,
        "language": 1,
        "level": 0,
        "localStudents": 19,
        "name": "Advanced Studies in Sociology",
        "subjectID": 4,
        "successRate": [
            53,
            58,
            51,
            52,
            55
        ],
        "universityID": 42
    },
    {
        "id": 337,
        "entryGrades": [
            7.46,
            7.5,
            7.53,
            7.63,
            7.29
        ],
        "exchangeStudents": 5,
        "language": 1,
        "level": 1,
        "localStudents": 17,
        "name": "Philosophy and History",
        "subjectID": 5,
        "successRate": [
            67,
            63,
            72,
            66,
            70
        ],
        "universityID": 42
    },
    {
        "id": 338,
        "entryGrades": [
            8.64,
            8.61,
            8.45,
            8.38,
            8.23
        ],
        "exchangeStudents": 6,
        "language": 0,
        "level": 2,
        "localStudents": 29,
        "name": "Medicina aplicadas",
        "subjectID": 3,
        "successRate": [
            58,
            53,
            52,
            49,
            47
        ],
        "universityID": 43
    },
    {
        "id": 339,
        "entryGrades": [
            5.77,
            5.75,
            5.6,
            5.55,
            5.32
        ],
        "exchangeStudents": 4,
        "language": 0,
        "level": 2,
        "localStudents": 24,
        "name": "Medicina y sostenibilidad",
        "subjectID": 3,
        "successRate": [
            49,
            53,
            55,
            46,
            53
        ],
        "universityID": 43
    },
    {
        "id": 340,
        "entryGrades": [
            6.4,
            6.15,
            6.15,
            5.95,
            5.74
        ],
        "exchangeStudents": 5,
        "language": 0,
        "level": 1,
        "localStudents": 21,
        "name": "Estudios superiores de Sociolog\u00eda",
        "subjectID": 4,
        "successRate": [
            76,
            76,
            74,
            69,
            67
        ],
        "universityID": 43
    },
    {
        "id": 341,
        "entryGrades": [
            5.37,
            5.42,
            5.45,
            5.6,
            5.83
        ],
        "exchangeStudents": 6,
        "language": 1,
        "level": 0,
        "localStudents": 34,
        "name": "Applied Medicine",
        "subjectID": 3,
        "successRate": [
            65,
            66,
            66,
            67,
            71
        ],
        "universityID": 43
    },
    {
        "id": 342,
        "entryGrades": [
            6.79,
            6.92,
            7.01,
            7.2,
            7.33
        ],
        "exchangeStudents": 6,
        "language": 0,
        "level": 0,
        "localStudents": 21,
        "name": "Estudios superiores de Ingenier\u00eda",
        "subjectID": 1,
        "successRate": [
            59,
            57,
            56,
            55,
            50
        ],
        "universityID": 44
    },
    {
        "id": 343,
        "entryGrades": [
            7.27,
            7.29,
            7.33,
            7.34,
            7.48
        ],
        "exchangeStudents": 5,
        "language": 0,
        "level": 1,
        "localStudents": 18,
        "name": "Estudios superiores de Medicina",
        "subjectID": 3,
        "successRate": [
            66,
            63,
            66,
            64,
            63
        ],
        "universityID": 44
    },
    {
        "id": 344,
        "entryGrades": [
            6.54,
            6.3,
            6.19,
            6.16,
            6.09
        ],
        "exchangeStudents": 4,
        "language": 0,
        "level": 0,
        "localStudents": 22,
        "name": "Derecho y realidad virtual",
        "subjectID": 2,
        "successRate": [
            51,
            59,
            59,
            61,
            63
        ],
        "universityID": 44
    },
    {
        "id": 345,
        "entryGrades": [
            8.09,
            7.89,
            8.36,
            8.43,
            8.31
        ],
        "exchangeStudents": 5,
        "language": 1,
        "level": 1,
        "localStudents": 17,
        "name": "Design in the 21:st Century",
        "subjectID": 6,
        "successRate": [
            55,
            63,
            51,
            48,
            58
        ],
        "universityID": 44
    },
    {
        "id": 346,
        "entryGrades": [
            6.54,
            6.65,
            6.77,
            6.83,
            7.17
        ],
        "exchangeStudents": 5,
        "language": 0,
        "level": 1,
        "localStudents": 21,
        "name": "Estudios superiores de Filosof\u00eda",
        "subjectID": 5,
        "successRate": [
            39,
            39,
            42,
            46,
            54
        ],
        "universityID": 44
    },
    {
        "id": 347,
        "entryGrades": [
            6.36,
            6.37,
            6.4,
            6.6,
            6.61
        ],
        "exchangeStudents": 6,
        "language": 0,
        "level": 2,
        "localStudents": 24,
        "name": "Estudios superiores de Sociolog\u00eda",
        "subjectID": 4,
        "successRate": [
            56,
            53,
            50,
            49,
            48
        ],
        "universityID": 44
    },
    {
        "id": 348,
        "entryGrades": [
            6.16,
            6.29,
            6.36,
            6.44,
            6.51
        ],
        "exchangeStudents": 6,
        "language": 1,
        "level": 0,
        "localStudents": 33,
        "name": "Advanced Studies in Sociology",
        "subjectID": 4,
        "successRate": [
            62,
            64,
            69,
            70,
            72
        ],
        "universityID": 45
    },
    {
        "id": 349,
        "entryGrades": [
            6.83,
            6.52,
            6.4,
            6.39,
            6.21
        ],
        "exchangeStudents": 4,
        "language": 0,
        "level": 0,
        "localStudents": 19,
        "name": "Estudios superiores de Dise\u00f1o",
        "subjectID": 6,
        "successRate": [
            45,
            44,
            43,
            43,
            40
        ],
        "universityID": 45
    },
    {
        "id": 350,
        "entryGrades": [
            8.11,
            8.37,
            8.39,
            8.43,
            8.61
        ],
        "exchangeStudents": 6,
        "language": 1,
        "level": 1,
        "localStudents": 25,
        "name": "Law and Sustainability",
        "subjectID": 2,
        "successRate": [
            40,
            45,
            47,
            50,
            54
        ],
        "universityID": 45
    },
    {
        "id": 351,
        "entryGrades": [
            6.17,
            6.1,
            6.1,
            5.94,
            5.73
        ],
        "exchangeStudents": 5,
        "language": 0,
        "level": 0,
        "localStudents": 33,
        "name": "Estudios superiores de Matem\u00e1ticas",
        "subjectID": 0,
        "successRate": [
            62,
            70,
            58,
            67,
            58
        ],
        "universityID": 45
    },
    {
        "id": 352,
        "entryGrades": [
            7.49,
            7.18,
            7.04,
            6.96,
            6.75
        ],
        "exchangeStudents": 5,
        "language": 1,
        "level": 0,
        "localStudents": 27,
        "name": "Human Engineering",
        "subjectID": 1,
        "successRate": [
            40,
            42,
            45,
            46,
            49
        ],
        "universityID": 45
    },
    {
        "id": 353,
        "entryGrades": [
            7.55,
            7.49,
            7.3,
            7.2,
            7.12
        ],
        "exchangeStudents": 6,
        "language": 1,
        "level": 1,
        "localStudents": 12,
        "name": "Medicine and Virtual Reality",
        "subjectID": 3,
        "successRate": [
            68,
            65,
            67,
            63,
            69
        ],
        "universityID": 45
    },
    {
        "id": 354,
        "entryGrades": [
            8.33,
            8.1,
            8.07,
            7.77,
            7.67
        ],
        "exchangeStudents": 5,
        "language": 0,
        "level": 1,
        "localStudents": 31,
        "name": "Filosof\u00eda y sostenibilidad",
        "subjectID": 5,
        "successRate": [
            39,
            40,
            43,
            45,
            48
        ],
        "universityID": 46
    },
    {
        "id": 355,
        "entryGrades": [
            8.21,
            8.14,
            8.06,
            8.05,
            7.88
        ],
        "exchangeStudents": 5,
        "language": 1,
        "level": 1,
        "localStudents": 21,
        "name": "Design in the 21:st Century",
        "subjectID": 6,
        "successRate": [
            62,
            60,
            60,
            58,
            57
        ],
        "universityID": 46
    },
    {
        "id": 356,
        "entryGrades": [
            7.13,
            7.11,
            7.09,
            6.78,
            6.5
        ],
        "exchangeStudents": 6,
        "language": 0,
        "level": 1,
        "localStudents": 32,
        "name": "Estudios superiores de Matem\u00e1ticas",
        "subjectID": 0,
        "successRate": [
            59,
            57,
            61,
            65,
            57
        ],
        "universityID": 46
    },
    {
        "id": 357,
        "entryGrades": [
            5.8,
            5.74,
            5.67,
            5.36,
            5.31
        ],
        "exchangeStudents": 5,
        "language": 0,
        "level": 0,
        "localStudents": 30,
        "name": "Filosof\u00eda aplicadas",
        "subjectID": 5,
        "successRate": [
            73,
            73,
            68,
            66,
            59
        ],
        "universityID": 46
    },
    {
        "id": 358,
        "entryGrades": [
            8.66,
            8.6,
            8.52,
            8.49,
            8.39
        ],
        "exchangeStudents": 4,
        "language": 0,
        "level": 2,
        "localStudents": 14,
        "name": "Estudios superiores de undefined",
        "subjectID": 5,
        "successRate": [
            56,
            52,
            50,
            49,
            44
        ],
        "universityID": 46
    },
    {
        "id": 359,
        "entryGrades": [
            6.85,
            7.03,
            6.84,
            6.95,
            6.9
        ],
        "exchangeStudents": 5,
        "language": 1,
        "level": 1,
        "localStudents": 19,
        "name": "Advanced Studies in Philosophy",
        "subjectID": 5,
        "successRate": [
            52,
            50,
            48,
            46,
            45
        ],
        "universityID": 46
    },
    {
        "id": 360,
        "entryGrades": [
            8.4,
            8.67,
            8.69,
            8.1,
            8.27
        ],
        "exchangeStudents": 4,
        "language": 1,
        "level": 2,
        "localStudents": 15,
        "name": "Mathematics and History",
        "subjectID": 0,
        "successRate": [
            63,
            62,
            60,
            59,
            59
        ],
        "universityID": 46
    },
    {
        "id": 361,
        "entryGrades": [
            7.21,
            7.26,
            7.32,
            7.55,
            7.75
        ],
        "exchangeStudents": 6,
        "language": 0,
        "level": 2,
        "localStudents": 26,
        "name": "Estudios superiores de Dise\u00f1o",
        "subjectID": 6,
        "successRate": [
            67,
            64,
            62,
            60,
            53
        ],
        "universityID": 46
    },
    {
        "id": 362,
        "entryGrades": [
            7.67,
            7.59,
            7.6,
            7.43,
            7.86
        ],
        "exchangeStudents": 6,
        "language": 1,
        "level": 0,
        "localStudents": 33,
        "name": "Applied Sociology",
        "subjectID": 4,
        "successRate": [
            63,
            66,
            69,
            71,
            72
        ],
        "universityID": 47
    },
    {
        "id": 363,
        "entryGrades": [
            6.84,
            6.78,
            6.61,
            6.6,
            6.58
        ],
        "exchangeStudents": 6,
        "language": 1,
        "level": 0,
        "localStudents": 18,
        "name": "Engineering in the 21:st Century",
        "subjectID": 1,
        "successRate": [
            57,
            53,
            52,
            52,
            57
        ],
        "universityID": 47
    },
    {
        "id": 364,
        "entryGrades": [
            6.98,
            7.12,
            6.85,
            6.79,
            7.02
        ],
        "exchangeStudents": 5,
        "language": 0,
        "level": 1,
        "localStudents": 23,
        "name": "Estudios superiores de Dise\u00f1o",
        "subjectID": 6,
        "successRate": [
            53,
            52,
            52,
            45,
            40
        ],
        "universityID": 47
    },
    {
        "id": 365,
        "entryGrades": [
            7.64,
            7.63,
            7.49,
            7.18,
            7.05
        ],
        "exchangeStudents": 6,
        "language": 1,
        "level": 2,
        "localStudents": 22,
        "name": "Advanced Studies in Medicine",
        "subjectID": 3,
        "successRate": [
            64,
            64,
            57,
            64,
            67
        ],
        "universityID": 47
    },
    {
        "id": 366,
        "entryGrades": [
            8.42,
            8.15,
            8.24,
            8.42,
            8.53
        ],
        "exchangeStudents": 6,
        "language": 1,
        "level": 2,
        "localStudents": 32,
        "name": "Medicine and Sustainability",
        "subjectID": 3,
        "successRate": [
            40,
            41,
            43,
            47,
            47
        ],
        "universityID": 47
    },
    {
        "id": 367,
        "entryGrades": [
            7.6,
            7.58,
            7.5,
            7.41,
            7.33
        ],
        "exchangeStudents": 5,
        "language": 1,
        "level": 2,
        "localStudents": 22,
        "name": "Advanced Studies in Design",
        "subjectID": 6,
        "successRate": [
            54,
            45,
            53,
            55,
            53
        ],
        "universityID": 47
    },
    {
        "id": 368,
        "entryGrades": [
            8.59,
            8.21,
            8.14,
            8.12,
            8.04
        ],
        "exchangeStudents": 4,
        "language": 0,
        "level": 1,
        "localStudents": 18,
        "name": "Estudios superiores de Filosof\u00eda",
        "subjectID": 5,
        "successRate": [
            65,
            67,
            68,
            68,
            69
        ],
        "universityID": 48
    },
    {
        "id": 369,
        "entryGrades": [
            8.23,
            8.43,
            8.47,
            8.45,
            8.62
        ],
        "exchangeStudents": 6,
        "language": 1,
        "level": 0,
        "localStudents": 21,
        "name": "Mathematics and Sustainability",
        "subjectID": 0,
        "successRate": [
            59,
            57,
            53,
            53,
            51
        ],
        "universityID": 48
    },
    {
        "id": 370,
        "entryGrades": [
            7.84,
            7.85,
            7.9,
            7.99,
            8.16
        ],
        "exchangeStudents": 6,
        "language": 1,
        "level": 2,
        "localStudents": 16,
        "name": "Applied Philosophy",
        "subjectID": 5,
        "successRate": [
            39,
            45,
            46,
            48,
            53
        ],
        "universityID": 48
    },
    {
        "id": 371,
        "entryGrades": [
            6.5,
            6.72,
            6.57,
            6.8,
            6.33
        ],
        "exchangeStudents": 5,
        "language": 0,
        "level": 1,
        "localStudents": 35,
        "name": "Estudios superiores de Sociolog\u00eda",
        "subjectID": 4,
        "successRate": [
            46,
            50,
            48,
            48,
            43
        ],
        "universityID": 48
    },
    {
        "id": 372,
        "entryGrades": [
            6.63,
            6.82,
            6.87,
            7,
            7.1
        ],
        "exchangeStudents": 4,
        "language": 0,
        "level": 0,
        "localStudents": 28,
        "name": "Matem\u00e1ticas y sociedad",
        "subjectID": 0,
        "successRate": [
            68,
            66,
            62,
            61,
            56
        ],
        "universityID": 48
    },
    {
        "id": 373,
        "entryGrades": [
            7.88,
            7.71,
            7.68,
            7.64,
            7.58
        ],
        "exchangeStudents": 5,
        "language": 0,
        "level": 0,
        "localStudents": 12,
        "name": "Estudios superiores de Derecho",
        "subjectID": 2,
        "successRate": [
            56,
            49,
            48,
            43,
            42
        ],
        "universityID": 48
    },
    {
        "id": 374,
        "entryGrades": [
            6.28,
            6.5,
            6.53,
            6.73,
            6.82
        ],
        "exchangeStudents": 4,
        "language": 1,
        "level": 1,
        "localStudents": 23,
        "name": "Mathematics in Society",
        "subjectID": 0,
        "successRate": [
            61,
            57,
            54,
            62,
            58
        ],
        "universityID": 49
    },
    {
        "id": 375,
        "entryGrades": [
            6.04,
            5.95,
            5.59,
            5.56,
            5.17
        ],
        "exchangeStudents": 6,
        "language": 1,
        "level": 1,
        "localStudents": 21,
        "name": "Human Design",
        "subjectID": 6,
        "successRate": [
            63,
            66,
            66,
            66,
            68
        ],
        "universityID": 49
    },
    {
        "id": 376,
        "entryGrades": [
            6.7,
            6.74,
            7,
            7.01,
            7.02
        ],
        "exchangeStudents": 6,
        "language": 0,
        "level": 1,
        "localStudents": 20,
        "name": "Estudios superiores de Ingenier\u00eda",
        "subjectID": 1,
        "successRate": [
            48,
            49,
            49,
            52,
            57
        ],
        "universityID": 49
    },
    {
        "id": 377,
        "entryGrades": [
            6.74,
            6.71,
            6.51,
            6.46,
            6.28
        ],
        "exchangeStudents": 5,
        "language": 0,
        "level": 2,
        "localStudents": 13,
        "name": "Matem\u00e1ticas y sostenibilidad",
        "subjectID": 0,
        "successRate": [
            48,
            49,
            53,
            55,
            57
        ],
        "universityID": 49
    },
    {
        "id": 378,
        "entryGrades": [
            6.25,
            6.2,
            6.43,
            6.45,
            6
        ],
        "exchangeStudents": 4,
        "language": 1,
        "level": 2,
        "localStudents": 29,
        "name": "Medicine in the 21:st Century",
        "subjectID": 3,
        "successRate": [
            59,
            62,
            65,
            67,
            72
        ],
        "universityID": 49
    },
    {
        "id": 379,
        "entryGrades": [
            6.39,
            6.74,
            6.75,
            6.86,
            7.14
        ],
        "exchangeStudents": 5,
        "language": 1,
        "level": 1,
        "localStudents": 17,
        "name": "Law in the 21:st Century",
        "subjectID": 2,
        "successRate": [
            61,
            63,
            66,
            68,
            71
        ],
        "universityID": 49
    },
    {
        "id": 380,
        "entryGrades": [
            6.58,
            6.22,
            6.21,
            6.13,
            5.9
        ],
        "exchangeStudents": 4,
        "language": 1,
        "level": 1,
        "localStudents": 15,
        "name": "Applied Engineering",
        "subjectID": 1,
        "successRate": [
            54,
            55,
            57,
            59,
            59
        ],
        "universityID": 49
    },
    {
        "id": 381,
        "entryGrades": [
            6.99,
            7,
            6.97,
            7.21,
            7.23
        ],
        "exchangeStudents": 6,
        "language": 1,
        "level": 1,
        "localStudents": 19,
        "name": "Design in Society",
        "subjectID": 6,
        "successRate": [
            46,
            45,
            43,
            43,
            42
        ],
        "universityID": 50
    },
    {
        "id": 382,
        "entryGrades": [
            8.15,
            7.99,
            7.77,
            7.77,
            7.4
        ],
        "exchangeStudents": 6,
        "language": 0,
        "level": 2,
        "localStudents": 32,
        "name": "Derecho aplicadas",
        "subjectID": 2,
        "successRate": [
            39,
            41,
            42,
            44,
            45
        ],
        "universityID": 50
    },
    {
        "id": 383,
        "entryGrades": [
            5.91,
            5.81,
            5.63,
            5.42,
            5.38
        ],
        "exchangeStudents": 4,
        "language": 0,
        "level": 2,
        "localStudents": 20,
        "name": "Matem\u00e1ticas y sociedad",
        "subjectID": 0,
        "successRate": [
            53,
            53,
            55,
            55,
            48
        ],
        "universityID": 50
    },
    {
        "id": 384,
        "entryGrades": [
            8.38,
            8.48,
            8.6,
            8.2,
            8.25
        ],
        "exchangeStudents": 5,
        "language": 1,
        "level": 0,
        "localStudents": 25,
        "name": "Advanced Studies in Law",
        "subjectID": 2,
        "successRate": [
            49,
            49,
            50,
            52,
            58
        ],
        "universityID": 50
    },
    {
        "id": 385,
        "entryGrades": [
            6.5,
            6.44,
            6.29,
            6.28,
            6.17
        ],
        "exchangeStudents": 5,
        "language": 1,
        "level": 0,
        "localStudents": 16,
        "name": "Human Mathematics",
        "subjectID": 0,
        "successRate": [
            42,
            41,
            48,
            39,
            46
        ],
        "universityID": 50
    },
    {
        "id": 386,
        "entryGrades": [
            8.31,
            8.31,
            8.42,
            8.54,
            8.24
        ],
        "exchangeStudents": 6,
        "language": 1,
        "level": 0,
        "localStudents": 26,
        "name": "Human Law",
        "subjectID": 2,
        "successRate": [
            53,
            54,
            53,
            57,
            53
        ],
        "universityID": 50
    },
    {
        "id": 387,
        "entryGrades": [
            6.63,
            6.68,
            6.85,
            6.89,
            6.91
        ],
        "exchangeStudents": 6,
        "language": 1,
        "level": 0,
        "localStudents": 13,
        "name": "Advanced Studies in Sociology",
        "subjectID": 4,
        "successRate": [
            56,
            54,
            62,
            59,
            59
        ],
        "universityID": 50
    },
    {
        "id": 388,
        "entryGrades": [
            5.66,
            5.72,
            5.91,
            5.8,
            5.91
        ],
        "exchangeStudents": 5,
        "language": 1,
        "level": 1,
        "localStudents": 21,
        "name": "Design and History",
        "subjectID": 6,
        "successRate": [
            36,
            37,
            42,
            45,
            46
        ],
        "universityID": 50
    },
    {
        "id": 389,
        "entryGrades": [
            6.19,
            6.42,
            6.5,
            6.68,
            6.82
        ],
        "exchangeStudents": 5,
        "language": 1,
        "level": 1,
        "localStudents": 33,
        "name": "Engineering and History",
        "subjectID": 1,
        "successRate": [
            61,
            61,
            56,
            47,
            46
        ],
        "universityID": 50
    },
    {
        "id": 390,
        "entryGrades": [
            7.84,
            7.77,
            7.51,
            7.17,
            7.16
        ],
        "exchangeStudents": 5,
        "language": 1,
        "level": 1,
        "localStudents": 19,
        "name": "undefined and Virtual Reality",
        "subjectID": 0,
        "successRate": [
            60,
            58,
            56,
            55,
            55
        ],
        "universityID": 50
    },
    {
        "id": 391,
        "entryGrades": [
            6.88,
            6.72,
            7.1,
            7.11,
            6.88
        ],
        "exchangeStudents": 6,
        "language": 1,
        "level": 2,
        "localStudents": 15,
        "name": "Human Medicine",
        "subjectID": 3,
        "successRate": [
            58,
            64,
            54,
            61,
            50
        ],
        "universityID": 50
    },
    {
        "id": 392,
        "entryGrades": [
            8.49,
            8.47,
            8.36,
            8.28,
            8.24
        ],
        "exchangeStudents": 5,
        "language": 0,
        "level": 1,
        "localStudents": 15,
        "name": "Sociolog\u00eda y sostenibilidad",
        "subjectID": 4,
        "successRate": [
            62,
            59,
            61,
            61,
            69
        ],
        "universityID": 51
    },
    {
        "id": 393,
        "entryGrades": [
            6.21,
            6.04,
            6.53,
            6.65,
            6.67
        ],
        "exchangeStudents": 5,
        "language": 0,
        "level": 0,
        "localStudents": 30,
        "name": "Estudios superiores de Matem\u00e1ticas",
        "subjectID": 0,
        "successRate": [
            49,
            44,
            44,
            44,
            40
        ],
        "universityID": 51
    },
    {
        "id": 394,
        "entryGrades": [
            6.02,
            5.84,
            5.81,
            5.79,
            5.77
        ],
        "exchangeStudents": 4,
        "language": 0,
        "level": 1,
        "localStudents": 31,
        "name": "Estudios superiores de Dise\u00f1o",
        "subjectID": 6,
        "successRate": [
            48,
            52,
            53,
            52,
            57
        ],
        "universityID": 51
    },
    {
        "id": 395,
        "entryGrades": [
            7.02,
            7.37,
            7.4,
            7.41,
            7.8
        ],
        "exchangeStudents": 5,
        "language": 0,
        "level": 2,
        "localStudents": 35,
        "name": "Estudios superiores de Derecho",
        "subjectID": 2,
        "successRate": [
            57,
            54,
            51,
            51,
            49
        ],
        "universityID": 51
    },
    {
        "id": 396,
        "entryGrades": [
            6.72,
            6.55,
            6.79,
            6.59,
            6.5
        ],
        "exchangeStudents": 5,
        "language": 0,
        "level": 0,
        "localStudents": 14,
        "name": "Dise\u00f1o y realidad virtual",
        "subjectID": 6,
        "successRate": [
            58,
            64,
            59,
            56,
            50
        ],
        "universityID": 51
    },
    {
        "id": 397,
        "entryGrades": [
            5.77,
            5.9,
            5.75,
            5.51,
            5.57
        ],
        "exchangeStudents": 6,
        "language": 1,
        "level": 0,
        "localStudents": 27,
        "name": "Engineering and History",
        "subjectID": 1,
        "successRate": [
            46,
            42,
            42,
            40,
            33
        ],
        "universityID": 51
    },
    {
        "id": 398,
        "entryGrades": [
            5.73,
            5.63,
            5.97,
            5.41,
            5.35
        ],
        "exchangeStudents": 6,
        "language": 1,
        "level": 2,
        "localStudents": 22,
        "name": "Sociology in Society",
        "subjectID": 4,
        "successRate": [
            58,
            61,
            62,
            63,
            64
        ],
        "universityID": 52
    },
    {
        "id": 399,
        "entryGrades": [
            6.28,
            6.31,
            6.37,
            6.7,
            7.01
        ],
        "exchangeStudents": 5,
        "language": 0,
        "level": 1,
        "localStudents": 30,
        "name": "Estudios superiores de Derecho",
        "subjectID": 2,
        "successRate": [
            40,
            40,
            40,
            46,
            45
        ],
        "universityID": 52
    },
    {
        "id": 400,
        "entryGrades": [
            7.39,
            7.42,
            7.48,
            7.56,
            7.72
        ],
        "exchangeStudents": 6,
        "language": 0,
        "level": 0,
        "localStudents": 30,
        "name": "Derecho aplicadas",
        "subjectID": 2,
        "successRate": [
            33,
            34,
            39,
            40,
            41
        ],
        "universityID": 52
    },
    {
        "id": 401,
        "entryGrades": [
            8.2,
            8.12,
            8.03,
            7.89,
            7.82
        ],
        "exchangeStudents": 4,
        "language": 1,
        "level": 2,
        "localStudents": 33,
        "name": "Applied Mathematics",
        "subjectID": 0,
        "successRate": [
            67,
            61,
            74,
            65,
            68
        ],
        "universityID": 52
    },
    {
        "id": 402,
        "entryGrades": [
            7.85,
            7.87,
            7.88,
            7.92,
            8.27
        ],
        "exchangeStudents": 4,
        "language": 1,
        "level": 0,
        "localStudents": 30,
        "name": "Applied Engineering",
        "subjectID": 1,
        "successRate": [
            59,
            58,
            66,
            55,
            54
        ],
        "universityID": 52
    },
    {
        "id": 403,
        "entryGrades": [
            6.65,
            6.64,
            6.35,
            6.26,
            6.09
        ],
        "exchangeStudents": 5,
        "language": 0,
        "level": 0,
        "localStudents": 24,
        "name": "Ingenier\u00eda aplicadas",
        "subjectID": 1,
        "successRate": [
            52,
            52,
            45,
            50,
            53
        ],
        "universityID": 52
    },
    {
        "id": 404,
        "entryGrades": [
            6.33,
            6.44,
            6.53,
            6.95,
            6.99
        ],
        "exchangeStudents": 5,
        "language": 0,
        "level": 2,
        "localStudents": 16,
        "name": "Estudios superiores de undefined",
        "subjectID": 2,
        "successRate": [
            49,
            50,
            54,
            61,
            61
        ],
        "universityID": 52
    },
    {
        "id": 405,
        "entryGrades": [
            8.01,
            7.9,
            7.86,
            7.72,
            7.48
        ],
        "exchangeStudents": 6,
        "language": 1,
        "level": 2,
        "localStudents": 14,
        "name": "Law in Society",
        "subjectID": 2,
        "successRate": [
            61,
            56,
            60,
            64,
            57
        ],
        "universityID": 52
    },
    {
        "id": 406,
        "entryGrades": [
            7.68,
            7.57,
            7.56,
            7.54,
            7.45
        ],
        "exchangeStudents": 6,
        "language": 0,
        "level": 0,
        "localStudents": 32,
        "name": "Estudios superiores de Sociolog\u00eda",
        "subjectID": 4,
        "successRate": [
            41,
            42,
            40,
            40,
            40
        ],
        "universityID": 52
    },
    {
        "id": 407,
        "entryGrades": [
            5.57,
            5.88,
            5.92,
            5.97,
            6.05
        ],
        "exchangeStudents": 5,
        "language": 1,
        "level": 0,
        "localStudents": 32,
        "name": "Sociology in the 21:st Century",
        "subjectID": 4,
        "successRate": [
            34,
            37,
            38,
            40,
            43
        ],
        "universityID": 53
    },
    {
        "id": 408,
        "entryGrades": [
            7.16,
            7.18,
            7.26,
            7.38,
            7.71
        ],
        "exchangeStudents": 4,
        "language": 0,
        "level": 0,
        "localStudents": 13,
        "name": "Filosof\u00eda e historia",
        "subjectID": 5,
        "successRate": [
            53,
            52,
            49,
            47,
            45
        ],
        "universityID": 53
    },
    {
        "id": 409,
        "entryGrades": [
            8.17,
            8.03,
            7.85,
            7.84,
            7.62
        ],
        "exchangeStudents": 6,
        "language": 0,
        "level": 2,
        "localStudents": 34,
        "name": "Medicina aplicadas",
        "subjectID": 3,
        "successRate": [
            59,
            63,
            66,
            66,
            67
        ],
        "universityID": 53
    },
    {
        "id": 410,
        "entryGrades": [
            7.33,
            7.05,
            6.96,
            6.57,
            6.56
        ],
        "exchangeStudents": 4,
        "language": 1,
        "level": 2,
        "localStudents": 20,
        "name": "Applied Sociology",
        "subjectID": 4,
        "successRate": [
            34,
            36,
            40,
            41,
            46
        ],
        "universityID": 53
    },
    {
        "id": 411,
        "entryGrades": [
            7.2,
            7.23,
            7.31,
            7.48,
            7.58
        ],
        "exchangeStudents": 4,
        "language": 0,
        "level": 1,
        "localStudents": 15,
        "name": "Estudios superiores de Ingenier\u00eda",
        "subjectID": 1,
        "successRate": [
            44,
            49,
            44,
            41,
            50
        ],
        "universityID": 53
    },
    {
        "id": 412,
        "entryGrades": [
            5.89,
            6.11,
            6.13,
            5.88,
            5.77
        ],
        "exchangeStudents": 6,
        "language": 0,
        "level": 2,
        "localStudents": 17,
        "name": "Estudios superiores de Dise\u00f1o",
        "subjectID": 6,
        "successRate": [
            58,
            57,
            57,
            53,
            50
        ],
        "universityID": 53
    },
    {
        "id": 413,
        "entryGrades": [
            7.54,
            7.42,
            7.85,
            7.6,
            7.81
        ],
        "exchangeStudents": 5,
        "language": 1,
        "level": 2,
        "localStudents": 30,
        "name": "Medicine and History",
        "subjectID": 3,
        "successRate": [
            46,
            47,
            53,
            55,
            55
        ],
        "universityID": 53
    },
    {
        "id": 414,
        "entryGrades": [
            6.97,
            6.91,
            6.82,
            6.71,
            6.46
        ],
        "exchangeStudents": 4,
        "language": 1,
        "level": 1,
        "localStudents": 20,
        "name": "Advanced Studies in Philosophy",
        "subjectID": 5,
        "successRate": [
            42,
            40,
            47,
            35,
            35
        ],
        "universityID": 53
    },
    {
        "id": 415,
        "entryGrades": [
            5.47,
            5.51,
            5.73,
            5.75,
            6.07
        ],
        "exchangeStudents": 4,
        "language": 0,
        "level": 2,
        "localStudents": 19,
        "name": "Estudios superiores de Matem\u00e1ticas",
        "subjectID": 0,
        "successRate": [
            55,
            57,
            58,
            63,
            65
        ],
        "universityID": 53
    },
    {
        "id": 416,
        "entryGrades": [
            8.25,
            8.43,
            8.11,
            8.34,
            8.16
        ],
        "exchangeStudents": 4,
        "language": 0,
        "level": 2,
        "localStudents": 22,
        "name": "Dise\u00f1o en el siglo XXI",
        "subjectID": 6,
        "successRate": [
            59,
            61,
            58,
            66,
            63
        ],
        "universityID": 54
    },
    {
        "id": 417,
        "entryGrades": [
            6.72,
            6.69,
            6.64,
            6.6,
            6.46
        ],
        "exchangeStudents": 6,
        "language": 0,
        "level": 1,
        "localStudents": 35,
        "name": "Filosof\u00eda y realidad virtual",
        "subjectID": 5,
        "successRate": [
            40,
            44,
            46,
            36,
            44
        ],
        "universityID": 54
    },
    {
        "id": 418,
        "entryGrades": [
            8.11,
            8.08,
            7.72,
            7.53,
            7.24
        ],
        "exchangeStudents": 4,
        "language": 0,
        "level": 1,
        "localStudents": 12,
        "name": "Dise\u00f1o y sostenibilidad",
        "subjectID": 6,
        "successRate": [
            53,
            47,
            49,
            55,
            57
        ],
        "universityID": 54
    },
    {
        "id": 419,
        "entryGrades": [
            6.37,
            6.12,
            6.22,
            6.19,
            6.56
        ],
        "exchangeStudents": 5,
        "language": 0,
        "level": 2,
        "localStudents": 25,
        "name": "Estudios superiores de Derecho",
        "subjectID": 2,
        "successRate": [
            44,
            39,
            49,
            50,
            38
        ],
        "universityID": 54
    },
    {
        "id": 420,
        "entryGrades": [
            7.86,
            7.87,
            8,
            8.02,
            8.1
        ],
        "exchangeStudents": 4,
        "language": 1,
        "level": 2,
        "localStudents": 22,
        "name": "Design and Virtual Reality",
        "subjectID": 6,
        "successRate": [
            41,
            44,
            43,
            35,
            41
        ],
        "universityID": 54
    },
    {
        "id": 421,
        "entryGrades": [
            6.23,
            6.19,
            6.17,
            6.11,
            6.02
        ],
        "exchangeStudents": 4,
        "language": 0,
        "level": 2,
        "localStudents": 23,
        "name": "Ingenier\u00eda y sostenibilidad",
        "subjectID": 1,
        "successRate": [
            41,
            41,
            42,
            39,
            35
        ],
        "universityID": 54
    },
    {
        "id": 422,
        "entryGrades": [
            6.14,
            6.06,
            5.98,
            5.97,
            5.77
        ],
        "exchangeStudents": 6,
        "language": 1,
        "level": 0,
        "localStudents": 24,
        "name": "Medicine and Sustainability",
        "subjectID": 3,
        "successRate": [
            59,
            60,
            61,
            66,
            67
        ],
        "universityID": 54
    },
    {
        "id": 423,
        "entryGrades": [
            5.93,
            5.75,
            5.61,
            5.54,
            5.18
        ],
        "exchangeStudents": 4,
        "language": 1,
        "level": 0,
        "localStudents": 13,
        "name": "Mathematics in Society",
        "subjectID": 0,
        "successRate": [
            66,
            68,
            73,
            73,
            74
        ],
        "universityID": 54
    },
    {
        "id": 424,
        "entryGrades": [
            6.7,
            6.88,
            6.95,
            6.48,
            6.45
        ],
        "exchangeStudents": 6,
        "language": 0,
        "level": 2,
        "localStudents": 35,
        "name": "Derecho y sostenibilidad",
        "subjectID": 2,
        "successRate": [
            64,
            64,
            64,
            61,
            60
        ],
        "universityID": 54
    },
    {
        "id": 425,
        "entryGrades": [
            7.12,
            6.84,
            7.04,
            7.2,
            7.25
        ],
        "exchangeStudents": 6,
        "language": 1,
        "level": 2,
        "localStudents": 25,
        "name": "Applied Mathematics",
        "subjectID": 0,
        "successRate": [
            47,
            49,
            51,
            54,
            55
        ],
        "universityID": 54
    },
    {
        "id": 426,
        "entryGrades": [
            6.83,
            6.92,
            7.19,
            7.3,
            7.48
        ],
        "exchangeStudents": 4,
        "language": 1,
        "level": 0,
        "localStudents": 34,
        "name": "Medicine and History",
        "subjectID": 3,
        "successRate": [
            71,
            67,
            62,
            59,
            57
        ],
        "universityID": 55
    },
    {
        "id": 427,
        "entryGrades": [
            6.5,
            6.49,
            6.7,
            6.62,
            6.65
        ],
        "exchangeStudents": 5,
        "language": 0,
        "level": 1,
        "localStudents": 17,
        "name": "Estudios superiores de Filosof\u00eda",
        "subjectID": 5,
        "successRate": [
            40,
            43,
            44,
            49,
            51
        ],
        "universityID": 55
    },
    {
        "id": 428,
        "entryGrades": [
            8.46,
            8.26,
            8.2,
            8.67,
            8.55
        ],
        "exchangeStudents": 4,
        "language": 1,
        "level": 1,
        "localStudents": 18,
        "name": "Human Medicine",
        "subjectID": 3,
        "successRate": [
            65,
            63,
            61,
            58,
            52
        ],
        "universityID": 55
    },
    {
        "id": 429,
        "entryGrades": [
            5.89,
            6.19,
            6.24,
            5.65,
            5.87
        ],
        "exchangeStudents": 6,
        "language": 0,
        "level": 2,
        "localStudents": 31,
        "name": "Estudios superiores de Medicina",
        "subjectID": 3,
        "successRate": [
            54,
            58,
            53,
            50,
            47
        ],
        "universityID": 55
    },
    {
        "id": 430,
        "entryGrades": [
            6.04,
            6.1,
            6.22,
            6.42,
            6.64
        ],
        "exchangeStudents": 5,
        "language": 0,
        "level": 0,
        "localStudents": 16,
        "name": "Derecho y sostenibilidad",
        "subjectID": 2,
        "successRate": [
            47,
            46,
            50,
            52,
            51
        ],
        "universityID": 55
    },
    {
        "id": 431,
        "entryGrades": [
            5.62,
            5.39,
            5.34,
            5.64,
            5.3
        ],
        "exchangeStudents": 4,
        "language": 1,
        "level": 0,
        "localStudents": 24,
        "name": "Design and History",
        "subjectID": 6,
        "successRate": [
            67,
            75,
            67,
            65,
            66
        ],
        "universityID": 55
    },
    {
        "id": 432,
        "entryGrades": [
            7.18,
            7.35,
            7.45,
            7.48,
            7.5
        ],
        "exchangeStudents": 4,
        "language": 1,
        "level": 1,
        "localStudents": 30,
        "name": "Applied Engineering",
        "subjectID": 1,
        "successRate": [
            59,
            59,
            56,
            52,
            52
        ],
        "universityID": 56
    },
    {
        "id": 433,
        "entryGrades": [
            6.82,
            6.82,
            6.72,
            7.01,
            6.67
        ],
        "exchangeStudents": 4,
        "language": 0,
        "level": 2,
        "localStudents": 32,
        "name": "Estudios superiores de Ingenier\u00eda",
        "subjectID": 1,
        "successRate": [
            51,
            46,
            45,
            43,
            40
        ],
        "universityID": 56
    },
    {
        "id": 434,
        "entryGrades": [
            8.14,
            8.12,
            8.12,
            8.08,
            8.07
        ],
        "exchangeStudents": 4,
        "language": 1,
        "level": 2,
        "localStudents": 21,
        "name": "Applied Philosophy",
        "subjectID": 5,
        "successRate": [
            42,
            37,
            46,
            46,
            42
        ],
        "universityID": 56
    },
    {
        "id": 435,
        "entryGrades": [
            6.62,
            6.65,
            6.79,
            6.85,
            6.98
        ],
        "exchangeStudents": 6,
        "language": 0,
        "level": 1,
        "localStudents": 28,
        "name": "Estudios superiores de Filosof\u00eda",
        "subjectID": 5,
        "successRate": [
            59,
            57,
            55,
            53,
            58
        ],
        "universityID": 56
    },
    {
        "id": 436,
        "entryGrades": [
            7.75,
            7.6,
            7.67,
            7.63,
            7.86
        ],
        "exchangeStudents": 4,
        "language": 1,
        "level": 0,
        "localStudents": 35,
        "name": "Human Mathematics",
        "subjectID": 0,
        "successRate": [
            52,
            51,
            49,
            43,
            42
        ],
        "universityID": 56
    },
    {
        "id": 437,
        "entryGrades": [
            6.36,
            6.24,
            6.15,
            6.04,
            5.9
        ],
        "exchangeStudents": 5,
        "language": 0,
        "level": 1,
        "localStudents": 30,
        "name": "Matem\u00e1ticas y sostenibilidad",
        "subjectID": 0,
        "successRate": [
            69,
            69,
            67,
            65,
            60
        ],
        "universityID": 57
    },
    {
        "id": 438,
        "entryGrades": [
            6.63,
            6.65,
            6.81,
            6.9,
            6.92
        ],
        "exchangeStudents": 4,
        "language": 0,
        "level": 2,
        "localStudents": 31,
        "name": "Medicina aplicadas",
        "subjectID": 3,
        "successRate": [
            39,
            40,
            42,
            43,
            46
        ],
        "universityID": 57
    },
    {
        "id": 439,
        "entryGrades": [
            7.23,
            7.23,
            7.35,
            7.42,
            7.45
        ],
        "exchangeStudents": 4,
        "language": 0,
        "level": 2,
        "localStudents": 12,
        "name": "Estudios superiores de Ingenier\u00eda",
        "subjectID": 1,
        "successRate": [
            50,
            56,
            51,
            51,
            53
        ],
        "universityID": 57
    },
    {
        "id": 440,
        "entryGrades": [
            5.34,
            5.44,
            5.61,
            5.63,
            5.96
        ],
        "exchangeStudents": 5,
        "language": 1,
        "level": 1,
        "localStudents": 25,
        "name": "Applied Design",
        "subjectID": 6,
        "successRate": [
            42,
            43,
            41,
            41,
            41
        ],
        "universityID": 57
    },
    {
        "id": 441,
        "entryGrades": [
            5.45,
            5.55,
            5.56,
            5.91,
            5.92
        ],
        "exchangeStudents": 4,
        "language": 1,
        "level": 2,
        "localStudents": 16,
        "name": "Law and Virtual Reality",
        "subjectID": 2,
        "successRate": [
            49,
            50,
            53,
            50,
            49
        ],
        "universityID": 57
    },
    {
        "id": 442,
        "entryGrades": [
            7.29,
            7.21,
            7.11,
            7.07,
            6.92
        ],
        "exchangeStudents": 4,
        "language": 1,
        "level": 2,
        "localStudents": 14,
        "name": "Design and History",
        "subjectID": 6,
        "successRate": [
            35,
            41,
            43,
            43,
            50
        ],
        "universityID": 57
    },
    {
        "id": 443,
        "entryGrades": [
            7.89,
            8.05,
            8.14,
            8.17,
            8.48
        ],
        "exchangeStudents": 5,
        "language": 1,
        "level": 0,
        "localStudents": 35,
        "name": "Medicine in the 21:st Century",
        "subjectID": 3,
        "successRate": [
            69,
            69,
            65,
            64,
            56
        ],
        "universityID": 57
    },
    {
        "id": 444,
        "entryGrades": [
            8.44,
            8.3,
            8.65,
            8.27,
            8.57
        ],
        "exchangeStudents": 4,
        "language": 1,
        "level": 1,
        "localStudents": 31,
        "name": "Applied Law",
        "subjectID": 2,
        "successRate": [
            37,
            37,
            40,
            43,
            45
        ],
        "universityID": 58
    },
    {
        "id": 445,
        "entryGrades": [
            5.91,
            5.83,
            5.8,
            5.78,
            5.61
        ],
        "exchangeStudents": 5,
        "language": 1,
        "level": 2,
        "localStudents": 32,
        "name": "Applied Sociology",
        "subjectID": 4,
        "successRate": [
            71,
            64,
            64,
            61,
            61
        ],
        "universityID": 58
    },
    {
        "id": 446,
        "entryGrades": [
            7.65,
            7.75,
            7.77,
            7.3,
            7.62
        ],
        "exchangeStudents": 6,
        "language": 1,
        "level": 0,
        "localStudents": 19,
        "name": "Medicine and Sustainability",
        "subjectID": 3,
        "successRate": [
            58,
            58,
            59,
            60,
            66
        ],
        "universityID": 58
    },
    {
        "id": 447,
        "entryGrades": [
            5.89,
            5.77,
            5.51,
            5.23,
            5.23
        ],
        "exchangeStudents": 6,
        "language": 0,
        "level": 0,
        "localStudents": 17,
        "name": "Dise\u00f1o y sociedad",
        "subjectID": 6,
        "successRate": [
            56,
            52,
            50,
            50,
            50
        ],
        "universityID": 58
    },
    {
        "id": 448,
        "entryGrades": [
            7.4,
            7.32,
            7.19,
            7.19,
            6.83
        ],
        "exchangeStudents": 4,
        "language": 0,
        "level": 0,
        "localStudents": 14,
        "name": "Matem\u00e1ticas e historia",
        "subjectID": 0,
        "successRate": [
            55,
            64,
            46,
            47,
            53
        ],
        "universityID": 58
    },
    {
        "id": 449,
        "entryGrades": [
            7.3,
            7.43,
            7.44,
            7.53,
            7.55
        ],
        "exchangeStudents": 5,
        "language": 0,
        "level": 0,
        "localStudents": 29,
        "name": "Estudios superiores de Dise\u00f1o",
        "subjectID": 6,
        "successRate": [
            54,
            54,
            55,
            56,
            59
        ],
        "universityID": 59
    },
    {
        "id": 450,
        "entryGrades": [
            5.79,
            5.99,
            5.59,
            5.76,
            5.97
        ],
        "exchangeStudents": 6,
        "language": 1,
        "level": 2,
        "localStudents": 12,
        "name": "Philosophy and Sustainability",
        "subjectID": 5,
        "successRate": [
            73,
            69,
            65,
            62,
            58
        ],
        "universityID": 59
    },
    {
        "id": 451,
        "entryGrades": [
            7.68,
            7.62,
            7.54,
            7.41,
            7.4
        ],
        "exchangeStudents": 6,
        "language": 0,
        "level": 1,
        "localStudents": 17,
        "name": "Medicina y sostenibilidad",
        "subjectID": 3,
        "successRate": [
            59,
            66,
            55,
            64,
            63
        ],
        "universityID": 59
    },
    {
        "id": 452,
        "entryGrades": [
            7.77,
            7.92,
            7.47,
            7.45,
            7.94
        ],
        "exchangeStudents": 4,
        "language": 0,
        "level": 0,
        "localStudents": 14,
        "name": "Estudios superiores de Sociolog\u00eda",
        "subjectID": 4,
        "successRate": [
            49,
            54,
            52,
            48,
            51
        ],
        "universityID": 59
    },
    {
        "id": 453,
        "entryGrades": [
            6.88,
            6.89,
            7,
            7.02,
            7.04
        ],
        "exchangeStudents": 4,
        "language": 1,
        "level": 0,
        "localStudents": 12,
        "name": "Advanced Studies in Mathematics",
        "subjectID": 0,
        "successRate": [
            65,
            63,
            62,
            62,
            59
        ],
        "universityID": 59
    },
    {
        "id": 454,
        "entryGrades": [
            6.32,
            6.38,
            6.49,
            6.56,
            6.58
        ],
        "exchangeStudents": 4,
        "language": 1,
        "level": 1,
        "localStudents": 23,
        "name": "Mathematics in the 21:st Century",
        "subjectID": 0,
        "successRate": [
            45,
            48,
            51,
            51,
            52
        ],
        "universityID": 59
    },
    {
        "id": 455,
        "entryGrades": [
            7.24,
            7.22,
            7.05,
            7.02,
            6.73
        ],
        "exchangeStudents": 5,
        "language": 0,
        "level": 2,
        "localStudents": 25,
        "name": "Medicina en el siglo XXI",
        "subjectID": 3,
        "successRate": [
            52,
            58,
            61,
            68,
            70
        ],
        "universityID": 59
    },
    {
        "id": 456,
        "entryGrades": [
            5.97,
            6.03,
            5.98,
            6.07,
            5.86
        ],
        "exchangeStudents": 6,
        "language": 1,
        "level": 2,
        "localStudents": 20,
        "name": "Law and History",
        "subjectID": 2,
        "successRate": [
            60,
            57,
            61,
            60,
            55
        ],
        "universityID": 59
    },
    {
        "id": 457,
        "entryGrades": [
            8.68,
            8.4,
            8.28,
            8.23,
            8.15
        ],
        "exchangeStudents": 5,
        "language": 1,
        "level": 2,
        "localStudents": 27,
        "name": "Medicine and Sustainability",
        "subjectID": 3,
        "successRate": [
            46,
            48,
            48,
            51,
            58
        ],
        "universityID": 60
    },
    {
        "id": 458,
        "entryGrades": [
            6.74,
            6.91,
            6.52,
            6.49,
            7.01
        ],
        "exchangeStudents": 4,
        "language": 1,
        "level": 2,
        "localStudents": 18,
        "name": "Law in Society",
        "subjectID": 2,
        "successRate": [
            44,
            36,
            47,
            51,
            39
        ],
        "universityID": 60
    },
    {
        "id": 459,
        "entryGrades": [
            7.25,
            7.22,
            7.14,
            6.97,
            6.94
        ],
        "exchangeStudents": 4,
        "language": 0,
        "level": 1,
        "localStudents": 31,
        "name": "Estudios superiores de Filosof\u00eda",
        "subjectID": 5,
        "successRate": [
            54,
            51,
            49,
            45,
            45
        ],
        "universityID": 60
    },
    {
        "id": 460,
        "entryGrades": [
            6.73,
            6.76,
            6.65,
            6.87,
            6.86
        ],
        "exchangeStudents": 4,
        "language": 1,
        "level": 0,
        "localStudents": 34,
        "name": "Human Law",
        "subjectID": 2,
        "successRate": [
            62,
            62,
            63,
            65,
            74
        ],
        "universityID": 60
    },
    {
        "id": 461,
        "entryGrades": [
            8.57,
            8.45,
            8.45,
            8.3,
            8.24
        ],
        "exchangeStudents": 4,
        "language": 1,
        "level": 0,
        "localStudents": 21,
        "name": "Engineering in the 21:st Century",
        "subjectID": 1,
        "successRate": [
            40,
            43,
            41,
            40,
            43
        ],
        "universityID": 60
    },
    {
        "id": 462,
        "entryGrades": [
            5.8,
            5.86,
            5.98,
            6,
            6.16
        ],
        "exchangeStudents": 5,
        "language": 0,
        "level": 0,
        "localStudents": 19,
        "name": "Estudios superiores de Matem\u00e1ticas",
        "subjectID": 0,
        "successRate": [
            67,
            73,
            63,
            60,
            66
        ],
        "universityID": 60
    },
    {
        "id": 463,
        "entryGrades": [
            6.04,
            5.99,
            5.81,
            5.73,
            5.7
        ],
        "exchangeStudents": 5,
        "language": 0,
        "level": 2,
        "localStudents": 27,
        "name": "Sociolog\u00eda y realidad virtual",
        "subjectID": 4,
        "successRate": [
            42,
            43,
            46,
            47,
            51
        ],
        "universityID": 60
    },
    {
        "id": 464,
        "entryGrades": [
            7.96,
            8.1,
            7.94,
            8.01,
            7.91
        ],
        "exchangeStudents": 5,
        "language": 0,
        "level": 1,
        "localStudents": 24,
        "name": "Matem\u00e1ticas aplicadas",
        "subjectID": 0,
        "successRate": [
            58,
            57,
            58,
            58,
            65
        ],
        "universityID": 60
    },
    {
        "id": 465,
        "entryGrades": [
            6.1,
            5.87,
            5.79,
            6.07,
            6.38
        ],
        "exchangeStudents": 5,
        "language": 0,
        "level": 2,
        "localStudents": 32,
        "name": "undefined en el siglo XXI",
        "subjectID": 0,
        "successRate": [
            49,
            46,
            44,
            43,
            43
        ],
        "universityID": 60
    },
    {
        "id": 466,
        "entryGrades": [
            8.47,
            8.61,
            8.49,
            8.45,
            8.41
        ],
        "exchangeStudents": 4,
        "language": 1,
        "level": 0,
        "localStudents": 27,
        "name": "Medicine in the 21:st Century",
        "subjectID": 3,
        "successRate": [
            57,
            57,
            58,
            61,
            62
        ],
        "universityID": 60
    },
    {
        "id": 467,
        "entryGrades": [
            7.14,
            6.89,
            6.83,
            6.6,
            6.58
        ],
        "exchangeStudents": 5,
        "language": 1,
        "level": 2,
        "localStudents": 13,
        "name": "Applied Law",
        "subjectID": 2,
        "successRate": [
            73,
            73,
            69,
            66,
            66
        ],
        "universityID": 61
    },
    {
        "id": 468,
        "entryGrades": [
            7.2,
            7.17,
            7.22,
            7.34,
            7.37
        ],
        "exchangeStudents": 5,
        "language": 1,
        "level": 1,
        "localStudents": 16,
        "name": "Medicine and Sustainability",
        "subjectID": 3,
        "successRate": [
            53,
            60,
            60,
            61,
            63
        ],
        "universityID": 61
    },
    {
        "id": 469,
        "entryGrades": [
            6.46,
            6.64,
            6.64,
            6.04,
            6.63
        ],
        "exchangeStudents": 5,
        "language": 0,
        "level": 2,
        "localStudents": 27,
        "name": "Estudios superiores de Dise\u00f1o",
        "subjectID": 6,
        "successRate": [
            49,
            42,
            54,
            56,
            40
        ],
        "universityID": 61
    },
    {
        "id": 470,
        "entryGrades": [
            6.75,
            7.09,
            6.53,
            6.69,
            6.42
        ],
        "exchangeStudents": 4,
        "language": 0,
        "level": 0,
        "localStudents": 18,
        "name": "Derecho y realidad virtual",
        "subjectID": 2,
        "successRate": [
            48,
            49,
            49,
            49,
            54
        ],
        "universityID": 61
    },
    {
        "id": 471,
        "entryGrades": [
            6.78,
            6.66,
            6.6,
            6.5,
            7.08
        ],
        "exchangeStudents": 6,
        "language": 1,
        "level": 1,
        "localStudents": 33,
        "name": "Advanced Studies in Medicine",
        "subjectID": 3,
        "successRate": [
            55,
            56,
            58,
            59,
            65
        ],
        "universityID": 61
    },
    {
        "id": 472,
        "entryGrades": [
            6.77,
            6.52,
            6.31,
            6.05,
            5.88
        ],
        "exchangeStudents": 6,
        "language": 0,
        "level": 0,
        "localStudents": 27,
        "name": "Matem\u00e1ticas aplicadas",
        "subjectID": 0,
        "successRate": [
            56,
            61,
            50,
            50,
            55
        ],
        "universityID": 61
    },
    {
        "id": 473,
        "entryGrades": [
            6.53,
            6.45,
            6.31,
            6.32,
            6.69
        ],
        "exchangeStudents": 5,
        "language": 1,
        "level": 0,
        "localStudents": 24,
        "name": "Medicine and Virtual Reality",
        "subjectID": 3,
        "successRate": [
            45,
            44,
            44,
            39,
            37
        ],
        "universityID": 61
    },
    {
        "id": 474,
        "entryGrades": [
            7.99,
            7.92,
            7.83,
            7.76,
            7.74
        ],
        "exchangeStudents": 5,
        "language": 0,
        "level": 1,
        "localStudents": 25,
        "name": "undefined e historia",
        "subjectID": 6,
        "successRate": [
            68,
            66,
            64,
            62,
            57
        ],
        "universityID": 61
    },
    {
        "id": 475,
        "entryGrades": [
            6.69,
            6.87,
            6.89,
            7.02,
            7.08
        ],
        "exchangeStudents": 5,
        "language": 0,
        "level": 1,
        "localStudents": 27,
        "name": "Estudios superiores de Medicina",
        "subjectID": 3,
        "successRate": [
            55,
            59,
            62,
            66,
            68
        ],
        "universityID": 61
    },
    {
        "id": 476,
        "entryGrades": [
            5.96,
            5.99,
            6.02,
            6.09,
            6.09
        ],
        "exchangeStudents": 6,
        "language": 0,
        "level": 2,
        "localStudents": 13,
        "name": "Medicina e historia",
        "subjectID": 3,
        "successRate": [
            45,
            47,
            48,
            48,
            50
        ],
        "universityID": 61
    },
    {
        "id": 477,
        "entryGrades": [
            7.2,
            6.99,
            6.81,
            6.65,
            6.37
        ],
        "exchangeStudents": 5,
        "language": 1,
        "level": 1,
        "localStudents": 14,
        "name": "Design in Society",
        "subjectID": 6,
        "successRate": [
            74,
            69,
            67,
            66,
            66
        ],
        "universityID": 61
    },
    {
        "id": 478,
        "entryGrades": [
            5.52,
            5.57,
            5.34,
            5.44,
            5.61
        ],
        "exchangeStudents": 4,
        "language": 1,
        "level": 0,
        "localStudents": 24,
        "name": "Advanced Studies in Design",
        "subjectID": 6,
        "successRate": [
            57,
            58,
            60,
            62,
            69
        ],
        "universityID": 61
    },
    {
        "id": 479,
        "entryGrades": [
            8.33,
            8.27,
            8.25,
            8.19,
            8.05
        ],
        "exchangeStudents": 5,
        "language": 1,
        "level": 2,
        "localStudents": 30,
        "name": "Engineering in Society",
        "subjectID": 1,
        "successRate": [
            40,
            40,
            48,
            43,
            36
        ],
        "universityID": 62
    },
    {
        "id": 480,
        "entryGrades": [
            6.75,
            6.9,
            6.98,
            7.01,
            7.1
        ],
        "exchangeStudents": 4,
        "language": 1,
        "level": 0,
        "localStudents": 26,
        "name": "Advanced Studies in Philosophy",
        "subjectID": 5,
        "successRate": [
            39,
            43,
            46,
            46,
            46
        ],
        "universityID": 62
    },
    {
        "id": 481,
        "entryGrades": [
            8.18,
            8.28,
            8.31,
            8.34,
            8.46
        ],
        "exchangeStudents": 4,
        "language": 1,
        "level": 1,
        "localStudents": 18,
        "name": "Engineering and Sustainability",
        "subjectID": 1,
        "successRate": [
            56,
            59,
            59,
            63,
            64
        ],
        "universityID": 62
    },
    {
        "id": 482,
        "entryGrades": [
            8.43,
            8.32,
            8.33,
            8.52,
            8.26
        ],
        "exchangeStudents": 5,
        "language": 1,
        "level": 1,
        "localStudents": 18,
        "name": "Human Law",
        "subjectID": 2,
        "successRate": [
            56,
            49,
            47,
            46,
            42
        ],
        "universityID": 62
    },
    {
        "id": 483,
        "entryGrades": [
            6.46,
            6.38,
            6.25,
            6.22,
            6
        ],
        "exchangeStudents": 4,
        "language": 1,
        "level": 1,
        "localStudents": 31,
        "name": "Human Philosophy",
        "subjectID": 5,
        "successRate": [
            43,
            44,
            43,
            40,
            42
        ],
        "universityID": 63
    },
    {
        "id": 484,
        "entryGrades": [
            6.01,
            6.41,
            6.43,
            6.49,
            6.77
        ],
        "exchangeStudents": 4,
        "language": 1,
        "level": 1,
        "localStudents": 19,
        "name": "Human Engineering",
        "subjectID": 1,
        "successRate": [
            44,
            44,
            44,
            40,
            43
        ],
        "universityID": 63
    },
    {
        "id": 485,
        "entryGrades": [
            6.67,
            6.54,
            6.53,
            6.4,
            6.13
        ],
        "exchangeStudents": 6,
        "language": 1,
        "level": 1,
        "localStudents": 14,
        "name": "Design in the 21:st Century",
        "subjectID": 6,
        "successRate": [
            53,
            55,
            59,
            60,
            63
        ],
        "universityID": 63
    },
    {
        "id": 486,
        "entryGrades": [
            6.69,
            6.66,
            6.62,
            6.49,
            6.41
        ],
        "exchangeStudents": 6,
        "language": 1,
        "level": 1,
        "localStudents": 19,
        "name": "Sociology in Society",
        "subjectID": 4,
        "successRate": [
            63,
            61,
            61,
            64,
            64
        ],
        "universityID": 63
    },
    {
        "id": 487,
        "entryGrades": [
            7.55,
            7.44,
            7.43,
            7.42,
            7.19
        ],
        "exchangeStudents": 4,
        "language": 1,
        "level": 2,
        "localStudents": 33,
        "name": "Mathematics and History",
        "subjectID": 0,
        "successRate": [
            47,
            51,
            51,
            45,
            54
        ],
        "universityID": 63
    },
    {
        "id": 488,
        "entryGrades": [
            7.4,
            7.49,
            7.57,
            7.75,
            7.78
        ],
        "exchangeStudents": 4,
        "language": 1,
        "level": 2,
        "localStudents": 12,
        "name": "Sociology and Virtual Reality",
        "subjectID": 4,
        "successRate": [
            51,
            50,
            50,
            49,
            44
        ],
        "universityID": 64
    },
    {
        "id": 489,
        "entryGrades": [
            6.42,
            6.53,
            6.38,
            6.21,
            6.51
        ],
        "exchangeStudents": 4,
        "language": 1,
        "level": 1,
        "localStudents": 14,
        "name": "Applied Engineering",
        "subjectID": 1,
        "successRate": [
            60,
            56,
            68,
            60,
            66
        ],
        "universityID": 64
    },
    {
        "id": 490,
        "entryGrades": [
            7.49,
            7.63,
            7.63,
            7.73,
            7.87
        ],
        "exchangeStudents": 5,
        "language": 1,
        "level": 1,
        "localStudents": 22,
        "name": "Advanced Studies in Sociology",
        "subjectID": 4,
        "successRate": [
            63,
            62,
            60,
            57,
            52
        ],
        "universityID": 64
    },
    {
        "id": 491,
        "entryGrades": [
            7.43,
            7.24,
            7.42,
            7.66,
            7.44
        ],
        "exchangeStudents": 5,
        "language": 1,
        "level": 2,
        "localStudents": 29,
        "name": "Design and Virtual Reality",
        "subjectID": 6,
        "successRate": [
            59,
            54,
            58,
            62,
            58
        ],
        "universityID": 64
    },
    {
        "id": 492,
        "entryGrades": [
            7.89,
            7.99,
            7.99,
            8.01,
            8.06
        ],
        "exchangeStudents": 6,
        "language": 1,
        "level": 0,
        "localStudents": 23,
        "name": "Engineering and History",
        "subjectID": 1,
        "successRate": [
            72,
            69,
            69,
            66,
            64
        ],
        "universityID": 65
    },
    {
        "id": 493,
        "entryGrades": [
            6.59,
            6.5,
            6.44,
            6.39,
            6.39
        ],
        "exchangeStudents": 5,
        "language": 1,
        "level": 0,
        "localStudents": 15,
        "name": "Human Philosophy",
        "subjectID": 5,
        "successRate": [
            54,
            52,
            48,
            47,
            40
        ],
        "universityID": 65
    },
    {
        "id": 494,
        "entryGrades": [
            6.79,
            6.55,
            6.51,
            6.36,
            6.16
        ],
        "exchangeStudents": 4,
        "language": 1,
        "level": 1,
        "localStudents": 17,
        "name": "Design and Sustainability",
        "subjectID": 6,
        "successRate": [
            59,
            59,
            56,
            51,
            50
        ],
        "universityID": 65
    },
    {
        "id": 495,
        "entryGrades": [
            7.72,
            7.71,
            7.55,
            8.04,
            7.52
        ],
        "exchangeStudents": 5,
        "language": 1,
        "level": 0,
        "localStudents": 25,
        "name": "Applied Mathematics",
        "subjectID": 0,
        "successRate": [
            65,
            64,
            64,
            63,
            61
        ],
        "universityID": 65
    }
];
const FIELDS = [
    {
        "id": 0,
        "name": "Matematik"
    },
    {
        "id": 1,
        "name": "Teknik"
    },
    {
        "id": 2,
        "name": "Juridik"
    },
    {
        "id": 3,
        "name": "Medicin"
    },
    {
        "id": 4,
        "name": "Sociologi"
    },
    {
        "id": 5,
        "name": "Filosofi"
    },
    {
        "id": 6,
        "name": "Design"
    }
];
const LANGUAGES = [
    {
        "id": 0,
        "name": "Spanish",
        "flag": "spain.png"
    },
    {
        "id": 1,
        "name": "English",
        "flag": "uk.png"
    },
    {
        "id": 2,
        "name": "French",
        "flag": "france.png"
    },
    {
        "id": 3,
        "name": "Swedish",
        "flag": "sweden.png"
    }
];
const LEVELS = [
    "Bachelor",
    "Master",
    "Doctorate"
];
const CLUBS = [
    {
        "id": 0,
        "universityID": 0,
        "memberCount": 10
    },
    {
        "id": 1,
        "name": "Bicicleta amateur",
        "universityID": 0,
        "memberCount": 18
    },
    {
        "id": 2,
        "name": "Mus amateur",
        "universityID": 0,
        "memberCount": 9
    },
    {
        "id": 3,
        "name": "Asociaci\u00f3n de Senderismo",
        "universityID": 0,
        "memberCount": 28
    },
    {
        "id": 4,
        "name": "Fotograf\u00eda en acci\u00f3n",
        "universityID": 0,
        "memberCount": 25
    },
    {
        "id": 5,
        "name": "Vino amateur",
        "universityID": 0,
        "memberCount": 9
    },
    {
        "id": 6,
        "universityID": 1,
        "memberCount": 12
    },
    {
        "id": 7,
        "name": "Juegos de mesa en acci\u00f3n",
        "universityID": 1,
        "memberCount": 33
    },
    {
        "id": 8,
        "name": "Vuelo amateur",
        "universityID": 1,
        "memberCount": 13
    },
    {
        "id": 9,
        "name": "Sexo, Drogas y Rockanroll amateur",
        "universityID": 1,
        "memberCount": 15
    },
    {
        "id": 10,
        "universityID": 2,
        "memberCount": 22
    },
    {
        "id": 11,
        "name": "Sexo, Drogas y Rockanroll amateur",
        "universityID": 2,
        "memberCount": 9
    },
    {
        "id": 12,
        "name": "Uni\u00f3n de Vuelo",
        "universityID": 2,
        "memberCount": 11
    },
    {
        "id": 13,
        "name": "Balonmano amateur",
        "universityID": 2,
        "memberCount": 8
    },
    {
        "id": 14,
        "name": "Senderismo en acci\u00f3n",
        "universityID": 2,
        "memberCount": 31
    },
    {
        "id": 15,
        "universityID": 3,
        "memberCount": 33
    },
    {
        "id": 16,
        "name": "Sexo, Drogas y Rockanroll en acci\u00f3n",
        "universityID": 3,
        "memberCount": 25
    },
    {
        "id": 17,
        "name": "Teatro en acci\u00f3n",
        "universityID": 3,
        "memberCount": 32
    },
    {
        "id": 18,
        "name": "Balonmano amateur",
        "universityID": 3,
        "memberCount": 15
    },
    {
        "id": 19,
        "name": "Amigos de Pirag\u00fca",
        "universityID": 3,
        "memberCount": 14
    },
    {
        "id": 20,
        "universityID": 4,
        "memberCount": 19
    },
    {
        "id": 21,
        "name": "Asociaci\u00f3n de Teatro",
        "universityID": 4,
        "memberCount": 16
    },
    {
        "id": 22,
        "name": "Asociaci\u00f3n de Fotograf\u00eda",
        "universityID": 4,
        "memberCount": 23
    },
    {
        "id": 23,
        "name": "Uni\u00f3n de Balonmano",
        "universityID": 4,
        "memberCount": 20
    },
    {
        "id": 24,
        "name": "Ajedrez amateur",
        "universityID": 4,
        "memberCount": 26
    },
    {
        "id": 25,
        "universityID": 5,
        "memberCount": 26
    },
    {
        "id": 26,
        "name": "Vela amateur",
        "universityID": 5,
        "memberCount": 32
    },
    {
        "id": 27,
        "name": "Pirag\u00fca en acci\u00f3n",
        "universityID": 5,
        "memberCount": 24
    },
    {
        "id": 28,
        "name": "Amigos de Balonmano",
        "universityID": 5,
        "memberCount": 32
    },
    {
        "id": 29,
        "universityID": 6,
        "memberCount": 7
    },
    {
        "id": 30,
        "name": "Randon\u00e9e amateur",
        "universityID": 6,
        "memberCount": 26
    },
    {
        "id": 31,
        "name": "Club de Fotografie",
        "universityID": 6,
        "memberCount": 16
    },
    {
        "id": 32,
        "name": "\u00c9checs en action",
        "universityID": 6,
        "memberCount": 19
    },
    {
        "id": 33,
        "name": "Club de Bridge",
        "universityID": 6,
        "memberCount": 15
    },
    {
        "id": 34,
        "name": "Association de Ski",
        "universityID": 6,
        "memberCount": 22
    },
    {
        "id": 35,
        "universityID": 7,
        "memberCount": 18
    },
    {
        "id": 36,
        "name": "Union de Bon Manger",
        "universityID": 7,
        "memberCount": 31
    },
    {
        "id": 37,
        "name": "Union de Handball",
        "universityID": 7,
        "memberCount": 11
    },
    {
        "id": 38,
        "name": "Randon\u00e9e en action",
        "universityID": 7,
        "memberCount": 10
    },
    {
        "id": 39,
        "universityID": 8,
        "memberCount": 33
    },
    {
        "id": 40,
        "name": "Club de Fromage",
        "universityID": 8,
        "memberCount": 7
    },
    {
        "id": 41,
        "name": "Voile amateur",
        "universityID": 8,
        "memberCount": 25
    },
    {
        "id": 42,
        "name": "Union de Fromage",
        "universityID": 8,
        "memberCount": 30
    },
    {
        "id": 43,
        "name": "Rugby en action",
        "universityID": 8,
        "memberCount": 27
    },
    {
        "id": 44,
        "universityID": 9,
        "memberCount": 33
    },
    {
        "id": 45,
        "name": "Union de Rugby",
        "universityID": 9,
        "memberCount": 30
    },
    {
        "id": 46,
        "name": "Union de Beaux Arts",
        "universityID": 9,
        "memberCount": 24
    },
    {
        "id": 47,
        "name": "Po\u00e9sie amateur",
        "universityID": 9,
        "memberCount": 30
    },
    {
        "id": 48,
        "name": "Voile amateur",
        "universityID": 9,
        "memberCount": 8
    },
    {
        "id": 49,
        "name": "Voile en action",
        "universityID": 9,
        "memberCount": 9
    },
    {
        "id": 50,
        "universityID": 10,
        "memberCount": 21
    },
    {
        "id": 51,
        "name": "Union de Fotografie",
        "universityID": 10,
        "memberCount": 27
    },
    {
        "id": 52,
        "name": "Bon Manger en action",
        "universityID": 10,
        "memberCount": 24
    },
    {
        "id": 53,
        "name": "Club de Beaux Arts",
        "universityID": 10,
        "memberCount": 8
    },
    {
        "id": 54,
        "name": "Fromage en action",
        "universityID": 10,
        "memberCount": 7
    },
    {
        "id": 55,
        "universityID": 11,
        "memberCount": 26
    },
    {
        "id": 56,
        "name": "Randon\u00e9e amateur",
        "universityID": 11,
        "memberCount": 23
    },
    {
        "id": 57,
        "name": "Union de \u00c9checs",
        "universityID": 11,
        "memberCount": 29
    },
    {
        "id": 58,
        "name": "Club de \u00c9checs",
        "universityID": 11,
        "memberCount": 10
    },
    {
        "id": 59,
        "universityID": 12,
        "memberCount": 13
    },
    {
        "id": 60,
        "name": "Association de Voile",
        "universityID": 12,
        "memberCount": 25
    },
    {
        "id": 61,
        "name": "Club de Ski",
        "universityID": 12,
        "memberCount": 9
    },
    {
        "id": 62,
        "name": "Voile en action",
        "universityID": 12,
        "memberCount": 26
    },
    {
        "id": 63,
        "universityID": 13,
        "memberCount": 32
    },
    {
        "id": 64,
        "name": "Fotografie en action",
        "universityID": 13,
        "memberCount": 14
    },
    {
        "id": 65,
        "name": "Bridge en action",
        "universityID": 13,
        "memberCount": 15
    },
    {
        "id": 66,
        "name": "\u00c9checs amateur",
        "universityID": 13,
        "memberCount": 30
    },
    {
        "id": 67,
        "name": "Club de Fromage",
        "universityID": 13,
        "memberCount": 28
    },
    {
        "id": 68,
        "name": "Randon\u00e9e en action",
        "universityID": 13,
        "memberCount": 7
    },
    {
        "id": 69,
        "universityID": 14,
        "memberCount": 23
    },
    {
        "id": 70,
        "name": "Bon Manger en action",
        "universityID": 14,
        "memberCount": 27
    },
    {
        "id": 71,
        "name": "Po\u00e9sie en action",
        "universityID": 14,
        "memberCount": 32
    },
    {
        "id": 72,
        "name": "Fromage en action",
        "universityID": 14,
        "memberCount": 29
    },
    {
        "id": 73,
        "name": "Rugby en action",
        "universityID": 14,
        "memberCount": 11
    },
    {
        "id": 74,
        "universityID": 15,
        "memberCount": 10
    },
    {
        "id": 75,
        "name": "Union de Rugby",
        "universityID": 15,
        "memberCount": 10
    },
    {
        "id": 76,
        "name": "Ski en action",
        "universityID": 15,
        "memberCount": 25
    },
    {
        "id": 77,
        "name": "Bridge en action",
        "universityID": 15,
        "memberCount": 33
    },
    {
        "id": 78,
        "name": "Club de Fotografie",
        "universityID": 15,
        "memberCount": 33
    },
    {
        "id": 79,
        "universityID": 16,
        "memberCount": 7
    },
    {
        "id": 80,
        "name": "Friends of Mounteneering",
        "universityID": 16,
        "memberCount": 11
    },
    {
        "id": 81,
        "name": "Friends of Beer",
        "universityID": 16,
        "memberCount": 20
    },
    {
        "id": 82,
        "name": "Friends of Chess",
        "universityID": 16,
        "memberCount": 11
    },
    {
        "id": 83,
        "name": "Boardgames Club",
        "universityID": 16,
        "memberCount": 20
    },
    {
        "id": 84,
        "name": "Mounteneering Club",
        "universityID": 16,
        "memberCount": 26
    },
    {
        "id": 85,
        "universityID": 17,
        "memberCount": 16
    },
    {
        "id": 86,
        "name": "Friends of Boardgames",
        "universityID": 17,
        "memberCount": 32
    },
    {
        "id": 87,
        "name": "Friends of Rugby",
        "universityID": 17,
        "memberCount": 33
    },
    {
        "id": 88,
        "name": "Friends of Football",
        "universityID": 17,
        "memberCount": 33
    },
    {
        "id": 89,
        "name": "Friends of Bridge",
        "universityID": 17,
        "memberCount": 31
    },
    {
        "id": 90,
        "name": "Friends of Table Tennis",
        "universityID": 17,
        "memberCount": 7
    },
    {
        "id": 91,
        "universityID": 18,
        "memberCount": 24
    },
    {
        "id": 92,
        "name": "Friends of Bridge",
        "universityID": 18,
        "memberCount": 25
    },
    {
        "id": 93,
        "name": "Cricket Amateurs",
        "universityID": 18,
        "memberCount": 22
    },
    {
        "id": 94,
        "name": "Mounteneering Club",
        "universityID": 18,
        "memberCount": 21
    },
    {
        "id": 95,
        "name": "Chess Association",
        "universityID": 18,
        "memberCount": 21
    },
    {
        "id": 96,
        "universityID": 19,
        "memberCount": 30
    },
    {
        "id": 97,
        "name": "Photography Amateurs",
        "universityID": 19,
        "memberCount": 13
    },
    {
        "id": 98,
        "name": "Gourmet Amateurs",
        "universityID": 19,
        "memberCount": 10
    },
    {
        "id": 99,
        "name": "Bridge Association",
        "universityID": 19,
        "memberCount": 10
    },
    {
        "id": 100,
        "name": "Friends of Mounteneering",
        "universityID": 19,
        "memberCount": 28
    },
    {
        "id": 101,
        "universityID": 20,
        "memberCount": 25
    },
    {
        "id": 102,
        "name": "Bridge Club",
        "universityID": 20,
        "memberCount": 9
    },
    {
        "id": 103,
        "name": "Friends of Gourmet",
        "universityID": 20,
        "memberCount": 24
    },
    {
        "id": 104,
        "name": "Friends of Bridge",
        "universityID": 20,
        "memberCount": 20
    },
    {
        "id": 105,
        "universityID": 21,
        "memberCount": 30
    },
    {
        "id": 106,
        "name": "Friends of Cricket",
        "universityID": 21,
        "memberCount": 24
    },
    {
        "id": 107,
        "name": "Photography Amateurs",
        "universityID": 21,
        "memberCount": 14
    },
    {
        "id": 108,
        "name": "Football Association",
        "universityID": 21,
        "memberCount": 26
    },
    {
        "id": 109,
        "universityID": 22,
        "memberCount": 23
    },
    {
        "id": 110,
        "name": "Photography Amateurs",
        "universityID": 22,
        "memberCount": 8
    },
    {
        "id": 111,
        "name": "Chess Association",
        "universityID": 22,
        "memberCount": 29
    },
    {
        "id": 112,
        "name": "Cricket Amateurs",
        "universityID": 22,
        "memberCount": 19
    },
    {
        "id": 113,
        "universityID": 23,
        "memberCount": 8
    },
    {
        "id": 114,
        "name": "Beer Amateurs",
        "universityID": 23,
        "memberCount": 29
    },
    {
        "id": 115,
        "name": "Friends of Table Tennis",
        "universityID": 23,
        "memberCount": 30
    },
    {
        "id": 116,
        "name": "Beer Club",
        "universityID": 23,
        "memberCount": 33
    },
    {
        "id": 117,
        "universityID": 24,
        "memberCount": 29
    },
    {
        "id": 118,
        "name": "Friends of Photography",
        "universityID": 24,
        "memberCount": 7
    },
    {
        "id": 119,
        "name": "Friends of Chess",
        "universityID": 24,
        "memberCount": 7
    },
    {
        "id": 120,
        "name": "Table Tennis Amateurs",
        "universityID": 24,
        "memberCount": 8
    },
    {
        "id": 121,
        "name": "Mounteneering Amateurs",
        "universityID": 24,
        "memberCount": 31
    },
    {
        "id": 122,
        "name": "Boardgames Amateurs",
        "universityID": 24,
        "memberCount": 23
    },
    {
        "id": 123,
        "universityID": 25,
        "memberCount": 20
    },
    {
        "id": 124,
        "name": "Mountainbike Association",
        "universityID": 25,
        "memberCount": 9
    },
    {
        "id": 125,
        "name": "Friends of Photography",
        "universityID": 25,
        "memberCount": 8
    },
    {
        "id": 126,
        "name": "Boardgames Club",
        "universityID": 25,
        "memberCount": 9
    },
    {
        "id": 127,
        "universityID": 26,
        "memberCount": 23
    },
    {
        "id": 128,
        "name": "Friends of Mountainbike",
        "universityID": 26,
        "memberCount": 21
    },
    {
        "id": 129,
        "name": "Rugby Amateurs",
        "universityID": 26,
        "memberCount": 12
    },
    {
        "id": 130,
        "name": "Friends of Photography",
        "universityID": 26,
        "memberCount": 26
    },
    {
        "id": 131,
        "name": "Chess Association",
        "universityID": 26,
        "memberCount": 18
    },
    {
        "id": 132,
        "name": "Chess Amateurs",
        "universityID": 26,
        "memberCount": 22
    },
    {
        "id": 133,
        "universityID": 27,
        "memberCount": 32
    },
    {
        "id": 134,
        "name": "Chess Amateurs",
        "universityID": 27,
        "memberCount": 18
    },
    {
        "id": 135,
        "name": "Friends of Beer",
        "universityID": 27,
        "memberCount": 19
    },
    {
        "id": 136,
        "name": "Friends of Boardgames",
        "universityID": 27,
        "memberCount": 15
    },
    {
        "id": 137,
        "name": "Mounteneering Amateurs",
        "universityID": 27,
        "memberCount": 13
    },
    {
        "id": 138,
        "universityID": 28,
        "memberCount": 31
    },
    {
        "id": 139,
        "name": "Gourmet Association",
        "universityID": 28,
        "memberCount": 25
    },
    {
        "id": 140,
        "name": "Friends of Photography",
        "universityID": 28,
        "memberCount": 23
    },
    {
        "id": 141,
        "name": "Bridge Club",
        "universityID": 28,
        "memberCount": 19
    },
    {
        "id": 142,
        "name": "Friends of Boardgames",
        "universityID": 28,
        "memberCount": 7
    },
    {
        "id": 143,
        "universityID": 29,
        "memberCount": 26
    },
    {
        "id": 144,
        "name": "Bridge Association",
        "universityID": 29,
        "memberCount": 26
    },
    {
        "id": 145,
        "name": "Friends of Table Tennis",
        "universityID": 29,
        "memberCount": 19
    },
    {
        "id": 146,
        "name": "Friends of Gourmet",
        "universityID": 29,
        "memberCount": 14
    },
    {
        "id": 147,
        "universityID": 30,
        "memberCount": 17
    },
    {
        "id": 148,
        "name": "Gourmet Club",
        "universityID": 30,
        "memberCount": 13
    },
    {
        "id": 149,
        "name": "Friends of Mounteneering",
        "universityID": 30,
        "memberCount": 11
    },
    {
        "id": 150,
        "name": "Mountainbike Association",
        "universityID": 30,
        "memberCount": 22
    },
    {
        "id": 151,
        "name": "Friends of Mountainbike",
        "universityID": 30,
        "memberCount": 8
    },
    {
        "id": 152,
        "universityID": 31,
        "memberCount": 21
    },
    {
        "id": 153,
        "name": "Mountainbike Association",
        "universityID": 31,
        "memberCount": 12
    },
    {
        "id": 154,
        "name": "Chess Amateurs",
        "universityID": 31,
        "memberCount": 10
    },
    {
        "id": 155,
        "name": "Friends of Mounteneering",
        "universityID": 31,
        "memberCount": 17
    },
    {
        "id": 156,
        "name": "Football Club",
        "universityID": 31,
        "memberCount": 25
    },
    {
        "id": 157,
        "name": "Friends of Bridge",
        "universityID": 31,
        "memberCount": 16
    },
    {
        "id": 158,
        "universityID": 32,
        "memberCount": 9
    },
    {
        "id": 159,
        "name": "Football Club",
        "universityID": 32,
        "memberCount": 28
    },
    {
        "id": 160,
        "name": "Friends of Mountainbike",
        "universityID": 32,
        "memberCount": 14
    },
    {
        "id": 161,
        "name": "Gourmet Club",
        "universityID": 32,
        "memberCount": 27
    },
    {
        "id": 162,
        "universityID": 33,
        "memberCount": 22
    },
    {
        "id": 163,
        "name": "Friends of Mountainbike",
        "universityID": 33,
        "memberCount": 27
    },
    {
        "id": 164,
        "name": "Friends of Gourmet",
        "universityID": 33,
        "memberCount": 33
    },
    {
        "id": 165,
        "name": "Gourmet Amateurs",
        "universityID": 33,
        "memberCount": 21
    },
    {
        "id": 166,
        "name": "Football Association",
        "universityID": 33,
        "memberCount": 20
    },
    {
        "id": 167,
        "name": "Photography Club",
        "universityID": 33,
        "memberCount": 30
    },
    {
        "id": 168,
        "universityID": 34,
        "memberCount": 8
    },
    {
        "id": 169,
        "name": "Gourmet Club",
        "universityID": 34,
        "memberCount": 21
    },
    {
        "id": 170,
        "name": "Football Association",
        "universityID": 34,
        "memberCount": 21
    },
    {
        "id": 171,
        "name": "Gourmet Association",
        "universityID": 34,
        "memberCount": 10
    },
    {
        "id": 172,
        "name": "Friends of Bridge",
        "universityID": 34,
        "memberCount": 14
    },
    {
        "id": 173,
        "universityID": 35,
        "memberCount": 20
    },
    {
        "id": 174,
        "name": "Friends of Table Tennis",
        "universityID": 35,
        "memberCount": 9
    },
    {
        "id": 175,
        "name": "Friends of Mountainbike",
        "universityID": 35,
        "memberCount": 13
    },
    {
        "id": 176,
        "name": "Friends of Gourmet",
        "universityID": 35,
        "memberCount": 8
    },
    {
        "id": 177,
        "name": "Gourmet Amateurs",
        "universityID": 35,
        "memberCount": 31
    },
    {
        "id": 178,
        "universityID": 36,
        "memberCount": 23
    },
    {
        "id": 179,
        "name": "Gemenskapet f\u00f6r Hockey",
        "universityID": 36,
        "memberCount": 25
    },
    {
        "id": 180,
        "name": "Gemenskapet f\u00f6r Fotografi",
        "universityID": 36,
        "memberCount": 8
    },
    {
        "id": 181,
        "name": "\u00d6l och matklubben",
        "universityID": 36,
        "memberCount": 14
    },
    {
        "id": 182,
        "name": "Studentklubben Tennis",
        "universityID": 36,
        "memberCount": 24
    },
    {
        "id": 183,
        "name": "Schackf\u00f6rening",
        "universityID": 36,
        "memberCount": 13
    },
    {
        "id": 184,
        "universityID": 37,
        "memberCount": 23
    },
    {
        "id": 185,
        "name": "Studentklubben Rugby",
        "universityID": 37,
        "memberCount": 15
    },
    {
        "id": 186,
        "name": "Studentklubben Spel",
        "universityID": 37,
        "memberCount": 10
    },
    {
        "id": 187,
        "name": "Innebandyf\u00f6rening",
        "universityID": 37,
        "memberCount": 10
    },
    {
        "id": 188,
        "name": "Spelf\u00f6rening",
        "universityID": 37,
        "memberCount": 14
    },
    {
        "id": 189,
        "name": "Orienteringklubben",
        "universityID": 37,
        "memberCount": 12
    },
    {
        "id": 190,
        "universityID": 38,
        "memberCount": 26
    },
    {
        "id": 191,
        "name": "Studentklubben \u00d6l och mat",
        "universityID": 38,
        "memberCount": 24
    },
    {
        "id": 192,
        "name": "Gemenskapet f\u00f6r \u00d6l och mat",
        "universityID": 38,
        "memberCount": 18
    },
    {
        "id": 193,
        "name": "Gemenskapet f\u00f6r Rugby",
        "universityID": 38,
        "memberCount": 27
    },
    {
        "id": 194,
        "universityID": 39,
        "memberCount": 18
    },
    {
        "id": 195,
        "name": "Gemenskapet f\u00f6r Rugby",
        "universityID": 39,
        "memberCount": 31
    },
    {
        "id": 196,
        "name": "Gemenskapet f\u00f6r Tennis",
        "universityID": 39,
        "memberCount": 13
    },
    {
        "id": 197,
        "name": "Bordtennisf\u00f6rening",
        "universityID": 39,
        "memberCount": 14
    },
    {
        "id": 198,
        "name": "Studentklubben Tennis",
        "universityID": 39,
        "memberCount": 19
    },
    {
        "id": 199,
        "universityID": 40,
        "memberCount": 22
    },
    {
        "id": 200,
        "name": "Gemenskapet f\u00f6r Tennis",
        "universityID": 40,
        "memberCount": 7
    },
    {
        "id": 201,
        "name": "Studentklubben Rugby",
        "universityID": 40,
        "memberCount": 27
    },
    {
        "id": 202,
        "name": "Tennisklubben",
        "universityID": 40,
        "memberCount": 16
    },
    {
        "id": 203,
        "universityID": 41,
        "memberCount": 17
    },
    {
        "id": 204,
        "name": "Studentklubben Hockey",
        "universityID": 41,
        "memberCount": 13
    },
    {
        "id": 205,
        "name": "Kl\u00e4ttringklubben",
        "universityID": 41,
        "memberCount": 33
    },
    {
        "id": 206,
        "name": "Studentklubben Kl\u00e4ttring",
        "universityID": 41,
        "memberCount": 21
    },
    {
        "id": 207,
        "name": "Studentklubben Spel",
        "universityID": 41,
        "memberCount": 13
    },
    {
        "id": 208,
        "universityID": 42,
        "memberCount": 32
    },
    {
        "id": 209,
        "name": "Teaterklubben",
        "universityID": 42,
        "memberCount": 22
    },
    {
        "id": 210,
        "name": "Fotografiklubben",
        "universityID": 42,
        "memberCount": 15
    },
    {
        "id": 211,
        "name": "Hockeyklubben",
        "universityID": 42,
        "memberCount": 10
    },
    {
        "id": 212,
        "name": "Studentklubben eSports",
        "universityID": 42,
        "memberCount": 25
    },
    {
        "id": 213,
        "name": "Gemenskapet f\u00f6r \u00d6l och mat",
        "universityID": 42,
        "memberCount": 27
    },
    {
        "id": 214,
        "universityID": 43,
        "memberCount": 31
    },
    {
        "id": 215,
        "name": "Asociaci\u00f3n de Monta\u00f1ismo",
        "universityID": 43,
        "memberCount": 20
    },
    {
        "id": 216,
        "name": "Amigos de Pirag\u00fca",
        "universityID": 43,
        "memberCount": 24
    },
    {
        "id": 217,
        "name": "Club de Ajedrez",
        "universityID": 43,
        "memberCount": 17
    },
    {
        "id": 218,
        "universityID": 44,
        "memberCount": 15
    },
    {
        "id": 219,
        "name": "Fotograf\u00eda en acci\u00f3n",
        "universityID": 44,
        "memberCount": 12
    },
    {
        "id": 220,
        "name": "Vuelo amateur",
        "universityID": 44,
        "memberCount": 7
    },
    {
        "id": 221,
        "name": "Vino en acci\u00f3n",
        "universityID": 44,
        "memberCount": 29
    },
    {
        "id": 222,
        "universityID": 45,
        "memberCount": 7
    },
    {
        "id": 223,
        "name": "Uni\u00f3n de Pirag\u00fca",
        "universityID": 45,
        "memberCount": 13
    },
    {
        "id": 224,
        "name": "Vuelo amateur",
        "universityID": 45,
        "memberCount": 16
    },
    {
        "id": 225,
        "name": "Amigos de Mus",
        "universityID": 45,
        "memberCount": 15
    },
    {
        "id": 226,
        "name": "Amigos de Juegos de mesa",
        "universityID": 45,
        "memberCount": 9
    },
    {
        "id": 227,
        "name": "Ajedrez amateur",
        "universityID": 45,
        "memberCount": 29
    },
    {
        "id": 228,
        "universityID": 46,
        "memberCount": 22
    },
    {
        "id": 229,
        "name": "Club de Vino",
        "universityID": 46,
        "memberCount": 18
    },
    {
        "id": 230,
        "name": "Asociaci\u00f3n de Teatro",
        "universityID": 46,
        "memberCount": 31
    },
    {
        "id": 231,
        "name": "Club de Pirag\u00fca",
        "universityID": 46,
        "memberCount": 22
    },
    {
        "id": 232,
        "name": "Asociaci\u00f3n de Mus",
        "universityID": 46,
        "memberCount": 20
    },
    {
        "id": 233,
        "name": "Bicicleta en acci\u00f3n",
        "universityID": 46,
        "memberCount": 22
    },
    {
        "id": 234,
        "universityID": 47,
        "memberCount": 14
    },
    {
        "id": 235,
        "name": "Uni\u00f3n de Vino",
        "universityID": 47,
        "memberCount": 32
    },
    {
        "id": 236,
        "name": "Amigos de Vela",
        "universityID": 47,
        "memberCount": 12
    },
    {
        "id": 237,
        "name": "Uni\u00f3n de Pintura",
        "universityID": 47,
        "memberCount": 29
    },
    {
        "id": 238,
        "universityID": 48,
        "memberCount": 22
    },
    {
        "id": 239,
        "name": "Club de Pintura",
        "universityID": 48,
        "memberCount": 33
    },
    {
        "id": 240,
        "name": "Vela en acci\u00f3n",
        "universityID": 48,
        "memberCount": 30
    },
    {
        "id": 241,
        "name": "Club de Bicicleta",
        "universityID": 48,
        "memberCount": 17
    },
    {
        "id": 242,
        "name": "Amigos de Fotograf\u00eda",
        "universityID": 48,
        "memberCount": 28
    },
    {
        "id": 243,
        "name": "Sexo, Drogas y Rockanroll en acci\u00f3n",
        "universityID": 48,
        "memberCount": 10
    },
    {
        "id": 244,
        "universityID": 49,
        "memberCount": 14
    },
    {
        "id": 245,
        "name": "Amigos de Senderismo",
        "universityID": 49,
        "memberCount": 13
    },
    {
        "id": 246,
        "name": "Club de Fotograf\u00eda",
        "universityID": 49,
        "memberCount": 33
    },
    {
        "id": 247,
        "name": "Amigos de Vela",
        "universityID": 49,
        "memberCount": 19
    },
    {
        "id": 248,
        "name": "Vino amateur",
        "universityID": 49,
        "memberCount": 13
    },
    {
        "id": 249,
        "universityID": 50,
        "memberCount": 33
    },
    {
        "id": 250,
        "name": "Asociaci\u00f3n de Juegos de mesa",
        "universityID": 50,
        "memberCount": 32
    },
    {
        "id": 251,
        "name": "Amigos de Sexo, Drogas y Rockanroll",
        "universityID": 50,
        "memberCount": 23
    },
    {
        "id": 252,
        "name": "Monta\u00f1ismo amateur",
        "universityID": 50,
        "memberCount": 21
    },
    {
        "id": 253,
        "universityID": 51,
        "memberCount": 22
    },
    {
        "id": 254,
        "name": "Uni\u00f3n de Fotograf\u00eda",
        "universityID": 51,
        "memberCount": 13
    },
    {
        "id": 255,
        "name": "Club de Vino",
        "universityID": 51,
        "memberCount": 16
    },
    {
        "id": 256,
        "name": "Asociaci\u00f3n de Fotograf\u00eda",
        "universityID": 51,
        "memberCount": 19
    },
    {
        "id": 257,
        "universityID": 52,
        "memberCount": 21
    },
    {
        "id": 258,
        "name": "Amigos de Pintura",
        "universityID": 52,
        "memberCount": 12
    },
    {
        "id": 259,
        "name": "Asociaci\u00f3n de Senderismo",
        "universityID": 52,
        "memberCount": 17
    },
    {
        "id": 260,
        "name": "Vino amateur",
        "universityID": 52,
        "memberCount": 13
    },
    {
        "id": 261,
        "name": "Asociaci\u00f3n de Juegos de mesa",
        "universityID": 52,
        "memberCount": 17
    },
    {
        "id": 262,
        "name": "Asociaci\u00f3n de Vino",
        "universityID": 52,
        "memberCount": 21
    },
    {
        "id": 263,
        "universityID": 53,
        "memberCount": 20
    },
    {
        "id": 264,
        "name": "Bicicleta amateur",
        "universityID": 53,
        "memberCount": 21
    },
    {
        "id": 265,
        "name": "Club de Mus",
        "universityID": 53,
        "memberCount": 33
    },
    {
        "id": 266,
        "name": "Ajedrez en acci\u00f3n",
        "universityID": 53,
        "memberCount": 20
    },
    {
        "id": 267,
        "name": "Pirag\u00fca amateur",
        "universityID": 53,
        "memberCount": 17
    },
    {
        "id": 268,
        "universityID": 54,
        "memberCount": 9
    },
    {
        "id": 269,
        "name": "Juegos de mesa amateur",
        "universityID": 54,
        "memberCount": 19
    },
    {
        "id": 270,
        "name": "Balonmano en acci\u00f3n",
        "universityID": 54,
        "memberCount": 28
    },
    {
        "id": 271,
        "name": "Club de Mus",
        "universityID": 54,
        "memberCount": 32
    },
    {
        "id": 272,
        "name": "Pirag\u00fca amateur",
        "universityID": 54,
        "memberCount": 15
    },
    {
        "id": 273,
        "name": "Balonmano amateur",
        "universityID": 54,
        "memberCount": 26
    },
    {
        "id": 274,
        "universityID": 55,
        "memberCount": 13
    },
    {
        "id": 275,
        "name": "Pintura amateur",
        "universityID": 55,
        "memberCount": 14
    },
    {
        "id": 276,
        "name": "Uni\u00f3n de Juegos de mesa",
        "universityID": 55,
        "memberCount": 29
    },
    {
        "id": 277,
        "name": "Uni\u00f3n de Bicicleta",
        "universityID": 55,
        "memberCount": 22
    },
    {
        "id": 278,
        "name": "Amigos de Monta\u00f1ismo",
        "universityID": 55,
        "memberCount": 29
    },
    {
        "id": 279,
        "name": "Bicicleta en acci\u00f3n",
        "universityID": 55,
        "memberCount": 19
    },
    {
        "id": 280,
        "universityID": 56,
        "memberCount": 31
    },
    {
        "id": 281,
        "name": "Asociaci\u00f3n de Senderismo",
        "universityID": 56,
        "memberCount": 29
    },
    {
        "id": 282,
        "name": "Sexo, Drogas y Rockanroll amateur",
        "universityID": 56,
        "memberCount": 10
    },
    {
        "id": 283,
        "name": "Teatro amateur",
        "universityID": 56,
        "memberCount": 22
    },
    {
        "id": 284,
        "universityID": 57,
        "memberCount": 21
    },
    {
        "id": 285,
        "name": "Amigos de Rugby",
        "universityID": 57,
        "memberCount": 23
    },
    {
        "id": 286,
        "name": "Amigos de Teatro",
        "universityID": 57,
        "memberCount": 22
    },
    {
        "id": 287,
        "name": "Vino en acci\u00f3n",
        "universityID": 57,
        "memberCount": 13
    },
    {
        "id": 288,
        "universityID": 58,
        "memberCount": 25
    },
    {
        "id": 289,
        "name": "Club de Balonmano",
        "universityID": 58,
        "memberCount": 33
    },
    {
        "id": 290,
        "name": "Amigos de Monta\u00f1ismo",
        "universityID": 58,
        "memberCount": 12
    },
    {
        "id": 291,
        "name": "Uni\u00f3n de Monta\u00f1ismo",
        "universityID": 58,
        "memberCount": 14
    },
    {
        "id": 292,
        "name": "Balonmano en acci\u00f3n",
        "universityID": 58,
        "memberCount": 32
    },
    {
        "id": 293,
        "universityID": 59,
        "memberCount": 26
    },
    {
        "id": 294,
        "name": "Vuelo amateur",
        "universityID": 59,
        "memberCount": 15
    },
    {
        "id": 295,
        "name": "Uni\u00f3n de Pirag\u00fca",
        "universityID": 59,
        "memberCount": 30
    },
    {
        "id": 296,
        "name": "Amigos de Teatro",
        "universityID": 59,
        "memberCount": 18
    },
    {
        "id": 297,
        "universityID": 60,
        "memberCount": 16
    },
    {
        "id": 298,
        "name": "Amigos de Juegos de mesa",
        "universityID": 60,
        "memberCount": 28
    },
    {
        "id": 299,
        "name": "Club de Fotograf\u00eda",
        "universityID": 60,
        "memberCount": 26
    },
    {
        "id": 300,
        "name": "Uni\u00f3n de Juegos de mesa",
        "universityID": 60,
        "memberCount": 18
    },
    {
        "id": 301,
        "name": "Balonmano en acci\u00f3n",
        "universityID": 60,
        "memberCount": 8
    },
    {
        "id": 302,
        "universityID": 61,
        "memberCount": 24
    },
    {
        "id": 303,
        "name": "Uni\u00f3n de Mus",
        "universityID": 61,
        "memberCount": 12
    },
    {
        "id": 304,
        "name": "Juegos de mesa amateur",
        "universityID": 61,
        "memberCount": 11
    },
    {
        "id": 305,
        "name": "Club de Rugby",
        "universityID": 61,
        "memberCount": 27
    },
    {
        "id": 306,
        "name": "Pirag\u00fca amateur",
        "universityID": 61,
        "memberCount": 12
    },
    {
        "id": 307,
        "universityID": 62,
        "memberCount": 29
    },
    {
        "id": 308,
        "name": "Friends of Boardgames",
        "universityID": 62,
        "memberCount": 16
    },
    {
        "id": 309,
        "name": "Friends of Chess",
        "universityID": 62,
        "memberCount": 28
    },
    {
        "id": 310,
        "name": "Chess Club",
        "universityID": 62,
        "memberCount": 20
    },
    {
        "id": 311,
        "name": "Beer Club",
        "universityID": 62,
        "memberCount": 28
    },
    {
        "id": 312,
        "name": "Friends of Cricket",
        "universityID": 62,
        "memberCount": 9
    },
    {
        "id": 313,
        "universityID": 63,
        "memberCount": 11
    },
    {
        "id": 314,
        "name": "Mounteneering Club",
        "universityID": 63,
        "memberCount": 26
    },
    {
        "id": 315,
        "name": "Table Tennis Amateurs",
        "universityID": 63,
        "memberCount": 21
    },
    {
        "id": 316,
        "name": "Friends of Table Tennis",
        "universityID": 63,
        "memberCount": 31
    },
    {
        "id": 317,
        "universityID": 64,
        "memberCount": 29
    },
    {
        "id": 318,
        "name": "Friends of Gourmet",
        "universityID": 64,
        "memberCount": 30
    },
    {
        "id": 319,
        "name": "Friends of Boardgames",
        "universityID": 64,
        "memberCount": 9
    },
    {
        "id": 320,
        "name": "Friends of Chess",
        "universityID": 64,
        "memberCount": 8
    },
    {
        "id": 321,
        "name": "Bridge Association",
        "universityID": 64,
        "memberCount": 12
    },
    {
        "id": 322,
        "universityID": 65,
        "memberCount": 32
    },
    {
        "id": 323,
        "name": "Friends of Gourmet",
        "universityID": 65,
        "memberCount": 13
    },
    {
        "id": 324,
        "name": "Friends of Football",
        "universityID": 65,
        "memberCount": 14
    },
    {
        "id": 325,
        "name": "Friends of Boardgames",
        "universityID": 65,
        "memberCount": 20
    }
];
const ENTERTAINMENT_PLACES = [
    {
        "id": 0,
        "name": "Bar Antonia",
        "cityID": 0
    },
    {
        "id": 1,
        "name": "Club de noche Atl\u00e1ntico",
        "cityID": 0
    },
    {
        "id": 2,
        "name": "Bar Susodicho",
        "cityID": 0
    },
    {
        "id": 3,
        "name": "Restaurante NoPasar\u00e1n",
        "cityID": 0
    },
    {
        "id": 4,
        "name": "Bar Arriba",
        "cityID": 0
    },
    {
        "id": 5,
        "name": "Bar de copas Veracruz",
        "cityID": 0
    },
    {
        "id": 6,
        "name": "Restaurante Sombrero",
        "cityID": 0
    },
    {
        "id": 7,
        "name": "Cines Nemi",
        "cityID": 0
    },
    {
        "id": 8,
        "name": "Galer\u00eda Libertad",
        "cityID": 0
    },
    {
        "id": 9,
        "name": "Restaurante Mariachis",
        "cityID": 0
    },
    {
        "id": 10,
        "name": "Restaurante \u00c1ngeles",
        "cityID": 0
    },
    {
        "id": 11,
        "name": "Restaurante Mediterr\u00e1neo",
        "cityID": 0
    },
    {
        "id": 12,
        "name": "Bar Extravagante",
        "cityID": 0
    },
    {
        "id": 13,
        "name": "Bar Lobos",
        "cityID": 0
    },
    {
        "id": 14,
        "name": "Teatro Sierra Nevada",
        "cityID": 0
    },
    {
        "id": 15,
        "name": "Restaurante Raza",
        "cityID": 0
    },
    {
        "id": 16,
        "name": "Bar Chile",
        "cityID": 0
    },
    {
        "id": 17,
        "name": "Galer\u00eda Pac\u00edfico",
        "cityID": 0
    },
    {
        "id": 18,
        "name": "Fonda Mare Nostrum",
        "cityID": 0
    },
    {
        "id": 19,
        "name": "Cines Hasta la Vista",
        "cityID": 0
    },
    {
        "id": 20,
        "name": "Bar de copas La motosierra",
        "cityID": 0
    },
    {
        "id": 21,
        "name": "Bar Roma",
        "cityID": 1
    },
    {
        "id": 22,
        "name": "Bar Para\u00edso",
        "cityID": 1
    },
    {
        "id": 23,
        "name": "Bar de copas Las Am\u00e9ricas",
        "cityID": 1
    },
    {
        "id": 24,
        "name": "Cines Guacamole",
        "cityID": 1
    },
    {
        "id": 25,
        "name": "Bar Azteca",
        "cityID": 1
    },
    {
        "id": 26,
        "name": "Bar de copas Nunca",
        "cityID": 1
    },
    {
        "id": 27,
        "name": "Fonda Fuego",
        "cityID": 1
    },
    {
        "id": 28,
        "name": "Bar Lobos",
        "cityID": 1
    },
    {
        "id": 29,
        "name": "Galer\u00eda Nemi",
        "cityID": 1
    },
    {
        "id": 30,
        "name": "Bar Luna",
        "cityID": 1
    },
    {
        "id": 31,
        "name": "Restaurante Londres",
        "cityID": 1
    },
    {
        "id": 32,
        "name": "Restaurante Raza",
        "cityID": 1
    },
    {
        "id": 33,
        "name": "Teatro Veracruz",
        "cityID": 1
    },
    {
        "id": 34,
        "name": "Bar Chile",
        "cityID": 1
    },
    {
        "id": 35,
        "name": "Bar Lopetegui",
        "cityID": 1
    },
    {
        "id": 36,
        "name": "Club de noche C\u00e1diz",
        "cityID": 1
    },
    {
        "id": 37,
        "name": "Bar de copas Sierra Nevada",
        "cityID": 1
    },
    {
        "id": 38,
        "name": "Cine Fiesta",
        "cityID": 1
    },
    {
        "id": 39,
        "name": "Bar Estrella",
        "cityID": 2
    },
    {
        "id": 40,
        "name": "Restaurante Catalu\u00f1a",
        "cityID": 2
    },
    {
        "id": 41,
        "name": "Bar Par\u00eds",
        "cityID": 2
    },
    {
        "id": 42,
        "name": "Fonda Castizo",
        "cityID": 2
    },
    {
        "id": 43,
        "name": "Restaurante Nemi",
        "cityID": 2
    },
    {
        "id": 44,
        "name": "Bar de copas Roma",
        "cityID": 2
    },
    {
        "id": 45,
        "name": "Galer\u00eda Granada",
        "cityID": 2
    },
    {
        "id": 46,
        "name": "Discoteca M\u00e9xico Lindo",
        "cityID": 2
    },
    {
        "id": 47,
        "name": "Restaurante Pirineos",
        "cityID": 2
    },
    {
        "id": 48,
        "name": "Bar Arriba",
        "cityID": 2
    },
    {
        "id": 49,
        "name": "Bar de copas Guacamole",
        "cityID": 2
    },
    {
        "id": 50,
        "name": "Teatro Estrecho",
        "cityID": 2
    },
    {
        "id": 51,
        "name": "Restaurante Pac\u00edfico",
        "cityID": 2
    },
    {
        "id": 52,
        "name": "Cine Libertad",
        "cityID": 2
    },
    {
        "id": 53,
        "name": "Teatro Para\u00edso",
        "cityID": 2
    },
    {
        "id": 54,
        "name": "Fonda Andaluc\u00eda",
        "cityID": 2
    },
    {
        "id": 55,
        "name": "Cines Antonia",
        "cityID": 2
    },
    {
        "id": 56,
        "name": "Cines Lords",
        "cityID": 2
    },
    {
        "id": 57,
        "name": "Bar \u00e0 vins La Grace",
        "cityID": 3
    },
    {
        "id": 58,
        "name": "Bistro La Mer",
        "cityID": 3
    },
    {
        "id": 59,
        "name": "Th\u00e9atre Rez de Chauss\u00e9",
        "cityID": 3
    },
    {
        "id": 60,
        "name": "Th\u00e9atre Toulouse",
        "cityID": 3
    },
    {
        "id": 61,
        "name": "Cave Toulon",
        "cityID": 3
    },
    {
        "id": 62,
        "name": "Bistro S'il Vous Pla\u00eet",
        "cityID": 3
    },
    {
        "id": 63,
        "name": "Club Gourmand",
        "cityID": 3
    },
    {
        "id": 64,
        "name": "Bar \u00e0 vins Gourmet",
        "cityID": 3
    },
    {
        "id": 65,
        "name": "Bistro Madrid",
        "cityID": 3
    },
    {
        "id": 66,
        "name": "Restaurant Lyon",
        "cityID": 3
    },
    {
        "id": 67,
        "name": "Galerie L'Oc\u00e9an",
        "cityID": 3
    },
    {
        "id": 68,
        "name": "Bar \u00e0 vins Londres",
        "cityID": 3
    },
    {
        "id": 69,
        "name": "Discoteque Asie",
        "cityID": 3
    },
    {
        "id": 70,
        "name": "Cave Redoutable",
        "cityID": 3
    },
    {
        "id": 71,
        "name": "Th\u00e9atre Outre Mer",
        "cityID": 3
    },
    {
        "id": 72,
        "name": "Bistro Les Alpes",
        "cityID": 3
    },
    {
        "id": 73,
        "name": "Bar \u00e0 vins Indochine",
        "cityID": 3
    },
    {
        "id": 74,
        "name": "Bistro Notre Dame",
        "cityID": 3
    },
    {
        "id": 75,
        "name": "Compagnie Baudelaire",
        "cityID": 3
    },
    {
        "id": 76,
        "name": "Bar \u00e0 vins Le Chemin",
        "cityID": 3
    },
    {
        "id": 77,
        "name": "Cave Impressionant",
        "cityID": 4
    },
    {
        "id": 78,
        "name": "Compagnie Le Sud",
        "cityID": 4
    },
    {
        "id": 79,
        "name": "Bistro Gourmand",
        "cityID": 4
    },
    {
        "id": 80,
        "name": "Bistro Toulon",
        "cityID": 4
    },
    {
        "id": 81,
        "name": "Bar \u00e0 vins Madrid",
        "cityID": 4
    },
    {
        "id": 82,
        "name": "Bistro Lyon",
        "cityID": 4
    },
    {
        "id": 83,
        "name": "Compagnie Arri\u00e8re Pays",
        "cityID": 4
    },
    {
        "id": 84,
        "name": "Bistro Papi",
        "cityID": 4
    },
    {
        "id": 85,
        "name": "Th\u00e9atre Cath\u00e9drale",
        "cityID": 4
    },
    {
        "id": 86,
        "name": "Restaurant Baudelaire",
        "cityID": 4
    },
    {
        "id": 87,
        "name": "Bistro Toulouse",
        "cityID": 4
    },
    {
        "id": 88,
        "name": "Th\u00e9atre Le Nord",
        "cityID": 4
    },
    {
        "id": 89,
        "name": "Bistro Asie",
        "cityID": 4
    },
    {
        "id": 90,
        "name": "Bistro Notre Dame",
        "cityID": 4
    },
    {
        "id": 91,
        "name": "Bistro Redoutable",
        "cityID": 4
    },
    {
        "id": 92,
        "name": "Bar \u00e0 vins Le Big Mac",
        "cityID": 4
    },
    {
        "id": 93,
        "name": "Bistro Outre Mer",
        "cityID": 4
    },
    {
        "id": 94,
        "name": "Bistro March\u00e9",
        "cityID": 4
    },
    {
        "id": 95,
        "name": "Bar \u00e0 vins Profond",
        "cityID": 5
    },
    {
        "id": 96,
        "name": "Bar \u00e0 vins Arri\u00e8re Pays",
        "cityID": 5
    },
    {
        "id": 97,
        "name": "Restaurant Redoutable",
        "cityID": 5
    },
    {
        "id": 98,
        "name": "Restaurant La Grace",
        "cityID": 5
    },
    {
        "id": 99,
        "name": "Restaurant S'il Vous Pla\u00eet",
        "cityID": 5
    },
    {
        "id": 100,
        "name": "Restaurant Le Sud",
        "cityID": 5
    },
    {
        "id": 101,
        "name": "Bistro Papi",
        "cityID": 5
    },
    {
        "id": 102,
        "name": "Bistro Les Alpes",
        "cityID": 5
    },
    {
        "id": 103,
        "name": "Bistro Outre Mer",
        "cityID": 5
    },
    {
        "id": 104,
        "name": "Bar \u00e0 vins Gourmet",
        "cityID": 5
    },
    {
        "id": 105,
        "name": "Club March\u00e9",
        "cityID": 5
    },
    {
        "id": 106,
        "name": "Caf\u00e9 de L'Oc\u00e9an",
        "cityID": 5
    },
    {
        "id": 107,
        "name": "Cave Outre Fois",
        "cityID": 5
    },
    {
        "id": 108,
        "name": "Bistro Le Big Mac",
        "cityID": 5
    },
    {
        "id": 109,
        "name": "Th\u00e9atre Le Concept",
        "cityID": 5
    },
    {
        "id": 110,
        "name": "Cave Toulouse",
        "cityID": 5
    },
    {
        "id": 111,
        "name": "Restaurant Londres",
        "cityID": 5
    },
    {
        "id": 112,
        "name": "Discoteque Gourmand",
        "cityID": 5
    },
    {
        "id": 113,
        "name": "Caf\u00e9 de Baudelaire",
        "cityID": 5
    },
    {
        "id": 114,
        "name": "Bistro Baudelaire",
        "cityID": 6
    },
    {
        "id": 115,
        "name": "Bistro Le Chemin",
        "cityID": 6
    },
    {
        "id": 116,
        "name": "Cave Plafond",
        "cityID": 6
    },
    {
        "id": 117,
        "name": "Caf\u00e9 de Toulouse",
        "cityID": 6
    },
    {
        "id": 118,
        "name": "Bar \u00e0 vins La Mer",
        "cityID": 6
    },
    {
        "id": 119,
        "name": "Restaurant Madrid",
        "cityID": 6
    },
    {
        "id": 120,
        "name": "Bistro Le Big Mac",
        "cityID": 6
    },
    {
        "id": 121,
        "name": "Cave Le Sud",
        "cityID": 6
    },
    {
        "id": 122,
        "name": "Caf\u00e9 de Le Nord",
        "cityID": 6
    },
    {
        "id": 123,
        "name": "Restaurant Arri\u00e8re Pays",
        "cityID": 6
    },
    {
        "id": 124,
        "name": "Cave Asie",
        "cityID": 6
    },
    {
        "id": 125,
        "name": "Bistro Cath\u00e9drale",
        "cityID": 6
    },
    {
        "id": 126,
        "name": "Caf\u00e9 de Outre Mer",
        "cityID": 6
    },
    {
        "id": 127,
        "name": "Compagnie L'Oc\u00e9an",
        "cityID": 6
    },
    {
        "id": 128,
        "name": "Bistro Londres",
        "cityID": 6
    },
    {
        "id": 129,
        "name": "Bar \u00e0 vins Notre Dame",
        "cityID": 6
    },
    {
        "id": 130,
        "name": "Club Afrique",
        "cityID": 6
    },
    {
        "id": 131,
        "name": "Discoteque Le Concept",
        "cityID": 6
    },
    {
        "id": 132,
        "name": "Bar \u00e0 vins Gourmand",
        "cityID": 6
    },
    {
        "id": 133,
        "name": "Discoteque Redoutable",
        "cityID": 6
    },
    {
        "id": 134,
        "name": "Bistro Profond",
        "cityID": 6
    },
    {
        "id": 135,
        "name": "Cave Rez de Chauss\u00e9",
        "cityID": 6
    },
    {
        "id": 136,
        "name": "Victorian Caf\u00e9",
        "cityID": 7
    },
    {
        "id": 137,
        "name": "Lol Caf\u00e9",
        "cityID": 7
    },
    {
        "id": 138,
        "name": "Mindless Comedy Club",
        "cityID": 7
    },
    {
        "id": 139,
        "name": "Rolling Pub",
        "cityID": 7
    },
    {
        "id": 140,
        "name": "Doodling Pub",
        "cityID": 7
    },
    {
        "id": 141,
        "name": "Adjourned Theatre",
        "cityID": 7
    },
    {
        "id": 142,
        "name": "Blaise Hall",
        "cityID": 7
    },
    {
        "id": 143,
        "name": "Royal Theatre",
        "cityID": 7
    },
    {
        "id": 144,
        "name": "Clapton Comedy Club",
        "cityID": 7
    },
    {
        "id": 145,
        "name": "Fabulous Caf\u00e9",
        "cityID": 7
    },
    {
        "id": 146,
        "name": "Queen's House",
        "cityID": 7
    },
    {
        "id": 147,
        "name": "Jamaica Comedy Club",
        "cityID": 7
    },
    {
        "id": 148,
        "name": "The Daunted Arena",
        "cityID": 7
    },
    {
        "id": 149,
        "name": "Solidarity Hall",
        "cityID": 7
    },
    {
        "id": 150,
        "name": "Astounding Hall",
        "cityID": 7
    },
    {
        "id": 151,
        "name": "Sheriff Club",
        "cityID": 7
    },
    {
        "id": 152,
        "name": "Perestroika Comedy Club",
        "cityID": 7
    },
    {
        "id": 153,
        "name": "Mind the Gap Caf\u00e9",
        "cityID": 7
    },
    {
        "id": 154,
        "name": "Livid Pub",
        "cityID": 7
    },
    {
        "id": 155,
        "name": "Fool Hall",
        "cityID": 7
    },
    {
        "id": 156,
        "name": "Princess Theatre",
        "cityID": 7
    },
    {
        "id": 157,
        "name": "Navy Theatre",
        "cityID": 7
    },
    {
        "id": 158,
        "name": "The Swan Caf\u00e9",
        "cityID": 8
    },
    {
        "id": 159,
        "name": "Red Wall Pub",
        "cityID": 8
    },
    {
        "id": 160,
        "name": "Regio Caf\u00e9",
        "cityID": 8
    },
    {
        "id": 161,
        "name": "Boomer Gallery",
        "cityID": 8
    },
    {
        "id": 162,
        "name": "Moscow Centre",
        "cityID": 8
    },
    {
        "id": 163,
        "name": "Babylon Nightclub",
        "cityID": 8
    },
    {
        "id": 164,
        "name": "The Lady Bug Centre",
        "cityID": 8
    },
    {
        "id": 165,
        "name": "Adjourned Nightclub",
        "cityID": 8
    },
    {
        "id": 166,
        "name": "Mountains Gallery",
        "cityID": 8
    },
    {
        "id": 167,
        "name": "Kelly Pub",
        "cityID": 8
    },
    {
        "id": 168,
        "name": "Awesome Hall",
        "cityID": 8
    },
    {
        "id": 169,
        "name": "The Daunted Cinema",
        "cityID": 8
    },
    {
        "id": 170,
        "name": "Doodling Pub",
        "cityID": 8
    },
    {
        "id": 171,
        "name": "Tomato Arena",
        "cityID": 8
    },
    {
        "id": 172,
        "name": "Hotpink Centre",
        "cityID": 8
    },
    {
        "id": 173,
        "name": "Sheriff Theatre",
        "cityID": 8
    },
    {
        "id": 174,
        "name": "Daniel Pub",
        "cityID": 8
    },
    {
        "id": 175,
        "name": "The Globe Caf\u00e9",
        "cityID": 8
    },
    {
        "id": 176,
        "name": "Fantastic House",
        "cityID": 8
    },
    {
        "id": 177,
        "name": "Mindless Pub",
        "cityID": 8
    },
    {
        "id": 178,
        "name": "Royal Pub",
        "cityID": 9
    },
    {
        "id": 179,
        "name": "Rolling Theatre",
        "cityID": 9
    },
    {
        "id": 180,
        "name": "Rocks Cinema",
        "cityID": 9
    },
    {
        "id": 181,
        "name": "Surrogate Pub",
        "cityID": 9
    },
    {
        "id": 182,
        "name": "Doodling Pub",
        "cityID": 9
    },
    {
        "id": 183,
        "name": "Vacuum Centre",
        "cityID": 9
    },
    {
        "id": 184,
        "name": "Adjourned Caf\u00e9",
        "cityID": 9
    },
    {
        "id": 185,
        "name": "Victorian Pub",
        "cityID": 9
    },
    {
        "id": 186,
        "name": "Tomato House",
        "cityID": 9
    },
    {
        "id": 187,
        "name": "Never Mind Arena",
        "cityID": 9
    },
    {
        "id": 188,
        "name": "Solidarity Pub",
        "cityID": 9
    },
    {
        "id": 189,
        "name": "Haggis Caf\u00e9",
        "cityID": 9
    },
    {
        "id": 190,
        "name": "The Swan Pub",
        "cityID": 9
    },
    {
        "id": 191,
        "name": "The Daunted Gallery",
        "cityID": 9
    },
    {
        "id": 192,
        "name": "Lol Theatre",
        "cityID": 9
    },
    {
        "id": 193,
        "name": "Perestroika Hall",
        "cityID": 9
    },
    {
        "id": 194,
        "name": "Navy Caf\u00e9",
        "cityID": 9
    },
    {
        "id": 195,
        "name": "Livid Comedy Club",
        "cityID": 9
    },
    {
        "id": 196,
        "name": "Poetry Gallery",
        "cityID": 10
    },
    {
        "id": 197,
        "name": "Jamaica Hall",
        "cityID": 10
    },
    {
        "id": 198,
        "name": "Fabulous Comedy Club",
        "cityID": 10
    },
    {
        "id": 199,
        "name": "Mountains Caf\u00e9",
        "cityID": 10
    },
    {
        "id": 200,
        "name": "The Globe Centre",
        "cityID": 10
    },
    {
        "id": 201,
        "name": "Rolling Caf\u00e9",
        "cityID": 10
    },
    {
        "id": 202,
        "name": "Scotland's Comedy Club",
        "cityID": 10
    },
    {
        "id": 203,
        "name": "Haggis Hall",
        "cityID": 10
    },
    {
        "id": 204,
        "name": "Mindless Club",
        "cityID": 10
    },
    {
        "id": 205,
        "name": "David Club",
        "cityID": 10
    },
    {
        "id": 206,
        "name": "Royal Caf\u00e9",
        "cityID": 10
    },
    {
        "id": 207,
        "name": "The Daunted Caf\u00e9",
        "cityID": 10
    },
    {
        "id": 208,
        "name": "Imperio Pub",
        "cityID": 10
    },
    {
        "id": 209,
        "name": "Fantastic Caf\u00e9",
        "cityID": 10
    },
    {
        "id": 210,
        "name": "Awesome Cinema",
        "cityID": 10
    },
    {
        "id": 211,
        "name": "Surrogate Centre",
        "cityID": 10
    },
    {
        "id": 212,
        "name": "Channel Centre",
        "cityID": 10
    },
    {
        "id": 213,
        "name": "Sabor Caf\u00e9",
        "cityID": 10
    },
    {
        "id": 214,
        "name": "Solidarity Theatre",
        "cityID": 10
    },
    {
        "id": 215,
        "name": "Regio Gallery",
        "cityID": 10
    },
    {
        "id": 216,
        "name": "The Swan Pub",
        "cityID": 10
    },
    {
        "id": 217,
        "name": "Clapton Caf\u00e9",
        "cityID": 10
    },
    {
        "id": 218,
        "name": "The Swan Caf\u00e9",
        "cityID": 11
    },
    {
        "id": 219,
        "name": "Mind the Gap Nightclub",
        "cityID": 11
    },
    {
        "id": 220,
        "name": "Awesome Pub",
        "cityID": 11
    },
    {
        "id": 221,
        "name": "William Club",
        "cityID": 11
    },
    {
        "id": 222,
        "name": "Peter & Molly Caf\u00e9",
        "cityID": 11
    },
    {
        "id": 223,
        "name": "Blaise Place",
        "cityID": 11
    },
    {
        "id": 224,
        "name": "Succulent Pub",
        "cityID": 11
    },
    {
        "id": 225,
        "name": "Royal Pub",
        "cityID": 11
    },
    {
        "id": 226,
        "name": "Regio Pub",
        "cityID": 11
    },
    {
        "id": 227,
        "name": "Scotland's Place",
        "cityID": 11
    },
    {
        "id": 228,
        "name": "Imperio Nightclub",
        "cityID": 11
    },
    {
        "id": 229,
        "name": "Moscow Pub",
        "cityID": 11
    },
    {
        "id": 230,
        "name": "The Daunted Nightclub",
        "cityID": 11
    },
    {
        "id": 231,
        "name": "Princess Caf\u00e9",
        "cityID": 11
    },
    {
        "id": 232,
        "name": "Perestroika Pub",
        "cityID": 11
    },
    {
        "id": 233,
        "name": "Adjourned Caf\u00e9",
        "cityID": 11
    },
    {
        "id": 234,
        "name": "Boomer Place",
        "cityID": 11
    },
    {
        "id": 235,
        "name": "Alladin Cinema",
        "cityID": 11
    },
    {
        "id": 236,
        "name": "Rocks Club",
        "cityID": 11
    },
    {
        "id": 237,
        "name": "Kelly Comedy Club",
        "cityID": 11
    },
    {
        "id": 238,
        "name": "Channel Comedy Club",
        "cityID": 12
    },
    {
        "id": 239,
        "name": "Fabulous Theatre",
        "cityID": 12
    },
    {
        "id": 240,
        "name": "Madrid Theatre",
        "cityID": 12
    },
    {
        "id": 241,
        "name": "Cinderella Pub",
        "cityID": 12
    },
    {
        "id": 242,
        "name": "Green Hall",
        "cityID": 12
    },
    {
        "id": 243,
        "name": "Winston Arena",
        "cityID": 12
    },
    {
        "id": 244,
        "name": "Glasnost Club",
        "cityID": 12
    },
    {
        "id": 245,
        "name": "Adjourned Arena",
        "cityID": 12
    },
    {
        "id": 246,
        "name": "Poetry Pub",
        "cityID": 12
    },
    {
        "id": 247,
        "name": "Princess Place",
        "cityID": 12
    },
    {
        "id": 248,
        "name": "William Theatre",
        "cityID": 12
    },
    {
        "id": 249,
        "name": "Kelly Pub",
        "cityID": 12
    },
    {
        "id": 250,
        "name": "David Gallery",
        "cityID": 12
    },
    {
        "id": 251,
        "name": "Hotpink Caf\u00e9",
        "cityID": 12
    },
    {
        "id": 252,
        "name": "Doodling Theatre",
        "cityID": 12
    },
    {
        "id": 253,
        "name": "Mind the Gap Gallery",
        "cityID": 12
    },
    {
        "id": 254,
        "name": "Peter & Molly Nightclub",
        "cityID": 12
    },
    {
        "id": 255,
        "name": "Boomer Place",
        "cityID": 12
    },
    {
        "id": 256,
        "name": "Cream Theatre",
        "cityID": 12
    },
    {
        "id": 257,
        "name": "The Lady Bug Nightclub",
        "cityID": 12
    },
    {
        "id": 258,
        "name": "Alladin Pub",
        "cityID": 12
    },
    {
        "id": 259,
        "name": "Mountains Place",
        "cityID": 12
    },
    {
        "id": 260,
        "name": "King's Centre",
        "cityID": 13
    },
    {
        "id": 261,
        "name": "The Swan Cinema",
        "cityID": 13
    },
    {
        "id": 262,
        "name": "Mountains Club",
        "cityID": 13
    },
    {
        "id": 263,
        "name": "Haggis Club",
        "cityID": 13
    },
    {
        "id": 264,
        "name": "Channel Centre",
        "cityID": 13
    },
    {
        "id": 265,
        "name": "The Globe Caf\u00e9",
        "cityID": 13
    },
    {
        "id": 266,
        "name": "Madrid Theatre",
        "cityID": 13
    },
    {
        "id": 267,
        "name": "William Comedy Club",
        "cityID": 13
    },
    {
        "id": 268,
        "name": "Solidarity Caf\u00e9",
        "cityID": 13
    },
    {
        "id": 269,
        "name": "Awesome Caf\u00e9",
        "cityID": 13
    },
    {
        "id": 270,
        "name": "Green Hall",
        "cityID": 13
    },
    {
        "id": 271,
        "name": "Kelly Arena",
        "cityID": 13
    },
    {
        "id": 272,
        "name": "Alladin Cinema",
        "cityID": 13
    },
    {
        "id": 273,
        "name": "Cinderella Caf\u00e9",
        "cityID": 13
    },
    {
        "id": 274,
        "name": "Lol Centre",
        "cityID": 13
    },
    {
        "id": 275,
        "name": "Troubles Hall",
        "cityID": 13
    },
    {
        "id": 276,
        "name": "Fabulous Pub",
        "cityID": 13
    },
    {
        "id": 277,
        "name": "Red Wall Comedy Club",
        "cityID": 13
    },
    {
        "id": 278,
        "name": "Livid Cinema",
        "cityID": 13
    },
    {
        "id": 279,
        "name": "Jamaica Pub",
        "cityID": 14
    },
    {
        "id": 280,
        "name": "The Swan Centre",
        "cityID": 14
    },
    {
        "id": 281,
        "name": "Livid Caf\u00e9",
        "cityID": 14
    },
    {
        "id": 282,
        "name": "Navy Nightclub",
        "cityID": 14
    },
    {
        "id": 283,
        "name": "Imperio Pub",
        "cityID": 14
    },
    {
        "id": 284,
        "name": "Channel Cinema",
        "cityID": 14
    },
    {
        "id": 285,
        "name": "Rolling Pub",
        "cityID": 14
    },
    {
        "id": 286,
        "name": "Haggis Nightclub",
        "cityID": 14
    },
    {
        "id": 287,
        "name": "Poetry Arena",
        "cityID": 14
    },
    {
        "id": 288,
        "name": "Astounding Pub",
        "cityID": 14
    },
    {
        "id": 289,
        "name": "Mind the Gap Pub",
        "cityID": 14
    },
    {
        "id": 290,
        "name": "Fraternity Caf\u00e9",
        "cityID": 14
    },
    {
        "id": 291,
        "name": "Madrid Place",
        "cityID": 14
    },
    {
        "id": 292,
        "name": "Corduroi Pub",
        "cityID": 14
    },
    {
        "id": 293,
        "name": "Victorian Pub",
        "cityID": 14
    },
    {
        "id": 294,
        "name": "Sheriff Theatre",
        "cityID": 14
    },
    {
        "id": 295,
        "name": "Hotpink Pub",
        "cityID": 14
    },
    {
        "id": 296,
        "name": "Mountains Gallery",
        "cityID": 14
    },
    {
        "id": 297,
        "name": "Princess Theatre",
        "cityID": 15
    },
    {
        "id": 298,
        "name": "King's Pub",
        "cityID": 15
    },
    {
        "id": 299,
        "name": "Boomer Nightclub",
        "cityID": 15
    },
    {
        "id": 300,
        "name": "Winston Theatre",
        "cityID": 15
    },
    {
        "id": 301,
        "name": "Astounding Club",
        "cityID": 15
    },
    {
        "id": 302,
        "name": "David Pub",
        "cityID": 15
    },
    {
        "id": 303,
        "name": "Hotpink Hall",
        "cityID": 15
    },
    {
        "id": 304,
        "name": "Vacuum Arena",
        "cityID": 15
    },
    {
        "id": 305,
        "name": "Lol Nightclub",
        "cityID": 15
    },
    {
        "id": 306,
        "name": "Madrid Comedy Club",
        "cityID": 15
    },
    {
        "id": 307,
        "name": "Red Wall Theatre",
        "cityID": 15
    },
    {
        "id": 308,
        "name": "Never Mind Arena",
        "cityID": 15
    },
    {
        "id": 309,
        "name": "Fabulous Arena",
        "cityID": 15
    },
    {
        "id": 310,
        "name": "Cinderella House",
        "cityID": 15
    },
    {
        "id": 311,
        "name": "Livid Hall",
        "cityID": 15
    },
    {
        "id": 312,
        "name": "Mountains Caf\u00e9",
        "cityID": 15
    },
    {
        "id": 313,
        "name": "Mindless Pub",
        "cityID": 15
    },
    {
        "id": 314,
        "name": "Doodling Pub",
        "cityID": 15
    },
    {
        "id": 315,
        "name": "Daniel Place",
        "cityID": 15
    },
    {
        "id": 316,
        "name": "Teater Kullen",
        "cityID": 16
    },
    {
        "id": 317,
        "name": "Restaurang Norrland",
        "cityID": 16
    },
    {
        "id": 318,
        "name": "Restaurang Loki",
        "cityID": 16
    },
    {
        "id": 319,
        "name": "Galeri Odin",
        "cityID": 16
    },
    {
        "id": 320,
        "name": "Kiosk Underlandet",
        "cityID": 16
    },
    {
        "id": 321,
        "name": "Teater Amerikano",
        "cityID": 16
    },
    {
        "id": 322,
        "name": "Restaurang Frysen",
        "cityID": 16
    },
    {
        "id": 323,
        "name": "Konsthall Filibuster",
        "cityID": 16
    },
    {
        "id": 324,
        "name": "Nattklubb Madrid",
        "cityID": 16
    },
    {
        "id": 325,
        "name": "Nattklubb Freja",
        "cityID": 16
    },
    {
        "id": 326,
        "name": "Restaurang Machiavelli",
        "cityID": 16
    },
    {
        "id": 327,
        "name": "Konsthall Calabria",
        "cityID": 16
    },
    {
        "id": 328,
        "name": "Restaurang Valhalla",
        "cityID": 16
    },
    {
        "id": 329,
        "name": "Teater Kisellerad",
        "cityID": 16
    },
    {
        "id": 330,
        "name": "Kiosk Svarta Draken",
        "cityID": 16
    },
    {
        "id": 331,
        "name": "Restaurang Gefle",
        "cityID": 16
    },
    {
        "id": 332,
        "name": "Caf\u00e9 Knastret",
        "cityID": 16
    },
    {
        "id": 333,
        "name": "Pizzeria Sicilia",
        "cityID": 16
    },
    {
        "id": 334,
        "name": "Konsthall Lustig",
        "cityID": 16
    },
    {
        "id": 335,
        "name": "Caf\u00e9 Sm\u00e5land",
        "cityID": 16
    },
    {
        "id": 336,
        "name": "Restaurang Lurendrejeri",
        "cityID": 16
    },
    {
        "id": 337,
        "name": "Restaurang Hedarna",
        "cityID": 16
    },
    {
        "id": 338,
        "name": "Restaurang Milan",
        "cityID": 17
    },
    {
        "id": 339,
        "name": "Galeri Norrland",
        "cityID": 17
    },
    {
        "id": 340,
        "name": "Caf\u00e9 Ro",
        "cityID": 17
    },
    {
        "id": 341,
        "name": "Caf\u00e9 Barabarerna",
        "cityID": 17
    },
    {
        "id": 342,
        "name": "Bar De Sju Dv\u00e4rjarna",
        "cityID": 17
    },
    {
        "id": 343,
        "name": "Biograf F\u00f6rbrukat",
        "cityID": 17
    },
    {
        "id": 344,
        "name": "Nattklubb Kisellerad",
        "cityID": 17
    },
    {
        "id": 345,
        "name": "Pizzeria \u00c4lgen",
        "cityID": 17
    },
    {
        "id": 346,
        "name": "Caf\u00e9 Sm\u00e5land",
        "cityID": 17
    },
    {
        "id": 347,
        "name": "Caf\u00e9 Calabria",
        "cityID": 17
    },
    {
        "id": 348,
        "name": "Nattklubb Sk\u00e5ne",
        "cityID": 17
    },
    {
        "id": 349,
        "name": "Restaurang Ryssen",
        "cityID": 17
    },
    {
        "id": 350,
        "name": "Caf\u00e9 Gamla Stan",
        "cityID": 17
    },
    {
        "id": 351,
        "name": "Bar Madrid",
        "cityID": 17
    },
    {
        "id": 352,
        "name": "Konsthall Knastret",
        "cityID": 17
    },
    {
        "id": 353,
        "name": "Caf\u00e9 Yggdrasil",
        "cityID": 17
    },
    {
        "id": 354,
        "name": "Caf\u00e9 Lurendrejeri",
        "cityID": 17
    },
    {
        "id": 355,
        "name": "Pizzeria Kullen",
        "cityID": 17
    },
    {
        "id": 356,
        "name": "Galeri Odin",
        "cityID": 17
    },
    {
        "id": 357,
        "name": "Restaurang Hedarna",
        "cityID": 18
    },
    {
        "id": 358,
        "name": "Restaurang F\u00f6rbrukat",
        "cityID": 18
    },
    {
        "id": 359,
        "name": "Restaurang Antagonist",
        "cityID": 18
    },
    {
        "id": 360,
        "name": "Galeri Milan",
        "cityID": 18
    },
    {
        "id": 361,
        "name": "Restaurang Gamla Stan",
        "cityID": 18
    },
    {
        "id": 362,
        "name": "Nattklubb Knastret",
        "cityID": 18
    },
    {
        "id": 363,
        "name": "Caf\u00e9 Sk\u00e5ne",
        "cityID": 18
    },
    {
        "id": 364,
        "name": "Kiosk Sm\u00e5land",
        "cityID": 18
    },
    {
        "id": 365,
        "name": "Nattklubb Madrid",
        "cityID": 18
    },
    {
        "id": 366,
        "name": "Restaurang Kisellerad",
        "cityID": 18
    },
    {
        "id": 367,
        "name": "Caf\u00e9 Frysen",
        "cityID": 18
    },
    {
        "id": 368,
        "name": "Galeri \u00c4lgen",
        "cityID": 18
    },
    {
        "id": 369,
        "name": "Pizzeria Sicilia",
        "cityID": 18
    },
    {
        "id": 370,
        "name": "Galeri Ryssen",
        "cityID": 18
    },
    {
        "id": 371,
        "name": "Caf\u00e9 Amerikano",
        "cityID": 18
    },
    {
        "id": 372,
        "name": "Konsthall Ro",
        "cityID": 18
    },
    {
        "id": 373,
        "name": "Caf\u00e9 Filibuster",
        "cityID": 18
    },
    {
        "id": 374,
        "name": "Restaurang Gefle",
        "cityID": 18
    },
    {
        "id": 375,
        "name": "Caf\u00e9 Ro",
        "cityID": 19
    },
    {
        "id": 376,
        "name": "Restaurang Madrid",
        "cityID": 19
    },
    {
        "id": 377,
        "name": "Galeri Calabria",
        "cityID": 19
    },
    {
        "id": 378,
        "name": "Nattklubb F\u00f6rbrukat",
        "cityID": 19
    },
    {
        "id": 379,
        "name": "Caf\u00e9 Gefle",
        "cityID": 19
    },
    {
        "id": 380,
        "name": "Konsthall Sk\u00e4rg\u00e5rden",
        "cityID": 19
    },
    {
        "id": 381,
        "name": "Teater Sm\u00e5land",
        "cityID": 19
    },
    {
        "id": 382,
        "name": "Biograf Antagonist",
        "cityID": 19
    },
    {
        "id": 383,
        "name": "Restaurang Valhalla",
        "cityID": 19
    },
    {
        "id": 384,
        "name": "Restaurang Underlandet",
        "cityID": 19
    },
    {
        "id": 385,
        "name": "Restaurang Loki",
        "cityID": 19
    },
    {
        "id": 386,
        "name": "Galeri Boulognerskogen",
        "cityID": 19
    },
    {
        "id": 387,
        "name": "Caf\u00e9 Lustig",
        "cityID": 19
    },
    {
        "id": 388,
        "name": "Konsthall Odin",
        "cityID": 19
    },
    {
        "id": 389,
        "name": "Caf\u00e9 Ryssen",
        "cityID": 19
    },
    {
        "id": 390,
        "name": "Caf\u00e9 \u00c4lgen",
        "cityID": 19
    },
    {
        "id": 391,
        "name": "Bar Hedarna",
        "cityID": 19
    },
    {
        "id": 392,
        "name": "Konsthall Sicilia",
        "cityID": 19
    },
    {
        "id": 393,
        "name": "Caf\u00e9 Amerikano",
        "cityID": 19
    },
    {
        "id": 394,
        "name": "Caf\u00e9 Frysen",
        "cityID": 19
    },
    {
        "id": 395,
        "name": "Teater Machiavelli",
        "cityID": 19
    },
    {
        "id": 396,
        "name": "Teater Filibuster",
        "cityID": 19
    },
    {
        "id": 397,
        "name": "Restaurante Barna",
        "cityID": 20
    },
    {
        "id": 398,
        "name": "Restaurante Nunca",
        "cityID": 20
    },
    {
        "id": 399,
        "name": "Bar Arriba",
        "cityID": 20
    },
    {
        "id": 400,
        "name": "Bar Chile",
        "cityID": 20
    },
    {
        "id": 401,
        "name": "Restaurante Lopetegui",
        "cityID": 20
    },
    {
        "id": 402,
        "name": "Teatro Los Santos",
        "cityID": 20
    },
    {
        "id": 403,
        "name": "Bar Tacita de plata",
        "cityID": 20
    },
    {
        "id": 404,
        "name": "Galer\u00eda Castizo",
        "cityID": 20
    },
    {
        "id": 405,
        "name": "Club de noche Par\u00eds",
        "cityID": 20
    },
    {
        "id": 406,
        "name": "Restaurante Sobremesa",
        "cityID": 20
    },
    {
        "id": 407,
        "name": "Club de noche Guacamole",
        "cityID": 20
    },
    {
        "id": 408,
        "name": "Restaurante Furibundo",
        "cityID": 20
    },
    {
        "id": 409,
        "name": "Galer\u00eda Azteca",
        "cityID": 20
    },
    {
        "id": 410,
        "name": "Restaurante Buenas",
        "cityID": 20
    },
    {
        "id": 411,
        "name": "Galer\u00eda Fuego",
        "cityID": 20
    },
    {
        "id": 412,
        "name": "Teatro Mare Nostrum",
        "cityID": 20
    },
    {
        "id": 413,
        "name": "Discoteca Pirineos",
        "cityID": 20
    },
    {
        "id": 414,
        "name": "Restaurante Hasta la Vista",
        "cityID": 20
    },
    {
        "id": 415,
        "name": "Teatro Lords",
        "cityID": 20
    },
    {
        "id": 416,
        "name": "Bar Roma",
        "cityID": 20
    },
    {
        "id": 417,
        "name": "Bar Londres",
        "cityID": 21
    },
    {
        "id": 418,
        "name": "Bar Nunca",
        "cityID": 21
    },
    {
        "id": 419,
        "name": "Restaurante Lords",
        "cityID": 21
    },
    {
        "id": 420,
        "name": "Bar de copas Pirineos",
        "cityID": 21
    },
    {
        "id": 421,
        "name": "Teatro Catalu\u00f1a",
        "cityID": 21
    },
    {
        "id": 422,
        "name": "Restaurante Furibundo",
        "cityID": 21
    },
    {
        "id": 423,
        "name": "Bar Azteca",
        "cityID": 21
    },
    {
        "id": 424,
        "name": "Bar de copas Central",
        "cityID": 21
    },
    {
        "id": 425,
        "name": "Teatro Luna",
        "cityID": 21
    },
    {
        "id": 426,
        "name": "Club de noche Los Gatos",
        "cityID": 21
    },
    {
        "id": 427,
        "name": "Cines Susodicho",
        "cityID": 21
    },
    {
        "id": 428,
        "name": "Bar Fiesta",
        "cityID": 21
    },
    {
        "id": 429,
        "name": "Bar Tacita de plata",
        "cityID": 21
    },
    {
        "id": 430,
        "name": "Teatro Granada",
        "cityID": 21
    },
    {
        "id": 431,
        "name": "Bar Castizo",
        "cityID": 21
    },
    {
        "id": 432,
        "name": "Bar Pepe",
        "cityID": 21
    },
    {
        "id": 433,
        "name": "Restaurante Barna",
        "cityID": 21
    },
    {
        "id": 434,
        "name": "Discoteca Vascongadas",
        "cityID": 21
    },
    {
        "id": 435,
        "name": "Restaurante Binvenguts",
        "cityID": 21
    },
    {
        "id": 436,
        "name": "Bar Estrella",
        "cityID": 22
    },
    {
        "id": 437,
        "name": "Cine Para\u00edso",
        "cityID": 22
    },
    {
        "id": 438,
        "name": "Discoteca Granada",
        "cityID": 22
    },
    {
        "id": 439,
        "name": "Restaurante Extravagante",
        "cityID": 22
    },
    {
        "id": 440,
        "name": "Bar Pirineos",
        "cityID": 22
    },
    {
        "id": 441,
        "name": "Bar Los Santos",
        "cityID": 22
    },
    {
        "id": 442,
        "name": "Bar Mediterr\u00e1neo",
        "cityID": 22
    },
    {
        "id": 443,
        "name": "Fonda Lords",
        "cityID": 22
    },
    {
        "id": 444,
        "name": "Cine Raza",
        "cityID": 22
    },
    {
        "id": 445,
        "name": "Restaurante Fuego",
        "cityID": 22
    },
    {
        "id": 446,
        "name": "Teatro Binvenguts",
        "cityID": 22
    },
    {
        "id": 447,
        "name": "Club de noche Vascongadas",
        "cityID": 22
    },
    {
        "id": 448,
        "name": "Restaurante \u00c1ngeles",
        "cityID": 22
    },
    {
        "id": 449,
        "name": "Galer\u00eda Fiesta",
        "cityID": 22
    },
    {
        "id": 450,
        "name": "Cines Nemi",
        "cityID": 22
    },
    {
        "id": 451,
        "name": "Cines Los Gatos",
        "cityID": 22
    },
    {
        "id": 452,
        "name": "Restaurante Lobos",
        "cityID": 22
    },
    {
        "id": 453,
        "name": "Restaurante Catalu\u00f1a",
        "cityID": 22
    },
    {
        "id": 454,
        "name": "Restaurante NoPasar\u00e1n",
        "cityID": 22
    },
    {
        "id": 455,
        "name": "Bar Susodicho",
        "cityID": 22
    },
    {
        "id": 456,
        "name": "Cines Mare Nostrum",
        "cityID": 23
    },
    {
        "id": 457,
        "name": "Restaurante Veracruz",
        "cityID": 23
    },
    {
        "id": 458,
        "name": "Fonda Londres",
        "cityID": 23
    },
    {
        "id": 459,
        "name": "Bar de copas \u00c1ngeles",
        "cityID": 23
    },
    {
        "id": 460,
        "name": "Galer\u00eda Susodicho",
        "cityID": 23
    },
    {
        "id": 461,
        "name": "Bar Nunca",
        "cityID": 23
    },
    {
        "id": 462,
        "name": "Discoteca Las Am\u00e9ricas",
        "cityID": 23
    },
    {
        "id": 463,
        "name": "Teatro Los Andes",
        "cityID": 23
    },
    {
        "id": 464,
        "name": "Cines Pirineos",
        "cityID": 23
    },
    {
        "id": 465,
        "name": "Bar Luna",
        "cityID": 23
    },
    {
        "id": 466,
        "name": "Cine Hasta la Vista",
        "cityID": 23
    },
    {
        "id": 467,
        "name": "Fonda Sobremesa",
        "cityID": 23
    },
    {
        "id": 468,
        "name": "Restaurante Antonia",
        "cityID": 23
    },
    {
        "id": 469,
        "name": "Bar Mediterr\u00e1neo",
        "cityID": 23
    },
    {
        "id": 470,
        "name": "Fonda Andaluc\u00eda",
        "cityID": 23
    },
    {
        "id": 471,
        "name": "Teatro Raza",
        "cityID": 23
    },
    {
        "id": 472,
        "name": "Discoteca Sombrero",
        "cityID": 23
    },
    {
        "id": 473,
        "name": "Bar Furibundo",
        "cityID": 23
    },
    {
        "id": 474,
        "name": "Teatro Binvenguts",
        "cityID": 23
    },
    {
        "id": 475,
        "name": "Bar Mariachis",
        "cityID": 23
    },
    {
        "id": 476,
        "name": "Restaurante Chile",
        "cityID": 23
    },
    {
        "id": 477,
        "name": "Fonda Nicaragua",
        "cityID": 24
    },
    {
        "id": 478,
        "name": "Restaurante Lords",
        "cityID": 24
    },
    {
        "id": 479,
        "name": "Bar Pepe",
        "cityID": 24
    },
    {
        "id": 480,
        "name": "Fonda Nemi",
        "cityID": 24
    },
    {
        "id": 481,
        "name": "Restaurante Guacamole",
        "cityID": 24
    },
    {
        "id": 482,
        "name": "Bar Ca\u00f1\u00ed",
        "cityID": 24
    },
    {
        "id": 483,
        "name": "Cine Nunca",
        "cityID": 24
    },
    {
        "id": 484,
        "name": "Club de noche Cul\u00e9",
        "cityID": 24
    },
    {
        "id": 485,
        "name": "Restaurante Arriba",
        "cityID": 24
    },
    {
        "id": 486,
        "name": "Bar Catalu\u00f1a",
        "cityID": 24
    },
    {
        "id": 487,
        "name": "Discoteca Libertad",
        "cityID": 24
    },
    {
        "id": 488,
        "name": "Bar de copas Fiesta",
        "cityID": 24
    },
    {
        "id": 489,
        "name": "Bar Lopetegui",
        "cityID": 24
    },
    {
        "id": 490,
        "name": "Cine Granada",
        "cityID": 24
    },
    {
        "id": 491,
        "name": "Bar de copas Lobos",
        "cityID": 24
    },
    {
        "id": 492,
        "name": "Bar Furibundo",
        "cityID": 24
    },
    {
        "id": 493,
        "name": "Restaurante Mare Nostrum",
        "cityID": 24
    },
    {
        "id": 494,
        "name": "Restaurante Raza",
        "cityID": 24
    },
    {
        "id": 495,
        "name": "Cine Binvenguts",
        "cityID": 24
    },
    {
        "id": 496,
        "name": "Bar Veracruz",
        "cityID": 24
    },
    {
        "id": 497,
        "name": "Cines Susodicho",
        "cityID": 24
    },
    {
        "id": 498,
        "name": "Bar Par\u00eds",
        "cityID": 24
    },
    {
        "id": 499,
        "name": "Cine Guacamole",
        "cityID": 25
    },
    {
        "id": 500,
        "name": "Restaurante Antonia",
        "cityID": 25
    },
    {
        "id": 501,
        "name": "Club de noche Amigo",
        "cityID": 25
    },
    {
        "id": 502,
        "name": "Restaurante Para\u00edso",
        "cityID": 25
    },
    {
        "id": 503,
        "name": "Restaurante Ca\u00f1\u00ed",
        "cityID": 25
    },
    {
        "id": 504,
        "name": "Cine Binvenguts",
        "cityID": 25
    },
    {
        "id": 505,
        "name": "Galer\u00eda Nemi",
        "cityID": 25
    },
    {
        "id": 506,
        "name": "Bar de copas Los Andes",
        "cityID": 25
    },
    {
        "id": 507,
        "name": "Teatro Lopetegui",
        "cityID": 25
    },
    {
        "id": 508,
        "name": "Cines NoPasar\u00e1n",
        "cityID": 25
    },
    {
        "id": 509,
        "name": "Bar Furibundo",
        "cityID": 25
    },
    {
        "id": 510,
        "name": "Bar Central",
        "cityID": 25
    },
    {
        "id": 511,
        "name": "Restaurante Reyes Magos",
        "cityID": 25
    },
    {
        "id": 512,
        "name": "Bar de copas Luna",
        "cityID": 25
    },
    {
        "id": 513,
        "name": "Bar Sierra Nevada",
        "cityID": 25
    },
    {
        "id": 514,
        "name": "Discoteca Los Santos",
        "cityID": 25
    },
    {
        "id": 515,
        "name": "Restaurante Tacita de plata",
        "cityID": 25
    },
    {
        "id": 516,
        "name": "Discoteca Lords",
        "cityID": 25
    },
    {
        "id": 517,
        "name": "Restaurante Granada",
        "cityID": 25
    },
    {
        "id": 518,
        "name": "Restaurante Par\u00eds",
        "cityID": 26
    },
    {
        "id": 519,
        "name": "Galer\u00eda Las Am\u00e9ricas",
        "cityID": 26
    },
    {
        "id": 520,
        "name": "Bar Vascongadas",
        "cityID": 26
    },
    {
        "id": 521,
        "name": "Club de noche Guacamole",
        "cityID": 26
    },
    {
        "id": 522,
        "name": "Galer\u00eda Fenomenal",
        "cityID": 26
    },
    {
        "id": 523,
        "name": "Bar Lobos",
        "cityID": 26
    },
    {
        "id": 524,
        "name": "Bar Azteca",
        "cityID": 26
    },
    {
        "id": 525,
        "name": "Bar Mare Nostrum",
        "cityID": 26
    },
    {
        "id": 526,
        "name": "Fonda Nunca",
        "cityID": 26
    },
    {
        "id": 527,
        "name": "Restaurante Sombrero",
        "cityID": 26
    },
    {
        "id": 528,
        "name": "Discoteca Buenas",
        "cityID": 26
    },
    {
        "id": 529,
        "name": "Restaurante Raza",
        "cityID": 26
    },
    {
        "id": 530,
        "name": "Discoteca Granada",
        "cityID": 26
    },
    {
        "id": 531,
        "name": "Restaurante Castizo",
        "cityID": 26
    },
    {
        "id": 532,
        "name": "Bar Binvenguts",
        "cityID": 26
    },
    {
        "id": 533,
        "name": "Restaurante Central",
        "cityID": 26
    },
    {
        "id": 534,
        "name": "Bar Ninguno",
        "cityID": 26
    },
    {
        "id": 535,
        "name": "Bar Cul\u00e9",
        "cityID": 26
    },
    {
        "id": 536,
        "name": "Galer\u00eda Luna",
        "cityID": 26
    },
    {
        "id": 537,
        "name": "Bar Reyes Magos",
        "cityID": 26
    },
    {
        "id": 538,
        "name": "Fonda Extravagante",
        "cityID": 26
    },
    {
        "id": 539,
        "name": "Restaurante Ca\u00f1\u00ed",
        "cityID": 26
    },
    {
        "id": 540,
        "name": "Restaurante Andaluc\u00eda",
        "cityID": 27
    },
    {
        "id": 541,
        "name": "Bar de copas Ca\u00f1\u00ed",
        "cityID": 27
    },
    {
        "id": 542,
        "name": "Restaurante Nunca",
        "cityID": 27
    },
    {
        "id": 543,
        "name": "Restaurante Roma",
        "cityID": 27
    },
    {
        "id": 544,
        "name": "Restaurante Sierra Nevada",
        "cityID": 27
    },
    {
        "id": 545,
        "name": "Fonda Pac\u00edfico",
        "cityID": 27
    },
    {
        "id": 546,
        "name": "Bar Buenas",
        "cityID": 27
    },
    {
        "id": 547,
        "name": "Cine Sombrero",
        "cityID": 27
    },
    {
        "id": 548,
        "name": "Cines Nemi",
        "cityID": 27
    },
    {
        "id": 549,
        "name": "Galer\u00eda Lopetegui",
        "cityID": 27
    },
    {
        "id": 550,
        "name": "Bar Raza",
        "cityID": 27
    },
    {
        "id": 551,
        "name": "Restaurante Los Santos",
        "cityID": 27
    },
    {
        "id": 552,
        "name": "Discoteca Chile",
        "cityID": 27
    },
    {
        "id": 553,
        "name": "Bar de copas Los Gatos",
        "cityID": 27
    },
    {
        "id": 554,
        "name": "Bar Tacita de plata",
        "cityID": 27
    },
    {
        "id": 555,
        "name": "Restaurante Fenomenal",
        "cityID": 27
    },
    {
        "id": 556,
        "name": "Restaurante Fuego",
        "cityID": 27
    },
    {
        "id": 557,
        "name": "Bar Furibundo",
        "cityID": 27
    },
    {
        "id": 558,
        "name": "Discoteca Susodicho",
        "cityID": 27
    },
    {
        "id": 559,
        "name": "Restaurante Para\u00edso",
        "cityID": 27
    },
    {
        "id": 560,
        "name": "Cines Azteca",
        "cityID": 27
    },
    {
        "id": 561,
        "name": "Restaurante Amigo",
        "cityID": 27
    },
    {
        "id": 562,
        "name": "Cines Cul\u00e9",
        "cityID": 28
    },
    {
        "id": 563,
        "name": "Cine Londres",
        "cityID": 28
    },
    {
        "id": 564,
        "name": "Bar Estrecho",
        "cityID": 28
    },
    {
        "id": 565,
        "name": "Bar Mare Nostrum",
        "cityID": 28
    },
    {
        "id": 566,
        "name": "Bar Mariachis",
        "cityID": 28
    },
    {
        "id": 567,
        "name": "Bar NoPasar\u00e1n",
        "cityID": 28
    },
    {
        "id": 568,
        "name": "Bar Pac\u00edfico",
        "cityID": 28
    },
    {
        "id": 569,
        "name": "Cine Susodicho",
        "cityID": 28
    },
    {
        "id": 570,
        "name": "Discoteca Lords",
        "cityID": 28
    },
    {
        "id": 571,
        "name": "Restaurante Mediterr\u00e1neo",
        "cityID": 28
    },
    {
        "id": 572,
        "name": "Galer\u00eda Luna",
        "cityID": 28
    },
    {
        "id": 573,
        "name": "Bar Lobos",
        "cityID": 28
    },
    {
        "id": 574,
        "name": "Cine Barna",
        "cityID": 28
    },
    {
        "id": 575,
        "name": "Bar Nemi",
        "cityID": 28
    },
    {
        "id": 576,
        "name": "Discoteca Ninguno",
        "cityID": 28
    },
    {
        "id": 577,
        "name": "Restaurante Sierra Nevada",
        "cityID": 28
    },
    {
        "id": 578,
        "name": "Restaurante Las Am\u00e9ricas",
        "cityID": 28
    },
    {
        "id": 579,
        "name": "Bar Amigo",
        "cityID": 28
    },
    {
        "id": 580,
        "name": "Galer\u00eda Tacita de plata",
        "cityID": 29
    },
    {
        "id": 581,
        "name": "Bar de copas Extravagante",
        "cityID": 29
    },
    {
        "id": 582,
        "name": "Cines Para\u00edso",
        "cityID": 29
    },
    {
        "id": 583,
        "name": "Bar Libertad",
        "cityID": 29
    },
    {
        "id": 584,
        "name": "Restaurante C\u00e1diz",
        "cityID": 29
    },
    {
        "id": 585,
        "name": "Cines Andaluc\u00eda",
        "cityID": 29
    },
    {
        "id": 586,
        "name": "Bar de copas Furibundo",
        "cityID": 29
    },
    {
        "id": 587,
        "name": "Bar Nicaragua",
        "cityID": 29
    },
    {
        "id": 588,
        "name": "Cine Mare Nostrum",
        "cityID": 29
    },
    {
        "id": 589,
        "name": "Bar Mariachis",
        "cityID": 29
    },
    {
        "id": 590,
        "name": "Restaurante Antonia",
        "cityID": 29
    },
    {
        "id": 591,
        "name": "Bar Chile",
        "cityID": 29
    },
    {
        "id": 592,
        "name": "Bar Luna",
        "cityID": 29
    },
    {
        "id": 593,
        "name": "Cine Cul\u00e9",
        "cityID": 29
    },
    {
        "id": 594,
        "name": "Fonda Los Santos",
        "cityID": 29
    },
    {
        "id": 595,
        "name": "Fonda La motosierra",
        "cityID": 29
    },
    {
        "id": 596,
        "name": "Galer\u00eda Atl\u00e1ntico",
        "cityID": 29
    },
    {
        "id": 597,
        "name": "Restaurante Barna",
        "cityID": 29
    },
    {
        "id": 598,
        "name": "Bar Estrella",
        "cityID": 30
    },
    {
        "id": 599,
        "name": "Bar de copas Estrecho",
        "cityID": 30
    },
    {
        "id": 600,
        "name": "Fonda Furibundo",
        "cityID": 30
    },
    {
        "id": 601,
        "name": "Bar Arriba",
        "cityID": 30
    },
    {
        "id": 602,
        "name": "Teatro Tacita de plata",
        "cityID": 30
    },
    {
        "id": 603,
        "name": "Bar Extravagante",
        "cityID": 30
    },
    {
        "id": 604,
        "name": "Galer\u00eda Hasta la Vista",
        "cityID": 30
    },
    {
        "id": 605,
        "name": "Fonda Sombrero",
        "cityID": 30
    },
    {
        "id": 606,
        "name": "Restaurante Buenas",
        "cityID": 30
    },
    {
        "id": 607,
        "name": "Bar M\u00e9xico Lindo",
        "cityID": 30
    },
    {
        "id": 608,
        "name": "Discoteca Los Gatos",
        "cityID": 30
    },
    {
        "id": 609,
        "name": "Cines Fiesta",
        "cityID": 30
    },
    {
        "id": 610,
        "name": "Bar Reyes Magos",
        "cityID": 30
    },
    {
        "id": 611,
        "name": "Bar Binvenguts",
        "cityID": 30
    },
    {
        "id": 612,
        "name": "Galer\u00eda Londres",
        "cityID": 30
    },
    {
        "id": 613,
        "name": "Discoteca Mare Nostrum",
        "cityID": 30
    },
    {
        "id": 614,
        "name": "Bar Andaluc\u00eda",
        "cityID": 30
    },
    {
        "id": 615,
        "name": "Cine Fuego",
        "cityID": 30
    },
    {
        "id": 616,
        "name": "Teatro Catalu\u00f1a",
        "cityID": 30
    },
    {
        "id": 617,
        "name": "Cines Las Am\u00e9ricas",
        "cityID": 30
    },
    {
        "id": 618,
        "name": "Bar de copas Veracruz",
        "cityID": 30
    },
    {
        "id": 619,
        "name": "Restaurante Granada",
        "cityID": 30
    },
    {
        "id": 620,
        "name": "David Caf\u00e9",
        "cityID": 31
    },
    {
        "id": 621,
        "name": "Mind the Gap Hall",
        "cityID": 31
    },
    {
        "id": 622,
        "name": "Poetry Pub",
        "cityID": 31
    },
    {
        "id": 623,
        "name": "The Forest Hall",
        "cityID": 31
    },
    {
        "id": 624,
        "name": "Rocks Pub",
        "cityID": 31
    },
    {
        "id": 625,
        "name": "Daniel Place",
        "cityID": 31
    },
    {
        "id": 626,
        "name": "Troubles Place",
        "cityID": 31
    },
    {
        "id": 627,
        "name": "Moscow Pub",
        "cityID": 31
    },
    {
        "id": 628,
        "name": "Kelly Centre",
        "cityID": 31
    },
    {
        "id": 629,
        "name": "The Lady Bug Cinema",
        "cityID": 31
    },
    {
        "id": 630,
        "name": "Livid Theatre",
        "cityID": 31
    },
    {
        "id": 631,
        "name": "Bourne Gallery",
        "cityID": 31
    },
    {
        "id": 632,
        "name": "Rolling Club",
        "cityID": 31
    },
    {
        "id": 633,
        "name": "Cream Pub",
        "cityID": 31
    },
    {
        "id": 634,
        "name": "Peter & Molly Club",
        "cityID": 31
    },
    {
        "id": 635,
        "name": "William Place",
        "cityID": 31
    },
    {
        "id": 636,
        "name": "Sheriff Caf\u00e9",
        "cityID": 31
    },
    {
        "id": 637,
        "name": "Haggis Cinema",
        "cityID": 31
    },
    {
        "id": 638,
        "name": "Fantastic Pub",
        "cityID": 32
    },
    {
        "id": 639,
        "name": "Winston Hall",
        "cityID": 32
    },
    {
        "id": 640,
        "name": "Troubles Centre",
        "cityID": 32
    },
    {
        "id": 641,
        "name": "Moscow Caf\u00e9",
        "cityID": 32
    },
    {
        "id": 642,
        "name": "Mindless Club",
        "cityID": 32
    },
    {
        "id": 643,
        "name": "Jamaica Caf\u00e9",
        "cityID": 32
    },
    {
        "id": 644,
        "name": "Boomer Pub",
        "cityID": 32
    },
    {
        "id": 645,
        "name": "Alladin Arena",
        "cityID": 32
    },
    {
        "id": 646,
        "name": "Stardust Gallery",
        "cityID": 32
    },
    {
        "id": 647,
        "name": "Royal Nightclub",
        "cityID": 32
    },
    {
        "id": 648,
        "name": "Clapton Club",
        "cityID": 32
    },
    {
        "id": 649,
        "name": "Kelly Comedy Club",
        "cityID": 32
    },
    {
        "id": 650,
        "name": "Adjourned Caf\u00e9",
        "cityID": 32
    },
    {
        "id": 651,
        "name": "Babylon Cinema",
        "cityID": 32
    },
    {
        "id": 652,
        "name": "Cream Club",
        "cityID": 32
    },
    {
        "id": 653,
        "name": "Scotland's Gallery",
        "cityID": 32
    },
    {
        "id": 654,
        "name": "Doodling Caf\u00e9",
        "cityID": 32
    },
    {
        "id": 655,
        "name": "Bourne Club",
        "cityID": 32
    },
    {
        "id": 656,
        "name": "Sabor House",
        "cityID": 32
    },
    {
        "id": 657,
        "name": "The Globe Pub",
        "cityID": 32
    }
];
const COMMENTS_CITY = [
    {
        "id": 0,
        "cityID": 0,
        "alias": "Eleonora",
        "text": "Riktigt fin stad p\u00e5 h\u00f6sten, lagom varmt. ",
        "date": {
            "year": 2018,
            "month": 10,
            "day": 3
        },
        "stars": {
            "out": 3,
            "food": 1,
            "accomodation": 4
        }
    },
    {
        "id": 1,
        "cityID": 0,
        "alias": "Adam",
        "text": "H\u00e4rlig kultur och oslagbar mat - l\u00e4ngtar tillbaka!",
        "date": {
            "year": 2019,
            "month": 12,
            "day": 11
        },
        "stars": {
            "out": 5,
            "food": 5,
            "accomodation": 5
        }
    },
    {
        "id": 2,
        "cityID": 0,
        "alias": "Johannes",
        "text": "Sv\u00e5rt o hitta bra boende men staden \u00e4r oslagbar!",
        "date": {
            "year": 2018,
            "month": 6,
            "day": 23
        },
        "stars": {
            "out": 5,
            "food": 5,
            "accomodation": 1
        }
    },
    {
        "id": 3,
        "cityID": 0,
        "alias": "David Persson",
        "text": "Bra uteliv med god mat och fullt med aktiviteter att g\u00f6ra",
        "date": {
            "year": 2021,
            "month": 4,
            "day": 8
        },
        "stars": {
            "out": 4,
            "food": 4,
            "accomodation": 4
        }
    },
    {
        "id": 4,
        "cityID": 0,
        "alias": "Johan Andersson",
        "text": "Mitt f\u00f6rsta intryck av Madrid \u00e4r att det \u00e4r varmt och gott, det finns m\u00e5nga olika aff\u00e4rer att handla i",
        "date": {
            "year": 2021,
            "month": 5,
            "day": 13
        },
        "stars": {
            "out": 5,
            "food": 5,
            "accomodation": 5
        }
    },
    {
        "id": 5,
        "cityID": 0,
        "alias": "Anna S.",
        "text": "Jag hade ett bra utbytestermin i Madrid och kan rekommendera andra att v\u00e4lja Madrid! Mina klasskamrater och l\u00e4rare var fantastiska",
        "date": {
            "year": 2020,
            "month": 5,
            "day": 19
        },
        "stars": {
            "out": 5,
            "food": 4,
            "accomodation": 4
        }
    },
    {
        "id": 6,
        "cityID": 0,
        "alias": "Gimbap Olsson",
        "text": "Omg det var s\u00e5 kul d\u00e4r! Jag fick v\u00e4nner f\u00f6r livet, \u00e5t v\u00e4rldens b\u00e4sta mat och l\u00e4rde mig s\u00e5 mycket! \u00c5k till Madrid, ni kommer INTE att \u00e5ngra er! :D",
        "date": {
            "year": 2020,
            "month": 1,
            "day": 3
        },
        "stars": {
            "out": 5,
            "food": 5,
            "accomodation": 5
        }
    },
    {
        "id": 7,
        "cityID": 0,
        "alias": "Kristoffer",
        "text": "jag \u00c4LSKAR Madrid! S\u00e5 fin stad och och sjukt god mat p\u00e5 alla restauranger! Hade g\u00e4rna \u00e5kt dit flera g\u00e5nger!",
        "date": {
            "year": 2019,
            "month": 6,
            "day": 13
        },
        "stars": {
            "out": 5,
            "food": 5,
            "accomodation": 2
        }
    },
    {
        "id": 8,
        "cityID": 0,
        "alias": "Peter",
        "text": "Riktigt n\u00f6jd med min resa som helhet d\u00e5 jag l\u00e4rde k\u00e4nna en massa nya v\u00e4nner och l\u00e4rde mig en hel del om mig sj\u00e4lv. Men mitt boende var tyv\u00e4rr inte speciellt bra och jag ins\u00e5g \u00e4ven ganska fort att jag inte tycker om spansk mat, men utelivet \u00e4r d\u00e4remot ON FIRE!!!",
        "date": {
            "year": 2020,
            "month": 1,
            "day": 8
        },
        "stars": {
            "out": 5,
            "food": 1,
            "accomodation": 1
        }
    },
    {
        "id": 9,
        "cityID": 1,
        "alias": "Simon Boscani",
        "text": "Trevlig stad att bo i. \u00c4lskar maten h\u00e4r och det finns m\u00e5nga bra restauranger och caf\u00e9er. ",
        "date": {
            "year": 2020,
            "month": 5,
            "day": 21
        },
        "stars": {
            "out": 3,
            "food": 5,
            "accomodation": 4
        }
    },
    {
        "id": 10,
        "cityID": 1,
        "alias": "Frans Ros\u00e9n",
        "text": "\u00d6ppna och trevliga m\u00e4nniskor. Det \u00e4r v\u00e4ldigt varmt p\u00e5 sommarhalv\u00e5ret och man tar sig enkelt ut till havet med buss. M\u00e5nga mysiga caf\u00e9er!",
        "date": {
            "year": 2018,
            "month": 9,
            "day": 12
        },
        "stars": {
            "out": 2,
            "food": 4,
            "accomodation": 5
        }
    },
    {
        "id": 11,
        "cityID": 1,
        "alias": "Peter Plan",
        "text": "Otrolig fin stad d\u00e4r man har mycket att g\u00f6ra! Maten var supergod, dock var boende inte lika mysig... men det funkade. Hade l\u00e4tt \u00e5kt tillbaka igen. ",
        "date": {
            "year": 2019,
            "month": 4,
            "day": 16
        },
        "stars": {
            "out": 5,
            "food": 4,
            "accomodation": 2
        }
    },
    {
        "id": 12,
        "cityID": 1,
        "alias": "Vita Minwell",
        "text": "Denna staden k\u00e4ndes som en dr\u00f6m! Alla byggnader var s\u00e5\u00e5\u00e5\u00e5 fina och m\u00e4nniskorna var s\u00e5 \u00f6ppna och trevliga. Maten var uts\u00f6kt, boendet var perfekt och utelivet kunde inte varit b\u00e4ttre.  En stad som jag kommer komma tillbaka till igen!",
        "date": {
            "year": 2019,
            "month": 11,
            "day": 29
        },
        "stars": {
            "out": 5,
            "food": 5,
            "accomodation": 5
        }
    },
    {
        "id": 13,
        "cityID": 1,
        "alias": "Rio ",
        "text": "Utelivet var inte s\u00e5 fantastisk som jag f\u00f6rv\u00e4ntade mig. Det finns fina byggnader och s\u00e5dant men efter ett tag blev det tr\u00e5kigt samt repetitiv. Maten var meh och boendet var s\u00e5 ur\u00e5ldrig att det knackade och jag kunde hitta insekter \u00f6verallt. Det var en upplevelse men hade inte velat komma tillbaka. ",
        "date": {
            "year": 2018,
            "month": 1,
            "day": 12
        },
        "stars": {
            "out": 3,
            "food": 2,
            "accomodation": 1
        }
    },
    {
        "id": 14,
        "cityID": 1,
        "alias": "Ella Gourgou",
        "text": "Soliga dagar, otorlig matkultur och massvis av fina parker. Sangrian var fantastisk och jag kommer definitivt \u00e5terv\u00e4nda d\u00e5 folket d\u00e4r \u00e4ven satte sitt avtryck. De \u00e4r hur fina och sn\u00e4lla som helst.",
        "date": {
            "year": 2020,
            "month": 8,
            "day": 18
        },
        "stars": {
            "out": 5,
            "food": 4,
            "accomodation": 3
        }
    },
    {
        "id": 15,
        "cityID": 1,
        "alias": "Indra taleni",
        "text": "Var otroligt facinerad av hur detta folket verkligen tog siesta p\u00e5 allvar. Jag klagar inte, att f\u00e5 en paus mitt p\u00e5 dagen var vad som fick mig att klara av studierna. Hade nog inte \u00e5kt hit annars, men vill absolut \u00e5terv\u00e4nda.",
        "date": {
            "year": 2020,
            "month": 6,
            "day": 9
        },
        "stars": {
            "out": 2,
            "food": 5,
            "accomodation": 2
        }
    },
    {
        "id": 16,
        "cityID": 1,
        "alias": "Johanna Johansson",
        "text": "Supermysig stad d\u00e4r du kan vandra hela dagen och utforska. Det finns m\u00e5nga coola caf\u00e9er som erbjuder god mat och en h\u00e4rlig atmosf\u00e4r. Toppen st\u00e4lle! ",
        "date": {
            "year": 2018,
            "month": 5,
            "day": 1
        },
        "stars": {
            "out": 4,
            "food": 5,
            "accomodation": 4
        }
    },
    {
        "id": 17,
        "cityID": 1,
        "alias": "Maja Svensson",
        "text": "Helt okej st\u00e4lle. Finns inte j\u00e4ttemycket att g\u00f6ra, kanske kul \u00f6ver en weekend men inte l\u00e4ngre \u00e4n s\u00e5. Maten \u00e4r ocks\u00e5 helt okej men skulle nog inte \u00e5ka hit igen. ",
        "date": {
            "year": 2019,
            "month": 11,
            "day": 4
        },
        "stars": {
            "out": 2,
            "food": 2,
            "accomodation": 3
        }
    },
    {
        "id": 18,
        "cityID": 1,
        "alias": "Pablo Emilio Picappi",
        "text": "Sooo hot!! I am really in love with cities that has a sun everyday, every month, every year. Beautiful city, especially for football lovers. ",
        "date": {
            "year": 2019,
            "month": 6,
            "day": 11
        },
        "stars": {
            "out": 5,
            "food": 4,
            "accomodation": 3
        }
    },
    {
        "id": 19,
        "cityID": 1,
        "alias": "Chester Guaveranco",
        "text": "Delicious meal, almost perfect nightlife but mehh hotels. I have say it. I don't like hotels, that is on me. But whether can sometimes be challenging. Very very hot and sweaty.",
        "date": {
            "year": 2020,
            "month": 12,
            "day": 12
        },
        "stars": {
            "out": 5,
            "food": 4,
            "accomodation": 2
        }
    },
    {
        "id": 20,
        "cityID": 2,
        "alias": "Teddy",
        "text": "En vacker stad full av liv och platser att se och mycket turistv\u00e4nlig. Plaza Mayor, universitetet, katedralerna, de s\u00f6ta sm\u00e5 gatorna. Detta \u00e4r en plats som \u00e4r helt v\u00e4rt ett bes\u00f6k.",
        "date": {
            "year": 2020,
            "month": 9,
            "day": 18
        },
        "stars": {
            "out": 5,
            "food": 4,
            "accomodation": 3
        }
    },
    {
        "id": 21,
        "cityID": 2,
        "alias": "William",
        "text": "Staden, f\u00f6rutom att den \u00e4r vacker och full av liv, \u00e4r mycket v\u00e4l underh\u00e5llen och ren. Det kompakta centrumet \u00e4r l\u00e4tt att utforska till fots med \u00f6verraskningar runt varje h\u00f6rn - palats, kyrkor, museer, tv\u00e5 universitet, tv\u00e5 katedraler.",
        "date": {
            "year": 2020,
            "month": 8,
            "day": 11
        },
        "stars": {
            "out": 5,
            "food": 4,
            "accomodation": 4
        }
    },
    {
        "id": 22,
        "cityID": 2,
        "alias": "Kurt",
        "text": "Salamanca har en ganska tr\u00e5kig spansk atmosf\u00e4r och hela staden luktar lite konstigt..  Utelivet va v\u00e4l okej om man gillar att ta ett glas vin vid lunch, men annars fanns inget att g\u00f6ra varken p\u00e5 dagen eller kv\u00e4llen.  ",
        "date": {
            "year": 2020,
            "month": 7,
            "day": 3
        },
        "stars": {
            "out": 2,
            "food": 5,
            "accomodation": 1
        }
    },
    {
        "id": 23,
        "cityID": 2,
        "alias": "Deniz",
        "text": "Otroligt fin stad med floden. Kanske lite f\u00f6r god mat. ",
        "date": {
            "year": 2020,
            "month": 9,
            "day": 30
        },
        "stars": {
            "out": 4,
            "food": 5,
            "accomodation": 3
        }
    },
    {
        "id": 24,
        "cityID": 2,
        "alias": "Chad",
        "text": "Jag trivs h\u00e4r och om jag fick valet skulle jag \u00e5kt hit igen.",
        "date": {
            "year": 2017,
            "month": 6,
            "day": 22
        },
        "stars": {
            "out": 1,
            "food": 3,
            "accomodation": 4
        }
    },
    {
        "id": 25,
        "cityID": 2,
        "alias": "Caroline",
        "text": "H\u00e4ftig stad! S\u00e5 grymt vackra byggnader och som student k\u00e4nner man sig direkt hemma. De flesta studerar h\u00e4r s\u00e5 det k\u00e4ndes l\u00e4tt att passa in och tr\u00e4ffa folk. Trivdes verkligen!",
        "date": {
            "year": 2017,
            "month": 5,
            "day": 21
        },
        "stars": {
            "out": 5,
            "food": 4,
            "accomodation": 3
        }
    },
    {
        "id": 26,
        "cityID": 2,
        "alias": "Kyle",
        "text": "Salamanca was just an ok experience for me. The city was cool and all but the arranged stay was just meh. If you enjoy Spanish food then I'm sure you will like it though. I give it 6\/10.",
        "date": {
            "year": 2018,
            "month": 4,
            "day": 4
        },
        "stars": {
            "out": 5,
            "food": 3,
            "accomodation": 2
        }
    },
    {
        "id": 27,
        "cityID": 2,
        "alias": "Adam Gustavsson",
        "text": "Gillar du att kombinera plugg med fest \u00e4r detta st\u00e4llet f\u00f6r dej! Trivs inte helt med bodentet men det l\u00f6ser vi med att tillbringa mer tid p\u00e5 skolan, caf\u00e9er eller p\u00e5 klubben. Hoppas inte jag skr\u00e4mmer bort n\u00e5gon nu f\u00f6r jag rekommenderar verkligen detta st\u00e4llet!",
        "date": {
            "year": 2017,
            "month": 10,
            "day": 14
        },
        "stars": {
            "out": 5,
            "food": 4,
            "accomodation": 3
        }
    },
    {
        "id": 28,
        "cityID": 3,
        "alias": "Matt Flynn",
        "text": "Paris \u00e4r ett must-go. Allt fr\u00e5n Eifeltornet till Louvre och f\u00e4rska creppe fr\u00e5n gatust\u00e5nd och de sm\u00e5 sidogatorna g\u00f6r att det alltid finns n\u00e5got nytt att uppt\u00e4cka. M\u00e4nniskorna \u00e4r lite snobbiga, men vilka stadsbor \u00e4r inte det liksom. Fick bo r\u00e4tt l\u00e5ngt ifr\u00e5n centrum f\u00f6r det \u00e4r dyrt, s\u00e5 det tog alltid lite tid att pendla in tyv\u00e4rr.",
        "date": {
            "year": 2020,
            "month": 9,
            "day": 26
        },
        "stars": {
            "out": 5,
            "food": 5,
            "accomodation": 3
        }
    },
    {
        "id": 29,
        "cityID": 3,
        "alias": "Einar Olsson ",
        "text": "Fantastisk stad! God mat, bra uteliv men lite d\u00e5ligt med boenden. Hotellen var dyra.",
        "date": {
            "year": 2019,
            "month": 12,
            "day": 1
        },
        "stars": {
            "out": 5,
            "food": 5,
            "accomodation": 3
        }
    },
    {
        "id": 30,
        "cityID": 3,
        "alias": "Danish Dynamite",
        "text": "H\u00e4rlig och sp\u00e4nnande stad med massvis av sev\u00e4rdheter! Maten \u00e4r uts\u00f6kt men oftast ganska dyr. Utelivet \u00e4r n\u00e5got av det b\u00e4sta i Europa.",
        "date": {
            "year": 2019,
            "month": 6,
            "day": 13
        },
        "stars": {
            "out": 5,
            "food": 4,
            "accomodation": 4
        }
    },
    {
        "id": 31,
        "cityID": 3,
        "alias": "Dansken",
        "text": "What a place! So romantic and beautiful! Bring you partner or someone you like and take them for a walk down champs elysee. Drink some wine and enjoy the view!",
        "date": {
            "year": 2018,
            "month": 9,
            "day": 20
        },
        "stars": {
            "out": 5,
            "food": 5,
            "accomodation": 2
        }
    },
    {
        "id": 32,
        "cityID": 3,
        "alias": "London Tipton",
        "text": "En s\u00e5dan fin och romantisk stad. Jag \u00e4lskade att jag kunde se alla ljus i staden fr\u00e5n mitt rum och att det l\u00e5g s\u00e5 centralt. Maten var inte min favorit men inte det \u00e4ckligaste jag har smakat heller.",
        "date": {
            "year": 2017,
            "month": 6,
            "day": 11
        },
        "stars": {
            "out": 5,
            "food": 3,
            "accomodation": 4
        }
    },
    {
        "id": 33,
        "cityID": 3,
        "alias": "Johnny Cash",
        "text": "I love this place. The city of lovers. Everyone should at least visit this place ones in his\/her entire life. ",
        "date": {
            "year": 2020,
            "month": 10,
            "day": 12
        },
        "stars": {
            "out": 4,
            "food": 4,
            "accomodation": 4
        }
    },
    {
        "id": 34,
        "cityID": 4,
        "alias": "Nadya",
        "text": "Min tid i Lyon \u00e4r n\u00e5got jag kommer h\u00e5lla f\u00f6revigt k\u00e4rt. Otroligt vackert med m\u00e5nga mysiga fik l\u00e4ngs med flooden! Boende \u00e4r sv\u00e5rt och dyrt att hitta i centrum, men det var aldrig n\u00e5gra problem med f\u00f6rbindelser in till stan.",
        "date": {
            "year": 2019,
            "month": 6,
            "day": 21
        },
        "stars": {
            "out": 5,
            "food": 4,
            "accomodation": 5
        }
    },
    {
        "id": 35,
        "cityID": 4,
        "alias": "Patrick",
        "text": "Den lokala maten var inget f\u00f6r mig, s\u00e5 det blev v\u00e4ldigt mycket thail\u00e4ndskt och hemmalagat under mitt bes\u00f6k. Men WOW! Pubbar, barer och klubbar vet Lyon hur man levererar. Kan verkligen rekommendera La Faute aux Ours",
        "date": {
            "year": 2018,
            "month": 1,
            "day": 21
        },
        "stars": {
            "out": 5,
            "food": 2,
            "accomodation": 5
        }
    },
    {
        "id": 36,
        "cityID": 4,
        "alias": "Emma",
        "text": "Lyon \u00e4r en stad som ligger i syd\u00f6stra Frankrike. Staden brukar kallas f\u00f6r Frankrikes mathuvudstad av m\u00e5nga mat\u00e4lskare. I denna stad kan du \u00e4ven g\u00e5 och se La Basilique Notre Dame de Fourvi\u00e8re.",
        "date": {
            "year": 2018,
            "month": 5,
            "day": 7
        },
        "stars": {
            "out": 3,
            "food": 5,
            "accomodation": 4
        }
    },
    {
        "id": 37,
        "cityID": 4,
        "alias": "Emelie",
        "text": "Lyon \u00e4r en extremt fin stad med mycket sev\u00e4rdheter och aktiviteter att hitta p\u00e5. D\u00e4r \u00e4r ocks\u00e5 v\u00e4ldigt god lokal mat. ",
        "date": {
            "year": 2019,
            "month": 8,
            "day": 4
        },
        "stars": {
            "out": 4,
            "food": 4,
            "accomodation": 4
        }
    },
    {
        "id": 38,
        "cityID": 4,
        "alias": "Leo",
        "text": "B\u00e4sta jag har varit med om! Klasskamraterna, maten, utelivet var helt fantastiskt och jag l\u00e4ngtar tillbaka! Ni m\u00e5ste plugga i Paris! ",
        "date": {
            "year": 2019,
            "month": 4,
            "day": 15
        },
        "stars": {
            "out": 5,
            "food": 5,
            "accomodation": 5
        }
    },
    {
        "id": 39,
        "cityID": 4,
        "alias": "Sabina",
        "text": "Ganska tr\u00e5kig stad n\u00e4r det kommer till utelivet, men alla mina v\u00e4nner gjorde upplevelsen till den b\u00e4sta trots det. Jag har l\u00e4rt k\u00e4nna en massa nya m\u00e4nniskor och skaffat v\u00e4nner f\u00f6r livet. Och maten i Lyon \u00e4r FANTASTISK!!",
        "date": {
            "year": 2018,
            "month": 11,
            "day": 24
        },
        "stars": {
            "out": 1,
            "food": 5,
            "accomodation": 3
        }
    },
    {
        "id": 40,
        "cityID": 5,
        "alias": "Elin Svensson ",
        "text": "Super god mat! \u00c5k hit om ni vill \u00e4ta god mat",
        "date": {
            "year": 2018,
            "month": 6,
            "day": 20
        },
        "stars": {
            "out": 3,
            "food": 5,
            "accomodation": 3
        }
    },
    {
        "id": 41,
        "cityID": 5,
        "alias": "Louise Karlsson",
        "text": "En helt okej destination att \u00e5ka till. Utelivet var ganska d\u00f6tt",
        "date": {
            "year": 2020,
            "month": 9,
            "day": 1
        },
        "stars": {
            "out": 1,
            "food": 3,
            "accomodation": 3
        }
    },
    {
        "id": 42,
        "cityID": 5,
        "alias": "Sara Andersson ",
        "text": "Otroligt mysig stad men mycket att g\u00f6ra och utforska. Fick l\u00e4tt kompisar via skolan och utbildningen var sp\u00e4nnande och l\u00e4rorik! Rekommenderar verkligen att andra att \u00e5ka hit!",
        "date": {
            "year": 2019,
            "month": 5,
            "day": 10
        },
        "stars": {
            "out": 3,
            "food": 5,
            "accomodation": 4
        }
    },
    {
        "id": 43,
        "cityID": 5,
        "alias": "Edvin Lindblad",
        "text": "En h\u00e4rlig stad med trevliga barer att \u00e4nge med polarna p\u00e5. Plugget \u00e4r roligt och man l\u00e4r k\u00e4nna nya m\u00e4nniskor varje dag. Jag trivs bra h\u00e4r i Toulouse och kan varmt rekommendera detta.",
        "date": {
            "year": 2020,
            "month": 8,
            "day": 27
        },
        "stars": {
            "out": 4,
            "food": 4,
            "accomodation": 4
        }
    },
    {
        "id": 44,
        "cityID": 5,
        "alias": "Bonnie Bennett",
        "text": "Fantastisk stad! Mycket museum och annat fint att se p\u00e5 under sin fritid och mycket restauranger med otrolig mat. Jag bodde lite skramligt men annars superbra.",
        "date": {
            "year": 2020,
            "month": 12,
            "day": 10
        },
        "stars": {
            "out": 5,
            "food": 4,
            "accomodation": 3
        }
    },
    {
        "id": 45,
        "cityID": 5,
        "alias": "Marek Hamsik",
        "text": "Mycket studenter att h\u00e4nga med, fantastiskt fin stad och ett minne f\u00f6r livet att ha varit h\u00e4r. Inget ont att s\u00e4ga om denna fina fina stad. ",
        "date": {
            "year": 2019,
            "month": 5,
            "day": 1
        },
        "stars": {
            "out": 5,
            "food": 5,
            "accomodation": 5
        }
    },
    {
        "id": 46,
        "cityID": 5,
        "alias": "Kalina Kalen",
        "text": "Lagom stor stad vilket gav mig den lugna tillvaron som jag hade hoppats p\u00e5. Fick \u00e4ven chans att studera franska ut\u00f6ver studierna vilket g\u00f6r att jag nu \u00e4ven \u00e4r flerspr\u00e5kig, big thumbs up for this! ",
        "date": {
            "year": 2019,
            "month": 11,
            "day": 25
        },
        "stars": {
            "out": 3,
            "food": 4,
            "accomodation": 5
        }
    },
    {
        "id": 47,
        "cityID": 5,
        "alias": "Josefine",
        "text": "Riktigt n\u00f6jd med mina resa! Det var helt klart den b\u00e4sta perioden i mitt liv!!",
        "date": {
            "year": 2017,
            "month": 2,
            "day": 26
        },
        "stars": {
            "out": 5,
            "food": 3,
            "accomodation": 5
        }
    },
    {
        "id": 48,
        "cityID": 6,
        "alias": "Anton",
        "text": "V\u00e4rldens h\u00e4rligaste v\u00e4der och fransk mat blir ju bara inte fel. Boendet var faktiskt riktigt trevligt och inv\u00e5narna var v\u00e4ldigt schyssta mot mig och min kragliga franska. L\u00e4tt v\u00e4rt ett bes\u00f6k! ",
        "date": {
            "year": 2019,
            "month": 6,
            "day": 3
        },
        "stars": {
            "out": 3,
            "food": 5,
            "accomodation": 5
        }
    },
    {
        "id": 49,
        "cityID": 6,
        "alias": "Rebekka ",
        "text": "Staden \u00e4r helt fantastisk och inv\u00e5narna \u00e4r v\u00e4nliga. Det \u00e4r enkelt att ta sig runt med buss\/t\u00e5g. Finns m\u00e5nga mysiga st\u00e4llen att sitta och plugga.",
        "date": {
            "year": 2018,
            "month": 2,
            "day": 20
        },
        "stars": {
            "out": 4,
            "food": 5,
            "accomodation": 3
        }
    },
    {
        "id": 50,
        "cityID": 8,
        "alias": "Amanda",
        "text": "Sidney var en fantastisk stad att uppleva. Mycket kul att hitta p\u00e5 i denna storstad. H\u00e4r erbjuds mycket god mat och aktiviteter f\u00f6r alla typer av m\u00e4nniskor. Jag fick h\u00e5lla i en aligator!!! Ett tips toalettspindlar \u00e4r tydligen en grej h\u00e4r vilket man m\u00e5ste l\u00e4ra sig att leva med. ",
        "date": {
            "year": 2019,
            "month": 12,
            "day": 14
        },
        "stars": {
            "out": 5,
            "food": 5,
            "accomodation": 2
        }
    },
    {
        "id": 51,
        "cityID": 8,
        "alias": "Allan",
        "text": "Roligt uteliv och v\u00e4ldigt trevliga m\u00e4nniskor!! Dock var boendet riktigt d\u00e5ligt. Det var smutsigt n\u00e4r jag flyttade. Dock kompenserades det upp med alla h\u00e4rliga m\u00e4nniskor jag l\u00e4rt k\u00e4nna!",
        "date": {
            "year": 2009,
            "month": 1,
            "day": 3
        },
        "stars": {
            "out": 4,
            "food": 3,
            "accomodation": 1
        }
    },
    {
        "id": 52,
        "cityID": 8,
        "alias": "Amanda",
        "text": "Wow!! Det b\u00e4sta jag har varit med om!! \u00c4lskar denna staden! Har bara positiva erfarenheter av Sidney! Kulturlivet och museerna var underbara! Kommer definitivt komma tillbaka!",
        "date": {
            "year": 2020,
            "month": 4,
            "day": 7
        },
        "stars": {
            "out": 5,
            "food": 5,
            "accomodation": 5
        }
    },
    {
        "id": 53,
        "cityID": 9,
        "alias": "Adam Levine",
        "text": "Canberra har m\u00e5nga restauranger och klubbar, men ocks\u00e5 m\u00e5nga naturreservat. Mycket att g\u00f6ra! Maten \u00e4r god i stan, men alldeles f\u00f6r varmt att bo i ett rum utan aircondition under sommaren.",
        "date": {
            "year": 2018,
            "month": 11,
            "day": 5
        },
        "stars": {
            "out": 5,
            "food": 4,
            "accomodation": 3
        }
    },
    {
        "id": 54,
        "cityID": 10,
        "alias": "Johanna",
        "text": "\u00c4lskade att bo och studera i London! Bra utbildning och fantastisk stad, h\u00e4r finns allt man kan \u00f6nska",
        "date": {
            "year": 2019,
            "month": 6,
            "day": 23
        },
        "stars": {
            "out": 5,
            "food": 4,
            "accomodation": 3
        }
    },
    {
        "id": 55,
        "cityID": 10,
        "alias": "Krister Davidsson",
        "text": "Att f\u00e5 resa till London har varit en dr\u00f6m och det lever upp till min f\u00f6rv\u00e4ntan. Att f\u00e5 g\u00e5 p\u00e5 sightseeing och l\u00e4ra mig kulturen har varit en otrolig upplevelse",
        "date": {
            "year": 2021,
            "month": 6,
            "day": 11
        },
        "stars": {
            "out": 5,
            "food": 5,
            "accomodation": 5
        }
    },
    {
        "id": 56,
        "cityID": 10,
        "alias": "Melina Samuelsson",
        "text": "Har alltid \u00e4lskat London och terminen h\u00e4r har bara f\u00e5tt mej att \u00e4lska staden \u00e4nnu mer. London har allt och plugget \u00e4r s\u00e5 roligt. har du m\u00f6jlighet bara m\u00e5ste du \u00e5ka hit!",
        "date": {
            "year": 2018,
            "month": 6,
            "day": 19
        },
        "stars": {
            "out": 5,
            "food": 3,
            "accomodation": 4
        }
    },
    {
        "id": 57,
        "cityID": 10,
        "alias": "Saga Nor\u00e9n",
        "text": "Fin stad. Bra hotell. Bra stad om man vill jobba med kriminologi. Tycker om broarna. ",
        "date": {
            "year": 2017,
            "month": 7,
            "day": 4
        },
        "stars": {
            "out": 5,
            "food": 5,
            "accomodation": 5
        }
    },
    {
        "id": 58,
        "cityID": 10,
        "alias": "Martin Rohde",
        "text": "Meget flot by og arkitekturen p\u00e5 alle broer fascinerer mig. Der er flere gode pubber med flere forskellige gode \u00f8l.",
        "date": {
            "year": 2017,
            "month": 4,
            "day": 5
        },
        "stars": {
            "out": 4,
            "food": 3,
            "accomodation": 3
        }
    },
    {
        "id": 59,
        "cityID": 11,
        "alias": "Maja Niklasson",
        "text": "\u00c4r s\u00e5 glad att jag \u00e5kte hit! S\u00e5 vacker stad, trevliga m\u00e4nniskor och s\u00e5 mycket att g\u00f6ra. Rekommenderar varmt!",
        "date": {
            "year": 2019,
            "month": 2,
            "day": 12
        },
        "stars": {
            "out": 5,
            "food": 3,
            "accomodation": 4
        }
    },
    {
        "id": 60,
        "cityID": 11,
        "alias": "Jonas",
        "text": "Manchester en stad fylld med fotboll och massa pubar. Att dricka te och \u00e4ta sju sorters kakor var en fr\u00f6jd. Fotbollen var kul och guinnessen fanns i \u00f6verfl\u00f6d vilket var ett plus. Hade dock \u00f6nskat lite godare mat",
        "date": {
            "year": 2017,
            "month": 1,
            "day": 1
        },
        "stars": {
            "out": 5,
            "food": 2,
            "accomodation": 3
        }
    },
    {
        "id": 61,
        "cityID": 11,
        "alias": "Niklas",
        "text": "Allt som allt en trevlig upplevelse. Jag var inget j\u00e4ttefan av alla fotbollshuliganer men deras fish and chips v\u00e4gde upp f\u00f6r det. Lokala folket var vana vid tursiter och var villiga att hj\u00e4lpa till. Kan absolut rekomendera en resa hit om du vill uppt\u00e4cka n\u00e5got nytt.",
        "date": {
            "year": 2018,
            "month": 12,
            "day": 3
        },
        "stars": {
            "out": 3,
            "food": 3,
            "accomodation": 3
        }
    },
    {
        "id": 62,
        "cityID": 11,
        "alias": "Isabel Eriksson",
        "text": "Manchester \u00e4r det nya London.... Fast billigare. S\u00e5 trevligt att g\u00e5 runt och s\u00e4tta sig p\u00e5 en pub och lyssna p\u00e5 livemusik. Finns alltid n\u00e5got att g\u00f6ra och vill du utforska mer av England \u00e4r det bara en enkel t\u00e5gresa bort. Magiskt! ",
        "date": {
            "year": 2020,
            "month": 4,
            "day": 1
        },
        "stars": {
            "out": 5,
            "food": 3,
            "accomodation": 4
        }
    },
    {
        "id": 63,
        "cityID": 12,
        "alias": "Thea",
        "text": "Mysig stad, denna vackert bevarade medeltida stad \u00e4r ett m\u00e5ste f\u00f6r historieintresserade. Du m\u00e5ste bes\u00f6ka York Minster, York castle museum, Castle Howerd och Shambles!",
        "date": {
            "year": 2019,
            "month": 9,
            "day": 18
        },
        "stars": {
            "out": 3,
            "food": 4,
            "accomodation": 4
        }
    },
    {
        "id": 64,
        "cityID": 12,
        "alias": "Lisen",
        "text": "En stad med mycket liv, p\u00e5 gott och ont. Bra tunnelbanesystem.",
        "date": {
            "year": 2019,
            "month": 3,
            "day": 26
        },
        "stars": {
            "out": 5,
            "food": 4,
            "accomodation": 2
        }
    },
    {
        "id": 65,
        "cityID": 12,
        "alias": "Filippa",
        "text": "Super trevlig stad och trevliga m\u00e4nniskor. Maten var inte min smak alls.. Utelivet var helt okej, v\u00e4ldigt trevliga barer runt om hela staden. ",
        "date": {
            "year": 2018,
            "month": 1,
            "day": 9
        },
        "stars": {
            "out": 5,
            "food": 1,
            "accomodation": 4
        }
    },
    {
        "id": 66,
        "cityID": 13,
        "alias": "Jesse Carmichael",
        "text": "Utelivet \u00e4r ok, det \u00e4r b\u00e4ttre uteliv i Manchester. Min toalett slutade funka efter en vecka och det tog j\u00e4\u00e4\u00e4\u00e4ttel\u00e5ng tid f\u00f6r fastighetssk\u00f6taren att fixa :( Finns m\u00e5nga olika restauranger att uppt\u00e4cka med mycket god mat, men inte allt \u00e4r riktigt min smak.",
        "date": {
            "year": 2019,
            "month": 6,
            "day": 5
        },
        "stars": {
            "out": 3,
            "food": 4,
            "accomodation": 1
        }
    },
    {
        "id": 67,
        "cityID": 13,
        "alias": "James Valentine",
        "text": "\u00c4\u00e4\u00e4\u00e4\u00e4\u00e4\u00e4lskar alla dessa sm\u00e5 pubbar som finns och english breakfast \u00e4r en absolut favorit. Har bott med de mest fantastiska m\u00e4nniskorna ocks\u00e5, absolut rekommenderad stad!",
        "date": {
            "year": 2017,
            "month": 1,
            "day": 2
        },
        "stars": {
            "out": 5,
            "food": 5,
            "accomodation": 5
        }
    },
    {
        "id": 68,
        "cityID": 13,
        "alias": "Danish Dynamite",
        "text": "Mysig stad med m\u00e5nga studenter. Dock ett mindre kul uteliv och mindre intressant mat. ",
        "date": {
            "year": 2021,
            "month": 1,
            "day": 14
        },
        "stars": {
            "out": 2,
            "food": 3,
            "accomodation": 2
        }
    },
    {
        "id": 69,
        "cityID": 13,
        "alias": "Harry Peter",
        "text": "Ahhh, This place is for you who looking for a quite place. I mean yeah, quite places is always nice but I don't know man! Big city",
        "date": {
            "year": 2018,
            "month": 9,
            "day": 8
        },
        "stars": {
            "out": 4,
            "food": 2,
            "accomodation": 3
        }
    },
    {
        "id": 70,
        "cityID": 14,
        "alias": "Bilal",
        "text": "Bath \u00e4r en v\u00e4ldigt vacker stad. Den \u00e4r kompakt och fylld utav romersk arkitektur, vilket g\u00f6r den perfekt f\u00f6r mig som f\u00f6redrar mindre st\u00e4der men \u00e4lskar historia. ",
        "date": {
            "year": 2017,
            "month": 11,
            "day": 22
        },
        "stars": {
            "out": 3,
            "food": 2,
            "accomodation": 5
        }
    },
    {
        "id": 71,
        "cityID": 14,
        "alias": "Linda",
        "text": "Bath \u00e4r en j\u00e4ttefin och mysig stad. Deras mat \u00e4r v\u00e4ldigt god och varierad och det finns mycket roliga aktiviteter att hitta p\u00e5 n\u00e4r man \u00e4r d\u00e4r. ",
        "date": {
            "year": 2017,
            "month": 7,
            "day": 3
        },
        "stars": {
            "out": 4,
            "food": 4,
            "accomodation": 4
        }
    },
    {
        "id": 72,
        "cityID": 14,
        "alias": "Mathilde",
        "text": "Vacker stad med mycket historia, och bra skola!",
        "date": {
            "year": 2021,
            "month": 1,
            "day": 1
        },
        "stars": {
            "out": 3,
            "food": 3,
            "accomodation": 5
        }
    },
    {
        "id": 73,
        "cityID": 15,
        "alias": "Eric Smith",
        "text": "Vacker stad med mycket att g\u00f6ra! Rekommenderar att g\u00e5 ut p\u00e5 deras pubar.",
        "date": {
            "year": 2020,
            "month": 3,
            "day": 14
        },
        "stars": {
            "out": 5,
            "food": 3,
            "accomodation": 4
        }
    },
    {
        "id": 74,
        "cityID": 15,
        "alias": "Elvira Dahlstr\u00f6m",
        "text": "H\u00e4ftig stad med m\u00e5nga gamla hus. Trevliga pubar och sk\u00f6na m\u00e4nniskor!",
        "date": {
            "year": 2017,
            "month": 8,
            "day": 3
        },
        "stars": {
            "out": 4,
            "food": 3,
            "accomodation": 5
        }
    },
    {
        "id": 75,
        "cityID": 15,
        "alias": "Charles Darwin",
        "text": "Otroligt vacker stad med fantastiska vyer var du \u00e4n v\u00e4nder dig. \u00d6len \u00e4r fantastisk och man hittar alltid ett h\u00e4rligt s\u00e4llskap att ta den med. Husen \u00e4r amazing.",
        "date": {
            "year": 2021,
            "month": 1,
            "day": 1
        },
        "stars": {
            "out": 3,
            "food": 3,
            "accomodation": 5
        }
    },
    {
        "id": 76,
        "cityID": 17,
        "alias": "Damir Altonci",
        "text": "Stockholm \u00e4r en fantastisk stad. Men s\u00e5 dyrt det var att leva h\u00e4r, gl\u00f6m inte bort att spara ifall du ska hit. Du kommer absolut inte \u00e5ngra dig. Det finns otroligt m\u00e5nga fina platser att bes\u00f6k runt om staden. Jag \u00e4lskade det!",
        "date": {
            "year": 2018,
            "month": 5,
            "day": 24
        },
        "stars": {
            "out": 4,
            "food": 5,
            "accomodation": 1
        }
    },
    {
        "id": 77,
        "cityID": 18,
        "alias": "Katelyn",
        "text": "I really enjoyed my exchange abroad in Uppsala! Swedish architecture is gorgeous and please don't forget to visit the cathedral. It being kind of a student town was really fun as well, there was lots to do. Highly recommend it! ",
        "date": {
            "year": 2018,
            "month": 12,
            "day": 4
        },
        "stars": {
            "out": 5,
            "food": 3,
            "accomodation": 4
        }
    },
    {
        "id": 78,
        "cityID": 19,
        "alias": "Fredric Pettersson",
        "text": "En v\u00e4ldigt studentv\u00e4nlig stad med mycket att erbjuda! Jag hade en bra utbytestermin i Lund och skulle rekommendera andra att ocks\u00e5 studera d\u00e4r. :)",
        "date": {
            "year": 2019,
            "month": 5,
            "day": 30
        },
        "stars": {
            "out": 4,
            "food": 4,
            "accomodation": 5
        }
    },
    {
        "id": 79,
        "cityID": 24,
        "alias": "Linda L\u00f6fberg",
        "text": "Kan verkligen s\u00e4ga att det var en otroligt unik upplevelse att f\u00e5 \u00e5ka hit. Alla \u00e4r hj\u00e4lpsamma och trevliga och det \u00e4r en plats jag definitivt kommer \u00e5ka tillbaka till i framtiden. Helt otroligt!!",
        "date": {
            "year": 2019,
            "month": 10,
            "day": 10
        },
        "stars": {
            "out": 5,
            "food": 5,
            "accomodation": 5
        }
    },
    {
        "id": 80,
        "cityID": 26,
        "alias": "Danish Dynamite",
        "text": "Magisk stad! Om du har chansen m\u00e5ste du ta dig till Golden Gate Park, s\u00e5 himla fint!",
        "date": {
            "year": 2018,
            "month": 5,
            "day": 13
        },
        "stars": {
            "out": 4,
            "food": 4,
            "accomodation": 5
        }
    },
    {
        "id": 81,
        "cityID": 26,
        "alias": "Chris P. Bacon",
        "text": "Min f\u00f6rsta g\u00e5ng i san francisco, det \u00e4r smutsigt, folket \u00e4r otrevliga. Men det finns mycket att g\u00f6ra, tonvis med resturanger och aktiviteter. ",
        "date": {
            "year": 2020,
            "month": 12,
            "day": 9
        },
        "stars": {
            "out": 2,
            "food": 2,
            "accomodation": 2
        }
    },
    {
        "id": 82,
        "cityID": 27,
        "alias": "Pontus",
        "text": "Washington \u00e4r huvudstaden i USA. Det \u00e4r en stad med mycket sev\u00e4rdheter. D\u00e4r finns det mycket god och olika sorters mat att v\u00e4lja p\u00e5. ",
        "date": {
            "year": 2019,
            "month": 2,
            "day": 5
        },
        "stars": {
            "out": 5,
            "food": 4,
            "accomodation": 3
        }
    },
    {
        "id": 83,
        "cityID": 28,
        "alias": "Albin",
        "text": "H\u00e4r finns ett fantastiskt utbud av unik kultur, av mat fr\u00e5n v\u00e4rldens alla h\u00f6rn, prisv\u00e4rd shopping och speciell arkitektur. Staden \u00e4r som flera st\u00e4der i en, uppbyggd av folk fr\u00e5n hela v\u00e4rlden. ",
        "date": {
            "year": 2018,
            "month": 9,
            "day": 18
        },
        "stars": {
            "out": 5,
            "food": 5,
            "accomodation": 5
        }
    },
    {
        "id": 84,
        "cityID": 28,
        "alias": "Barney Stinson",
        "text": "B\u00e4sta staden i hela v\u00e4rlden. Inte haft tr\u00e5kigt en sekund sen jag kom hit, njuter dag in och dag ut. Restauranger \u00f6verallt, klubbar vid varje h\u00f6rn och boende i den coolaste staden.",
        "date": {
            "year": 2019,
            "month": 6,
            "day": 13
        },
        "stars": {
            "out": 5,
            "food": 5,
            "accomodation": 5
        }
    },
    {
        "id": 85,
        "cityID": 29,
        "alias": "Ivanhoe",
        "text": "Livlig storstad med bra studentliv och uteliv. Inte s\u00e5 m\u00e5nga restauranger som erbjuder vegansk mat. Finns mycket aktiviteter f\u00f6rdes v\u00e5ghalsige. ",
        "date": {
            "year": 2019,
            "month": 4,
            "day": 5
        },
        "stars": {
            "out": 4,
            "food": 3,
            "accomodation": 4
        }
    },
    {
        "id": 86,
        "cityID": 30,
        "alias": "Stefan",
        "text": "Atlanta var en v\u00e4ldigt trevlig stad att bo i. En liten storstad d\u00e4r det finns n\u00e5got f\u00f6r alla. Om du f\u00e5r chansen se till att g\u00e5 med i ett frat house f\u00f6r att ta det av studentlivet. Allt som allt en v\u00e4ldigt rolig upplevelse.",
        "date": {
            "year": 2019,
            "month": 11,
            "day": 11
        },
        "stars": {
            "out": 4,
            "food": 4,
            "accomodation": 2
        }
    },
    {
        "id": 87,
        "cityID": 31,
        "alias": "Jon",
        "text": "H\u00e4ftig milj\u00f6 och h\u00e4rligt varmt v\u00e4der. Allt annat var okej, maten var god men inte fantastisk. Boendet var ocks\u00e5 helt okej.",
        "date": {
            "year": 2012,
            "month": 4,
            "day": 1
        },
        "stars": {
            "out": 3,
            "food": 3,
            "accomodation": 3
        }
    }
];


const DB = {
    COUNTRIES,
    CITIES,
    UNIVERSITIES,
    PROGRAMMES,
    FIELDS,
    LANGUAGES,
    LEVELS,
    CLUBS,
    ENTERTAINMENT_PLACES,
    COMMENTS_PROGRAMME,
    COMMENTS_CITY
};

