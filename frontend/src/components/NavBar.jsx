import React from 'react'
import { assets } from '../assets/assets'
import { NavLink,Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className='flex item-center justify-between py-5 font-medium'>
        <img src = {assets.style_street_logo} className ='w-36' alt=""/>
        <ul className ='hidden sm:flex gap-5 text-sm text-gray-700'>
          <NavLink to ='/' className = 'flex flex-col items-center gap-1'>
            <p>HOME</p>
            <hr className = 'w-2/4 border-none h-[1.5px] bg-gray-700'/>
          </NavLink>
           <NavLink to ='/collection' className = 'flex flex-col items-center gap-1'>
            <p>COLLECTION</p>
            <hr className = 'w-2/4 border-none h-[1.5px] bg-gray-700'/>
          </NavLink>
           <NavLink to ='/about' className = 'flex flex-col items-center gap-1'>
            <p>ABOUT</p>
            <hr className = 'w-2/4 border-none h-[1.5px] bg-gray-700'/>
          </NavLink>
           <NavLink to ='/contact' className = 'flex flex-col items-center gap-1'>
            <p>CONTACT</p>
            <hr className = 'w-2/4 border-none h-[1.5px] bg-gray-700'/>
          </NavLink>


        </ul>
        <div className='flex items-center gap-6'>
          <img src = { assets.search} className='w-5 cursor-pointer' alt=""/>
         
          <div className='group relative'>
            <img className='w-5 cursor-pointer'src={assets.user} alt =""/>
            <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4'>
                <div className=' flex flex-col gap-2 w-26 py-3 bg-slate-100 text-gray-500 rounded'>
                    <p className='cursor-pointer hover:text-black'>My Profile</p>
                    <p className='cursor-pointer hover:text-black'>Orders</p>
                    <p className='cursor-pointer hover:text-black'>Logout</p>
                </div>
            </div>
          </div>
          <Link to = '/cart'className = 'relative'>
              <img src='assets.cart' className='w-5 min w-5' alt=''/> 
          </Link>


        </div>
    </div>
  )
}

export default NavBar