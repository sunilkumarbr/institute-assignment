document.getElementById('input').focus();
/*to set the deafult status line for the webpage */
window.defaultStatus = "For every minute you are angry you lose sixty seconds of happiness.";

function clickdialog(ok) /* function to read user input and validate the same */ {
    button = document.getElementById('input');
    userName = button.value;

    if (!userName == null || userName.match(/^[a-zA-Z][a-zA-Z ]+$/)) /* validate the user input*/ {
        console.log("insideif");
        button.value = '';
        hidedialog = document.getElementById('dialog');
        welcome = document.getElementById('welcom');
        console.log(hidedialog);

        function doUp() /* to move up the prompt box from middle of the page to top */ {
            console.log(parseInt(dia.style.top));
            if (parseInt(dia.style.top) > -200) {
                topval = parseInt(dia.style.top);
                topval -= 10;
                dia.style.top = topval + 'px';
                setTimeout(doUp, 10);
            }
        }

        dia = document.getElementById('dialog');
        dia.style.top = '300px';
        doUp();

        welcome.style.display = "block";

        function doUpWelcom() /* to move up the welcom not box from bottom to middle of the page*/ {
            console.log(parseInt(dia.style.top));
            if (parseInt(welcomdia.style.top) > 300) {
                topval = parseInt(welcomdia.style.top);
                topval -= 10;
                welcomdia.style.top = topval + 'px';
                setTimeout(doUpWelcom, 30);
            }
        }

        welcomdia = document.getElementById('welcom');
        welcomdia.style.top = '700px';
        doUpWelcom();

        message = document.createElement('p'),
            messageText = document.createTextNode('Welcome to this webpage, ' + userName.toUpperCase());
        message.appendChild(messageText);
        welcome.appendChild(message);
    } else /* user input is not valid so focus on input bos */ {
        button.value = '';
        button.focus();
    }

}


function clickwelcome() /* to display welcom note */ {

    function doUpWelcom() /* to move up the welcom note box from middle of the page to top */ {
        if (parseInt(welcomdia.style.top) > -200) {
            topval = parseInt(welcomdia.style.top);
            topval -= 10;
            welcomdia.style.top = topval + 'px';
            setTimeout(doUpWelcom, 10);
        }
    }
    welcomdia = document.getElementById('welcom');
    welcomdia.style.top = '300px';
    setTimeout(
        doUpWelcom(), 10000);

    var lastmodified = document.lastModified;
        monthNames = ["January", "February", "March", "April", "May", "June", "       July", "August", "September", "October", "November", "        December"],
        date = new Date(),
        month = monthNames[date.getMonth()],
        day = date.getDate(),
        year = date.getFullYear(),
        hour = date.getHours(),
        minute = date.getMinutes(),
        second = date.getSeconds();
        message = document.createElement('p'),
        p1 = document.createElement('p'),
        div = document.getElementById('div');

    if (hour >= 6 && hour < 12)
        messageText = document.createTextNode('Hello, ' + userName + '... good morning');
    else if (hour >= 12 && hour <= 16)
        messageText = document.createTextNode('Hello, ' + userName + '... good afternoon');
    else if (hour > 16 && hour <= 19)
        messageText = document.createTextNode('Hello, ' + userName + '... good evening');
    else
        messageText = document.createTextNode('Hello, ' + userName + '... good night');

    message.appendChild(messageText);
    div.appendChild(message);
    p1content = document.createTextNode("The Current Date: " + month + " " + day + " " + year);
    p1.appendChild(p1content);
    div.appendChild(p1);
    p2 = document.createElement('p');
    p2content = document.createTextNode("This Document is Last Modified On: " + lastmodified);
    p2.appendChild(p2content);
    p1.parentNode.appendChild(p2);

    var mov = null;

    function doMove() /*to bounce the div that contain current and last modified date */ {
        if (bounce < 22) {
            bounce++;
            mov.style.top = parseInt(mov.style.top) + 20 + 'px';
            setTimeout(doMove, 25);
        }

        if (bounce >= 22 && bounce <= 75) {
            bounce++;
            topval = parseInt(mov.style.top);
            topval -= 2;
            mov.style.top = topval + 'px';
            setTimeout(doMove, 30);
        }

        if (bounce > 75 && bounce <= 175) {
            bounce++;
            mov.style.top = parseInt(mov.style.top) + 1 + 'px';
            setTimeout(doMove, 40);
        }

    }

    setTimeout(function() {
        div.style.display = 'block';
        mov = document.getElementById('div');
        mov.style.top = '-300px';
        bounce = 0;
        doMove();
    }, 700);
}
