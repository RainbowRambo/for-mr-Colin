(function() {
  var app = angular.module("githubViewer", []);

  var MainController = function($scope, $http) {
    // var onUserComplete = function(data) {
    //   $scope.user = data;
    //   github.getRepos($scope.user).then(onRepos, onError);
    //   console.log($scope.user.repos_url);
    // };

    // var onRepos = function(data) {
    //   $scope.repos = data;
    //   $location.hash("userDetails");
    //   $anchorScroll();
    // };

    // var onError = function(reason) {
    //   $scope.error = "Could not fetch the data";
    // };

    // var decrementCountdown = function() {
    //   $scope.countdown -= 1;
    //   if ($scope.countdown < 1) {
    //     $scope.search($scope.username);
    //   }
    // };

    // var countdownInterval = null;
    // var startCountdown = function() {
    //   countdownInterval = $interval(decrementCountdown, 1000, $scope.countdown);
    // };

    // $scope.search = function(username) {
    //   $log.info("Searching for " + username);
    //   console.log("%c Progress > : ) ", "color: blue; font-size:50px");
    //   github.getUser(username).then(onUserComplete, onError);

    //   if (countdownInterval) {
    //     $interval.cancel(countdownInterval);
    //     $scope.countdown = null;
    //   }
    // };

    // $scope.username = "bart";
    $scope.message = "download btn prac";
    // $scope.repoSortOrder = "-stargazers_count";
    // $scope.countdown = 5;

    // startCountdown();
    // $scope.click = function() {
    //   console.log("clicked");
    // };

    // // start

    //  function downloadResource(url, filename) {
    //         if (!filename)
    //             filename = url
    //                 .split("\\")
    //                 .pop()
    //                 .split("/")
    //                 .pop();
    //         fetch(url, {
    //             headers: new Headers({
    //                 Origin: location.origin
    //             }),
    //             mode: "cors"
    //         })
    //             .then(response => response.blob())
    //             .then(blob => {
    //                 let blobUrl = window.URL.createObjectURL(blob);
    //                 forceDownload(blobUrl, filename);
    //             })
    //             .catch(e => console.error(e));
    //     }

    //       function($scope, $http) {
    //         $scope.download = function() {
    //           $http.get('https://unsplash.it/200/300', {
    //               responseType: "arraybuffer"
    //             })
    //             .success(function(data) {
    //               var anchor = angular.element('<a/>');
    //               var blob = new Blob([data]);
    //               anchor.attr({
    //                 href: window.URL.createObjectURL(blob),
    //                 target: '_blank',
    //                 download: 'fileName.png'
    //               })[0].click();
    //             })
    //         }
    //       }

    function congrats() {
      var vm = this;
      vm.name = "test";

      vm.setOptions = function() {
        toastr.options.positionClass = "toast-bottom-right";
        toastr.options.closeButton = true;
        toastr.options.showMethod = "slideDown";
        toastr.options.hideMethod = "slideUp";
        //toastr.options.newestOnTop = false;
        toastr.options.closeDuration = 500;
        toastr.options.progressBar = false;
      };

      vm.setOptions();

      vm.info = function() {
        toastr.info("downloading");
      };

      vm.info();
    }

    $scope.testing = function() {
      $http
        .get("https://unsplash.it/200/300", {
          responseType: "arraybuffer"
        })
        .success(function(data) {
          var anchor = angular.element("<a/>");
          var blob = new Blob([data]);
          anchor
            .attr({
              href: window.URL.createObjectURL(blob),
              target: "_blank",
              download: "loremipsum.png"
            })[0]
            .click();
        });
    };
  };

  app.controller("MainController", MainController);
})();
