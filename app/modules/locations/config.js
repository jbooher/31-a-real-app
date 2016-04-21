function config($stateProvider) {
  $stateProvider
    .state("index", {
      url: "/locations",
      controller: "LocationsController as locationsCtrl",
      template: require('./view.html')
    });
}

export default config;
