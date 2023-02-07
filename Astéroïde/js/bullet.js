export default class Bullet {
    constructor(vaisseau) {
        this.x = vaisseau.x;
        this.y = vaisseau.y;
        this.angle = vaisseau.angle + Math.PI / 2;
    }

    draw(ctx) {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.angle);
        ctx.fillRect(0, 0, 5, 2);
        ctx.restore();
    }

    move(maxX, maxY) {
        this.x -= 10 * Math.cos(this.angle);
        this.y -= 10 * Math.sin(this.angle);
    }

}

