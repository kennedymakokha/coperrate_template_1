import { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    // State to manage the navbar's visibility
    const [nav, setNav] = useState(false);

    // Toggle function to handle the navbar's display
    const handleNav = () => {
        setNav(!nav);
    };

    // Array containing navigation items

    const navItems = [
        { id: 1, url: "/", text: 'Home' },
        { id: 2, url: "/about-us", text: 'About Us' },
        { id: 3, url: "/services", text: 'Services' },
        { id: 4, url: "/projects", text: 'Projects' },
        { id: 5, url: "/pricing", text: 'Pricing' },
        { id: 6, url: "/contact-Us", text: 'Contact Us' },
    ];
    function UseLastPathname(pos: number) {
        const location = useLocation();
        const pathSegments = location.pathname.split('/');
        return pathSegments[pathSegments.length - pos];
    }
    let path = UseLastPathname(1)
    return (
        <div className='bg-black flex justify-between items-center h-24  mx-auto px-24 text-white'>
            {/* Logo */}
            <h1 className='w-full text-3xl font-bold text-secondary-100'>Pointex.</h1>

            {/* Desktop Navigation */}
            <ul className='hidden md:flex w-[98%]'>
                {navItems.map(item => (
                    <li
                        key={item.id}
                        className='px-4 py-2 hover:bg-secondary-100 min-w-24 w-auto rounded-xl m-2 cursor-pointer duration-300 '
                    >
                        <Link to={`/${item.url}`} className={`font-bold tracking-wide capitalize  ${path === item.url ? "text-white  " : "text-slate-200 dark:text-black hover:text-black"}  `}>{item.text} </Link>
                    </li>
                ))}
            </ul>

            {/* Mobile Navigation Icon */}
            <div onClick={handleNav} className='block md:hidden'>
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
                <h1 className='w-full text-3xl font-bold text-secondary-100 m-4'>Pointex</h1>

                {/* Mobile Navigation Items */}
                {navItems.map(item => (
                    <li
                        key={item.id}
                        className='p-4 border-b rounded-xl hover:bg-secondary-100 duration-300 hover:text-black cursor-pointer border-gray-600'
                    >
                        <Link to={`/${item.url}`} className={`font-semibold capitalize  ${path === item.url ? "text-white  " : "text-slate-400 dark:text-black hover:text-orange-400"}  `}>{item.text} </Link>

                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Navbar;