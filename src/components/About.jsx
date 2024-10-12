import about from '../assets/img/about.jpeg'
import { ABOUT } from "../assets/constants/index.jsx";

export default function About() {
  return (
    <section id='about' className='container mx-auto mb-8'>
      <h2 className="mb-8 text-center text-3xl tracking-tighter">About Us</h2>

      <div className="flex flex-wrap">
        {/*Image*/}
        <div className="w-full p-4
          md:h-[500px]
          lg:h-auto lg:w-1/2"
        >
          <img src={about}
               alt="about-us"
               className='rounded-3xl w-full h-full
               md:object-cover
               lg:-rotate-3'
          />
        </div>
        {/*End Image*/}

        {/*Content*/}
        <div className="w-full px-2 lg:w-1/2">
          <h2 className='text-4xl tracking-tighter lg:text-6xl'>
            {ABOUT.header}
          </h2>
          <div className="mb-8 mt-1 h-2 w-36 bg-rose-300 lg:-rotate-3"></div>

          <p className="m-8 text-2xl leading-relaxed tracking-tighter lg:max-w-xl">
            {ABOUT.content}
          </p>
        </div>
        {/*End Content*/}

      </div>

    </section>
  );
}