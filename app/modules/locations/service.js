class LocationsService {
  constructor(UserService, $firebaseArray) {
    this._UserService = UserService;
    this._$firebaseArray = $firebaseArray;
  }

  new() {
    return {
      address: "",
      city: "",
      state: "",
      name: "",
      description: ""
    }
  }

  all() {
    this.locations = this._$firebaseArray(this._UserService.ref.child('users').child(this._UserService.user.uid).child('locations'));
    return this.locations;
  }

  add(location) {
    this.locations.$add(location);
  }

  delete(address) {
    console.log("service delete");
    this.locations.$remove(address);
  }
}

export default LocationsService;
