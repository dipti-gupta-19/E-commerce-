import React from 'react'
import Title from '../components/Title'
import assets from '../assets/assets'

const About = () => {
  return (
    <div className='pt-8 border-t'>
      <div className="text-center">
        <Title text1={'About'} text2={'Us'}/>
        <p className='mt-4 text-gray-600 max-w-2xl mx-auto'>
          Welcome to our fashion destination where style meets innovation. We curate the finest collection 
          of contemporary fashion to help you express your unique personality.
        </p>
      </div>

      <div className='my-16 flex flex-col md:flex-row gap-16 items-center'>
        <div className='md:w-1/2'>
          <img 
            src={assets.hero_img} 
            alt="About Us" 
            className='w-full rounded-lg shadow-xl hover:scale-105 transition-transform duration-300'
          />
        </div>
        <div className='md:w-1/2 space-y-6'>
          <div>
            <h3 className='text-2xl font-semibold mb-2'>Our Story</h3>
            <p className='text-gray-600'>
              Founded in 2023, we've been passionate about bringing the latest fashion trends 
              to our customers while maintaining the highest quality standards.
            </p>
          </div>
          
          <div>
            <h3 className='text-2xl font-semibold mb-2'>Our Mission</h3>
            <p className='text-gray-600'>
              To provide accessible, high-quality fashion that empowers individuals to express 
              themselves confidently.
            </p>
          </div>

          <div>
            <h3 className='text-2xl font-semibold mb-2'>What Sets Us Apart</h3>
            <ul className='text-gray-600 space-y-2'>
              <li className='flex items-center gap-2'>
                <span className='text-green-500'>✓</span>
                Curated Collection
              </li>
              <li className='flex items-center gap-2'>
                <span className='text-green-500'>✓</span>
                Quality Assurance
              </li>
              <li className='flex items-center gap-2'>
                <span className='text-green-500'>✓</span>
                24/7 Customer Support
              </li>
              <li className='flex items-center gap-2'>
                <span className='text-green-500'>✓</span>
                Fast & Reliable Shipping
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className='my-16 bg-gray-50 py-12 px-4 rounded-lg'>
        <h3 className='text-2xl font-semibold text-center mb-8'>Our Values</h3>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto'>
          <div className='text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow'>
            <div className='text-4xl mb-4'>🎯</div>
            <h4 className='text-xl font-semibold mb-2'>Quality First</h4>
            <p className='text-gray-600'>We never compromise on the quality of our products</p>
          </div>
          <div className='text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow'>
            <div className='text-4xl mb-4'>💫</div>
            <h4 className='text-xl font-semibold mb-2'>Innovation</h4>
            <p className='text-gray-600'>Constantly evolving with the latest fashion trends</p>
          </div>
          <div className='text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow'>
            <div className='text-4xl mb-4'>💝</div>
            <h4 className='text-xl font-semibold mb-2'>Customer Focus</h4>
            <p className='text-gray-600'>Your satisfaction is our top priority</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
