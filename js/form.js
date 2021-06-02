        class Form{
            constructor(){
                
                this.button = createButton('Info');
		        this.button.size(50);
		        this.button.style('background-color','yellow');
               
            }
            
           

            display(){
               
               

                this.button.position(width/2,height/2 );
                this.button.mousePressed(()=>{
                    this.button.hide();
                    textSize(15);
                    text("Level 1 : Instructions \n1. Use < and > To move\n2. Destroy aliens to proceed further",100,250);


                });

            }
        }