// VERIFICA DEL FUNZIONAMENTO DI JS
console.log('Test verifica JS');

/**
 * 1) CHIEDERE ALL'UTENTE IL N° DI KM CHE VUOLE PERCORRERE
 * 2) CHIEDERE ALL'UTENTE L'ETA' 
 * 3) CALCOLO DEL PREZZO TOTALE SULLA BASE DEI SEGUENTI PARAMETRI:
 * 3A) COSTO AL KM 0.21
 * 3B) APPLICARE UNO SCONTO SULLA VERIFICA DELLA ETA':
 * 3Ba) ETA' < 18 ANNI SCONTO 20%
 * 3Bb) ETA' > 65 ANNI SCONTO 40%
 * 4) MOSTRARE IL PREZZO FINALE E INDICARE SE E' STATO APPLICATO LO SCONTO O MENO
 * 
 */

 var userKm;
 var userAge;

// RICHIESTA KM DA PERCORRERE
 userKm = prompt('Quanti km devi percorrere?');
 // PRINT DEL DATO OTTENUTO
 console.log("KM inseriti: " + userKm);
 

 // RICHIESTA DELLA SUA ETA'
 userAge = prompt ('Quanti anni hai?');
 // PRINT DEL DATO OTTENUTO
 console.log("ETA' inserita : " + userAge);
 
