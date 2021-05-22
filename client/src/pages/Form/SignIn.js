import React from 'react';
import { Link } from "react-router-dom";
// import './SignupForm.css';

const SigninForm = () => {
  return (
    <div className='body-bg min-h-screen pt-12 md:pt-20 pb-6 px-2 md:px-0 bg-blue-400'>
      <header className='mx-auto max-w-lg'>
          <h1 className="text-4xl font-bold text-white text-center">Sign In<i className="fas fa-mountain"></i></h1>        
      </header>
      <main className='bg-white max-w-lg mx-auto p-8 md:p-12 my-10 rounded-lg'>
        <section>
          <h3 className='font-bold text-2xl'>Welcome to Solar Stein</h3>
          <p className='text-gray-600 p-2'>Sign in to your account.</p>
        </section>
        <section className='mt-10'>
          <form className='flex flex-col'>

            <div className='mb-6 pt-3 rounded bg-gray-200'>
              <label className='block text-gray-700 text-sm font-bold mb-2 ml-3' htmlFor="email">Email
                <input className='bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-blue-600 transition duration-500 px-2 pd-2 py-2'>
                </input>
              </label>
            </div>

            <div className='mb-6 pt-3 rounded bg-gray-200'>
            <label className='block text-gray-700 text-sm font-bold mb-2 ml-3' htmlFor="password">Password
                <input className='bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-blue-600 transition duration-500 px-2 pd-2 py-2'>
                </input>
              </label>
            </div>

            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 rounded shadow-lg hover:shadow-xl transition duration-200" type="submit">Sign In</button>
          </form>
        </section>
      </main>

      <div className='max-w-lg mx-auto text-center mt-12 mb-6'>
        <p className='text-white'>Don't have an account?</p>
        <Link
          to="/signup"
          className={"font-bold hover:underline cursor-pointer"}
        >
          Sign Up
        </Link>
      </div>
    </div>
  )
}
export default SigninForm;