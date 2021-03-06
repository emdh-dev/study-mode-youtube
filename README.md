This is the master branch for Study Mode: YouTube.  There is nothing stored here - to check out code for an individual browser (Chrome or Firefox), check out its corresponding branch.

There are not many differences between the Firefox and Chrome source code; most of this code works cross-platform (source: https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Build_a_cross_browser_extension).  Minor changes listed on that page had to be made, such as the browser vs. chrome API namespace, how files are referenced by functions (../folder/file vs. /folder/file - see popup/toolbar-menu.js for examples), as well as slight formatting differences.  Appearance should be consistent across Windows and Linux versions of Firefox and Chrome (have not tested MacOS, but it should work as well).  

Thank you for checking out this repository!



# Study Mode: YouTube 
A browser extension that allows you to focus and study during your video browsing session by removing all distractions from YouTube - homepage
videos, the notification badge, autoplay, sidebar recommended videos, displayed comments, and the wall of suggested videos that appears once a video ends.

Created for serious study/learning/focus sessions.

Thank you so much for downloading my browser extension,
and I hope you enjoy it!


## How to use

Simply click this extension's button in your Firefox browser's toolbar (small icon with white background, red text and image) and select the checkbox for any 
option you wish to apply to your current tab of YouTube - you can apply as many options as you'd like!  These options are only saved for the
current tab you made changes to.  If you want to apply these changes to any other tab or window with YouTube open, all you have to do is 
simply click the browser extension to open it (no need to re-select the checkboxes), and all changes will be applied!  
Any selected change modifies the webpage - as a result, in order to undo the change (uncheck a check box), the page will get refreshed.  


## Explanation of options

Hide all videos on homepage:
This is going to remove every displayed video on YouTube's homepage.  This will only work on YouTube's homepage 
(www.youtube.com).

Hide the notifications badge:
This is going to remove the bell icon that you see when you are signed into YouTube, next to your profile.
This can be used on any page within YouTube.

Hide all videos in the sidebar:
This is going to remove all the videos in the sidebar while you're watching a video.  This works for both full-screen and windowed browsers
(may have to click on the extension's button again to apply if you resize).  This is also going to disable AutoPlay and remove the wall of 
video that appear once your current video is over, leaving you with a black screen.

Hide all comments:
This is going to remove every displayed comment from the video you're watching.  I would not recommend using this feature - comments can provide insight about the video (mistakes by the author, poor video, fake information, additional resources, summaries, important questions and answers about the content, etc.).

These are all the functions that the Study Mode: YouTube extension supports for now.
There are more features planned for the future, so stay tuned!


### Contact

I have put a lot of effort into this extension, however, you may encounter a bug or issue!
If you do, please email me at EMDHdev@gmail.com with the browser that you are using Study Mode: YouTube in, as well as a description of what is
happening.

My goal is to make this extension as useful as possible for every user, and your feedback will help greatly!
Feel free to email me about any desired features you have and feedback about this extension - I'll be reading them all!


### Permissions

User data is not required nor accessed by this extension - I am a user of this extension too, and believe heavily in the protection of users'
privacy and personal data.

I am not collecting anything, nor is it possible for me to retrieve anything; below is an explanation of permissions in Study Mode: YouTube with
definitions copied from Mozilla's developer page.


activeTab: If an extension has the activeTab permission, then when the user interacts with the extension, the extension is granted extra privileges
for the active tab only.

activeTab is used in order to apply changes to the current tab of YouTube.

localStorage is also used in this extension and is used to store the options you have selected in the extension for future access - both in new tabs,
and in new windows.  Access and retrieval of only these customization options are used.


#### License

The license for this project is attached on the master branch, and applies for all code written for every branch in Study Mode: YouTube.
