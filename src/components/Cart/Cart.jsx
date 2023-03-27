import React from 'react';

const Cart = (props) => {
    const {cart} = props;
    let total = 0;
    let shipping = 0;
    for(let product of cart){
        total = total + product.price;
        shipping = shipping + product.shipping;
    }
    const tax = parseFloat((total * 0.07).toFixed(2));
    const grandTotal = total + shipping + tax;
    return (
        <div>
            <h1 className='text-center text-3xl my-8'>Order Summery</h1>
            <p className='mb-5'>Total Price: ${total}</p>
            <p className='mb-5'>Selected Item: {cart.length}</p>
            <p className='mb-5'>Total Shipping Charge: ${shipping}</p>
            <p className='mb-5'>Tax: ${tax}</p>
            <h6 className='mb-5 font-bold'>Grand Total: ${grandTotal}</h6>
        </div>
    );
};

export default Cart;