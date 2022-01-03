import { ProxyState } from "../AppState.js";
import { SnacksService } from "../Services/SnacksService.js";


//Private
function _drawProducts() {
  let products = ProxyState.Products;
  let template = ''
  products.forEach(v => template += v.Template)

}
function _drawMoney() {

}
//Public
export default class SnacksController {
  constructor() {
    ProxyState.on("snacks", _draw);
    _drawMoney()
  }


}

