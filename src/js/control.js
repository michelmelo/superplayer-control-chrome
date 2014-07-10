(function (document) {

  // Play
  document.getElementById('play').addEventListener('click', function () {
    if (play) {
      play();
    }
  });

  // Forward
  document.getElementById('next').addEventListener('click', function () {
    if (next) {
      next();  
    }
  });

}(document));
