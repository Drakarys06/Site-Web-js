import Bullet from './bullet.js'
export default class Vaisseau {
    constructor() {
        this.x = 0;
        this.y = 0;
        this.angle = 0;
        this.v = 0;
        this.vitesseRotation = 0.10;
        this.acceleration = 0.05;
        this.bullets = [];
        this.delayMinBetweenBullets = 250;
    }

    init(x, y, v) {
        this.x = x;
        this.y = y;
        this.v = v;
    }

    draw(ctx) {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.angle);
        ctx.translate(-15, -15);

        // On dessine un rectangle englobant
        //ctx.strokeRect(0, 0, 30, 30);

        // on dessine un triangle pour le vaisseau
        ctx.beginPath();
        ctx.strokeStyle = "white";
        // 1er trait à gauche
        ctx.moveTo(0, 30);
        ctx.lineTo(15, 0);
        // 2ème trait à droite
        ctx.lineTo(30, 30);
        // Troisème trait
        ctx.moveTo(5, 20);
        ctx.lineTo(25, 20);

        ctx.stroke();
        ctx.restore();

        this.drawBullets(ctx);
    }

    drawBullets(ctx) {
        for (let i = 0; i < this.bullets.length; i++) {
            let b = this.bullets[i];
            b.draw(ctx);
            b.move();
            if (b.x < 0 || b.y < 0 || b.x > 800 || b.y > 600)
                this.removeBullet(b);

        }
    }

    drawReacteur(ctx){
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.angle);
        ctx.translate(-15, -15);

        ctx.beginPath();
        ctx.strokeStyle = "white";
        ctx.moveTo(10, 20);
        ctx.lineTo(15, 30);
        ctx.moveTo(15, 30);
        ctx.lineTo(20, 20);
        ctx.stroke();
        ctx.restore();
    }

    tournerGauche() {
        this.angle -= this.vitesseRotation;
    }

    tournerDroite() {
        this.angle += this.vitesseRotation;
    }

    /* Rotation par angle c'est injouable et j'arrive pas a enlever l'inercie
       tournerGauche() {
        if (this.vitesseAngulaire > -0.1)
            this.vitesseAngulaire -= this.vitesseRotation;
    }

    tournerDroite() {
        if (this.vitesseAngulaire < 0.1)
            this.vitesseAngulaire += this.vitesseRotation;
    }

    rotation() {
        if (this.vitesseAngulaire < 0.3 && this.vitesseAngulaire > -0.3)
            this.angle += this.vitesseAngulaire;
    }
    */

    avance(largeurZone, hauteurZone) {
        if (this.x < 0)
            this.x = 800;
        if (this.x > largeurZone)
            this.x = 1;
        if (this.y < 0)
            this.y = 600;
        if (this.y > hauteurZone)
            this.y = 1;
        this.x += Math.cos(this.angle - Math.PI / 2) * this.v;
        this.y += Math.sin(this.angle - Math.PI / 2) * this.v;
    }

    accelere() {
        if (this.v < 5)
            this.v += this.acceleration;
    }

    deccelere() {
        if (this.v != 0)
            this.v -= this.acceleration;
        if (this.v < 0)
            this.v = 0;
    }

    tirer(time) {
        var tempEcoule = 0;

        if (this.lastBulletTime !== undefined) {
            tempEcoule = time - this.lastBulletTime;
            //console.log("temps écoulé = " + tempEcoule);
        }

        if (
            this.lastBulletTime === undefined ||
            tempEcoule > this.delayMinBetweenBullets
        ) {
            this.bullets.push(new Bullet(this));
            // on mémorise le dernier temps.
            var audio = document.getElementById("weaponAudio");
            audio.play();
            this.lastBulletTime = time;
        }
        
    }
    
    removeBullet(bullet) {
        let position = this.bullets.indexOf(bullet);
        this.bullets.splice(position, 1);
    }

}