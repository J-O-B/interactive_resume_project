//Auto Play Video on mouse over
document.getElementById("logoVid").addEventListener("mouseover", function() {
	this.play();
});

document.getElementById("logoVid").addEventListener("mouseleave", function() {
	this.pause();
});

//Homepage 3 reasons expand on click
document.getElementsById("space-top").on("click", function() {
	$(this).removeClass("hide").slideToggle(1000 );
});
document.getElementsById(".space-top").addEventListener("mouseleave", function() {
	$(this).addClass("hide").slideToggle( 1000 );
});