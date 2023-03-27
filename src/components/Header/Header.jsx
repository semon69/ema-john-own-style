import React from 'react';
import logo from '../../images/Logo.svg'

const Header = () => {
    return (
        <div>
            <div className='flex justify-between items-center bg-slate-900 h-20'>
                <img className='ml-24' src={logo} alt="" />
                <div className='text-white mr-20'>
                    <a className='ml-10' href="#Order">Order</a>
                    <a className='ml-10' href="#Order Review">Order Review</a>
                    <a className='ml-10' href="#Manage Inventory">Manage Inventory</a>
                    <a className='ml-10' href="#Login">Login</a>
                </div>
            </div>
        </div>
    );
};

export default Header;