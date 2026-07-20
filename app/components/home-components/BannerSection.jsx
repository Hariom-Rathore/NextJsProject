import React from 'react'

export default function BannerSection() {
  return (
   
    <section className='bg-[url("https://pinnacle-khaki.vercel.app/mediaFiles/Amenities/Grand%20Club%20Amenities/Swimming-Pool.webp")] bg-cover bg-center h-[calc(100vh-64px)] w-[100%] mt-16'>

       <div className="max-w-[1280px] mx-auto h-full flex flex-col items-center justify-center gap-6">
      <h1 className="text-4xl text-white text-center">
        Live above all - The pinnacle by <br/> STJ Group , MOhali
      </h1>

      <p className="text-white text-center">
        Standing tall at 36 fllors , The pinnacle offers panormic views,
        futuristic enginnering, and an elite lifestyle in the heart of Mohali's booming urban landscape.
      </p>
<button className="bg-white p-3">Enquire Now</button>

    </div>
    </section>

  )
}


