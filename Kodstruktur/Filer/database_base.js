
/*

Nedan finns databasen.

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




avkommenterat 07/05
const DB = JSON.parse(`



`);
*/ 
console.log(DB);