chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab)=> {
    if(changeInfo.status === "complete" && tab.url === "http://127.0.0.1:35001/"){   
        chrome.tabs.remove(
                tabId,
                ()=>{},
            )
    }
});