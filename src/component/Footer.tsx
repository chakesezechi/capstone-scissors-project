import { FaTwitter } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'
import { FaFacebook } from 'react-icons/fa'
import logo from '../assets/images/scissor logo Black.png';
import '../App.css'

 <div className="footer-bg">
        <div className="footer-top">
          <div className='row-span-2'>
            <img src={logo} alt="Scissor's Logo" className="h-10" />
            <div className="flex gap-5 text-2xl mt-5">
              <FaTwitter className=" cursor-pointer hover:text-blue-600" />
              <FaInstagram className=" cursor-pointer hover:text-blue-600" />
              <FaLinkedin className=" cursor-pointer hover:text-blue-600" />
              <FaFacebook className=" cursor-pointer hover:text-blue-600" />
            </div>
          </div>
          <div className="p-5">
            <ul>
              <p className="text-gray-800 font-bold text-sm/[12px] pb-4">
                Why Scissor?
              </p>
              <li className=" text-sm pb-2  hover:text-blue-600 curosr-pointer  ">
                Scissor 101
              </li>
              <li className=" text-sm pb-2 hover:text-blue-600 curosr-pointer  ">
                Integrations & API
              </li>
              <li className=" text-sm/[5px]  hover:text-blue-600 curosr-pointer  ">
                Pricing
              </li>
            </ul>
          </div>
          <div className="p-5">
            <ul>
              <p className="text-gray-800 font-bold text-sm/[12px] pb-2">
                Solutions
              </p>
              <li className=" text-sm  hover:text-blue-600 curosr-pointer  ">
                Social Media
              </li>
              <li className=" text-sm  hover:text-blue-600 curosr-pointer  ">
                Digital Marketing
              </li>
              <li className=" text-sm  hover:text-blue-600 curosr-pointer  ">
                Customer Service
              </li>
              <li className=" text-sm  hover:text-blue-600 curosr-pointer  ">
                For Developers
              </li>
            </ul>
          </div>
          <div className="p-5">
            <ul>
              <p className="text-gray-800 font-bold  text-sm/[12px] pb-2">
                Products
              </p>
              <li className=" text-sm  hover:text-blue-600 curosr-pointer  ">
                Link Management
              </li>
              <li className=" text-sm  hover:text-blue-600 curosr-pointer  ">
                QR Codes
              </li>
              <li className=" text-sm  hover:text-blue-600 curosr-pointer  ">
                Link-in-bio
              </li>
            </ul>
          </div>
          <div className="p-5">
            <ul>
              <p className="text-gray-800 font-bold  text-sm/[12px] pb-2">
                Company
              </p>
              <li className=" text-sm  hover:text-blue-600 curosr-pointer  ">
                About Scissor{' '}
              </li>
              <li className=" text-sm  hover:text-blue-600 curosr-pointer  ">
                Careers
              </li>
              <li className=" text-sm  hover:text-blue-600 curosr-pointer  ">
                Partners
              </li>
              <li className=" text-sm  hover:text-blue-600 curosr-pointer  ">
                Press
              </li>
              <li className=" text-sm  hover:text-blue-600 curosr-pointer  ">
                Contact
              </li>
              <li className=" text-sm  hover:text-blue-600 curosr-pointer  ">
                Reviews
              </li>
            </ul>
          </div>
          <div className="p-5 footer-bottom">
            <ul>
              <p className="text-gray-800 font-bold text-sm mb-3">Resources</p>
              <li className=" text-sm hover:text-blue-600 curosr-pointer  ">
                Blog
              </li>
              <li className=" text-sm hover:text-blue-600 curosr-pointer  ">
                Resource Library
              </li>
              <li className=" text-sm  hover:text-blue-600 curosr-pointer  ">
                Developers
              </li>
              <li className=" text-sm  hover:text-blue-600 curosr-pointer  ">
                App Connectors
              </li>
              <li className=" text-sm  hover:text-blue-600 curosr-pointer  ">
                Support
              </li>
              <li className=" text-sm  hover:text-blue-600 curosr-pointer  ">
                Trust Center
              </li>
              <li className=" text-sm  hover:text-blue-600 curosr-pointer  ">
                Browser Extension
              </li>
              <li className="text-sm  hover:text-blue-600 curosr-pointer  ">
                Mobile App
              </li>
            </ul>
          </div>
          <div className="p-5">
            <ul>
              <p className="text-gray-800 font-bold text-sm mb-3">Features</p>
              <li className="text-sm  hover:text-blue-600 curosr-pointer  ">
                Branded Links
              </li>
              <li className="text-sm  hover:text-blue-600 curosr-pointer  ">
                Mobile Links
              </li>
              <li className="text-sm  hover:text-blue-600 curosr-pointer  ">
                Campaign
              </li>
              <li className="text-sm  hover:text-blue-600 curosr-pointer  ">
                Management & Analytics
              </li>
              <li className="text-sm  hover:text-blue-600 curosr-pointer  ">
                QR Code generation
              </li>
            </ul>
          </div>
          <div className="p-5">
            <ul>
              <p className="text-gray-800 font-bold text-sm mb-3">Legal</p>
              <li className=" text-sm  hover:text-blue-600 curosr-pointer  ">
                Privacy Policy
              </li>
              <li className=" text-sm  hover:text-blue-600 curosr-pointer  ">
                Cookie Policy
              </li>
              <li className=" text-sm  hover:text-blue-600 curosr-pointer  ">
                Terms of Service
              </li>
              <li className=" text-sm  hover:text-blue-600 curosr-pointer  ">
                Acceptable Use Policy
              </li>
              <li className=" text-sm  hover:text-blue-600 curosr-pointer  ">
                Code of Conduct
              </li>
            </ul>
          </div>
        </div>
      </div>
