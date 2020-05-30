// Removes all content from the homepage.
// Will only remove HTML elements on YouTube's homepage -
// will not execute anywhere else.
function removeAllHomepageVideos() {
	if (window.location.href.indexOf("user") > -1) {
		return;
	} else if (window.location.href.indexOf("channel") > -1) {
		return;
    } else if (window.location.href.indexOf(".youtube.com") === -1) {
		return;
    }

	document
		.querySelector(".style-scope.ytd-two-column-browse-results-renderer")
		.remove();
}

removeAllHomepageVideos();
