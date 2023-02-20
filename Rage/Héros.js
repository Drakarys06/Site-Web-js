const canvas = document.getElementById('myCanvas');
const c = canvas.getContext("2d");
const gravity = 0.98;

c.fillRect(0,0,canvas.width, canvas.height)
const background = new Sprite({
    position : {
        x:0,
        y:0
    },
    imageSrc: './assets/Final/background_0.png',
    scale: 2.6
})
const light = new Sprite({
    position : {
        x:0,
        y:800
    },
    imageSrc: './assets/PlateformeCastle/anim_light2.png',
    scale: 2,
    framesMax : 4,
})
const player = new Character ({
   position : {
    x : 0,
    y : 0
    },
    velocity : {
        x : 0,
        y : 0
    },
    imageSrc: './assets/Fantômeguerrier/Idle.png',
    framesMax: 8,
    scale: 1.5,
    spritesdiffs: {
        Idle:{
            imageSrc:'./assets/Fantômeguerrier/Idle.png',
            framesMax:8,
        },
        Attack:{
            imageSrc:'./assets/Fantômeguerrier/attack.png',
            framesMax:10,
        },
        Run:{
            imageSrc:'./assets/Fantômeguerrier/Run.png',
            framesMax:8,
        },
        Walk:{
            imageSrc:'./assets/Fantômeguerrier/Walk.png',
            framesMax:8,
        },
        Death:{
            imageSrc:'./assets/Fantômeguerrier/Death.png',
            framesMax:7,
        },
        Take_Hit:{
            imageSrc:'./assets/Fantômeguerrier/Take Hit.png',
            framesMax:4,
        }
    }

})



const enemy = new Character({
    position : {
     x : 400,
     y : 100,
     },
     velocity : {
         x : 0,
         y : 0,
     },
     imageSrc: './assets/Trashmob1/Idle.png',
     framesMax:4,
     scale:1.5

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
    background.update()
    light.update();
    player.update();
    enemy.update();

    //vitesse du joueur inactif
    player.velocity.x = 0

    // Mouvement du Joueur
    if (keys.q.pressed && player.lastKey === 'q') {
        player.velocity.x = -5
        player.switchSprite('Walk')
    } else if (keys.d.pressed && player.lastKey === 'd'){
        player.velocity.x = 5
        player.switchSprite('Run')
    } else {
        player.switchSprite('Idle')
    }

    // Détéction de collision
    if (player.hitBox.position.x + player.hitBox.width >= enemy.position.x && player.hitBox.position.x <= enemy.position.x + enemy.width//hitbox lateral
        && player.hitBox.position.y + player.hitBox.height >= enemy.position.y && player.hitBox.position.y <=  enemy.position.y + enemy.height //hitbox vertical
        && player.isHitting //Ici on appelle que la collision ne suffit pas à être attaqué il faut clicker pour attaquer
        )
    {
    player.isHitting =false //Une seule attaque sera reconnue par le boutton d'attack pressé
    console.log('hit');
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
        case ' ':
            player.attack()
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
