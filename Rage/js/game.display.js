const game = {};
    game.display = {
        sprite : {
            image : null,
            width : null,
            height : null,
            posX : null,
            posY : null,
            numberOfFrames : null,
            frameIndex : 0,

            setSize : function (width, height) {
                this.width = width;
                this.height = height;
            },
            
            render :   function(canvasGame2DContext, x,y){
                this.posX = x;
                this.posY = y;
                canvasGame2DContext.drawImage(this.image,
                    this.frameIndex*this.width/this.numberOfFrames,
                    0,this.width/this.numberOfFrames,
                    this.height,
                    this.posX,
                    this.posY,
                    this.width/this.numberOfFrames,
                    this.height)
            },

            collide : function (sprite) {
                if (!(sprite.posX > this.posX + this.width
                || sprite.posX + sprite.width < this.posX
                || sprite.posY > this.posY + this.height
                || sprite.posY + sprite.height < this.posY)){
                    return true;
                }
                return false;
            },
            horizontalMove : function() {
            },

            verticalMove : function() {

            },
            update : function() {
                this.frameIndex = (this.frameIndex+1)%8;
            }
        },

        createSprite : function(imagePath, numberOfFrames) {
            var sprite = Object.create(this.sprite);
            sprite.image = new Image();
            sprite.image.src = "./assets/Fantômeguerrier/Idle.png";
            sprite.numberOfFrames = 1;
            return sprite;
        
        }
    }
    let Fantômeguerrier = game.display.createSprite("./assets/Fantômeguerrier/Idle.png");
    Fantômeguerrier.setSize(130,150);
   

window.onload = init;
function init() {
    let canvasGame2DContext = myCanvas.getContext('2d');
    setInterval(function(){
        Fantômeguerrier.update;
        canvasGame2DContext.clearRect(0,0,800,600)
        Fantômeguerrier.render(canvasGame2DContext,0,0)
    },50);
    }

