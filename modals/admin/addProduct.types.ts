import { EProductSizeEnum } from "@modals/productListing/productListing.types";

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

export interface IProductCategory {
  id: string;
  category_name: string;
}

export interface IProductSubCategory {
  id: string;
  subcategory_name: string;
}

export interface ISizeSpecsAction {
  size: EProductSizeEnum;
  key: EProductSizeKeys;
  value: string;
}

export enum EProductSizeKeys {
  QUANTITY = "quantity",
  WEIGHT = "weight",
  LENGTH = "length",
  BREADTH = "breadth",
  HEIGHT = "height",
  SKU = "sku"
}

export interface IProductSize {
  size: EProductSizeEnum;
  quantity: string;
  weight: string;
  length: string;
  breadth: string;
  height: string;
  sku: string;
}

export enum EProductHomepageFlags {
  IS_PUBLISHED = "is_published",
  IS_FEATURED = "is_featured",
  IS_GIFT_FOR_YOU = "is_gift_for_you",
  IS_TOP_PICKS = "is_top_picks",
  IS_TRENDING = "is_trending",
  IS_NEW_ARRIVALS = "is_new_arrivals",
  IS_ICONIC_ESSENTIAL = "is_iconic_essential"
}

export interface IAdminAddProductInitialState {
  categories: IProductCategory[];
  subCategories: IProductSubCategory[];
  selectedCategory: string;
  selectedSubCategory: string;
  sizes: IProductSize[];
  completeTheLookProductId: string;
  homepageProduct: EProductHomepageFlags[];
}

export interface IAddButtons {
  handleCancel: () => void;
}