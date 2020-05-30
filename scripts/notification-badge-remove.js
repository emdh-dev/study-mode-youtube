// Remove the notification badge from any page.
function removeNotificationBadge() {
    if (window.location.href.indexOf(".youtube.com") === -1) {
    	return;
    }

	document
		.querySelector(".ytd-notification-topbar-button-renderer")
		.remove();
}

removeNotificationBadge();
