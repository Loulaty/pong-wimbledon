class Joueur{
    constructor($raquette,$score){
        this.$raquette=$raquette;
        this.$score=$score;
        this.score=0;
        this.y=0;
        this.x=0;
        this.hauteur=0;
        this.largeur=0;
        this.vitesse=3;
        /**
         * @type {Joueur}
         */
        this.adversaire=null;
        this.monte=false;
        this.descend=false;
        this.calculeTailles();
    }

    calculeTailles(){
        this.hauteur=this.$raquette.height();
        this.largeur=this.$raquette.width();
        this.y=parseInt(this.$raquette.css("top"));
        this.x=parseInt(this.$raquette.css("left"));
        
    }

    incrementeScore(points){
        this.score+=points;
        this.effetScore();
        this.$score.text(this.score);
    }

    limiteMouvements(){
        let limiteHaut=0;
        let limiteBas=terrain.hauteur - this.hauteur;
        if(this.y < limiteHaut){
            this.y=limiteHaut;
        }
        if(this.y > limiteBas){
            this.y = limiteBas;
        }
    }
    rafraichitHTML(){
        this.$raquette.css("top", this.y);
        
    }
    bouge(){
        if(this.descend){
            this.y= this.y + this.vitesse;
        }else if (this.monte) {
            this.y = this.y - this.vitesse;
        }
        this.limiteMouvements();
        this.rafraichitHTML();
    }
    
    /**
     * Effet qui se produit quand on touche la balle
     */
    effetToucheBalle(){
        this.effetCss(this.$raquette,"touche-balle");
        audio.playNote();
    }
    effetScore(){
        this.effetCss(this.$score,"flash");
    }
    /**
     * Ajoute une classe css à la raquette et l'enlève juste après
     * @param {jQuery} $element 
     * @param {string} classeCss 
     */
    effetCss($element,classeCss){
        $element.addClass(classeCss);
        setTimeout(() => {
            $element.removeClass(classeCss);
        }, 100);
    }
    /**
     * Quand le joueur gagne un échange
     */
    gagne(){
        //on aumente son score
        this.incrementeScore(10);
        this.rafraichitHTML();
        audio.fausseNote();
        partie.demarreNouveauJeu();
    }
}

