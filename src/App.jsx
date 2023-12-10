import Navbar from "./components/Navbar"
import Challeges from "./components/Challenges"
import Activities from "./components/Activities"
import Footer from "./components/Footer"

//TODO: after coding your template call it here to test it
const App = () => {
  return (
    <main className="font-main">
      <Navbar />
      <Challeges />
      <Activities />
      <Footer />
    </main>
  )
}

export default App