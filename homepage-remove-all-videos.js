// Removes all content from the homepage.
// Will only remove HTML elements on YouTube's homepage -
// will not execute anywhere else.
function removeAllHomepageVideos() {
	if (window.location.href.indexOf("watch") > -1) {
		return;
	} else if (window.location.href.indexOf("user") > -1) {
		return;
	} else if (window.location.href.indexOf("channel") > -1) {
		return;
	} else if (window.location.href.indexOf(".youtube.com") === -1) {
		return;
	}

	document
		.querySelector(".page-container")
		.remove();
}

// Removes the trending item icon from YouTube Mobile's homepage.
function removeTrendingItem() {
	document
		.querySelector(".pivot-bar-item-tab pivot-trending")
		.remove();
}

function removeHomepageContent() {
	removeAllHomepageVideos();
	removeTrendingItem();
}

removeHomepageContent();
