function updateGraphPoints() {
	var xVals = document.getElementById("xvals").value.split("\n");
	var yVals = document.getElementById("yvals").value.split("\n");
	
	var c = document.getElementById("graph");
	var ctx = c.getContext("2d");
	
	var avgX = Array(xVals.length - 1).fill(0);
	var avgY = Array(yVals.length - 1).fill(0);
	
	console.log(yVals);
	
	ctx.clearRect(0, 0, 500, 500)
	
	if (xVals.length == yVals.length) {
		for (let i = 0; i < xVals.length; i++) {
			ctx.beginPath();
			ctx.fillRect(parseInt(parseFloat(xVals[i]) * 10), parseInt(500 - parseFloat(yVals[i]) * 10), 5, 5);
			ctx.stroke();
		}
		
		for (let i = 1; i < avgX.length + 1; i++) {
			avgX[i - 1] = parseInt(((parseFloat(xVals[i - 1]) * 10) + parseFloat(xVals[i]) * 10) / 2)
			avgY[i - 1] = parseInt( 500 - ((parseFloat(yVals[i - 1]) * 10) + parseFloat(yVals[i]) * 10) / 2)
		}
		
		for (let i = 1; i < avgX.length + 1; i++) {
			ctx.beginPath()
			ctx.moveTo(avgX[i - 1], avgY[i - 1]);
			
			var dx = avgX[i] - avgX[i - 1]
			var dy = avgY[i] - avgY[i - 1]
			
			ctx.quadraticCurveTo(avgX[i], avgY[i], dx + avgX[i - 1], dy + avgY[i - 1]);
			
			ctx.stroke()
		}
	}
}