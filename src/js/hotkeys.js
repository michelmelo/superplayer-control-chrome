(function (chrome) {

  // Actions to hotkeys (shortcuts)
  chrome.commands.onCommand.addListener(function (command) {
    if (command === 'play_pause' && play) {
      // Play and pause
      play();
      askForState(true, false, false);
    }
    else if (command === 'next' && next) {
      // Forward
      next();
      askForState(false, false, true);
    }
    else if (command === 'mute' && mute) {
      // Mute
      mute();
      askForState(false, true, false);
    }
    else if (command === 'like' && like) {
      // Like
      like(function () {
        askForState(false, false, true);
      });
    }
  });

}(chrome));
