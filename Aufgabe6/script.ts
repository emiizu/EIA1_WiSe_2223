namespace L06 {


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


}