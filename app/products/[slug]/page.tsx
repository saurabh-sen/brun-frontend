import ProductDetailedView from '@components/Products/ProductDetailedView'
import ProductRecommendation from '@components/Products/ProductRecommendation'
import ProductReviewAndLook from '@components/Products/ProductReviewAndLook'
import React from 'react'

const ProductDetails = ({ params }: { params: { slug: string } }) => {
  return (
    <main className="product__details m-7">
      <ProductDetailedView productSlug={params.slug} />
      <ProductReviewAndLook />
      <ProductRecommendation />
    </main>
  )
}

export default ProductDetails