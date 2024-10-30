import { motion } from "framer-motion";

import logo from "../assets/img/logo.png"
import video from "../assets/img/hero.mp4"
import hero from "../assets/img/hero.jpeg"

export default function Hero() {
  return (
    <section className="relative flex h-screen items-center justify-center">
      {/*<div className="absolute h-full w-full backdrop-blur-lg z-50"></div>*/}
      <div className="absolute inset-0 -z-20 h-full w-full overflow-hidden">
        <video src={video} className="h-full w-full object-cover" poster={hero} muted autoPlay loop playsInline>
        </video>
      </div>

      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent from-70% to-black">
      </div>
      <div className="relative z-20 flex h-screen flex-col justify-end pb-20">
        <motion.img
          initial={{opacity: 0, y: 50}}
          animate={{opacity: 1, y: 0}}
          transition={{ duration: 2}}
          src={logo}
          alt="restaura"
          className='w-full p-4'
        />
        <p className="p-4 text-lg tracking-tight text-white">Paris</p>
      </div>

    </section>
  );
}