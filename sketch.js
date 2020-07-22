var drops = [];
var umbrella,umbrella_img;
var thunder,thunderImg1,thunderImg2,thunderImg3,thunderImg4;

	function preload(){
		umbrella_img = loadImage("../images/man.png");
	/*	thunderImg1 = loadImage("../images/thunder.png");
		thunderImg2 = loadImage("../images/thunderImage2.png");
		thunderImg3 = loadImage("../images/thunderImage3.png");
		thunderImg4 = loadImage("../images/thunderImage4.png");*/
	}

	
	function setup() {
	  createCanvas(640, 360);
	  umbrella = new Umbrella(320,170);
	  for (var i = 0; i < 500; i++) {
		drops[i] = new Drop();
		
	  }
	}
	
	function draw() {
	  background("black");
	  for (var i = 0; i < drops.length; i++) {
	    drops[i].fall();
	    drops[i].show();
	  }

	  image(umbrella_img,300,240,50,100);
	/*  thunder.CreatedFrame = frameCount;
	  switch(rand){
		 case 1 :  image(thunderImg1,300,240,50,100);
		 break;
		 case 1 :  image(thunderImg2,300,240,50,100);
		 break;
		 case 1 :  image(thunderImg3,300,240,50,100);
		 break;
		 case 1 :  image(thunderImg4,300,240,50,100);
		 break;
		  }
	  thunder.scale = random(0.3,0.8);*/
   }

 /* if(thunder.CreatedFrame + 10 === frameCount && thunder){
	  thunder.destroy();
   }*/



	

