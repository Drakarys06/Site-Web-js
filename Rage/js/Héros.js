
const canvas = document.getElementById('myCanvas');
const c = canvas.getContext("2d");

c.fillRect(0,0,canvas.width, canvas.height)

class Sprite {
    constructor({position, velocity}) {
        this.position = position
        this.velocity = velocity
    }
    draw() {
        c.fillStyle = 'red'
       c.fillRect(this.position.x,this.position.y,50,150) 
    }
    update() {
        this.draw()
        this.position.y += 10
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
     }
 })


console.log(player)

function animate() {
    window.requestAnimationFrame(animate)
    console.log('go');
    player.update();
    enemy.update();
}

animate()
