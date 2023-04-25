// Mise en page du "MAIN" en fonction du "HEADER"
function mainMargin() {
    setTimeout(() => {
        const main = document.querySelector('main');
        const header = document.querySelector('header');
        main.style.marginTop = `${header.clientHeight + 25}px`;
    }, 500);
}
mainMargin();
window.addEventListener('resize', mainMargin);

export { mainMargin };