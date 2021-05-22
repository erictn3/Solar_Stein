// import React, {useState} from 'react';
import React from 'react';

// import './SignupForm.css';

const SignupForm = () => {

  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');

  // const [user, setUser] = useState({
  //   email: '',
  //   password: ''
  // })

  // const handleSubmit = (event) => {
  //   event.preventDefault()
  //   const data = this.state
  //   console.log('final data is', data)
  // }

  // const handleInputChange = (event) => {
  //   event.preventDefault();
  //   let updatedUser = user;
  //   user[event.target.name] = event.target.value;
  //   setUser({
  //     user
  //     // [event.target.name]: event.target.value
  //   })
  // }
  
  return (
    <div className='body-bg min-h-screen pt-12 md:pt-20 pb-6 px-2 md:px-0 bg-blue-400'>
      {/* <form classNameName="form" onSubmit={handleSubmit}> */}
        <header className='mx-auto max-w-lg'>
          <href>
            <h1 className="text-4xl font-bold text-white text-center">Sign Up</h1>        
          </href>

        </header>
        <main className='bg-white max-w-lg mx-auto p-8 md:p-12 my-10 rounded-lg'>
          <section>
            <h3 className='font-bold text-2xl'>Welcome to Solar Stein</h3>
            <p className='text-gray-600 p-2'>Sign in to your account.</p>
          </section>
          <section className='mt-10'>
            
            <form className='flex flex-col'>
              <div className='mb-6 pt-3 rounded bg-gray-200'>
                <label className='block text-gray-700 text-sm font-bold mb-2 ml-3' for="email">Email
                  <input name="email" className='bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-blue-600 transition duration-500 px-2 pd-2 py-2'
                  // onChange={handleInputChange}
                  >
                  </input>
                </label>
              </div>

              <div className='mb-6 pt-3 rounded bg-gray-200'>
              <label className='block text-gray-700 text-sm font-bold mb-2 ml-3' for="password">Password
                  <input name="password" className='bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-blue-600 transition duration-500 px-2 pd-2 py-2'
                  // onChange={handleInputChange}
                  >
                  </input>
                </label>
              </div>

              <div className='flex justify-end'>
                <href className="text-sm text-blue-500 hover:text-blue-700 hover:underline mb-6 cursor-pointer">Forgot your password?</href>
              </div>
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 rounded shadow-lg hover:shadow-xl transition duration-200" type="submit">Sign Up</button>
            </form>
          </section>
        </main>

        <div className='max-w-lg mx-auto text-center mt-12 mb-6'>
          <p className='text-white'>Already have an account?</p>
          <href className='font-bold hover:underline cursor-pointer'>Sign In</href>
        </div>
      {/* </form> */}
    </div>
  )
}
export default SignupForm;
