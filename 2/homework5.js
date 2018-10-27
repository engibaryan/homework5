const rand = function(num) {
  return Math.floor(Math.random() * num) + 1;
};
const gameover= function () {
	
break;
}

const canvas = document.getElementById("c1");
const context = canvas.getContext("2d");
canvas.width = 2000;
canvas.height = 1000;


const background = new Image();
background.src = "back.jpg";

const niva = new Image();
niva.src = "nivul.png";

const police = new Image();
police.src = "vostikan.png";



const gameData = {
	nivaInfo: {
		x: 10,
		y: 10,
		xDelta: 0,
		yDelta: 0,
		width: 150,
		height: 150,
		image: niva,
		draw: function() { 
			context.drawImage(background,0, 0, canvas.width, canvas.height);
        context.drawImage(this.image,this.x, this.y, this.width, this.height);
		 },
		update: function() { 

			 if(this.x + this.width >= canvas.width || this.x <= 0){
                this.x = 0-this.x;                  }
            
            if(this.y + this.height >= canvas.height || this.y <= 0){
                this.y = 0-this.y;
                }
             
		    this.x += this.xDelta;
    		this.y += this.yDelta;
    		 }
	},



}

const array = [];
const policeInfo= function (count) {
       
        for(let i=0;i<count;i++){
           array[i]= {
           	x:rand((canvas.width)-200),
           	y:rand((canvas.height)-200), 
           	width: 200,
            height: 200,
            xDelta: 5,
            yDelta: 5,
            xdir: 1,
            ydir: -1,
            image:police,	 	
            draw: function(){
    		  context.drawImage(this.image,this.x,this.y,this.width,this.height);
    	},
    	    update: function(){
              if(this.x + this.width >= canvas.width || this.x <= 0){
                this.xdir = 0-this.xdir;
                  }
            
            if(this.y + this.height >= canvas.height || this.y <= 0){
                this.ydir = 0-this.ydir;
                }
             
            this.x += this.xdir*this.xDelta;
            this.y += this.ydir*this.yDelta;
    		}
           }
        };
        	
    };

policeInfo(prompt("number of bad guys"));

  const intersection = function(){
        for (let i = 0; i < array.length; i++) {
        if(gameData.nivaInfo.x < array[i].x +array[i].width/2 && gameData.nivaInfo.x+ gameData.nivaInfo.width/2 > array[i].x && gameData.nivaInfo.y < array[i].y + array[i].height/2 && gameData.nivaInfo.y+ gameData.nivaInfo.height/2 > array[i].y){
          
            
            alert("Game Over");
            gameover();

            }
    };
}
const leftKey = 37;
const upKey = 38;
const rightKey = 39;
const downKey = 40;
document.addEventListener('keydown', function(event) {
	if(event.keyCode === rightKey) {
		gameData.nivaInfo.xDelta = 5;
        
  	}
   	else if(event.keyCode === leftKey){
  		gameData.nivaInfo.xDelta = -5;
  	}
  	else if(event.keyCode === upKey){
  		gameData.nivaInfo.yDelta = -5;
  	}
  	else if(event.keyCode === downKey){
  		gameData.nivaInfo.yDelta = 5;
  	}

}, false);
document.addEventListener('keyup', function(event) {
	if(event.keyCode === rightKey) {
		gameData.nivaInfo.xDelta = 0;
        
  	}
  	if(event.keyCode === leftKey) {
		gameData.nivaInfo.xDelta = 0;
        
  	}
  	if(event.keyCode === upKey) {
		gameData.nivaInfo.yDelta = 0;
        
  	}
  		if(event.keyCode === downKey){
  		gameData.nivaInfo.yDelta = 0;
  	}
}, false);

const draw = function() {
gameData.nivaInfo.draw();
 for (let i = 0; i < array.length; i++) {
        array[i].draw();
    }
 
};


 	const update = function() {
 		 	gameData.nivaInfo.update();
 		 	for (let i = 0; i < array.length; i++) {
               array[i].update();
    }
}




const loop = function() {
	draw();
	update();
	intersection();
	
	
	
	
	
requestAnimationFrame(loop);
}; 

loop();