/**
 * Gère les entrées interactives (clavier, souris, touch tactile etc...)
 */
class Controles {
    constructor() {

        let me = this;

        //quand on appuie sur une touche du clavier
        window.addEventListener("keydown", function (event) {
            if (event.defaultPrevented) {
                return; // Do nothing if the event was already processed
            }
            switch (event.key) {
                case "a":
                    joueur1.monte();
                    break;
                case "q":
                    joueur1.descend();
                    break;
                case "p":
                    joueur2.monte();
                    break;
                case "m":
                    joueur2.descend();
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
                case "q":
                    joueur1.bougePas()
                    break;
                case "p":
                case "m":
                    joueur2.bougePas()
                    break;
            }
            event.preventDefault();
        }, true);

        this.$monte1 = $("#monte1");
        this.$descend1 = $("#descend1");
        this.$monte2 = $("#monte2");
        this.$descend2 = $("#descend2");

        this.$monte1.on("mousedown touchstart", function (e) {
            e.preventDefault();
            joueur1.monte();
        });
        this.$monte1.on("mouseup touchend", function (e) {
            e.preventDefault();
            joueur1.bougePas()
        });
        this.$monte2.on("mousedown touchstart", function (e) {
            e.preventDefault();
            joueur2.monte();
        });
        this.$monte2.on("mouseup touchend", function (e) {
            e.preventDefault();
            joueur2.bougePas();
        });

        this.$descend1.on("mousedown touchstart", function (e) {
            e.preventDefault();
            joueur1.descend();
        });
        this.$descend1.on("mouseup touchend", function (e) {
            e.preventDefault();
            joueur1.bougePas();
        });
        this.$descend2.on("mousedown touchstart", function (e) {
            e.preventDefault();
            joueur2.descend();
        });
        this.$descend2.on("mouseup touchend", function (e) {
            e.preventDefault();
            joueur2.bougePas();
        });

    

    }


}