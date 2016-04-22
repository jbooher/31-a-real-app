class LocationsController {
  constructor($state, UserService, LocationsService, $scope) {
    this._UserService = UserService;
    this._LocationsService = LocationsService;
    this._$state = $state;

    this.location = this._LocationsService.new();

    navigator.geolocation.getCurrentPosition((position) => {
      this.lat = position.coords.latitude;
      this.lon = position.coords.longitude;
      $scope.$digest();
    });

    this._UserService.isLoggedIn()
      .then((response) => {
        this.user = response;
        this.locations = this._LocationsService.all();
      })
      .catch((error) => {
        this._$state.go("login");
      });
  }

  addLocation() {
    this._LocationsService.add(this.location);
    this.location = this._LocationsService.new();
  }

  delete(address) {
    console.log("control delete");
    this._LocationsService.delete(address);
  }
}

export default LocationsController;
