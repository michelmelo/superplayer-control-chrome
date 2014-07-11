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



// Used to open a new tab
var openTab = (function () {
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
});

// Verify all tabs to get Superplayer tab
var verifySuperplayerIsOpen = (function (callback) {
  chrome.tabs.query({
    'status': 'complete' // Get all loaded tabs
  }, function (tabs) {
    var i = 0,
      tabsLen = tabs.length,
      isOpen = false;

    // Verify tabs quantity
    if (tabsLen > 0) {
      // Verify the url of all open tabs
      for (; i < tabsLen; i++) {
        if (tabs[i].url.indexOf('superplayer.fm') > -1) {
          tabId = tabs[i].id;
          isOpen = true;
        }
      }
    }

    callback(isOpen);
  });
});

// Functions to execute events
var play = (function () {
  verifySuperplayerIsOpen(function (isOpen) {
    if (isOpen) {
      chrome.tabs.executeScript(tabId, {
        code: script.format('play')
      });
    }
  });
});

var next = (function () {
  verifySuperplayerIsOpen(function (isOpen) {
    if (isOpen) {
      chrome.tabs.executeScript(tabId, {
        code: script.format('next')
      });
    }
  });
});

// Add tab events
chrome.tabs.onRemoved.addListener(function (closedTabId, obj) {
  if (tabId > 0 && tabId === closedTabId) {
    tabId = 0;
  }
});
