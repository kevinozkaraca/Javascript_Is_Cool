'use strict';
console.log("Fichier script.js chargé");

// HEADER COLOR EFFECT 
const headerH1 = document.getElementById('headerH1');
const headerH1Array = headerH1.innerHTML.split('');
const colorsOfHeaderH1 = ["#FABC3C", "#FFB238", "#F19143", "#FF773D", "#F55536", "#FABC3C", "#FFB238", "#F55536"];
// Couleur aléatoire du texte H1 avec les couleurs de la liste
function randomColorOfH1() {
    for (let i = 0; i < headerH1Array.length; i++) {
        headerH1Array[i] = `<span style="color: ${colorsOfHeaderH1[Math.floor(Math.random() * colorsOfHeaderH1.length)]}">${headerH1.innerHTML[i]}</span>`;
    }
    headerH1.innerHTML = headerH1Array.join('');

}
setInterval(() => {
    headerH1.innerHTML = "javascript is cool";
    randomColorOfH1();
}, 500);

// MiSE EN PAGE DU "MAIN" EN FONCTION DE LA TAILLE DU "HEADER"
function mainMargin() {
    setTimeout(() => {
        const main = document.querySelector('main');
        const header = document.querySelector('header');
        main.style.marginTop = `${header.clientHeight}px`;
    }, 500);
}
mainMargin();
window.addEventListener('resize', mainMargin);
