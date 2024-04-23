import { StaticImageData } from "next/image";

enum ProductListingLayoutEnum {
  ONE_COLUMN = 1,
  TWO_COLUMN = 2,
  FIVE_COLUMN = 5,
}

enum ProductCategoryEnum {
  ALL_PRODUCTS = "ALL PRODUCTS",
  BOTTOMS = "BOTTOMS",
  TOPS = "TOPS",
  CREW_NECKS = "CREW NECKS",
  POLO = "POLO",
  FULL_SLEEVES_POLO = "FULL SLEEVES POLO",
  SWEAT = "SWEAT",
  SHIRT = "SHIRT",
}

enum ProductSizeEnum {
  XXXS = "XXXS",
  XXS = "XXS",
  XS = "XS",
  S = "S",
  M = "M",
  L = "L",
  XL = "XL",
  XXL = "XXL",
}

interface IProductListingState {
  productListing: IProductListing[];
  categorySelected:
    | ProductCategoryEnum.ALL_PRODUCTS
    | ProductCategoryEnum.BOTTOMS
    | ProductCategoryEnum.TOPS
    | ProductCategoryEnum.CREW_NECKS
    | ProductCategoryEnum.POLO
    | ProductCategoryEnum.FULL_SLEEVES_POLO
    | ProductCategoryEnum.SWEAT
    | ProductCategoryEnum.SHIRT;
  layout:
    | ProductListingLayoutEnum.ONE_COLUMN
    | ProductListingLayoutEnum.TWO_COLUMN
    | ProductListingLayoutEnum.FIVE_COLUMN;
  sizeSelected:
    | ProductSizeEnum.XXXS
    | ProductSizeEnum.XXS
    | ProductSizeEnum.XS
    | ProductSizeEnum.S
    | ProductSizeEnum.M
    | ProductSizeEnum.L
    | ProductSizeEnum.XL
    | ProductSizeEnum.XXL
    | null;
}

interface IProductListing {
  image: StaticImageData | string;
  id: string;
  name: string;
  price: number;
  slug: string;
}

const PRODUCTCATEGORIES = [
  ProductCategoryEnum.ALL_PRODUCTS,
  ProductCategoryEnum.BOTTOMS,
  ProductCategoryEnum.TOPS,
  ProductCategoryEnum.CREW_NECKS,
  ProductCategoryEnum.POLO,
  ProductCategoryEnum.FULL_SLEEVES_POLO,
  ProductCategoryEnum.SWEAT,
  ProductCategoryEnum.SHIRT,
];

const PRODUCTSIZE = [
  ProductSizeEnum.XXXS,
  ProductSizeEnum.XXS,
  ProductSizeEnum.XS,
  ProductSizeEnum.S,
  ProductSizeEnum.M,
  ProductSizeEnum.L,
  ProductSizeEnum.XL,
  ProductSizeEnum.XXL,
];

export type { IProductListing, IProductListingState };

export {
  ProductListingLayoutEnum,
  ProductCategoryEnum,
  ProductSizeEnum,
  PRODUCTCATEGORIES,
  PRODUCTSIZE,
};
