
const canvas = document.getElementById('myCanvas');
const c = canvas.getContext("2d");
const gravity = 0.98;

c.fillRect(0,0,canvas.width, canvas.height)

class Sprite {
    constructor({position, velocity,color = 'blue'}) {
        this.position = position
        this.velocity = velocity
        this.height = 150
        this.width = 50
        this.lastKey
        this.hitBox = {
            position : this.position ,
            width : 100,
            height : 50
        }
        this.color =color
    }
    draw() {
        c.fillStyle = this.color
        c.fillRect(this.position.x,this.position.y,50,this.height) 
    
        //Création du rectangle de la HitBox
        c.fillStyle = 'white'
        c.fillRect(this.hitBox.position.x, this.hitBox.position.y, this.hitBox.width,this.hitBox.height)
    }
    update() {
        this.draw()
        this.position.x += this.velocity.x
        this.position.y += this.velocity.y

        if (this.position.y + this.height + this.velocity.y >= canvas.height){
            this.velocity.y = 0;
        }else this.velocity.y += gravity

    }
}
const player = new Sprite({
   position : {
    x : 0,
    y : 0,
    },
    velocity : {
        x : 0,
        y : 0,
    }
})

const enemy = new Sprite({
    position : {
     x : 400,
     y : 100,
     },
     velocity : {
         x : 0,
         y : 0,
     },
    color : 'green',
 })


console.log(player)

const keys = {
    q : {
        pressed: false
    },
    d : {
        pressed : false
    },
    z : {
        pressed: false
    }
}
let lastKey

function animate() {
    window.requestAnimationFrame(animate)
    c.clearRect(0,0, canvas.width, canvas.height)
    player.update();
    enemy.update();

    //vitesse du joueur inactif
    player.velocity.x = 0

    // Mouvement du Joueur
    if (keys.q.pressed && player.lastKey === 'q') {
        player.velocity.x = -10
    } else if (keys.d.pressed && player.lastKey === 'd'){
        player.velocity.x = 10
    }

    // Détéction de collision
    if (player.hitBox.position.x + player.hitBox.width >= enemy.position.x && player.hitBox.position.x <= enemy.position.x + enemy.width)
    {console.log('hit');
    }
}

animate()

 window.addEventListener('keydown',(event) => {
    switch (event.key) {
        case 'd' :
            keys.d.pressed = true
            player.lastKey = 'd'
            break;
        case 'q' :
            keys.q.pressed = true
            player.lastKey = 'q'
            break;
        case 'z' :
            player.velocity.y = -20
            break
    }
    console.log(event.key)
 })

 window.addEventListener('keyup', (event) =>{
    switch (event.key) {
        case 'd' :
            keys.d.pressed = false
            break;
        case 'q' :
            keys.q.pressed = false
            break;
        case 'z' :
            keys.z.pressed = false
            break
    }
 })
