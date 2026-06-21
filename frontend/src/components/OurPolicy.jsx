import React from 'react'
import { assets } from '../assets/assets'

const OurPolicy = () => {
  return (
    <div className='flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700'>
        <div>
            <img src={assets.transfer.png} className='w-12 m-auto mb-5' alt =""/>
            <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur repellat quam deserunt quos. Commodi in architecto facere dolore dolorum quos obcaecati ratione eveniet debitis aliquam! Consequuntur rerum consequatur asperiores quaerat!
            </p>
        </div>
    </div>
  )
}

export default OurPolicy