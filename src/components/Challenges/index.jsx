import ArrowR from '/arrow-right.svg'
import ArrowL from '/arrow-left.svg'
import { useState } from 'react'
import './style.css'

const Challege = ({ numeration, title, description, currentIndex }) => {
  return (
    <section className='flex items-center justify-start text-center gap-2 flex-col pb-4 2lg:pb-16 transition-all w-full min-w-full max-w-full' style={{transform: `translateX(${-100*currentIndex}%)`}}>
      <h4 className='font-bold text-third text-xl sm:text-2xl flex flex-col items-center justify-center text-center'>
        <span>{numeration}</span>
        <span>{title}</span>
      </h4>
      <p className='font-bold text-md sm:text-xl mt-2'>{description}</p>
    </section>
  )
}

const challenges = [
  {
    numeration: "1st challenge:",
    title: "(back-end dev) : (intermediate level)",
    description: "This challenge gives participants a comprehensive scenario and task that revolves around designing a recipe-sharing app’s home page in light and dark mode. Participants must submit a high-fidelity mockup of the home screen—in both light and dark mode—along with explanations of each design decision."
  },
  {
    numeration: "2nd Challenge:",
    title: "(back-end dev) : (intermediate level)",
    description: "build a system to capture a purchase data from a caller , store the data in the database , if there is a duplicate user update their data instead of adding a new record."
  },
  {
    numeration: "3rd challenge:",
    title: " (front-end dev) : Sortable List Component challenge (advanced level)",
    description: "Sortable List Component with Search Input Box. It' s based on building complex front-end web components. participants can use as many (or as few) tools, libraries, and frameworks as they 'd like. If they ' re trying to learn something new. This might be a great way to push themselves."
  },
  {
    numeration: "4th challenge:",
    title: "(AI) : AI in e-Commerce : (advanced level)",
    description: "Transform the retail and ecommerce landscape with AIdriven tools. Participants can develop recommendation systems, inventory optimization algorithms, or customer behavior analytics tools that help retailers understand and engage their audience better."
  }
]

const Challeges = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <section id='challenges' className="bg-[url('/lineright.svg')] bg-contain py-8 2lg:pb-0 bg-no-repeat bg-[position:right] relative block 2lg:flex items-center justify-between gap-4 px-4 sm:px-20 sm:pt-20 2md:px-4">
      <div className='flex flex-col items-center justify-center gap-2'>
        <h2 className='text-main font-black text-3xl sm:text-5xl'>Challenges</h2>
        <div className='max-w-4xl overflow-hidden flex items-center justify-start text-center w-full 2lg:pb-20 scrollbar-hide'>
          {
            challenges.map((challenge, index) => (
              <Challege {...challenge} currentIndex={currentIndex} key={index} />
            ))
          }
        </div>
      </div>
      <img onClick={() => currentIndex>0 && setCurrentIndex((prev) => --prev)} src={ArrowL} className={`inline-flex 2lg:flex 2lg:-order-1 w-12 aspect-square h-12 cursor-pointer ${(currentIndex <= 0) && 'pointer-events-none opacity-0'} transition-all`} alt="Left Arrow" />
      <img onClick={() => currentIndex<challenges.length-1 && setCurrentIndex((prev) => ++prev)} src={ArrowR} className={`ml-3 2lg:ml-0 inline-flex 2lg:flex w-12 aspect-square h-12 cursor-pointer ${(currentIndex >= challenges.length-1) && 'pointer-events-none opacity-0'} transition-all`} alt="Right Arrow" />
    </section>
  )
}

export default Challeges