let $body = $("body");
let $terrain = $(".terrain");
let $joueur1 = $(".joueur1");
let $joueur2 = $(".joueur2");
let $score1 = $(".score1");
let $score2 = $(".score2");
let $balle = $(".balle");

let terrain=new Terrain($terrain);
let balle=new Balle($balle);
let joueur1=new Joueur($joueur1,$score1);
let joueur2=new Joueur($joueur2,$score2);
let controles=new Controles();
let audio=new Audio();
joueur1.adversaire=joueur2;
joueur2.adversaire=joueur1;
let paused=false;
function demarreNouveauJeu(){
    //stope pendant 3 secondes
    paused=true;
    terrain.affichePause();
    setTimeout(
        function(){
            terrain.affichePlay();
            paused=false;
            balle.x=terrain.largeur/2;
            balle.y=terrain.hauteur/2;
            balle.vitesseX=2;
            balle.vitesseY=Math.random()*2;
            if(Math.random()>0.5){
                balle.vitesseY=balle.vitesseY*-1;
            }
            if(Math.random()>0.5){
                balle.direction=balle.direction*-1;
            }
        },
        3000
    );

}

setInterval(() => {
    if(!paused){
        loop();
    }

}, 10);

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



