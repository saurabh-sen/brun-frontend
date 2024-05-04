import ProductDetailedView from '@components/client/Products/ProductDetailedView'
import ProductRecommendation from '@components/client/Products/ProductRecommendation'
import ProductReviewAndLook from '@components/client/Products/ProductReviewAndLook'
import React from 'react'

const ProductDetails = ({ params }: { params: { slug: string } }) => {

  return (
    <main className='product__details m-7 mt-28'>
      <ProductDetailedView productSlug={params.slug} />
      <ProductReviewAndLook />
      <ProductRecommendation />
    </main>
  )
}

export default ProductDetails