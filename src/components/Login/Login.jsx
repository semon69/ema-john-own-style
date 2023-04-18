import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';

const Login = () => {

    const navigate = useNavigate()
    const location = useLocation()
    // console.log(location)
    const from = location.state?.from?.pathname || "/";
    const { signIn } = useContext(AuthContext);
    const [success, setSuccess] = useState('');
    const handleSignIn = (event) => {
        event.preventDefault();
        setSuccess('')
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        signIn(email, password)
        .then(result => {
            console.log(result.user)
            form.reset()
            setSuccess("login successful")
            navigate(from, {replace: true})
        })
        

    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col">
                    <div className="text-center">
                        <h1 className="text-5xl font-bold">Login now!</h1>

                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSignIn} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" name='email' className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" name='password' className="input input-bordered" />
                                <label className="label">
                                    <Link to="/signup"><a href="#" className="label-text-alt link link-hover">New to ema-john? <span className='text-orange-400'>Create an account</span></a></Link>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="bg-orange-300 hover:bg-orange-600  h-10">Login</button>
                            </div>
                            <div className='text-green-600'>
                                <p>{success}</p>
                            </div>
                        </form>
                        <div className='w-full'>
                            <p className='border border-black text-center rounded px-3 py-2'>Continue with Google</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;