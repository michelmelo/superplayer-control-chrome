(function (chrome) {

  getTabId();

  // Actions to hotkeys (shortcuts)
  chrome.commands.onCommand.addListener(function (command) {
    if (command === 'play_pause' && play) {
      // Play and pause
      play();
    }
    else if (command === 'next' && next) {
      // Forward
      next();
    }
  });

}(chrome));
