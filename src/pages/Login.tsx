import Footer from "../component/Footer";
import { Link } from "react-router-dom";
import { useState } from "react";
import {login}  from "../firebase/firebase.tsx"

const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e:any) => {
    e.preventDefault();
    login(email, password);

    setEmail("");
    setPassword("");
  };

  return (
    <>
      <div className="2xl:container h-auto m-auto">
        <div className="relative h-fit mx-auto lg:w-6/12">
          <div className="m-auto py-12 px-6 sm:p-20 xl:w-10/12">
            <div className="space-y-4">
              <p className="font-medium text-lg text-gray-600 text-center">
                Log in with:
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
                    {" "}
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
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email address or username"
                  className="w-full py-3 px-6 ring-1 ring-[#005AE2] rounded-xl placeholder-gray-600 bg-transparent transition disabled:ring-[#005AE2] disabled:bg-gray-100 disabled:placeholder-gray-400 invalid:ring-red-400 focus:invalid:outline-none"
                required />
              </div>

              <div className="flex flex-col items-end">
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full py-3 px-6 ring-1 ring-[#005AE2] rounded-xl placeholder-gray-600 bg-transparent transition disabled:ring-[#005AE2] disabled:bg-gray-100 disabled:placeholder-gray-400 invalid:ring-red-400 focus:invalid:outline-none"
                required />
                <button type="reset" className="w-max p-3 -mr-3">
                  <span className="text-sm tracking-wide text-blue-600">
                    Forgot your password ?
                  </span>
                </button>
              </div>

              <div className="text-center">
                <button className="w-full px-6 py-3 rounded-full bg-[#005AE2] transition hover:bg-sky-600 focus:bg-sky-600 active:bg-sky-800" onClick={handleLogin}>
                  <span className="font-semibold text-white text-lg">
                    Log in
                  </span>
                </button>
                <a href="#" type="reset" className="w-max p-3 -ml-3">
                  <span className="text-sm tracking-wide text-black-600 text-center">
                    Don't have an account?
                    <Link to={"/signup"} className="text-[#005AE2]">
                      Sign up
                    </Link>
                  </span>
                </a>
                <p className="text-center text-sm text-gray-400 mt-4 w-">
                  By signing in with an account, you agree to <br />
                  Scissors's
                  <span className="text-black">
                    Terms of Service, Privacy Policy
                  </span>{" "}
                  and <span className="text-black">Acceptable Use Policy</span>
                </p>{" "}
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;
