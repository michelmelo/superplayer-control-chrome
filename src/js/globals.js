// Execute replaces in strings
(function (String) {
  String.prototype.format = function () {
    if (arguments.length > 0) {
      var val = this,
        i = 0,
        paramLen = arguments.length;

      for (; i < paramLen; i++) {
        val = val.replace('{' + i + '}', arguments[i]);
      }

      return val;
    }
    else {
      return this;
    }
  };
}(String));


// Global variable to save the Chrome's tab id
var tabId = 0,

  // Superplayer selector (elements to click)
  script = 'document.querySelector("a[data-function={0}]").click()';


// Used to get Superplayer tab id
var getTabId = (function () {
  chrome.tabs.query({
    'status': 'complete' // Get all loaded tabs
  }, function (tabs) {
    // Verify tabs quantity
    if (tabs.length > 0) {
      var i = 0,
        tabsLen = tabs.length,
        isOpen = false;

      // Verify the url of all open tabs
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
});


// Functions to execute events
var play = (function () {
  if (tabId > 0) {
    chrome.tabs.executeScript(tabId, {
      code: script.format('play')
    });
  }
  else {
    throw new Error('Error 404: Superplayer tab not found.');
  }
});

var next = (function () {
  if (tabId > 0) {
    chrome.tabs.executeScript(tabId, {
      code: script.format('next')
    });
  }
  else {
    throw new Error('Error 404: Superplayer tab not found.');
  }
});
