class Sprite {
    constructor({position, imageSrc, scale =1, framesMax=1}) {
        this.position = position
        this.height = 150
        this.width = 50
        this.image = new Image()
        this.image.src = imageSrc
        this.scale = scale
        this.framesMax = framesMax
        this.frama =0
        this.framevelocity =0
        this.frametime = 10
    }
    draw() {
        c.drawImage(
            this.image,
            this.frama * (this.image.width / this.framesMax),
            0,
            this.image.width / this.framesMax,
            this.image.height,
            this.position.x,
            this.position.y,
            this.image.width/this.framesMax* this.scale,
            this.image.height* this.scale,

            )
     }
     idlemov() {
        this.framevelocity++
        if (this.framevelocity % this.frametime==0)

        if (this.frama <this.framesMax -1){
        this.frama++
        }else {
            this.frama =0
     }}
    update() {
        this.draw()
        this.idlemov()
        
        }
        
}
