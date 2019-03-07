// Deklarasi Variable
var canvas;
var ctx;

function drawLine(x, y, w, h, color) {
	ctx.fillStyle = color;
	ctx.fillRect(x, y, w, h);
}

function drawText(font, text, w, h, color) {
	ctx.fillStyle = color;
	ctx.font = font;
	ctx.fillText(text, w, h);
}

function drawFooter() {
	drawLine(0,canvas.height - 50,canvas.width,50, "#fb8c00");
	drawText("15px Arial", "AMEA 2018", canvas.width/2 - 10, canvas.height - 25, "#fff");
}

function pageHome() {
	// Image Draw Page Home
	var img = new Image();
	img.onload = function(){
		ctx.drawImage(img, canvas.width/2 - img.width/2, 80);
	}
	img.src  = "assets/title.png";

	var btnMulai = new Image();
	btnMulai.onload = function(){
		ctx.drawImage(btnMulai, canvas.width/2 - btnMulai.width/2 + 200, 450);
	}

	btnMulai.src = "assets/btnMulai.png";

	btnMulai.addEventListener("click", function(){
		alert("mulai");
	});
	canvas.addEventListener("mouseover", function(event){
		cx = event.pageX;
		cy = event.pageY;
		// if((cx >= 790 && cx <= 990) && (cy >= 450 && cy <= 530))
			console.log("X, Y => ("+cx+", "+cy+")")
	})

	// canvas.addEventListener("mouseout", function(event){
	// 	cx = event.pageX;
	// 	cy = event.pageY;
	// 	if((cx >= 790 && cx <= 990) && (cy >= 450 && cy <= 530))
	// 		btnMulai.src = "assets/btnMulaiHover.png";
	// }, false);

	canvas.addEventListener('mousedown', mulaiClick, false);

	drawFooter();
}

window.onload = function() {
	canvas = document.getElementById("mainCanvas");
	ctx = canvas.getContext("2d");
	pageHome();
}

function mulaiClick(event){
	cx = event.pageX;
	cy = event.pageY;
	if((cx >= 790 && cx <= 990) && (cy >= 450 && cy <= 530))
		alert("X, Y => ("+cx+", "+cy+")")
}

function mulaiHover(event){
	cx = event.pageX;
	cy = event.pageY;
	if((cx >= 790 && cx <= 990) && (cy >= 450 && cy <= 530))
		btnMulai.src = "assets/btnMulaiHover.png";
}