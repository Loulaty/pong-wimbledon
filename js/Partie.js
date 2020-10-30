class Partie {
    constructor() {
        let me=this;
        this.paused = true;
        this.$ecranDebut = $(".ecran-debut");
        this.$btnGo = $(".btn-go");

        this.$btnGo.click(function (e) {
            me.demarreNouveauJeu();
            //plein écran
            $body[0].requestFullscreen();
        });
        //une boucle qui fait tourner notre jeu
        setInterval(() => {
            joueur1.bouge();
            joueur2.bouge();
            if (!me.paused) {
                balle.bouge();
            }
        }, 10);
        //une boucle toutes les 3 secondes qui recalculte les positions et dimenssions
        setInterval(
            function () {
                terrain.calculeTailles();
                joueur1.calculeTailles();
                joueur2.calculeTailles();
                balle.calculeTailles();
            }, 3000
        );
    }
    /**
     * Masque l'écran de début, fait une pause de 3 secondes et lance la balle !
     */
    demarreNouveauJeu() {
        //masque ecran de début
        this.$ecranDebut.addClass("invisible");
        this.paused = true;
        //balle devient rouge
        terrain.affichePause();
        let me = this;
        //stope pendant 3 secondes
        setTimeout(
            function () {
                terrain.affichePlay();
                me.paused = false;
                balle.x = terrain.largeur / 2;
                balle.y = terrain.hauteur / 2;
                balle.vitesseX = balle.vitesseDepart;
                balle.vitesseY = Math.random() * balle.vitesseDepart;

                //direction de la balle en aléatoire
                if (Math.random() > 0.5) {
                    balle.vitesseY = balle.vitesseY * -1;
                }
                if (Math.random() > 0.5) {
                    balle.direction = balle.direction * -1;
                }
            },
            3000
        );

    }
}