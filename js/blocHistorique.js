// FICHIER TRAITANT LES FONCTIONS DE L'HISTORIQUE DES SCORE

function traitementScoreFinal(nomJoueur, score) {
	if(historiqueMeilleursScores.length) {
		historiqueMeilleursScores.some(function (meilleurScore) {
			if(meilleurScore.valeur < score) {
				historiqueMeilleursScores.push({joueur: nomJoueur, valeur: score});
				trierMeilleursScores();
				return true;
			}
			return false;
		});
	} else {
		historiqueMeilleursScores.push({joueur: nomJoueur, valeur: score});
	}
}

function trierMeilleursScores() {
	historiqueMeilleursScores = historiqueMeilleursScores.sort(function (a, b) {  return a.valeur - b.valeur;  });

	if(historiqueMeilleursScores.length > 5)
		historiqueMeilleursScores.pop();
};

/*
 * fonction affichant l'historique des meilleurs scores
 */
function afficherPopupMeilleursScores() {
    var popupContent = $('<div class="popup-content"/>'),
        popup = $('<div class="popup"/>'),
		fermerPopUp = $('<span/>');

    var contenu = $("<h5>Meilleurs Scores</h5>");
    var ul = $("<ul/>");
    if (historiqueMeilleursScores.length) {
	    historiqueMeilleursScores.forEach(function (meilleurScore){
	    	li = $("<li/>");
	    	li.append('<h5>' + meilleurScore.joueur + " - " + meilleurScore.valeur +' points</h5>');
	   		ul.append(li);
	    });
	    contenu.append(ul);
	}
	else {
		contenu.append("<h5>Pas de meilleurs scores disponibles</h5>");
	}
    
   	fermerPopUp.addClass('close');
	fermerPopUp.html('&times');
	fermerPopUp.click(function() {
		popup.remove();
	});
   
   	popupContent.append(fermerPopUp);
    popupContent.append(contenu);

    popup.append(popupContent);
    $("body").append(popup);
}