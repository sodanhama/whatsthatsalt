const main = document.querySelector('main');
const startButton = document.querySelector('#start');
const header = document.querySelector('#header');
const description = document.querySelector('#description');
const content = document.querySelector('#content');

let steps=[];

fetch('./steps.json')
    .then(response => response.json())
    .then(data => {
        steps = data;
    })
    .catch(error => {
        console.error('Error fetching steps:', error);
    });

let step = 0;

startButton.addEventListener('click', () => {
    startButton.innerHTML = "NEXT";
    if (steps.length > 0 && step < steps.length) {
        header.textContent = `${steps[step].title}`;
        description.textContent = `${steps[step].description}`;
        step++;
    } else if (step >= steps.length) {
        header.textContent = "Analysis complete";
        startButton.disabled = true;
    }
});