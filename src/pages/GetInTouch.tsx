import Footer from '../component/Footer';
import '../App.css'


const GetInTouch = () => {
  return (
   <>
    <div className="2xl:container h-auto m-auto getouch">
      <div className="relative h-full mx-auto lg:w-6/12">
        <div className="m-auto py-12 px-6 sm:p-20 xl:w-10/12">
          <div className="space-y-4">
            <p className="font-medium text-lg  text-center text-bold">
              Let's get in touch:
            </p>
          </div>

          <form action="" className="space-y-6 py-6">
            <div className="flex justify-between gap-5">
              <div>
                <label htmlFor="">Firstname*</label>
                <input
                  type="text"
                  className="w-full py-3 px-6 ring-1 ring-[#005AE2] rounded-xl placeholder-gray-600 bg-transparent transition disabled:ring-[#005AE2] disabled:bg-gray-100 disabled:placeholder-gray-400 invalid:ring-red-400 focus:invalid:outline-none"
                />
              </div>
              <div>
                <label htmlFor="">Lastname*</label>
                <input
                  type="text"
                  className="w-full py-3 px-6 ring-1 ring-[#005AE2] rounded-xl placeholder-gray-600 bg-transparent transition disabled:ring-[#005AE2] disabled:bg-gray-100 disabled:placeholder-gray-400 invalid:ring-red-400 focus:invalid:outline-none"
                />
              </div>
            </div>
            <div>
              <label htmlFor="">Company Name*</label>
              <input
                type="text"
                className="w-full py-3 px-6 ring-1 ring-[#005AE2] rounded-xl placeholder-gray-600 bg-transparent transition disabled:ring-[#005AE2] disabled:bg-gray-100 disabled:placeholder-gray-400 invalid:ring-red-400 focus:invalid:outline-none"
              />
            </div>

            <div>
              <label htmlFor="">Business Email Address*</label>
              <input
                type="email"
                className="w-full py-3 px-6 ring-1 ring-[#005AE2] rounded-xl placeholder-gray-600 bg-transparent transition disabled:ring-[#005AE2] disabled:bg-gray-100 disabled:placeholder-gray-400 invalid:ring-red-400 focus:invalid:outline-none"
              />
            </div>

            <div>
              <label htmlFor="">Phone Number*</label>
              <input
                type="number"
                className="w-full py-3 px-6 ring-1 ring-[#005AE2] rounded-xl placeholder-gray-600 bg-transparent transition disabled:ring-[#005AE2] disabled:bg-gray-100 disabled:placeholder-gray-400 invalid:ring-red-400 focus:invalid:outline-none"
              />
            </div>

            <div>
              <label htmlFor="">Job Title*</label>
              <select
                name=""
                id=""
                placeholder="Please Select"
                className="w-full py-3 px-6 ring-1 ring-[#005AE2] rounded-xl placeholder-gray-600 bg-transparent transition disabled:ring-[#005AE2] disabled:bg-gray-100 disabled:placeholder-gray-400 invalid:ring-red-400 focus:invalid:outline-none"
              ></select>
            </div>
            <div>
              <label htmlFor="">Job Title*</label>
              <select
                name=""
                id=""
                placeholder="Please Select"
                className="w-full py-3 px-6 ring-1 ring-[#005AE2] rounded-xl placeholder-gray-600 bg-transparent transition disabled:ring-[#005AE2] disabled:bg-gray-100 disabled:placeholder-gray-400 invalid:ring-red-400 focus:invalid:outline-none"
              ></select>
            </div>

            <div>
              <label htmlFor="">Company Size*</label>
              <select
                name=""
                id=""
                placeholder="Please Select"
                className="w-full py-3 px-6 ring-1 ring-[#005AE2] rounded-xl placeholder-gray-600 bg-transparent transition disabled:ring-[#005AE2] disabled:bg-gray-100 disabled:placeholder-gray-400 invalid:ring-red-400 focus:invalid:outline-none"
              ></select>
            </div>

            <div>
              <label htmlFor="">Primary Use Case*</label>
              <select
                name=""
                id=""
                placeholder="Please Select"
                className="w-full py-3 px-6 ring-1 ring-[#005AE2] rounded-xl placeholder-gray-600 bg-transparent transition disabled:ring-[#005AE2] disabled:bg-gray-100 disabled:placeholder-gray-400 invalid:ring-red-400 focus:invalid:outline-none"
              ></select>
            </div>

            <div>
              <label htmlFor="">Country*</label>
              <select
                name=""
                id=""
                placeholder="Please Select"
                className="w-full py-3 px-6 ring-1 ring-[#005AE2] rounded-xl placeholder-gray-600 bg-transparent transition disabled:ring-[#005AE2] disabled:bg-gray-100 disabled:placeholder-gray-400 invalid:ring-red-400 focus:invalid:outline-none"
              ></select>
              <p className=" text-sm text-gray-400 mb-5">
                Scissors requires the contact information you provide in order
                to reach out to you regarding our products and services. You
                have the option to unsubscribe from these communications
                whenever you wish. To learn more about how to unsubscribe , our
                privacy practices, and our dedication to safeguarding your
                privacy, please refer to our Privacy Policy.{' '}
              </p>

              <button className="w-full px-6 py-3 rounded-xl bg-[#005AE2] transition hover:bg-sky-600 focus:bg-sky-600 active:bg-sky-800">
                <span className="font-semibold text-white text-lg">Submit</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
    <Footer/>
   </>
  )
}

export default GetInTouch
