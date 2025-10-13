import React from 'react'
import assets from '../assets/assets'

const OurPolicy = () => {
  return (
    <div>
      <div className='flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-base text-gray-700'>
         <div>
            <img src={assets.exchange_icon} alt="exchange" className='m-auto mb-5' />
            <p className='font-semibold'>Easy Exchange Policy</p>
            <p className='text-gray-400'> We offer hassle-free exchanges within 15 days of purchase.</p>
         </div>
         <div>
            <img src={assets.return_icon} alt="return" className='m-auto mb-5' />
            <p className='font-semibold'>Easy Return Policy</p>
            <p className='text-gray-400'> We offer hassle-free returns within 7 days of purchase.</p>
         </div>
         <div>
            <img src={assets.shipping_icon} alt="shipping" className='m-auto mb-5' />
            <p className='font-semibold'>Free Shipping</p>
            <p className='text-gray-400'> Enjoy free shipping on all orders over $50.</p>
         </div>
         <div>
            <img src={assets.quality_icon} alt="quality" className='m-auto mb-5' />
            <p className='font-semibold'>Quality Assurance</p>
            <p className='text-gray-400'> We guarantee the quality of our products.</p>
         </div>
      </div>
    </div>
  )
}

export default OurPolicy
