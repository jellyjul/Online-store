import React from 'react'
import { FaSearch } from "react-icons/fa";
import { RiUserStarFill } from "react-icons/ri";
import { CiShoppingCart } from "react-icons/ci";
import logo from '/logo.svg'

const Navbar = () => {
    return (
    <header>
        <nav>
            <FaSearch/>
            <a href='/'><img src={logo} alt="" /></a>
            <div className='text-lg text-Black sm:flex item-center gap-4 hidden'>
                <a href='' className='flex items-center gap-2'><RiUserStarFill/> Account </a>
                <a href='' className='flex  items-center gap-2'><CiShoppingCart/> Shopping </a>
            </div>
        </nav>

    </header>
    )
}

export default Navbar