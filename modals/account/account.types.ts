import { StaticImageData } from "next/image";

interface IAccountPayload {
  userId: string;
}

enum RoleEnum {
  ADMIN = "admin",
  USER = "user",
}

interface IWishList {
  id: string;
  product_id: string;
  title: string;
  image: string | StaticImageData;
  price: number;
  slug: string;
  user_id: string;
  created_at: string;
  updated_at: string;
}

interface IOrderHistory {
  id: string;
  product_id: string;
  title: string;
  image: string | StaticImageData;
  slug: string;
  user_id: string;
  created_at: string;
  updated_at: string;
}

interface IUserDetails {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  role: RoleEnum | null;
  is_active: boolean;
  created_at: string;
  updated_at: string;
  Address: any[];
  wishlist: IWishList[];
  orders: IOrderHistory[];
};

interface IAccountDetails {
  statusCode: number;
  data: IUserDetails
  message: string;
  success: boolean;
}

interface IAccountInitialState {
  userDetails: IUserDetails;
  wishList: IWishList[];
  orderHistory: IOrderHistory[];
}

export type { IAccountPayload, IAccountDetails, IAccountInitialState, RoleEnum, IUserDetails, IWishList, IOrderHistory };
