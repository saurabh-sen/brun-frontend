import Image, { StaticImageData } from 'next/image'
import Link from 'next/link';
import React from 'react'

interface IProductCard {
    image: StaticImageData | string;
    name: string;
    price: number;
    slug: string;
}

const ProductCard = ({ image, name, price, slug }: IProductCard) => {
    return (
        <Link href={`products/${slug}`} className='productlist__card flex flex-col items-center gap-1'>
            <div className="card__container">
                <Image src={image} alt={name} width={460} height={644} />
                <div className="card__text">
                    <p className='productlist__name'>{name}</p>
                    <p className='productlist__price'>₹{price}</p>
                </div>
            </div>
        </Link>
    )
}

export default ProductCard