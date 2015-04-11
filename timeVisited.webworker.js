var i = 0;

function countTimeVisited() {
	postMessage(i);
    i = i + 1;
    setTimeout("countTimeVisited()", 1000);
}

countTimeVisited();