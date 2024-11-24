import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/frontend_assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div>

      <div className='text-2xl text-center pt-8 border-t '>
        <Title text1={'ABOUT'} text2={'US'}/>
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16 '>
          <img className='w-full md:max-w-[450px] ' src={assets.about_img} alt='' />
          <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
              <b className='text-gray-800'>Our Story</b>
              <p>Welcome to [Your Store Name], where passion meets innovation. Founded in [Year], [Your Store Name] began as a dream to create a shopping experience that’s both exceptional and accessible. We believe that quality and affordability should go hand in hand, and that's the cornerstone of our business.</p>
              <b className='text-gray-800'>Our Mission</b>
              <p>At [Your Store Name], our mission is to provide you with a wide selection of top-notch products that cater to your every need. Whether you’re looking for the latest fashion trends, cutting-edge tech gadgets, or home essentials, we’ve got you covered. We’re here to make your shopping experience seamless, enjoyable, and unforgettable.</p>
          </div>
      </div>
      
      <div className='text-xl py-4 '>
        <Title text1={'WHY'} text2={'CHOOSE US'}/>
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5 '>
          <b>Curated Selection:</b>
          <p className='text-gray-600'>We handpick every item to ensure it meets our high standards of quality and style.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5 '>
          <b>Customer First:</b>
          <p className='text-gray-600'>Your satisfaction is our priority. We offer excellent customer service and hassle-free returns.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5 '>
          <b>Affordable Prices:</b>
          <p className='text-gray-600'>We work hard to keep our prices competitive without compromising on quality.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5 '>
          <b>Fast Shipping:</b>
          <p className='text-gray-600'>Get your orders quickly with our reliable and efficient delivery service.</p>
        </div>
      </div>

    <NewsletterBox/>
    </div>
  )
}

export default About
