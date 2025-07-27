import React from 'react'
import  "./ShopByCategory.css"

const ShopByCategoryCard = () => {
  return (
    <div className='flex gap-3 flex-col justify-center items-center group cursor-pointer'>

        <div className='custom-border w-[150px] h-[150px] lg:w-[249px] lg:h-[249px] rounded-full bg-primary-color'>
            <img className='rounded-full group-hover:scale-95 transition-transform transform-duration-700 object-cover object-top h-full w-full'
            src="https://www.realsimple.com/thmb/LeT2F9b7kvzv3068gzUmwJcpSvw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/farmhouse-kitchen-decor-ideas-modern-kitchen-96645f40ba8b4dbea534b28cf16bc8f2.jpg"
             alt=""/>

        </div>
        <h1>Kitchen Accessories</h1>

    </div>
  )
}

export default ShopByCategoryCard