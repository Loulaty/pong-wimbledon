class Audio{
    /**
     * Gère la partie audio du projet
     * @see https://createjs.com/getting-started/soundjs
     */
    constructor(){
        //sounds

        //createjs.Sound.registerSound("sound/pong.wav", "pong");

        /*
        createjs.Sound.registerSound("sound/do.mp3", "do");
        createjs.Sound.registerSound("sound/re.mp3", "re");
        createjs.Sound.registerSound("sound/mi.mp3", "mi");
        createjs.Sound.registerSound("sound/fa.mp3", "fa");
        createjs.Sound.registerSound("sound/sol.mp3","sol");
        createjs.Sound.registerSound("sound/la.mp3", "la");
        createjs.Sound.registerSound("sound/si.mp3", "si");
         */

        /*
        createjs.Sound.registerSound("sound/pong1.wav", "pong1");
        createjs.Sound.registerSound("sound/pong2.wav", "pong2");
        createjs.Sound.registerSound("sound/pong3.wav", "pong3");
        createjs.Sound.registerSound("sound/pong4.wav", "pong4");
         */

        createjs.Sound.registerSound("sound/ping1.wav", "pong1");
        createjs.Sound.registerSound("sound/ping2.wav", "pong2");
        createjs.Sound.registerSound("sound/ping3.wav", "pong3");
        createjs.Sound.registerSound("sound/ping4.wav", "pong4");

        createjs.Sound.registerSound("sound/disappointment.wav", "disappointment");



    }
    /**
     * Joue une note aléatoirepa
     */
    playNote(){
        //let notes=["do","re","mi","fa","sol","la","si"];
        let notes=[
            "pong1"
            ,"pong2"
            ,"pong3"
            ,"pong4"
        ];
        let note =notes[Math.floor(Math.random() * notes.length)];
        createjs.Sound.play(note);

    }
    /**
     * Perdu
     */
    fausseNote(){
        createjs.Sound.play("disappointment");
        /*
        this.playNote();
        this.playNote();
        this.playNote();
        this.playNote();
        this.playNote();
        */
    }
}