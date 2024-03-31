import { ICartProduct, ICartState } from "@modals/cart/cart.types";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState : ICartState = {
  cartPageActiveTab: 1,
  productCustomization: {
    id: "",
    quantity: 0,
    size: "",
    color: "",
  },
  cartProducts: [],
  totalAmount: 0,
  totalItems: 0,
  discountAmount: 0,
  discountPercent: 0,
  discountCoupon: "",
}

const productListingSlice = createSlice({
  name: "cartSlice",
  initialState: initialState,
  reducers: {
    setProductCustomization: (state, action: PayloadAction<ICartProduct>) => {
      state.productCustomization = action.payload;
    },
    addProductToCart: (state, action: PayloadAction<ICartProduct>) => {
      state.cartProducts.push(action.payload);
    },
    removeProductFromCart: (state, action: PayloadAction<string>) => {
      state.cartProducts = state.cartProducts.filter((product) => product.id !== action.payload);
    },
    updateProductQuantity: (state, action: PayloadAction<{ id: string, quantity: number }>) => {
      const productIndex = state.cartProducts.findIndex((product) => product.id === action.payload.id);
      state.cartProducts[productIndex].quantity = action.payload.quantity;
    },
    setCartPageActiveTab: (state, action: PayloadAction<1 | 2>) => {
      state.cartPageActiveTab = action.payload;
    }
  },
});

export const { addProductToCart, removeProductFromCart, updateProductQuantity, setProductCustomization, setCartPageActiveTab } = productListingSlice.actions;

export default productListingSlice.reducer;
