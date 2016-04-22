class EditController {
  constructor($state, UserService) {
    this._$state = $state;
    this._UserService = UserService;

    this.profile = this._UserService.newProfile();

    this._UserService.isLoggedIn()
      .then((response) => {
        console.log(response);
        this.user = response;
        this.profile = this._UserService.getProfile(this.user);
        // console.log(this.profile);
      })
      .catch((error) => {
        this._$state.go("login");
      });
  }

  update() {
    this._UserService.save(this.profile);
  }

}

export default EditController;
