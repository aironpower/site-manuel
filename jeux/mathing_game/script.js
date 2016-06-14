$(function(){
var a = 1;
var c0="#ccc";
var couleurs= ["blue", "blue", "orange", "orange", "yellow", "yellow", "green", "green" , "red", "red", "purple", "purple"];
var tableau = [[],[],[],[]];
var x1=0, y1=0;
var conTot=0, contInt=0;


for (i=0;i<=3;i++) {
	for (j = 0; j <=2; j++) {
			var rest=12 - (i*3+j);
			var numAle= Math.floor(rest*Math.random());
			tableau[i][j] = couleurs[numAle];
			couleurs.splice(numAle, 1);
		};
	};



$('.clicked').off('click');


	$("td").click(function(){

	contInt++;
	var x=$(this).index();
	var y=$(this).parent().index();
	$(this).removeClass('erase');

	if (a % 2) {

			$(this).css('background-color', tableau[x][y])
				   .addClass('justclicked');
			x1=x;
			y1=y;		
			a++;
		}


	else {

		$(this).css('background-color', tableau[x][y]);	
		a++;

		if (tableau[x][y]==tableau[x1][y1]) {
			$(this).addClass('clicked');
			$('.justclicked').addClass('clicked')
							 .removeClass('justclicked');

			x1=0;
			y1=0;
			conTot++;
			if (conTot == 6) {
				$('.resultat').html("Congratulations!!");
				$('.essais').html("Nombre de clics: " + contInt);
			};

		   }

		else {
			$("td").addClass('clicked');
			$(this).addClass('erase');
			setTimeout(function(){
				$('.erase').css('background-color', c0);
				$('.justclicked').css('background-color', c0)
								 .removeClass('justclicked');
				$('td').removeClass('clicked');
			}, 300);
		   	 }
		 }

 


	});



					/* Comment faire
					$("li").click(function()){
						$(this).css('background-color', 'red')
							   .next().css('background-color', 'blue')   //.off("click") click ne marche plus
							   .children()
							   .prev().css('background-color', 'yellow')
							   .parent()
							   .parents()
							   .closest()
							   .index()

							   $(this).addClass('test')
							   $(this).removeClass('test')
							   $(this).hasClass('test')
					} */
});