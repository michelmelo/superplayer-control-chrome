(function (chrome) {

  chrome.tabs.query({
    'status': 'complete' // Get all loaded tabs
  }, function (tabs) {
    if (tabs.length > 0) {
      var i = 0,
        tabsLen = tabs.length,
        isOpen = false;
      for (; i < tabsLen; i++) {
        if (tabs[i].url.indexOf('superplayer.fm') > -1) {
          tabId = tabs[i].id;
          isOpen = true;
        }
      }

      if (!isOpen) {
        // Open a new tab to Superplayer
        chrome.tabs.create({
          url: 'https://superplayer.fm',
          active: true
        }, function (tab) {
          if (tab && tab.id) {
            tabId = tab.id;
          }
          else {
            throw new Error('Error when creating a new tab.');
          }
        });
      }
    }
  });

}(chrome));
