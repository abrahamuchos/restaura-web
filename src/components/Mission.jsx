import { motion } from 'framer-motion';

import missionImg from "../assets/img/mission.jpeg";
import missionVideo from "../assets/img/mission.mp4";
import { MISSION } from "../assets/constants/index.jsx";

export default function Mission() {

  return (
    <section id="mission">
      <div className="container mx-auto text-center">
        <h2 className="mb-8 text-3xl lg:text-4xl">Our Mission</h2>

        <div className="relative flex items-center justify-center">
          <motion.video
            className="w-full rounded-3xl"
            poster={missionImg}
            autoPlay
            muted
            loop
            playsInline
            intial={{opacity: 0}}
            whileInView={{opacity: 1}}
            transition={{duration: 2}}
            viewport={{once: true}}
          >
            <source src={missionVideo} type="video/mp4"/>
          </motion.video>

          <motion.div
            className="absolute h-full w-full rounded-3xl bg-black/40"
            intial={{opacity: 0}}
            whileInView={{opacity: 1}}
            transition={{duration: 1, delay: 0.5}}
            viewport={{once: true}}
          >
          </motion.div>
          <motion.p
            className="absolute max-w-lg tracking-tighter lg:text-3xl"
            intial={{opacity: 0, y: 20}}
            whileInView={{opacity: 1, y: 0}}
            transition={{duration: 1, delay: 1}}
            viewport={{once: true}}
          >
            {MISSION}
          </motion.p>
        </div>
      </div>

    </section>
  );
}