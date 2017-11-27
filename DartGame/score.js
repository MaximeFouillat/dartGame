var r = [0.1, 0.2, 0.4, 0.5, 0.7, 0.8];
var theta = [9, 27, 45, 63, 81, 99, 117, 135, 153, 171, 189, 207, 225, 243, 261, 279, 297, 315, 333, 351, 360];
var number = [6, 13, 4, 18, 1, 20, 5, 12, 9, 14, 11, 8, 16, 7, 19, 3, 17, 2, 15, 10, 6];
var score[r.lenght][theta.length] = 0;

var joueur = {
	r : 0, 
	theta : 0, 
	score : 0
};

function initGrille(){
	var score = 0;
	for (i=0; i < r.length; i++){
		for(var j=0; j< theta.length; j++){
			if (r[i] == 0.1){
				score[i][j] = 50;
			}
			if (r[i] == 0.2){
				score[i][j] = 25;	
			}
			if (r[i] == 0.4 || r[i] == 0.7){
				score[i][j] = number[j];
			}
			if (r[i] == 0.5){
				score[i][j] = number[j]*3;
			}
			if (r[i] == 0.8){
				score[i][j] = number[j]*2;
			}
		}
	}
}

function findr(r_joueur){
	for (i=0; i < r.length; i++){
		if (r_joueur < r[0]){
			r_joueur = 0.1;
		}
		if (r_joueur > 0.1 && r_joueur < 0.2){
			r_joueur = 0.2;
		}
		if ((r_joueur > 0.2 && r_joueur < 0.4) || (r_joueur > 0.5 && r_joueur < 0.7)){
			r_joueur = 0.4;
		}
		if (r_joueur > 0.4 && r_joueur < 0.5){
			r_joueur = 0.5;
		}
		if (r_joueur > 0.7 && r_joueur < 0.8){
			r_joueur = 0.8;
		}
	}
}

function findTheta(theta_joueur){
	if((theta_joueur > theta[i]) && theta_joueur < theta[i+1]){
		theta_joueur = theta[i];
	}
}

function getScore(r_joueur, theta_joueur){
	joueur.score = joueur.score + score[r_joueur][theta_joueur];
}



