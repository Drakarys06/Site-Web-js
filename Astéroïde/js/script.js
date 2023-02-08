import Vaisseau from "./vaisseau.js";
import Asteroide from "./asteroide.js";
import { inputStates, definitEcouteurs } from "./ecouteurs.js";
import Bullet from "./bullet.js";
import PetitAsteroide from "./petitAsteroide.js";

window.onload = init;
let canvas, ctx;
let vaisseau;
let asteroide = [];
let score = 0;
let petit = [];
let audio = new Audio("https://www.youtube.com/watch?v=WdFxHb9wpW8");

function init() {
    canvas = document.querySelector("#myCanvasAst");
    ctx = canvas.getContext("2d");

    definitEcouteurs();

    vaisseau = new Vaisseau();
    vaisseau.x = 300;
    vaisseau.y = 300;
    asteroide[0] = new Asteroide();
    asteroide[0].x = 500;
    asteroide[0].y = 500;
    asteroide[1] = new Asteroide();
    asteroide[1].x = 100;
    asteroide[1].y = 100;
    asteroide[2] = new Asteroide();
    asteroide[2].x = 500;
    asteroide[2].y = 500;
    petit[0] = new PetitAsteroide();
    petit[0].x = 100;
    petit[0].y = 100;
    petit[1] = new PetitAsteroide();
    petit[1].x = 100;
    petit[1].y = 100;
    petit[2] = new PetitAsteroide();
    petit[2].x = 100;
    petit[2].y = 100;
    // on démarre l'animation
    requestAnimationFrame(mainloop);
}

function mainloop() {
    // 1 on efface le canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // 2 on dessine les objets

    vaisseau.draw(ctx);
    for (var i = 0; i < asteroide.length; i++)
        asteroide[i].draw(ctx);
    for (var i = 0; i < petit.length; i++)
        petit[i].draw(ctx);
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
        audio.play();
    }
    detectionVaisseauAsteroide();
    detectionVaisseauPetitAsteroide();
    detectionBulletsPetitAsteroide();
    detectionBulletsAsteroide();
    vaisseau.avance(canvas.width, canvas.height);
    for (var i = 0; i < petit.length; i++)
        petit[i].deplacement(canvas.width, canvas.height);
    for (var i = 0; i < asteroide.length; i++)
        asteroide[i].deplacement(canvas.width, canvas.height);
    // 4 on appelle la fonction mainloop dans 16ms
    requestAnimationFrame(mainloop);
}

function detectionBulletsAsteroide() {
    //Detection bullets asteroide
    for (var i = 0; i < vaisseau.bullets.length; i++) {
        for (var j = 0; j < asteroide.length; j++) {
            var dxba = vaisseau.bullets[i].x - asteroide[j].x;
            var dyba = vaisseau.bullets[i].y - asteroide[j].y;
            var distance = Math.sqrt(dxba * dxba + dyba * dyba);
            if (distance < 40 + 5) {
                asteroide[j] = new Asteroide();
                score++;
            }
        }
    }
}

function detectionBulletsPetitAsteroide() {
    //Detection bullets asteroide
    for (var i = 0; i < vaisseau.bullets.length; i++) {
        for (var j = 0; j < petit.length; j++) {
            var dxba = vaisseau.bullets[i].x - petit[j].x;
            var dyba = vaisseau.bullets[i].y - petit[j].y;
            var distance = Math.sqrt(dxba * dxba + dyba * dyba);
            if (distance < 10 + 5) {
                petit[j] = new PetitAsteroide();
                score += 3;
            }
        }
    }
}
function detectionVaisseauPetitAsteroide() {
    //Detection vaisseau asteroide
    for (var i = 0; i < petit.length; i++) {
        var dxva = vaisseau.x - petit[i].x;
        var dyva = vaisseau.y - petit[i].y;
        var distance = Math.sqrt(dxva * dxva + dyva * dyva);
        if (distance < 10 + 20) {
            finDePartie(ctx);
        }
    }
}

function detectionVaisseauAsteroide() {
    //Detection vaisseau asteroide
    for (var i = 0; i < asteroide.length; i++) {
        var dxva = vaisseau.x - asteroide[i].x;
        var dyva = vaisseau.y - asteroide[i].y;
        var distance = Math.sqrt(dxva * dxva + dyva * dyva);
        if (distance < 40 + 20) {
            finDePartie(ctx);
        }
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
    ctx.fillText("Score: " + score, 8, 20);
}