class Game {
    constructor() {
        this.input = null;
        this.save = null;
        this.text = null;
        this.greeting = null;
    }
    getstate() {
        database.ref("gamestate").on("value", (data) => {
            gamestate = data.val();
        });
    }
    updatestate(state) {
        database.ref("/").update({
            gamestate: state
        })
    }
    preStart() {
        clear();
        background(backGui);

        var form = new Form();
        form.display();

    }
    start() {
        clear();
        form2 = new Form2();
        form2.display();
    }

    player1 = createSprite(displayWidth, displayHeight);
    player2 = createSprite(displayWidth, displayHeight);

    play() {
        clear();
        form2.hide();
        Player.getplayer();
        if (allPlayers !== undefined) {
            for(var plr in allPlayers){
                var index = 0;
                var x = 100 + allPlayers[plr].distance;
                var y = displayWidth - 200 ;
                index += 1;
                if(player.index == index){
                    if(keyIsDown(39)){
                        player.distance += 100;
                    }
                    if(keyIsDown(37)){
                        player.distance -= 100;
                    }
                }
            }
        }
    }

}