(function(){
	
	$(document).ready(function(){
		document.body.style.zoom = "150%" ;
		$('.drop')									/*	when the html document or page is loded login box will drop down from the top	*/
			.animate({
				position:"relative",
				top:150
			},1500);

		$('button').on('click',function(){			/*	submit button */

			var nam=$('input.name').val();
				pass=$('input.password').val();		/*	varibles that holds the name and password enter by user1*/

			// event.preventDefault(); 				/*	prevant the default action of submit button	*/

			if(nam!=='' && pass!==''){				/*	check wheter the inputs are not empty	*/
					$('input.name')
						.css('background','transparent')
						.css('background','url(./img/user1.png) no-repeat')
						.css('background-position',' 112px 7px');
						
					$('input.password')
						.css('background','transparent')
						.css('background','url(./img/password.png) no-repeat')
						.css('background-position',' 112px 7px');
						
					$('.drop')						/* user name and password is not empty then the login box will flies up	*/
						.animate({
							position:"relative",
						  	top:-150
						},800)
						.end();

					setTimeout(function() {			/* after the login box flew up , the form page will get load */
						$('input.name')
							.val('');				/* after the login box flew up , it will resets the user name input box contet */
						
						$('input.password')
							.val('');				/* after the login box flew up , it will resets the password name input box contet */
					    window.location.href="./html/form.html";
					},700);
			}


			else{ 								/* when user not provide name and passwored */
				if(nam==='') 					/* when user enter the password but not name , password will be earesed and asks username first */
					{

						$('input.password') 
							.css('background','transparent')
							.val('')
							.css('background','url(./img/password.png) no-repeat')
							.css('background-position',' 112px 7px');

						$('input.name')
							.css('background','#4c4843')
							.focus();
						
					}
					else							/*	when user enter the name but not password,then it  asks for passwored */
					{    
						$('input.name')
							.css('background','transparent')
							.css('background','url(./img/user1.png) no-repeat')
							.css('background-position',' 112px 7px');
							
						$('input.password')
							.css('background','#4c4843')
							.focus();
					}
			}

		});	/* submit button function */


	});	 /* document ready function*/

})();