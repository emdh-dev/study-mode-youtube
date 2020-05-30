// Remove the comment section from a video.
function removeCommentSection() {
	if (window.location.href.indexOf(".youtube.com/watch?") === -1) {
		return;
	}

	document
		.getElementById("comments")
		.remove();
}

removeCommentSection();
