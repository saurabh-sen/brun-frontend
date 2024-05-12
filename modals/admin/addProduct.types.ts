export interface IAddProductValues {
  slugurl: string;
  metaTitle: string;
  metaDescription: string;
  productName: string;
  productDescription: string;
  productColorName: string;
  productColorCode: string;
  productSellPrice: string;
  productDiscount: string;
}

export interface IAddButtons {
  handleCancel: () => void;
}