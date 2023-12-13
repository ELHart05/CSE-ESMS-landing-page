import './style.css'

const About = () => {
  return (
    <section id='activities' className="bg-[url('/lineleft.svg')] bg-contain 2lg:pb-0 bg-no-repeat bg-[position:left] flex flex-col items-center justify-between gap-4 px-4 py-16 sm:px-20 sm:py-20 2md:px-4">
      <h2 className='text-main font-black text-3xl sm:text-5xl'>Activities</h2>
      <div className='font-bold text-xl max-w-4xl overflow-hidden flex items-center justify-start text-center w-full 2lg:pb-20 scrollbar-hide'>
        Code2Exit is a day full of challenges in the field of IT where we will touch on several aspects such as: Front-end dev, Back-End dev, UI/UX and even design with activities that separate these challenges to change serious mode during challenges.
      </div>
  </section>
  )
}

export default About