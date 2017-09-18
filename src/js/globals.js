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


// Get elements from Superplayer by function
var actionSelector = 'document.querySelector("button[data-action={0}]").click()';

// Used to open a new tab
var openTab = (function () {
  chrome.tabs.create({
    url: 'https://www.superplayer.fm',
    active: true
  });
});

// Verify all tabs to get Superplayer tab
var verifySuperplayerIsOpen = (function (callback) {
  chrome.tabs.query({},
      function (tabs) {
      var i = 0,
        tabsLen = tabs.length,
        isOpen = false,
        tabId = -1;

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

      callback(isOpen, tabId);
    }
  );
});

var getHotKeys = (function (callback) {
  chrome.commands.getAll(callback);
});

// Ask to content script about play button state
var askForState = (function (listSelected, isPlaying, isLiked) {
  if (listSelected === undefined) {
    listSelected = false;
  }
  if (isPlaying === undefined) {
    isPlaying = true;
  }
  if (isLiked === undefined) {
    isLiked = true;
  }

  verifySuperplayerIsOpen(function (isOpen, tabId) {
    if (isOpen) {
      chrome.tabs.sendMessage(tabId, {
        listSelected: listSelected,
        isPlaying: isPlaying,
        isLiked: isLiked
      });
    }
  });
});

// Functions to execute events
var play = (function () {
  verifySuperplayerIsOpen(function (isOpen, tabId) {
    if (isOpen) {
      chrome.tabs.executeScript(tabId, {
        code: actionSelector.format('pause')
      }, function () {
        askForState(false, true, false);
      });
    }
  });
});

var next = (function () {
  verifySuperplayerIsOpen(function (isOpen, tabId) {
    if (isOpen) {
      chrome.tabs.executeScript(tabId, {
        code: actionSelector.format('skip')
      }, function () {
        askForState(false, false, true);
      });
    }
  });
});

var mute = (function () {
  verifySuperplayerIsOpen(function (isOpen, tabId) {
    if (isOpen) {
      chrome.tabs.executeScript(tabId, {
        code: actionSelector.format('volume')
      });
    }
  });
});

var like = (function (callback) {
  verifySuperplayerIsOpen(function (isOpen, tabId) {
    if (isOpen) {
      chrome.tabs.executeScript(tabId, {
        code: actionSelector.format('love')
      }, function () {
        askForState(false, false, true);
      });
    }
  });
});

var hate = (function () {
  verifySuperplayerIsOpen(function (isOpen, tabId) {
    if (isOpen) {
      chrome.tabs.executeScript(tabId, {
        code: actionSelector.format('hate')
      });
    }
  });
});
