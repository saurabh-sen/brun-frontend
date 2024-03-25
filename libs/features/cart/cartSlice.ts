import { ICartProduct, ICartState } from "@modals/cart/cart.types";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState : ICartState = {
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
  },
});

export const { addProductToCart, removeProductFromCart, updateProductQuantity, setProductCustomization } = productListingSlice.actions;

export default productListingSlice.reducer;
