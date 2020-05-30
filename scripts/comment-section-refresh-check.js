// Checks the URL of the tab, and will not refresh the page if not
// currently watching a YouTube video.
function checkTabURL() {
    if (window.location.href.indexOf(".youtube.com/watch?") === -1) {
        return;
	} else {	
		window.location.reload();
	}
}

checkTabURL();
