/***********************function for customized alert box*************************/
var winW = window.innerWidth;
	winH = window.innerHeight;
	dialogoverlay = document.getElementById('dialogoverlay');
	dialogbox = document.getElementById('dialogbox');
	dialogboxbody = document.getElementById('dialogboxbody');

function CustomAlert() {
    this.render = function(dialog) {

        console.log(dialogoverlay);
        dialogoverlay.style.display = "block";
        dialogoverlay.style.height = (winH) + "px";
        dialogbox.style.left = (winW / 2) - (550 * .335) + "px";
        dialogbox.style.top = "250px";
        dialogbox.style.display = "block";

        document.getElementById('dialogboxbody').innerHTML = dialog;
        document.getElementById('dialogboxfoot').innerHTML = '<button onclick="Alert.ok()">OK</button>';
    }
    this.ok = function() {
        document.getElementById('dialogbox').style.display = "none";
        document.getElementById('dialogoverlay').style.display = "none";
    }
}

var Alert = new CustomAlert(); /*creating new instance of alert*/ 



/***********************function that slids down the form div*************************/

function doDown() {
    if (parseInt(fade.style.top) < 90) {
        topval = parseInt(fade.style.top);
        topval += 2;
        fade.style.top = topval + 'px';
        setTimeout(doDown, 2);
    }
}


var fade = document.getElementById('container');
	fade.style.top = '-600px';
	doDown();

/**********************function for radio buttons**************************/

var preColor = new Array();
	but = document.querySelectorAll('button');
	but[0].style.marginLeft = '50px';
	preColor[0] = ' ';
	k = 0, l = -1;
	i = 0, j = -1;

    prenumber = new Array();
	prenumber[0] = 1;
	ul = document.querySelectorAll('.imgDiv ul'),
	design = document.querySelectorAll('.designValue input');
	button = document.querySelectorAll('button');

	button[0].style.boxShadow = '0px 5px 5px #455A64';
	color = document.querySelectorAll('.colors input');
	label = document.querySelectorAll('.colors label');
	submit = document.getElementById('submit');

function colorClick() 
{
    l++;
    dialogboxbody.style.color = "black";

    for (var i = 0; i < color.length; i++) 
    {
        color[i].style.background = "gray";
        label[i].style.color = "gray";
    };

    if (color[0].checked == true) 
    {
        color[0].style.background = "red";
        label[0].style.color = "red";
        setTimeout(function() 
	        {
	           Alert.render("You Have Choosen '<strong style='color:red'>" + color[0].value + "</strong>' Color");
	        }, 650);

    } 
    else if (color[1].checked == true) 
    {
        color[1].style.background = "blue";
        label[1].style.color = "blue";
        setTimeout(function() 
	        {
	            Alert.render("You Have Choosen '<strong style='color:blue'>" + color[1].value + "</strong>' Color");
	        }, 650);
    } 
    else if (color[2].checked == true) 
    {
        color[2].style.background = "orange";
        label[2].style.color = "orange";
        setTimeout(function() 
	        {
	            Alert.render("You Have Choosen '<strong style='color:orange'>" + color[2].value + "</strong>' Color");
	        }, 650);
    } 
    else if (color[3].checked == true) 
    {
        color[3].style.background = "green";
        label[3].style.color = "green";
        setTimeout(function() 
	        {
	            Alert.render("You Have Choosen '<strong style='color:green'>" + color[3].value + "</strong>' Color");
	        }, 650);
    }


};

/**********************function for img design selection buttons**************************/

function imgScroll(number) 
{
    j++;
    prenumber[++i] = number;

    for (a = 0; a < button.length - 1; a++)
        button[a].style.boxShadow = 'none';

    if (number == 1) 
    {
        button[0].style.boxShadow = '0px 5px 5px #455A64';
        design[0].value = "Design1";
        if (prenumber[j] == 2)
            scrollAnimation(0, -510);
        if (prenumber[j] == 3)
            scrollAnimation(0, -1020);
    }
    if (number == 2) 
    {
        button[1].style.boxShadow = '0px 5px 5px #455A64';
        design[0].value = "Design2";
        if (prenumber[j] == 1)
            scrollAnimation(-510, 0);
        if (prenumber[j] == 3)
            scrollAnimation(-510, -1020);
    }
    if (number == 3) 
    {
        button[2].style.boxShadow = '0px 5px 5px #455A64';
        design[0].value = "Design3";
        if (prenumber[j] == 2)
            scrollAnimation(-1020, -510);
        if (prenumber[j] == 1)
            scrollAnimation(-1020, 0);
    }
}

