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
             if(this.position.x==1550){
                this.velocity.x=-this.velocity.x
            } else if (this.position.x==0){
                this.velocity.x=-this.velocity.x
            }
            if(this.position.y==680){
                this.velocity.y=-this.velocity.y
            } else if (fly.position.y==-100){
                this.velocity.y=-this.velocity.y
            }
        }
        attack() {
            this.switchSprite('Attack')
            this.isHitting = true
            setTimeout(() => {
                this.isHitting = false
            }, 100)
        }
        takeHit(){
            this.switchSprite('Take_Hit')
    
        }
      
        switchSprite (sprite) {
            if (this.image === this.spritesdiffs.Attack.image && this.frama<this.spritesdiffs.Attack.framesMax-1 ) 
        return 
        if(this.image ===this.spritesdiffs.Take_Hit.image && this.frama<this.spritesdiffs.Take_Hit.framesMax-1)
        return
            switch (sprite) {
                case 'Idle':
                    if (this.image != this.spritesdiffs.Idle.image){
                        this.image = this.spritesdiffs.Idle.image
                        this.framesMax = this.spritesdiffs.Idle.framesMax
                        this.frama =0}
                    break;
                case 'Run':
                    if(this.image != this.spritesdiffs.Run.image){
                        this.image = this.spritesdiffs.Run.image
                        this.framesMax = this.spritesdiffs.Run.framesMax
                        this.frama =0}
                        break;
                case 'Attack':
                    if (this.image != this.spritesdiffs.Attack.image){
                    this.image = this.spritesdiffs.Attack.image
                    this.framesMax = this.spritesdiffs.Attack.framesMax
                    this.frama =0}
                        break
                case 'Death':
                    if (this.image != this.spritesdiffs.Death.image){
                        this.image = this.spritesdiffs.Death.image
                        this.framesMax = this.spritesdiffs.Death.framesMax
                        this.frama =0}
                           break
                case 'Take_Hit':
                    if (this.image != this.spritesdiffs.Take_Hit.image){
                        this.image = this.spritesdiffs.Take_Hit.image                            
                        this.framesMax = this.spritesdiffs.Take_Hit.framesMax
                        this.frama =0}
                            break
                case 'Walk':
                    if (this.image != this.spritesdiffs.Walk.image){
                        this.image = this.spritesdiffs.Walk.image                            
                        this.framesMax = this.spritesdiffs.Walk.framesMax
                        this.frama =0}
                    break
                
    }
} 
}

