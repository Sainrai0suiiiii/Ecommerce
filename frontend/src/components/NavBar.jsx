import React from 'react'
import { assets } from '../assets/assets'

const NavBar = () => {
  return (
    <div className='flex item-center justify-between py-5 font-medium'>
        <img src = {assets.style_street_logo} className ='w-36' alt=""/>

    </div>
  )
}

export default NavBar