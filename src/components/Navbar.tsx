import { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { Link, useLocation } from 'react-router-dom';
import img from './../assets/images/pointex/96.png'
import { LogoLn } from '../images';
const Navbar = () => {
    // State to manage the navbar's visibility
    const [nav, setNav] = useState(false);

    // Toggle function to handle the navbar's display
    const handleNav = () => {
        setNav(!nav);
    };

    // Array containing navigation items

    const navItems = [
        { id: 1, url: "", text: 'Home' },
        { id: 2, url: "about-us", text: 'About Us' },
        { id: 3, url: "services", text: 'Services' },
        { id: 4, url: "projects", text: 'Projects' },
        // { id: 5, url: "pricing", text: 'Pricing' },
        { id: 6, url: "contact-us", text: 'Contact Us' },
    ];
    function UseLastPathname(pos: number) {
        const location = useLocation();
        const pathSegments = location.pathname.split('/');
        return pathSegments[pathSegments.length - pos];
    }
    let path = UseLastPathname(1)

    return (
        <div className='bg-black  flex justify-between items-center sm:h-20 h-10 shadow-3xl  mx-auto sm:px-24 px-2 text-white'>
            {/* Logo */}
            <h1 className='sm:hidden flex w-full text-xl font-bold text-secondary-100'>Pointex solutions </h1>
            <div className="w-full h-full">
                <img src={LogoLn} alt="" className="sm:flex hidden h-full" />
            </div>

            {/* Desktop Navigation */}
            <ul className='hidden md:flex w-[98%]'>
                {navItems.map(item => (
                    <Link to={`/${item.url}`} key={item.id} className={`relative z-50 flex items-center justify-center  ${path !== item.url && "hover:bg-secondary-100 "} min-w-24 w-auto rounded-md m-2 cursor-pointer duration-300`}
                    // className="w-full h-full   flex-col flex items-center justify-center relative z-0"
                    >
                        <img src={img} alt="" className={`w-full  ${path === item.url ? "flex h-6 rounded-md border border-slate-900" : "hidden"}  object-cover`} />
                        <div className="absolute inset-0 flex justify-center items-center z-10">

                            <Link to={`/${item.url}`} className={`font-bold tracking-wide capitalize  ${path === item.url ? "text-secondary-100   " : "text-slate-200 dark:text-black hover:text-black"}  `}>{item.text} </Link>

                        </div>

                    </Link>

                ))}
            </ul>

            {/* Mobile Navigation Icon */}
            <div onClick={handleNav} className='block md:hidden '>
                {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
            </div>

            {/* Mobile Navigation Menu */}
            <ul
                className={
                    nav
                        ? 'fixed md:hidden z-20 left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500'
                        : 'ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]'
                }
            >
                {/* Mobile Logo */}

                <img src={LogoLn} alt="" />

                {/* Mobile Navigation Items */}
                {navItems.map(item => (
                    <li
                        key={item.id}
                        className='p-4 border-b rounded-xl hover:bg-secondary-100 duration-300 hover:text-black cursor-pointer border-secondary-100/[40%]'
                    >
                        <Link to={`/${item.url}`} className={`font-semibold capitalize  ${path === item.url ? "text-secondary-100/[65%]  " : "text-slate-100 "}  `}>{item.text} </Link>

                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Navbar;