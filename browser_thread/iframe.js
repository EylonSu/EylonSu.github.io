const viewX = [35.4, 283.6],
	invader = document.getElementById("invader");
let frame = 0;
setInterval(() => {
	frame = ++frame % 2;
	invader.viewBox.baseVal.x = viewX[frame];
}, 200);
