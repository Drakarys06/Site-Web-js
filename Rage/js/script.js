import game from game.display.js;
var Fantômeguerrier = game.display.createSprite("./assets/Fantômeguerrier/Idle.png");
Fantômeguerrier.setSize(130,150);

window.onload = init;
function init() {
    let canvasGame2DContext = myCanvas.getContext('2d');
    Fantômeguerrier.render(canvasGame2DContext,300,300);
    }