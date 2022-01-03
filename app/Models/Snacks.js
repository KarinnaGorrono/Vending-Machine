import { generateId } from "../Utils/generateId.js"

export class Products {
  constructor(productData) {
    this.name = productData.name,
      this.price = productData.price,
      this.quantity = productData.quantity,
      this.id = productData.id || generateId(),
      this.quantity = productData.quantity,
      this.imgUrl = productData.imgUrl,
     
  }

  get ProductTemplate() {
    return /*html*/`
      <div class="card m-2 shadow">
        <div class="card-body">
          <h4 class="text-uppercase no-select">
            ${this.name}
          </h4>
        
    `
  }
}
