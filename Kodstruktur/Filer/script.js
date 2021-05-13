"use strict";

const RANDOM = {
    rInt: (max, min = 0) => Math.floor(min + (max - min)* Math.random()),
    rFloat: (max, min = 0) => min + (max - min)* Math.random(),
    coin: () => Math.random() > .5,
    array: function(a) { 
        return a[this.rInt(a.length)] },
};



const nImagesNormalCountries = [6, 6, 2, 6, 6, 4, 6, 4, 4];
const COUNTRIES = [
    {
        id: 0,
        name: "Spain",
        visa: false,
        languageID: 0,
        flag: "spain.png",
        text: "Spanien är ett land och en medlemsstat i Europeiska unionen belägen i sydvästra Europa på Iberiska halvön. Dess fastland gränsar i söder och öster till Medelhavet förutom en liten landgräns med det brittiska utomeuropeiska territoriet Gibraltar, i norr av Frankrike, Andorra och Biscayabukten samt i nordväst och väster av Atlanten och Portugal."
    },
    {
        id: 1,
        name: "France",
        visa: false,
        languageID: 2,
        flag: "france.png",
        text: "Frankrike är ett mycket spännande land som har en stolt och intressant historia. Det är ett av världens mest populära turistländer, då det finns många områden som är värda att besöka. Det är heller inte alls konstigt att förstå varför Frankrike håller sig i turisttoppen år efter år."
    },
    {
        id: 2,
        name: "Australia",
        visa: false,
        languageID: 1,
        flag: "australia.png",
        text: "Australien är ett land på södra halvklotet bestående av fastlandet kontinenten Australien, ön Tasmanien samt ett antal mindre öar i Indiska oceanen och Stilla havet. Idag är Australien ett modernt industri- och tjänstesamhälle. Politiskt har landet sedan andra världskriget varit en nära allierad till USA. Det är världens sjätte största land har en yta som är 17 gånger större än Sveriges."
    },
    {
        id: 3,
        name: "United Kingdom",
        visa: false,
        languageID: 1,
        flag: "uk.png",
        text: "Storbritannien, formellt Förenade konungariket Storbritannien och Nordirland med kortform Förenade kungariket, är en suverän stat som består av öar belägna vid den nordvästra kusten av den europeiska kontinenten. Landet omfattar ön Storbritannien, den nordöstra delen av ön Irland och många mindre öar."
    },
    {
        id: 4,
        name: "Sweden",
        visa: false,
        languageID: 3,
        flag: "sweden.png",
        text: "Sverige benämns formellt Konungariket Sverige är en konstitutionell monarki på Skandinaviska halvön i Nordeuropa. Sverige har landgräns i väst med Norge, i nordost med Finland samt angränsande territorialvatten till Norge i västsydväst, Danmark i sydväst och Finland i öst. Sverige är en konstitutionell monarki med parlamentarisk demokrati och utvecklad ekonomi. Landet är medlem i Förenta nationerna sedan november 1946 och Europeiska unionen sedan den 1 januari 1995."
    },
    {
        id: 8,
        name: "Chile",
        visa: true,
        languageID: 0,
        flag: "chile.png",
        text: "Chile är det längsta landet i världen som sträcker sig från norr till söder i en smal remsa. Republiken Chile (dess officiella namn) har en befolkning på 19,7 miljoner människor (2021). Huvudstaden och största staden är Santiago (Santiago de Chile). Det nationella språket är spanska."
    },
    {
        id: 5,
        name: "Mexico",
        visa: true,
        languageID: 0,
        flag: "mexico.png",
        text: "Mexiko är en federal konstitutionell republik i Nordamerika. Landet gränsar i norr till USA, i söder och väster till Stilla havet, i sydöst till Guatemala, Belize, Karibiska havet och i öster till Mexikanska golfen. Folkmängden uppgick till cirka 123 miljoner invånare 2016, vilket gör Mexiko till det folkrikaste spansktalande området på jorden."
    },
    {
        id: 6,
        name: "USA",
        visa: true,
        languageID: 1,
        flag: "usa.png",
        text: "Amerikas förenta stater är en federal republik som består av 50 delstater, ett federalt distrikt och ett flertal olika självstyrande områden. Med 9,83 miljoner km2 och med över 328 miljoner invånare är USA det tredje största landet till total yta, och det tredje största till total befolkning. USA är en av världens mest etniskt blandade och mångkulturella nationer, på grund av storskalig invandring från många länder."
    },
    {
        id: 7,
        name: "Argentina",
        visa: true,
        languageID: 0,
        flag: "argentina.png",
        text: "Argentina är det näst största landet i Sydamerika, bildat som en federation av 23 provinser och en självständig stad vid namn Buenos Aires. Argentina är det åttonde största landet i världen till ytan och är befolkningsmässigt den fjärde största spansktalande nationen efter Mexiko, Colombia och Spanien. Det är även världens största spanskspråkiga stat sett till ytan."
    }
].map( (country, index) => {

    let imagesNormal = [];
    let imagesBig = [];

    for (let i = 0; i < nImagesNormalCountries[index]; i++) {
        let fileName = `${country.name.toLowerCase()}_normal_${i+1}.jpg`
        imagesNormal.push(fileName);
        insertImage(`${fileName}`);
    }
    for (let i = 0; i < nImagesNormalCountries[index]/2; i++) {
        let fileName = `${country.name.toLowerCase()}_big_${i+1}.jpg`
        imagesBig.push(fileName);
        insertImage(`${fileName}`);
    }

    return {
        ...country,
        imagesNormal,
        imagesBig
    }

});


