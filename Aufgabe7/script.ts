namespace L07 {


console.log("DEUTSCHLAND");






    let EinwohnerDE: number = 83.32;
    console.log("Die Gesamtzahl der Einwohnerinnen und Einwohner in Deutschland beträgt im Jahr 2022: " + EinwohnerDE + " Millionen");

    let EinwohnerEU: number = 447.7;
    let EinProzentWert: number = Number(EinwohnerEU / 100);
    let DErelativzuEU=(EinwohnerDE / EinProzentWert).toFixed(2);
    console.log("Relativ zur Gesamtzahl der Einwohner in der EU im Jahr 2022:  " + DErelativzuEU + "%");

    let EinwohnerDE08: number = 81.2;
    let WachstumsrateDE = Number(((EinwohnerDE - EinwohnerDE08) / EinwohnerDE08) * 100).toFixed(2);
    console.log("Wachstumsrate seit 2008: " + WachstumsrateDE + "%")

    let WachstumDE = Number(EinwohnerDE - EinwohnerDE08).toFixed(2);
    console.log("Wachstum gesamt zwischen 2008 und 2022: " + WachstumDE + " Millionen");






console.log("FRANKREICH");

let EinwohnerFR: number = 64.6;
console.log("Die Gesamtzahl der Einwohnerinnen und Einwohner in Frankreich beträgt im Jahr 2022: " + EinwohnerFR + " Millionen");


let FRrelativzuEU = Number(EinwohnerFR / EinProzentWert).toFixed(2);
console.log("Relativ zur Gesamtzahl der Einwohner in der EU im Jahr 2022:  " + FRrelativzuEU + "%");

let EinwohnerFR08: number = 61.7;
let WachstumsrateFR = Number(((EinwohnerFR - EinwohnerFR08) / EinwohnerFR08) * 100).toFixed(2);
console.log("Wachstumsrate seit 2008: " + WachstumsrateFR + "%")

let WachstumFR = Number(EinwohnerFR - EinwohnerFR08).toFixed(2);
console.log("Wachstum gesamt zwischen 2008 und 2022: " + WachstumFR + " Millionen");




console.log("ITALIEN");

let EinwohnerIT: number = 58.97;
console.log("Die Gesamtzahl der Einwohnerinnen und Einwohner in Italien beträgt im Jahr 2022: " + EinwohnerIT + " Millionen");

let ITrelativzuEU = Number(EinwohnerIT / EinProzentWert).toFixed(2);
console.log("Relativ zur Gesamtzahl der Einwohner in der EU im Jahr 2022:  " + ITrelativzuEU + "%");

let EinwohnerIT08: number = 59.02;
let WachstumsrateIT = Number(((EinwohnerIT - EinwohnerIT08) / EinwohnerIT08) * 100).toFixed(2);
console.log("Wachstumsrate seit 2008: " + WachstumsrateIT + "%")

let WachstumIT = Number(EinwohnerIT - EinwohnerIT08).toFixed(2);
console.log("Wachstum gesamt zwischen 2008 und 2022: " + WachstumIT + " Millionen");


console.log("POLEN");

let EinwohnerPL: number = 41.09;
console.log("Die Gesamtzahl der Einwohnerinnen und Einwohner in Polen beträgt im Jahr 2022: " + EinwohnerPL + " Millionen");

let PLrelativzuEU = Number(EinwohnerPL / EinProzentWert).toFixed(2);
console.log("Relativ zur Gesamtzahl der Einwohner in der EU im Jahr 2022:  " + PLrelativzuEU + "%");

let EinwohnerPL08: number = 38.5;
let WachstumsratePL = Number(((EinwohnerPL - EinwohnerPL08) / EinwohnerPL08) * 100).toFixed(2);
console.log("Wachstumsrate seit 2008: " + WachstumsratePL + "%")

let WachstumPL = Number(EinwohnerPL - EinwohnerPL08).toFixed(2);
console.log("Wachstum gesamt zwischen 2008 und 2022: " + WachstumPL + " Millionen");

console.log("EU");


let EinwohnerEU08: number = 437.44;
let WachstumsrateEU = Number(((EinwohnerEU - EinwohnerEU08) / EinwohnerEU08) * 100).toFixed(2);
console.log("Wachstumsrate seit 2008: " + WachstumsrateEU + "%")

let WachstumEU = Number(EinwohnerEU - EinwohnerEU08).toFixed(2);
console.log("Wachstum gesamt zwischen 2008 und 2022: " + WachstumEU + " Millionen");

function myFunction (Relativ:string, Einwohner:number, Wachstumsrate:string, Wachstum:string) {

    document.querySelector(".chart").setAttribute("style","height:" + Relativ + "%");
    document.querySelector("#Einwohner").innerHTML = Einwohner + " Mio";
    document.querySelector("#Relativ").innerHTML = Relativ + " %";
    document.querySelector("#Wachstumsrate").innerHTML = Wachstumsrate + " %";
    document.querySelector("#Wachstum").innerHTML = Wachstum + " Mio";
  
    
   

}

document.querySelector("#de").addEventListener('click', function () {
     myFunction(DErelativzuEU, EinwohnerDE, WachstumsrateDE, WachstumDE);
     document.querySelector("#title").innerHTML ="Einwohnerzahlen in Deutschland";
     document.querySelector("#EinwohnerText").innerHTML = "Gesamtzahl Einwohnerinnen und Einwohner in Deutschland in 2022";
});

document.querySelector("#fr").addEventListener('click', function () {
    myFunction(FRrelativzuEU, EinwohnerFR, WachstumsrateFR, WachstumFR);
    document.querySelector("#title").innerHTML ="Einwohnerzahlen in Frankreich";
    document.querySelector("#EinwohnerText").innerHTML = "Gesamtzahl Einwohnerinnen und Einwohner in Frankreich in 2022";
});

document.querySelector("#it").addEventListener('click', function () {
    myFunction(ITrelativzuEU, EinwohnerIT, WachstumsrateIT, WachstumIT);
    document.querySelector("#title").innerHTML ="Einwohnerzahlen in Italien";
    document.querySelector("#EinwohnerText").innerHTML = "Gesamtzahl Einwohnerinnen und Einwohner in Italien in 2022";
});

document.querySelector("#pl").addEventListener('click', function () {
    myFunction(PLrelativzuEU, EinwohnerPL, WachstumsratePL, WachstumPL);
    document.querySelector("#title").innerHTML ="Einwohnerzahlen in Polen";
    document.querySelector("#EinwohnerText").innerHTML = "Gesamtzahl Einwohnerinnen und Einwohner in Polen in 2022";
});

document.querySelector("#eu").addEventListener('click', function () {
    myFunction("100%", EinwohnerEU, WachstumsrateEU, WachstumEU);
    document.querySelector("#title").innerHTML ="Einwohnerzahlen in der Europäischen Union";
    document.querySelector("#EinwohnerText").innerHTML = "Gesamtzahl Einwohnerinnen und Einwohner in der Europäischen Union in 2022";
});



}