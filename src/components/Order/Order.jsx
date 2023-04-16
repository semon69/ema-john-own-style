import Cart from '../Cart/Cart';
import { Link, useLoaderData } from 'react-router-dom';
import ReviewItem from '../ReviewItem/ReviewItem';
import { useState } from 'react';
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDeleteLeft, faTrashCan, faCreditCard } from '@fortawesome/free-solid-svg-icons'

const Order = () => {
    const savedCart = useLoaderData();
    const [cart, setCart] = useState(savedCart);
    const handleReviewBtn = (id) => {
        const remaining = cart.filter(product => product.id !== id);
        setCart(remaining);
        removeFromDb(id)
    }
    const clearCartBtn = () => {
        setCart([])
        deleteShoppingCart()
    }
    return (
        <div className='flex'>
            <div className="w-4/5 my-16 px-60">
                {
                    cart.map(product => <ReviewItem
                        key={product.id}
                        product={product}
                        handleReviewBtn={handleReviewBtn}
                    ></ReviewItem>)
                }
            </div>
            <div style={{ height: '530px' }} className="w-1/5 bg-orange-200 p-3 sticky top-0">
                <Cart
                    clearCartBtn={clearCartBtn}
                    cart={cart}
                >
                    <Link to="/checkout">
                        <button className='border border-black px-2 py-2 bg-yellow-500 text-white'>
                            <span className='mr-24'>Proceed Checkout</span>
                            <FontAwesomeIcon
                                className='' icon={faCreditCard} />
                        </button>
                    </Link>
                </Cart>
            </div>
        </div>
    );
};

export default Order;