const TEXT_COUNTRIES = [
    [0, "Spanien är ett land och en medlemsstat i Europeiska unionen belägen i sydvästra Europa på Iberiska halvön. Dess fastland gränsar i söder och öster till Medelhavet förutom en liten landgräns med det brittiska utomeuropeiska territoriet Gibraltar, i norr av Frankrike, Andorra och Biscayabukten samt i nordväst och väster av Atlanten och Portugal."],
    [1, "Frankrike är ett mycket spännande land som har en stolt och intressant historia. Det är ett av världens mest populära turistländer, då det finns många områden som är värda att besöka. Det är heller inte alls konstigt att förstå varför Frankrike håller sig i turisttoppen år efter år."],
    [2, "Australien är ett land på södra halvklotet bestående av fastlandet kontinenten Australien, ön Tasmanien samt ett antal mindre öar i Indiska oceanen och Stilla havet. Idag är Australien ett modernt industri- och tjänstesamhälle. Politiskt har landet sedan andra världskriget varit en nära allierad till USA. Det är världens sjätte största land har en yta som är 17 gånger större än Sveriges."],
    [3, "Storbritannien, formellt Förenade konungariket Storbritannien och Nordirland med kortform Förenade kungariket, är en suverän stat som består av öar belägna vid den nordvästra kusten av den europeiska kontinenten. Landet omfattar ön Storbritannien, den nordöstra delen av ön Irland och många mindre öar."],
    [4, "Sverige benämns formellt Konungariket Sverige är en konstitutionell monarki på Skandinaviska halvön i Nordeuropa. Sverige har landgräns i väst med Norge, i nordost med Finland samt angränsande territorialvatten till Norge i västsydväst, Danmark i sydväst och Finland i öst. Sverige är en konstitutionell monarki med parlamentarisk demokrati och utvecklad ekonomi. Landet är medlem i Förenta nationerna sedan november 1946 och Europeiska unionen sedan den 1 januari 1995."],
    [5, "Mexiko är en federal konstitutionell republik i Nordamerika. Landet gränsar i norr till USA, i söder och väster till Stilla havet, i sydöst till Guatemala, Belize, Karibiska havet och i öster till Mexikanska golfen. Folkmängden uppgick till cirka 123 miljoner invånare 2016, vilket gör Mexiko till det folkrikaste spansktalande området på jorden."],
    [6, "Amerikas förenta stater är en federal republik som består av 50 delstater, ett federalt distrikt och ett flertal olika självstyrande områden. Med 9,83 miljoner km2 och med över 328 miljoner invånare är USA det tredje största landet till total yta, och det tredje största till total befolkning. USA är en av världens mest etniskt blandade och mångkulturella nationer, på grund av storskalig invandring från många länder."],
    [7, "Argentina är det näst största landet i Sydamerika, bildat som en federation av 23 provinser och en självständig stad vid namn Buenos Aires. Argentina är det åttonde största landet i världen till ytan och är befolkningsmässigt den fjärde största spansktalande nationen efter Mexiko, Colombia och Spanien. Det är även världens största spanskspråkiga stat sett till ytan."],
    [8, "Chile är det längsta landet i världen som sträcker sig från norr till söder i en smal remsa. Republiken Chile (dess officiella namn) har en befolkning på 19,7 miljoner människor (2021). Huvudstaden och största staden är Santiago (Santiago de Chile). Det nationella språket är spanska."]
];
const LANGUAGES = [
    {
        id: 0,
        name: "Spanish",
        flag: "spain.png"
    },
    {
        id: 1,
        name: "English",
        flag: "uk.png"
    },
    {
        id: 2,
        name: "French",
        flag: "france.png"
    },
    {
        id: 3,
        name: "Swedish",
        flag: "sweden.png"
    }
];
const LEVELS = ["Bachelor", "Master", "Doctorate"];
const FIELDS = [
    {
        id: 0,
        name: "Matematik",
        description: "Mathematics includes the study of such topics as quantity, structure, space, and change. It has no generally accepted definition. Mathematicians seek and use patterns to formulate new conjectures; they resolve the truth or falsity of such by mathematical proof."
    },
    {
        id: 1,
        name: "Teknik",
        description: "Engineering is the use of scientific principles to design and build machines, structures, and other items, including bridges, tunnels, roads, vehicles, and buildings. The discipline of engineering encompasses a broad range of more specialized fields of engineering, each with a more specific emphasis on particular areas of applied mathematics, applied science, and types of application."
    },
    {
        id: 2,
        name: "Juridik",
        description: "Law is a system of rules created and enforced through social or governmental institutions to regulate behavior, with its precise definition a matter of longstanding debate. It has been variously described as a science and the art of justice."
    },
    {
        id: 3,
        name: "Medicin",
        description: "Medicine is the art, science, and practice of caring for a patient and managing the diagnosis, prognosis, prevention, treatment or palliation of their injury or disease. Medicine encompasses a variety of health care practices evolved to maintain and restore health by the prevention and treatment of illness."
    },
    {
        id: 4,
        name: "Sociologi",
        description: "Sociology is the study of society, human social behaviour, patterns of social relationships, social interaction, and culture that surrounds everyday life. It is a social science that uses various methods of empirical investigation and critical analysis to develop a body of knowledge about social order and social change."
    },
    {
        id: 5,
        name: "Filosofi",
        description: "Philosophy is the study of general and fundamental questions, such as those about reason, existence, knowledge, values, mind, and language. Such questions are often posed as problems to be studied or resolved. The term was probably coined by Pythagoras."
    },
    {
        id: 6,
        name: "Design",
        description: "Design is an academic discipline that pursues a critical understanding of design and its effects through analytical and practical modes of inquiry. Its origins can be traced to design history where the field first got its start before slowly expanding to include larger themes and more varied subject matters."
    }
].map( f => {
    delete(f.description);
    return f;
});
const TEXT_CITIES = [
    [0, 'Madrid är Spaniens huvudstad och den största staden på Iberiska halvön. Med sina 3,2 miljoner invånare i kommunen, och 6 miljoner i storstadsområdet, är Madrid en av de folkrikaste städerna inom EU. Madrid är beläget på vänstra stranden av Manzanares, ett litet tillflöde till Tajos biflod Jarama.'],
    [1, 'Sevilla är Spaniens fjärde största stad med 1,3 miljoner invånare i storstadsområdet. Staden grundades av romarna och är fylld av gammal charm och historia, här finns bland annat Cristopher Columbus grav. Staden ligger i södra Spanien och är av de varmaste i landet med en årlig dygnsmedeltemperatur på 18,6 °C.'],
    [2, 'Salamanca är en stad i västra delen av Spanien. Staden är belägen i provinsen Kastilien och Leon och avståndet till huvudstaden Madrid (och därmed närmaste stora flygplats Barajas) är ungefär 21 mil. Själva staden har 154 000 invånare, medan regionen har ett invånarantal på 354 000. Salamanca är en genuin universitetsstad där ca 20% av alla invånare är studerande.'],
    [3, 'Paris besöks årligen av cirka 30 miljoner utländska turister. År 2019 rankades staden som den andra mest besökta i världen, efter Bangkok. Populära turistattraktioner är bland annat Eiffeltornet, Notre-Dame, Sacré-Cœur, Louvren, Triumfbågen och Champs-Élysées.'],
    [4, 'Lyon är en stad och kommun i Métropole de Lyon och är huvudstad i regionen Auvergne-Rhône-Alpes i sydöstra Frankrike. År 2017 hade Lyon 516 092 invånare, vilket gör den till Frankrikes tredje största stad efter Paris och Marseille. Lyons storstadsområde med förorter utgör med sina 2 214 068 invånare Frankrikes näst största storstadsområde efter Paris.'],
    [5, 'Toulouse är en storstad belägen i södra Frankrike vid floden Garonne. Toulouse är känt som den rosa staden (la ville rose) eftersom de flesta äldre byggnader är byggda av ett lokalt producerat tegel som är rosa. Staden är även en stor universitetsstad med mer än 100 000 studenter. Tolouse erjbuder allt från cassoulet och fina japanska trädgårdar till romerska museum.'],
    [6, 'Nice är en stad belägen i sydöstra Frankrike, i regionen Provence-Alpes-Côte dAzur vid Medelhavskusten och Franska rivieran. Nice är en stor turiststad. Den ligger vid Franska rivieran och har en stor mängd solturister från både Frankrike och andra länder.'],
    [7, 'Melbourne är en hamnstad i sydöstra Australien och huvudstad i den australiska delstaten Victoria. Det är Australiens näst största stad med drygt 4,4 miljoner invånare (2015). Melbourne var huvudstad i Australien från 1 januari 1901, då federationen bildades, fram till 9 maj 1927 då parlamentshuset i Canberra togs i bruk. Staden genomkorsas av floden Yarra.'],
    [8, 'Sydney är Australiens största stad och ligger på landets östkust. Ungefär 4,3 miljoner människor bor i området. Det är det sköna vädret, arkitekturen och det unika hamnområdet som gjort staden populär. Fler än 2,5 miljoner turister besöker årligen Sydney, och det är just i hamnområdet som besökare flockas. Där finns stora turistattraktioner, så som det världsberömda operahuset och hamnens iögonfallande hängbro.'],
    [9, 'Canberra är Australiens huvudstad. Den är belägen på federalt territorium, Australian Capital Territory (ACT). Staden har drygt 350 000 invånare (2009) och är Australiens åttonde största stad samt den största stad som inte ligger vid kusten. Området Canberra byggdes på och området runt staden består av en blandning av eukalyptussavann, öppna gräsmarker, buskmarker, träskmarker och torra eukalyptusskogar.'],
    [10, 'Det här är inte bara vilken storstad som helst, London är Europas största metropol med en unik personlighet formad av sina ikoniska landmärken, århundraden av historia och sin trendiga mode-, konst- och matkultur. Staden är på en och samma gång väldigt brittisk och samtidigt internationellt och londonborna är lika bekväma med att diskutera vädret som de senaste trenderna med pop-up restauranger och lokalbryggd öl. '],
    [11, 'En av juvelerna i norra Englands krona är Manchester. Det är en levande stad med karaktär, känd för sin lättsamma humor och sitt överflöd av kultur. Här finns ett rikt kulturliv, bra mat- och dryckeskultur, och staden är lika stolt över sin musikscen som sina fotbollslag.'],
    [12, 'York är en stad och distriktshuvudort i North Yorkshire. Den ligger i enhetskommun York och riksdelen norra England, i den centrala delen av landet, 280 km norr om huvudstaden London. York ligger 17 meter över havet och antalet invånare är 144 202.'],
    [13, 'Sheffield är en storstad i Sheffield i South Yorkshire, England. Den har fått sitt namn efter floden Sheaf som flyter genom staden. Orten har 518 090 invånare. Från att huvudsakligen ha varit en industristad har staden utvecklat en bredare ekonomisk bas och är en av de åtta största engelska städerna utanför London. Storstadsområdet (Sheffield Urban Area) har 640 720 invånare.'],
    [14, 'Bath är en stad i grevskapet Somerset i sydvästra England, Storbritannien. Staden grundades i floden Avons dalar runt naturliga heta källor där romarna byggde bad och ett tempel, vilket gav staden dess dåvarande namn, Aquae Sulis. Edgar kröntes till kung av England i Baths klosterkyrka år 973. Genom sina badanläggningar blev staden ett populärt resmål under den georgianska eran.'],
    [15, 'Edinburgh har en sällsynt charm med smala och kullerstensgångar, som kallas stänger på skotska. Staden är också känd för sina mörka hörn där skrämmande händelser har ägt rum, dess majestätiska byggnader, otaliga fascinerande museer som är fria att besöka och särskilt stadens snälla och öppna lokalbefolkningen. Alla ovan nämnda gör denna stad till en favorit bland dem som har besökt den.'],
    [16, 'Gröna parker och sandstränder i kombination med en rik kultur, historia och modern konst – i Malmö kan du gå din egen väg, bokstavligt talat. Från den livliga, centrala shoppingdelen är det bara en kort promenad till pittoreska gamla stan och Malmöhus slott. Därifrån kan du enkelt fortsätta till den moderna västra hamnen och njuta av utsikten över Öresundsbron och Turning Torso. Och i Malmö älskar man mat, dryck och trevligt sällskap, så du är aldrig långt från en bra restaurang eller ett mysigt kafé.'],
    [17, 'Stockholm är Sveriges huvudstad samt landets kulturella, politiska, mediala och ekonomiska centrum. Staden ligger vid Mälarens utlopp i Östersjön, på gränsen mellan landskapen Södermanland och Uppland. Staden är världens femte nordligaste huvudstad bland självständiga stater. '],
    [18, 'Uppsala är en tätort i Uppland, centralort i Uppsala kommun och residensstad för Uppsala län. Den är Sveriges fjärde största tätort med en befolkning på 165 456 invånare (2020), medan hela kommunen har cirka 234 000 invånare (2020). Sedan 1164 är Uppsala kyrkligt centrum i Sverige i och med dess ärkebiskopssäte inom Svenska kyrkan. Uppsala universitet, grundat 1477, är det äldsta sätet för högre utbildning i Norden.'],
    [19, 'Lunds cirka 50 000 svenska och internationella studenter ger staden en särskild puls. Lunds universitet är internationellt hyllat för sin forskning och sociala verksamhet. Några av Sveriges bästa skådespelare, komiker och musiker kommer från Lund. Håll utkik efter de många publika studenttraditionerna, som studentsångarnas konsert 1 maj och Lund Comedy Festival.'],
    [20, 'Santiago de Chile, oftast kallat enbart Santiago, är Chiles huvudstad. Själva kommunen har endast cirka 400 000 invånare, medan hela storstadsområdet omfattar lite fler än 6 miljoner invånare.'],
    [21, 'Valparaíso är en stad i centrala Chile, och är huvudort för en region samt en provins med samma namn. Den år en av Chiles viktigaste hamnstäder vid Stilla havets kust, och är belägen i den centrala delen av landet, två timmars bilfärd nordväst om huvudstaden Santiago. Folkmängden uppgår till cirka 250 000 invånare. Under kolonialtiden förblev Valparaíso en by med ett fåtal hus och en kyrka, men efter Chiles självständighet 1817 blev staden den chilenska flottans första hamn och en port till frihandel.'],
    [22, 'Guadalajara är en stad och kommun i västra Mexiko och är den administrativa huvudorten för delstaten Jalisco. Den är landets tredje största stad (efter Mexico City och Ecatepec de Morelos) och utgör det näst största storstadsområdet, bara Mexico City är större.'],
    [23, 'Mexico DF är Mexicos huvudstad och har circa 21 miljoner invånare i storstadsområdet vilket gör staden till en av de folkrikaste i världen. Huvudstaden är det viktigaste ekonomiska, industriella och kulturella centret i landet. Staden ligger i ett område präglat av 3 000 år gammal pre-columbiansk kultur. Själva stadens historia går dock bara tillbaka till perioden motsvarande europeisk medeltid. På grund av höjden över havet har Mexico City ett behagligt subtropiskt höglandsklimat. Endast mellan april och juni blir det mycket varmt mitt på dagen, tidvis över 30 °C, resten av året ligger dagstemperaturen runt 20 °C, något lägre vintertid, något högre sommartid.'],
    [24, 'Oaxaca är en delstat i sydvästra Mexiko, gränsande till Stilla havet i söder. Oaxaca är hemtrakt för bland annat urfolken mixtekerna och zapotekerna, men totalt finns det 16 erkända urfolk i regionen. Tack vare områdets karga och avskärmande terräng har urfolkens kultur i större utsträckning överlevt här, jämfört med andra delar av Mexiko. I Oaxaca finns det rika arkeologiska och historiska platser, som t.ex. Monte Albán och Mitla.'],
    [25, 'Boston är huvudstad i delstaten Massachusetts i USA. Boston är den mest befolkade staden i delstaten, och den största i regionen New England. År 2005 hade staden 596 638 invånare, vilket gör det till USA:s elfte största storstadsområde. Invånarna i Boston kallas på engelska Bostonians.'],
    [26, 'San Francisco officiellt City and County of San Francisco är en stad i norra Kalifornien i USA. Staden ligger på änden av en halvö mellan Stilla havet och San Franciscobukten. Det egentliga San Francisco har omkring en miljon invånare, men staden fungerar som nav för området runt bukten (vilket även innefattar städer som San Jose och Oakland) och i området bor det cirka 8,4 miljoner människor.'],
    [27, 'Washington, D.C. är huvudstaden i USA. Här kan du hitta Vita huset, Washinton Monument och Lincoln Memorial. För den kulturellt intresserade är staden även full av konstgallerior och National Gallery of Art. I Washington återfinns traditioner och etniciteter från världen över, så att hitta god mat blir inga problem!'],
    [28, 'New York är ansedd som en världsstad med ett starkt globalt inflytande inom ekonomi, massmedia, politik, utbildning, underhållning och mode. Det är världens ledande finansiella centrum och huserar även FN:s högkvarter i stadsdelen Manhattan. Invånarna kallas "New Yorkers". New Yorks mest kända smeknamn är The Big Apple och har även kallats "staden som aldrig sover".'],
    [29, 'Buffalo är den näst största staden i delstaten New York med en yta av 136,0 km² och en befolkning som uppgår till cirka 285 000 (2003). Den är belägen vid östra änden av Lake Erie vid utloppet i Niagarafloden. Buffalos närmaste stora grannstad är Toronto i Kanada. Buffalo är administrativ huvudort (county seat) i Erie County. Storstadsområdet Buffalo–Niagara Falls har 1 135 509 invånare (2010).'],
    [30, 'Atlanta är delstaten Georgias största stad och tillika huvudstad. Staden grundades redan på 1800-talet, och det finns därför många historiskt intressanta byggnader och platser att besöka i staden. Landskapet som Atlanta ligger i är mycket vacker, och omgivningarna är mycket trevliga. Landskapet är böljande med många kullar, och täckt av en fantastisk skog.'],
    [31, 'Buenos Aires är sedan 1880 huvudstad i republiken Argentina. Staden är belägen vid Río de la Platas södra strand och har cirka 2,9 miljoner invånare samt 12,8 miljoner invånare i storstadsområdet. Stadens centrum utgörs av ett eget federalt distrikt (egentligen autonom stad, ciudad autónoma) som omges av provinsen Buenos Aires, vars huvudort La Plata ligger söder om Buenos Aires. Buenos Aires betyder ungefär "Den goda luften" eller "De goda vindarna".'],
    [32, 'Córdoba är en stad och kommun i regionen Andalusien i södra Spanien. Den ligger cirka 130 kilometer norr om turistområdet Costa del Sol. Folkmängden uppgår till cirka 300 000 invånare. Córdoba är en industristad med livsmedels-, metall- och kemisk industri. Staden är också bekant för sitt konsthantverk med rötter i den moriska tiden – bland annat filigranarbeten i silver och speciell keramik.'],
    [33, 'London är Englands och även Storbritanniens huvudstad. Staden är idag störst i Europa till folkmängden och uppstiger till närmare 8 miljoner invånare i de centrala delarna. Staden grundades år 43 efter Kristus och hette från början Londinium då det var romarna som styrde över landet vid denna tid.']
];
const nImagesNormalCities = [4, 4, 4, 4, 4, 4, 2, 2, 4, 2, 4, 4, 2, 4, 2, 2, 2, 4, 4, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2];
const CITIES = [
    {
        id: 0,
        name: "Madrid",
        countryID: 0,
        sun: 305,
    },
    {
        id: 1,
        name: "Sevilla",
        countryID: 0,
        sun: 310,
    },
    {
        id: 2,
        name: "Salamanca",
        countryID: 0,
        sun: 280,
    },
    {
        id: 3,
        name: "Paris",
        countryID: 1,
        sun: 222,
    },
    {
        id: 4,
        name: "Lyon",
        countryID: 1,
        sun: 220,
    },
    {
        id: 5,
        name: "Toulouse",
        countryID: 1,
        sun: 287,
    },
    {
        id: 6,
        name: "Nice",
        countryID: 1,
        sun: 312,
    },
    {
        id: 7,
        name: "Melbourne",
        countryID: 2,
        sun: 270,
    },
    {
        id: 8,
        name: "Sidney",
        countryID: 2,
        sun: 310,
    },
    {
        id: 9,
        name: "Canberra",
        countryID: 2,
        sun: 290,
    },
    {
        id: 10,
        name: "London",
        countryID: 3,
        sun: 150,
    },
    {
        id: 11,
        name: "Manchester",
        countryID: 3,
        sun: 120,
    },
    {
        id: 12,
        name: "York",
        countryID: 3,
        sun: 140,
    },
    {
        id: 13,
        name: "Sheffield",
        countryID: 3,
        sun: 150,
    },
    {
        id: 14,
        name: "Bath",
        countryID: 3,
        sun: 100,
    },
    {
        id: 15,
        name: "Edinburgh",
        countryID: 3,
        sun: 50,
    },
    {
        id: 16,
        name: "Malmo",
        countryID: 4,
        sun: 150,
    },
    {
        id: 17,
        name: "Stockholm",
        countryID: 4,
        sun: 150,
    },
    {
        id: 18,
        name: "Uppsala",
        countryID: 4,
        sun: 120,
    },
    {
        id: 19,
        name: "Lund",
        countryID: 4,
        sun: 150,
    },
    {
        id: 20,
        name: "Santiago",
        countryID: 8,
        sun: 290,
    },
    {
        id: 21,
        name: "Valparaiso",
        countryID: 8,
        sun: 300,
    },
    {
        id: 22,
        name: "Guadalajara",
        countryID: 5,
        sun: 260,
    },
    {
        id: 23,
        name: "Mexico City",
        countryID: 5,
        sun: 304,
    },
    {
        id: 24,
        name: "Oaxaca",
        countryID: 5,
        sun: 300,
    },
    {
        id: 25,
        name: "Boston",
        countryID: 6,
        sun: 140,
    },
    {
        id: 26,
        name: "San Francisco",
        countryID: 6,
        sun: 160,
    },
    {
        id: 27,
        name: "Washington",
        countryID: 6,
        sun: 203,
    },
    {
        id: 28,
        name: "New York",
        countryID: 6,
        sun: 135,
    },
    {
        id: 29,
        name: "Buffalo",
        countryID: 6,
        sun: 250,
    },
    {
        id: 30,
        name: "Atlanta",
        countryID: 6,
        sun: 150,
    },
    {
        id: 31,
        name: "Buenos Aires",
        countryID: 7,
        sun: 205,
    },
    {
        id: 32,
        name: "Cordoba",
        countryID: 7,
        sun: 320,
    },
].map(c => {
    return {
        ...c,
        text: TEXT_CITIES.find( t => t[0] === c.id )[1]
    };
}).map( (city, index) => {

    let imagesNormal = [];
    let imagesBig = [];

    for (let i = 0; i < nImagesNormalCities[index]; i++) {
        let fileName = `${city.name.toLowerCase()}_normal_${i+1}.jpg`
        imagesNormal.push(fileName);
        insertImage(`${fileName}`);
    }
    for (let i = 0; i < nImagesNormalCities[index]/2; i++) {
        let fileName = `${city.name.toLowerCase()}_big_${i+1}.jpg`
        imagesBig.push(fileName);
        insertImage(`${fileName}`);
    }

    return {
        ...city,
        imagesNormal,
        imagesBig
    }

});
const COMMENTS_CITY = [
    ["0", "Eleonora", "3", "1", "4", "Riktigt fin stad på hösten, lagom varmt. ", "2018-10-03"],
    ["0", "Adam", "5", "5", "5", "Härlig kultur och oslagbar mat - längtar tillbaka!", "2019-12-11"],
    ["0", "Johannes", "5", "5", "1", "Svårt o hitta bra boende men staden är oslagbar!", "2018-06-23"],
    ["0", "David Persson", "4", "4", "4", "Bra uteliv med god mat och fullt med aktiviteter att göra", "2021-04-08"],
    ["0", "Johan Andersson", "5", "5", "5", "Mitt första intryck av Madrid är att det är varmt och gott, det finns många olika affärer att handla i", "2021-05-13"],
    ["0", "Anna S.", "5", "4", "4", "Jag hade ett bra utbytestermin i Madrid och kan rekommendera andra att välja Madrid! Mina klasskamrater och lärare var fantastiska", "2020-05-19"],
    ["0", "Gimbap Olsson", "5", "5", "5", "Omg det var så kul där! Jag fick vänner för livet, åt världens bästa mat och lärde mig så mycket! Åk till Madrid, ni kommer INTE att ångra er! :D", "2020-01-03"],
    ["0", "Kristoffer", "5", "5", "2", "jag ÄLSKAR Madrid! Så fin stad och och sjukt god mat på alla restauranger! Hade gärna åkt dit flera gånger!", "2019-06-13"],
    ["0", "Peter", "5", "1", "1", "Riktigt nöjd med min resa som helhet då jag lärde känna en massa nya vänner och lärde mig en hel del om mig själv. Men mitt boende var tyvärr inte speciellt bra och jag insåg även ganska fort att jag inte tycker om spansk mat, men utelivet är däremot ON FIRE!!!", "2020-01-08"],
    ["1", "Simon Boscani", "3", "5", "4", "Trevlig stad att bo i. Älskar maten här och det finns många bra restauranger och caféer. ", "2020-05-21"],
    ["1", "Frans Rosén", "2", "4", "5", "Öppna och trevliga människor. Det är väldigt varmt på sommarhalvåret och man tar sig enkelt ut till havet med buss. Många mysiga caféer!", "2018-09-12"],
    ["1", "Peter Plan", "5", "4", "2", "Otrolig fin stad där man har mycket att göra! Maten var supergod, dock var boende inte lika mysig... men det funkade. Hade lätt åkt tillbaka igen. ", "2019-04-16"],
    ["1", "Vita Minwell", "5", "5", "5", "Denna staden kändes som en dröm! Alla byggnader var såååå fina och människorna var så öppna och trevliga. Maten var utsökt, boendet var perfekt och utelivet kunde inte varit bättre.  En stad som jag kommer komma tillbaka till igen!", "2019-11-29"],
    ["1", "Rio ", "3", "2", "1", "Utelivet var inte så fantastisk som jag förväntade mig. Det finns fina byggnader och sådant men efter ett tag blev det tråkigt samt repetitiv. Maten var meh och boendet var så uråldrig att det knackade och jag kunde hitta insekter överallt. Det var en upplevelse men hade inte velat komma tillbaka. ", "2018-01-12"],
    ["1", "Ella Gourgou", "5", "4", "3", "Soliga dagar, otorlig matkultur och massvis av fina parker. Sangrian var fantastisk och jag kommer definitivt återvända då folket där även satte sitt avtryck. De är hur fina och snälla som helst.", "2020-08-18"],
    ["1", "Indra taleni", "2", "5", "2", "Var otroligt facinerad av hur detta folket verkligen tog siesta på allvar. Jag klagar inte, att få en paus mitt på dagen var vad som fick mig att klara av studierna. Hade nog inte åkt hit annars, men vill absolut återvända.", "2020-06-09"],
    ["1", "Johanna Johansson", "4", "5", "4", "Supermysig stad där du kan vandra hela dagen och utforska. Det finns många coola caféer som erbjuder god mat och en härlig atmosfär. Toppen ställe! ", "2018-05-01"],
    ["1", "Maja Svensson", "2", "2", "3", "Helt okej ställe. Finns inte jättemycket att göra, kanske kul över en weekend men inte längre än så. Maten är också helt okej men skulle nog inte åka hit igen. ", "2019-11-04"],
    ["1", "Pablo Emilio Picappi", "5", "4", "3", "Sooo hot!! I am really in love with cities that has a sun everyday, every month, every year. Beautiful city, especially for football lovers. ", "2019-06-11"],
    ["1", "Chester Guaveranco", "5", "4", "2", "Delicious meal, almost perfect nightlife but mehh hotels. I have say it. I don't like hotels, that is on me. But whether can sometimes be challenging. Very very hot and sweaty.", "2020-12-12"],
    ["2", "Teddy", "5", "4", "3", "En vacker stad full av liv och platser att se och mycket turistvänlig. Plaza Mayor, universitetet, katedralerna, de söta små gatorna. Detta är en plats som är helt värt ett besök.", "2020-09-18"],
    ["2", "William", "5", "4", "4", "Staden, förutom att den är vacker och full av liv, är mycket väl underhållen och ren. Det kompakta centrumet är lätt att utforska till fots med överraskningar runt varje hörn - palats, kyrkor, museer, två universitet, två katedraler.", "2020-08-11"],
    ["2", "Kurt", "2", "5", "1", "Salamanca har en ganska tråkig spansk atmosfär och hela staden luktar lite konstigt..  Utelivet va väl okej om man gillar att ta ett glas vin vid lunch, men annars fanns inget att göra varken på dagen eller kvällen.  ", "2020-07-03"],
    ["2", "Deniz", "4", "5", "3", "Otroligt fin stad med floden. Kanske lite för god mat. ", "2020-09-30"],
    ["2", "Chad", "1", "3", "4", "Jag trivs här och om jag fick valet skulle jag åkt hit igen.", "2017-06-22"],
    ["2", "Caroline", "5", "4", "3", "Häftig stad! Så grymt vackra byggnader och som student känner man sig direkt hemma. De flesta studerar här så det kändes lätt att passa in och träffa folk. Trivdes verkligen!", "2017-05-21"],
    ["2", "Kyle", "5", "3", "2", "Salamanca was just an ok experience for me. The city was cool and all but the arranged stay was just meh. If you enjoy Spanish food then I'm sure you will like it though. I give it 6/10.", "2018-04-04"],
    ["2", "Adam Gustavsson", "5", "4", "3", "Gillar du att kombinera plugg med fest är detta stället för dej! Trivs inte helt med bodentet men det löser vi med att tillbringa mer tid på skolan, caféer eller på klubben. Hoppas inte jag skrämmer bort någon nu för jag rekommenderar verkligen detta stället!", "2017-10-14"],
    ["3", "Matt Flynn", "5", "5", "3", "Paris är ett must-go. Allt från Eifeltornet till Louvre och färska creppe från gatustånd och de små sidogatorna gör att det alltid finns något nytt att upptäcka. Människorna är lite snobbiga, men vilka stadsbor är inte det liksom. Fick bo rätt långt ifrån centrum för det är dyrt, så det tog alltid lite tid att pendla in tyvärr.", "2020-09-26"],
    ["3", "Einar Olsson ", "5", "5", "3", "Fantastisk stad! God mat, bra uteliv men lite dåligt med boenden. Hotellen var dyra.", "2019-12-01"],
    ["3", "Danish Dynamite", "5", "4", "4", "Härlig och spännande stad med massvis av sevärdheter! Maten är utsökt men oftast ganska dyr. Utelivet är något av det bästa i Europa.", "2019-06-13"],
    ["3", "Dansken", "5", "5", "2", "What a place! So romantic and beautiful! Bring you partner or someone you like and take them for a walk down champs elysee. Drink some wine and enjoy the view!", "2018-09-20"],
    ["3", "London Tipton", "5", "3", "4", "En sådan fin och romantisk stad. Jag älskade att jag kunde se alla ljus i staden från mitt rum och att det låg så centralt. Maten var inte min favorit men inte det äckligaste jag har smakat heller.", "2017-06-11"],
    ["3", "Johnny Cash", "4", "4", "4", "I love this place. The city of lovers. Everyone should at least visit this place ones in his/her entire life. ", "2020-10-12"],
    ["4", "Nadya", "5", "4", "5", "Min tid i Lyon är något jag kommer hålla förevigt kärt. Otroligt vackert med många mysiga fik längs med flooden! Boende är svårt och dyrt att hitta i centrum, men det var aldrig några problem med förbindelser in till stan.", "2019-06-21"],
    ["4", "Patrick", "5", "2", "5", "Den lokala maten var inget för mig, så det blev väldigt mycket thailändskt och hemmalagat under mitt besök. Men WOW! Pubbar, barer och klubbar vet Lyon hur man levererar. Kan verkligen rekommendera La Faute aux Ours", "2018-01-21"],
    ["4", "Emma", "3", "5", "4", "Lyon är en stad som ligger i sydöstra Frankrike. Staden brukar kallas för Frankrikes mathuvudstad av många matälskare. I denna stad kan du även gå och se La Basilique Notre Dame de Fourvière.", "2018-05-07"],
    ["4", "Emelie", "4", "4", "4", "Lyon är en extremt fin stad med mycket sevärdheter och aktiviteter att hitta på. Där är också väldigt god lokal mat. ", "2019-08-04"],
    ["4", "Leo", "5", "5", "5", "Bästa jag har varit med om! Klasskamraterna, maten, utelivet var helt fantastiskt och jag längtar tillbaka! Ni måste plugga i Paris! ", "2019-04-15"],
    ["4", "Sabina", "1", "5", "3", "Ganska tråkig stad när det kommer till utelivet, men alla mina vänner gjorde upplevelsen till den bästa trots det. Jag har lärt känna en massa nya människor och skaffat vänner för livet. Och maten i Lyon är FANTASTISK!!", "2018-11-24"],
    ["5", "Elin Svensson ", "3", "5", "3", "Super god mat! Åk hit om ni vill äta god mat", "2018-06-20"],
    ["5", "Louise Karlsson", "1", "3", "3", "En helt okej destination att åka till. Utelivet var ganska dött", "2020-09-01"],
    ["5", "Sara Andersson ", "3", "5", "4", "Otroligt mysig stad men mycket att göra och utforska. Fick lätt kompisar via skolan och utbildningen var spännande och lärorik! Rekommenderar verkligen att andra att åka hit!", "2019-05-10"],
    ["5", "Edvin Lindblad", "4", "4", "4", "En härlig stad med trevliga barer att änge med polarna på. Plugget är roligt och man lär känna nya människor varje dag. Jag trivs bra här i Toulouse och kan varmt rekommendera detta.", "2020-08-27"],
    ["5", "Bonnie Bennett", "5", "4", "3", "Fantastisk stad! Mycket museum och annat fint att se på under sin fritid och mycket restauranger med otrolig mat. Jag bodde lite skramligt men annars superbra.", "2020-12-10"],
    ["5", "Marek Hamsik", "5", "5", "5", "Mycket studenter att hänga med, fantastiskt fin stad och ett minne för livet att ha varit här. Inget ont att säga om denna fina fina stad. ", "2019-05-01"],
    ["5", "Kalina Kalen", "3", "4", "5", "Lagom stor stad vilket gav mig den lugna tillvaron som jag hade hoppats på. Fick även chans att studera franska utöver studierna vilket gör att jag nu även är flerspråkig, big thumbs up for this! ", "2019-11-25"],
    ["5", "Josefine", "5", "3", "5", "Riktigt nöjd med mina resa! Det var helt klart den bästa perioden i mitt liv!!", "2017-02-26"],
    ["6", "Anton", "3", "5", "5", "Världens härligaste väder och fransk mat blir ju bara inte fel. Boendet var faktiskt riktigt trevligt och invånarna var väldigt schyssta mot mig och min kragliga franska. Lätt värt ett besök! ", "2019-06-03"],
    ["6", "Rebekka ", "4", "5", "3", "Staden är helt fantastisk och invånarna är vänliga. Det är enkelt att ta sig runt med buss/tåg. Finns många mysiga ställen att sitta och plugga.", "2018-02-20"],
    ["8", "Amanda", "5", "5", "2", "Sidney var en fantastisk stad att uppleva. Mycket kul att hitta på i denna storstad. Här erbjuds mycket god mat och aktiviteter för alla typer av människor. Jag fick hålla i en aligator!!! Ett tips toalettspindlar är tydligen en grej här vilket man måste lära sig att leva med. ", "2019-12-14"],
    ["8", "Allan", "4", "3", "1", "Roligt uteliv och väldigt trevliga människor!! Dock var boendet riktigt dåligt. Det var smutsigt när jag flyttade. Dock kompenserades det upp med alla härliga människor jag lärt känna!", "2009-01-03"],
    ["8", "Amanda", "5", "5", "5", "Wow!! Det bästa jag har varit med om!! Älskar denna staden! Har bara positiva erfarenheter av Sidney! Kulturlivet och museerna var underbara! Kommer definitivt komma tillbaka!", "2020-04-07"],
    ["9", "Adam Levine", "5", "4", "3", "Canberra har många restauranger och klubbar, men också många naturreservat. Mycket att göra! Maten är god i stan, men alldeles för varmt att bo i ett rum utan aircondition under sommaren.", "2018-11-05"],
    ["10", "Johanna", "5", "4", "3", "Älskade att bo och studera i London! Bra utbildning och fantastisk stad, här finns allt man kan önska", "2019-06-23"],
    ["10", "Krister Davidsson", "5", "5", "5", "Att få resa till London har varit en dröm och det lever upp till min förväntan. Att få gå på sightseeing och lära mig kulturen har varit en otrolig upplevelse", "2021-06-11"],
    ["10", "Melina Samuelsson", "5", "3", "4", "Har alltid älskat London och terminen här har bara fått mej att älska staden ännu mer. London har allt och plugget är så roligt. har du möjlighet bara måste du åka hit!", "2018-06-19"],
    ["10", "Saga Norén", "5", "5", "5", "Fin stad. Bra hotell. Bra stad om man vill jobba med kriminologi. Tycker om broarna. ", "2017-07-04"],
    ["10", "Martin Rohde", "4", "3", "3", "Meget flot by og arkitekturen på alle broer fascinerer mig. Der er flere gode pubber med flere forskellige gode øl.", "2017-04-05"],
    ["11", "Maja Niklasson", "5", "3", "4", "Är så glad att jag åkte hit! Så vacker stad, trevliga människor och så mycket att göra. Rekommenderar varmt!", "2019-02-12"],
    ["11", "Jonas", "5", "2", "3", "Manchester en stad fylld med fotboll och massa pubar. Att dricka te och äta sju sorters kakor var en fröjd. Fotbollen var kul och guinnessen fanns i överflöd vilket var ett plus. Hade dock önskat lite godare mat", "2017-01-01"],
    ["11", "Niklas", "3", "3", "3", "Allt som allt en trevlig upplevelse. Jag var inget jättefan av alla fotbollshuliganer men deras fish and chips vägde upp för det. Lokala folket var vana vid tursiter och var villiga att hjälpa till. Kan absolut rekomendera en resa hit om du vill upptäcka något nytt.", "2018-12-03"],
    ["11", "Isabel Eriksson", "5", "3", "4", "Manchester är det nya London.... Fast billigare. Så trevligt att gå runt och sätta sig på en pub och lyssna på livemusik. Finns alltid något att göra och vill du utforska mer av England är det bara en enkel tågresa bort. Magiskt! ", "2020-04-01"],
    ["12", "Thea", "3", "4", "4", "Mysig stad, denna vackert bevarade medeltida stad är ett måste för historieintresserade. Du måste besöka York Minster, York castle museum, Castle Howerd och Shambles!", "2019-09-18"],
    ["12", "Lisen", "5", "4", "2", "En stad med mycket liv, på gott och ont. Bra tunnelbanesystem.", "2019-03-26"],
    ["12", "Filippa", "5", "1", "4", "Super trevlig stad och trevliga människor. Maten var inte min smak alls.. Utelivet var helt okej, väldigt trevliga barer runt om hela staden. ", "2018-01-09"],
    ["13", "Jesse Carmichael", "3", "4", "1", "Utelivet är ok, det är bättre uteliv i Manchester. Min toalett slutade funka efter en vecka och det tog jäääättelång tid för fastighetsskötaren att fixa :( Finns många olika restauranger att upptäcka med mycket god mat, men inte allt är riktigt min smak.", "2019-06-05"],
    ["13", "James Valentine", "5", "5", "5", "Ääääääälskar alla dessa små pubbar som finns och english breakfast är en absolut favorit. Har bott med de mest fantastiska människorna också, absolut rekommenderad stad!", "2017-01-02"],
    ["13", "Danish Dynamite", "2", "3", "2", "Mysig stad med många studenter. Dock ett mindre kul uteliv och mindre intressant mat. ", "2021-01-14"],
    ["13", "Harry Peter", "4", "2", "3", "Ahhh, This place is for you who looking for a quite place. I mean yeah, quite places is always nice but I don't know man! Big city", "2018-09-08"],
    ["14", "Bilal", "3", "2", "5", "Bath är en väldigt vacker stad. Den är kompakt och fylld utav romersk arkitektur, vilket gör den perfekt för mig som föredrar mindre städer men älskar historia. ", "2017-11-22"],
    ["14", "Linda", "4", "4", "4", "Bath är en jättefin och mysig stad. Deras mat är väldigt god och varierad och det finns mycket roliga aktiviteter att hitta på när man är där. ", "2017-07-03"],
    ["14", "Mathilde", "3", "3", "5", "Vacker stad med mycket historia, och bra skola!", "2021-01-01"],
    ["15", "Eric Smith", "5", "3", "4", "Vacker stad med mycket att göra! Rekommenderar att gå ut på deras pubar.", "2020-03-14"],
    ["15", "Elvira Dahlström", "4", "3", "5", "Häftig stad med många gamla hus. Trevliga pubar och sköna människor!", "2017-08-03"],
    ["15", "Charles Darwin", "3", "3", "5", "Otroligt vacker stad med fantastiska vyer var du än vänder dig. Ölen är fantastisk och man hittar alltid ett härligt sällskap att ta den med. Husen är amazing.", "2021-01-01"],
    ["17", "Damir Altonci", "4", "5", "1", "Stockholm är en fantastisk stad. Men så dyrt det var att leva här, glöm inte bort att spara ifall du ska hit. Du kommer absolut inte ångra dig. Det finns otroligt många fina platser att besök runt om staden. Jag älskade det!", "2018-05-24"],
    ["18", "Katelyn", "5", "3", "4", "I really enjoyed my exchange abroad in Uppsala! Swedish architecture is gorgeous and please don't forget to visit the cathedral. It being kind of a student town was really fun as well, there was lots to do. Highly recommend it! ", "2018-12-04"],
    ["19", "Fredric Pettersson", "4", "4", "5", "En väldigt studentvänlig stad med mycket att erbjuda! Jag hade en bra utbytestermin i Lund och skulle rekommendera andra att också studera där. :)", "2019-05-30"],
    ["24", "Linda Löfberg", "5", "5", "5", "Kan verkligen säga att det var en otroligt unik upplevelse att få åka hit. Alla är hjälpsamma och trevliga och det är en plats jag definitivt kommer åka tillbaka till i framtiden. Helt otroligt!!", "2019-10-10"],
    ["26", "Danish Dynamite", "4", "4", "5", "Magisk stad! Om du har chansen måste du ta dig till Golden Gate Park, så himla fint!", "2018-05-13"],
    ["26", "Chris P. Bacon", "2", "2", "2", "Min första gång i san francisco, det är smutsigt, folket är otrevliga. Men det finns mycket att göra, tonvis med resturanger och aktiviteter. ", "2020-12-09"],
    ["27", "Pontus", "5", "4", "3", "Washington är huvudstaden i USA. Det är en stad med mycket sevärdheter. Där finns det mycket god och olika sorters mat att välja på. ", "2019-02-05"],
    ["28", "Albin", "5", "5", "5", "Här finns ett fantastiskt utbud av unik kultur, av mat från världens alla hörn, prisvärd shopping och speciell arkitektur. Staden är som flera städer i en, uppbyggd av folk från hela världen. ", "2018-09-18"],
    ["28", "Barney Stinson", "5", "5", "5", "Bästa staden i hela världen. Inte haft tråkigt en sekund sen jag kom hit, njuter dag in och dag ut. Restauranger överallt, klubbar vid varje hörn och boende i den coolaste staden.", "2019-06-13"],
    ["29", "Ivanhoe", "4", "3", "4", "Livlig storstad med bra studentliv och uteliv. Inte så många restauranger som erbjuder vegansk mat. Finns mycket aktiviteter fördes våghalsige. ", "2019-04-05"],
    ["30", "Stefan", "4", "4", "2", "Atlanta var en väldigt trevlig stad att bo i. En liten storstad där det finns något för alla. Om du får chansen se till att gå med i ett frat house för att ta det av studentlivet. Allt som allt en väldigt rolig upplevelse.", "2019-11-11"],
    ["31", "Jon", "3", "3", "3", "Häftig miljö och härligt varmt väder. Allt annat var okej, maten var god men inte fantastisk. Boendet var också helt okej.", "2012-04-01"]
].map((c, id) => {
    return {
        id,
        cityID: parseInt(c[0]),
        alias: c[1],
        text: c[5],
        date: dateConverter(c[6]),
        stars: {
            out: parseInt(c[2]),
            food: parseInt(c[3]),
            accomodation: parseInt(c[4]),
        }
    }
});
const _COMMENTS_PROGRAMME = [
    ["PJ Morton", "3", "5", "4", "Vi var en blandad grupp med olika intressen, men vi hittade på en massa kul tillsammans! Kursen i sig var bra, men tyckte lärarna var lite tråkiga för de bara pratade typ", "2017-06-03"],
    ["Sam Farrar", "5", "5", "5", "Exakt som jag tänkt mig! Superengagerade lärare, fick lära mig jättemycket på vägen och vi hade jättekul som klass också, har absolut hittat vänner för livet här!", "2021-02-05"],
    ["Ryan Dusick", "1", "3", "1", "Totalt värdelöst, läraren var sjuk hälften av tiden, jag lärde mig nästan inget under kursen och mina klasskamrater höll sig mest till sig själv.", "2017-01-01"],
    ["Mickey Madden", "5", "5", "2", "Kursutbudet var inte så stort som jag hade hoppats, men lärarna var alla supertrevliga och engagerade, lärde mig ändå mycket. Har träffat en massa härliga människor på vägen också :)", "2018-10-23"],
    ["William B", "5", "5", "5", "Programmet var otroligt bra. Varje vecka var intressant och utmanande på ett perfekt sätt. Lärarna var fantastiska - förklarade allt väldigt bra.", "2019-04-16"],
    ["Stella ", "1", "4", "2", "Programmet liknar inte vad jag förväntade mig alls. Tråkiga föreläsningar och läraren var dåligt på att förklara så jag fattade ingenting och lärde mig inget.", "2019-09-19"],
    ["Noah B", "5", "5", "5", "Superbra program! Otroligt duktiga, kompetenta och pedagogiska lärare. Strukturerad undervisning. Fantastiska lokaler! Jag va alltid taggad på att gå till skolan. jag rekommenderar!", "2018-09-19"],
    ["Maja K", "3", "5", "4", "Väldigt lärorikt, jag har lärt mig väldigt mycket. Duktiga lärare. Programmet var exakt så som jag förväntade mig. Dåliga lokaler dock, inte alls mysigt.", "2020-08-18"],
    ["Mario", "3", "4", "5", "Lektionerna var superlärorika men om man missade en var det kört!! Inga presentationer läggs ut efteråt se till att vara på plats!", "2020-04-18"],
    ["Emanuel", "4", "2", "4", "Läraren är superengagerad och intresserad av ämnet, dessvärre kan hen prata i timmar om en punkt så det har hänt att vi hamnat efter i schemat. Bortsett från det är lokalerna helt nyrenoverade och najsiga!", "2017-11-06"],
    ["Vilma", "5", "5", "5", "Best class ever. Vi hade bra kontakt med varandra och med läraren, så det uppstod inga problem hursomhelst. Sorgligt att skiljas åt och åka hem.", "2020-12-26"],
    ["Anna Ekdahl", "4", "5", "4", "Super nöjd med detta program! Mycket lärorikt och nya vänner för livet.", "2020-06-20"],
    ["Saga Bok ", "2", "3", "2", "Saknade hemuniversitet och trivdes inte så bra.", "2018-03-13"],
    ["Liam Lion ", "5", "5", "5", "Jag hade the time of my life!! Rekommenderar alla att åka på ett utbytesår", "2019-12-30"],
    ["Rey", "4", "2", "3", "Lokalerna ligger nära en park så hur trevligt som helst att plugga detta programmet. Superintressanta kurser och alla verkade vara lika taggade inför att lära sig.", "2019-03-18"],
    ["Henrik Ark ", "4", "5", "3", "Lärorikt och ett minne för livet!", "2019-01-01"],
    ["Carla Stenlund", "4", "5", "3", "Bästa tiden i mitt liv! Även om kurserna kunde varit bättre lyfte lärarna och klasskompisarna detta till det bästa jag någonsin gjort. Har fått vänner och minnen för livet!", "2019-03-07"],
    ["Vera Olausen", "2", "5", "4", "Bra program, som tyvärr drogs ner lite av att lärarna var dåliga på att ge information om kursen. Jag har dock fått lära känna så många fantastiska människor!", "2019-07-22"],
    ["Josef Gahnman", "4", "4", "4", "Intressanta kurser, bra lärare och trevliga klasskompisar. Bara bra helt enkelt! Rekommenderar starkt!", "2020-10-11"],
    ["Oscar", "4", "5", "4", "Programet var super bra och väldigt lärorikt! Det var också riktigt kul att få så många nya vänner från klassen. Lärarna var också riktigt bra och gjorde lektionerna väldigt underhållande!", "2019-03-09"],
    ["Amanda", "3", "5", "3", "Programmet var inte som jag hade föreställt mig. Lärarna pratade väldigt mycket under långa lektioner och det blev väldigt tröttsamt. Utöver det så var klasskamraterna riktigt härliga och fina personer som gjorde studierna lättare. ", "2017-05-06"],
    ["Peter ", "5", "5", "5", "Väldigt bra och roligt program! Det var en bra variation mellan praktiska och teoretiska lektioner. Lärarna var också väldigt engagerade och hjälpsamma. ", "2020-10-10"],
    ["Adam", "4", "4", "4", "Intressant program med varierat innehåll. Man fick lära sig otroligt mycket nya saker. Klasskompisarna var roliga att hänga med och lärarna var bra!", "2017-08-15"],
    ["Amanda", "5", "5", "5", "SÅ bra och intressant kurs med jättebralärare!", "2020-01-02"],
    ["Tara", "3", "4", "4", "Kursen hade kunnat vara så rolig men tyvärr var lärarna dålig och jätteostrukturerade.", "2020-12-18"],
    ["Elsa", "5", "3", "3", "Bra och engagerade lärare, me väldig stressig kurs och alldeles för mycket litteratur", "2017-12-31"],
    ["Ivar", "1", "2", "3", "Aldrig haft en tråkigare lärare, klassen var minst lika tråkig....välj inte denna!", "2018-02-07"],
    ["Nico", "5", "5", "2", "Bra program men inget jag egentligen va speciellt inresserad av. Klasskamraterna var riktigt najs och lärarna med och vi gick alla och käka lunch tillsammans efter morgninglektionerna ibland.", "2019-11-24"],
    ["Astrid", "3", "4", "5", "lärarna var inget utmärkande och inte klasskamraterna heller. Jag lärde mig vääldigt mycket av programmer och ämnet va superintressant.Tråkigt att lämna, men nu ska jag läsa en fortsättningskurs här hemma.", "2020-07-24"],
    ["Alena", "5", "3", "5", "Asså denna är den roligaste och bäästa kursen jag någonsin läsa. Lärarna e skit bra och lär ut AMAZING. Dem andra kursarna va som altid och inte något speciellt men shit va kul jag hade i skolan! Riktit fett program.", "2020-01-24"],
    ["Yusef", "5", "5", "1", "Asså programmet valde jag inte av intresse men staden va riktigt fet och jag hade skitkul under lektioner och efter med klasskompisarna. Sista skoldan käka vi alla pizza och drack öl tillsammans, och efteråt brändw jag och polarna skolböckerna. ", "2017-07-24"],
    ["Peter Plan", "4", "3", "2", "Kurserna var inte riktigt det jag tänkte mig, men lärarna var riktigt schyssta och roliga vilket gjorde lektionerna mer uthärdliga. Klasskamraterna hjälpte till och så men de hade aldrig tid att hänga pga skolan.", "2018-05-18"],
    ["Hannah", "5", "5", "4", "Alltså världens bästa lärare! Såå himla trevliga och kunniga! Man märkte verkligen att de var passionerade över sitt ämne. Lärde mig massor och träffade vänner för livet. Rekommenderar det här programmet starkt!", "2020-07-06"],
    ["Thomas", "2", "4", "3", "Programmet i sig var intressant men jag råkade ut för himla tråkiga lärare. De vara drönade runt och runt igen och det kändes inte som man lärde sig något. Upplägget var rätt kasst. Hade rekommenderat att välja något annat. ", "2017-01-09"],
    ["Tim", "5", "5", "5", "Fett kul program! Engagerade lärare och härliga människor. Man lärde sig en massa och det känns verkligen som något man kommer ha användning för i arbetslivet. Universitet var sjukt nice också. 10/10!", "2019-05-15"],
    ["Jess", "4", "5", "4", "Everything about this program was such a good experience and I can't recommend it enough. My classmates were the best and we became such a tight knit gang. The courses were interesting and the teachers really cared. Totally worth applying for! ", "2019-11-03"],
    ["London Tipton", "1", "5", "4", "Älskade mina sköna klasskamrater och kurserna var intressanta i sig. Däremot kunde inte lärarna varit mer långtråkiga. De bara babblade på med information utan att andas. Tur var så gillade jag kurserna annars hade jag inte klarat mig en minut till i klassrummet.", "2017-06-11"],
    ["Vita Minwell", "5", "5", "5", "Detta programmet var det bästa jag har varit med om! Man kunde inte be om en bättre skola. Lärarna lyssnade på oss och lärde ut på ett så intressant och lärorikt sätt. Klasskamraterna kändes som en vän som man hade känt i flera år och kurserna var det bästa jag kunde be om. Helt klart värt det!", "2019-11-29"],
    ["Rio", "1", "4", "1", "Kunde nästan inte hålla mig vaken under lektionerna eftersom lärarnas undervisning kunde inte vara tråkigare och tentorna var omöjliga! Kurserna var inte värt det och hade inte rekommenderat det till någon. Klasskamraterna var relativ roliga, men kunde inte rädda terminen.", "2019-01-12"],
    ["Erik Johansson", "2", "5", "2", "Utbildningens upplägg har varit ren kaos, det är bara tack vare mina klasskompisar som jag inte har hoppat av redan. ", "2021-09-23"],
    ["Michael Ivarsson", "5", "2", "5", "Otroligt lärorikt och kul utbildning. Det har ett brett sortiment av saker vi får lära oss och lärarna är pedagogiska så man lär sig. Det är dock lite stökigt i klasserna. ", "2018-06-23"],
    ["Ivar Johansson", "5", "5", "5", "Har bara bra saker att säga om min tid på denna utbildningen. Trevliga klasskompisar och lärare, det är en stor gemenskap här. Utbildningen är intressant och lärorik. ", "2019-06-25"],
    ["Johan Davidsson", "2", "5", "5", "Toppen utbildning, jag får lära mig saker som jag förväntade mig att få lära mig. Mina klasskompisar är väldigt engagerade också. Lärarna är dock inte så pedagogiska, det är som de läser av ett manus under lektionen. ", "2020-10-14"],
    ["Lina Öberg", "3", "5", "3", "Jag älskar verkligen mina klasskamrater och jag har verkligen fått vänner för livet! Lärarna är okej, vi lär oss ganska mycket men lektionerna kan bli tunga ibland. Men då är det ju tur att man sina otroliga klasskamrater runt sig som kan liva upp stämningen ändå.", "2017-01-28"],
    ["Astrid Carlsson ", "5", "5", "5", "Helt otrolig kurs! lärarna är fantastiska och lektionerna är dom bästa jag någonsin varit på. Alla i klassen vill precis som jag lära oss allt vi kan och vi sitter och pluggar tillsammans hela tiden. ", "2018-05-22"],
    ["Gustav Urberg", "3", "4", "2", "Trevliga lärare men ganska tråkiga lektioner. Hade det inte varit för mina kompisar hade det varit skittråkigt men vi kan ändå göra det helt okej genom att införa plugg öl.", "2019-09-25"],
    ["Oscar Götberg", "1", "5", "3", "Jag fick nitlotten att hamna i en kurs med världens sämsta lärare.. Ämnet i sig är spännande och inget fel på kursen så men tyvärr förstör läraren. Utan mina klasskamrater har nog ingen av oss löst detta men tillsammans får vi det att fungera.", "2020-11-02"],
    ["Carla Johnsson", "4", "5", "3", "Väldigt bra program i helhet. Underbara kurskamrater och lärarna är super. Kurserna är roliga men kanske inte de mest intressanta jag läst- men det är ju bara en smaksak.", "2020-11-25"],
    ["Chandler Bing", "5", "3", "4", "Lärde mig massor och lärarna var grymma. Klasskamraterna var inte lika roliga som de jag har hemma men de duger. Jag var roligast i klassen.", "2019-05-18"],
    ["Rachel Green", "1", "4", "3", "Lärarna va gamla och tråkiga men i övrigt hade jag en super upplevelse! Lärde mig mycket av mina sköna kompisar och vi umgicks och pluggade mycket tillsammans.", "2018-09-04"],
    ["Caroline Forbes", "3", "5", "4", "Skaffade så mycket kompisar under denna kursen och kurserna var mycket intressanta.", "2020-11-10"],
    ["Freja Agertorp", "5", "4", "4", "Jättefin skola och jättebra lärare! Lärde också känna så många fina människor. Rekommenderar alla att göra samma sak!", "2019-02-10"],
    ["Anton Persson", "4", "1", "5", "Otroligt lärorika kurser, vilket antagligen berodde på kompetensen hos lärarna. Något jag kommer sakna är att lektionerna aldrig började 08:00 eftersom jag INTE är en morgon människa.", "2017-07-25"],
    ["Raqiya Ali", "2", "5", "4", "Programmet gav mig vänner för livet. Dessa vänner räddade även hela vistelse då lärarna sög något ofantligt. Jag menar, vi fick aldrig något schema utan allt kändes bara så oproffsigt hur roliga kurserna än var. Hur som så saknar jag verkligen mitt lilla community.", "2018-05-25"],
    ["Alice Losdal", "4", "5", "5", "Jag måste säga att jag är förvånad över hur bra detta slutade. Jag hade läst massa recensioner om detta program som inte alls var bra. Men tänkte jag testar och vet ni vad? Det slutade hur bra som helst. Lärarna gav mig hopp och motivation, klasskamraterna fick mig att överleva och kurserna gav mig så mycket!", "2020-04-07"],
    ["Paula ryd", "1", "2", "3", "Jag önskar att vistelsen hade bidrag till mer än vad den faktiskt gjorde. Visst att jag lärde mig saker på plats och det var nog endast till min egen förtjänst då jag har ett stort intresse för kurserna. Men utöver de så lyckades inte lärarna i kursen charma mig. Förväntade mig mer.", "2020-08-13"],
    ["Gimbap Olsson", "4", "5", "5", "Jag hade VÄRLDENS bästa klasskamrater och fick verkligen vänner för livet! Lärarna var sjukt duktiga och jag fick verkligen lära mig en massa bra saker!", "2020-01-03"],
    ["Björn Lee", "3", "5", "5", "Läraren kunde vara lite för sträng och bitter ibland vilket var segt men man lärde sig sjukt mycket i slutet av dagen. Jag älskade mina klasskamrater!!", "2019-06-12"],
    ["Ronja Que", "5", "4", "5", "Jag tyckte verkligen om kurserna, lärarna var sjukt entusiastiska och gjorde en så pepp på livet! Jag älskar såna lärare!!!!!", "2018-05-30"],
    ["Schmidt Andersson", "5", "5", "5", "Ett grymt bra program! Hjälpte mig att inse vad jag vill satsa på i framtiden! Lärarna älskade verkligen sina jobb och klasskamraterna var så snälla! Bästa utbytessterminen någonsin :D", "2020-12-30"],
    ["Amanda", "5", "5", "4", "Jag gillade kursen allt som allt. Trevliga och kunniga lärare med roliga och hjälpsamma klasskompisar. Lite sur över upplägget dock men summan av kardemumman är att det var bra.", "2019-03-12"],
    ["Julia", "1", "5", "2", "Det ända som gjorde denna kursen någorlunda värd att gå var klasskompisarna. Super inkompetenta lärare som gjorde kursen till en mardrömm. UNDVIK!", "2017-10-23"],
    ["Ulrika", "4", "4", "4", "Har inte så mycket att säga om denna kursen förutom att den är riktigt rolig och värd att ta. Jag har lärt mig så mycket och träffat så många trevliga människor här. Detta är en kurs alla måste ta 100%", "2019-02-10"],
    ["Stefan", "3", "5", "4", "Smått irritrande lärar men klasskompisarna vägde upp. Kursen var intressant som helhet och väljer därför i slutändan ändå att rekommendera den. 3/5 bokmärken om du frågar mig!", "2021-12-15"],
    ["Harry Potter", "5", "5", "4", "Lärarna är helt magiska och lokalerna lika så! Varje lektioner givande och vi läser om jätteintressanta ämnen. Rekommenderar denna utbildning till alla som är intresserade!", "2020-03-04"],
    ["Bella Swan", "4", "5", "3", "Kurserna är okej och lärarna är snälla. Det bästa med programmet är klasskamraterna, vi har alltid roligt tillsammans och råkar alltid ut för underbara äventyr. ", "2019-03-20"],
    ["Peter Parker", "5", "5", "5", "Lärarna är riktiga superhjältar! Kurserna är givande och vi lär oss väldigt mycket. Lärarna är kompetenta och kan mycket om sina ämnen. Med så bra lärare förväntas även mycket på eleverna och tentorna är ganska svåra. Skolans doktor kan verka lite annorlunda. ", "2018-02-20"],
    ["Wesley Sneijder", "4", "4", "5", "Excellent program, i wish i could stay any longer. I will never forget this part of my life. It has contributed a lot to me. ", "2018-12-10"],
    ["Taylor Sweet", "5", "5", "4", "Bra program! Speciell lärarna var så snälla. Med sina fina lokaler är detta program ett måste för dig som planerar om att både studera och leva livet (ha kul).", "2017-06-06"],
    ["Michael ", "5", "5", "5", "Super superbra program! Jag har haft sååå kul. Klasskamraterna, lärarna och även kurserna var såå så uppenbart!", "2020-01-04"],
    ["Didier", "4", "2", "4", "Buen programa! Todo estuvo bien excepto por los compañeros de clase. No tengo nada que decir en contra de ellos, pero parecía que solo querían estudiar, no pasar el rato. Está bien, deberías estudiar. I get it, alright. ¡¡Pero tampoco debes olvidarte de divertirte !!", "2019-10-11"],
    ["Jenny", "4", "5", "4", "Så rolig kurs! Massor med intressanta lektioner och spännande utmaningar ", "2020-01-22"],
    ["Alfons", "5", "5", "5", "Bästa kursen jag har läst! Så underhållande och jag hade världens bästa klasskamrater ", "2020-10-14"],
    ["Erine", "3", "4", "4", "Bra kurs, mycket lärorikt. Lite sega seminarium som aldrig någonsin tog slut. Men i slutändan var jag väldigt nöjd", "2020-03-18"],
    ["Dansken", "4", "5", "3", "Så himla kul att få gå detta programmet. Varierande kurser och spännande utmaningar. Lärarna var överlag bra, vissa super och vissa mindre bra, men är otroligt nöjd! ", "2021-04-01"],
    ["Magda", "5", "5", "5", "Bästa jag har gjort! Jag har lärt mig så mycket under mina studier, allt har varit över förväntan! Lärarna, klasskompisarna, undervisningarna 10/10!!", "2018-05-07"],
    ["Filippa", "3", "3", "3", "Helt okej utbildning, har verken något dåligt eller super bra att säga om den. Det var lärorikt men känner också att det ska bli skönt att komma hem :)", "2019-11-01"],
    ["Maggan", "2", "2", "2", "Nej, detta var inte så bra som jag hade tänkt mig. Kände att jag inte lärde mig så mycket och hade inte alls mycket motivation. LÄÄÄNTAR hem!! ", "2018-09-20"],
    ["Stevie Nicks", "2", "4", "2", "Kurserna är inte så roliga. Vi fick inte bra material inför tentorna och läraren sitter bara och lyssnar på musik under lektionerna. Klasskamraterna är jätteroliga! ", "2019-03-30"],
    ["Katja", "4", "5", "4", "Jag kan verkligen rekommendera att söka detta programet! Lektionerna var super givande och jag fick massor av nya kompisar! Toppen program! ", "2020-12-01"],
    ["Jimmy Page", "4", "5", "4", "Programmet är givande och vi lär oss mycket. Läraren är flerspråkig och otroligt intressant att lyssna på, han har alltid en halsduk av Kashmir på sig. ", "2019-09-30"],
    ["Julia", "1", "5", "5", "Mina klasskompisar var jättesnälla och lektionerna var superintressanta. Jag har verkligen lärt mig såååå mycket nytt, men våra lärare var dock inte så bra. Ibland kändes det som att dem hatade sitt jobb", "2019-11-08"],
    ["Kevin", "5", "5", "5", "Fantastiskt program!!! Älskade mina lärare, mina klasskompisar och lektionerna var alltid roliga och intressanta. Har verkligen inget negativt att säga!", "2017-02-08"],
    ["August", "1", "1", "1", "Är så missnöjd med detta programmet. Alla i min klass var otrevliga och tråkiga och ingen brydde sig om något annat än dem själva och jag tyckte alla lektioner var extremt tråkiga också.", "2020-06-04"],
    ["Glenn", "5", "3", "5", "Superbra program! Varje lektion kändes lärorik och mina lärare var väldigt engagerade. Jag grät i flera timmar när jag skulle åka hem igen :(", "2018-03-23"]
];



