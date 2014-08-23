(function (document, chrome) {

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

  // Like
  document.getElementById('like').addEventListener('click', function () {
    if (like) {
      like();
    }
  });

  // Hate
  document.getElementById('hate').addEventListener('click', function () {
    if (hate) {
      hate();
    }
  });

  // Get message about play button state (playing or paused)
  chrome.runtime.onMessage.addListener(function (request, sender, callback) {
    if (request.isPlaying !== undefined) {
      var play = document.querySelector('#play');
      if (request.isPlaying) {
        play.classList.remove('play');
        play.classList.add('pause');
      }
      else {
        play.classList.add('play');
        play.classList.remove('pause');
      }
    }

    if (request.isLiked !== undefined) {
      var likeButton = document.getElementById('like'),
        hateButton = document.getElementById('hate');
      if (request.isLiked) {
        likeButton.classList.add('liked');
        hateButton.classList.add('liked');
      }
      else {
        likeButton.classList.remove('liked');
        hateButton.classList.remove('liked');
      }
    }

    if (request.listSelected !== undefined) {
      if (request.listSelected) {
        document.getElementById('alert').style.display = 'none';
      }
      else {
        document.getElementById('alert').style.display = 'table';
      }
    }
  });

}(document, chrome));
