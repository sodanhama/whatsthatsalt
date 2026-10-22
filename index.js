import format from "./script.js";

const colorSelect = document.getElementById("color");
const smellSelect = document.getElementById("smell");
const dryHeatingSelect = document.getElementById("dry-heating");
const description = document.getElementById("description");
const content = document.getElementById("content");

colorSelect.addEventListener("change", function() {
    const color = this.selectedOptions[0].text;
    const details = colorSelect.value;
    const formattedDetails = format(details);
    colorSelect.remove()
    colorInference = document.createElement("p");
    colorInference.innerHTML = `${color} indicates presence of ${formattedDetails}.`;
    description.appendChild(colorInference);
})

smellSelect.addEventListener("change", function() {
    const smell = this.selectedOptions[0].text;
    const details = smellSelect.value;
    const formattedDetails = format(details);
    smellSelect.remove()
    smellInference = document.createElement("p");
    smellInference.innerHTML = `${smell} indicates presence of ${formattedDetails}.`;
    description.appendChild(smellInference);
})

dryHeatingSelect.addEventListener("change", function() {
    const dryHeating = this.selectedOptions[0].text;
    const details = dryHeatingSelect.value;
    const formattedDetails = format(details);
    dryHeatingSelect.remove()
    dryHeatingInference = document.createElement("p");
    dryHeatingInference.innerHTML = `${dryHeating} indicates presence of ${formattedDetails}.`;
    description.appendChild(dryHeatingInference);
})
