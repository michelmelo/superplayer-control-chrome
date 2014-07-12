(function (chrome) {

  // Send the play button state to popup
  var sendButtonState = function () {
    var classList = document.querySelector('a[data-function=play]').classList;
    if (classList) {
      chrome.runtime.sendMessage({
        isPlaying: classList.contains('playing')
      });
    }
  };

  // Play button action
  document.querySelector('a[data-function=play]').addEventListener('click', function () {
    sendButtonStatus();
  });

  // Event called when the extension popup is open
  chrome.runtime.onMessage.addListener(function (request, sender, callback) {
    if (request.isPlaying) {
      sendButtonState();
    }
  });

}(chrome));
