import Vaisseau from "./vaisseau.js";
import Asteroide from "./asteroide.js";
import { inputStates, definitEcouteurs } from "./ecouteurs.js";
import Bullet from "./bullet.js";

window.onload = menu;
let canvas, ctx;
let vaisseau;
let asteroide = [];
let score = 0;
let petit = [];
let meilleurScore = 0;

function menu(){
    canvas = document.querySelector("#myCanvasAst");
    ctx = canvas.getContext("2d");
    definitEcouteurs();
    ctx.save();
    ctx.fillStyle = "white";
    ctx.font = "bold 30px Arial";
    ctx.fillText("ASTEROIDE", 250, 100);
    ctx.font = "bold 20px Arial";
    ctx.fillText("Appuyer sur la touche Entrer pour commencer", 200, 200);
    ctx.fillText("Le but du jeu est de détruire tous les astéroides", 200, 250);
    ctx.fillText("COMMANDE : ", 100, 350);
    ctx.fillText("Flèche gauche : tourner à gauche ", 100, 400);
    ctx.fillText("Flèche droite : tourner à droite ", 100, 450);
    ctx.fillText("Flèche haut :  accélérer  ", 100, 500);
    ctx.fillText("Espace :  tirer  ", 100, 550);
    ctx.restore();
    if(inputStates.enter){
        init();
    }
}

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
    petit[0] = new Asteroide();
    petit[0].x = 100;
    petit[0].y = 100;
    petit[1] = new Asteroide();
    petit[1].x = 100;
    petit[1].y = 100;
    petit[2] = new Asteroide();
    petit[2].x = 100;
    petit[2].y = 100;
    // on démarre l'animation
    requestAnimationFrame(mainloop);
}

function mainloop() {
    // 1 on efface le canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "white";
    // 2 on dessine les objets

    vaisseau.draw(ctx);
    for (var i = 0; i < asteroide.length; i++)
        asteroide[i].draw(ctx);
    for (var i = 0; i < petit.length; i++)
        petit[i].drawPetit(ctx);
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
    }
    if (detectionVaisseauAsteroide() || detectionVaisseauPetitAsteroide()) {
        gameOver(ctx);
    }
    else {
        detectionBulletsPetitAsteroide();
        detectionBulletsAsteroide();
        vaisseau.avance(canvas.width, canvas.height);
        for (var i = 0; i < petit.length; i++)
            petit[i].deplacementPetit(canvas.width, canvas.height);
        for (var i = 0; i < asteroide.length; i++)
            asteroide[i].deplacement(canvas.width, canvas.height);
        // 4 on appelle la fonction mainloop dans 16ms
        requestAnimationFrame(mainloop);
    }
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
                petit[j] = new Asteroide();
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
            return true;
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
            return true;
        }
    }
}

function drawScore() {
    ctx.font = "16px Arial";
    ctx.fillStyle = "000000";
    ctx.fillText("Score: " + score, 8, 20);
}

function gameOver(ctx) {
    if (score > meilleurScore)
        meilleurScore = score;
    ctx.save();
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.font = "30px Arial";
    ctx.fillStyle = "000000";
    ctx.fillText("GAME OVER", 100, 200);
    ctx.fillText("SCORE: " + score, 100, 250);
    ctx.fillText("Meilleur score: " + meilleurScore, 300, 250);
    ctx.fillText("POUR REJOUER, APPUYER SUR ENTRER", 100, 300);
    ctx.fillText("COMMANDE : ", 100, 350);
    ctx.fillText("Flèche gauche : tourner à gauche ", 100, 400);
    ctx.fillText("Flèche droite : tourner à droite ", 100, 450);
    ctx.fillText("Flèche haut :  accélérer  ", 100, 500);
    ctx.fillText("Espace :  tirer  ", 100, 550);
    ctx.restore();
}

export default function rejouer() {
    restorer();
}

function restorer() {
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
    petit[0] = new Asteroide();
    petit[0].x = 100;
    petit[0].y = 100;
    petit[1] = new Asteroide();
    petit[1].x = 100;
    petit[1].y = 100;
    petit[2] = new Asteroide();
    petit[2].x = 100;
    petit[2].y = 100;
    score = 0;
    // on démarre l'animation
    requestAnimationFrame(mainloop);
}