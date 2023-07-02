import CheckedCircle from '../assets/vectors/CheckedCircle';
import CheckedCircleLight from '../assets/vectors/CheckedCircleLight';
import '../styles/Price.css'

const Price = () => {
  return (
    <div className="w-full price" id="price">
    <div className="mx-auto text-center">
      <h1 className="text-3xl font-bold mb-2">
        A <span className="text-[#005AE2]">price perfect</span> for your
        needs.
      </h1>
      <p className=" mx-auto price-subtext">
        From catering for your personal, business, event, socials needs, you
        can be rest assured we have you in mind in our pricing.
      </p>
    </div>
    <div className="flex justify-center items-center mt-12 pricing-container">
      <div className="border border-[#005AE2] rounded-lg py-10 flex justify-center items-center h-fit pricing">
        <div className="">
          <h1 className="text-xl">Basic</h1>
          <h5 className="text-5xl font-bold mt-5">Free</h5>
          <p className="mt-3">Free plan for all users</p>
          <ul className="list-none mt-6">
            <li className="flex flex-row items-center mt-8">
              <CheckedCircle />
              &nbsp; Unlimited URL Shortening
            </li>
            <li className="flex flex-row items-center mt-8">
              <CheckedCircle />
              &nbsp; Basic Link Analytics
            </li>
            <li className="flex flex-row items-center mt-8">
              <CheckedCircle />
              &nbsp; Customizable Short Links
            </li>
            <li className="flex flex-row items-center mt-8">
              <CheckedCircle />
              &nbsp; Standard Support
            </li>
            <li className="flex flex-row items-center mt-8">
              <CheckedCircle />
              &nbsp; Ad-supported
            </li>
          </ul>
        </div>
      </div>
      <div className="border border-[#005AE2] rounded-lg pricing py-20 flex justify-center items-center bg-[#1E3448] text-white">
        <div className="">
          <h1 className="text-xl">Professional </h1>
          <h5 className="text-5xl font-bold mt-5">$15/month</h5>
          <p className="mt-3">Ideal for business creators</p>
          <ul className="list-none mt-6">
            <li className="flex flex-row items-center mt-8">
              <CheckedCircleLight />
              &nbsp; Enhanced Link Analytics
            </li>
            <li className="flex flex-row items-center mt-8">
              <CheckedCircleLight />
              &nbsp; Custom Branded Domains
            </li>
            <li className="flex flex-row items-center mt-8">
              <CheckedCircleLight />
              &nbsp; Advanced Link Customization
            </li>
            <li className="flex flex-row items-center mt-8">
              <CheckedCircleLight />
              &nbsp;Priority Support
            </li>
            <li className="flex flex-row items-center mt-8">
              <CheckedCircleLight />
              &nbsp; Ad-free Experirnce
            </li>
          </ul>
        </div>
      </div>
      <div className="border border-[#005AE2] rounded-lg pricing py-10 flex justify-center items-center h-fit">
        <div className="">
          <h1 className="text-xl">Teams</h1>
          <h5 className="text-5xl font-bold mt-5">$25/Month</h5>
          <p className="mt-3">Share with up to 10 users</p>
          <ul className="list-none mt-6">
            <li className="flex flex-row items-center mt-8">
              <CheckedCircle />
              &nbsp; Team Collaboration
            </li>
            <li className="flex flex-row items-center mt-8">
              <CheckedCircle />
              &nbsp;Users Roles and Permissions
            </li>
            <li className="flex flex-row items-center mt-8">
              <CheckedCircle />
              &nbsp; Enhanced Security
            </li>
            <li className="flex flex-row items-center mt-8">
              <CheckedCircle />
              &nbsp; API Access
            </li>
            <li className="flex flex-row items-center mt-8">
              <CheckedCircle />
              &nbsp; Dedicated Account Manager
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div className='flex justify-center items-center w-full my-16'>
      <button className='rounded-full bg-[#005AE2] text-white py-3 px-6'>Select Pricing</button>
    </div>
  </div>
  );
};

export default Price;