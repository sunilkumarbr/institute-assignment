(function(){

	$(document).ready(function()
	{

		var tileNumber=0,
			won=0,
			winer=0,
			player1=0,
			player2=0,
			tie=0,
			mouse=0,
			tieCheck=0,
			tiestop=0,
			twoWin=0;

		$('table.tiles tr td')
			.addClass('cursor').css('cursor','url(./img/rock.png)64 64,auto');/* initial cursor for tic tac toe bord is set to 'o' (rock here) */
		$('.scoreBord ')
			.append('<p>Whose Turn Is This - <span>Player 1</span></p>');	/* instruction to the player */

		$('table.tiles tr td').on('mouseenter',function(){					/* the cursor will be set accordingly as the players turn (i.e, between rock and cross) */

			if(mouse==2)
				$('table.tiles tr td')
					.css('cursor','url(./img/rock.png)64 64,auto');

			if(mouse==1)
				$('table.tiles tr td')
					.css('cursor','url(./img/cross2.png)64 64,auto');

			if( ($(this).data('check'))==1)									/* when the tile is occupied then cursor is set to not allowed when mouse enter on particular tile */
				$('table.tiles tr td')
					.css('cursor','url(./img/notAllowed1.png)64 64,auto');
		});



		function checkWhoWon(i,j,k)											/* function to check which player won the game */
		{

			if(( ( ($('table.tiles.tiles td').eq(i).text()) != ' ' ) &&   
				 ( $('table.tiles td').eq(i).text()) == ($('table.tiles td').eq(j).text()) ) &&
		         ( ($('table.tiles td').eq(j).text()) == ($('table.tiles td').eq(k).text()) ) )
				{

					if(i==1&&j==4&&k==7)
						twoWin++;
					if(i==0&&j==4&&k==8)
						twoWin++;
					if(i==2&&j==4&&k==6)
						twoWin++;

					if(twoWin<=1)											/* to check the special condition where single player is able to win twice in a single game(i.e, when he able to put the same symbole in middle coumn and anyone of the diagongal) */
					{
						if($('table.tiles td').eq(i).text() == 0 && won==0)
							{
								winer=1;
								player1++;
							}
							if($('table.tiles td').eq(i).text() == 1 && won==0)
							{
								winer=2;
								player2++;
							}
					

						won=1;
						
						$('table.tiles td').eq(i)							/*when somone wins the 3 consecutive squers where the same symbol appears will be highlighted */
							.css('transform','scale(1.5)')
							.css('box-shadow','5px 10px 15px #d39f32')
							.css('border-radius','10%')
							.fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100).css('border-radius','0%')
							.css('transform','scale(1)');

						$('table.tiles td').eq(j)
							.css('transform','scale(1.5)')
							.css('box-shadow','5px 10px 15px #d39f32')
							.css('border-radius','10%').
							fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100)
							.css('border-radius','0%').css('transform','scale(1)');

						$('table.tiles td').eq(k)
							.css('transform','scale(1.5)')
							.css('box-shadow','5px 10px 15px #d39f32')
							.css('border-radius','10%')
							.fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100)
							.css('border-radius','0%').css('transform','scale(1)');
					}
				}

		}




		$('table.tiles').delegate('td', 'click',function() 					/* when the player clicks on tiles it will be occupied by particular symbol */
		{

			tieCheck=0;

			if( ($(this).data('check'))==0) 								/* checks whether the tile is already occupied */
			{	
				tileNumber++;
				if(tileNumber%2==1)	 										/*checks wheter to put 'o' or  'x' */
				{
					mouse=1;
					$('.scoreBord p')
						.remove();
					$('.scoreBord ')
						.append('<p>Whose Turn Is This - <span>Player 2</span></p>');
					$(this).append(0);
					$(this)
						.css('background', 'url(./img/rock.png)');
					$('table.tiles tr td')
						.css('cursor','url(./img/cross2.png)64 64,auto');
				}
				else
				{
					mouse=2;
					$('.scoreBord p')
						.remove();
					$('.scoreBord ')
						.append('<p>Whose Turn Is This - <span>Player 1</span></p>');
					$(this)
						.append(1);
					$(this)
						.css('background', 'url(./img/cross2.png)');
					$('table.tiles tr td')
						.css('cursor','url(./img/rock.png)64 64,auto');
				}
			}
				

			$(this).data('check',1); 										/* when tiles is clicked it will be marked as check */

			checkWhoWon(0,1,2); 											/*checks for same symbole in  3 consecutive  squres (i.e, row, column and diagonal wise */
			checkWhoWon(3,4,5);
			checkWhoWon(6,7,8);

			checkWhoWon(0,3,6);
			checkWhoWon(1,4,7);
			checkWhoWon(2,5,8);

			checkWhoWon(0,4,8);
			checkWhoWon(2,4,6);

			for(var i=0;i<=8;i++)
			{
				if($('table.tiles td').eq(i).text()!=' ') 					/* checks wheter the game is tie */
					tieCheck++;
					
			}

		

			if(tieCheck==9 && won!=1 && tiestop==0)							/*when the game is tie tie box in the scorebord will be incremented */
			{
				tie++;
				tieCheck=0;
				tiestop=1;
				$('table.score td').eq(2)
					.text(tie);

				$('.scoreBord p')
					.remove();

				$('.scoreBord ')
					.append('<h2>This Game Is Tie</h2>');

				$('.scoreBord h2')
					.css('color','red')
					.fadeOut(200).fadeIn(400).fadeOut(200).fadeIn(400).fadeOut(200).fadeIn(400);

				$('.scoreBord td').eq(2)
					.fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);

				$('table.score td').eq(2)
					.css('color','green');

				$('.scoreBord h2')
					.css('left','45px');

				$('.scoreBord ')
					.append('<h3>Click reset button to play again</h3>');
			}

			if(won==1)													/* when player x wins his score will be incremented accordingly */
			{	
				$('.scoreBord p').remove();
				$('.scoreBord h2').remove();
				

				if(winer==1 )
				{
					$('table.score td')
						.eq(0).css('color','green');
					$('table.score td')
						.eq(0).text(player1);
					$('.scoreBord ')
						.append('<h2>Player 1 has Won This Game</h2>');
					$('.scoreBord td')
						.eq(0).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
				}
 				if(winer==2 )
 				{
	 				$('table.score td')
	 					.eq(1).css('color','green');
	 				$('table.score td')
	 					.eq(1).text(player2);
	 				$('.scoreBord ')
	 					.append('<h2>Player 2 has Won This Game</h2>');
	 				$('.scoreBord td')
	 					.eq(1).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
 				}	
				
			
				for(var i=0;i<=8;i++)
					$('table.tiles td').eq(i).data('check',1); 

				$('.scoreBord h2')
					.css('left','0px');
				$('table.tiles tr td')
					.addClass('cursor')
					.css('cursor','url(./img/notAllowed1.png)64 64,auto');
				$('.scoreBord h2')
					.css('color','green')
					.fadeOut(200).fadeIn(400).fadeOut(200).fadeIn(400).fadeOut(200).fadeIn(400);
				$('.scoreBord ')
					.append('<h3>Click reset button to play again</h3>');
			}	

		});


 		$('button.reset').on('click',function(){						/* when the player hit reset button everything will be set to null except players score */

 			tileNumber=0;
			won=0;
			mouse=0;
			winer=0;
			tiestop=0;
			twoWin=0;

 			$('.scoreBord h3').remove();								/* removes the alert that says 'player X won the game' and also removes 'click the reset button to play again */
	 		$('.scoreBord p').remove();

 			$('table.tiles tr td')
					.addClass('cursor').css('cursor','url(./img/rock.png) 64 64,auto');
			$('.scoreBord h2')
					.remove();
			$('.scoreBord ')
					.append('<p>Whose Turn Is This - <span>Player 1</span></p>');

	 		for(var i=0;i<=8;i++)
	 		{

				$('table.tiles td').eq(i)											/* every tiles in the tic tac toe bord is unchecked */
					.data('check',0);
				$('table.tiles td').eq(i)
					.text(' ');
				$('table.tiles td').eq(i)
					.css('background','none');
				$('table.tiles td').eq(i)
					.css('box-shadow','none');
				
			}

 		});

	});

})();