//Auto Play Video on mouse over
document.getElementById("logoVid").addEventListener("mouseover", function() {
	this.play();
});

document.getElementById("logoVid").addEventListener("mouseleave", function() {
	this.pause();
});
