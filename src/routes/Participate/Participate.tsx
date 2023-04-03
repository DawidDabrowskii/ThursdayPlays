import { motion } from 'framer-motion';
import { staggerContainer, fadeIn } from '../../utils/motion';

const Participate = () => {
  return (
    <motion.div
      variants={staggerContainer()}
      initial='hidden'
      whileInView='show'
      viewport={{ once: false, amount: 0.25 }}
      className='w-full mt-24 text-white'>
      <motion.div
        variants={fadeIn('right', 'tween', 0.2, 0.6)}
        className='flex flex-col justify-center max-w-screen-lg mx-auto h-full'>
        <div className='pb-8 flex flex-col items-center'>
          <p className='text-4xl font-bold inline border-b-4 border-white'>
            Contact
          </p>
          <p className='py-6'>Submit the form below to get in touch with us</p>
        </div>
        <div className='flex justify-center items-center'>
          <form
            action='https://getform.io/f/b62c9c68-b2cc-4c9f-a0fc-c69a6b00d365'
            method='POST'
            className='flex flex-col w-1/2'>
            <label className='translate-y-96' htmlFor='name'></label>
            <input
              type='text'
              name='name'
              required
              placeholder='Enter your name'
              className='p-2 bg-transparent border-2 rounded-md focus:outline-none valid:border-green-400 placeholder:text-slate-200'
            />
            <label className='translate-y-96' htmlFor='email'></label>
            <input
              type='type'
              name='email'
              min='3'
              max='28'
              required
              placeholder='Enter your email'
              className='my-4 p-2 bg-transparent border-2 rounded-md focus:outline-none valid:border-green-400 placeholder:text-slate-200'
            />
            <textarea
              name='message'
              placeholder='Enter your message'
              required
              rows={8}
              className='p-2 bg-transparent border-2 rounded-md focus:outline-none valid:border-green-400 placeholder:text-slate-200'></textarea>
            <button className='bg-primary rounded-lg py-3 px-6 Mont-medium my-8 mx-auto flex items-center hover:scale-110 duration-300'>
              Let's talk
            </button>
          </form>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Participate;
