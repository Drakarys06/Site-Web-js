class Monsterfly extends Sprite {
    constructor({
        position,
        velocity,
        color = 'blue',
        imageSrc,
        scale=1,
        framesMax=1,
        spritesdiffs}) {
            // super([arguments]); // Le constructeur parent est appelé
            super({position,imageSrc,scale,framesMax})
            this.position = position
            this.velocity = velocity
            this.height = 150
            this.width = 50
            this.lastKey
            this.hitBox = {
                position : this.position ,
                width : 80,
                height : 150
            }
            this.color =color
            this.isHitting
            this.frama=0
            this.framevelocity=0
            this.frametime=5
            this.spritesdiffs = spritesdiffs

            for ( const sprite in this.spritesdiffs) {
                spritesdiffs[sprite].image = new Image();
                spritesdiffs[sprite].image.src = spritesdiffs[sprite].imageSrc
            }
        }
        
        update(){
            this.draw()
            this.idlemov()
            this.position.x += this.velocity.x
            this.position.y += this.velocity.y
    
        }

}