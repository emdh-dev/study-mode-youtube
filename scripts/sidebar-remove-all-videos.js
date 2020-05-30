// Disables Autoplay on videos via Aria code.
function disableAutoplay() {
	var AutoPlay = document.getElementById("toggle");

	if (AutoPlay.getAttribute("aria-pressed") === "true") {
		AutoPlay.click();
	}
}

// Will click on Theater Mode if the default view is currently being used.
function clickTheaterMode() {
	var videoView = document.querySelector(".ytp-size-button.ytp-button"); 

	// Video in theater mode, button title: "Default view (t)"
	// Video in default view, button title: "Theater mode (t)"
	if (videoView.title === "Theater mode (t)") {
		videoView.click();
	}
}

// Removes the sidebar videos, both for full-size and windowed views.
function removeSidebarVideos() {
	// Removes sidebar and videos in full-sized window view.
	document
		.querySelector(".style-scope.ytd-watch-flexy")
		.remove();

	// Removes sidebar videos when window is resized.
	document
		.querySelectorAll(".ytd-watch-next-secondary-results-renderer")
		.forEach(sidebarVideo => sidebarVideo.remove());
}

// Removes the grid of videos that appears once a video ends.
function removeEndscreenVideoMatrix() {
	document
		.querySelector(".videowall-endscreen")
		.remove();
}

function sidebarVideosRemovalProcess() {
	if (window.location.href.indexOf(".youtube.com/watch?") === -1) {
		return;
	}

	clickTheaterMode();
	disableAutoplay();
	removeSidebarVideos();
	removeEndscreenVideoMatrix();
}

sidebarVideosRemovalProcess();

window.addEventListener('resize', removeSidebarVideos());