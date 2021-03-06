(function (chrome) {

  // Actions to hotkeys (shortcuts)
  chrome.commands.onCommand.addListener(function (command) {
    if (command === 'play' && play) {
      // Play and pause
      play();
    }
    else if (command === 'next' && next) {
      // Forward
      next();
    }
    else if (command === 'mute' && mute) {
      // Mute
      mute();
    }
    else if (command === 'like' && like) {
      // Like
      like();
    }
    else if (command === 'hate' && hate) {
      // Hate
      hate();
    }
  });

}(chrome));
