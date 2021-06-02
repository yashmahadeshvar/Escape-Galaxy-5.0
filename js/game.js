class Game{
        constructor(){

        }
      
      start(){
        bg = createSprite(200,300,400,800);
        bg.addImage(backgroundIMG);
        bg.scale = 2.5;
        
        startButton = createSprite(200,350,50,10);
        startButton.addImage(startButtonIMG);
        startButton.scale = 0.3;

        title = createSprite(200,100,10,10);
        title.addImage(titleIMG);
        title.scale = 0.7;

        info = createSprite(300,350,10,10);
        info.addImage(infoIMG);
        info.scale = 0.07;        

      }

      setLevel1(){
        


        bg2 = createSprite(200,300,400,625);
        bg2.addImage(backgroundIMG);
        bg2.scale = 2.5
        bg2.visible = false;
        //bg2.velocityY = 2;

        astroJet = createSprite(200,550,10,10);
        astroJet.addImage(astroJetIMG);
        astroJet.visible=false;
        astroJet.scale = 0.2;

        helth1 = createSprite(100,25,10,10);
        helth1.addImage(helth1IMG);
        helth1.scale = 0.3;
        helth1.visible = false ;

        helth2 = createSprite(100,25,10,10);
        helth2.addImage(helth2IMG);
        helth2.scale = 0.4;
        helth2.visible = false ;

      }

      playLevel1(){

        
        bg2.visible = true;
        astroJet.visible = true;
        helth1.visible = true;
        helth2.visible = false;
        title.visible = false;

        if (frameCount % 90=== 0) {
          var alien = createSprite(100,70,50,50);
          alien.x = Math.round(random(50,350));
          alien.addImage(alienIMG);
          alien.scale = 0.25;
          alien.velocityY = 10;
          alien.lifetime = 200;
          alienGroup.add(alien);
       }

       if (frameCount % 400=== 0) {
        var xp = createSprite(100,70,50,50);
        xp.x = Math.round(random(50,350));
        xp.addImage(xpIMG);
        xp.scale = 0.1;
        xp.velocityY = 8;
        xp.lifetime = 200;
        xpGroup.add(xp);
     }

     if(keyDown("space")){
      var fireBall= createSprite(200,500,20, 20);
      fireBall.addImage(fireBallIMG);
      fireBall.x=astroJet.x;
      fireBall.velocityY = -8 ;
      fireBall.lifetime = 800;
      fireBall.scale = 0.1;
      fireBallGroup.add(fireBall);
      fireBall,add(audioLoad);
  }

    
       
       if(fireBallGroup.isTouching(alienGroup)){
         alienGroup.destroyEach();
         fireBallGroup.destroyEach();
         score = score + 100
       }
       if(astroJet.isTouching(xpGroup)){
        xpGroup.destroyEach();
        xp1 = xp1 + 10
      }
      if(astroJet.isTouching(meteorGroup)){
        helth1.visible = false ;
        helth2.visible = true
      }

      if(score === 1000){
        gameState = 2;
      }

      // if(xp1 === 100){
      // }
     

    
       
       //if (the fireball touches the alien){ it gets destroyed and score increases by 100}
      

       //create boost after every 200 frames
       
       //if (astrojet touches boost){ get bigger missile}

       //create meteors after every 150 frames

       //if (astrojet touches meteor or alien){ then lives reduce by 1}

       //if (score is 1000){ then gameState changes to 2}

       //if (lives is 0){ then go back to gameState 0}

      }


    playLevel2(){
         
        if (frameCount % 100=== 0) {
          var ufo = createSprite(100,70,50,50);
          ufo.x = Math.round(random(50,350));
          ufo.addImage(ufoIMG);
          ufo.scale = 0.50;
          ufo.velocityY = 9;
          ufo.lifetime = 800;
          ufoGroup.add(ufo);
       }
       if (frameCount % 40=== 0) {
        var laser1 = createSprite(100,70,50,50);
          laser1.x = Math.round(random(50,350));
          laser1.addImage(laser1IMG);
          laser1.scale = 0.1;
          laser1.velocityY = 20;
          laser1.lifetime = 800;
          laser1Group.add(laser1)
     }

       if(keyDown("space")){
        var missile= createSprite(200,500,20, 20);
        missile.addImage(missileIMG);
        missile.x=astroJet.x;
        missile.velocityY = -8 ;
        missile.lifetime = 800;
        missile.scale = 0.3;
        missileGroup.add(missile);
    }
  
     
  
       
      if(astroJet.isTouching(meteorGroup)){
        helth1.visible = false ;
        helth2.visible = true
      }

      if(missileGroup.isTouching(ufoGroup)){
        ufoGroup.destroyEach();
        missileGroup.destroyEach();
        score = score + 100
      }


    }
      
  }