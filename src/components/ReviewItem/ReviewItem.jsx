import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDeleteLeft, faTrashCan, } from '@fortawesome/free-solid-svg-icons'

const ReviewItem = ({ product, handleReviewBtn }) => {
    const {id, img, price, name, shipping } = product;
    return (
        <div className=''>
            <div className='flex border-2 border-gray-400 my-8 rounded justify-between items-center'>
                <div className='flex p-3'>
                    <div>
                        <img style={{height:'91px', width:"91px"}}  className=' rounded' src={img} alt="" />
                    </div>
                    <div className='px-3'>
                        <h1 className='text-xl font-bold'>{name}</h1>
                        <p>Price: <span className='text-orange-400'>${price}</span></p>
                        <p className=''>Shipping Charge: <span className='text-orange-400'>${shipping}</span></p>
                    </div>
                </div>
                <p onClick={() => handleReviewBtn(id)} className='bg-red-300 h-16 inline-flex justify-center items-center rounded-full mx-4'><FontAwesomeIcon 
                className='w-16 text-3xl text-red-500' icon={faTrashCan} /></p>
            </div>

        </div>
    );
};

export default ReviewItem;