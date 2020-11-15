class Terrain extends ElementHtml{
    constructor($element){
        super($element);
        this.calculeTailles();
    }
    affichePause(){
        this.$element.addClass("pause")
    }
    affichePlay(){
        this.$element.removeClass("pause")
    }
}