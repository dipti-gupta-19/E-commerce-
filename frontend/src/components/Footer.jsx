import React from 'react'
import assets from '../assets/assets'

const Footer = () => {
  return (
    <div>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
         <div >
           <img src={assets.logo} className='mb-5 w-32' alt="shopify" />
           <p className='w-full md:w-2/3 text-gray-600'>
            © 2025 Shopi. All rights reserved.
           </p>
         </div>
         <div>
            <p className='text-xl font-medium mb-5 '>Company</p>
            <ul className='flex flex-col gap-3 text-gray-600'>
                <li>Home</li>
                <li>About Us</li>
                <li>Delivery</li>
                <li>Privacy Policy</li>
            </ul>
         </div>
         <div>
            <p className='text-xl font-medium mb-5'>Get in touch</p>
            <ul className='flex flex-col gap-3 text-gray-600'>
               <li>Email: support@shopi.com</li>
               <li>Phone: +91 234 567 890</li>
               <li>Address: 123 Shopi St, Commerce City</li>
            </ul>
         </div>
      </div>
      <div>
        <hr />
        <p className='text-center text-gray-400 text-sm py-5'>&copy; 2025 Shopi. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer
