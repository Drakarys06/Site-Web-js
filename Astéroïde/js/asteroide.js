export default class Asteroide {
    constructor() {
        this.x = 0;
        this.y = 0;
        this.angle = Math.random()*20;
        this.v = Math.random()*5;
    }

    init(x, y, v) {
        this.x = x;
        this.y = y;
        this.v = v;
    }

    draw(ctx) {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.translate(-50, -50);
        ctx.beginPath();
        //On dessine un cercle
        //ctx.arc(50, 50, 40, 0, 2 * Math.PI);
        
        // 1er astéroïde
        ctx.moveTo(20, 80);
        ctx.lineTo(15, 25);
        ctx.moveTo(15, 25);
        ctx.lineTo(40, 10);
        ctx.moveTo(40, 10);
        ctx.lineTo(70, 20);
        ctx.moveTo(70, 20);
        ctx.lineTo(80, 20);
        ctx.moveTo(80, 20);
        ctx.lineTo(90, 40);
        ctx.moveTo(90, 40);
        ctx.lineTo(80, 70);
        ctx.moveTo(80, 70);
        ctx.lineTo(50, 90);
        ctx.moveTo(50, 90);
        ctx.lineTo(20, 80);

        ctx.stroke();
        ctx.restore();
    }

    deplacement(largeurZone,hauteurZone){
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