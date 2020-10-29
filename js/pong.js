let $body = $("body");

let $court = $(".court");
let $raquettes = $(".raquette");
let $joueur1 = $(".joueur1");
let $joueur2 = $(".joueur2");
let $balle = $(".balle");
let $murHaut = $(".mur.haut");
let $murBas = $(".mur.bas");


//quelques variables de taille
let tailleBalle = $balle.width();
let hauteurRaquettes = $raquettes.height();
let joueurWidth = $raquettes.width();
let joueur1X = $joueur1.position().left;
let joueur2X = $joueur2.position().left;

let hauteurMur = $murHaut.height();
let largeur = $court.width();
let hauteur = $court.height();


let toucheHautAppuyee = false;
let toucheBasAppuyee = false;

//mouvement des raquettes
let raquettesY = 0;
let vitesseRaquette = 3;

//mouvements de la balle
let balleVitesseMax = 10;
let balleVitesseX = 1;
let balleDirectionX = 1;
let balleVitesseY = 0.5;
let ballePositionX = largeur / 2;
let ballePositionY = hauteur / 2;

setInterval(() => {
    loop();
}, 10);

//quand on appuie sur une touche du clavier
window.addEventListener("keydown", function (event) {
    if (event.defaultPrevented) {
        return; // Do nothing if the event was already processed
    }
    switch (event.key) {
        case "Down": // IE/Edge specific value
        case "ArrowDown":
            toucheBasAppuyee = true;
            break;
        case "Up": // IE/Edge specific value
        case "ArrowUp":
            toucheHautAppuyee = true;
            break;
    }
    event.preventDefault();
}, true);

//quand on relache une touche du clavier
window.addEventListener("keyup", function (event) {
    if (event.defaultPrevented) {
        return; // Do nothing if the event was already processed
    }
    switch (event.key) {

        case "Down": // IE/Edge specific value
        case "ArrowDown":
            toucheBasAppuyee = false;
            break;

        case "Up": // IE/Edge specific value
        case "ArrowUp":
            toucheHautAppuyee = false;
            break;
    }
    event.preventDefault();
}, true);

/**
 * Fait bouger les raquettes verticalement en fonction des touches qui sont appuyées
 */
function bougeRaquettes() {
    if (toucheBasAppuyee) {
        raquettesY = raquettesY + vitesseRaquette;
    }
    if (toucheHautAppuyee) {
        raquettesY = raquettesY - vitesseRaquette;
    }

}

/**
 * Permet de brider le mouvement des raquettes
 */
function limiteRaquettes() {
    if (raquettesY < hauteurMur) {
        raquettesY = hauteurMur;
    }
    if (raquettesY > hauteur - hauteurMur - hauteurRaquettes) {
        raquettesY = hauteur - hauteurMur - hauteurRaquettes;
    }
}

function bougeBalle() {
    ballePositionY = ballePositionY + balleVitesseY;
    ballePositionX = ballePositionX + ( balleVitesseX * balleDirectionX );
    $balle.css("top", ballePositionY);
    $balle.css("left", ballePositionX);
}
/**
 * Permet de brider le mouvement de la balle et inverser les positions
 */
function limiteBalle() {
    //murs en haut et en bas
    if (ballePositionY < hauteurMur || ballePositionY + tailleBalle > hauteur - hauteurMur) {
        balleVitesseY = balleVitesseY * -1.0;
        ballePositionY += balleVitesseY;
    }

    //raquettes
    if (touche1() || touche2()) {
        //inverse la direction
        balleDirectionX = balleDirectionX * -1.0;
        ballePositionX += balleVitesseX * balleDirectionX;
        accelere();
    }
}

function accelere() {
    if (Math.abs(balleVitesseX) < balleVitesseMax) {
        balleVitesseX = balleVitesseX + 0.2;
    }
}

function touche1() {
    if (ballePositionX < joueur1X + joueurWidth) {
        if(ballePositionY+tailleBalle < raquettesY || ballePositionY > raquettesY + hauteurRaquettes){
            //perdu
            classeCssTemporaire($joueur1,"rate-balle");
        }else{
            classeCssTemporaire($joueur1,"touche-balle");
            //createjs.Sound.play("pong");
            calculeAngle($joueur1)
        }
        return true;
    }
}
function touche2() {
    if (ballePositionX + tailleBalle > joueur2X) {
        if(ballePositionY+tailleBalle < raquettesY || ballePositionY > raquettesY + hauteurRaquettes){
            //perdu
            classeCssTemporaire($joueur2,"rate-balle");
        }else{
            classeCssTemporaire($joueur2,"touche-balle");
            //createjs.Sound.play("pong");
            calculeAngle($joueur2)
        }
        return true;
    }
}


function calculeAngle($raquette){
    /**
     * Valeur entre -1 et 1
     */
    let positionBalle = (   ballePositionY - (raquettesY + hauteurRaquettes / 2) ) / (hauteurRaquettes / 2);
    balleVitesseY= balleVitesseY  + (positionBalle * 0.5)
}

function classeCssTemporaire($element,classe){
    $element.addClass(classe);
    setTimeout(() => {
        $element.removeClass(classe);
    }, 100);
}



function loop() {
    bougeRaquettes();
    limiteRaquettes();
    $raquettes.css("top", raquettesY);
    limiteBalle();
    bougeBalle();
}



// full screen
$body.on("click",function(){
    //$body[0].requestFullscreen();
})


//sounds
//createjs.Sound.registerSound("sound/pong.wav", "pong");
