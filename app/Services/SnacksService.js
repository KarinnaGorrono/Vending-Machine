import { ProxyState } from "../AppState.js";
import { Snacks } from "../Models/Snacks.js";

class ProductsService {
  purchase() {
    ProxyState. = [...ProxyState.values, new Value({ title: Math.random() })]
  }
  removeValue(id) {
    const values = ProxyState.values.filter(v => v.id !== id)
    ProxyState.values = values
  }
}

export const snacksService = new SnacksService();

