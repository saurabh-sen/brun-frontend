"use client"
import React from 'react'
import { RootState } from '@libs/store';
import { useSelector } from 'react-redux';
import SearchBox from '@components/common/SearchBox'
import SearchFilter from '@components/client/Products/Search/SearchFilter';
import SearchResults from '@components/client/Products/Search/SearchResults';
import ProductRecommendation from '@components/client/Products/ProductRecommendation';

const Search = () => {

    const searchResults = useSelector((state: RootState) => state.productSearch.searchResults)

    return (
        <section id='search' className='mt-28'>
            <SearchBox />
            {
                searchResults.length === 0 ? <p className="searchresults__count sm:ml-8 mt-8">No Search Results Found “ Jumping Suit “</p>
                    :
                    <>
                        <SearchFilter />
                        <SearchResults />
                    </>

            }
            <ProductRecommendation layout={5} />
        </section>
    )
}

export default Search