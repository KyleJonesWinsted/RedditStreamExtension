chrome.runtime.onInstalled.addListener(function() {
    chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
        chrome.declarativeContent.onPageChanged.addRules([
            {
                conditions: [
                    new chrome.declarativeContent.PageStateMatcher({
                        pageUrl: { urlContains: 'reddit'},
                    })
                ],
                actions: [new chrome.declarativeContent.ShowPageAction()]
            }
        ])
    })
})

chrome.pageAction.onClicked.addListener(function(tab) {
    var redditStreamUrl = tab.url.replace("www.reddit.com", "www.reddit-stream.com")
    chrome.tabs.update(tab.id, {url: redditStreamUrl})
})

