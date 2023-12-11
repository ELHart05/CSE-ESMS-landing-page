import Navbar from "./components/Navbar"
import Challeges from "./components/Challenges"
import Activities from "./components/Activities"
import Footer from "./components/Footer"
import Hero from "./components/Hero"

//TODO: after coding your template call it here to test it
const App = () => {
  return (
    <main className="font-main">
      <Navbar />
      <Hero/>
      <Challeges />
      <Activities />
      <Footer />
    </main>
  )
}

export default App