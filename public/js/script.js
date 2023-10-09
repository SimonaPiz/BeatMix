/*1.
Quattro variabili per rappresentare gli array di drum pad. Questi array prendono il nome dai 
tamburi che rappresentano: kicks, snares, hiHats, rideCymbals. Questi array dovrebbero avere 
tutti una lunghezza 16e essere riempiti con false.
*/
// Drum Arrays
let kicks = new Array(16).fill(false);

let snares = new Array(16).fill(false);

let hiHats = new Array(16).fill(false);

let rideCymbals = new Array(16).fill(false);

/*2.
una funzione chiamata toggleDrumche accetta due argomenti: una stringa che rappresenta il nome 
dell'array ( 'kicks', 'snares', 'hiHats'o 'rideCymbals') e un numero di indice. Questa funzione 
dovrebbe capovolgere il valore booleano nell'array corretto all'indice specificato.
*/
const toggleDrum = (arrayName, index) => {
  // verifichiamo che i valori di index siano validi
  if(index < 0 || index > 16) {
    return;
  };

  // toggle drum
  switch (arrayName) {
    case 'kicks':
      if (kicks[index] === true) {
        kicks[index] = false;
      } else {
        kicks[index] = true;
      };
      break;
    case 'snares':
      if (snares[index] === true) {
        snares[index] = false;
      } else {
        snares[index] = true;
      };
      break;
    case 'hiHats':
      if (hiHats[index] === true) {
        hiHats[index] = false;
      } else {
        hiHats[index] = true;
      };
      break;
    case 'rideCymbals':
      if (rideCymbals[index] === true) {
        rideCymbals[index] = false;
      } else {
        rideCymbals[index] = true;
      };
      break;
    default: return;
  };
};
