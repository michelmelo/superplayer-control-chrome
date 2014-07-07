function MainController($scope) {
  $scope.tabId = 0;
  
  $scope.play = function () {
    if ($scope.tabId > 0) {
      var script = 'document.querySelector(\'a[data-function=play]\').click()';
      chrome.tabs.executeScript($scope.tabId, {
        code: script
      });
    }
  };
  
  $scope.next = function () {
    if ($scope.tabId > 0) {
      var script = 'document.querySelector(\'a[data-function=next]\').click()';
      chrome.tabs.executeScript($scope.tabId, {
        code: script
      });
    }
  };
  
  chrome.tabs.query({
    'active': true,
    'status': 'complete'
  }, 
  function (tabs) {
    if (tabs[0].url.indexOf('superplayer.fm') > -1) {
      $scope.tabId = tabs[0].id;
    }
    $scope.$apply();
  });
  
  chrome.commands.onCommand.addListener(function (command) {
    $scope.next();
  });
};