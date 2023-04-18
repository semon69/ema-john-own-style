import React, { useContext } from 'react';
import logo from '../../images/Logo.svg'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    const handleLogOut = () => {
        logOut()
            .then(() => {})
    }
    return (
        <div>
            <div className='flex justify-between items-center bg-slate-900 h-20'>
                <img className='ml-24' src={logo} alt="" />
                <div className='text-white mr-20'>
                    {
                        user &&

                        <span>{user.email} <button className='bg-white text-black rounded' onClick={handleLogOut}>Log Out</button></span>


                    }
                    <Link className='ml-10' to="/">Shop</Link>
                    <Link className='ml-10' to="/order">Order Review</Link>
                    <Link className='ml-10' to="/inventory">Manage Inventory</Link>
                    <Link className='ml-10' to="/login">Login</Link>
                    <Link className='ml-10' to="/signup">Sign Up</Link>

                </div>
            </div>
        </div>
    );
};

export default Header;