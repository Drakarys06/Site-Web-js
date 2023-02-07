import Vaisseau from "./vaisseau.js";
import Asteroide from "./asteroide.js";
import { inputStates, definitEcouteurs } from "./ecouteurs.js";
import Bullet from "./bullet.js";

window.onload = init;
let canvas, ctx;
let vaisseau;
let asteroide = [];
let asteroide1;
let asteroide2;
let asteroide3;
let score = 0;

function init() {
    canvas = document.querySelector("#myCanvas");
    ctx = canvas.getContext("2d");

    definitEcouteurs();

    vaisseau = new Vaisseau();
    //asteroide[0] = new Asteroide();
    asteroide1 = new Asteroide();
    asteroide2 = new Asteroide();
    asteroide3 = new Asteroide();
    vaisseau.x = 100;
    vaisseau.y = 100;
    //asteroide[0].x = 300;
    //asteroide[0].y = 300;
    asteroide1.x = 200;
    asteroide1.y = 200;
    asteroide2.x = 20;
    asteroide2.y = 30;
    asteroide3.x = 500;
    asteroide3.y = 400;
    // on démarre l'animation
    requestAnimationFrame(mainloop);
}

function mainloop() {
    // 1 on efface le canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // 2 on dessine les objets
    vaisseau.draw(ctx);
    asteroide1.draw(ctx);
    //asteroide[0].draw(ctx);
    asteroide2.draw(ctx);
    asteroide3.draw(ctx);
    drawScore(ctx);

    // 3 on met à jour les objets
    if (inputStates.gauche) {
        vaisseau.tournerGauche();
    }
    if (inputStates.droite) {
        vaisseau.tournerDroite();
    }
    if (inputStates.haut) {
        vaisseau.accelere();
        vaisseau.drawReacteur(ctx);
    } else {
        vaisseau.deccelere();
    }
    if (inputStates.espace) {
        vaisseau.tirer(Date.now());
        detectionBulletsAsteroide();
    }
    detectionVaisseauAsteroide();
    vaisseau.avance(canvas.width, canvas.height);
    asteroide1.deplacement(canvas.width, canvas.height);
    asteroide2.deplacement(canvas.width, canvas.height);
    asteroide3.deplacement(canvas.width, canvas.height);

    // 4 on appelle la fonction mainloop dans 16ms
    requestAnimationFrame(mainloop);
}

function detectionBulletsAsteroide() {
    //Detection bullets asteroide
    for (var i = 0; i < vaisseau.bullets.length; i++) {
        var dxba1 = vaisseau.bullets[i].x - asteroide1.x;
        var dyba1 = vaisseau.bullets[i].y - asteroide1.y;
        var distance1 = Math.sqrt(dxba1 * dxba1 + dyba1 * dyba1);
        if (distance1 < 40 + 10) {
            asteroide1 = new Asteroide();
            score++;
        }
        var dxba2 = vaisseau.bullets[i].x - asteroide2.x;
        var dyba2 = vaisseau.bullets[i].y - asteroide2.y;
        var distance2 = Math.sqrt(dxba2 * dxba2 + dyba2 * dyba2);
        if (distance2 < 40 + 10) {
            asteroide2 = new Asteroide();
            score++;
        }
        var dxba3 = vaisseau.bullets[i].x - asteroide3.x;
        var dyba3 = vaisseau.bullets[i].y - asteroide3.y;
        var distance3 = Math.sqrt(dxba3 * dxba3 + dyba3 * dyba3);
        if (distance3 < 40 + 10) {
            asteroide3 = new Asteroide();
            score++;
        }
    }
}

function detectionVaisseauAsteroide() {
    //Detection vaisseau asteroide
    var dxva1 = vaisseau.x - asteroide1.x;
    var dyva1 = vaisseau.y - asteroide1.y;
    var distance1 = Math.sqrt(dxva1 * dxva1 + dyva1 * dyva1);
    if (distance1 < 40 + 25) {
        finDePartie(ctx);
    }
    var dxva2 = vaisseau.x - asteroide2.x;
    var dyva2 = vaisseau.y - asteroide2.y;
    var distance2 = Math.sqrt(dxva2 * dxva2 + dyva2 * dyva2);
    if (distance2 < 40 + 25) {
        finDePartie(ctx);
    }
    var dxva3 = vaisseau.x - asteroide3.x;
    var dyva3 = vaisseau.y - asteroide3.y;
    var distance3 = Math.sqrt(dxva3 * dxva3 + dyva3 * dyva3);
    if (distance3 < 40 + 25) {
        finDePartie(ctx);
    }
}

function finDePartie(ctx) {
    alert("GAME OVER");
    document.location.reload();
    clearInterval(interval);
}

function drawScore() {
    ctx.font = "16px Arial";
    ctx.fillStyle = "FFFFFF";
    ctx.fillText("Score: "+score, 8, 20);
}