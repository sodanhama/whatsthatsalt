const main = document.querySelector('main');
let step = 0;

window.addEventListener('load', () => {
    step++;

    setTimeout(() => {
        main.innerHTML = `<h1>Step ${step}</h1><h2>Preliminary tests</h2>`;
    }, 2000);

})