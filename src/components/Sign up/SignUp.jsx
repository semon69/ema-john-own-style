import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';

const SignUp = () => {
    const [error, setError] = useState('');
    const { createUser } = useContext(AuthContext)

    const handleSignUp = (event) => {
        event.preventDefault()

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirmPassword = form.confirmPassword.value;
        console.log(email, password, confirmPassword);
        setError('')
        if (password !== confirmPassword) {
            setError('Please type same password');
            return;
        }
        else if (password.length < 6) {
            setError("password should be more than 6 character");
            return
        }

        createUser(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser)
                form.reset()
            })
            .catch(error => {
                setError(error)
            })

    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col">
                    <div className="text-center my-5">
                        <h1 className="text-5xl font-bold">Sign Up</h1>

                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSignUp} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="Email" name='email' className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" name='password' className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Confirm Password</span>
                                </label>
                                <input type="password" placeholder="Confirm password" name='confirmPassword' className="input input-bordered" required />
                                <label className="label">
                                    <Link to="/login">
                                        <a href="#" className="label-text-alt link link-hover">Already have account?<span className='text-orange-400'>Login</span></a>
                                    </Link>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="bg-orange-300 hover:bg-orange-600 h-10">Sign Up</button>
                            </div>
                            <div className='text-center text-red-400'>
                                <p>{error}</p>
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

export default SignUp;