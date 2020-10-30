class Terrain{
    constructor($element){
        this.$element=$element;
        this.hauteur=0;
        this.largeur=0;
        this.calculeTailles();
    }
    calculeTailles(){
        this.hauteur=this.$element.height();
        this.largeur=this.$element.width();
    }
    affichePause(){
        this.$element.addClass("pause")
    }
    affichePlay(){
        this.$element.removeClass("pause")
    }
}