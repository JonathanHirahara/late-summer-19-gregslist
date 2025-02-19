import CarController from "./components/car/CarController.js";
import HouseController from "./components/house/houseController.js";


class App {
  constructor() {
    this.controllers = {
      carController: new CarController(),
      houseController: new HouseController()
    }
  }
}

window["app"] = new App()