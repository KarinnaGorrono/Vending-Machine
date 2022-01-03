import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"

class AppState extends EventEmitter {


  Products = [
    new Snack({
      name: 'Snickers Bar',
      price: 1,
      quantity: 20,
      imgUrl: 'https://img.favpng.com/9/6/3/chocolate-bar-snickers-pie-mars-twix-png-favpng-1PNazmL81ypFJE8yEhqmvZAPK_t.jpg'
    })
  ]

  totalMoney = 0
}

export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
