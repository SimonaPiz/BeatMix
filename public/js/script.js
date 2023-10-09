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

/*3.
Una funzione denominata clear che accetta una stringa del nome di una matrice e imposta 
tutti i valori nella matrice corretta su false.
*/
const clear = (arrayName) => {
  switch (arrayName) {
    case 'kicks':
      kicks = new Array(16).fill(false);
    break;
    case 'snares':
      snares = new Array(16).fill(false);
    break;
    case 'hiHats':
      hiHats = new Array(16).fill(false);
    break;
    case 'rideCymbals':
      rideCymbals = new Array(16).fill(false);
    break;
    default: return;
  };  
};

/*4.
Una funzione denominata invert che prende una stringa del nome di un array e capovolge il 
valore booleano di tutti gli elementi nell'array corretto.
*/
const invert = (arrayName) => {
  switch (arrayName) {
    case 'kicks':
      kicks = kicks.map(kick => {
        if (!kick) {
          return kick = true;
        } else {
          return kick = false;
        };
      });
    break;
    case 'snares':
      snares = snares.map(kick => {
        if (!kick) {
          return kick = true;
        } else {
          return kick = false;
        };
      });
    break;
    case 'hiHats':
      hiHats = hiHats.map(kick => {
        if (!kick) {
          return kick = true;
        } else {
          return kick = false;
        };
      });
    break;
    case 'rideCymbals':
      rideCymbals = rideCymbals.map(kick => {
        if (!kick) {
          return kick = true;
        } else {
          return kick = false;
        };
      });
    break;
    default: return;
  };  
};

/*BONUS.
una funzione chiamata getNeighborPads che accetta un parametro x, y e size. 
Nell'applicazione, questi valori si riferiscono alla griglia del sintetizzatore: x e y indicizzati 
a zero dalla parte inferiore sinistra della griglia, ed sizeè un numero che rappresenta il numero 
di righe/colonne nel quadrato. getNeighborPadsdovrebbe restituire un array di neighbor, ciascuno 
nel formato [xValue, yValue]. I vicini sono i quadrati immediatamente a sinistra, a destra, sopra e 
sotto una posizione della griglia.

Per lavorare sul bonus con i test, dovrai rimuovere il loro stato in sospeso. 
Apri test/test.js e modifica la riga che inizia xdescribe('BONUS: getNeighborPads() 
function'(dovrebbe essere intorno alla riga 360 nel file di test). 
Se elimini il x(in modo che la riga inizi semplicemente con describe(e salvi il file di test 
prima di rieseguirlo, i tuoi test bonus saranno ora attivi.
*/
const getNeighborPads = (x, y, size) => {
  if ( x < 0 || y < 0 || x >= size || y >= size) {
    return [];
  };

  switch (x) {
    case 0:
      if (y === 0) {
        return [[1, 0], [0, 1]];
      } else if (y === size-1) {
        return [[0, y-1], [1, y]];
      } else {
        return [[0, y-1], [1, y], [0, y+1]];        
      }
      break;
    case size-1:
      if (y === 0) {
        return [[x-1, 0], [x, 1]];
      } else if (y === size-1) {
        return [[x, y-1], [x-1, y]];
      } else {
        return [[x, y-1], [x-1, y], [x, y+1]];        
      }
      break;
    default:
      if (y === 0) {
        return [[x-1, 0], [x, 1], [x+1, 0]];
      } else if (y === size-1) {
        return [[x-1, y], [x, y-1], [x+1, y]];
      } else {
        return [[x-1, y], [x, y-1], [x+1, y], [x, y+1]];        
      }
      break;
  };
};