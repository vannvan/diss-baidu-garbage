function logURL(response) {
    sendMessageToContentScript(response, (loadMessage) => {
        if (loadMessage) {
            console.log(loadMessage);
        }
    });
}

chrome.webRequest.onHeadersReceived.addListener(
    logURL, { urls: ["*://*.baidu.com/*"], types: ['xmlhttprequest'] }, [
        "responseHeaders"
    ]
);

function sendMessageToContentScript(message, callback) {
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, message, function(response) {
            if (callback) callback(response);
        });
    });
}