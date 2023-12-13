import image from '/maze.svg'
import map from '/map.svg'
import calendar from '/calendar.svg'
import './style.css'

const Hero = () => {
  return (
    <section id='Hero' className="relative flex flex-col md:flex-row items-center justify-between gap-2 px-10 py-12 2md:px-4">
      <div className='flex flex-col gap-6 w-full md:w-1/2'>
        <h1 className='text-main font-black text-3xl sm:text-7xl '>Code 2 Exit </h1>
        <div className="flex items-center gap-3">
          <img src={map} alt="First" className="h-10 w-10" />
          <h2 className='font-bold text-md sm:text-2xl mt-2'> Exhibition place , Mouhammadia</h2>
        </div>
        <div className="flex items-center gap-3">
          <img src={calendar} alt="Second" className="h-10 w-10" />
          <h2 className='font-bold text-md sm:text-2xl mt-2'>February 11 , 2025</h2>
        </div>
      </div>
      <div className="image w-full md:w-1/2 mt-10 md:mt-4">
        <img src={image} alt="" className="w-auto h-auto object-cover" />
      </div>
    </section>
  )
}

export default Hero