let PROGRAMMES = []
let UNIVERSITIES = [];
let CLUBS = [];
let ENTERTAINMENT_PLACES = [];
let COMMENTS_PROGRAMME = [];


// Work the machine
let machine = function(){
    CITIES.forEach( city => {

        let langID = COUNTRIES[CITIES.find(c => c.id === city.id).countryID].languageID;
        let cityUnivs = getUNIVERSITIES(city.id, RANDOM.rInt(4, 1), UNIVERSITIES.length);
        UNIVERSITIES = [...UNIVERSITIES, ...cityUnivs];
        
        cityUnivs.forEach(uni => {

            PROGRAMMES = [...PROGRAMMES, ...getPROGRAMMES({
                n: RANDOM.rInt(13, 4),
                langID,
                universityID: uni.id,
                start_i: PROGRAMMES.length
            })];

            CLUBS = [...CLUBS, ...getCLUBS({
                universityID: uni.id,
                langID,
                n: RANDOM.rInt(7, 4),
                start_i: CLUBS.length
            })];
        });


        ENTERTAINMENT_PLACES = [...ENTERTAINMENT_PLACES, ...getENTERTAINMENT_PLACES({
            cityID: city.id,
            langID,
            n: RANDOM.rInt(23, 18),
            start_id: ENTERTAINMENT_PLACES.length
        })];

    });

    PROGRAMMES.forEach(prog => {
        COMMENTS_PROGRAMME = [...COMMENTS_PROGRAMME, ...getCOMMENTS_PROGRAMME({
            programmeID: prog.id,
            start_i: COMMENTS_PROGRAMME.length
        })];
    });

}
// machine();


