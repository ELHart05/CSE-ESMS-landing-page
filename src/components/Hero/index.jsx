import './style.css'
import image from './../../../public/maze.svg'
import map from './../../../public/map.svg'
import calendar from './../../../public/calendar.svg'
//TODO: coding hero section

const Hero = () => {
  return (
    <section id='Hero' className="relative flex items-center justify-between gap-2  sm:px-10 sm:pt-12 2md:px-4">
        <div className='text' >
        <h2 className='text-main font-black text-3xl m-16  sm:text-5xl '>Code 2 Exit </h2>
        <div className="flex items-center">
          <img src={map} alt="First" className="w-auto  h-auto object-cover m-10" />
          <h2 className='font-bold text-md sm:text-xl mt-2'> Exhibition place , Mouhammadia</h2>
        </div>
        <div className="flex items-center">
          <img src={calendar} alt="Second" className="w-auto  h-auto object-cover m-10" />
          <h2 className='font-bold text-md sm:text-xl mt-2'>February 11 , 2025</h2>
        </div>
     </div>
     <div className="image">
         <img src={image}  alt="" className="w-auto h-auto object-cover" />
       </div>
  </section> 
  )
}

export default Hero