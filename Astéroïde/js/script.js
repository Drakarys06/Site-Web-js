import Vaisseau from "./vaisseau.js";
import { inputStates, definitEcouteurs } from "./ecouteurs.js";

window.onload = init;
let canvas, ctx;
let vaisseau;

function init() {
    canvas = document.querySelector("#myCanvas");
    ctx = canvas.getContext("2d");

    definitEcouteurs();
    vaisseau = new Vaisseau();
    vaisseau.x = 100;
    vaisseau.y = 100;
    // on démarre l'animation
    requestAnimationFrame(mainloop);
}

function mainloop() {
    // 1 on efface le canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // 2 on dessine les objets
    vaisseau.draw(ctx);

    // 3 on met à jour les objets
    if (inputStates.gauche) {
        vaisseau.tournerGauche();
    }
    if (inputStates.droite) {
        vaisseau.tournerDroite();
    }
    if (inputStates.espace) {
        vaisseau.accelere();
    } else {
        vaisseau.deccelere();
    }
    vaisseau.avance(canvas.width, canvas.height);
    // 4 on appelle la fonction mainloop dans 16ms
    requestAnimationFrame(mainloop);
}

