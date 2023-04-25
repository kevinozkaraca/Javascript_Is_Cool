// SECTION QUOTES
const quotesSection = document.getElementById('quotesSection');
const quotesText = document.getElementById('quotesText');
const quotesAuthor = document.getElementById('quotesAuthor');
const quotesButton = document.getElementById('quotesButton');
const quotesReader = document.getElementById('quotesReader');

const quotesTextArrray = [
    "Les bibliothèques et les frameworks JavaScript tels que jQuery, Bootstrap et Node.js ont révolutionné le développement web en fournissant des outils puissants pour simplifier les tâches courantes comme la manipulation du DOM.",
    "JavaScript permet de créer des applications web qui peuvent être facilement déployées sur différents environnements sans nécessiter de modifications importantes. Environs dans le sens environnement, pas environs dans le sens environs !",
    "Les applications web créées avec JavaScript peuvent être exécutées hors ligne grâce à la technologie de stockage en cache. Cache dans le sens de cache, pas cache dans le sens cache-cache, on se comprend, bien sur ! C'est génial !",
    "JavaScript est un langage à code source ouvert, ce qui signifie que tout le monde peut contribuer à son développement et à son amélioration. Bon moi pas encore mais toi peut-être ! et c'est génial, cool et tout ce que tu veux!",
    "JavaScript est un langage de programmation dynamique qui permet de modifier facilement le contenu d'une page web sans avoir à la recharger entièrement. recharger dans le sens d'actualiser, pas recharger dans le sens recharger !",
    "Le développement de JavaScript a été motivé par la nécessité de rendre les pages web plus interactives et plus dynamiques. Dynamiques dans le sens dynamique, pas dynamique dans le sens dynamique, on se comprend bien et c'est génial.",
    "JavaScript est un langage très flexible qui peut être utilisé pour créer des applications web simples ou complexes, en fonction des besoins du projet. Quels sont vos besoins ? Moi je ne sais pas ! Mais vous vous le sachiez ! Donc !",
    "Le développement de JavaScript a permis d'améliorer considérablement l'expérience utilisateur sur les sites web en permettant une interaction plus riche et plus fluide. fluide dans le sens rapide, pas fluide dans le sens fluide.",
    "JavaScript est un langage très populaire auprès des développeurs web, en partie grâce à sa facilité d'apprentissage et à la grande quantité de ressources disponibles en ligne. Avec n.p.m, je ne sais pas si vous connaissez n.p.m ?",
    "Les applications web créées avec JavaScript peuvent être adaptées à différents types d'appareils, ce qui en fait une solution flexible et pratique pour les projets multiplateformes. Pc, Mac, Linux, Android, iOS, Windows Phone ...",
    "JavaScript est souvent associé à des technologies comme HTML et CSS, qui permettent de créer des sites web visuellement attrayants et fonctionnels. C'est vraiment cool ! Les projets JavaScript sont vraiment cool ! Tout est cool !",
    "JavaScript est un langage de programmation qui évolue constamment, avec l'ajout régulier de nouvelles fonctionnalités et la correction de bugs. Maintenir un code JavaScript à jour est donc très important. Ne l'oubliez jamais !",
    "Les développeurs JavaScript peuvent utiliser des outils comme Node.js pour créer des applications côté serveur, ce qui permet de développer des applications web complètes en utilisant uniquement JavaScript. C'est vraiment cool !",
    "JavaScript est un langage de programmation qui peut être utilisé pour créer des applications web, des applications mobiles, des applications de bureau et bien plus encore. C'est vraiment incroyable ce que ce langage peut faire !",
    "JavaScript est un langage de programmation hautement évolutif qui peut être utilisé pour des projets de toutes tailles, des petites applications web aux grandes plates-formes de commerce électronique. Vraiment dingue comme info !",
    "Les développeurs JavaScript peuvent utiliser des outils de test automatisés pour s'assurer que leur code fonctionne correctement et qu'il ne contient pas d'erreurs. N'est pas extraordinaire ? On est d'accord ! Javascript est cool !",
    "JavaScript est un langage très performant qui permet de créer des applications web réactives et rapides, même pour des projets à grande échelle. Celle la je la trouve vraiment cool ! Et je ne suis pas le seul à le penser ! ...",
    "Le développement de JavaScript a permis de créer des applications web plus accessibles, car le code JavaScript peut être rendu accessible aux personnes atteintes de handicap visuel ou moteur. Et ça c'est vraiment super chouette !",
    "JavaScript est un langage très polyvalent qui peut être utilisé pour créer des applications web de tous types, de la simple page web statique aux applications web complexes avec une grande quantité de données et de fonctionnalités."
];

const quotesAuthorArray = ["Guillemette Legrand", "Jérôme Dubois", "Marie-Claude LeLoup", "Elise Renard",
    "Jean-Pierre Lefebvre", "Thibault Fournier", "Marianne Delorme", "Julien Bonnet", "Aurélie Leblanc",
    "Nicolas Baudry", "Anne-Sophie Giraud", "Etienne Reynaud", "Olivia Lambert", "Mathieu Rousset",
    "Lucie Bernardin", "Benoit Gauthier", "Léa Dufour", "Romain Marchand", "Caroline Faure",
    "Martin Germain", "Florence Robert", "Vincent Leduc", "Emilie Remy", "Guillaume Barbe",
    "Sophie Laurent", "Franck Chevalier", "Marie-Pierre Renaud"];

// Fonction qui génère une citation aléatoire
function randomQuotes() {
    quotesText.innerHTML = quotesTextArrray[Math.floor(Math.random() * quotesTextArrray.length)];
    quotesAuthor.innerHTML = quotesAuthorArray[Math.floor(Math.random() * quotesAuthorArray.length)];
}

// Fonction qui lit la citation
function textToSpeech() {
    if ('speechSynthesis' in window) {
        let synth = speechSynthesis;
        let textButton = quotesText.innerHTML;
        let textReading = new SpeechSynthesisUtterance(textButton);
        let voice = synth.getVoices().find((v) => v.lang === 'fr-FR');

        textReading.voice = voice;
        textReading.lang = 'fr-FR';
        textReading.pitch = 5.0;
        textReading.rate = 1.5;
        textReading.volume = 1.0;
        synth.speak(textReading);

    } else {
        alert('La Web Speech API n\'est pas disponible dans ce navigateur.');
    }
}
quotesButton.addEventListener('click', randomQuotes);
quotesReader.addEventListener('click', textToSpeech);

export { randomQuotes, textToSpeech };