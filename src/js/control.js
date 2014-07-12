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

  // Mute
  document.getElementById('mute').addEventListener('click', function () {
    if (mute) {
      mute();
    }
    askForState();
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

    if (request.isMute !== undefined) {
      var muteIcon = document.querySelector('#mute i');
      if (request.isMute) {
        muteIcon.classList.remove('fa-volume-up');
        muteIcon.classList.add('fa-volume-off');
      }
      else {
        muteIcon.classList.add('fa-volume-up');
        muteIcon.classList.remove('fa-volume-off');
      }
    }
  });

  // Get initial play button state
  askForState();

}(document, chrome));
