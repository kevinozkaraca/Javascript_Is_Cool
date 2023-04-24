// SECTION QUOTES
const quotesSection = document.getElementById('quotesSection');
const quotesText = document.getElementById('quotesText');
const quotesAuthor = document.getElementById('quotesAuthor');
const quotesButton = document.getElementById('quotesButton');
const quotesReader = document.getElementById('quotesReader');

const quotesTextArrray = ["JavaScript est le langage de programmation le plus largement utilisé dans le monde, avec plus de 97% de tous les sites web l'utilisant",
    "JavaScript a parcouru un long chemin depuis sa création en 1995, et aujourd'hui il est utilisé pour tout, de l'interactivité des sites web à la programmation côté serveur.",
    "JavaScript est un langage typé dynamiquement, ce qui signifie que les variables peuvent contenir des valeurs de n'importe quel type à tout moment.",
    "La popularité de JavaScript est due en partie à sa capacité à s'exécuter sur n'importe quelle plateforme, y compris les navigateurs web, les serveurs et les appareils mobiles.",
    "Les frameworks JavaScript tels que Angular, React et Vue ont révolutionné le développement web en fournissant des outils puissants pour la construction d'interfaces utilisateur complexes.",
    "JavaScript a une communauté dynamique de développeurs qui contribuent à des projets open source, écrivent des tutoriels et partagent les meilleures pratiques.",
    "Le modèle de programmation asynchrone de JavaScript lui permet de gérer plusieurs tâches simultanément, ce qui en fait un langage idéal pour la construction d'applications web réactives.",
    "Les fonctionnalités intégrées de JavaScript telles que les fermetures, les fonctions en tant qu'objets de première classe et l'héritage prototypal en font un langage puissant pour la construction d'applications évolutives.",
    "JavaScript peut être utilisé pour créer des animations, des jeux, des applications web, des applications mobiles, des logiciels de bureau et bien plus encore.",
    "Le JavaScript moderne utilise des outils tels que les transpilers, les linters et les bundlers pour améliorer la qualité et la maintenabilité du code.",
    "Le JavaScript est un langage accessible aux débutants, mais il est également assez puissant pour les développeurs expérimentés qui souhaitent créer des applications complexes.",
    "Les développeurs JavaScript sont en demande dans l'industrie, car la plupart des entreprises ont besoin de développeurs capables de créer des applications web interactives et réactives.",
    "JavaScript est utilisé pour créer des applications de bureau en utilisant des frameworks tels que Electron et NW.js.",
    "Les outils de débogage intégrés dans les navigateurs modernes permettent aux développeurs JavaScript de résoudre les problèmes de manière efficace et rapide.",
    "Les bibliothèques et les frameworks JavaScript tels que jQuery, Bootstrap et Node.js ont révolutionné le développement web en fournissant des outils puissants pour simplifier les tâches courantes.",
    "JavaScript permet de créer des applications web qui peuvent être facilement déployées sur différents environnements sans nécessiter de modifications importantes.",
    "Les applications web créées avec JavaScript peuvent être exécutées hors ligne grâce à la technologie de stockage en cache.",
    "JavaScript est un langage à code source ouvert, ce qui signifie que tout le monde peut contribuer à son développement et à son amélioration.",
    "Les développeurs JavaScript peuvent travailler à distance, car la plupart des outils et des ressources dont ils ont besoin sont disponibles en ligne.",
    "JavaScript est un langage de programmation dynamique qui permet de modifier facilement le contenu d'une page web sans avoir à la recharger entièrement.",
    "Le développement de JavaScript a été motivé par la nécessité de rendre les pages web plus interactives et plus dynamiques.",
    "JavaScript est un langage très flexible qui peut être utilisé pour créer des applications web simples ou complexes, en fonction des besoins du projet.",
    "Le développement de JavaScript a permis d'améliorer considérablement l'expérience utilisateur sur les sites web en permettant une interaction plus riche et plus fluide.",
    "JavaScript est un langage très populaire auprès des développeurs web, en partie grâce à sa facilité d'apprentissage et à la grande quantité de ressources disponibles en ligne.",
    "Les applications web créées avec JavaScript peuvent être adaptées à différents types d'appareils, ce qui en fait une solution flexible et pratique pour les projets multiplateformes.",
    "JavaScript est souvent associé à des technologies comme HTML et CSS, qui permettent de créer des sites web visuellement attrayants et fonctionnels.",
    "JavaScript est un langage de programmation qui évolue constamment, avec l'ajout régulier de nouvelles fonctionnalités et la correction de bugs.",
    "Les développeurs JavaScript peuvent utiliser des outils comme Node.js pour créer des applications côté serveur, ce qui permet de développer des applications web complètes en utilisant uniquement JavaScript.",
    "JavaScript est un langage de programmation qui peut être utilisé pour créer des applications web, des applications mobiles, des applications de bureau et bien plus encore.",
    "JavaScript est un langage de programmation hautement évolutif qui peut être utilisé pour des projets de toutes tailles, des petites applications web aux grandes plates-formes de commerce électronique.",
    "Les développeurs JavaScript peuvent utiliser des outils de test automatisés pour s'assurer que leur code fonctionne correctement et qu'il ne contient pas d'erreurs.",
    "JavaScript est un langage très performant qui permet de créer des applications web réactives et rapides, même pour des projets à grande échelle.",
    "Le développement de JavaScript a permis de créer des applications web plus accessibles, car le code JavaScript peut être rendu accessible aux personnes atteintes de handicap visuel ou moteur.",
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