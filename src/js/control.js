(function (document, chrome) {

  // Play
  document.getElementById('play').addEventListener('click', function () {
    if (play) {
      play();
    }
    askForState();
  });

  // Forward
  document.getElementById('next').addEventListener('click', function () {
    if (next) {
      next();
    }
  });

  // Get message about play button state (playing or paused)
  chrome.runtime.onMessage.addListener(function (request, sender, callback) {
    if (request.isPlaying !== undefined) {
      var playIcon = document.querySelector('#play i');
      if (request.isPlaying) {
        playIcon.classList.remove('fa-play');
        playIcon.classList.add('fa-pause');
      }
      else {
        playIcon.classList.add('fa-play');
        playIcon.classList.remove('fa-pause');
      }
    }
  });

  // Get initial play button state
  askForState();

}(document, chrome));
