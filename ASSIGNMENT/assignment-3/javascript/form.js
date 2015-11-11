(function(){
	$(document).ready(function(){					/*when the document is ready jquery will be executed*/

													/*To give the animation to input box when it is focused or mouseentred and keydow or mouseout*/
		$('input').on('mouseenter',function(){	
			$(this).animate({
				width:350,
				height:50,
				marginLeft:'-26px',
				backgroundPosition: 300},400);
		});

		$('input').on('focus',function(){
			$(this).animate({
				width:350,
				height:50,
				marginLeft:'-26px',
				backgroundPosition: 300},400);
		});

		$('input').on('keydown',function(){
			$(this).animate({
				width:300,
				height:50,
				marginLeft:0,
				position: 'relative',
				left: 0,
				backgroundPosition: 250},0);
		});

		$('input').on('mouseout',function(){
			$(this).animate({
				width:300,
				height:50,
				marginLeft:0,
				position: 'relative',
				left: 0,
				backgroundPosition: 250},0);
		});

													/* when the submit button is pressed the content in input box will be append to table*/

		$('button.submit').on('click',function(){
			event.preventDefault();
			var name=$('input.name').val(),
				email=$('input.email').val(),
				phone=$('input.phone').val(),		/* get the values from input box */

				ValidPhoNum=/(^\+\d{12}$)|(^\d{10}$)/,
				ValidEmail=/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
				ValidName=/^[a-zA-Z][a-zA-Z ]+$/;

				if(name==''&&email==''&&phone=='')	/* to check whether inputs are empty or not */
					{

						alert("Please enter the details");
						$('input.name')
							.css('background','#353F3E')
							.focus();
					}

				else 
					{	 							/* if inputs are not empty the it will be validated */

						if(!name.match(ValidName))
								{
									$('input.email')
										.css('background','transparent')
										.css('background','url(../img/email.png) no-repeat')
										.css('background-position',' 250px 3px');
									
									alert("Not valid user name");
									$('input.name').css('background','#353F3E').val('').focus();
								}

						else if(!email.match(ValidEmail))
								{
									$('input.name')
										.css('background','transparent')
										.css('background','url(../img/user.png) no-repeat')
										.css('background-position',' 250px 3px');

									$('input.phone')
										.css('background','transparent')
										.css('background','url(../img/phone.png) no-repeat')
										.css('background-position',' 258px 3px');


									alert("Not valid email address");
									$('input.email')
										.css('background','#353F3E')
										.val('')
										.focus();
								}

						else if(!phone.match(ValidPhoNum))
								{
									$('input.name')
										.css('background','transparent')
										.css('background','url(../img/user.png) no-repeat')
										.css('background-position',' 250px 3px');

									$('input.email')
										.css('background','transparent')
										.css('background','url(../img/email.png) no-repeat')
										.css('background-position',' 250px 3px');

									alert("Not valid phone number");
									$('input.phone')
										.css('background','#353F3E').val('').focus();
								}

						else
							{ 
								
									$('input.name')
										.css('background','transparent')
										.val('')
										.css('background','url(../img/user.png) no-repeat')
										.css('background-position',' 250px 3px')
										.focus();

									$('input.email')
										.css('background','transparent')
										.val('')
										.css('background','url(../img/email.png) no-repeat')
										.css('background-position',' 250px 3px');

									$('input.phone')
										.css('background','transparent')
										.val('')
										.css('background','url(../img/phone.png) no-repeat')
										.css('background-position',' 258px 3px');

								$('table.info')		  /* to insert the row to the table with the values submitted by user */
									.append('<tr class=delete><td>'+name+'</td><td>'+email+'</td><td>'+phone+'</td></tr>');

							}

					}
				
			});
	
													/* to delete the selected row */

	 	$('table').delegate('tr.delete', 'click', function(){
	 		
	 												/* as we are removing the cancel button from the dailog box, we need to add the new cancel button */
	 			$('.dailog')
	 				.append('<button class="cancelButtonafter">Cancel</button>'); 
	 		var row=$(this);

	 		$('.dailog')
	 			.fadeIn(500);
	 												/* dailog box will appear to ask , whether user wants to delete the row, dailog box will have ok and cancel button*/ 
	 		$('button.deleteButton').on('click',function(){
	 			 row	                 			/* to select the currently clicked button in row of table */
	        	.remove();							/* removes both cancel button from dailog box and row from table */
	        	$('.dailog')
	        		.append('<button class="cancelButtonafter">Cancel</button>');             
	        										/*and the currently selected row will be delited*/
	        	$('.dailog')
	        		.fadeOut(500);
	        	
	 		});

	 		$('button.cancelButton').on('click',function(){
	 												/* when cancel button is pressed the dailog box will disappears */
	 			row=$(this);						/* row variable will be pointing to cancel button */				
	 			$('.dailog')
	 				.fadeOut(500);
	 		});

	 		$('button.cancelButtonafter').on('click',function(){
	 												/* when new cancel button is pressed the dailog box will disappears */
	 			row=$(this);						/* row variable will be pointing to newly added cancel button */
	 			$('.dailog')
	 				.fadeOut(500);
	 		});

	    });

    });

})();