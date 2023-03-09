const canvas = document.getElementById('myCanvas');
const c = canvas.getContext("2d");
const gravity = 0.98;

c.fillRect(0,0,canvas.width, canvas.height)
let score =0

const life = new Sprite({
    position : {
        x:50,
        y:5
    },
    imageSrc:'./assets/life/HeartsFrame1.png',
    scale:2,
    framesMax:1,
    spritesdiffs: {
    Half:{
        imageSrc:'./assets/life/HeartsFrame3.png',
        framesMax:1,
    },
    Dead:{
        imageSrc:'./assets/life/HeartsFrame3.png',
        framesMax:1,
    }}
})
const background = new Sprite({
    position : {
        x:0,
        y:-100
    },
    imageSrc: './assets/Final/background_0.png',
    scale: 2.4
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
const light2 = new Sprite({
    position : {
        x:390,
        y:800
    },
    imageSrc: './assets/PlateformeCastle/anim_light2.png',
    scale: 2,
    framesMax : 4,
})
const light3 = new Sprite({
    position : {
        x:710,
        y:800
    },
    imageSrc: './assets/PlateformeCastle/anim_light2.png',
    scale: 2,
    framesMax : 4,
})
const light4 = new Sprite({
    position : {
        x:1065,
        y:800
    },
    imageSrc: './assets/PlateformeCastle/anim_light2.png',
    scale: 2,
    framesMax : 4,
})
const light5 = new Sprite({
    position : {
        x:1430,
        y:800
    },
    imageSrc: './assets/PlateformeCastle/anim_light2.png',
    scale: 2,
    framesMax : 4,
})
const background2 = new Sprite({
    position : {
        x:0,
        y:-120
    },
    imageSrc: './assets/Final/background_1.png',
    scale:2.25
})
const wall = new Sprite({
    position : {
        x:0,
        y:300
    },
    imageSrc: './assets/Pixel2DCastle1.2/Pixel2DCastle3/ground5.png',
    scale:2.5
})
const wall2 = new Sprite({
    position : {
        x:390,
        y:300
    },
    imageSrc: './assets/Pixel2DCastle1.2/Pixel2DCastle3/ground5.png',
    scale:2.5
})
const wall3 = new Sprite({
    position : {
        x:680,
        y:300
    },
    imageSrc: './assets/Pixel2DCastle1.2/Pixel2DCastle3/ground5.png',
    scale:2.5
})
const wall4 = new Sprite({
    position : {
        x:1040,
        y:300
    },
    imageSrc: './assets/Pixel2DCastle1.2/Pixel2DCastle3/ground5.png',
    scale:2.5
})
const planche1 = new Sprite({
    position : {
        x:0,
        y:600
    },
    imageSrc: './assets/Pixel2DCastle1.2/Pixel2DCastle3/ground1.png',
    scale:1.3
})
const planche2 = new Sprite({
    position : {
        x:390,
        y:600
    },
    imageSrc: './assets/Pixel2DCastle1.2/Pixel2DCastle3/ground1.png',
    scale:1.3
})
const planche3 = new Sprite({
    position : {
        x:680,
        y:600
    },
    imageSrc: './assets/Pixel2DCastle1.2/Pixel2DCastle3/ground1.png',
    scale:1.3
})
const planche4 = new Sprite({
    position : {
        x:1070,
        y:600
    },
    imageSrc: './assets/Pixel2DCastle1.2/Pixel2DCastle3/ground1.png',
    scale:1.3
})
const planche5 = new Sprite({
    position : {
        x:1460,
        y:600
    },
    imageSrc: './assets/Pixel2DCastle1.2/Pixel2DCastle3/ground1.png',
    scale:1.3
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
     scale:1.5,
     spritesdiffs: {
        Idle:{
            imageSrc:'./assets/Trashmob1/Idle.png',
            framesMax:4,
        },
        Attack:{
            imageSrc:'./assets/Trashmob1/Attack.png',
            framesMax:8,
        },
        Walk:{
            imageSrc:'./assets/Trashmob1/Walk.png',
            framesMax:4,
        },
        Death:{
            imageSrc:'./assets/Fantômeguerrier/Death.png',
            framesMax:7,
        },
        Take_Hit:{
            imageSrc:'./assets/Trashmob1/Take Hit.png',
            framesMax:4,
        },
    }

 })
 const enemy2 = new Character({
    position : {
     x : 600,
     y : 100,
     },
     velocity : {
         x : 0,
         y : 0,
     },
     imageSrc: './assets/Trashmob1/Idle.png',
     framesMax:4,
     scale:1.5,
     spritesdiffs: {
        Idle:{
            imageSrc:'./assets/Trashmob1/Idle.png',
            framesMax:4,
        },
        Attack:{
            imageSrc:'./assets/Trashmob1/Attack.png',
            framesMax:8,
        },
        Walk:{
            imageSrc:'./assets/Trashmob1/Walk.png',
            framesMax:4,
        },
        Death:{
            imageSrc:'./assets/Fantômeguerrier/Death.png',
            framesMax:7,
        },
        Take_Hit:{
            imageSrc:'./assets/Trashmob1/Take Hit.png',
            framesMax:4,
        },
    }

 })

 const enemy3 = new Sprite({
    position : {
     x : 500,
     y : 0,
     },
     velocity : {
         x : 0,
         y : 0,
     },
     imageSrc: './assets/png/Idle4.png',
     framesMax:4,
     scale:2,
    })

 const fly = new Monsterfly({
    position : {
        x : 500,
        y : 400,
    },
    velocity : {
        x : 2,
        y:2,
    },
    imageSrc: './assets/Trashmob4/Flight.png',
    framesMax:8,
    scale:2,
    spritesdiffs: {
        Idle:{
            imageSrc: './assets/Trashmob4/Flight.png',
            framesMax:8
        },
        Take_Hit: {
            imageSrc:'./assets/Trashmob4/Take Hit.png',
        framesMax:4,
     },
     Attack: {
         imageSrc: './assets/Trashmob4/Attack.png',
         framesMax:8,
     },
     Death: {
         imageSrc: './assets/Trashmob4/Death.png',
         framesMax:4,
     }
    }
    }
)
const fly2 = new Monsterfly({
    position : {
        x : 200,
        y : 400,
    },
    velocity : {
        x : 2,
        y:-2,
    },
    imageSrc: './assets/Trashmob4/Flight.png',
    framesMax:8,
    scale:2,
    spritesdiffs: {
        Idle:{
            imageSrc: './assets/Trashmob4/Flight.png',
            framesMax:8
        },
        Take_Hit: { 
            imageSrc: './assets/Trashmob4/Take Hit.png',
        framesMax:4,
     },
     Attack: {
         imageSrc: './assets/Trashmob4/Attack.png',
         framesMax:8,
     },
     Death: {
         imageSrc: './assets/Trashmob4/Death.png',
         framesMax:4,
     }
    }
    }
)
const fly3 = new Monsterfly({
    position : {
        x : 800,
        y : 400,
    },
    velocity : {
        x : -2,
        y:2,
    },
    imageSrc: './assets/Trashmob4/Flight.png',
    framesMax:8,
    scale:2,
    spritesdiffs: {
        Idle:{
            imageSrc: './assets/Trashmob4/Flight.png',
            framesMax:8
        },
        Take_Hit:{
             imageSrc: './assets/Trashmob4/Take Hit.png',
        framesMax:4,
     },
        Attack: {
            imageSrc: './assets/Trashmob4/Attack.png',
            framesMax:8,
        },
        Death: {
            imageSrc: './assets/Trashmob4/Death.png',
            framesMax:4,
        }

    }
    }
)
const goblin = new Goblin({
    position : {
        x : 0,
        y:650,
    },
    velocity : {
        x :2,
        y:0
    },
    imageSrc : './assets/Trashmob3/Attack.png',
    framesMax:8,
    scale:2,
    spritesdiffs: {
        Idle: {
            imageSrc: './assets/Trashmob3/Attack.png',
            framesMax: 8,
        },
        Take_Hit: {
            imageSrc: './assets/Trashmob3/Take Hit.png',
            framesMax:4
        },
        Attack: {
            imageSrc: './assets/Trashmob3/Attack.png',
            framesMax:8,
        },
        Death: {
            imageSrc: './assets/Trashmob3/Death.png',
            framesMax:4,
        }
    }
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
    background2.update()
    wall2.update()
    wall.update()
    wall3.update()
    wall4.update()
    planche1.update()
    planche2.update()
    planche3.update()
    planche4.update()
    planche5.update()
    life.update()



    light.update();
    light2.update();
    light3.update();
    light4.update();
    light5.update();
    player.update();
    enemy.update();
    enemy2.update();
    enemy3.update();
    fly.update();
    fly2.update();
    fly3.update();
    goblin.update();


    //vitesse du joueur inactif
    player.velocity.x = 0
    if(enemy.velocity.x !=0){
        enemy.switchSprite('Walk')
        enemy2.switchSprite('Walk')
        fly.switchSprite("Flight")
        fly2.switchSprite("Flight")
        fly3.switchSprite("Flight")
        goblin.switchSprite("Attack")  
        goblin.attack()
        } else {
        enemy.switchSprite('Idle')
        enemy2.switchSprite('Idle')
        fly.switchSprite("Idle")
        fly2.switchSprite("Idle")
        fly3.switchSprite("Idle")
        goblin.switchSprite("Idle") 
        goblin.attack()
        }
      
    
   
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
    player.isHitting = false
    console.log('hit');
    enemy.velocity.x=0
    enemy.takeHit()
    score++
    //Une seule attaque sera reconnue par le boutton d'attack pressé
    }
    if (player.hitBox.position.x + player.hitBox.width >= enemy2.position.x && player.hitBox.position.x <= enemy2.position.x + enemy2.width//hitbox lateral
    && player.hitBox.position.y + player.hitBox.height >= enemy2.position.y && player.hitBox.position.y <=  enemy2.position.y + enemy2.height //hitbox vertical
    && player.isHitting //Ici on appelle que la collision ne suffit pas à être attaqué il faut clicker pour attaquer
    )
{
player.isHitting = false
console.log('hit');
enemy2.takeHit()
score++
//Une seule attaque sera reconnue par le boutton d'attack pressé
}
if (player.hitBox.position.x + player.hitBox.width >= fly.position.x && player.hitBox.position.x <= fly.position.x + fly.width//hitbox lateral
&& player.hitBox.position.y + player.hitBox.height >= fly.position.y && player.hitBox.position.y <=  fly.position.y + fly.height //hitbox vertical
&& player.isHitting //Ici on appelle que la collision ne suffit pas à être attaqué il faut clicker pour attaquer
)
{
player.isHitting = false
console.log('hit');
fly.takeHit()
fly.position.y=100
score =score+2
}
if (player.hitBox.position.x + player.hitBox.width >= fly2.position.x && player.hitBox.position.x <= fly2.position.x + fly2.width//hitbox lateral
&& player.hitBox.position.y + player.hitBox.height >= fly2.position.y && player.hitBox.position.y <=  fly2.position.y + fly2.height //hitbox vertical
&& player.isHitting //Ici on appelle que la collision ne suffit pas à être attaqué il faut clicker pour attaquer
)
{
player.isHitting = false
console.log('hit');
fly2.takeHit()
fly2.position.x =200
score =score+2

}
if (player.hitBox.position.x + player.hitBox.width >= fly3.position.x && player.hitBox.position.x <= fly3.position.x + fly3.width//hitbox lateral
&& player.hitBox.position.y + player.hitBox.height >= fly3.position.y && player.hitBox.position.y <=  fly3.position.y + fly3.height //hitbox vertical
&& player.isHitting //Ici on appelle qued la collision ne suffit pas à être attaqué il faut clicker pour attaquer
)
{
player.isHitting = false
console.log('hit');
fly3.takeHit()
fly3.position.x =100
score =score+2
}
if (player.hitBox.position.x + player.hitBox.width >= goblin.position.x && player.hitBox.position.x <= goblin.position.x + goblin.width//hitbox lateral
&& player.hitBox.position.y + player.hitBox.height >= goblin.position.y && player.hitBox.position.y <=  goblin.position.y + goblin.height //hitbox vertical
&& player.isHitting //Ici on appelle qued la collision ne suffit pas à être attaqué il faut clicker pour attaquer
)
{
player.isHitting = false
console.log('hit');
goblin.takeHit()
goblin.position.x=-150
score =score+10
}
if (goblin.hitBox.position.x + goblin.hitBox.width >= player.position.x && goblin.hitBox.position.x <= player.position.x + goblin.width//hitbox lateral
&& goblin.hitBox.position.y + goblin.hitBox.height >= player.position.y && goblin.hitBox.position.y <=  player.position.y + goblin.height //hitbox vertical
&& goblin.isHitting //Ici on appelle que la collision ne suffit pas à être attaqué il faut clicker pour attaquer
)
{
goblin.isHitting = false
console.log('hit');
player.takeHit();
console.log('dead')
score =score-20
if(player.takeHit) 
{
   
}
//Une seule attaque sera reconnue par le boutton d'attack pressé
}
c.font = "30px Arial";
c.fillStyle = "white";
c.fillText(`Score : ${score}` , canvas.width - 1500, canvas.height -870);
}
animate()
// Ecouteurs
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

