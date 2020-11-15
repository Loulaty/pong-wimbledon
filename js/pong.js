let $body = $("body");

//le terrain
let $terrain = $(".terrain");
let terrain=new Terrain($terrain);

//la balle
let $balle = $(".balle");
let balle=new Balle($balle);

//le joueur 1
let $joueur1 = $(".joueur1");
let $score1 = $(".score1");
let joueur1=new Joueur($joueur1,$score1);

//le joueur 2
let $joueur2 = $(".joueur2");
let $score2 = $(".score2");
let joueur2=new Joueur($joueur2,$score2);

//définit les adversaires pour l'attribution de points
joueur1.adversaire=joueur2;
joueur2.adversaire=joueur1;

//gèere les controlles utilisateur, clavier, tactile...
let controles=new Controles();

//un peu de musique ?
let audio=new Audio();

//contrôle la partie, pause, écran de demarage etc...
let partie=new Partie();




