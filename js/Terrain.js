class Terrain{
    constructor($element){
        this.$element=$element;
        this.hauteur=$element.height();
        this.largeur=$element.width();
    }
    affichePause(){
        this.$element.addClass("pause")
    }
    affichePlay(){
        this.$element.removeClass("pause")
    }
}