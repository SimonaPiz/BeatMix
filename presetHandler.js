// Use this presets array inside your presetHandler
const presets = require('./presets');

/*5.
una funzione denominata presetHandler. Questa funzione verrà chiamata dall'interno del tuo 
server per ottenere un preset esistente o creare/aggiornare un preset.
- presetHandlerrichiede fino a tre argomenti. Il primo argomento è una stringa che rappresenta 
  il tipo di richiesta: 'GET'o 'PUT'. Il secondo argomento è l'indice dell'array presetsdell'array. 
  Per 'PUT'le richieste, newPresetArrayverrà passato anche un terzo argomento, che rappresenta il nuovo 
  array di preset di batteria da salvare in quell'indice.
- presetHandlerdovrebbe restituire un array. Questo array avrà uno o due elementi a seconda di come 
  viene chiamato. Se presetHandlerviene chiamato con un invalid index, dovrebbe restituire un array 
  con 404come primo elemento, il che significa che quell'indice di array è Not Found . 
  Se indexè valido, il primo elemento dell'array restituito dovrebbe essere 200, il che significa 
  che la richiesta era OK .
- Se presetHandlerviene chiamato un metodo che non è 'GET'or 'PUT', dovrebbe restituire un array 
  con 400come primo elemento, il che significa che si trattava di una Bad Request .
- Se l'indice era valido, presetHandlerdovrebbe restituire anche un secondo elemento nell'array. 
  per 'GET'le richieste, quell'elemento dovrebbe essere l'array preimpostato in quell'indice dell'array. 
  Per 'PUT'le richieste, dovrebbe salvare newPresetArray in quell'indice e quindi restituirlo anche come 
  secondo elemento.
- Se stai testando i preset con l'app stessa, dovrai arrestare e riavviare il server per vedere le 
  modifiche che scrivi in ​​presetHandler.js avere effetto.
*/
const presetHandler = (request, index, newArray) => {
  if (index < 0 || index > 16) {
    return [404];
  } else {
    if (request === 'GET') {
      return [200, presets[index]];
    } else if (request === 'PUT') {
      presets[index] = newArray;
      return [200, newArray];
    } else {
      return [400];
    }
  }
};


// Leave this line so that your presetHandler function can be used elsewhere:
module.exports = presetHandler;
