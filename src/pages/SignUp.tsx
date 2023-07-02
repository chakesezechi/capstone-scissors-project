import Footer from '../component/Footer';
import { Link } from "react-router-dom";
import { useState } from 'react';
import {signUp} from '../firebase/firebase.tsx'

const SignUp = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [RetypePassword, setRetypePassword] = useState('');

  const handleSignUp = (e:any) => {
    e.preventDefault();
    signUp(email, password, username);

    setUsername('');
    setEmail('');
    setPassword('');
    setRetypePassword('');

  };

  return (
    <>
    <div className="2xl:container h-auto m-auto">
     
      <div className="relative h-full mx-auto lg:w-6/12">
        <div className="m-auto py-12 px-6 sm:p-20 xl:w-10/12">
          <div className="space-y-4">
            <p className="font-medium text-lg text-gray-600 text-center">
              Sign up with:
            </p>
          </div>

          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <button className="py-3 px-6 rounded-xl bg-[#005AE2]  hover:bg-blue-100 focus:bg-blue-100 active:bg-blue-200">
              <div className="flex gap-4 justify-center">
                <img
                  src="./src/assets/images/google-icon.png"
                  className="w-5"
                  alt=""
                />
                <span className="block w-max font-medium tracking-wide text-sm text-white">
                  {' '}
                  Google
                </span>
              </div>
            </button>
            <button className="py-3 px-6 rounded-xl bg-[#005AE2] transition hover:bg-gray-800 active:bg-gray-600 focus:bg-gray-700">
              <div className="flex gap-4 items-center justify-center text-white">
                <img
                  src="./src/assets/images/apple-icon.png"
                  alt="Image"
                  className="w-5"
                />

                <span className="block w-max font-medium tracking-wide text-sm text-white">
                  Apple
                </span>
              </div>
            </button>
          </div>

          <div role="hidden" className="mt-12 border-t">
            <span className="block w-max mx-auto -mt-3 px-4 text-center text-gray-500 bg-white">
              Or
            </span>
          </div>

          <form action="" className="space-y-6 py-6">
            <div>
              <input
                type="text"
                value={username}
                placeholder="Username"
                onChange={(e) => setUsername(e.target.value)}
                className="w-full py-3 px-6 ring-1 ring-[#005AE2] rounded-xl placeholder-gray-600 bg-transparent transition disabled:ring-[#005AE2] disabled:bg-gray-100 disabled:placeholder-gray-400 invalid:ring-red-400 focus:invalid:outline-none"
              required />
            </div>

            <div>
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full py-3 px-6 ring-1 ring-[#005AE2] rounded-xl placeholder-gray-600 bg-transparent transition disabled:ring-[#005AE2] disabled:bg-gray-100 disabled:placeholder-gray-400 invalid:ring-red-400 focus:invalid:outline-none"
              required />
            </div>

            <div className="flex flex-col items-end">
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                className="w-full py-3 px-6 ring-1 ring-[#7e8fa8] rounded-xl placeholder-gray-600 bg-transparent transition disabled:ring-[#005AE2] disabled:bg-gray-100 disabled:placeholder-gray-400 invalid:ring-red-400 focus:invalid:outline-none"
              required />
            </div>

            <div className="flex flex-col items-end">
              <input
                type="password"
                value={RetypePassword}
                onChange={(e) => setRetypePassword(e.target.value)}
                placeholder="Retype Password"
                className="w-full py-3 px-6 ring-1 ring-[#005AE2] rounded-xl placeholder-gray-600 bg-transparent transition disabled:ring-[#005AE2] disabled:bg-gray-100 disabled:placeholder-gray-400 invalid:ring-red-400 focus:invalid:outline-none"
              required />
            </div>

            <div className='text-center'>
              <button className="w-full px-6 py-3 rounded-full bg-[#005AE2] transition hover:bg-sky-600 focus:bg-sky-600 active:bg-sky-800" onClick={handleSignUp}>
                <span className="font-semibold text-white text-lg">
                  Sign up with Email
                </span>
              </button>
              <a href="#" type="reset" className="w-max p-3 -ml-3">
                <span className="text-sm tracking-wide text-black-600 text-center">
                  Already have an account?
                 <Link to ={"/login"}  className="text-[#005AE2]"> Log in</Link>
                </span>
              </a>
              <p className="text-center text-sm text-gray-400 mt-4 w-">
                By signing in with an account, you agree to <br />
                Scissors's
                <span className="text-black">
                  Terms of Service, Privacy Policy
                </span>{' '}
                and <span className="text-black">Acceptable Use Policy</span>
                            
              </p>{' '}
            </div>
          </form>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  )
}

export default SignUp
