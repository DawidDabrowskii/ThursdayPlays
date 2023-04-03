import Timer from '../../components/Other/Timer/Timer';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  staggerContainer,
  textContainer,
  textVariant2,
} from '../../utils/motion';

const Home = () => {
  return (
    <main className='w-full  text-white'>
      <div className='h-[60%] w-full lg:w-[80%] mx-auto flex flex-col items-center xl:items-end justify-center mt-32 '>
        <motion.div
          variants={staggerContainer()}
          initial='hidden'
          whileInView='show'
          viewport={{ once: false, amount: 0.25 }}
          className='lg:w-[40%] flex flex-col justify-center items-center'>
          <motion.h2
            variants={textContainer}
            className='text-6xl font-extrabold whitespace-nowrap'>
            {Array.from('Thursday Plays').map((letter, index) => (
              <motion.span variants={textVariant2} key={index}>
                {letter === '' ? '\u00A0' : letter}
              </motion.span>
            ))}
          </motion.h2>
          <p className='p-4 max-[1024px]:w-1/2'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia
            omnis saepe commodi, magnam ex accusantium, distinctio quam
            voluptates veritatis ipsum quisquam sint tempora! Commodi, sunt.
          </p>
        </motion.div>
        <Timer />
        <div className='w-[45%] pt-12 flex gap-6 mt-12 justify-center'>
          <Link
            to='/participate'
            className='bg-primary rounded py-3 px-6  Mont-medium'>
            Participate
          </Link>
          <Link to='/players' className='Mont-medium px-12 py-3'>
            Players
          </Link>
        </div>
      </div>
    </main>
  );
};

export default Home;
