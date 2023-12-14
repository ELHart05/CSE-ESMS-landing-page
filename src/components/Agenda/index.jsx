import reward from '/Prize.svg'
 
const Agenda = () => {
  const challenges = [
    { id: 1, name: 'Challenge 1', time: '9h30-10h30', activity: 'Activity 1 (UNO)' },
    { id: 2, name: 'Challenge 2', time: '10h45-11h45', activity: 'Activity 2 (FIFA)' },
    { id: 3, name: 'Challenge 3', time: '12h00-13h30', activity: 'Activity 3 (Find the ball)' },
    { id: 4, name: 'Challenge 4', time: '13h45-15h15', activity: '' },
  ];
  return (
    <div className="bg-[url('/lineleft.svg')] bg-contain 2lg:pb-0 bg-no-repeat bg-[position:left] flex flex-col items-center  gap-4 px-4 py-16 sm:px-20 sm:py-20 2md:px-4">
    <h2 className='text-main font-black m-16 text-3xl sm:text-5xl'>Agenda</h2>
    <div className='rounded-xl p-2 bg-[#2B2A4C] sm:p-4 sm:rounded-2xl'>
       <div className='text-white text-center font-poppins text-l font-semibold sm:text-2xl'> check-in and openning  </div>
    </div>
    <div className="flex flex-col">
      {challenges.map(challenge => (
        <div key={challenge.id} className=" text-l text-black font-semibold sm:text-lg">
           <div className=" gap-8 flex items-center">
            <p>{challenge.name}</p>
            <p>{challenge.time}</p>
            <p className='mt-16'>{challenge.activity}</p>
          </div>
        </div>
      ))}
    </div>
    <div className='rounded-xl p-2 bg-[#2B2A4C] sm:p-4 sm:rounded-2xl'>
       <div className='text-white text-center font-poppins text-l font-semibold sm:text-2xl'> Lunch break  15h15-16h15  </div>
    </div>
    <div className=" gap-8 flex items-center">
            <p  className=" text-black font-semibold text-l  sm:text-lg"> final activity    (go to ten) </p>
          </div>
    <div className='rounded-xl m-16 p-2 bg-[#2B2A4C] flex justify-center sm:p-4  sm:rounded-2xl'>
       <div className='text-white text-center font-poppins text-l font-semibold sm:text-2xl'>Closing and awards ceremory </div>
       <img className="w-10 h-10" src={reward} alt={'prize'} />
    </div>
   </div>
  )
}
export default Agenda 