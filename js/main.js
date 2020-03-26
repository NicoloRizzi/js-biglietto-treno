// VERIFICA DEL FUNZIONAMENTO DI JS
console.log('Test verifica JS');

/**
 * 1) CHIEDERE ALL'UTENTE IL N° DI KM CHE VUOLE PERCORRERE
 * 2) CHIEDERE ALL'UTENTE L'ETA' 
 * 3) CALCOLO DEL PREZZO TOTALE SULLA BASE DEI SEGUENTI PARAMETRI:
 * 3A) COSTO AL KM 0.21€
 * 3B) APPLICARE UNO SCONTO SULLA VERIFICA DELLA ETA':
 * 3Ba) ETA' < 18 ANNI SCONTO 20%
 * 3Bb) ETA' > 65 ANNI SCONTO 40%
 * 4) MOSTRARE IL PREZZO FINALE E INDICARE SE E' STATO APPLICATO LO SCONTO O MENO
 * 
 */

 var userKm;
 var userAge;
 var prezzoFinale;
 var costoKm = 0.21;
 var costoDaScontare;
 var costoTot;
 var valoreSconto;


// RICHIESTA KM DA PERCORRERE
 userKm = parseInt(prompt('Quanti km devi percorrere?'));
 // PRINT DEL DATO OTTENUTO
 console.log("KM inseriti: " + userKm);
 

 // RICHIESTA DELLA SUA ETA'
 userAge = parseInt(prompt ('Quanti anni hai?'));
 // PRINT DEL DATO OTTENUTO
 console.log("ETA' inserita : " + userAge);


 // CALCOLO DEL COSTO DA SCONTARE SULLA BASE DEL VALORE DI USERKM
 costoDaScontare = userKm * costoKm;
 // PRINT DEL DATO OTTENUTO
 console.log("Valore del costo sulla sola base km : " + costoDaScontare + "€");

 // INIZIO DELLA CONDIZIONE SULLA BASE DELL'ETA' APPLICO IL RELATIVO SCONTO
 if (userAge <= 18) {
     valoreSconto = (20 * costoDaScontare) / 100;
     //PRINT DEL VALORE DELLO SCONTO
     console.log("Valore dello sconto è : " + valoreSconto + "€");
 } else if (userAge >= 65) {
     valoreSconto = (40 * costoDaScontare) / 100;
     // PRINT DEL VALORE SCONTO
     console.log("Valore dello sconto è : " + valoreSconto + "€");
 } 
 //CALCOLO DEL COSTO EFFETTIVO
 costoTot = (costoDaScontare - valoreSconto).toFixed(2);
// PRINT DEL COSTO EFFETTIVO
console.log("Il tuo prezzo finale scontato è : " + costoTot + "€");

 
