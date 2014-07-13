(function (chrome) {

  // Send the play button state to popup
  var sendPlayButtonState = function () {
    var classList = document.querySelector('a[data-function=play]').classList;
    if (classList) {
      chrome.runtime.sendMessage({
        isPlaying: classList.contains('playing')
      });
    }
  };

  // Send the volume button state to popup
  var sendVolumeButtonState = function () {
    var el = document.querySelector('#volume-control #volume-control-muted');
    if (el) {
      var isMute = (el.style.display !== 'none');
      chrome.runtime.sendMessage({
        isMute: isMute
      });
    }
  };

  var sendIsLiked = function () {
    var classList = document.querySelector('a[data-function=like]').classList;
    if (classList) {
      chrome.runtime.sendMessage({
        isLiked: classList.contains('active')
      });
    }
  };

  // Play button action
  document.querySelector('a[data-function=play]').addEventListener('click', function () {
    sendPlayButtonState();
  });

  // Volume button action
  document.querySelector('#volume-control').addEventListener('click', function () {
    sendVolumeButtonState();
  });

  // Event called when the extension popup is open
  chrome.runtime.onMessage.addListener(function (request, sender, callback) {
    if (request.isPlaying) {
      sendPlayButtonState();
    }
    if (request.isMute) {
      sendVolumeButtonState();
    }
    if (request.isLiked) {
      sendIsLiked();
    }
  });

}(chrome));
