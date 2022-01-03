import ProductsController from "./Controllers/SnacksController.js"
import MoneyController from "./Controllers/MoneyController.js"


class App {
  itemsController = new ProductsController()
  moneyController = new MoneyController()
}

window["app"] = new App();
