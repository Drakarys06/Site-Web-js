class Character extends Sprite {
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
    /**  draw() {
        c.fillStyle = this.color
        c.fillRect(this.position.x,this.position.y,50,this.height) 
    
        //Création du rectangle de la HitBox
        if (this.isHitting){
        c.fillStyle = 'white'
        c.fillRect(this.hitBox.position.x, this.hitBox.position.y, this.hitBox.width,this.hitBox.height)
    }}
    */
    update() {
        this.draw()
        this.idlemov()
        this.position.x += this.velocity.x
        this.position.y += this.velocity.y

        if (this.position.y + this.height + this.velocity.y >= canvas.height-50){
            this.velocity.y = 0;
        }else this.velocity.y += gravity
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
            
}}
}