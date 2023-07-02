import { useState } from 'react'
import logo from '../assets/images/Logo scissor Blue.png'
import { FaBars, FaTimes } from 'react-icons/fa'
import "../styles/Nav.css"
import { Link } from 'react-router-dom';

function NavBar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    return (
        <>
             <header className='bg-white py-1'>
                <nav className='flex flex-row justify-between items-center font-medium text-lg px-10 py-5 '>
                    <div className='basis-1/8'>
                        <img src={logo} alt="scissor's logo" />
                    </div>
                    <div className=' my-nav'>
                        <ul className='flex mflex-col  gap-8 mb-6 md:mb-0'>
                            <li>
                                <a href="#" className='text-[#005AE2] font-bold'>My URLs</a>
                            </li>
                            <li>
                                <a href="#features" className=''>Features</a>
                            </li>
                            <li>
                                <a href="#price" className=''>Pricing</a>
                            </li>
                            <li>
                                <a href="#" className=''>Analytics</a>
                            </li>
                            <li>
                                <a href="#container" className=''>FAQs</a>
                            </li>
                        </ul>
                        <div className='flex md:flex-row flex-col items-start gap-6'>
                            <button className='rounded-full md:bg-white md:text-[#005AE2] md:hover:border-[#005AE2] text-white bg-[#005AE2] px-6 md:px-3 py-1 text-md border border-[#005AE2] hover:bg-white hover:text-[#005AE2]'>
                                <Link to={'/login'}> Log In </Link>
                            </button>

                            <button className='rounded-full text-white bg-[#005AE2] px-3 py-1 text-md border border-[#005AE2] hover:bg-white hover:text-[#005AE2]'>

                                <Link to={'/signup'}> Try for free</Link></button>
                        </div>
                    </div>

                    <div className="mobile-nav">
                        {isMenuOpen ?
                            <FaTimes className='text-3xl text-[#005AE2] cursor-pointer md:hidden' onClick={toggleMenu} />
                            :
                            <FaBars className='text-3xl text-[#005AE2] cursor-pointer md:hidden' onClick={toggleMenu} />

                        }
                    </div>

                    {
                        isMenuOpen &&


                        <div className='my-mobile-nav'>
                            <ul className='flex mflex-col  gap-2 mb-6 md:mb-0'>
                                <li>
                                    <a href="#" className='text-[#005AE2] font-bold' onClick={toggleMenu}>My URLs</a>
                                </li>
                                <li>
                                    <a href="#features" className='' onClick={toggleMenu}>Features</a>
                                </li>
                                <li>
                                    <a href="#price" className='' onClick={toggleMenu}>Pricing</a>
                                </li>
                                <li>
                                    <a href="#" className='' onClick={toggleMenu}>Analytics</a>
                                </li>
                                <li >
                                    <a href="#container" className='' onClick={toggleMenu}>FAQs</a>
                                </li>
                            </ul>
                            <div className='flex md:flex-row flex-col items-start gap-6'>
                                <button className='rounded-full md:bg-white md:text-[#005AE2] md:hover:border-[#005AE2] text-white bg-[#005AE2] px-6 md:px-3 py-1 text-md border border-[#005AE2] hover:bg-white hover:text-[#005AE2]'>
                                    <Link to={'/login'}> Log In </Link>
                                </button>
                            </div>
                        </div>
                    }



                    {/* {isMenuOpen ? <FaTimes className='text-3xl text-[#005AE2] cursor-pointer md:hidden' onClick={toggleMenu} /> : <FaBars className='text-3xl text-[#005AE2] cursor-pointer md:hidden' onClick={toggleMenu} />} */}
                </nav>
            </header>
        </>
    )
}

export default NavBar