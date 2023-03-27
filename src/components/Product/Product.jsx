import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
    const { img, name, price, ratings, seller } = props.product
    const handleClick = props.handleClick;
    return (
        <div>
            <div className="border-2 rounded-md shadow-xl">
                <div className='p-2'>
                    <img className='border-2 rounded-xl w-full' src={img} alt="Shoes" />
                </div>

                <div className='p-5'>
                    <h2 className="card-title">{name}</h2>
                    <p className='mb-8'>Price: ${price}</p>
                    <p>Manufacturer: {seller}</p>
                    <p>Ratting: {ratings} Star</p>
                </div>
                <button onClick={() => handleClick(props.product)} className='w-full bg-orange-300 h-10'>Add To Cart <FontAwesomeIcon icon={faShoppingCart} /></button>

            </div>
        </div>
    );
};

export default Product;