(function (chrome) {

  // Send the play button state to popup
  var sendPlayButtonState = function () {
    var classList = document.querySelector('a[data-action=pause]').classList;
    if (classList) {
      chrome.runtime.sendMessage({
        isPlaying: !classList.contains('active')
      });
    }
  };

  var sendIsLiked = function () {
    var classList = document.querySelector('a[data-action=love]').classList;
    if (classList) {
      chrome.runtime.sendMessage({
        isLiked: classList.contains('active')
      });
    }
  };

  var sendHaveListSelected = function () {
    var el = document.getElementById('controls-area');
    chrome.runtime.sendMessage({
      listSelected: (el.style.display !== 'none')
    });
  };

  // Play button action
  document.querySelector('a[data-action=pause]').addEventListener('click', function () {
    sendPlayButtonState();
  });

  // Event called when the extension popup is open
  chrome.runtime.onMessage.addListener(function (request, sender, callback) {
    if (request.isPlaying) {
      sendPlayButtonState();
    }
    if (request.isLiked) {
      sendIsLiked();
    }
    if (request.listSelected) {
      sendHaveListSelected();
    }
  });

}(chrome));
