const canvas = document.getElementById("c1");
const context = canvas.getContext("2d");
canvas.width = 1200;
canvas.height = 700;


const rand = function(num) {
  return Math.floor(Math.random() * num) + 1;
};

const createBoxes = function(count, canvasWidth, canvasHeight) {
const guyn = ["blue", "orange", "red", "green", "black"];
const info = new Array();
while(count > 0) {
info.push({
	x: rand(canvas.width-30),
	y: rand(canvas.height-30),
	xDelta: 10,
	yDelta: 10,
	width: 28,
	height: 28,
	color: guyn[rand(5)-1],
	draw: function() {
		context.fillStyle = this.color;
		context.fillRect(this.x, this.y, this.width, this.height);
	},
		update: function(){
				this.x+=this.xDelta;
				this.y+=this.yDelta;
				if(this.x+this.width>=canvasWidth){
					this.x=canvasWidth-this.width;
					this.xDelta=-1*this.xDelta;

				} else if(this.x<=0){
					this.x=0;
					this.xDelta=-1*this.xDelta;
				} if(this.y+this.height>=canvasHeight){
					this.y=canvasHeight-this.height;
					this.yDelta=-1*this.yDelta;
				} else if(this.y<=0){
					this.y=0;
					this.yDelta=-1*this.yDelta;
				}
			}
		});
		count--;
	}
	return info;
};
const d = function(info) {
	context.fillStyle='white';
	context.fillRect(0,0,canvas.width,canvas.height);
	for (let i = info.length - 1; i >= 0; i--) {
		
		info[i].draw();
	}
}
const u = function(info) {
	for (let i = info.length - 1; i >= 0; i--) {
		info[i].update();
	}
}
const a = function(info) {

	d(info);
	u(info);
	requestAnimationFrame(function(){
		a(info)
	});
}
a(createBoxes(100,canvas.width,canvas.height));