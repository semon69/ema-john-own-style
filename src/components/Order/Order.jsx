import Cart from '../Cart/Cart';
import { useLoaderData } from 'react-router-dom';
import ReviewItem from '../ReviewItem/ReviewItem';
import { useState } from 'react';
import { removeFromDb } from '../../utilities/fakedb';

const Order = () => {
    const savedCart = useLoaderData();
    const [cart, setCart] = useState(savedCart);
    const handleReviewBtn = (id) => {
        const remaining = cart.filter(product => product.id !== id);
        setCart(remaining);
        removeFromDb(id)
    }
    return (
        <div className='flex'>
            <div className="w-4/5 my-16 px-60">
                {
                    cart.map(product => <ReviewItem
                        key ={product.id}
                        product = {product}
                        handleReviewBtn={handleReviewBtn}
                    ></ReviewItem>)
                }
            </div>
            <div className="w-1/5 bg-orange-200 p-3 h-80 sticky top-0">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Order;