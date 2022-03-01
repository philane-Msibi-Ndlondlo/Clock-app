'use script'

import View from './View.js';
import Controller from './Controller.js';

document.addEventListener("DOMContentLoaded", () => main());

function main() {
    const controller = new Controller(new View());
    controller.setQuote();
    controller.setTime();
}