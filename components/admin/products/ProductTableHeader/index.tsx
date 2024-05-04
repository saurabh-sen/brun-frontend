import { RootState } from "@libs/store";
import { useSelector } from "react-redux";

const ProductTableHeader = () => {

  const isEditAll = useSelector((state: RootState) => state.adminProductListing.isEditAllOpen)

  return (
    <div className="table__header grid grid-cols-10 bg-[#FAFBFB] py-3 px-3 break-words">
      <div className="product__table-item col-span-3">
        {
          isEditAll && <input
            type="checkbox"
            className="mr-2 accent-black"
          />
        }
        <span>NAME</span>
      </div>
      <p className="product__table-item">CATEGORY</p>
      <p className="product__table-item">QUANTITY</p>
      <p className="product__table-item">PRICE</p>
      <p className="product__table-item">SALE</p>
      <p className="product__table-item">STOCK</p>
      <p className="product__table-item">SKU</p>
      <p className="product__table-item">ACTION</p>
    </div>
  )
}

export default ProductTableHeader;