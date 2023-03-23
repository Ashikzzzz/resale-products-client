import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

const Category = () => {
    const data = useLoaderData()
    const {category_name}= data
    console.log(data)
  return (
    <div className='grid my-10 lg:ml-40 ml-0 lg:grid-cols-2 grid-cols1'>

     {
        data?.map((d)=>{
            return <div className=''>
                <div class="relative max-w-sm rounded-lg overflow-hidden shadow-md">
            <img class="w-full h-48 object-cover" src={d.picture} alt="Card image"/>
            <div class="absolute inset-1 bg-gradient-to-t from-black to-transparent opacity-80"></div>
            <div class=" inset-3 mb-6 flex items-center justify-center">
              <div class="bg-white rounded-lg p-6 transform hover:-translate-y-2 transition duration-500">
                <h3 class="text-xl font-semibold text-gray-800 mb-2">{d.name}</h3>
                <p class="text-gray-700">Location:{d.location}</p>
                <p class="text-gray-700">Resale Price:{d.resale_price}</p>
                <p class="text-gray-700">Original price:{d.original_price}</p>
                <button className='btn btn-primary'>Book Now</button>
              </div>
             
            </div>
            
          </div>
            </div>
        })
     }
    </div>
  )
}

export default Category