import '../App.css'


function Footer() {
  return (
    <>
       <div className="px-36 py-12 footer">
        <div className="grid grid-cols-5 mb-4 md:mb-0 w-full items-start">
          <div className='row-span-2 '>
            <img src={logo} alt="Scissor's Logo" className="h-10" />
            <div className="flex gap-5 text-2xl mt-5">
              <FaTwitter className=" cursor-pointer hover:text-blue-600" />
              <FaInstagram className=" cursor-pointer hover:text-blue-600" />
              <FaLinkedin className=" cursor-pointer hover:text-blue-600" />
              <FaFacebook className=" cursor-pointer hover:text-blue-600" />
            </div>
          </div>
          <div className="p-5">
            <ul>
              <p className="text-gray-800 font-bold text-sm/[12px] pb-4">
                Why Scissor?
              </p>
              <li className=" text-sm pb-2  hover:text-blue-600 curosr-pointer  ">
                Scissor 101
              </li>
              <li className=" text-sm pb-2 hover:text-blue-600 curosr-pointer  ">
                Integrations & API
              </li>
              <li className=" text-sm/[5px]  hover:text-blue-600 curosr-pointer  ">
                Pricing
              </li>
            </ul>
          </div>
          <div className="p-5">
            <ul>
              <p className="text-gray-800 font-bold text-sm/[12px] pb-2">
                Solutions
              </p>
              <li className=" text-sm  hover:text-blue-600 curosr-pointer  ">
                Social Media
              </li>
              <li className=" text-sm  hover:text-blue-600 curosr-pointer  ">
                Digital Marketing
              </li>
              <li className=" text-sm  hover:text-blue-600 curosr-pointer  ">
                Customer Service
              </li>
              <li className=" text-sm  hover:text-blue-600 curosr-pointer  ">
                For Developers
              </li>
            </ul>
          </div>
          <div className="p-5">
            <ul>
              <p className="text-gray-800 font-bold  text-sm/[12px] pb-2">
                Products
              </p>
              <li className=" text-sm  hover:text-blue-600 curosr-pointer  ">
                Link Management
              </li>
              <li className=" text-sm  hover:text-blue-600 curosr-pointer  ">
                QR Codes
              </li>
              <li className=" text-sm  hover:text-blue-600 curosr-pointer  ">
                Link-in-bio
              </li>
            </ul>
          </div>
          <div className="p-5">
            <ul>
              <p className="text-gray-800 font-bold  text-sm/[12px] pb-2">
                Company
              </p>
              <li className=" text-sm  hover:text-blue-600 curosr-pointer  ">
                About Scissor{' '}
              </li>
              <li className=" text-sm  hover:text-blue-600 curosr-pointer  ">
                Careers
              </li>
              <li className=" text-sm  hover:text-blue-600 curosr-pointer  ">
                Partners
              </li>
              <li className=" text-sm  hover:text-blue-600 curosr-pointer  ">
                Press
              </li>
              <li className=" text-sm  hover:text-blue-600 curosr-pointer  ">
                Contact
              </li>
              <li className=" text-sm  hover:text-blue-600 curosr-pointer  ">
                Reviews
              </li>
            </ul>
          </div>
          <div className="p-5">
            <ul>
              <p className="text-gray-800 font-bold text-sm mb-3">Resources</p>
              <li className=" text-sm hover:text-blue-600 curosr-pointer  ">
                Blog
              </li>
              <li className=" text-sm hover:text-blue-600 curosr-pointer  ">
                Resource Library
              </li>
              <li className=" text-sm  hover:text-blue-600 curosr-pointer  ">
                Developers
              </li>
              <li className=" text-sm  hover:text-blue-600 curosr-pointer  ">
                App Connectors
              </li>
              <li className=" text-sm  hover:text-blue-600 curosr-pointer  ">
                Support
              </li>
              <li className=" text-sm  hover:text-blue-600 curosr-pointer  ">
                Trust Center
              </li>
              <li className=" text-sm  hover:text-blue-600 curosr-pointer  ">
                Browser Extension
              </li>
              <li className="text-sm  hover:text-blue-600 curosr-pointer  ">
                Mobile App
              </li>
            </ul>
          </div>
          <div className="p-5">
            <ul>
              <p className="text-gray-800 font-bold text-sm mb-3">Features</p>
              <li className="text-sm  hover:text-blue-600 curosr-pointer  ">
                Branded Links
              </li>
              <li className="text-sm  hover:text-blue-600 curosr-pointer  ">
                Mobile Links
              </li>
              <li className="text-sm  hover:text-blue-600 curosr-pointer  ">
                Campaign
              </li>
              <li className="text-sm  hover:text-blue-600 curosr-pointer  ">
                Management & Analytics
              </li>
              <li className="text-sm  hover:text-blue-600 curosr-pointer  ">
                QR Code generation
              </li>
            </ul>
          </div>
          <div className="p-5">
            <ul>
              <p className="text-gray-800 font-bold text-sm mb-3">Legal</p>
              <li className=" text-sm  hover:text-blue-600 curosr-pointer  ">
                Privacy Policy
              </li>
              <li className=" text-sm  hover:text-blue-600 curosr-pointer  ">
                Cookie Policy
              </li>
              <li className=" text-sm  hover:text-blue-600 curosr-pointer  ">
                Terms of Service
              </li>
              <li className=" text-sm  hover:text-blue-600 curosr-pointer  ">
                Acceptable Use Policy
              </li>
              <li className=" text-sm  hover:text-blue-600 curosr-pointer  ">
                Code of Conduct
              </li>
            </ul>
          </div>
        </div>
      </div>

  
    </>
  )
}
export default Footer
