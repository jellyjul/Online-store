import React from 'react'
import { useState } from 'react';
import { FaSearch, FaTimes, FaBars } from "react-icons/fa";
import { RiUserStarFill } from "react-icons/ri";
import { CiShoppingCart } from "react-icons/ci";
import logo from '/logo.svg'
import { NavLink, Link } from 'react-router-dom';

const Navbar = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const onToggle = () => {
        setIsMenuOpen(!isMenuOpen)

    }
    const navItems = [
        { title: "Jewelry & Accessories", path: "/" },
        { title: "Clothing & Shoes", path: "/" },
        { title: "Home & Living", path: "/" },
        { title: "Wedding & Party", path: "/" },
        { title: "Toys & Entertainment", path: "/" },
        { title: "Art & Collectibles", path: "/" },
        { title: "Craft Supplies & Tools", path: "/" },
];

    return (
    <header className="max-w-screen-2xl xl:px-28 px-4 absolute absolute top-0  left-0 right-0 ">
        <nav className='flex justify-between items-center container md:py-4 pt-6 pb-3 '>
            <FaSearch className="text-Black w-6 h-6 cursor-pointer   md:block hidden " />
            <a href='/'><img src={logo} alt="logo" /></a>
            <div className='text-lg  text-Black sm:flex item-center gap-4 hidden  '>
                <a href='/' className='flex items-center gap-2'><RiUserStarFill/> Account </a>
                <a href='/' className='flex items-center gap-2'><CiShoppingCart/> Shopping </a>
            </div>
            <div className='sm:hidden'>
                <button onClick={onToggle}>
                    {
                        isMenuOpen ? <FaTimes></FaTimes> :  <FaBars></FaBars>
                    }
                </button>
            </div>
            </nav>
            <hr />
            <div className="pt-4">
                <ul className="lg:flex items-center justify-between text-black hidden">
                    {navItems.map(({ title, path}) => (
                        <li key={title} className=" hover:text-orange-500">
                            <NavLink
                                to={path}
                            >
                            {title}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </div>
            <div> {/*  on small devives */}
            <ul className={` bg-black text-white px-4 py-2  ${isMenuOpen ? '' : 'hidden'}`}>
                    {navItems.map(({ title, path}) => (
                        <li key={title} className=" hover:text-orange-500">
                            <Link
                                to={path}
                                onClick={onToggle}
                            >
                            {title}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
    </header>
    )
}

export default Navbar