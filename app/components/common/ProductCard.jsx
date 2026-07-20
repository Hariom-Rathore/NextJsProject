import React from 'react'

const ProductCard = () => {
  return (
    
<figure className='bg-white rounded-lg shadow-md p-4'>
    <img src ="https://pinnacle-khaki.vercel.app/mediaFiles/Gallery/sample-flat01/Master-Bedroom.webp"  alt='' className='w-full h-48 object-cover rounded-lg' />

    <h3 className='text-2xl py-3'>Product 1</h3>
    <p className='text-gray-600 mb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate temporibus impedit, asperiores corporis saepe quae expedita molestiae in iure, iste id ullam facilis fugiat rem aliquam fugit sit. In, dolorum?</p>
    <button className='bg-brand text-white px-4 py-2 rounded w-full'>Read More</button>
</figure>

  )
}

export default ProductCard
