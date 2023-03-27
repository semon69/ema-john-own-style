import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';

const Shop = () => {
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([])
    useEffect(() => {
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])
    const handleClick = (product) => {
        const newCart = [...cart, product]
        setCart(newCart)
    }
    return (
        <div className='flex'>
            <div className="w-4/5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 m-8">
                {
                    products.map(product => <Product
                         key={product.id} 
                         product = {product}
                         handleClick = {handleClick}
                         
                         ></Product>)
                }
            </div>
            <div className="w-1/5 bg-orange-200 p-3 h-80 sticky top-0">
                <Cart cart ={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;