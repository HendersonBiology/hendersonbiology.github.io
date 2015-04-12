var i = 60;

function timedRedirect() {
	postMessage(i);
    i = i - 1;
    setTimeout("timedRedirect()", 1000);
}

timedRedirect();