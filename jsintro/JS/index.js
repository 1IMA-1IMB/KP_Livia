    //Denne koden er en kommentar i javascript yippie
    //DEL 1; VARIABLER
    console.log("                 DEL 1 VARIABLER");
 
    console.log(typeof('Hello World'));

   let name = 'Livia'; // String
   console.log(name);

   let age = 16; // Number
   console.log(age);

   console.log('Hei ' + name + ', du er ' + age + ' år gammel. ');
   
   console.log( "I JavaScript så finnes det en kommando for å lage variabler, altså console.log. Denne fullfører koden og legger den til i Console." );
   

   let erEnElev = true;

   if( erEnElev ) {
    console.log( "Du er en elev!" );
   } else {
    console.log( "Du er ikke en elev!" );
   }

   
   //Når man putter koden i Console vil det stå "du er en elev!", men hvis du endrer fra TRUE til FALSE i koden vil det stå "Du er ikke en elev!"



   console.log ("                DEL 2 FUNKSJONER");

   console.log( "oppgave a" ); 
   function square(number) {
    return number * number;
   }
   let number = square(2);
   console.log(square(2));



   //alle tall mellom 1-11, skriv ut alle tall individuelt.

console.log( "oppgave b" );

 let svar1 = 11 * 1;
 console.log(svar1);

 let svar2 = 11 * 2;
 console.log(svar2);

 let svar3 = 11 * 3;
 console.log(svar3);

 let svar4 = 11 * 4;
 console.log(svar4);

 let svar5 = 11 * 5;
 console.log(svar5);

 let svar6 = 11 * 6;
 console.log(svar6);

 let svar7 = 11 * 7;
 console.log(svar7);

 let svar8 = 11 * 8;
 console.log(svar8);

 let svar9 = 11 * 9;
 console.log(svar9);

 let svar10 = 11 * 10;
 console.log(svar10);

 let svar11 = 11 * 11;
 console.log(svar11);



 //parameter 
 console.log( "oppgave c" );

 let tall1 = 6
 let tall2 = 9

 let utsagn = true 

 function gange_sammen_to_tall(tall1, tall2){
   console.log(tall1 * tall2 );
 }

 gange_sammen_to_tall(tall1, tall2);
 
 