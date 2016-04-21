import angular from "angular";

import config from "./config";
import loginController from "./controllers/login";
import profileController from "./controllers/profile";
import registerController from "./controllers/register";
import editController from "./controllers/edit";
import service from "./service";

let user = angular.module("jb.user", []);

user.config(config);
user.controller("LoginController", loginController);
user.controller("ProfileController", profileController);
user.controller("RegisterController", registerController);
user.controller("EditController", editController);
user.service("UserService", service);

export default user;
