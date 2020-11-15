class ElementHtml{
     /**
     *
     * @param {$jQuery} $element Jquery de la balle
     */
    constructor($element){
        this.$element=$element;
        this.haut=0;
        this.gauche=0;
        this.largeur=0;
        this.hauteur=0;
    }
    get bas(){
        return this.haut+this.hauteur;
    }
    set bas(value){
        this.haut=value - this.hauteur;
    }
    get droite(){
        return this.gauche+this.largeur;
    }
    set droite(value){
        this.gauche=value - this.largeur;
    }
    calculePositions(){
        this.gauche=parseInt(this.$element.css("left"));
        this.haut=parseInt(this.$element.css("top"));
    }
    calculeTailles(){
        this.hauteur=this.$element.height();
        this.largeur=this.$element.width();
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
}