class Joueur{
    constructor($raquette,$score){
        this.$raquette=$raquette;
        this.$score=$score;
        this.score=0;
        this.y=$raquette.position().top;
        this.x=$raquette.position().left;
        this.hauteur=$raquette.height();
        this.largeur=$raquette.width();
        /**
         * @type {Joueur}
         */
        this.adversaire=null;
        this.monte=false;
        this.descend=false;
    }
    limiteMouvements(){
        let limiteHaut=0;
        let limiteBas=hauteur - this.hauteur;
        if(this.y < limiteHaut){
            this.y=limiteHaut;
        }
        if(this.y > limiteBas){
            this.y = limiteBas;
        }
    }
    rafraichitHTML(){
        this.$raquette.css("top", this.y);
        this.$score.text(this.score);
    }
    bouge(){
        if(this.descend){
            this.y= this.y + Joueur.vitesse;
        }else if (this.monte) {
            this.y = this.y - Joueur.vitesse;
        }
        this.limiteMouvements();
        this.rafraichitHTML();
    }


    /**
     * 
     * @param {Balle} balle 
     */
    touche(balle){
        if(this.x < largeur / 2){  // c'est la raquette de gauche
           
            if (balle.x < this.x + this.largeur) {
                if(balle.y+balle.diametre < this.y || balle.y > this.y + this.hauteur){
                    //perdu
                    this.effetCss("rate-balle");
                    this.adversaire.score+=10;
                    demarreNouveauJeu();
                }else{
                    //gagné
                    this.effetCss("touche-balle");
                    //createjs.Sound.play("pong");
                    this.rebond(balle);
                }
                return true;
            }
        }else{  // c'est la raquette de droite
            if (balle.x + balle.diametre > this.x) {
                if(balle.y+balle.diametre < this.y || balle.y > this.y + this.hauteur){
                    //perdu
                    this.effetCss("rate-balle");
                    this.adversaire.score+=10;
                    demarreNouveauJeu();
                }else{
                    //gagné
                    this.effetCss("touche-balle");
                    //createjs.Sound.play("pong");
                    this.rebond(balle);
                }
                return true;
            }
        }
        // la balle ne touche pas la raquette ni le côté
        return false;
    }

    /**
     * Selon où la balle rebondit sur la raquette on adapte l'angle de rebond (donc la vitesse Y de la balle)
     * @param {Balle} balle 
     */
    rebond(balle){
        let positionBalle = (   balle.y - (this.y + this.hauteur / 2) ) / (this.hauteur / 2);
        balle.vitesseY= balle.vitesseY  + (positionBalle * 0.5)
    }

    /**
     * Ajoute une classe css à la raquette et l'enlève juste après
     * @param {string} classeCss 
     */
    effetCss(classeCss){
        let $element=this.$raquette;
        $element.addClass(classeCss);
        setTimeout(() => {
            $element.removeClass(classeCss);
        }, 100);
    }
}

Joueur.vitesse=3;