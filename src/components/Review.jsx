import { motion } from 'framer-motion';
import { REVIEW } from "../assets/constants/index.jsx";

import xaviour from "../assets/img/xaviour.jpeg";
import customer1 from "../assets/img/customer1.jpeg"
import customer2 from "../assets/img/customer2.jpeg"
import customer3 from "../assets/img/customer3.jpeg"
import customer4 from "../assets/img/customer4.jpeg"


export default function Review() {
  const containerVariants = {
    hidden: {opacity: 0},
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.8,
      },
    }
  }

  const itemVariants = {
    hidden: {opacity: 0, y: 20},
    show: {
      opacity: 1, y: 0,
      transition: {duration: 0.87}
    },
  }

  return (
    <section id='review' className='container mx-auto mb-8 mt-12 px-4'>
      <motion.div
        className="flex flex-col"
        initial='hidden'
        whileInView='show'
        variants={containerVariants}
        viewport={{once: true}}
      >

        {/*Review text*/}
        <motion.p
          className="mb-10 text-3xl font-light leading-normal tracking-tighter
          lg:mx-40 lg:mt-40 lg:text-[3.5rem]"
          variants={itemVariants}
        >
          {REVIEW.content}
        </motion.p>
        {/*End Review text*/}

        {/*Review Person*/}
        <motion.div
          className="flex items-center justify-center gap-6"
          variants={itemVariants}
        >
          <img src={xaviour} alt={REVIEW.name} className='rounded-full border w-[80px] h-[80px]'/>
          <div className="tracking-tighter">
            <h6>{REVIEW.name}</h6>
            <p className="text-sm text-neutral-500">{REVIEW.profession}</p>
          </div>
        </motion.div>
        {/*End Review Person*/}
      </motion.div>

      {/*Customers photos*/}
      <motion.div
        className="mt-14 flex flex-col items-center justify-center gap-2 md:flex-row"
        initial='hidden'
        whileInView='show'
        variants={itemVariants}
        viewport={{once: true}}
      >
        {[customer1, customer2, customer3, customer4].map((customer, index) => (
          <motion.img
            key={index}
            src={customer}
            alt={`Customer ${index + 1}`}
            className='w-[200px] h-[300px] rounded-br-3xl rounded-tl-3xl object-cover'
            variants={itemVariants}
          />
        ))}
      </motion.div>
      {/*End Customers photos*/}

    </section>
  );
}