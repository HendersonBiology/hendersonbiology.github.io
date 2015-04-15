// Developed by Donald Leung (http://donaldkellett.github.io)

var i = 0;

function countTimeVisited() {
	postMessage(i);
    i = i + 1;
    setTimeout("countTimeVisited()", 1000);
}

countTimeVisited();