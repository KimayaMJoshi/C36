class Game{
    constructor(){}

    getState(){
        var gameStateRef = database.ref('gameState');
        console.log(gameStateRef);
        gameStateRef.on("value", function(data){
        console.log(data);
        gameState = data.val();
        console.log(gameState);
        })
    }

    update(state){
            database.ref("/").update({
                gameState :state
            });
    }
    start(){
        if(gameState === 0){
            player = new Player();
            player.getCount();
            form = new Form();
            form.display();
        }
    }
    
}