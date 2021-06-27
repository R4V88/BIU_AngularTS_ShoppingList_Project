import {IProduct} from "./product";

export interface IList {
  id: number,
  products: IProduct[],
  selectedPrice: number,
  unselectedPrice: number,
  totalPrice: number
}
