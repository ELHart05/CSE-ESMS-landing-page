import Insta from "/insta.svg"
import Facebook from "/facebook.svg"
import Youtube from "/youtube.svg"
import Linkedin from "/linkedin.svg"
import Twitter from "/twitter.svg"
import './style.css'

const socialMediaAccounts = [
  {
    icon: Insta,
    link: "https://www.instagram.com/cse.club/"
  },
  {
    icon: Facebook,
    link: "https://web.facebook.com/club.scientifique.esi/"
  },
  {
    icon: Youtube,
    link: "https://www.youtube.com/channel/UCHgeF6ELJW0Pt1vYoAomCig"
  },
  {
    icon: Linkedin,
    link: "https://www.linkedin.com/company/cse-club/"
  },
  {
    icon: Twitter,
    link: "https://twitter.com/CSESI_Club"
  }
]

const Footer = () => {
  return (
    <footer className='flex flex-col md:grid items-center justify-center text-center md:text-left bg-second px-16 2md:px-4 py-16 text-white md:grid-cols-3 gap-4 md:gap-0'>
      <a className='font-black text-2xl sm:text-4xl' href="#">LOGO</a>
      <div className="flex flex-col gap-2 col-span-2">
        <h3 className="font-bold text-3xl">Contact us</h3>
        <h5><span className="font-bold text-2xl">Email :</span> <a href="mailto:cse@esi.dz" target="_blank" className="underline text-2xl">cse@esi.dz</a></h5>
        <div className="flex gap-4 font-bold flex-wrap justify-center text-center md:text-left md:justify-start md:flex-nowrap text-2xl items-center">
          <h6>Social media</h6>
          <ul className="flex items-center gap-2 text-center md:text-left justify-center flex-wrap md:flex-nowrap">
            {
              socialMediaAccounts.map((sm, index) => (
                <li key={index}>
                  <a target="_blank" href={sm.link}>
                    <img src={sm.icon} alt={sm.icon.toString()} className="h-10 w-10 transition-all hover:translate-y-1" />
                  </a>
                </li>
              ))
            }
          </ul>
        </div>
        <div></div>
      </div>
    </footer>
  )
}

export default Footer