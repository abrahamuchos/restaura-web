import { REVIEW } from "../assets/constants/index.jsx";

import xaviour from "../assets/img/xaviour.jpeg";
import customer1 from "../assets/img/customer1.jpeg"
import customer2 from "../assets/img/customer2.jpeg"
import customer3 from "../assets/img/customer3.jpeg"
import customer4 from "../assets/img/customer4.jpeg"


export default function Review() {

  return (
    <section id='review' className='container mx-auto mb-8 mt-12 px-4'>
      <div className="flex flex-col">

        {/*Review text*/}
        <p className="mb-10 text-3xl font-light leading-normal tracking-tighter
          lg:mx-40 lg:mt-40 lg:text-[3.5rem]"
        >
          {REVIEW.content}
        </p>
        {/*End Review text*/}

        {/*Review Person*/}
        <div className="flex items-center justify-center gap-6">
          <img src={xaviour} alt={REVIEW.name} className='rounded-full border w-[80px] h-[80px]'/>
          <div className="tracking-tighter">
            <h6>{REVIEW.name}</h6>
            <p className="text-sm text-neutral-500">{REVIEW.profession}</p>
          </div>
        </div>
        {/*End Review Person*/}
      </div>

      {/*Customers photos*/}
      <div className="mt-14 flex flex-col items-center justify-center gap-2 md:flex-row">
        {[customer1, customer2, customer3, customer4].map((customer, index) => (
          <img key={index}
               src={customer}
               alt={`Customer ${index + 1}`}
               className='w-[200px] h-[300px] rounded-br-3xl rounded-tl-3xl object-cover'
          />
        ))}
      </div>
      {/*End Customers photos*/}

    </section>
  );
}