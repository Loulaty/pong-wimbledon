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
        this.vitesseMax=10;
        
    }

    accelere(){
        if (Math.abs(this.vitesseX) < this.vitesseMax) {
            this.vitesseX = this.vitesseX + 0.4;
        }
    }
    
    bouge(){
        this.y = this.y + this.vitesseY;
        this.x = this.x + ( this.vitesseX * this.direction );
        this.limiteMouvements();
        this.rafraichitHTML();
    }
    limiteMouvements(){
        //murs en haut et en bas
        if (this.y < 0 || this.y + this.diametre > hauteur) {
            //inverse la direction Y
            this.vitesseY = this.vitesseY * -1.0;
            this.y += this.vitesseY;
        }
        //raquettes
        if (joueur1.touche(this) || joueur2.touche(this)) {
            //inverse la direction X
            this.direction = this.direction * -1.0;
            this.x += this.vitesseX * this.direction;
            //si on touche une raquette on accélère la balle
            this.accelere();
        }
    }
    rafraichitHTML(){
        this.$element.css("top", this.y);
        this.$element.css("left", this.x);
    }

}