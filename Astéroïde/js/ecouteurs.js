let inputStates = {};


function definitEcouteurs() {
    definirEcouteurClavier();
    //definitEcouteursSouris();
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
        }

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
        }
    }
}

export { definitEcouteurs, inputStates }