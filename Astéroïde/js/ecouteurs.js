import rejouer from "./script.js";

let inputStates = {};

function definitEcouteurs() {
    definirEcouteurClavier();
    definitEcouteursSouris();
}

function capteEvent(event){
    if( event.preventDefault ){
        event.preventDefault();
        event.stopPropagation();
    }else{
        Event.returnValue = false;
        Event.cancelBubble = true;
    }
}

function definirEcouteurClavier() {
    window.onkeydown = (event) => {
        switch (event.key) {
            case "ArrowLeft":
                inputStates.gauche = true;
                break;
            case "ArrowRight":
                inputStates.droite = true;
                break;
            case "ArrowUp":
                inputStates.haut = true;
                break;
            case "ArrowDown":
                inputStates.bas = true;
                break;
            case " ":
                inputStates.espace = true;
                break;
            case "Enter":
                rejouer();
                break;
        }
        capteEvent(event)
    }
    window.onkeyup = (event) => {
        switch (event.key) {
            case "ArrowLeft":
                inputStates.gauche = false;
                break;
            case "ArrowRight":
                inputStates.droite = false;
                break;
            case "ArrowUp":
                inputStates.haut = false;
                break;
            case "ArrowDown":
                inputStates.bas = false;
                break;
            case " ":
                inputStates.espace = false;
                break;
            case "Enter":
                inputStates.enter = false;
                break;
        }
    }
}

function definitEcouteursSouris() {
    window.onmousedown = (event) => {
        inputStates.clicGauche = true;
    }
    window.onmouseup = (event) => {
        inputStates.clicGauche = false;
    }
}
export { definitEcouteurs, inputStates }