import {IProduct} from "./product";

export interface IList {
  title: string,
  id: number,
  products: IProduct[],
  selectedPrice: number,
  unselectedPrice: number,
  totalPrice: number
}
