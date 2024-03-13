interface ICartProduct {
    id: string;
    quantity: number;
    size: string;
    color: string;
}

interface ICartState{
    productCustomization: ICartProduct;
    cartProducts: ICartProduct[];
    totalAmount: number;
    totalItems: number;
    discountPercent: number;
    discountAmount: number;
    discountCoupon: string;
}

export type { ICartState, ICartProduct };