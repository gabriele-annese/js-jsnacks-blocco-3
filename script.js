
// 1. Creare un oggetto che rappresenti un giocatore di basket, con le seguenti proprietà:
// - Codice giocatore
// - Nome
// - Cognome
// - Età
// - Media punti fatti per partita
// - Percentuale di successo per tiri da 3 punti
// 2. Generare tramite delle funzioni le statistiche di gioco, secondo queste regole:
// - il codice giocatore deve essere formato da 3 lettere maiuscole casuali e 3 cifre casuali
// - la media punti fatti per partita deve essere compresa tra 0 e 50
// - la percentuale di successo per tiri da 3 punti deve essere compresa tra 0 e 100
// 3. Stampare Nome, cognome, età e codice giocatore.
// 4. Creare un array di 10 giocatori di basket, con le regole sopra indicate
// 5. Creare un nuovo array con i giocatori che hanno una media di punti superiore a 35 e la percentuale di successo per i tiri da 3 punti superiore all’80%.

const player = {
    codice: '', 
    nome: 'mario',
    cognome: 'giordano',
    etá: 50,
    media: '',
    successi: '',
}
console.log(player);
// media
const mediaRandom = genRandom(0, 50);
// aggiungere media all oggetto
player.media = mediaRandom
console.log(player)
// sucessi
const successiRandom = genRandom(0, 100);
// aggiungere media all ogetto
player.successi = successiRandom
console.log(player)

// ************************FUNZIONI*******************//
function genRandom(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }