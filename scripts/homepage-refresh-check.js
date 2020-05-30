// Checks the URL of the tab, and will not refresh the page if not on
// YouTube's homepage.
function checkTabURL() {
    if (window.location.href.indexOf(".youtube.com") === -1) {
    	return;
    } else if (window.location.href.indexOf("/user") > -1) {
    	return;
    } else if (window.location.href.indexOf("/channel") > -1) { 
    	return;
    } else if (window.location.href.indexOf("/watch?") > -1) {
    	return;
    } else {
		window.location.reload();
	}
}

checkTabURL();
