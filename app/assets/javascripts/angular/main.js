var recruiting = angular.module('recruitingTS', ['mm.foundation']);

recruiting.config(function($httpProvider) {
  var authToken = angular.element('meta[name="csrf-token"]').attr("content");
  $httpProvider.defaults.headers.common["X-CSRF-TOKEN"] = authToken;
});

$(document).on('ready page:load', function(){
  angular.bootstrap(document.body, ['recruitingTS']);
});
