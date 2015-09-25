(function (chrome) {
  // Send the play button state to popup
  var sendPlayButtonState = function () {
    var pauseButton = document.querySelector('button[data-action=pause]'),
      classList = null,
      isPlaying = false;

    if (pauseButton !== null && pauseButton !== undefined) {
      classList = pauseButton.classList;
      isPlaying = !classList.contains('active');
    }

    chrome.runtime.sendMessage({
      isPlaying: isPlaying
    });
  };

  var sendIsLiked = function () {
    var loveButton = document.querySelector('button[data-action=love]'),
      classList = null,
      loved = false;

    if (loveButton !== null && loveButton !== undefined) {
      classList = loveButton.classList;
      loved = classList.contains('active');
    }

    chrome.runtime.sendMessage({
      isLiked: loved
    });
  };

  var sendHaveListSelected = function () {
    var el = document.querySelector('section[data-component="player-controls"]');
    chrome.runtime.sendMessage({
      listSelected: el !== null && el !== undefined
    });
  };

  // Play button action
  var pauseButton = document.querySelector('button[data-action=pause]');
  if (pauseButton !== null && pauseButton !== undefined) {
    pauseButton.addEventListener('click', function () {
      sendPlayButtonState();
    });
  }

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
