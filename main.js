import Lightbox from "./lightbox/Lightbox.js"

Lightbox.activate();

const myButton = document.createElement("button");

myButton.textContent = "Click me!";

Lightbox.show(myButton);