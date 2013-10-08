chrome.extension.onRequest.addListener(
function(request, sender, sendResponse) {
	sendResponse({ids: localStorage.getItem("bmy")});
});
