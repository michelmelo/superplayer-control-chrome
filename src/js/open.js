(function () {

  verifySuperplayerIsOpen(function (isOpen) {
    if (!isOpen) {
      openTab();
    }
  });

}());
