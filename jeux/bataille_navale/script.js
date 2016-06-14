$(function(){

var bat1=0, bat1=0, bat3=0, bat4=0;
var contBat = 0;
var contclick = 0;
var tableau= [[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0]];
var contacas=0;
var i=0;
var j=0;

var a=Math.floor(10*Math.random());
var b=Math.floor(10*Math.random());
var verhor=Math.floor(2*Math.random());
	if (verhor===0) {
		if (b<4) {
			tableau[a][b]=5;
			tableau[a][b+1]=5;
			tableau[a][b+2]=5;
			tableau[a][b+3]=5;
			tableau[a][b+4]=5;
		} else {
			tableau[a][b]=5;
			tableau[a][b-1]=5;
			tableau[a][b-2]=5;
			tableau[a][b-3]=5;
			tableau[a][b-4]=5;
		}
	} else  if (a<4) {
			tableau[a][b]=5;
			tableau[a+1][b]=5;
			tableau[a+2][b]=5;
			tableau[a+3][b]=5;
			tableau[a+4][b]=5;
		} else {
			tableau[a][b]=5;
			tableau[a-1][b]=5;
			tableau[a-2][b]=5;
			tableau[a-3][b]=5;
			tableau[a-4][b]=5;
	}

do {

var a=Math.floor(10*Math.random());
var b=Math.floor(10*Math.random());
var verhor=Math.floor(2*Math.random());
if (verhor==0) {
		if (b<5) {
			if (tableau[a][b]==0 && tableau[a][b+1]==0 && tableau[a][b+2]==0 && tableau[a][b+3]==0) {
					tableau[a][b]=4;
					tableau[a][b+1]=4;
					tableau[a][b+2]=4;
					tableau[a][b+3]=4;
					}
				} else {
			if (tableau[a][b]==0 && tableau[a][b-1]==0 && tableau[a][b-2]==0 && tableau[a][b-3]==0) {
					tableau[a][b]=4;
					tableau[a][b-1]=4;
					tableau[a][b-2]=4;
					tableau[a][b-3]=4;
					}
				}
			}
  else  if (a<4) {
			if (tableau[a][b]==0 && tableau[a+1][b]==0 && tableau[a+2][b]==0 && tableau[a+3][b]==0) {
					tableau[a][b]=4;
					tableau[a+1][b]=4;
					tableau[a+2][b]=4;
					tableau[a+3][b]=4;
					}
				} else {
			if (tableau[a][b]==0 && tableau[a-1][b]==0 && tableau[a-2][b]==0 && tableau[a-3][b]==0) {
					tableau[a][b]=4;
					tableau[a-1][b]=4;
					tableau[a-2][b]=4;
					tableau[a-3][b]=4;
					}
				}
contacas=0;
		for (i=0; i<=9; i++) {
			for (j=0; j<=9; j++) {
					contacas = contacas + tableau[i][j];
			};
		};
  } while (contacas !=41);

do {

var a=Math.floor(10*Math.random());
var b=Math.floor(10*Math.random());
var verhor=Math.floor(2*Math.random());
if (verhor==0) {
		if (b<5) {
			if (tableau[a][b]==0 && tableau[a][b+1]==0 && tableau[a][b+2]==0) {
					tableau[a][b]=3;
					tableau[a][b+1]=3;
					tableau[a][b+2]=3;
					}
				} else {
			if (tableau[a][b]==0 && tableau[a][b-1]==0 && tableau[a][b-2]==0) {
					tableau[a][b]=3;
					tableau[a][b-1]=3;
					tableau[a][b-2]=3;
					}
				}
			}
else  if (a<4) {
			if (tableau[a][b]==0 && tableau[a+1][b]==0 && tableau[a+2][b]==0) {
					tableau[a][b]=3;
					tableau[a+1][b]=3;
					tableau[a+2][b]=3;
					}
				} else {
			if (tableau[a][b]==0 && tableau[a-1][b]==0 && tableau[a-2][b]==0) {
					tableau[a][b]=3;
					tableau[a-1][b]=3;
					tableau[a-2][b]=3;
					}
				}
contacas=0;
		for (i=0; i<=9; i++) {
			for (j=0; j<=9; j++) {
					contacas = contacas + tableau[i][j];
			};
		};
} while (contacas !=50);

do {

var a=Math.floor(10*Math.random());
var b=Math.floor(10*Math.random());
var verhor=Math.floor(2*Math.random());
if (verhor==0) {
		if (b<5) {
			if (tableau[a][b]==0 && tableau[a][b+1]==0 && tableau[a][b+2]==0) {
					tableau[a][b]=3;
					tableau[a][b+1]=3;
					tableau[a][b+2]=3;
					}
				} else {
			if (tableau[a][b]==0 && tableau[a][b-1]==0 && tableau[a][b-2]==0) {
					tableau[a][b]=3;
					tableau[a][b-1]=3;
					tableau[a][b-2]=3;
					}
				}
			}
 else  if (a<4) {
			if (tableau[a][b]==0 && tableau[a+1][b]==0 && tableau[a+2][b]==0) {
					tableau[a][b]=3;
					tableau[a+1][b]=3;
					tableau[a+2][b]=3;
					}
				} else {
			if (tableau[a][b]==0 && tableau[a-1][b]==0 && tableau[a-2][b]==0) {
					tableau[a][b]=3;
					tableau[a-1][b]=3;
					tableau[a-2][b]=3;
					}
				}
contacas=0;
		for (i=0; i<=9; i++) {
			for (j=0; j<=9; j++) {
					contacas = contacas + tableau[i][j];
			};
		};
  } while (contacas !=59);

do {

var a=Math.floor(10*Math.random());
var b=Math.floor(10*Math.random());
var verhor=Math.floor(2*Math.random());
if (verhor==0) {
		if (b<5) {
			if (tableau[a][b]==0 && tableau[a][b+1]==0) {
					tableau[a][b]=2;
					tableau[a][b+1]=2;
					}
				} else {
			if (tableau[a][b]==0 && tableau[a][b-1]==0) {
					tableau[a][b]=2;
					tableau[a][b-1]=2;
					}
				}
			}
else  if (a<4) {
			if (tableau[a][b]==0 && tableau[a+1][b]==0) {
					tableau[a][b]=2;
					tableau[a+1][b]=2;
					}
				} else {
			if (tableau[a][b]==0 && tableau[a-1][b]==0) {
					tableau[a][b]=2;
					tableau[a-1][b]=2;
					}
				}
contacas=0;
		for (i=0; i<=9; i++) {
			for (j=0; j<=9; j++) {
					contacas = contacas + tableau[i][j];
			};
		};
} while (contacas !=63);


	$("td").click(function(){

		contclick++;
		$('.score2').html(contclick);
		var x=$(this).index();
		var y=$(this).parent().index();

		if (tableau[x][y]>0) {
		contBat++;
		$('.score').html(contBat);
		if (contBat==17){
					$(this).css('background-color', 'green')
						   .off('click');
					$('.ecran').html("Vous avez trouvé tous les bateaux!!");
				} else {
		$(this).css('background-color', 'red')
			   .off('click');
		$('.ecran').html("Touché!!");
						}
		} 	else {
		$(this).css('background-color', 'blue')
			   .off('click');
		$('.ecran').html("A l'eau!");
		}

	});

	$('#miboton').click(function() {
	    // Recargo la página
	    location.reload();
	});

/*
	1 porte-avions (5 cases)

	1 croiseur (4 cases)

	1 contre-torpilleur (3 cases)

	1 sous-marin (3 cases)

	1 torpilleur (2 cases)

					 Comment faire
					$("li").click(function()){
						$(this).css('background-color', 'red')
							   .next().css('background-color', 'blue')   //.off("click") click ne marche plus
							   .children()
							   .prev().css('background-color', 'yellow')
							   .parent()
							   .parents()
							   .closest()
							   .index()

							   $(this).addclass('test')
							   $(this).removeclass('test')
							   $(this).hasclass('test')
					} */
});