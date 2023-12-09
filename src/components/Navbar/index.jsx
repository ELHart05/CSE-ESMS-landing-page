import { useState } from 'react'
import CloseI from '/xmark.svg'
import OpenI from '/bars.svg'
import './style.css'

const navItemes = [
  {
    name: "Home",
    link: "#"
  },
  {
    name: "About",
    link: "#about"
  },
  {
    name: "Challenges",
    link: "#challenges"
  },
  {
    name: "Activities",
    link: "#activities"
  }
]

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className='relative bg-second px-16 2md:px-4 py-4 text-white flex 2md:flex-row items-center justify-between gap-4'>
      <a className='font-black text-2xl' href="#">LOGO</a>
      <div className={`z-50 flex px-16 2md:p-0 w-[70%] max-w-[280px] 2md:w-fit 2md:max-w-none 2md:flex-row text-center min-h-screen 2md:min-h-fit flex-col bg-black 2md:bg-transparent items-center justify-center gap-4 sm:gap-8 absolute top-0 ${(isOpen) ? 'left-0' : '-left-96'} transition-all 2md:static`}>
        <nav>
          <ul className='flex 2md:flex-row flex-col gap-4 font-bold text-md sm:text-lg'>
            {
              navItemes.map((item, index) => (
                <li className='hover:text-main transition-all' key={index}>
                  <a href={item.link}>{item.name}</a>
                </li>
              ))
            }
          </ul>
        </nav>
        <button className='px-3 py-2 font-bold text-md sm:text-lg md:text-xl rounded-xl bg-main transition-all hover:bg-white hover:text-main'>
          <a href="https://google.com" target='_blank'>
            Register Now
          </a>
        </button>
      </div>
      <button className='flex 2md:hidden h-8 w-8' onClick={() => setIsOpen((prev) => !prev)}>
        <img src={isOpen ? CloseI : OpenI} alt={isOpen ? "Close" : "Bars"} />
      </button>
    </header>
  )
}

export default Navbar