const colorSelect = document.getElementById("color");
const smellSelect = document.getElementById("smell");
const dryHeatingSelect = document.getElementById("dry-heating");
const description = document.getElementById("description");
const content = document.getElementById("content");

colorSelect.addEventListener("change", function() {
    const details = colorSelect.value;
    colorSelect.remove()
    description.textContent = `You selected: ${details}`;
})

smellSelect.addEventListener("change", function() {
    const details = smellSelect.value;
    smellSelect.remove()
    description.textContent = `You selected: ${details}`;
})

dryHeatingSelect.addEventListener("change", function() {
    const details = dryHeatingSelect.value;
    dryHeatingSelect.remove()
    description.textContent = `You selected: ${details}`;
})
