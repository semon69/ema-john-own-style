import React from 'react';
import logo from '../../images/Logo.svg'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <div className='flex justify-between items-center bg-slate-900 h-20'>
                <img className='ml-24' src={logo} alt="" />
                <div className='text-white mr-20'>
                    <Link className='ml-10' to="/">Shop</Link>
                    <Link className='ml-10' to="/order">Order Review</Link>
                    <Link className='ml-10' to="/inventory">Manage Inventory</Link>
                    <Link className='ml-10' to="/login">Login</Link>
                </div>
            </div>
        </div>
    );
};

export default Header;