// Global variable to save the Chrome's tab id
var tabId = 0;

(function (document) {

  var script = 'document.querySelector("a[data-function={0}]").click()';

  // Play
  document.getElementById('play').addEventListener('click', function () {
    if (tabId > 0) {
      chrome.tabs.executeScript(tabId, {
        code: script.format('play')
      });
    }
    else {
      throw new Error('Error 404: Superplayer tab not found.');
    }
  });

  // Forward
  document.getElementById('next').addEventListener('click', function () {
    if (tabId > 0) {
      chrome.tabs.executeScript(tabId, {
        code: script.format('next')
      });
    }
    else {
      throw new Error('Error 404: Superplayer tab not found.');
    }
  });

}(document));
