'use strict';
console.log("Fichier script.js chargé");
// effet de couleur aléatoire sur le texte H1
import { randomColorOfH1 } from '../functions/header.js';
// Mise en page du "MAIN" en fonction du "HEADER"
import { mainMargin } from '../functions/resize.js';
// Citation aléatoire et lecture de la citation
import { randomQuotes } from '../functions/quotes.js';

function init() {
    randomColorOfH1();
    mainMargin();
    randomQuotes();
}
init();




