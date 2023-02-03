export default class Vaisseau {
    constructor() {
        this.x = 0;
        this.y = 0;
        this.angle = 0;
        this.v = 0;
        this.vitesseRotation = 0.2;
        this.acceleration = 0.1;
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
    }

    tournerGauche() {
        this.angle -= this.vitesseRotation;
    }

    tournerDroite() {
        this.angle += this.vitesseRotation;
    }

    avance(){
        this.x += Math.cos(this.angle-Math.PI/2) * this.v;
        this.y += Math.sin(this.angle-Math.PI/2) * this.v;
    }

    accelere(){
        if(this.v < 5)
            this.v += this.acceleration;
    }
    deccelere(){
        if(this.v != 0)
            this.v -= this.acceleration;
        if(this.v < 0)
            this.v = 0;
    }
}