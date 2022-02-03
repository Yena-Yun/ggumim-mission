export interface IProductList {
  discountRate: number;
  imageUrl: string | undefined;
  outside: boolean;
  pointX: number;
  pointY: number;
  priceDiscount: number;
  priceOriginal: number;
  productId: any;
  productName: string;
}

export interface IData {
  id: number;
  imageUrl: string;
  productList: IProductList[];
}

export interface IPostProps {
  image?: string;
  data: IData | null;
}
