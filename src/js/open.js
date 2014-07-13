(function () {

  verifySuperplayerIsOpen(function (isOpen) {
    if (!isOpen) {
      openTab();
    }
    else {
      // Verify if some list is selected
      askForState(true);
    }
  });

}());
