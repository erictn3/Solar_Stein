import React from 'react';
// import './SignupForm.css';

const SignupForm = () => {
  return (
    <div class='body-bg min-h-screen pt-12 md:pt-20 pb-6 px-2 md:px-0 bg-blue-400'>
      <header class='mx-auto max-w-lg'>
        <href>
          <h1 class="text-4xl font-bold text-white text-center">Sign In<i className="fas fa-mountain"></i></h1>        
        </href>

      </header>
      <main class='bg-white max-w-lg mx-auto p-8 md:p-12 my-10 rounded-lg'>
        <section>
          <h3 class='font-bold text-2xl'>Welcome to Solar Stein</h3>
          <p class='text-gray-600 p-2'>Sign in to your account.</p>
        </section>
        <section class='mt-10'>
          <form class='flex flex-col'>

            <div class='mb-6 pt-3 rounded bg-gray-200'>
              <label class='block text-gray-700 text-sm font-bold mb-2 ml-3' for="email">Email
                <input class='bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-blue-600 transition duration-500 px-2 pd-2 py-2'>
                </input>
              </label>
            </div>

            <div class='mb-6 pt-3 rounded bg-gray-200'>
            <label class='block text-gray-700 text-sm font-bold mb-2 ml-3' for="password">Password
                <input class='bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-blue-600 transition duration-500 px-2 pd-2 py-2'>
                </input>
              </label>
            </div>

            <div class='flex justify-end'>
              <href class="text-sm text-blue-500 hover:text-blue-700 hover:underline mb-6 cursor-pointer">Forgot your password?</href>
            </div>
            <button class="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 rounded shadow-lg hover:shadow-xl transition duration-200" type="submit">Sign In</button>
          </form>
        </section>
      </main>

      <div class='max-w-lg mx-auto text-center mt-12 mb-6'>
        <p class='text-white'>Don't have an account?</p>
        <href class='font-bold hover:underline cursor-pointer'>Sign Up</href>
      </div>
    </div>
  )
}
export default SignupForm;