/**
 * Une balle de PONG avec tout ce qui va avec:
 * gestion des rebonds
 * gestion des accelerations
 * gestion des rebonds légèrement différents selon où la balle touche la raquette
 * gestion des parties gagnées /perdues
 */
class Balle{
    constructor($element) {
        this.$element=$element;
        /**
         * Position x de la balle
         * @type {Number}
         */
        this.x=this.$element.position().left;
        this.y=this.$element.position().top;
        this.diametre=this.$element.width();

        this.direction=1;
        this.vitesseX=0;
        this.vitesseY=0;

        //sera défini par calcule tailles
        this.vitesseDepart=terrain.largeur/500;
        this.vitesseMax=0;
        this.acceleration=0;
        this.calculeTailles();
    }
    /**
     * Calcule certaines propriétés qui sont proportionelles la taille du jeu
     */
    calculeTailles(){
        this.vitesseMax=terrain.largeur/100;
        this.acceleration=terrain.largeur / 1000;
    }
    /**
     * accelère la balle (avec une petite limite quand même)
     */
    accelere(){
        if (this.vitesseX < this.vitesseMax) {
            this.vitesseX = this.vitesseX + this.acceleration;
        }else{
            this.vitesseX = this.vitesseMax
        }
    }
     /**
     * Selon où la balle rebondit sur la raquette du joueur on adapte l'angle de rebond (donc la vitesse Y de la balle)
     * @param {Joueur} joueur 
     */
    devieDirection(joueur){
        let facteur = (   this.y - (joueur.y + joueur.hauteur / 2) ) / (joueur.hauteur / 2);
        this.vitesseY= this.vitesseY  + (facteur * 0.75);
    }
    /**
     * Fait bouger la balle
     */
    bouge(){
        this.y = this.y + this.vitesseY;
        this.x = this.x + ( this.vitesseX * this.direction );
        this.limiteMouvements();
        this.rafraichitHTML();
    }
    /**
     * Gère les cas de dépassement du terrain et ce que cela induit
     * les rebonds en haut et en bas
     * les touchers de raquettes avec rebonds, effets, accélération et trajectoire déviée
     * Les cas ou un deux deux joueurs perd
     */
    limiteMouvements(){
        //murs en haut et en bas
        if (this.y < 0 || this.y + this.diametre > terrain.hauteur) {
            //inverse la direction Y
            this.vitesseY = this.vitesseY * -1.0;
            this.y += this.vitesseY;
            audio.playNote();
        }
        //raquettes
        if (this.toucheJoueur1() || this.toucheJoueur2()) {

            if(this.toucheJoueur1()){
                joueur1.effetToucheBalle();
                this.devieDirection(joueur1);
            }
            if(this.toucheJoueur2()){
                joueur2.effetToucheBalle();
                this.devieDirection(joueur2);
            }
            //inverse la direction X
            this.direction = this.direction * -1.0;
            this.x += this.vitesseX * this.direction;
            //si on touche une raquette on accélère la balle
            this.accelere();
        }
        //perdu ?
        if(this.toucheCoteGauche()){
            joueur2.gagne();
        }
        if(this.toucheCoteDroite()){
            joueur1.gagne();
        }
    }
     /**
     * Renvoie true si la balle touche le joueur 1
     * @returns {boolean} 
     */
    toucheJoueur1(){
        if(this.x < joueur1.x+joueur1.largeur){
            if(this.y + this.diametre >joueur1.y && this.y < joueur1.y+joueur1.hauteur){
                return true;
            }
        }
        return false;
    }
     /**
     * Renvoie true si la balle touche le joueur 2
     * @returns {boolean} 
     */
    toucheJoueur2(){
        if(this.x + this.diametre > joueur2.x){
            if(this.y + this.diametre > joueur2.y && this.y < joueur2.y+joueur2.hauteur){
                return true;
            }
        }
        return false;
    }
     /**
     * Renvoie true si la balle touche la gauche du terrain
     * @returns {boolean} 
     */
    toucheCoteGauche(){
        if(this.x < 0){
            return true;
        }else{
            return false;
        }
    }
    /**
     * Renvoie true si la balle touche la droite du terrain
     * @returns {boolean} 
     */
    toucheCoteDroite(){
        //juste pour l'anecdote... c'est une version plus élégante de toucheGauche()
        return this.x + this.diametre > terrain.largeur;
    }
    /**
     * applique les positions theoriques à l'écran
     */
    rafraichitHTML(){
        this.$element.css("top", this.y);
        this.$element.css("left", this.x);
    }

}