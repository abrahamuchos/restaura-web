import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";

import './App.css'
import Dishes from "./components/Dishes.jsx";

function App() {

  return (
    <main className="overflow-hidden text-neutral-200 antialiased">
      <Navbar/>
      <Hero/>
      <Dishes/>


    </main>
  )
}

export default App
