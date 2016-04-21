import angular from "angular";

import config from "./config";
import controller from "./controller";
import service from "./service";

let locations = angular.module("jb.locations", []);

locations.config(config);
locations.controller("LocationsController", controller);

export default locations;
