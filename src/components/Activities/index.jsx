import Uno from "/uno.svg"
import Fifa from "/fifa.svg"
import Findtheball from "/findtheball.svg"
import './style.css'

const activities = [
  {
    title: "UNO",
    icon: Uno,
    paragraph: "It' s a fun, fast-paced card game for everyone. The goal is to be the first to get rid of the 7 cards that have been dealt to them."
  },
  {
    title: "FIFA",
    icon: Fifa,
    paragraph: "electronic football game with 2 players, an organizer and a team member."
  },
  {
    title: "Find the ball",
    icon: Findtheball,
    paragraph: "it’s a team game, to win you have to find the ball under the right cup."
  },
]

const Activity = ({ title, icon, paragraph }) => {
  return (
    <div className="flex flex-col gap-6 border transition-all hover:shadow-2xl p-8 rounded-lg shadow-lg md:min-h-[300px] lg:min-h-[340px]">
      <div className='flex items-center justify-between gap-3'>
        <h3 className='uppercase text-third text-md font-bold'>{title}</h3>
        <img src={icon} alt={title} />
      </div>
      <p className="font-bold text-xl">{paragraph}</p>
    </div>
  )
}

const Activities = () => {
  return (
  <section id='activities' className='flex flex-col items-center justify-between gap-4 px-4 py-16 sm:px-20 sm:py-20 2md:px-4'>
      <h2 className='text-main font-black text-3xl sm:text-5xl'>Activities</h2>
      <div className='items-center justify-center pt-16 grid gap-16 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
        {
          activities.map((activity, index) => (
            <Activity key={index} {...activity} />
          ))
        }
      </div>
  </section>
  )
}

export default Activities