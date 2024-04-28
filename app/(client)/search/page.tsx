"use client"
import React from 'react'
import SearchBox from '@components/common/SearchBox'
import ProductRecommendation from '@components/Products/ProductRecommendation';

const Search = () => {

    return (
        <section id='search' className='mt-28'>
            <SearchBox />
            {/* make a filter component here... */}
            {/* add search results */}
            <ProductRecommendation layout={5} />
        </section>
    )
}

export default Search