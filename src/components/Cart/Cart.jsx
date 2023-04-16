import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDeleteLeft, faTrashCan, faCreditCard } from '@fortawesome/free-solid-svg-icons'

const Cart = (props) => {
    const { cart, clearCartBtn, children } = props;
    let total = 0;
    let shipping = 0;
    let quantity = 0;
    for (let product of cart) {
        // general solution
        // if(product.quantity === 0){
        //     product.quantity = 1;
        // } 

        // shortcut solution 
        // product.quantity = product.quantity || 1;

        total = total + product.price * product.quantity;
        shipping = shipping + product.shipping;
        quantity = quantity + product.quantity;
    }
    const tax = parseFloat((total * 0.07).toFixed(2));
    const grandTotal = total + shipping + tax;
    return (
        <div>
            <h1 className='text-center text-3xl my-4'>Order Summery</h1>
            <p className='mb-5'>Selected Item: {quantity}</p>
            <p className='mb-5'>Total Price: ${total}</p>
            <p className='mb-5'>Total Shipping Charge: ${shipping}</p>
            <p className='mb-5'>Tax: ${tax}</p>
            <h6 className='mb-5 font-bold'>Grand Total: ${grandTotal}</h6>
            <button onClick={clearCartBtn} className='border border-black px-4 py-2 mb-3 bg-red-600 text-white'>
                <span className='mr-36'>Clear Cart</span>
                <FontAwesomeIcon
                    className='' icon={faTrashCan} />
            </button>
            <br />
            {children}
        </div >
    );
};

export default Cart;