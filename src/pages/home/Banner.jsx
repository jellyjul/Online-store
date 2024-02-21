import React from 'react'
import bannerImg from '../../../public/images/banner.png'
import { FaShoppingCart } from 'react-icons/fa'

const Banner = () => {
  return (
    <div className='py-12 md:px-9 bg-PrimaryBG'>
        <div className='flex  flex-col-reverse content-center justify-between items-center  gap-14 py-28 md:flex-row '>
            <div className='px-5 md:px-20'  >
                <h1 className='text-5xl mb-5 font-light'> Collections</h1>
                <p className='text-xl mb-7'>You can explore and shop many differnt collection from various
                barands here.
                </p>
                    <button className='flex flex-column gap-2  items-center bg-Black text-white  hover:bg-orange-500 px-5 py-2'> 
                        <FaShoppingCart />Shop now
                    </button>
            </div>
            <div className="md:w-1/2">
                <img src={bannerImg} className="mx-auto h-full md:h-[562px] md:w-[442px] w-full"></img>
            </div>
        </div>
    </div>
  )
}

export default Banner