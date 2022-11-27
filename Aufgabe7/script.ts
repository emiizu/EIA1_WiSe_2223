namespace L07 {


console.log("DEUTSCHLAND");






    let EinwohnerDE: number = 83.32;
    console.log("Die Gesamtzahl der Einwohnerinnen und Einwohner in Deutschland beträgt im Jahr 2022: " + EinwohnerDE + " Millionen");

    let EinwohnerEU: number = 447.7;
    let EinProzentWert = EinwohnerEU / 100;
    let DErelativzuEU = (EinwohnerDE / EinProzentWert).toFixed(2);
    console.log("Relativ zur Gesamtzahl der Einwohner in der EU im Jahr 2022:  " + DErelativzuEU + "%");

    let EinwohnerDE08: number = 81.2;
    let WachstumsrateDE = (((EinwohnerDE - EinwohnerDE08) / EinwohnerDE08) * 100).toFixed(2);
    console.log("Wachstumsrate seit 2008: " + WachstumsrateDE + "%")

    let WachstumDE = (EinwohnerDE - EinwohnerDE08).toFixed(2);
    console.log("Wachstum gesamt zwischen 2008 und 2022: " + WachstumDE + " Millionen");






console.log("FRANKREICH");

let EinwohnerFR: number = 64.6;
console.log("Die Gesamtzahl der Einwohnerinnen und Einwohner in Frankreich beträgt im Jahr 2022: " + EinwohnerFR + " Millionen");


let FRrelativzuEU = (EinwohnerFR / EinProzentWert).toFixed(2);
console.log("Relativ zur Gesamtzahl der Einwohner in der EU im Jahr 2022:  " + FRrelativzuEU + "%");

let EinwohnerFR08: number = 61.7;
let WachstumsrateFR = (((EinwohnerFR - EinwohnerFR08) / EinwohnerFR08) * 100).toFixed(2);
console.log("Wachstumsrate seit 2008: " + WachstumsrateFR + "%")

let WachstumFR = (EinwohnerFR - EinwohnerFR08).toFixed(2);
console.log("Wachstum gesamt zwischen 2008 und 2022: " + WachstumFR + " Millionen");




console.log("ITALIEN");

let EinwohnerIT: number = 58.97;
console.log("Die Gesamtzahl der Einwohnerinnen und Einwohner in Italien beträgt im Jahr 2022: " + EinwohnerIT + " Millionen");

let ITrelativzuEU = (EinwohnerIT / EinProzentWert).toFixed(2);
console.log("Relativ zur Gesamtzahl der Einwohner in der EU im Jahr 2022:  " + ITrelativzuEU + "%");

let EinwohnerIT08: number = 59.02;
let WachstumsrateIT = (((EinwohnerIT - EinwohnerIT08) / EinwohnerIT08) * 100).toFixed(2);
console.log("Wachstumsrate seit 2008: " + WachstumsrateIT + "%")

let WachstumIT = (EinwohnerIT - EinwohnerIT08).toFixed(2);
console.log("Wachstum gesamt zwischen 2008 und 2022: " + WachstumIT + " Millionen");


console.log("POLEN");

let EinwohnerPL: number = 41.09;
console.log("Die Gesamtzahl der Einwohnerinnen und Einwohner in Polen beträgt im Jahr 2022: " + EinwohnerPL + " Millionen");

let PLrelativzuEU = (EinwohnerPL / EinProzentWert).toFixed(2);
console.log("Relativ zur Gesamtzahl der Einwohner in der EU im Jahr 2022:  " + PLrelativzuEU + "%");

let EinwohnerPL08: number = 38.5;
let WachstumsratePL = (((EinwohnerPL - EinwohnerPL08) / EinwohnerPL08) * 100).toFixed(2);
console.log("Wachstumsrate seit 2008: " + WachstumsratePL + "%")

let WachstumPL = (EinwohnerPL - EinwohnerPL08).toFixed(2);
console.log("Wachstum gesamt zwischen 2008 und 2022: " + WachstumPL + " Millionen");

console.log("EU");


let EinwohnerEU08: number = 437.44;
let WachstumsrateEU = (((EinwohnerEU - EinwohnerEU08) / EinwohnerEU08) * 100).toFixed(2);
console.log("Wachstumsrate seit 2008: " + WachstumsrateEU + "%")

let WachstumEU = (EinwohnerEU - EinwohnerEU08).toFixed(2);
console.log("Wachstum gesamt zwischen 2008 und 2022: " + WachstumEU + " Millionen");

document.querySelector("#de").addEventListener('click', function() {

   
    document.querySelector(".chart").setAttribute("style","height:" + DErelativzuEU + "%");
    document.querySelector("#Einwohner").innerHTML = EinwohnerDE + " Mio";
    document.querySelector("#EinwohnerText").innerHTML = "Gesamtzahl Einwohnerinnen und Einwohner in Deutschland in 2022";
    document.querySelector("#Relativ").innerHTML = DErelativzuEU + " %";
    document.querySelector("#Wachstumsrate").innerHTML = WachstumsrateDE + " %";
    document.querySelector("#Wachstum").innerHTML = WachstumDE + " Mio";
    document.querySelector("#title").innerHTML ="Einwohnerzahlen in Deutschland";
   
})

document.querySelector("#fr").addEventListener('click', function() {

    document.querySelector(".chart").setAttribute("style","height:" + FRrelativzuEU + "%");
    document.querySelector("#Einwohner").innerHTML = EinwohnerFR + " Mio";
    document.querySelector("#EinwohnerText").innerHTML = "Gesamtzahl Einwohnerinnen und Einwohner in Frankreich in 2022";
    document.querySelector("#Relativ").innerHTML = FRrelativzuEU + " %";
    document.querySelector("#Wachstumsrate").innerHTML = WachstumsrateFR + " %";
    document.querySelector("#Wachstum").innerHTML = WachstumFR + " Mio";
    document.querySelector("#title").innerHTML ="Einwohnerzahlen in Frankreich";

})

document.querySelector("#it").addEventListener('click', function() {

    document.querySelector(".chart").setAttribute("style","height:" + ITrelativzuEU + "%");
    document.querySelector("#Einwohner").innerHTML = EinwohnerIT + " Mio";
    document.querySelector("#EinwohnerText").innerHTML = "Gesamtzahl Einwohnerinnen und Einwohner in Italien in 2022";
    document.querySelector("#Relativ").innerHTML = ITrelativzuEU + " %";
    document.querySelector("#Wachstumsrate").innerHTML = WachstumsrateIT + " %";
    document.querySelector("#Wachstum").innerHTML = WachstumIT + " Mio";
    document.querySelector("#title").innerHTML ="Einwohnerzahlen in Italien";

})

document.querySelector("#pl").addEventListener('click', function() {

    document.querySelector(".chart").setAttribute("style","height:" + PLrelativzuEU + "%");
    document.querySelector("#Einwohner").innerHTML = EinwohnerPL + " Mio";
    document.querySelector("#EinwohnerText").innerHTML = "Gesamtzahl Einwohnerinnen und Einwohner in Polen in 2022";
    document.querySelector("#Relativ").innerHTML = PLrelativzuEU + " %";
    document.querySelector("#Wachstumsrate").innerHTML = WachstumsratePL + " %";
    document.querySelector("#Wachstum").innerHTML = WachstumPL + " Mio";
    document.querySelector("#title").innerHTML ="Einwohnerzahlen in Polen";

})

document.querySelector("#eu").addEventListener('click', function() {

    document.querySelector(".chart").setAttribute("style","height:100%");
    document.querySelector("#Einwohner").innerHTML = EinwohnerEU + " Mio";
    document.querySelector("#EinwohnerText").innerHTML = "Gesamtzahl Einwohnerinnen und Einwohner in der Europäischen Union in 2022";
    document.querySelector("#Relativ").innerHTML = "100%";
    document.querySelector("#Wachstumsrate").innerHTML = WachstumsrateEU + " %";
    document.querySelector("#Wachstum").innerHTML = WachstumEU + " Mio";
    document.querySelector("#title").innerHTML ="Einwohnerzahlen in der Europäischen Union";

})


}