function imgScrollButton(direction) /*function for scroll buttons of img div*/
{
    j++;
    for (a = 0; a < button.length - 1; a++)
        button[a].style.boxShadow = 'none';

    if (direction == 'left') /*left scroll button*/
    {
        for (a = 0; a < button.length; a++)
            button[a].style.boxShadow = 'none';

        if (prenumber[j] == 1) 
        {
            button[2].style.boxShadow = '0px 5px 5px #455A64';
            prenumber[++i] = 3;
            design[0].value = "Design3";
            scrollAnimation(-1020, 0);
        }
        if (prenumber[j] == 2) 
        {
            button[0].style.boxShadow = '0px 5px 5px #455A64';
            prenumber[++i] = 1;
            design[0].value = "Design1";
            scrollAnimation(0, -510);
        }
        if (prenumber[j] == 3) 
        {
            button[1].style.boxShadow = '0px 5px 5px #455A64';
            prenumber[++i] = 2;
            design[0].value = "Design2";
            scrollAnimation(-510, -1020);
        }

    }

    if (direction == 'rigth') /*right scroll button*/
    {
        if (prenumber[j] == 1) 
        {
            button[1].style.boxShadow = '0px 6px 15px #455A64';
            prenumber[++i] = 2;
            design[0].value = "Design2";
            scrollAnimation(-510, 0);
        }
        if (prenumber[j] == 2) 
        {
            button[2].style.boxShadow = '0px 6px 15px #455A64';
            prenumber[++i] = 3;
            design[0].value = "Design3";
            scrollAnimation(-1020, -510);
        }
        if (prenumber[j] == 3) 
        {
            button[0].style.boxShadow = '0px 6px 15px #455A64';
            prenumber[++i] = 1;
            design[0].value = "Design1";
            scrollAnimation(0, -1020);
        }
    }


}


function scrollAnimation(value, left) /* scroll when the right and left or design button is clicked*/
{
    
    if (left < value) 
    {
        left += 15;
        ul[0].style.marginLeft = left + 'px'
        setTimeout(function() 
	        {
	            scrollAnimation(value, left);
	        }, 10);
    }

    if (left > value) 
    {
        left -= 15;
        ul[0].style.marginLeft = left + 'px'
        setTimeout(function() 
        {
            scrollAnimation(value, left);
        }, 10);
    }
}

/********************function for submit button**************************/
function submitForm() {
    var checked = 0;

    for (var k = 0; k < color.length; k++)
        if (color[k].checked == true) 
        {
            checked = 1;
        }

    if (checked == 0)
        setTimeout(function() 
        {
            dialogboxbody.style.color = "red";
            Alert.render("Please Choose Any Color!!!");
        }, 100);

    else 
    {
        setTimeout(function() {
            dialogboxbody.style.color = "green";
            Alert.render("Your request was submitted Sucessfully");

            for (var k = 0; k < color.length; k++) 
            {
                color[k].style.background = "gray";
                label[k].style.color = "gray";
                color[k].checked = false;
            }
            j++;
            for (a = 0; a < button.length - 1; a++)
                button[a].style.boxShadow = 'none';
            button[0].style.boxShadow = '0px 5px 5px #455A64';
            design[0].value = "Design1";
            if (prenumber[j] == 2)
                scrollAnimation(0, -510);
            if (prenumber[j] == 3)
                scrollAnimation(0, -1020);
            prenumber[++i] = 1;

        }, 100);
    }
}

/********************navigation button**************************/

var navigation=document.getElementsByClassName('navigation');
	show=document.getElementById('navigationBar');
	hide=document.getElementById('hide');
	toggle=0;
function navigate()
{
	toggle++;

	if(toggle%2==1)
	{
		

		function naviDoDown()
		{
   			 if (parseInt(show.style.width) <= 180 || parseInt(show.style.height) <= 220 ) {
   			 	console.log(parseInt(show.style.width));
        	width = parseInt(show.style.width);
        	height = parseInt(show.style.height);
        	width+=2;
        	height+=2;
        	if (parseInt(show.style.width) <= 180)
        	show.style.width = width + 'px';
        	show.style.height = height + 'px';
        	setTimeout(naviDoDown, 2);
    		}
		}

		show.style.width='0px';
		show.style.height='0px';
		show.style.display="block";
		naviDoDown();
		
		setTimeout(function(){
			hide.style.display="block";
		},400);
		navigation[0].innerHTML="<span style='font-size:24px; top:8px;left:18.5px;'>x</span>";
		// console.log(navigation[0].innerHTML);
	}
	else
	{
		navigation[0].innerHTML="<span>+</span>";
		show.style.display="none";
		hide.style.display="none";
	}
}