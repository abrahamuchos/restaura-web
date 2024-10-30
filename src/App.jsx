import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Dishes from "./components/Dishes.jsx";
import About from "./components/About.jsx";

import './App.css'
import Mission from "./components/Mission.jsx";
import Expertise from "./components/Expertise.jsx";
import Review from "./components/Review.jsx";

function App() {

  return (
    <main className="overflow-hidden text-neutral-200 antialiased">
      <Navbar/>
      <Hero/>
      <Dishes/>
      <About/>
      <Mission/>
      <Expertise/>
      <Review/>

    </main>
  )
}

export default App
