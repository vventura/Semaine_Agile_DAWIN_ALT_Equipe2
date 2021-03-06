$(function () {
	// on commence le jeu en placant un listener sur les clics effectués sur le plateau
	plateau.on('click', function (e) {
		if(clicAutorise) {
			clicAutorise = false; // on désactive le clic pendant le traitement du tour
			var x = e.pageX - this.offsetLeft;
			var y = e.pageY - this.offsetTop;
			jouerTour(positionClic(x, y));
		}
	});	



	// ajout de listenners sur nos boutons quitter et rejouer
	$('#meilleursScores').on('click', function(){
		afficherPopupMeilleursScores();
	});
	$("#rejouer").on("click", function () {
		rejouerPartie();
	});

	$("#quitter").on("click", function () {
		quitterPartie();
	});

	$("#aide").on("click", function () {
		afficherPopupAide();
	});
});