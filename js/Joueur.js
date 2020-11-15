class Joueur extends ElementHtml{
    constructor($raquette,$score){
        super($raquette);
        this.$raquette=this.$element;
        this.$score=$score;
        this.score=0;
        this.vitesseY=3;
        /**
         * @type {Joueur}
         */
        this.adversaire=null;
        this.calculePositions();
        this.calculeTailles();
        this.directionY=0;
    }
    /**
     * Fait monter la raquette
     */
    monte(){
        this.directionY=-1;
    }
     /**
     * Fait déscendre la raquette
     */
    descend(){
        this.directionY=1;
    }
     /**
     * arrête la raquette
     */
    bougePas(){
        this.directionY=0;
    }
    /**
     * Fait en sorte que la raquette ne sorte pas du terrain
     * @private
     */
    _limiteMouvements(){
        let limiteBas=terrain.hauteur - this.hauteur;
        if(this.haut < 0){
            this.haut=0;
        }
        if(this.bas > terrain.hauteur){
            this.bas = terrain.hauteur
        }
    }
    /**
     * Fait bouger (ou pas) la raquette
     */
    bouge(){
        this.haut+= this.vitesseY * this.directionY;
        this._limiteMouvements();
        this._rafraichitHTML();
    }
    /**
     * Fait gagner des points au joueur
     * @param {Number} points Les points gagnés
     */
    incrementeScore(points){
        this.score+=points;
        this._effetScore();
        this.$score.text(this.score);
    }
    /**
     * Effet visuel (et sonore) qui se produit quand on touche la balle
     */
    effetToucheBalle(){
        this.effetCss(this.$raquette,"touche-balle");
        audio.playNote();
    }
    /**
     * Effet visuel qui se produit quand on gagne des points
     * @private
     */
    _effetScore(){
        this.effetCss(this.$score,"flash");
    }

    /**
     * Appelé quand le joueur gagne un échange
     */
    gagne(){
        //on aumente son score
        this.incrementeScore(10);
        this._rafraichitHTML();
        audio.fausseNote();
        partie.demarreNouveauJeu();
    }
    /**
     * Applique les valeurs en CSS
     * @private
     */
    _rafraichitHTML(){
        this.$element.css("top", this.haut); 
    }
    
}

