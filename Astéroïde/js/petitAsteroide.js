export default class PetitAsteroide {
    constructor() {
        this.x = 0;
        this.y = 0;
        this.angle = Math.random() * 20;
        this.v = 3 + Math.random() * 4;
    }

    init(x, y, v) {
        this.x = x;
        this.y = y;
        this.v = v;
    }
    draw(ctx) {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.translate(-23, -40);
        ctx.beginPath();
        //On dessine un cercle
        //ctx.arc(23, 40, 15, 0, 2 * Math.PI);

        // 1er astéroïde
        ctx.moveTo(10, 40);
        ctx.lineTo(15, 25);
        ctx.moveTo(15, 25);
        ctx.lineTo(26, 25);
        ctx.moveTo(26, 25);
        ctx.lineTo(40, 40);
        ctx.moveTo(40, 40);
        ctx.lineTo(40, 50);
        ctx.moveTo(40, 50);
        ctx.lineTo(30, 55);
        ctx.moveTo(30, 55);
        ctx.lineTo(20, 50);
        ctx.moveTo(20, 50);
        ctx.lineTo(10, 40);

        ctx.stroke();
        ctx.restore();
    }

    deplacement(largeurZone, hauteurZone) {
        if (this.x < 0)
            this.x = 600;
        if (this.x > largeurZone)
            this.x = 1;
        if (this.y < 0)
            this.y = 600;
        if (this.y > hauteurZone)
            this.y = 1;
        this.x += Math.cos(this.angle - Math.PI / 2) * this.v;
        this.y += Math.sin(this.angle - Math.PI / 2) * this.v;
    }

}