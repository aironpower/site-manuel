$(function(){
var i = 0;
var tableau= [[],[],[]];
var screx = 0;
var screo = 0;

	$("td").click(function(){


		var x=$(this).index();
		var y=$(this).parent().index();

		i++;


		if (i % 2) {
			tableau[x][y]= "x";
			$(this).html("X")								//joue X
				   .css('background-color', '#963')
				   .off("click");

			if ((tableau[0][0] == "x" && tableau[0][1]=="x" && tableau[0][2]=="x") ||
				(tableau[1][0] == "x" && tableau[1][1]=="x" && tableau[1][2]=="x") ||
				(tableau[2][0] == "x" && tableau[2][1]=="x" && tableau[2][2]=="x") ||
				(tableau[0][0] == "x" && tableau[1][0]=="x" && tableau[2][0]=="x") ||
				(tableau[0][1] == "x" && tableau[1][1]=="x" && tableau[2][1]=="x") ||
				(tableau[0][2] == "x" && tableau[1][2]=="x" && tableau[2][2]=="x") ||
				(tableau[0][0] == "x" && tableau[1][1]=="x" && tableau[2][2]=="x") ||
				(tableau[2][0] == "x" && tableau[1][1]=="x" && tableau[0][2]=="x"))
			 {
				$('.resultat').html("Les croix gagnent!!");
				$('td').off();
				screx++;
				$('.scorex').html(screx);
				$('.scoreo').html(screo);
			}
					} else {
			tableau[x][y]= "y";
			$(this).html("O")								//joue O
				   .css('background-color', '#369')
				   .off("click");

				   if ((tableau[0][0] == "y" && tableau[0][1]=="y" && tableau[0][2]=="y") ||
				   	(tableau[1][0] == "y" && tableau[1][1]=="y" && tableau[1][2]=="y") ||
				   	(tableau[2][0] == "y" && tableau[2][1]=="y" && tableau[2][2]=="y") ||
				   	(tableau[0][0] == "y" && tableau[1][0]=="y" && tableau[2][0]=="y") ||
				   	(tableau[0][1] == "y" && tableau[1][1]=="y" && tableau[2][1]=="y") ||
				   	(tableau[0][2] == "y" && tableau[1][2]=="y" && tableau[2][2]=="y") ||
				   	(tableau[0][0] == "y" && tableau[1][1]=="y" && tableau[2][2]=="y") ||
				   	(tableau[2][0] == "y" && tableau[1][1]=="y" && tableau[0][2]=="y"))
				    {
				   	$('.resultat').html("Les ronds gagnent!!")
					$('td').off();
				   }
				   }
		if (i==9) {
			$('.resultat').html("Egalité!!")
				  }
				  $('#miboton').click(function() {
				      // Recargo la página
				      location.reload();
				  });
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

							   $(this).addclass('test')
							   $(this).removeclass('test')
							   $(this).hasclass('test')
					} */
});