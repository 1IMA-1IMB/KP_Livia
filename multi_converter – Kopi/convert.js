let liste_med_tall = [10, 12, 14, 11];

console.log(liste_med_tall[3]);


let elev_liste = ["a", "e", "i", "o", "u"];

let index = 0;
while(index < elev_liste.length){
    index++;
}


// Oppgave 1

function gallonsToOunces(gallons) {
    const ouncesPerGallon = 0.0295735;
    const ounces = gallons * ouncesPerGallon;
    return ounces; }

    const gallons = 2;
 const ounces = gallonsToOunces(gallons);
 console.log(`${gallons} gallons is equal to ${ounces} ounces.`);

 function kiloweightConvert(value) { 
    document.getElementById("Gallons").innerHTML=value*3.78541; 
    document.getElementById("Ounces").innerHTML=value*0.0295735; 
    document.getElementById("Cups").innerHTML=value*0.236588; 
    document.getElementById("Spiseskjeer").innerHTML=value*0.0147868; 
  } 