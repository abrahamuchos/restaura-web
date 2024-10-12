import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Dishes from "./components/Dishes.jsx";
import About from "./components/About.jsx";

import './App.css'

function App() {

  return (
    <main className="overflow-hidden text-neutral-200 antialiased">
      <Navbar/>
      <Hero/>
      <Dishes/>
      <About/>

    </main>
  )
}

export default App
