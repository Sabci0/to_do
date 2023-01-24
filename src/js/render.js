import {generateGUI} from "./generateGUI.js";

const app = document.getElementById('app')

export function render() {
    app.innerHTML = '';

    const containerTag = generateGUI();

    app.appendChild(containerTag);
}