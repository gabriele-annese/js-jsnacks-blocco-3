
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
// array 10 giocatori
const players = [
    {
        codice: `${lettere(3)+ numeri(3)}`, 
        nome: 'mario',
        cognome: 'giordano',
        eta: `${genRandom(18, 40)}`,
        media: `${genRandom(0, 50)}`,
        successi: `${genRandom(0, 100)}`,
    },
    {
        codice: `${lettere(3)+ numeri(3)}`, 
        nome: 'matteo',
        cognome: 'salvini',
        eta: `${genRandom(18, 40)}`,
        media: `${genRandom(0, 50)}`,
        successi: `${genRandom(0, 100)}`,
    },
    {
        codice: `${lettere(3)+ numeri(3)}`, 
        nome: 'enzo',
        cognome: 'miccio',
        eta: `${genRandom(18, 40)}`,
        media: `${genRandom(0, 50)}`,
        successi: `${genRandom(0, 100)}`,
    },
    {
        codice: `${lettere(3)+ numeri(3)}`, 
        nome: 'vittorio',
        cognome: 'sgarbi',
        eta: `${genRandom(18, 40)}`,
        media: `${genRandom(0, 50)}`,
        successi: `${genRandom(0, 100)}`,
    },
    {
        codice: `${lettere(3)+ numeri(3)}`, 
        nome: 'fabrizio',
        cognome: 'corona',
        etá: `${genRandom(18, 40)}`,
        media: `${genRandom(0, 50)}`,
        successi: `${genRandom(0, 100)}`,
    },
    {
        codice: `${lettere(3)+ numeri(3)}`, 
        nome: 'denis',
        cognome: 'dosio',
        eta: `${genRandom(18, 40)}`,
        media: `${genRandom(0, 50)}`,
        successi: `${genRandom(0, 100)}`,
    },
    {
        codice: `${lettere(3)+ numeri(3)}`, 
        nome: 'maria',
        cognome: 'de filippi',
        eta: `${genRandom(18, 40)}`,
        media: `${genRandom(0, 50)}`,
        successi: `${genRandom(0, 100)}`,
    },
    {
        codice: `${lettere(3)+ numeri(3)}`, 
        nome: 'barbara',
        cognome: 'd usrso',
        eta: `${genRandom(18, 40)}`,
        media: `${genRandom(0, 50)}`,
        successi: `${genRandom(0, 100)}`,
    },
    {
        codice: `${lettere(3)+ numeri(3)}`, 
        nome: 'er',
        cognome: 'lucertola',
        eta: `${genRandom(18, 40)}`,
        media: `${genRandom(0, 50)}`,
        successi: `${genRandom(0, 100)}`,
    },
    {
        codice: `${lettere(3)+ numeri(3)}`, 
        nome: 'francesca',
        cognome: 'cipriani',
        eta: `${genRandom(18, 40)}`,
        media: `${genRandom(0, 50)}`,
        successi: `${genRandom(0, 100)}`,
    },
];
console.log(players)

// media
const mediaRandom = genRandom(0, 50);
// aggiungere media all oggetto
players.media = mediaRandom

// sucessi
const successiRandom =genRandom(0, 100);
// aggiungere media all ogetto
players.successi = successiRandom

// creare array 3 numeri
const codiceRandom = lettere(3)+ numeri(3)
player.codice = codiceRandom;
players.codice = codiceRandom;
// creare nodo html
const playerPrint = document.querySelector('.player') 
playerPrint.innerHTML+= `
    <div>
        <h3>Nome: ${player.nome}</h3>
        <h3> cognome: ${player.cognome}</h3>
        <h3>codice player:${player.codice}</h3>
    </div>`



// creare un array con i player che hanno media superiore a 35 e la percentuale di successo per i tiri da 3 punti superiore all’80%
const playersTop =[];

playersMedia = players.map( (element) =>{
    let verificaMedia = element.media = parseInt(element.media);
    let verificaSucessi = element.successi = parseInt(element.successi);
    if (( verificaMedia > 35) && (verificaSucessi > 80)) {
        playersTop.push(element)
        const topPlayer= document.querySelector('.topPlayer')
        topPlayer.innerHTML+= `
            <div>
                <h3>Nome: ${element.nome}</h3>
                <h3> cognome: ${element.cognome}</h3>
                <h3>codice player:${element.codice}</h3>
            </div>`
    }
    return 
})
console.log(playersTop)
// ************************FUNZIONI*******************//
function genRandom(min, max) {
    return parseInt(Math.floor(Math.random() * (max - min) ) + min);
}


  function lettere(length) {
    let result= '';
    const characters= 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
 }

 function numeri(length) {
    let result= '';
    const characters= '0123456789';
    const charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
 }

