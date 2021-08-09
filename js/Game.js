class Game {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
      }
      form = new Form()
      form.display();
    }
    c1 = createSprite(300,displayHeight-50,50,50);
    c1.addImage("cars_movie",car);
    c2 = createSprite(1000,displayHeight-50,50,50);
    c2.addImage("cars_movie_1",car1);
    c3 = createSprite(550,displayHeight-100,50,50);
    c3.addImage("cars_movie",car);
    garage = [c1,c2,c3];
  }

  play(){
    form.hide();
    textSize(30);
    text("Game Start", 120, 100)
    Player.getPlayerInfo();
    if(allPlayers !== undefined){
      background("white");
      image(backgroundImage,40,-displayHeight*8.25,displayWidth*1.2,displayHeight*10);
      var index = 0;
      var x = 400;
      var y ;
        for(var plr in allPlayers){
          index += 1;
          x +=200;
          y = displayHeight-allPlayers[plr].distance;
          garage[index-1].x = x;
          garage[index-1].y = y;
          if(index === player.index){
            garage[index-1].shapeColor = "yellow";
            camera.position.x = garage[index-1].x; 
            camera.position.y = garage[index-1].y; 
          }
      }
    }
    
    drawSprites();
    if(keyIsDown(UP_ARROW) && player.index !== null){
      player.distance +=50
      player.update();
    }
    if(player.distance > 6100){
      gameState = 2;
    }
  }
  end(){
    var beuh = createSprite(300,300,100000,100000);
    beuh.addImage("win",winner);
    // image(winner,displayWidth/2,displayHeight/2);
    console.log("bruh");
    drawSprites();
  }
}
