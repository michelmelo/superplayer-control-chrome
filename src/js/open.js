(function () {

  verifySuperplayerIsOpen(function (isOpen) {
    if (!isOpen) {
      openTab();
    }
    else {
      // Verify if some list is selected
      askForState(true);

      // Get command shortcuts to insert in button's title
      getHotKeys(function (keys) {
        var len = keys.length;
        if (len > 0) {
          for (var i = 0; i < len; i++) {
            if (document.getElementById(keys[i].name) !== null) {
              document.getElementById(keys[i].name).title += (': {0}').format(keys[i].shortcut);
            }
          }
        }
      });
    }
  });

}());
