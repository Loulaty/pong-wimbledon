let $body = $("body");
let $terrain = $(".terrain");
let $raquettes = $(".raquette");
let $joueur1 = $(".joueur1");
let $joueur2 = $(".joueur2");
let $score1 = $(".score1");
let $score2 = $(".score2");
let $balle = $(".balle");

//quelques variables de taille
let largeur = $terrain.width();
let hauteur = $terrain.height();

let balle=new Balle($balle);
let joueur1=new Joueur($joueur1,$score1);
let joueur2=new Joueur($joueur2,$score2);
joueur1.adversaire=joueur2;
joueur2.adversaire=joueur1;


function demarreNouveauJeu(){
    balle.x=largeur/2;
    balle.y=hauteur/2;
    balle.vitesseX=2;aa
    balle.vitesseY=Math.random()*2;
    if(Math.random()>0.5){
        balle.vitesseY=balle.vitesseY*-1;
    }
    if(Math.random()>0.5){
        balle.direction=balle.direction*-1;
    }
}

setInterval(() => {
    loop();
}, 10);

//quand on appuie sur une touche du clavier
window.addEventListener("keydown", function (event) {
    if (event.defaultPrevented) {
        return; // Do nothing if the event was already processed
    }
    switch (event.key) {
        case "ArrowDown":
            joueur2.descend=true;    
            break;
        case "ArrowUp":
            joueur2.monte=true; 
            break;

        case "q":
            joueur1.descend=true;    
            break;
        case "a":
            joueur1.monte=true; 
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

        case "ArrowDown":
            joueur2.descend=false;    
            break;
        case "ArrowUp":
            joueur2.monte=false; 
            break;

        case "q":
            joueur1.descend=false;    
            break;
        case "a":
            joueur1.monte=false; 
            break;
    }
    event.preventDefault();
}, true);

function loop() {
    joueur1.bouge();
    joueur2.bouge();
    balle.bouge();
}

demarreNouveauJeu();



// full screen
$body.on("click",function(){
    //$body[0].requestFullscreen();
})


//sounds
//createjs.Sound.registerSound("sound/pong.wav", "pong");
