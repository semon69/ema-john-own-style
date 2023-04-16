import React, { useEffect, useState } from 'react';
import { addToDb, deleteShoppingCart, getShoppingCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

const Shop = () => {
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([])
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    useEffect(() => {
        // const storedCart = getShoppingCart();
        // const savedCart = [];
        // // get id
        // if(products.length){
        //     for (const id in storedCart) {
        //         // get the product using id
        //         // console.log(id)
        //         // const addedProduct = products.find(product => product.id === id);
        //         // const quantity = storedCart[id];
        //         // addedProduct.quantity = quantity;
        //         // console.log(addedProduct);
        //         const addedProduct = products.find(product => product.id === id);
        //         const quantity = storedCart[id];
        //         addedProduct.quantity = quantity;
        //         // console.log(addedProduct)
        //         savedCart.push(addedProduct)
        //     }
        //     setCart(savedCart)
        // }
        const storedCart = getShoppingCart();
        const savedCart = [];
        // console.log(storedCart);
        for (const id in storedCart) {
            // console.log(id)
            const addedProducts = products.find(pd => pd.id === id);
            // console.log(addedProducts)
            if (addedProducts) {
                const quantity = storedCart[id];
                addedProducts.quantity = quantity;
                // console.log(addedProducts)
                savedCart.push(addedProducts);
            }
        }
        setCart(savedCart);
    }, [products])
    const handleClick = (product) => {
        // const newCart = [...cart, product]
        // setCart(newCart)
        // addToDb(product.id)
        let newCart = [];
        const exists = cart.find(pd => pd.id === product.id);
        console.log(exists);
        if (!exists) {
            product.quantity = 1;
            newCart = [...cart, product]
        } else {
            exists.quantity = exists.quantity + 1;
            const remaining = cart.filter(pd => pd.id !== product.id);
            newCart = [...remaining, exists]
        }
        setCart(newCart)
        addToDb(product.id)
    }
    const clearCartBtn = () => {
        setCart([])
        deleteShoppingCart()
    }
    return (
        <div className='flex'>
            <div className="w-4/5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 m-8">
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                        handleClick={handleClick}

                    ></Product>)
                }
            </div>
            <div className="w-1/5 bg-orange-200 p-3 h-screen sticky top-0">
                <Cart
                    cart={cart}
                    clearCartBtn={clearCartBtn}
                >
                    <Link to= "/order">
                        <button className='border border-black px-2 py-2 bg-yellow-500 text-white'>
                            <span className='mr-32'>Review Order</span>
                            <FontAwesomeIcon
                                className='' icon={faArrowRight} />
                        </button>
                    </Link>

                </Cart>
            </div>
        </div>
    );
};

export default Shop;