import React, { useState } from 'react'
import { dummyTrailers } from '../assets/assets'
import ReactPlayer from 'react-player'
import BlurCircle from './BlurCircle'
import { PlayCircleIcon } from 'lucide-react'

const TrailersSection = () => {

    const [currentTrailer, setCurrentTrailer] = useState(dummyTrailers[0])

  return (
    <div className='px-6 md:px-16 lg:px-24 xl:px-44 py-20 overflow-hidden'>
      <p className='text-gray-300 font-medium text-lg max-w-[960px] mx-auto'>Trailers</p>

      <div className='relative mt-6'>
        <BlurCircle top='-100px' right='-100px'/>
        <ReactPlayer url={currentTrailer.videoUrl} controls={false} className="mx-auto max-w-full" width="960px" height="540px"/>
      </div>

      <div className='group grid grid-cols-4 gap-4 md:gap-8 mt-8 max-w-3xl mx-auto'>
        {dummyTrailers.map((trailer)=>(
            <div key={trailer.image} className='relative group-hover:not-hover:opacity-50 hover:-translate-y-1 duration-300 transition max-md:h-60 md:max-h-60 cursor-pointer' onClick={()=> setCurrentTrailer(trailer)}>

                <img src={trailer.image} alt="trailer" className='rounded-lg w-full h-full object-cover brightness-75'/>
                <PlayCircleIcon strokeWidth={1.6} className="absolute top-1/2 left-1/2 w-5 md:w-8 h-5 md:h-12 transform -translate-x-1/2 -translate-y-1/2"/>
            </div>
        ))}
      </div>
    </div>
  )
}

export default TrailersSection
// This component displays a section for movie trailers.
// It includes a title, a video player for the currently selected trailer, and a grid of trailer thumbnails.
// Clicking on a thumbnail updates the video player to show the selected trailer.
// The trailers are sourced from a dummy data array, and the video player is implemented using ReactPlayer.
// The component also includes a blur effect in the background for visual enhancement.
// The trailers are displayed in a grid layout, and the selected trailer is highlighted with a play icon overlay.
// The component is styled to be responsive and visually appealing, with hover effects on the trailer thumbnails.
// The video player is set to not show controls, providing a clean viewing experience.
// The component is designed to be used in a larger application, likely as part of a movie or entertainment platform.
// It can be easily integrated into a page or section dedicated to movie trailers, allowing users to browse and watch trailers for various movies.
// The component is reusable and can be adapted to display different sets of trailers by changing the data source.
// It can also be extended with additional features, such as autoplay, volume control, or full-screen mode for the video player.
