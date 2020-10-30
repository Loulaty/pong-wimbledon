/**
 * Gère les entrées interactives (clavier, souris, touch tactile etc...)
 */
class Controles {
    constructor() {

        this.$monte1 = $("#monte1");
        this.$descend1 = $("#descend1");
        this.$monte2 = $("#monte2");
        this.$descend2 = $("#descend2");
        let me = this;

        //quand on appuie sur une touche du clavier
        window.addEventListener("keydown", function (event) {
            if (event.defaultPrevented) {
                return; // Do nothing if the event was already processed
            }
            switch (event.key) {
                case "a":
                    me.monte1(true)
                    break;

                case "q":
                    me.descend1(true);
                    break;

                case "p":
                    me.monte2(true)
                    break;

                case "m":
                    me.descend2(true);
                    break;
            }
            event.preventDefault();
        }, true);

        //quand on relache une touche du clavier
        window.addEventListener("keyup", function (event) {
            if (event.defaultPrevented) {
                return; // Do nothing if the event was already processed
            }
            switch (event.key) {
                case "a":
                    me.monte1(false)
                    break;
                case "q":
                    me.descend1(false);
                    break;
                case "p":
                    me.monte2(false)
                    break;
                case "m":
                    me.descend2(false);
                    break;
            }
            event.preventDefault();
        }, true);



        this.$monte1.on("mousedown touchstart", function (e) {
            e.preventDefault();
            me.monte1(true);
        });
        this.$monte1.on("mouseup touchend", function (e) {
            e.preventDefault();
            me.monte1(false);
        });
        this.$monte2.on("mousedown touchstart", function (e) {
            e.preventDefault();
            me.monte2(true);
        });
        this.$monte2.on("mouseup touchend", function (e) {
            e.preventDefault();
            me.monte2(false);
        });

        this.$descend1.on("mousedown touchstart", function (e) {
            e.preventDefault();
            me.descend1(true);
        });
        this.$descend1.on("mouseup touchend", function (e) {
            e.preventDefault();
            me.descend1(false);
        });
        this.$descend2.on("mousedown touchstart", function (e) {
            e.preventDefault();
            me.descend2(true);
        });
        this.$descend2.on("mouseup touchend", function (e) {
            e.preventDefault();
            me.descend2(false);
        });

        $body[0].addEventListener("touchmove", 
            function(e){
            console.log(e)
            }
        , false);

    }

    /**
     * Fait monter le joueur 1
     * @param {boolean} actif 
     */
    monte1(actif) {
        if (actif) {
            this.$monte1.addClass("active");
        } else {
            this.$monte1.removeClass("active");
        }
        joueur1.monte = actif;
    }
     /**
     * Fait monter le joueur 2
     * @param {boolean} actif 
     */
    monte2(actif) {
        if (actif) {
            this.$monte2.addClass("active");
        } else {
            this.$monte2.removeClass("active");
        }
        joueur2.monte = actif;
    }
    /**
    * Fait descendre le joueur 1
    * @param {boolean} actif 
    */
    descend1(actif) {
        if (actif) {
            this.$descend1.addClass("active");
        } else {
            this.$descend1.removeClass("active");
        }
        joueur1.descend = actif;
    }
    /**
    * Fait descendre le joueur 2
    * @param {boolean} actif 
    */
    descend2(actif) {
        if (actif) {
            this.$descend2.addClass("active");
        } else {
            this.$descend2.removeClass("active");
        }
        joueur2.descend = actif;
    }

    


}