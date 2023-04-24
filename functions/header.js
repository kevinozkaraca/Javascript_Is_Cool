// Couleur aléatoire du texte H1 avec les couleurs de la liste
function randomColorOfH1() {
    const headerH1 = document.getElementById('headerH1');
    const headerH1Array = headerH1.innerHTML.split('');
    let scroolY = window.scrollY;
    let colorsOfHeaderH1 = ["#FABC3C", "#FFB238", "#F19143", "#FF773D", "#F55536", "#FABC3C", "#FFB238", "#F55536"];
    if (scroolY > 0 && scroolY < 300) {
        colorsOfHeaderH1 = ["#FABC3C", "#FFB238", "#F19143", "#FF773D", "#F55536", "#FABC3C", "#FFB238", "#F55536"];
    }
    if (scroolY > 300 && scroolY < 600) {
        colorsOfHeaderH1 = ["#ACFF33", "#72E12A", "#3BFE01", "#18CC33", "#18CC59", "#11EC88", "#1BDFA6", "#92DF1B"];
    }
    if (scroolY > 600 && scroolY < 900) {
        colorsOfHeaderH1 = ["#00FFDC", "#1CABB9", "#1A88CB", "#1F35EC", "#75ACEB", "#5A35FF", "#8D62EA", "#9A39E6"];
    }
    if (scroolY > 900 && scroolY < 1200) {
        colorsOfHeaderH1 = ["#FABC3C", "#FFB238", "#F19143", "#FF773D", "#F55536", "#FABC3C", "#FFB238", "#F55536"];
    }
    if (scroolY > 1200 && scroolY < 1500) {
        colorsOfHeaderH1 = ["#ACFF33", "#72E12A", "#3BFE01", "#18CC33", "#18CC59", "#11EC88", "#1BDFA6", "#92DF1B"];
    }
    for (let i = 0; i < headerH1Array.length; i++) {
        headerH1Array[i] = `<span style="color: ${colorsOfHeaderH1[Math.floor(Math.random() * colorsOfHeaderH1.length)]}">${headerH1.innerHTML[i]}</span>`;
    }
    headerH1.innerHTML = headerH1Array.join('');
}
setInterval(() => {

    headerH1.innerHTML = "javascript is cool";
    randomColorOfH1();

}, 500);

export { randomColorOfH1 };