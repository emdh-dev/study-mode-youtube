// Used to determine functions to perform to the homepage videos.
function homepageVideoFilter() {
    var hideAllHomepageVideos = document.querySelector('input[name=homepage_videos]');
    hideAllHomepageVideos.addEventListener('change', function (event) {
            
        // Will remove all content from the homepage.
        if (hideAllHomepageVideos.checked) {
            localStorage.setItem("checkbox_state_hide_homepage_videos", "true");

            chrome.tabs.executeScript({
                file: "/scripts/homepage-remove-all-videos.js"
            });
    
        // Refreshes window.
        } else {
            localStorage.setItem("checkbox_state_hide_homepage_videos", "false");

            chrome.tabs.executeScript({
                file: "/scripts/homepage-refresh-check.js" 
            });
        }
    });   

    // Additional check - might not be needed.
    if (hideAllHomepageVideos.checked) {
        localStorage.setItem("checkbox_state_hide_homepage_videos", "true");

        chrome.tabs.executeScript({
            file: "/scripts/homepage-remove-all-videos.js"
        });
    }
}

// Will update state of the popup's "hide_homepage_videos" option.
function reapplyHomepageVideoCheckboxState() {
    if (localStorage.checkbox_state_hide_homepage_videos === "true") {
        document.getElementById("hide_homepage_videos").checked = true;
    } else {
        document.getElementById("hide_homepage_videos").checked = false;
    }
}

// Used to determine functions to perform to the notification badge. 
function notificationBadgeFilter() {
    var hideNotificationBadge = document.querySelector('input[name=notification_badge]');
    hideNotificationBadge.addEventListener('change', function (event) {
            
        // Will remove the notification badge.
        if (hideNotificationBadge.checked) {
            localStorage.setItem("checkbox_state_notification_badge", "true");
            
            chrome.tabs.executeScript({
                file: "/scripts/notification-badge-remove.js" 
            });
        
        // Refreshes window.
        } else {
            localStorage.setItem("checkbox_state_notification_badge", "false");
            
            chrome.tabs.executeScript({
                file: "/scripts/notification-badge-refresh-check.js" 
            });
        }
    });   

    if (hideNotificationBadge.checked) {
        localStorage.setItem("checkbox_state_notification_badge", "true");

        chrome.tabs.executeScript({
            file: "/scripts/notification-badge-remove.js" 
        });
    }
}

// Will update state of the popup's "hide_notification_badge" option.
function reapplyNotificationBadgeState() {
    if (localStorage.checkbox_state_notification_badge === "true") {
        document.getElementById("hide_notification_badge").checked = true;
    } else {
        document.getElementById("hide_notification_badge").checked = false;
    }
}

// Will either hide or show all sidebar videos.
function sidebarVideoFilter() {
    var selectedSidebarVideoOption = document.querySelector('input[name=sidebar_videos]');
    selectedSidebarVideoOption.addEventListener('change', function (event) {

        // Will remove all videos on the sidebar.
        if (selectedSidebarVideoOption.checked) {
            localStorage.setItem("checkbox_state_hide_sidebar_videos", "true");

            chrome.tabs.executeScript({
                file: "/scripts/sidebar-remove-all-videos.js"
            });
        
        // Refreshes window.
        } else {
            localStorage.setItem("checkbox_state_hide_sidebar_videos", "false");

            chrome.tabs.executeScript({
                file: "/scripts/sidebar-video-refresh-check.js" 
            });
        }
    });
    
    if (selectedSidebarVideoOption.checked) {
        localStorage.setItem("checkbox_state_hide_sidebar_videos", "true");
      
        chrome.tabs.executeScript({
            file: "/scripts/sidebar-remove-all-videos.js"
        });
    }
}

// Checks and re-applies checkbox state to Firefox upon page change or refresh.
function reapplySidebarVideoCheckboxState() {
    if (localStorage.checkbox_state_hide_sidebar_videos === "true") {
        document.getElementById("hide_sidebar_videos").checked = true;
    } else {
        document.getElementById("hide_sidebar_videos").checked = false;
    }
}

// Used to determine functions to perform to the homepage videos.
function commentSectionFilter() {
    var hideAllComments = document.querySelector('input[name=comment_section]');
    hideAllComments.addEventListener('change', function (event) {
            
        // Will remove all comments from the video.
        if (hideAllComments.checked) {
            localStorage.setItem("checkbox_state_hide_comment_section", "true");

            chrome.tabs.executeScript({
                file: "/scripts/remove-comment-section.js"
            });
    
        // Refreshes window.
        } else {
            localStorage.setItem("checkbox_state_hide_comment_section", "false");

            chrome.tabs.executeScript({
                file: "/scripts/comment-section-refresh-check.js" 
            });
        }
    });   

    // Additional check - might not be needed.
    if (hideAllComments.checked) {
        localStorage.setItem("checkbox_state_hide_comment_section", "true");

        chrome.tabs.executeScript({
            file: "/scripts/remove-comment-section.js"
        });
    }
}

// Will update state of the popup's "hide_comment_section" option.
function reapplyCommentSectionCheckboxState() {
    if (localStorage.checkbox_state_hide_comment_section === "true") {
        document.getElementById("hide_comment_section").checked = true;
    } else {
        document.getElementById("hide_comment_section").checked = false;
    }
}

// Will perform every necessary check.
function applyPopup() {
    reapplyHomepageVideoCheckboxState();
    homepageVideoFilter();

    reapplyNotificationBadgeState();
    notificationBadgeFilter();

    reapplySidebarVideoCheckboxState();
    sidebarVideoFilter();

    reapplyCommentSectionCheckboxState();
    commentSectionFilter();
}

//document.addEventListener("DOMContentLoaded", function () {
//  applyPopup();   
//});

window.addEventListener('load', (event) => {
    applyPopup();
});
