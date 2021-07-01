export interface IProduct {
  id?: string;
  name: string;
  price: number;
  amount: number;
  totalPrice?: number;
  isSelected?: boolean;
}
