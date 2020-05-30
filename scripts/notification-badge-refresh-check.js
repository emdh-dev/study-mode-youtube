// Checks the URL of the tab, and will not refresh the page if not on
// any YouTube page.
function checkTabURL() {
	if (window.location.href.indexOf(".youtube.com") === -1) {
		return;
	} else {
		window.location.reload();
	}
}

checkTabURL();