// Create the DB
let _DB = {
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

// LOGS
// console.log(JSON.stringify(COUNTRIES));
// console.log(JSON.stringify(CITIES));
// console.log(JSON.stringify(UNIVERSITIES));
// console.log(JSON.stringify(PROGRAMMES));
// console.log(JSON.stringify(LANGUAGES));
// console.log(JSON.stringify(LEVELS));
// console.log(JSON.stringify(CLUBS));
// console.log(JSON.stringify(ENTERTAINMENT_PLACES));
// console.log(_DB);


// Save DB as a file
function save (data, name) {

    let request = new Request("db.php", {
        method: "POST",
        headers: { "Content-Type": "text/plain" },
        body: JSON.stringify({data, name})
    });

    fetch(request)
    // .then( r => r.json())
    .then( r => r.text() )
    .then( (a)=>{
        console.log(a);
        a = JSON.parse(a);
        console.log(a.data);
    } )
    .catch(e => {
        console.log(e);
    });
}
// save();




// Auxiliar stuff
function getCOMMENTS_PROGRAMME(data){

    let {programmeID, start_i} = data;
    let n = RANDOM.rInt(33, 19);

    let comments = [];

    for (let i = 0; i < n; i++) {

        let _comment = RANDOM.array(_COMMENTS_PROGRAMME);
        while (comments.some( c => c.text === _comment[4])) {
            _comment = RANDOM.array(_COMMENTS_PROGRAMME);
        }

        comments.push({
            id: start_i + i,
            programmeID,
            alias: _comment[0],
            text: _comment[4],
            date: dateConverter(_comment[5]),
            stars: {
                teachers: parseInt(_comment[1]),
                students: parseInt(_comment[2]),
                courses:  parseInt(_comment[3]),
            }
        });
    }

    return comments;
}
function decimals(number, nDec){
    return Math.floor(Math.pow(10, nDec) * number) / Math.pow(10, nDec); 
}
function getPROGRAMMES(data) {

    let {n, langID, universityID, start_i} = data;

    let programmes = [];
    let nYears = 5;

    for (let i = 0; i < n; i++) {

        let _langID = RANDOM.coin() ? langID : LANGUAGES.find(l => l.name === "English").id;
        let subjectID = RANDOM.rInt(FIELDS.length);

        let name = programmeName(_langID, subjectID);
        while (programmes.some(p => p.name === name)) {
            name = programmeName(_langID);
        }
    
        programmes.push({
            id: i + start_i,
            entryGrades: getSeries(5.5, 8.5, 0.2, 0.5, nYears, 2),
            exchangeStudents: 4 + RANDOM.rInt(3),
            language: _langID,
            level: RANDOM.rInt(LEVELS.length),
            localStudents: 12 + RANDOM.rInt(24),
            name,
            subjectID,
            successRate: getSeries(40, 70, 5, 10, nYears, 0),
            universityID: universityID,
        });
    }

    return programmes;

    function programmeName(__langID, _subjectID){
        const fields = [
            ["Matemáticas", "Ingeniería", "Derecho", "Medicina", "Sociología", "Filosofía", "Diseño"],
            ["Mathematics", "Engineering", "Law", "Medicine", "Sociology", "Philosophy", "Design"],
            ["Matématiques", "Ingénierie", "Droit", "Medicine", "Sociologie", "Filosofie", "Design"],
            ["Matematik", "Teknik", "Juridik", "Medicin", "Sociologi", "Filosofi", "Design"],
        ];
    
        const prefixes = [
            ["Estudios superiores de"],
            ["Advanced Studies in", "Applied", "Human"],
            ["Études avancés en"],
            ["Avancerade studier inom"],
        ];
        const suffixes = [
            ["aplicadas", "y sociedad", "y realidad virtual", "y sostenibilidad", "en el siglo XXI", "e historia"],
            ["in Society", "and Virtual Reality", "and Sustainability", "in the 21:st Century", "and History"],
            ["et societé", "et réalité virtuelle", "et durabilité", "et la France", "appliqués", "et Histoire"],
            ["i samhället", "och virtuell verklighet", "och hållbarhet", "i 2000-talet", "i historien"],
        ];
    
    
        let coin = RANDOM.coin();
        let prefix = coin ? RANDOM.array(prefixes[__langID]) + " " : "";
        let suffix = coin ? "" : " " + RANDOM.array(suffixes[__langID]);
        // return prefix + RANDOM.array(fields[__langID]) + suffix;
        return prefix + fields[__langID][_subjectID] + suffix;
    }    
}
function getSeries(min, max, varMin, varMax, n, nDec) {
    let series = [RANDOM.rFloat(max, min)];
    let variation = RANDOM.rFloat(varMax, varMin);
    for (let i = 0; i < n - 1; i++) {
        series.push(series[0] + RANDOM.rFloat(variation, -variation));
    }
    switch (RANDOM.rInt(3)) {
        case 0: series.sort((a,b) => a - b); break;
        case 1: series.sort((a,b) => b - a); break;
    }
    return series.map(e => decimals(e, nDec));
}
function getUNIVERSITIES(cityID, n, start_i) {

    let lang1 = COUNTRIES[CITIES.find(c => c.id === cityID).countryID].languageID;
    let lang2 = 1; // English

    let universities = [];

    for (let i = 0; i < n; i++) {
        universities.push({
            id: i + start_i,
            name: getUniversityName(cityID, universities),
            cityID,
        });
    }

    return universities;

}
function getCLUBS(data) {

    let {universityID, langID, n, start_i} = data;

    let clubs = [];

    let prefixes = [
        ["Club de", "Asociación de", "Amigos de", "Unión de"],
        ["Friends of"],
        ["Club de", "Association de", "Union de"],
        ["Gemenskapet för", "Studentklubben"],
    ];
    let suffixes = [
        ["en acción", "amateur"],
        ["Club", "Association", "Amateurs"],
        ["en action", "amateur"],
        ["förening", "klubben"]
    ];
    let activities = [
        ["Rugby", "Fotografía", "Montañismo", "Senderismo", "Piragüa", "Vela", "Vuelo", "Teatro", "Pintura", "Balonmano", "Mus", "Vino", "Sexo, Drogas y Rockanroll", "Bicicleta", "Ajedrez", "Juegos de mesa"],
        ["Rugby", "Photography", "Mounteneering", "Table Tennis", "Cricket", "Football", "Beer", "Gourmet", "Bridge", "Mountainbike", "Chess", "Boardgames"],
        ["Rugby", "Fotografie", "Randonée", "Voile", "Poésie", "Handball", "Ski", "Théatre", "Beaux Arts", "Bridge", "Fromage", "Bon Manger", "Échecs"],
        ["Rugby", "Fotografi", "Klättring", "Bordtennis", "Tennis", "Innebandy", "Hockey", "Orientering", "Teater", "Öl och mat", "Schack", "Spel", "eSports"],
    ];

    for (let i = 0; i < n; i++) {

        let coin = RANDOM.coin();
        let suffixSpace = LANGUAGES.find(l => l.id === langID).name === "Swedish" ? "" : " ";
        let prefix = coin ? RANDOM.array(prefixes[langID]) + " " : "";
        let suffix = !coin ? suffixSpace + RANDOM.array(suffixes[langID]) : "";
        
        let name = getName;
        while (clubs.some(c => c.name === name)) {
            name = getName();
        }

        clubs.push({
            id: i + start_i,
            name,
            universityID,
            memberCount: RANDOM.rInt(34, 7),
        });
    
    }
    return clubs;

    function getName(){
        let coin = RANDOM.coin();
        let suffixSpace = LANGUAGES.find(l => l.id === langID).name === "Swedish" ? "" : " ";
        let prefix = coin ? RANDOM.array(prefixes[langID]) + " " : "";
        let suffix = !coin ? suffixSpace + RANDOM.array(suffixes[langID]) : "";
        
        return prefix + RANDOM.array(activities[langID]) + suffix;
        // clubs.push({
        //     id: i,
        //     name: prefix + RANDOM.array(activities[langID]) + suffix,
        //     universityID,
        //     memberCount: RANDOM.rInt(34, 7),
        // });        
    }
}
function getUniversityName(cityID, universities){

    let langID = COUNTRIES.find(c => c.id === CITIES.find(c => c.id === cityID).countryID).languageID;

    let prefixes = [
        ["Universidad de", "Escuela de Estudios Superiores de", "Academia Universitaria de", "Politécnica de"],
        ["University of"],
        ["Université de", "École Nationale de Hautes Études de", "L'Académie de"],
        ["Högskolan i"],
    ];
    let suffixes = [
        [],
        ["School for Advanced Studies", "University", "Polytechnic University"],
        ["Polytéchnique"],
        ["Universitet", "Akademi", "Tekniska Högskola"],
    ];

    let name = getName();
    while (universities.some(u => u.name === name)) {
        name = getName();
    }
    return name;

    function getName(){
        if (LANGUAGES.find(l => l.id === langID).name === "Spanish" || LANGUAGES.find(l => l.id === langID).name === "French") {
            return RANDOM.array(prefixes[langID]) + " " + CITIES.find(c => c.id === cityID).name
        } else {
    
            let coin = RANDOM.coin();
            let prefix = coin ? RANDOM.array(prefixes[langID]) + " " : "";
            let suffix = !coin ? " " + RANDOM.array(suffixes[langID]) : "";
    
            return prefix + CITIES.find(c => c.id === cityID).name + suffix;
    
        }    
    }

}
function getENTERTAINMENT_PLACES(data){
    let {cityID, langID, start_id, n} = data;

    let names = [
        ["Pepe", "Antonia", "Paraíso", "La motosierra", "Nicaragua", "México Lindo", "Azteca", "Andalucía", "Estrella", "Luna", "Lobos", "Roma", "París", "Londres", "Atlántico", "Pacífico", "Las Américas", "Chile", "Los Andes", "Pirineos", "Sierra Nevada", "Granada", "Tacita de plata", "Cádiz", "Estrecho", "Mediterráneo", "Mare Nostrum", "Fuego", "Fiesta", "Fenomenal", "Furibundo", "Sobremesa", "Susodicho", "Extravagante", "Lopetegui", "Vascongadas", "Barna", "Cataluña", "Buenas", "Binvenguts", "Nemi", "Lords", "Ninguno", "Hasta la Vista", "Amigo", "Arriba", "Nunca", "Sombrero", "Mariachis", "Guacamole", "Veracruz", "Ángeles", "Los Santos", "Reyes Magos", "NoPasarán", "Raza", "Libertad", "Central", "Cañí", "Castizo", "Los Gatos", "Culé"],
        ["The Swan", "The Globe", "Peter & Molly", "Livid", "Lol", "Boomer", "Three Ws", "Mind the Gap", "Metropolitan", "Fantastic", "Bourne", "Blaise", "Corduroi", "David", "Daniel", "Winston", "Madrid", "Sabor", "Succulent", "Troubles", "Rolling", "Stone", "Rocks", "Mountains", "Channel", "Moscow", "Imperio", "Victorian", "King's", "Queen's", "Royal", "Regio", "Princess", "Scotland's", "Haggis", "William", "Poetry", "Astounding", "Awesome", "Green", "Fabulous", "Tomato", "Kelly", "Fraternity", "Solidarity", "Glasnost", "Red Wall", "Perestroika", "Never Mind", "Mindless", "Surrogate", "Adjourned", "Doodling", "Stardust", "Vacuum", "Navy", "Hotpink", "Cinderella", "Alladin", "Babylon", "Jamaica", "Sheriff", "Clapton", "Cream", "Fool", "The Daunted", "The Forest", "The Swan", "The Lady Bug"],
        ["Madrid", "Londres", "Papi", "Lyon", "Arrière Pays", "Normandie", "Plage", "La Mer", "L'Océan", "Profond", "Plafond", "S'il Vous Plaît", "Notre Dame", "Cathédrale", "Le Nord", "Le Sud", "Marché", "Le Chemin", "Baudelaire", "Toulon", "Toulouse", "Les Alpes", "La Grace", "Gourmand", "Gourmet", "Outre Mer", "Afrique", "Asie", "Indochine", "Le Concept", "Le Big Mac", "Outre Fois", "Redoutable", "Rez de Chaussé", "Impressionant", "La Vie"],
        ["Norrland", "Småland", "Skåne", "Madrid", "Ryssen", "Frysen", "Våren", "De Sju Dvärjarna", "Underlandet", "Lustig", "Ro", "Machiavelli", "Milan", "Calabria", "Sicilia", "Skärgården", "Kullen", "Amerikano", "Knastret", "Kisellerad", "Antagonist", "Lurendrejeri", "Älgen", "Gefle", "Boulognerskogen", "Gamla Stan", "Förbrukat", "Filibuster", "Barabarerna", "Valhalla", "Yggdrasil", "Hedarna", "Svarta Draken", "Odin", "Freja", "Loki"]
    ];
    
    
    let places = [];

    for (let i = 0; i < n; i++) {

        let _name = RANDOM.array(names[langID]);
        while (places.some(p => p.name.includes(_name))) {
            _name = RANDOM.array(names[langID]);
        }

        places.push({
            id: i + start_id,
            name: getName(_name),
            cityID
        });
    }


    return places;

    function getName(__name) {

        let prefixes = [
            ["Restaurante", "Restaurante", "Restaurante", "Restaurante", "Restaurante", "Bar", "Bar", "Bar", "Bar", "Bar", "Discoteca", "Club de noche", "Fonda", "Bar de copas", "Cine", "Cines", "Teatro", "Galería"],
            [],
            ["Restaurant", "Restaurant", "Restaurant", "Restaurant", "Bistro", "Bistro", "Bistro", "Bistro", "Bistro", "Discoteque", "Club", "Café de", "Cave", "Cave", "Cave", "Bar à vins", "Bar à vins", "Bar à vins", "Bar à vins", "Théatre", "Galerie", "Compagnie"],
            ["Restaurang", "Restaurang", "Restaurang", "Restaurang", "Bar", "Nattklubb", "Kiosk", "Biograf", "Café", "Café", "Café", "Café", "Teater", "Galeri", "Konsthall", "Pizzeria"]
        ];

        let suffixes = [
            [],
            ["Pub", "Pub", "Pub", "Pub", "Pub", "Café", "Café", "Café", "Club", "Nightclub", "Theatre", "Cinema", "Comedy Club", "Gallery", "Hall", "Centre", "House", "Arena", "Place"],
            [],
            []
        ];

        let prefix = false;
        let suffix = false;
        if (langID === 1) {
            suffix = true;
        } else if (langID === 0 || langID === 3 || langID === 2) {
            prefix = true;
        } else {
            let coin = RANDOM.coin();
            prefix = coin;
            suffix = !coin;
        }
        prefix = prefix ? RANDOM.array(prefixes[langID]) + " " : "";
        suffix = suffix ? " " + RANDOM.array(suffixes[langID]) : "";
        return prefix + __name + suffix;

    }
}
function dateConverter(string) {
    return {
        year: parseInt(string.substr(0, 4)),
        month: parseInt(string.substr(5, 2)),
        day: parseInt(string.substr(8, 2)),
    }
}
function insertImage(file) {
    let img = document.createElement("img");
    img.style.height = "100px";
    img.setAttribute("src", `./Images/${file}`);
    document.querySelector("body").append(img);
}

