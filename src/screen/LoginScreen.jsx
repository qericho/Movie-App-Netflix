import { useState } from 'react';
import Logo from '../assets/img/logo.png';
import Back_Ground from '../assets/img/movie-app-bg.jpg';
import SignInScreen from './SignInScreen';
import { Link } from 'react-router-dom';

const LoginScreen = () => {
    const [signIn, SetSignIn] = useState(false)
    return (
        <div
            className='h-[100vh] relative'
            style={{
                backgroundImage: `url(${Back_Ground})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }}
        >
            {/* Vignette overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-50 pointer-events-none"
                style={{
                    background: 'radial-gradient(circle, transparent 1%, rgba(0,0,0,0.80) 100%)'
                }}
            ></div>

            {/* Logo */}
            <div className='w-[150px] object-cover fixed left-3 top-0 z-10'>
                <Link to="/">
                    <img className='w-full' src={Logo} alt="Logo" />
                </Link>
            </div>

            {/* Sign-in Button */}
            <div className='fixed top-5 right-5 z-10'>
                <button onClick={() => SetSignIn(true)}
                    className='text-[16px] text-white font-semibold rounded
                w-[100px] h-[40px] bg-red-800 hover:bg-red-900 cursor-pointer'>
                    Sign In
                </button>
            </div>
            {signIn ? <SignInScreen /> :
                <div className='w-full lg:w-[1000px] absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2
                             text-white text-center z-999'>
                    <div className=' space-y-7'>
                        <h1 className='text-4xl md:text-5xl font-bold'>Unlimited movies, TV shows, and more</h1>
                        <h4 className='text-3xl md:text-3xl font-semibold'>Starts at ₱169. Cancel anytime.</h4>
                        <p className='text-[16px] md:text-[18px] font-semibold relative top-3'>Starts at ₱169. Cancel anytime.</p>
                        <div>
                        </div>
                        <div className='w-full md:w-[500px] mx-auto px-10 md:px-0 space-y-3 md:space-y-0
                                 flex md:flex-row flex-col items-center justify-center '>
                            <input className='bg-black/50 font-semibold border w-full md:w-[300px] px-5 py-3 outline-none'
                                type="text" placeholder='Email Address' />
                            <button onClick={() => SetSignIn(true)}
                                className="font-bold px-5 py-3 border border-red-800 bg-red-800 text-white 
                                 hover:bg-red-900 cursor-pointer rounded-sm md:rounded-r-sm md:rounded-l-none">
                                Get Started
                            </button>

                        </div>
                    </div>
                </div>
            }
        </div>

    );
};

export default LoginScreen;
